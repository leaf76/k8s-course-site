import { describe, expect, it } from 'vitest'
import {
  canAudienceControlPresenter,
  createPresentationMessage,
  isFreshPresentationMessage,
  isAllowedPresentationMessageForSender,
  isPresenterBroadcastMessage,
  isPresentationSyncMessage,
  parseControlToken,
  parseSessionId,
  parseViewMode,
  shouldAcceptAudienceControlMessage,
} from './presentation'
import {
  buildCloudflareWebSocketUrl,
  getPresentationSyncCapability,
  getPresentationSyncCapabilityLabel,
  isPresentationTransportActive,
  parsePresentationSyncConfig,
  resolvePresentationTransport,
} from './presentationTransport'

describe('presentation helpers', () => {
  it('parses view, session, and control token from the URL query', () => {
    expect(parseViewMode('?view=presenter')).toBe('presenter')
    expect(parseViewMode('?view=audience')).toBe('audience')
    expect(parseViewMode('?view=unknown')).toBe('single')

    expect(parseSessionId('?session=demo-session')).toBe('demo-session')
    expect(parseSessionId('?session=   ')).toBeNull()

    expect(parseControlToken('?control=demo-control')).toBe('demo-control')
    expect(parseControlToken('?control=   ')).toBeNull()
  })

  it('only enables audience control when audience mode has both session and control token', () => {
    expect(canAudienceControlPresenter('audience', 'demo-session', 'demo-control')).toBe(true)
    expect(canAudienceControlPresenter('audience', 'demo-session', null)).toBe(false)
    expect(canAudienceControlPresenter('presenter', 'demo-session', 'demo-control')).toBe(false)
    expect(canAudienceControlPresenter('single', null, null)).toBe(false)
  })

  it('creates valid presenter and audience sync messages', () => {
    const presenterMessage = createPresentationMessage('SYNC_STATE', 'demo-session', 'lesson1-morning', 2, 'presenter')
    const audienceMessage = createPresentationMessage('SYNC_STATE', 'demo-session', 'lesson1-morning', 2, 'audience', {
      controlToken: 'demo-control',
    })

    expect(isPresentationSyncMessage(presenterMessage)).toBe(true)
    expect(isPresentationSyncMessage(audienceMessage)).toBe(true)
    expect(audienceMessage.controlToken).toBe('demo-control')
  })

  it('only accepts audience control messages with the active control token', () => {
    const validAudienceMessage = createPresentationMessage('SYNC_STATE', 'demo-session', 'lesson1-morning', 3, 'audience', {
      controlToken: 'demo-control',
    })
    const wrongTokenMessage = createPresentationMessage('SYNC_STATE', 'demo-session', 'lesson1-morning', 3, 'audience', {
      controlToken: 'wrong-control',
    })
    const presenterMessage = createPresentationMessage('SYNC_STATE', 'demo-session', 'lesson1-morning', 3, 'presenter')

    expect(shouldAcceptAudienceControlMessage(validAudienceMessage, 'demo-control')).toBe(true)
    expect(shouldAcceptAudienceControlMessage(wrongTokenMessage, 'demo-control')).toBe(false)
    expect(shouldAcceptAudienceControlMessage(presenterMessage, 'demo-control')).toBe(false)
    expect(shouldAcceptAudienceControlMessage(validAudienceMessage, null)).toBe(false)
  })

  it('rejects message types that do not match the sender role', () => {
    const invalidAudienceHeartbeat = createPresentationMessage('HEARTBEAT', 'demo-session', 'lesson1-morning', 0, 'audience')
    const invalidAudienceEndSession = createPresentationMessage('END_SESSION', 'demo-session', 'lesson1-morning', 0, 'audience')
    const invalidPresenterRequestSync = createPresentationMessage('REQUEST_SYNC', 'demo-session', 'lesson1-morning', 0, 'presenter')
    const validPresenterHeartbeat = createPresentationMessage('HEARTBEAT', 'demo-session', 'lesson1-morning', 0, 'presenter')

    expect(isAllowedPresentationMessageForSender(validPresenterHeartbeat)).toBe(true)
    expect(isAllowedPresentationMessageForSender(invalidAudienceHeartbeat)).toBe(false)
    expect(isAllowedPresentationMessageForSender(invalidAudienceEndSession)).toBe(false)
    expect(isAllowedPresentationMessageForSender(invalidPresenterRequestSync)).toBe(false)
    expect(isPresentationSyncMessage(invalidAudienceHeartbeat)).toBe(false)
    expect(isPresenterBroadcastMessage(validPresenterHeartbeat)).toBe(true)
    expect(isPresenterBroadcastMessage(invalidAudienceHeartbeat)).toBe(false)
  })

  it('accepts only fresh messages within the allowed replay window', () => {
    const freshMessage = createPresentationMessage('SYNC_STATE', 'demo-session', 'lesson1-morning', 0, 'presenter')
    const staleMessage = {
      ...freshMessage,
      sentAt: freshMessage.sentAt - 31_000,
    }
    const futureMessage = {
      ...freshMessage,
      sentAt: freshMessage.sentAt + 11_000,
    }

    expect(isFreshPresentationMessage(freshMessage, freshMessage.sentAt + 5_000)).toBe(true)
    expect(isFreshPresentationMessage(staleMessage, freshMessage.sentAt)).toBe(false)
    expect(isFreshPresentationMessage(futureMessage, freshMessage.sentAt)).toBe(false)
  })

  it('parses sync transport config and selects the expected transport', () => {
    expect(parsePresentationSyncConfig({})).toEqual({
      mode: 'auto',
      cloudflareUrl: null,
    })

    expect(parsePresentationSyncConfig({
      VITE_PRESENTATION_SYNC_MODE: 'cloudflare',
      VITE_PRESENTATION_SYNC_URL: ' https://sync.example.com/websocket ',
    })).toEqual({
      mode: 'cloudflare',
      cloudflareUrl: 'https://sync.example.com/websocket',
    })

    expect(resolvePresentationTransport({
      mode: 'auto',
      cloudflareUrl: null,
    })).toBe('broadcast')

    expect(resolvePresentationTransport({
      mode: 'auto',
      cloudflareUrl: 'https://sync.example.com/websocket',
    })).toBe('cloudflare')
  })

  it('builds websocket URLs and reports sync capability labels', () => {
    expect(buildCloudflareWebSocketUrl('https://sync.example.com/websocket', 'demo-session', 'presenter'))
      .toBe('wss://sync.example.com/websocket?session=demo-session&role=presenter')
    expect(buildCloudflareWebSocketUrl('http://localhost:8787/websocket', 'demo-session', 'audience', 'demo-control'))
      .toBe('ws://localhost:8787/websocket?session=demo-session&role=audience&control=demo-control')
    expect(buildCloudflareWebSocketUrl('ftp://invalid.example.com', 'demo-session', 'presenter')).toBeNull()

    expect(isPresentationTransportActive('ready')).toBe(true)
    expect(isPresentationTransportActive('fallback')).toBe(true)
    expect(isPresentationTransportActive('connecting')).toBe(false)

    expect(getPresentationSyncCapability('cloudflare', 'ready')).toBe('cross-browser')
    expect(getPresentationSyncCapability('broadcast', 'fallback')).toBe('same-browser')
    expect(getPresentationSyncCapability(null, 'unsupported')).toBe('unavailable')

    expect(getPresentationSyncCapabilityLabel('cross-browser')).toBe('Cross-browser sync')
    expect(getPresentationSyncCapabilityLabel('same-browser')).toBe('Same-browser only')
  })
})
