import { describe, expect, it } from 'vitest'
import { createPresentationMessage } from '../../../src/types/presentation'
import { PresentationRoom } from './presentationRoom'

function createPeer() {
  const sent: string[] = []
  return {
    peer: {
      send(message: string) {
        sent.push(message)
      },
    },
    sent,
  }
}

function presenterMeta() {
  return {
    senderRole: 'presenter' as const,
    controlToken: null,
  }
}

function audienceMeta(controlToken: string | null = null) {
  return {
    senderRole: 'audience' as const,
    controlToken,
  }
}

describe('PresentationRoom', () => {
  it('broadcasts valid messages to other peers and replays the latest presenter state to new peers', () => {
    const room = new PresentationRoom()
    const presenter = createPeer()
    const audience = createPeer()
    const lateJoiner = createPeer()

    room.addPeer(presenter.peer, presenterMeta())
    room.addPeer(audience.peer, audienceMeta())

    const syncState = JSON.stringify(
      createPresentationMessage('SYNC_STATE', 'demo-session', 'lesson1-morning', 4, 'presenter'),
    )

    expect(room.handleMessage(presenter.peer, syncState)).toBe(true)
    expect(presenter.sent).toEqual([])
    expect(audience.sent).toEqual([syncState])

    room.addPeer(lateJoiner.peer, audienceMeta())
    expect(lateJoiner.sent).toEqual([syncState])
  })

  it('ignores invalid messages without broadcasting them', () => {
    const room = new PresentationRoom()
    const sender = createPeer()
    const receiver = createPeer()

    room.addPeer(sender.peer, audienceMeta())
    room.addPeer(receiver.peer, audienceMeta())

    expect(room.handleMessage(sender.peer, '{"invalid":true}')).toBe(false)
    expect(receiver.sent).toEqual([])
  })

  it('rejects oversized payloads and sender-role mismatches', () => {
    const room = new PresentationRoom()
    const sender = createPeer()
    const receiver = createPeer()

    room.addPeer(sender.peer, audienceMeta())
    room.addPeer(receiver.peer, audienceMeta())

    const invalidAudienceEndSession = JSON.stringify(
      createPresentationMessage('END_SESSION', 'demo-session', 'lesson1-morning', 0, 'audience'),
    )

    expect(room.handleMessage(sender.peer, invalidAudienceEndSession)).toBe(false)
    expect(receiver.sent).toEqual([])

    const oversizedPayload = 'x'.repeat(PresentationRoom.MAX_MESSAGE_BYTES + 1)
    expect(room.handleMessage(sender.peer, oversizedPayload)).toBe(false)
  })

  it('enforces the room peer limit', () => {
    const room = new PresentationRoom()

    for (let index = 0; index < PresentationRoom.MAX_PEERS; index += 1) {
      expect(room.addPeer(createPeer().peer, audienceMeta())).toBe(true)
    }

    expect(room.canAcceptPeer()).toBe(false)
    expect(room.addPeer(createPeer().peer, audienceMeta())).toBe(false)
  })

  it('rejects controller sync from read-only audience connections', () => {
    const room = new PresentationRoom()
    const readOnlyAudience = createPeer()
    const receiver = createPeer()

    room.addPeer(readOnlyAudience.peer, audienceMeta())
    room.addPeer(receiver.peer, presenterMeta())

    const spoofedControlMessage = JSON.stringify(
      createPresentationMessage('SYNC_STATE', 'demo-session', 'lesson1-morning', 2, 'audience', {
        controlToken: 'stolen-control-token',
      }),
    )

    expect(room.handleMessage(readOnlyAudience.peer, spoofedControlMessage)).toBe(false)
    expect(receiver.sent).toEqual([])
  })
})
