// @vitest-environment jsdom

import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react'
import App from './App'
import { usePresentationChannel } from './hooks/usePresentationChannel'

vi.mock('./hooks/usePresentationChannel', () => ({
  usePresentationChannel: vi.fn(),
}))

vi.mock('./components/AudienceView', () => ({
  default: () => <div>Audience View</div>,
}))

vi.mock('./components/PresenterNotesPanel', () => ({
  default: () => <div>Presenter Notes</div>,
}))

let sendMessageMock: ReturnType<typeof vi.fn>
let popupWindow: Window & {
  close: ReturnType<typeof vi.fn>
}

async function startPresenter(): Promise<void> {
  fireEvent.click(screen.getByRole('button', { name: /start presenter \(p\)/i }))

  await waitFor(() => {
    expect(screen.getByRole('button', { name: /end presenter \(p\)/i })).toBeTruthy()
  })
}

function getEndSessionMessages() {
  return sendMessageMock.mock.calls.filter(([message]) => message.type === 'END_SESSION')
}

describe('App presenter end confirmation', () => {
  beforeEach(() => {
    cleanup()
    window.history.replaceState({}, '', '/admin')

    popupWindow = {
      closed: false,
      close: vi.fn(function close() {
        popupWindow.closed = true
      }),
    } as unknown as Window & { close: ReturnType<typeof vi.fn> }

    Object.defineProperty(window, 'matchMedia', {
      configurable: true,
      value: vi.fn().mockImplementation((query: string) => ({
        matches: false,
        media: query,
        onchange: null,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        addListener: vi.fn(),
        removeListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    })

    Object.defineProperty(HTMLElement.prototype, 'scrollTo', {
      configurable: true,
      value: vi.fn(),
    })

    sendMessageMock = vi.fn(() => true)
    vi.mocked(usePresentationChannel).mockReturnValue({
      latestMessage: null,
      transportStatus: 'ready',
      transportKind: 'broadcast',
      transportIssue: null,
      syncCapability: 'same-browser',
      sendMessage: sendMessageMock,
    })

    vi.spyOn(window, 'open').mockImplementation(() => popupWindow)

    let nextId = 0
    vi.spyOn(globalThis.crypto, 'randomUUID').mockImplementation(() => {
      nextId += 1
      return `test-session-${nextId}`
    })
  })

  afterEach(() => {
    vi.restoreAllMocks()
    cleanup()
  })

  it('opens a confirmation dialog before ending presenter mode from the toolbar button', async () => {
    render(<App />)

    await startPresenter()
    const presenterSearch = window.location.search

    fireEvent.click(screen.getByRole('button', { name: /end presenter \(p\)/i }))

    expect(screen.getByRole('dialog', { name: /end presenter session/i })).toBeTruthy()
    expect(screen.getByText(/the audience window will disconnect/i)).toBeTruthy()

    fireEvent.click(screen.getByRole('button', { name: /^cancel$/i }))

    await waitFor(() => {
      expect(screen.queryByRole('dialog', { name: /end presenter session/i })).toBeNull()
    })

    expect(window.location.search).toBe(presenterSearch)
    expect(screen.getByRole('button', { name: /end presenter \(p\)/i })).toBeTruthy()
    expect(getEndSessionMessages()).toHaveLength(0)
    expect(popupWindow.close).not.toHaveBeenCalled()
  })

  it('ends presenter mode only after explicit confirmation', async () => {
    render(<App />)

    await startPresenter()

    fireEvent.click(screen.getByRole('button', { name: /end presenter \(p\)/i }))
    fireEvent.click(screen.getByRole('button', { name: /^end presenter$/i }))

    await waitFor(() => {
      expect(screen.getByRole('button', { name: /start presenter \(p\)/i })).toBeTruthy()
    })

    expect(window.location.search).not.toContain('session=')
    expect(getEndSessionMessages()).toHaveLength(1)
    expect(popupWindow.close).toHaveBeenCalledTimes(1)
  })

  it('uses the same confirmation flow for the presenter keyboard shortcut', async () => {
    render(<App />)

    await startPresenter()

    fireEvent.keyDown(window, { key: 'p' })

    await waitFor(() => {
      expect(screen.getByRole('dialog', { name: /end presenter session/i })).toBeTruthy()
    })
    expect(getEndSessionMessages()).toHaveLength(0)
    expect(screen.getByRole('button', { name: /end presenter \(p\)/i })).toBeTruthy()
  })
})
