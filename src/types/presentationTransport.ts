import type { PresentationSenderRole } from './presentation'

export type PresentationSyncMode = 'auto' | 'broadcast' | 'cloudflare'
export type PresentationTransportKind = 'broadcast' | 'cloudflare'
export type PresentationTransportStatus = 'idle' | 'connecting' | 'ready' | 'fallback' | 'unsupported' | 'error'
export type PresentationSyncCapability = 'cross-browser' | 'same-browser' | 'unavailable'

export interface PresentationSyncConfig {
  mode: PresentationSyncMode
  cloudflareUrl: string | null
}

export function parsePresentationSyncMode(value: string | null | undefined): PresentationSyncMode {
  if (value === 'broadcast' || value === 'cloudflare') {
    return value
  }

  return 'auto'
}

export function parsePresentationSyncConfig(env: Record<string, string | boolean | undefined>): PresentationSyncConfig {
  const rawUrl = env.VITE_PRESENTATION_SYNC_URL
  const normalizedUrl = typeof rawUrl === 'string' ? rawUrl.trim() : ''

  return {
    mode: parsePresentationSyncMode(typeof env.VITE_PRESENTATION_SYNC_MODE === 'string' ? env.VITE_PRESENTATION_SYNC_MODE : undefined),
    cloudflareUrl: normalizedUrl.length > 0 ? normalizedUrl : null,
  }
}

export function resolvePresentationTransport(config: PresentationSyncConfig): PresentationTransportKind {
  if (config.mode === 'broadcast') {
    return 'broadcast'
  }

  if (config.mode === 'cloudflare') {
    return 'cloudflare'
  }

  return config.cloudflareUrl ? 'cloudflare' : 'broadcast'
}

export function shouldUseBroadcastFallback(mode: PresentationSyncMode): boolean {
  return mode === 'auto'
}

export function buildCloudflareWebSocketUrl(
  baseUrl: string,
  sessionId: string,
  senderRole: PresentationSenderRole,
  controlToken?: string | null,
): string | null {
  try {
    const url = new URL(baseUrl)
    if (url.protocol === 'https:') {
      url.protocol = 'wss:'
    } else if (url.protocol === 'http:') {
      url.protocol = 'ws:'
    } else if (url.protocol !== 'ws:' && url.protocol !== 'wss:') {
      return null
    }

    url.searchParams.set('session', sessionId)
    url.searchParams.set('role', senderRole)
    if (controlToken) {
      url.searchParams.set('control', controlToken)
    } else {
      url.searchParams.delete('control')
    }
    return url.toString()
  } catch {
    return null
  }
}

export function isPresentationTransportActive(status: PresentationTransportStatus): boolean {
  return status === 'ready' || status === 'fallback'
}

export function getPresentationSyncCapability(
  transportKind: PresentationTransportKind | null,
  transportStatus: PresentationTransportStatus,
): PresentationSyncCapability {
  if (!transportKind) {
    return 'unavailable'
  }

  if (transportStatus === 'idle' || transportStatus === 'unsupported' || transportStatus === 'error') {
    return 'unavailable'
  }

  return transportKind === 'cloudflare' ? 'cross-browser' : 'same-browser'
}

export function getPresentationSyncCapabilityLabel(capability: PresentationSyncCapability): string {
  if (capability === 'cross-browser') {
    return 'Cross-browser sync'
  }

  if (capability === 'same-browser') {
    return 'Same-browser only'
  }

  return 'Sync unavailable'
}
