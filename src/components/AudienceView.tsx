import type { Slide } from '../slides/lesson1-morning/index'

type AudienceConnectionState = 'loading' | 'connected' | 'disconnected' | 'missing-session' | 'unsupported'

interface AudienceViewProps {
  lessonLabel: string
  lessonTitle: string
  slide: Slide | null
  loading: boolean
  connectionState: AudienceConnectionState
  controlsEnabled: boolean
  currentSlide: number
  totalSlides: number
  onPrev: () => void
  onNext: () => void
}

function getConnectionLabel(state: AudienceConnectionState): string {
  if (state === 'connected') {
    return 'Connected'
  }
  if (state === 'loading') {
    return 'Connecting'
  }
  if (state === 'disconnected') {
    return 'Disconnected'
  }
  if (state === 'unsupported') {
    return 'Unsupported browser'
  }
  return 'Session missing'
}

function getAudienceStatusBadge(
  connectionState: AudienceConnectionState,
  controlsEnabled: boolean,
): { label: string, className: string } | null {
  if (connectionState === 'connected') {
    if (!controlsEnabled) {
      return {
        label: 'Read-only',
        className: 'bg-slate-900/80 text-slate-300 border-slate-700/80',
      }
    }
    return null
  }

  if (connectionState === 'disconnected') {
    return {
      label: 'Disconnected',
      className: 'bg-red-900/70 text-red-200 border-red-700/80',
    }
  }

  return {
    label: getConnectionLabel(connectionState),
    className: 'bg-amber-900/70 text-amber-200 border-amber-700/80',
  }
}

export default function AudienceView({
  lessonLabel,
  lessonTitle,
  slide,
  loading,
  connectionState,
  controlsEnabled,
  currentSlide,
  totalSlides,
  onPrev,
  onNext,
}: AudienceViewProps) {
  const showWaitingState = loading || connectionState === 'loading'
  const showError = connectionState === 'missing-session' || connectionState === 'unsupported'
  const statusBadge = getAudienceStatusBadge(connectionState, controlsEnabled)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="fixed top-4 left-4 right-4 flex items-start justify-between z-20 pointer-events-none gap-4">
        <div className="bg-slate-900/80 border border-slate-700/60 rounded-lg px-3 py-1.5 text-xs text-slate-300">
          {lessonLabel} · {lessonTitle}
        </div>
        {statusBadge && (
          <div
            className={`rounded-lg px-3 py-1.5 text-xs border ${statusBadge.className}`}
          >
            {statusBadge.label}
          </div>
        )}
      </div>

      <div className="min-h-screen flex items-center justify-center p-6 md:p-10">
        {showWaitingState && (
          <div className="text-center max-w-xl">
            <div className="text-5xl mb-3 animate-pulse">⏳</div>
            <h1 className="text-2xl md:text-3xl font-semibold">Waiting for presenter sync</h1>
            <p className="text-slate-300 mt-2">This view will update automatically once the presenter starts.</p>
          </div>
        )}

        {!showWaitingState && showError && (
          <div className="text-center max-w-xl">
            <div className="text-5xl mb-3">⚠️</div>
            <h1 className="text-2xl md:text-3xl font-semibold">Audience view is unavailable</h1>
            <p className="text-slate-300 mt-2">
              {connectionState === 'missing-session'
                ? 'No active session was provided.'
                : 'Presenter sync is unavailable for the current mode.'}
            </p>
          </div>
        )}

        {!showWaitingState && !showError && !slide && (
          <div className="text-center max-w-xl">
            <div className="text-5xl mb-3">🗂️</div>
            <h1 className="text-2xl md:text-3xl font-semibold">No slide content</h1>
            <p className="text-slate-300 mt-2">The presenter has not selected a valid slide yet.</p>
          </div>
        )}

        {!showWaitingState && !showError && slide && (
          <div className="max-w-6xl w-full">
            {slide.section && (
              <div className="text-blue-400 text-lg md:text-xl font-semibold mb-3 tracking-wider uppercase">
                {slide.section}
              </div>
            )}

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
              {slide.title}
            </h1>

            {slide.subtitle && (
              <h2 className="text-2xl md:text-4xl text-slate-300 mb-10">
                {slide.subtitle}
              </h2>
            )}

            <div className="text-2xl md:text-3xl text-slate-200 space-y-5
              [&_p]:text-2xl [&_li]:text-2xl [&_span]:text-2xl
              [&_code]:text-xl [&_pre]:text-xl
              [&_.text-xs]:!text-lg [&_.text-sm]:!text-xl [&_.text-base]:!text-2xl">
              {slide.content}
            </div>

            {slide.code && (
              <pre className="mt-8 bg-slate-900/80 p-6 rounded-xl overflow-x-auto text-xl border border-slate-700 shadow-inner">
                <code className="text-green-400 font-mono">{slide.code}</code>
              </pre>
            )}
          </div>
        )}
      </div>

      {/* Navigation buttons */}
      {!showWaitingState && !showError && totalSlides > 0 && (
        <div className="fixed bottom-6 left-0 right-0 flex items-center justify-center gap-4 z-20">
          <button
            onClick={onPrev}
            disabled={!controlsEnabled || currentSlide <= 0}
            className="px-5 py-2.5 rounded-lg text-sm font-medium transition-all
              bg-slate-800/80 border border-slate-600/60 text-slate-200
              hover:bg-slate-700/80 hover:border-slate-500
              disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-slate-800/80"
          >
            ← Prev
          </button>
          <span className="text-slate-400 text-sm tabular-nums min-w-[80px] text-center">
            {currentSlide + 1} / {totalSlides}
          </span>
          <button
            onClick={onNext}
            disabled={!controlsEnabled || currentSlide >= totalSlides - 1}
            className="px-5 py-2.5 rounded-lg text-sm font-medium transition-all
              bg-slate-800/80 border border-slate-600/60 text-slate-200
              hover:bg-slate-700/80 hover:border-slate-500
              disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-slate-800/80"
          >
            Next →
          </button>
        </div>
      )}
    </div>
  )
}
