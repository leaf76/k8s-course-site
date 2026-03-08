import {
  isAllowedPresentationMessageForSender,
  isFreshPresentationMessage,
  isPresentationSyncMessage,
  type PresentationSenderRole,
} from '../../../src/types/presentation'

export interface PresentationRoomPeer {
  send: (message: string) => void
}

export interface PresentationRoomPeerMetadata {
  senderRole: PresentationSenderRole
  controlToken: string | null
}

export class PresentationRoom {
  static readonly MAX_MESSAGE_BYTES = 8_192
  static readonly MAX_PEERS = 32
  private readonly peers = new Map<PresentationRoomPeer, PresentationRoomPeerMetadata>()
  private lastPresenterState: string | null = null

  restorePeer(peer: PresentationRoomPeer, metadata: PresentationRoomPeerMetadata): void {
    this.peers.set(peer, metadata)
  }

  canAcceptPeer(): boolean {
    return this.peers.size < PresentationRoom.MAX_PEERS
  }

  addPeer(peer: PresentationRoomPeer, metadata: PresentationRoomPeerMetadata): boolean {
    if (!this.canAcceptPeer()) {
      return false
    }

    this.peers.set(peer, metadata)

    if (this.lastPresenterState) {
      peer.send(this.lastPresenterState)
    }

    return true
  }

  removePeer(peer: PresentationRoomPeer): void {
    this.peers.delete(peer)
  }

  handleMessage(sender: PresentationRoomPeer, rawMessage: string): boolean {
    if (new TextEncoder().encode(rawMessage).byteLength > PresentationRoom.MAX_MESSAGE_BYTES) {
      return false
    }

    try {
      const payload: unknown = JSON.parse(rawMessage)
      if (!isPresentationSyncMessage(payload) || !isAllowedPresentationMessageForSender(payload)) {
        return false
      }

      if (!isFreshPresentationMessage(payload)) {
        return false
      }

      const senderMetadata = this.peers.get(sender)
      if (!senderMetadata || payload.senderRole !== senderMetadata.senderRole) {
        return false
      }

      if (
        payload.senderRole === 'audience' &&
        payload.type === 'SYNC_STATE' &&
        (!senderMetadata.controlToken || payload.controlToken !== senderMetadata.controlToken)
      ) {
        return false
      }

      if (payload.type === 'SYNC_STATE' && payload.senderRole === 'presenter') {
        this.lastPresenterState = rawMessage
      }

      for (const peer of this.peers.keys()) {
        if (peer !== sender) {
          peer.send(rawMessage)
        }
      }

      return true
    } catch {
      return false
    }
  }
}
