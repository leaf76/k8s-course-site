import { DurableObject } from 'cloudflare:workers'
import { PresentationRoom } from './presentationRoom'
import type { PresentationSenderRole } from '../../../src/types/presentation'

export interface Env {
  PRESENTATION_ROOM: DurableObjectNamespace<PresentationRoomDurableObject>
  ALLOWED_ORIGINS?: string
}

interface ConnectionAttachment {
  senderRole: PresentationSenderRole
  controlToken: string | null
}

function isWebSocketUpgradeRequest(request: Request): boolean {
  return request.method === 'GET' && request.headers.get('Upgrade')?.toLowerCase() === 'websocket'
}

function parseSessionId(request: Request): string | null {
  const rawSessionId = new URL(request.url).searchParams.get('session')
  if (!rawSessionId) {
    return null
  }

  const sessionId = rawSessionId.trim()
  if (!/^[A-Za-z0-9:_-]{1,128}$/.test(sessionId)) {
    return null
  }

  return sessionId
}

function parseSenderRole(request: Request): PresentationSenderRole | null {
  const role = new URL(request.url).searchParams.get('role')
  if (role === 'presenter' || role === 'audience') {
    return role
  }

  return null
}

function parseControlToken(request: Request): string | null {
  const rawControlToken = new URL(request.url).searchParams.get('control')
  if (!rawControlToken) {
    return null
  }

  const controlToken = rawControlToken.trim()
  if (!/^[A-Za-z0-9-]{1,128}$/.test(controlToken)) {
    return null
  }

  return controlToken
}

function parseAllowedOrigins(env: Env): Set<string> {
  if (!env.ALLOWED_ORIGINS) {
    return new Set()
  }

  return new Set(
    env.ALLOWED_ORIGINS
      .split(',')
      .map((origin) => origin.trim())
      .filter((origin) => origin.length > 0),
  )
}

function isAllowedOrigin(request: Request, allowedOrigins: Set<string>): boolean {
  if (allowedOrigins.size === 0) {
    return true
  }

  const origin = request.headers.get('Origin')
  if (!origin) {
    return false
  }

  return allowedOrigins.has(origin)
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url)
    const allowedOrigins = parseAllowedOrigins(env)

    if (url.pathname === '/health') {
      return new Response('ok', { status: 200 })
    }

    if (url.pathname !== '/websocket') {
      return new Response('Use /websocket?session=<id> for presenter sync.', { status: 404 })
    }

    if (!isWebSocketUpgradeRequest(request)) {
      return new Response('Expected Upgrade: websocket', { status: 426 })
    }

    if (!isAllowedOrigin(request, allowedOrigins)) {
      return new Response('Origin not allowed.', { status: 403 })
    }

    const sessionId = parseSessionId(request)
    if (!sessionId) {
      return new Response('Missing or invalid session id.', { status: 400 })
    }

    const senderRole = parseSenderRole(request)
    if (!senderRole) {
      return new Response('Missing or invalid sender role.', { status: 400 })
    }

    const roomId = env.PRESENTATION_ROOM.idFromName(sessionId)
    return env.PRESENTATION_ROOM.get(roomId).fetch(request)
  },
} satisfies ExportedHandler<Env>

export class PresentationRoomDurableObject extends DurableObject<Env> {
  private readonly room = new PresentationRoom()

  constructor(ctx: DurableObjectState, env: Env) {
    super(ctx, env)

    for (const socket of this.ctx.getWebSockets()) {
      const attachment = socket.deserializeAttachment() as ConnectionAttachment | null
      if (!attachment || (attachment.senderRole !== 'presenter' && attachment.senderRole !== 'audience')) {
        socket.close(1008, 'Invalid session metadata')
        continue
      }

      this.room.restorePeer(socket, attachment)
    }
  }

  async fetch(request: Request): Promise<Response> {
    if (!isWebSocketUpgradeRequest(request)) {
      return new Response('Expected Upgrade: websocket', { status: 426 })
    }

    if (!this.room.canAcceptPeer()) {
      return new Response('Presentation room is full.', { status: 429 })
    }

    const senderRole = parseSenderRole(request)
    if (!senderRole) {
      return new Response('Missing or invalid sender role.', { status: 400 })
    }

    const controlToken = parseControlToken(request)
    if (senderRole === 'audience' && new URL(request.url).searchParams.has('control') && !controlToken) {
      return new Response('Invalid control token.', { status: 400 })
    }

    const webSocketPair = new WebSocketPair()
    const [client, server] = Object.values(webSocketPair)

    this.ctx.acceptWebSocket(server)
    server.serializeAttachment({
      senderRole,
      controlToken,
    } satisfies ConnectionAttachment)
    this.room.addPeer(server, { senderRole, controlToken })

    return new Response(null, {
      status: 101,
      webSocket: client,
    })
  }

  async webSocketMessage(ws: WebSocket, message: string | ArrayBuffer): Promise<void> {
    if (typeof message !== 'string') {
      console.warn('Ignoring non-text presentation sync payload.')
      return
    }

    const accepted = this.room.handleMessage(ws, message)
    if (!accepted) {
      console.warn('Ignoring invalid presentation sync payload.')
    }
  }

  async webSocketClose(ws: WebSocket, code: number, reason: string): Promise<void> {
    this.room.removePeer(ws)
    ws.close(code, reason)
  }

  async webSocketError(ws: WebSocket, error: unknown): Promise<void> {
    console.error('Presentation room websocket error.', error)
    this.room.removePeer(ws)
    ws.close(1011, 'WebSocket error')
  }
}
