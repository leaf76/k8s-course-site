export type ViewMode = 'presenter' | 'audience' | 'single'
export type PresentationSenderRole = 'presenter' | 'audience'
export const MAX_PRESENTATION_MESSAGE_AGE_MS = 30_000
export const MAX_PRESENTATION_MESSAGE_FUTURE_SKEW_MS = 10_000

export type PresentationMessageType = 'SYNC_STATE' | 'REQUEST_SYNC' | 'HEARTBEAT' | 'END_SESSION'

export interface PresentationSyncMessage {
  type: PresentationMessageType
  sessionId: string
  lessonId: string
  slideIndex: number
  senderRole: PresentationSenderRole
  controlToken?: string
  sentAt: number
}

const messageTypes: PresentationMessageType[] = ['SYNC_STATE', 'REQUEST_SYNC', 'HEARTBEAT', 'END_SESSION']
const senderRoles: PresentationSenderRole[] = ['presenter', 'audience']
const presenterMessageTypes: PresentationMessageType[] = ['SYNC_STATE', 'HEARTBEAT', 'END_SESSION']
const audienceMessageTypes: PresentationMessageType[] = ['SYNC_STATE', 'REQUEST_SYNC']

function isPresentationMessageType(value: unknown): value is PresentationMessageType {
  return typeof value === 'string' && messageTypes.includes(value as PresentationMessageType)
}

function isPresentationSenderRole(value: unknown): value is PresentationSenderRole {
  return typeof value === 'string' && senderRoles.includes(value as PresentationSenderRole)
}

export function parseViewMode(search: string): ViewMode {
  const view = new URLSearchParams(search).get('view')
  if (view === 'presenter' || view === 'audience') {
    return view
  }
  return 'single'
}

export function parseSessionId(search: string): string | null {
  const raw = new URLSearchParams(search).get('session')
  if (!raw) {
    return null
  }

  const sessionId = raw.trim()
  return sessionId.length > 0 ? sessionId : null
}

export function parseControlToken(search: string): string | null {
  const raw = new URLSearchParams(search).get('control')
  if (!raw) {
    return null
  }

  const controlToken = raw.trim()
  return controlToken.length > 0 ? controlToken : null
}

export function buildPresentationChannelName(sessionId: string): string {
  return `k8s-course-presenter:${sessionId}`
}

export function createPresentationMessage(
  type: PresentationMessageType,
  sessionId: string,
  lessonId: string,
  slideIndex: number,
  senderRole: PresentationSenderRole,
  options?: { controlToken?: string | null },
): PresentationSyncMessage {
  const message: PresentationSyncMessage = {
    type,
    sessionId,
    lessonId,
    slideIndex,
    senderRole,
    sentAt: Date.now(),
  }

  if (options?.controlToken) {
    message.controlToken = options.controlToken
  }

  return message
}

export function canAudienceControlPresenter(
  viewMode: ViewMode,
  sessionId: string | null,
  controlToken: string | null,
): boolean {
  return viewMode === 'audience' && Boolean(sessionId) && Boolean(controlToken)
}

export function shouldAcceptAudienceControlMessage(
  message: PresentationSyncMessage,
  activeControlToken: string | null,
): boolean {
  return (
    message.type === 'SYNC_STATE' &&
    message.senderRole === 'audience' &&
    Boolean(activeControlToken) &&
    message.controlToken === activeControlToken
  )
}

export function isAllowedPresentationMessageForSender(message: PresentationSyncMessage): boolean {
  if (message.senderRole === 'presenter') {
    return presenterMessageTypes.includes(message.type)
  }

  return audienceMessageTypes.includes(message.type)
}

export function isPresenterBroadcastMessage(message: PresentationSyncMessage): boolean {
  return message.senderRole === 'presenter' && presenterMessageTypes.includes(message.type)
}

export function isFreshPresentationMessage(message: PresentationSyncMessage, now = Date.now()): boolean {
  const messageAge = now - message.sentAt
  return messageAge >= -MAX_PRESENTATION_MESSAGE_FUTURE_SKEW_MS && messageAge <= MAX_PRESENTATION_MESSAGE_AGE_MS
}

export function isPresentationSyncMessage(value: unknown): value is PresentationSyncMessage {
  if (typeof value !== 'object' || value === null) {
    return false
  }

  const record = value as Record<string, unknown>
  const isStructurallyValid = (
    isPresentationMessageType(record.type) &&
    typeof record.sessionId === 'string' &&
    record.sessionId.length > 0 &&
    typeof record.lessonId === 'string' &&
    record.lessonId.length > 0 &&
    typeof record.slideIndex === 'number' &&
    Number.isInteger(record.slideIndex) &&
    record.slideIndex >= 0 &&
    isPresentationSenderRole(record.senderRole) &&
    (record.controlToken === undefined || (typeof record.controlToken === 'string' && record.controlToken.length > 0)) &&
    typeof record.sentAt === 'number' &&
    Number.isFinite(record.sentAt)
  )

  if (!isStructurallyValid) {
    return false
  }

  return isAllowedPresentationMessageForSender(record as unknown as PresentationSyncMessage)
}
