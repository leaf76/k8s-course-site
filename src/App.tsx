import { useState, useEffect, useCallback, useMemo, useRef } from 'react'
import { slides as lesson1MorningSlides } from './slides/lesson1-morning/index'
import type { Slide } from './slides/lesson1-morning/index'
import AudienceView from './components/AudienceView'
import { usePresentationChannel } from './hooks/usePresentationChannel'
import {
  buildAudienceViewUrl,
  canAudienceControlPresenter,
  createPresentationMessage,
  isPresenterBroadcastMessage,
  parseControlToken,
  parseSessionId,
  parseViewMode,
  shouldAcceptAudienceControlMessage,
  type AudienceLinkAccessMode,
  type ViewMode,
} from './types/presentation'
import {
  getPresentationSyncCapabilityLabel,
  isPresentationTransportActive,
} from './types/presentationTransport'
import {
  buildFocusedOutlineState,
  buildSectionKey,
  buildSections,
  expandLessonInOutline,
  isCurrentSection,
  revealDayInOutline,
  shouldShowSidebar,
  type SectionEntry,
} from './sidebarOutline'

// 課程列表
const LESSONS = [
  {
    id: 'lesson1-morning',
    label: '第一堂 早上',
    title: 'Linux 操作入門',
    time: '09:00–12:00',
    day: '第一天',
    getSlides: () => Promise.resolve(lesson1MorningSlides),
  },
  {
    id: 'lesson1-afternoon',
    label: '第一堂 下午',
    title: 'Linux 基本操作',
    time: '13:00–16:00',
    day: '第一天',
    getSlides: async () => {
      try { const m = await import('./slides/lesson1-afternoon/index'); return m.slides }
      catch { return [{ title: '準備中...', subtitle: '內容建立中', notes: '', duration: '1' }] }
    },
  },
  {
    id: 'lesson2-morning',
    label: '第二堂 早上',
    title: 'Docker 基礎：概念、架構與安裝',
    time: '09:00–12:00',
    day: '第二天',
    getSlides: async () => {
      try { const m = await import('./slides/lesson2-morning/index'); return m.slides }
      catch { return [{ title: '準備中...', subtitle: '內容建立中', notes: '', duration: '1' }] }
    },
  },
  {
    id: 'lesson2-afternoon',
    label: '第二堂 下午',
    title: 'Docker 實作與進階：指令、Nginx、映像、生命週期、網路到 Dockerfile',
    time: '13:00–17:00',
    day: '第二天',
    getSlides: async () => {
      try { const m = await import('./slides/lesson2-afternoon/index'); return m.slides }
      catch { return [{ title: '準備中...', subtitle: '內容建立中', notes: '', duration: '1' }] }
    },
  },
  {
    id: 'lesson3-morning',
    label: '第三堂 早上',
    title: '容器進階操作',
    time: '09:00–12:00',
    day: '第三天',
    getSlides: async () => {
      try { const m = await import('./slides/lesson3-morning/index'); return m.slides }
      catch { return [{ title: '準備中...', subtitle: '內容建立中', notes: '', duration: '1' }] }
    },
  },
  {
    id: 'lesson3-afternoon',
    label: '第三堂 下午',
    title: '容器資料管理',
    time: '13:00–17:00',
    day: '第三天',
    getSlides: async () => {
      try { const m = await import('./slides/lesson3-afternoon/index'); return m.slides }
      catch { return [{ title: '準備中...', subtitle: '內容建立中', notes: '', duration: '1' }] }
    },
  },
  {
    id: 'lesson4-morning',
    label: '第四堂 早上',
    title: 'Kubernetes 架構',
    time: '09:00–12:00',
    day: '第四天',
    getSlides: async () => {
      try { const m = await import('./slides/lesson4-morning/index'); return m.slides }
      catch { return [{ title: '準備中...', subtitle: '內容建立中', notes: '', duration: '1' }] }
    },
  },
  {
    id: 'lesson4-afternoon',
    label: '第四堂 下午',
    title: 'K8s 基本操作',
    time: '13:00–17:00',
    day: '第四天',
    getSlides: async () => {
      try { const m = await import('./slides/lesson4-afternoon/index'); return m.slides }
      catch { return [{ title: '準備中...', subtitle: '內容建立中', notes: '', duration: '1' }] }
    },
  },
  {
    id: 'lesson5-morning',
    label: '第五堂 早上',
    title: '工作負載管理',
    time: '09:00–12:00',
    day: '第五天',
    getSlides: async () => {
      try { const m = await import('./slides/lesson5-morning/index'); return m.slides }
      catch { return [{ title: '準備中...', subtitle: '內容建立中', notes: '', duration: '1' }] }
    },
  },
  {
    id: 'lesson5-afternoon',
    label: '第五堂 下午',
    title: '服務暴露',
    time: '13:00–17:00',
    day: '第五天',
    getSlides: async () => {
      try { const m = await import('./slides/lesson5-afternoon/index'); return m.slides }
      catch { return [{ title: '準備中...', subtitle: '內容建立中', notes: '', duration: '1' }] }
    },
  },
  {
    id: 'lesson6-morning',
    label: '第六堂 早上',
    title: '組態管理',
    time: '09:00–12:00',
    day: '第六天',
    getSlides: async () => {
      try { const m = await import('./slides/lesson6-morning/index'); return m.slides }
      catch { return [{ title: '準備中...', subtitle: '內容建立中', notes: '', duration: '1' }] }
    },
  },
  {
    id: 'lesson6-afternoon',
    label: '第六堂 下午',
    title: '資料儲存',
    time: '13:00–17:00',
    day: '第六天',
    getSlides: async () => {
      try { const m = await import('./slides/lesson6-afternoon/index'); return m.slides }
      catch { return [{ title: '準備中...', subtitle: '內容建立中', notes: '', duration: '1' }] }
    },
  },
  {
    id: 'lesson7-morning',
    label: '第七堂 早上',
    title: '安全與監控',
    time: '09:00–12:00',
    day: '第七天',
    getSlides: async () => {
      try { const m = await import('./slides/lesson7-morning/index'); return m.slides }
      catch { return [{ title: '準備中...', subtitle: '內容建立中', notes: '', duration: '1' }] }
    },
  },
  {
    id: 'lesson7-afternoon',
    label: '第七堂 下午',
    title: '實戰演練與課程總結',
    time: '13:00–17:00',
    day: '第七天',
    getSlides: async () => {
      try { const m = await import('./slides/lesson7-afternoon/index'); return m.slides }
      catch { return [{ title: '準備中...', subtitle: '內容建立中', notes: '', duration: '1' }] }
    },
  },
]

// 從 URL hash 取得初始課程 index
function getLessonIndexFromHash(): number {
  const hash = window.location.hash.replace('#', '')
  const idx = LESSONS.findIndex(l => l.id === hash)
  return idx >= 0 ? idx : 0
}

function createSessionId(): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID()
  }
  return `session-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`
}

function buildAudienceUrl(
  sessionId: string,
  lessonId: string,
  options?: { accessMode?: AudienceLinkAccessMode, controlToken?: string | null },
): string {
  return buildAudienceViewUrl(window.location.href, sessionId, lessonId, options)
}

function buildPresenterControlStorageKey(sessionId: string): string {
  return `k8s-course-presenter-control:${sessionId}`
}

function readPresenterControlToken(sessionId: string | null): string | null {
  if (!sessionId || typeof window === 'undefined') {
    return null
  }

  try {
    const token = window.sessionStorage.getItem(buildPresenterControlStorageKey(sessionId))
    return token && token.trim().length > 0 ? token : null
  } catch {
    return null
  }
}

function persistPresenterControlToken(sessionId: string, controlToken: string): void {
  if (typeof window === 'undefined') {
    return
  }

  try {
    window.sessionStorage.setItem(buildPresenterControlStorageKey(sessionId), controlToken)
  } catch {
    // Ignore storage failures and keep the URL token as fallback.
  }
}

function clearPresenterControlToken(sessionId: string | null): void {
  if (!sessionId || typeof window === 'undefined') {
    return
  }

  try {
    window.sessionStorage.removeItem(buildPresenterControlStorageKey(sessionId))
  } catch {
    // Ignore storage failures on cleanup.
  }
}

function isAdminPath(): boolean {
  const path = window.location.pathname
  const redirectedPath = new URLSearchParams(window.location.search).get('p') || ''
  return path.includes('/admin') || redirectedPath.includes('/admin')
}

const FALLBACK_ERROR_SLIDE: Slide = {
  title: 'Load failed',
  subtitle: 'Unable to load lesson',
  notes: '',
  duration: '1',
}

const MOBILE_BREAKPOINT = 768
const SLIDE_RAIL_VISIBLE_COUNT = 11

function App() {
  const initialLessonIndex = getLessonIndexFromHash()
  const [isAdmin] = useState(isAdminPath)
  const [viewMode, setViewMode] = useState<ViewMode>(() => parseViewMode(window.location.search))
  const [sessionId, setSessionId] = useState<string | null>(() => parseSessionId(window.location.search))
  const [controlToken, setControlToken] = useState<string | null>(() => {
    const urlControlToken = parseControlToken(window.location.search)
    if (urlControlToken) {
      return urlControlToken
    }

    const initialViewMode = parseViewMode(window.location.search)
    const initialSessionId = parseSessionId(window.location.search)
    if (initialViewMode === 'presenter') {
      return readPresenterControlToken(initialSessionId)
    }

    return null
  })
  const [currentLesson, setCurrentLesson] = useState(initialLessonIndex)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [showNotes, setShowNotes] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth >= MOBILE_BREAKPOINT)
  const [isMobileViewport, setIsMobileViewport] = useState(() => window.innerWidth < MOBILE_BREAKPOINT)
  const [showQA, setShowQA] = useState(false)
  const [collapsedDays, setCollapsedDays] = useState<Set<string>>(new Set())
  const [expandedLessons, setExpandedLessons] = useState<Set<string>>(() => new Set([LESSONS[initialLessonIndex].id]))
  const [expandedSectionsByLesson, setExpandedSectionsByLesson] = useState<Record<string, Set<string>>>({})
  const [outlineExpandingAll, setOutlineExpandingAll] = useState(false)
  const [lessonSectionStates, setLessonSectionStates] = useState<Record<string, {
    status: 'idle' | 'loading' | 'ready' | 'error'
    sections: SectionEntry[]
  }>>({})
  const [slides, setSlides] = useState<Slide[]>(lesson1MorningSlides)
  const [loading, setLoading] = useState(false)
  const [presenterSyncStatus, setPresenterSyncStatus] = useState<'idle' | 'connecting' | 'connected' | 'disconnected' | 'unsupported'>('idle')
  const [audienceConnectionState, setAudienceConnectionState] = useState<'loading' | 'connected' | 'disconnected' | 'missing-session' | 'unsupported'>(
    viewMode === 'audience' && !sessionId ? 'missing-session' : 'loading',
  )
  const [presenterError, setPresenterError] = useState<string | null>(null)
  const [manualAudienceUrl, setManualAudienceUrl] = useState<string | null>(null)
  const [copyAudienceUrlState, setCopyAudienceUrlState] = useState<'idle' | 'copied' | 'error'>('idle')
  const [isShareModalOpen, setIsShareModalOpen] = useState(false)
  const [sharePermissionMode, setSharePermissionMode] = useState<AudienceLinkAccessMode>('read-only')
  const [showPresenterNotesScrollHint, setShowPresenterNotesScrollHint] = useState(false)
  const [sessionStartedAt, setSessionStartedAt] = useState<number | null>(null)
  const [clockTick, setClockTick] = useState(() => Date.now())
  const [timerPaused, setTimerPaused] = useState(false)
  const [pausedElapsed, setPausedElapsed] = useState(0)
  const audienceWindowRef = useRef<Window | null>(null)
  const pendingAudienceSlideRef = useRef<number | null>(null)
  const pendingSidebarSectionRef = useRef<{ lessonId: string; slideIndex: number } | null>(null)
  const lessonLoadRequestRef = useRef(0)
  const lastAudienceSignalAtRef = useRef<number | null>(null)
  const hasReceivedInitialSyncRef = useRef(false)
  const presenterNotesScrollRef = useRef<HTMLDivElement | null>(null)
  const isAudienceView = viewMode === 'audience'
  const shouldRenderSidebar = shouldShowSidebar(viewMode)
  const isPresenterModeEnabled = viewMode === 'presenter' && Boolean(sessionId)
  const isMobileSidebar = isMobileViewport && shouldRenderSidebar
  const isSidebarDrawerVisible = isMobileSidebar && sidebarOpen
  const audienceControlsEnabled = canAudienceControlPresenter(viewMode, sessionId, controlToken)
  const channelSenderRole = viewMode === 'presenter' ? 'presenter' : 'audience'
  const { latestMessage, transportStatus, syncCapability, sendMessage } = usePresentationChannel(sessionId, {
    senderRole: channelSenderRole,
    controlToken: viewMode === 'audience' ? controlToken : null,
  })
  const isTransportReady = isPresentationTransportActive(transportStatus)

  // 切換課程（同步 URL hash）
  const ensureOutlineLessonVisible = useCallback((idx: number) => {
    const nextLesson = LESSONS[idx]
    setExpandedLessons((prev) => expandLessonInOutline(prev, nextLesson.id))
    setCollapsedDays((prev) => revealDayInOutline(prev, nextLesson.day))
  }, [])

  const switchLesson = useCallback((idx: number) => {
    const nextLesson = LESSONS[idx]
    setCurrentLesson(idx)
    ensureOutlineLessonVisible(idx)
    if (isMobileViewport) {
      setSidebarOpen(false)
      setShowMenu(false)
    }
    window.location.hash = nextLesson.id
  }, [ensureOutlineLessonVisible, isMobileViewport])

  const updatePresenterNotesScrollHint = useCallback(() => {
    const notesElement = presenterNotesScrollRef.current

    if (!notesElement || !isAdmin || !isPresenterModeEnabled) {
      setShowPresenterNotesScrollHint(false)
      return
    }

    const overflowThreshold = 8
    const remainingScroll = notesElement.scrollHeight - notesElement.clientHeight - notesElement.scrollTop
    const hasOverflow = notesElement.scrollHeight - notesElement.clientHeight > overflowThreshold

    setShowPresenterNotesScrollHint(hasOverflow && remainingScroll > 16)
  }, [isAdmin, isPresenterModeEnabled])

  const cacheLessonSections = useCallback((lessonId: string, nextSections: SectionEntry[]) => {
    setLessonSectionStates((prev) => ({
      ...prev,
      [lessonId]: { status: 'ready', sections: nextSections },
    }))
  }, [])

  const loadLessonSections = useCallback(async (lessonIndex: number): Promise<SectionEntry[]> => {
    const lessonToLoad = LESSONS[lessonIndex]
    const cachedState = lessonSectionStates[lessonToLoad.id]

    if (cachedState?.status === 'ready') {
      return cachedState.sections
    }

    if (lessonIndex === currentLesson) {
      const nextSections = buildSections(slides)
      cacheLessonSections(lessonToLoad.id, nextSections)
      return nextSections
    }

    setLessonSectionStates((prev) => ({
      ...prev,
      [lessonToLoad.id]: { status: 'loading', sections: prev[lessonToLoad.id]?.sections ?? [] },
    }))

    try {
      const loadedSlides = await lessonToLoad.getSlides()
      const nextSections = buildSections(loadedSlides as Slide[])
      cacheLessonSections(lessonToLoad.id, nextSections)
      return nextSections
    } catch (error) {
      console.error('Failed to load lesson sections', { lessonId: lessonToLoad.id, error })
      setLessonSectionStates((prev) => ({
        ...prev,
        [lessonToLoad.id]: { status: 'error', sections: [] },
      }))
      return []
    }
  }, [cacheLessonSections, currentLesson, lessonSectionStates, slides])

  const ensureLessonSectionsLoaded = useCallback(async (lessonIndex: number) => {
    await loadLessonSections(lessonIndex)
  }, [loadLessonSections])

  useEffect(() => {
    if (isAudienceView) {
      return
    }

    const url = new URL(window.location.href)
    if (viewMode === 'presenter' && sessionId) {
      url.searchParams.set('view', 'presenter')
      url.searchParams.set('session', sessionId)
      url.searchParams.delete('control')
    } else {
      url.searchParams.delete('view')
      url.searchParams.delete('session')
      url.searchParams.delete('control')
    }
    window.history.replaceState({}, '', `${url.pathname}${url.search}${url.hash}`)
  }, [isAudienceView, sessionId, viewMode])

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const syncViewportState = (matches: boolean) => {
      setIsMobileViewport(matches)
      setSidebarOpen(!matches)
    }

    syncViewportState(mediaQuery.matches)
    const handleChange = (event: MediaQueryListEvent) => {
      syncViewportState(event.matches)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  useEffect(() => {
    const timer = window.setInterval(() => setClockTick(Date.now()), 1000)
    return () => window.clearInterval(timer)
  }, [])

  // 監聽瀏覽器上一頁/下一頁
  useEffect(() => {
    const onHashChange = () => {
      const idx = getLessonIndexFromHash()
      ensureOutlineLessonVisible(idx)
      setCurrentLesson(idx)
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [ensureOutlineLessonVisible])

  // 載入課程
  useEffect(() => {
    const lesson = LESSONS[currentLesson]
    const requestId = lessonLoadRequestRef.current + 1
    lessonLoadRequestRef.current = requestId
    setLoading(true)
    const pendingSidebarSection = pendingSidebarSectionRef.current
    if ((!isAudienceView || pendingAudienceSlideRef.current === null)
      && pendingSidebarSection?.lessonId !== lesson.id) {
      setCurrentSlide(0)
    }
    lesson.getSlides()
      .then((s) => {
        if (lessonLoadRequestRef.current !== requestId) {
          return
        }

        const loadedSlides = s as Slide[]
        cacheLessonSections(lesson.id, buildSections(loadedSlides))
        setSlides(loadedSlides)
        if (isAudienceView && pendingAudienceSlideRef.current !== null) {
          const nextIndex = Math.min(Math.max(pendingAudienceSlideRef.current, 0), Math.max(loadedSlides.length - 1, 0))
          setCurrentSlide(nextIndex)
          pendingAudienceSlideRef.current = null
        } else if (pendingSidebarSectionRef.current?.lessonId === lesson.id) {
          const nextIndex = Math.min(
            Math.max(pendingSidebarSectionRef.current.slideIndex, 0),
            Math.max(loadedSlides.length - 1, 0),
          )
          setCurrentSlide(nextIndex)
          pendingSidebarSectionRef.current = null
        }
        setLoading(false)
      })
      .catch((error) => {
        if (lessonLoadRequestRef.current !== requestId) {
          return
        }

        console.error('Failed to load lesson slides', { lessonId: lesson.id, error })
        setSlides([FALLBACK_ERROR_SLIDE])
        setLoading(false)
      })
  }, [cacheLessonSections, currentLesson, isAudienceView])

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < slides.length) {
      setCurrentSlide(index)
    }
  }, [slides.length])

  const nextSlide = useCallback(() => goToSlide(currentSlide + 1), [currentSlide, goToSlide])
  const prevSlide = useCallback(() => goToSlide(currentSlide - 1), [currentSlide, goToSlide])

  const audienceNav = useCallback((direction: 'next' | 'prev') => {
    if (!audienceControlsEnabled || !sessionId || !controlToken) {
      return
    }

    const nextIndex = direction === 'next' ? currentSlide + 1 : currentSlide - 1
    if (nextIndex < 0 || nextIndex >= slides.length) {
      return
    }

    goToSlide(nextIndex)
    sendMessage(
      createPresentationMessage('SYNC_STATE', sessionId, LESSONS[currentLesson].id, nextIndex, 'audience', {
        controlToken,
      }),
    )
  }, [audienceControlsEnabled, controlToken, currentLesson, currentSlide, goToSlide, sendMessage, sessionId, slides.length])

  const postPresentationMessage = useCallback(
    (
      type: 'SYNC_STATE' | 'REQUEST_SYNC' | 'HEARTBEAT' | 'END_SESSION',
      lessonId: string,
      slideIndex: number,
      senderRole: 'presenter' | 'audience',
      options?: { controlToken?: string | null },
    ): boolean => {
      if (!sessionId) {
        return false
      }
      return sendMessage(createPresentationMessage(type, sessionId, lessonId, slideIndex, senderRole, options))
    },
    [sendMessage, sessionId],
  )

  const startPresenterMode = useCallback(() => {
    const activeSessionId = sessionId ?? createSessionId()
    const activeControlToken = createSessionId()
    const activeLessonId = LESSONS[currentLesson].id
    const audienceUrl = buildAudienceUrl(activeSessionId, activeLessonId, {
      accessMode: 'control',
      controlToken: activeControlToken,
    })
    persistPresenterControlToken(activeSessionId, activeControlToken)

    const openedWindow = window.open(audienceUrl, `k8s-audience-${activeSessionId}`, 'popup=yes,width=1366,height=768')
    if (!openedWindow) {
      setPresenterError('Popup blocked. Allow popups for this site and try again.')
      setManualAudienceUrl(audienceUrl)
      setViewMode('presenter')
      setSessionId(activeSessionId)
      setControlToken(activeControlToken)
      setPresenterSyncStatus('disconnected')
      return
    }

    audienceWindowRef.current = openedWindow
    setPresenterError(null)
    setManualAudienceUrl(null)
    setViewMode('presenter')
    setSessionId(activeSessionId)
    setControlToken(activeControlToken)
    setSessionStartedAt(Date.now())
    setPresenterSyncStatus('connecting')
  }, [currentLesson, sessionId])

  const reopenAudienceWindow = useCallback(() => {
    if (!sessionId || !controlToken) {
      startPresenterMode()
      return
    }

    const lessonId = LESSONS[currentLesson].id
    const audienceUrl = buildAudienceUrl(sessionId, lessonId, {
      accessMode: 'control',
      controlToken,
    })
    const openedWindow = window.open(audienceUrl, `k8s-audience-${sessionId}`, 'popup=yes,width=1366,height=768')

    if (!openedWindow) {
      setPresenterError('Popup blocked. Allow popups for this site and try again.')
      setManualAudienceUrl(audienceUrl)
      setPresenterSyncStatus('disconnected')
      return
    }

    audienceWindowRef.current = openedWindow
    setPresenterError(null)
    setManualAudienceUrl(null)
    setPresenterSyncStatus('connecting')
    postPresentationMessage('SYNC_STATE', lessonId, currentSlide, 'presenter')
  }, [controlToken, currentLesson, currentSlide, postPresentationMessage, sessionId, startPresenterMode])

  const stopPresenterMode = useCallback(() => {
    const lessonId = LESSONS[currentLesson].id
    postPresentationMessage('END_SESSION', lessonId, currentSlide, 'presenter')
    if (audienceWindowRef.current && !audienceWindowRef.current.closed) {
      audienceWindowRef.current.close()
    }
    audienceWindowRef.current = null
    clearPresenterControlToken(sessionId)
    setViewMode('single')
    setSessionId(null)
    setControlToken(null)
    setSessionStartedAt(null)
    setTimerPaused(false)
    setPausedElapsed(0)
    setPresenterError(null)
    setManualAudienceUrl(null)
    setCopyAudienceUrlState('idle')
    setPresenterSyncStatus('idle')
  }, [currentLesson, currentSlide, postPresentationMessage, sessionId])

  const copyAudienceUrl = useCallback(async (audienceUrl: string | null) => {
    if (!audienceUrl) {
      return
    }

    try {
      await navigator.clipboard.writeText(audienceUrl)
      setCopyAudienceUrlState('copied')
    } catch (error) {
      console.error('Failed to copy audience URL', {
        sessionId,
        lessonId: LESSONS[currentLesson].id,
        audienceUrl,
        error,
      })
      setCopyAudienceUrlState('error')
    }
  }, [currentLesson, sessionId])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isAudienceView) {
        if (e.key === 'ArrowRight' || e.key === 'PageDown') {
          e.preventDefault(); audienceNav('next')
        } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
          e.preventDefault(); audienceNav('prev')
        }
        return
      }

      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault(); nextSlide()
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault(); prevSlide()
      } else if ((e.key === 'n' || e.key === 'N') && isAdmin) {
        setShowNotes(prev => !prev)
      } else if (e.key === 'm' || e.key === 'M') {
        setShowMenu(prev => !prev)
      } else if (e.key === 'b' || e.key === 'B') {
        setSidebarOpen(prev => !prev)
      } else if ((e.key === 'p' || e.key === 'P') && isAdmin) {
        e.preventDefault()
        if (isPresenterModeEnabled) {
          stopPresenterMode()
        } else {
          startPresenterMode()
        }
      } else if (e.key === 'Escape') {
        setIsShareModalOpen(false)
        setShowMenu(false)
        if (isMobileViewport) {
          setSidebarOpen(false)
        }
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [audienceNav, isAdmin, isAudienceView, isMobileViewport, isPresenterModeEnabled, nextSlide, prevSlide, startPresenterMode, stopPresenterMode])

  const slide: Slide = slides[currentSlide] || slides[0]
  const lesson = LESSONS[currentLesson]
  const sections = useMemo(() => buildSections(slides), [slides])
  const lessonOutlineEntries = useMemo(
    () => LESSONS.map(({ id, day }) => ({ id, day })),
    [],
  )
  const nextSlidePreview: Slide | null = slides[currentSlide + 1] || null
  const visibleSlideRail = useMemo(() => {
    if (slides.length <= SLIDE_RAIL_VISIBLE_COUNT) {
      return { start: 0, end: slides.length }
    }

    const halfWindow = Math.floor(SLIDE_RAIL_VISIBLE_COUNT / 2)
    let start = Math.max(currentSlide - halfWindow, 0)
    let end = start + SLIDE_RAIL_VISIBLE_COUNT

    if (end > slides.length) {
      end = slides.length
      start = Math.max(end - SLIDE_RAIL_VISIBLE_COUNT, 0)
    }

    return { start, end }
  }, [currentSlide, slides.length])
  const hiddenSlidesBefore = visibleSlideRail.start
  const hiddenSlidesAfter = slides.length - visibleSlideRail.end
  const elapsedSeconds = timerPaused
    ? pausedElapsed
    : sessionStartedAt
    ? Math.max(0, Math.floor((clockTick - sessionStartedAt) / 1000))
    : 0
  const elapsedMinutes = Math.floor(elapsedSeconds / 60)
  const elapsedRemainderSeconds = elapsedSeconds % 60

  const toggleTimerPause = useCallback(() => {
    if (timerPaused) {
      // Resume: adjust sessionStartedAt so elapsed time stays the same
      setSessionStartedAt(Date.now() - pausedElapsed * 1000)
      setTimerPaused(false)
    } else {
      // Pause: save current elapsed time
      setPausedElapsed(elapsedSeconds)
      setTimerPaused(true)
    }
  }, [timerPaused, pausedElapsed, elapsedSeconds])

  useEffect(() => {
    if (isAudienceView && !sessionId) {
      setAudienceConnectionState('missing-session')
      return
    }

    if (isAudienceView && (transportStatus === 'unsupported' || transportStatus === 'error')) {
      setAudienceConnectionState('unsupported')
      return
    }

    if (isAudienceView && (!isTransportReady || !hasReceivedInitialSyncRef.current)) {
      setAudienceConnectionState('loading')
    }
  }, [isAudienceView, isTransportReady, sessionId, transportStatus])

  useEffect(() => {
    if (!isTransportReady) {
      if (isPresenterModeEnabled && transportStatus === 'connecting') {
        setPresenterSyncStatus('connecting')
        setPresenterError(null)
      }

      if (isPresenterModeEnabled && (transportStatus === 'unsupported' || transportStatus === 'error')) {
        setPresenterSyncStatus('unsupported')
        setPresenterError(
          transportStatus === 'unsupported'
            ? 'This browser cannot provide presenter sync in the selected mode.'
            : 'Cross-browser sync could not connect. Check your sync setup and try again.',
        )
      }
      return
    }

    if (!latestMessage) {
      return
    }

    if (isPresenterModeEnabled && latestMessage.type === 'REQUEST_SYNC' && latestMessage.senderRole === 'audience') {
      setPresenterSyncStatus('connected')
      setPresenterError(null)
      postPresentationMessage('SYNC_STATE', lesson.id, currentSlide, 'presenter')
      return
    }

    if (isPresenterModeEnabled && shouldAcceptAudienceControlMessage(latestMessage, controlToken)) {
      const syncedLessonIndex = LESSONS.findIndex((item) => item.id === latestMessage.lessonId)
      if (syncedLessonIndex === -1) {
        return
      }

      setPresenterSyncStatus('connected')
      setPresenterError(null)

      if (syncedLessonIndex !== currentLesson) {
        ensureOutlineLessonVisible(syncedLessonIndex)
        setCurrentLesson(syncedLessonIndex)
        window.location.hash = latestMessage.lessonId
        return
      }

      goToSlide(Math.min(Math.max(latestMessage.slideIndex, 0), Math.max(slides.length - 1, 0)))
      return
    }

    if (!isAudienceView) {
      return
    }

    if (!isPresenterBroadcastMessage(latestMessage)) {
      return
    }

    if (latestMessage.type === 'END_SESSION') {
      window.close()
      setAudienceConnectionState('disconnected')
      return
    }

    if (latestMessage.type === 'HEARTBEAT') {
      lastAudienceSignalAtRef.current = latestMessage.sentAt
      if (hasReceivedInitialSyncRef.current) {
        setAudienceConnectionState('connected')
      }
      return
    }

    if (latestMessage.type !== 'SYNC_STATE' || latestMessage.senderRole !== 'presenter') {
      return
    }

    hasReceivedInitialSyncRef.current = true
    lastAudienceSignalAtRef.current = latestMessage.sentAt
    setAudienceConnectionState('connected')

    const syncedLessonIndex = LESSONS.findIndex((item) => item.id === latestMessage.lessonId)
    if (syncedLessonIndex === -1) {
      return
    }

    if (syncedLessonIndex !== currentLesson) {
      pendingAudienceSlideRef.current = latestMessage.slideIndex
      ensureOutlineLessonVisible(syncedLessonIndex)
      setCurrentLesson(syncedLessonIndex)
      window.location.hash = latestMessage.lessonId
      return
    }

    goToSlide(Math.min(Math.max(latestMessage.slideIndex, 0), Math.max(slides.length - 1, 0)))
  }, [
    controlToken,
    currentLesson,
    currentSlide,
    goToSlide,
    isAudienceView,
    isPresenterModeEnabled,
    latestMessage,
    lesson.id,
    ensureOutlineLessonVisible,
    postPresentationMessage,
    slides.length,
    isTransportReady,
    transportStatus,
  ])

  useEffect(() => {
    if (!isAudienceView || !sessionId || !isTransportReady) {
      return
    }

    postPresentationMessage('REQUEST_SYNC', lesson.id, 0, 'audience')
    const retryTimer = window.setInterval(() => {
      if (!hasReceivedInitialSyncRef.current) {
        postPresentationMessage('REQUEST_SYNC', lesson.id, 0, 'audience')
      }
    }, 2000)

    return () => window.clearInterval(retryTimer)
  }, [isAudienceView, isTransportReady, lesson.id, postPresentationMessage, sessionId])

  useEffect(() => {
    if (!isPresenterModeEnabled || !isTransportReady) {
      return
    }
    postPresentationMessage('SYNC_STATE', lesson.id, currentSlide, 'presenter')
  }, [currentSlide, isPresenterModeEnabled, isTransportReady, lesson.id, postPresentationMessage])

  useEffect(() => {
    if (!isPresenterModeEnabled || !isTransportReady) {
      return
    }

    const heartbeatTimer = window.setInterval(() => {
      postPresentationMessage('HEARTBEAT', lesson.id, currentSlide, 'presenter')
    }, 2000)

    return () => window.clearInterval(heartbeatTimer)
  }, [currentSlide, isPresenterModeEnabled, isTransportReady, lesson.id, postPresentationMessage])

  useEffect(() => {
    if (!isPresenterModeEnabled) {
      return
    }

    const closeMonitorTimer = window.setInterval(() => {
      if (audienceWindowRef.current && audienceWindowRef.current.closed) {
        setPresenterSyncStatus('disconnected')
      }
    }, 2000)

    return () => window.clearInterval(closeMonitorTimer)
  }, [isPresenterModeEnabled])

  useEffect(() => {
    if (!isAudienceView) {
      return
    }

    const disconnectMonitorTimer = window.setInterval(() => {
      if (!hasReceivedInitialSyncRef.current || !lastAudienceSignalAtRef.current) {
        return
      }
      if (Date.now() - lastAudienceSignalAtRef.current > 5000) {
        setAudienceConnectionState('disconnected')
      }
    }, 1000)

    return () => window.clearInterval(disconnectMonitorTimer)
  }, [isAudienceView])

  useEffect(() => {
    if (isPresenterModeEnabled && !sessionStartedAt) {
      setSessionStartedAt(Date.now())
    }

    if (isPresenterModeEnabled && presenterSyncStatus === 'idle') {
      setPresenterSyncStatus('connecting')
    }

    if (!isPresenterModeEnabled) {
      setPresenterSyncStatus('idle')
    }
  }, [isPresenterModeEnabled, presenterSyncStatus, sessionStartedAt])

  useEffect(() => {
    if (!isAudienceView) {
      hasReceivedInitialSyncRef.current = false
      lastAudienceSignalAtRef.current = null
      return
    }

    hasReceivedInitialSyncRef.current = false
    lastAudienceSignalAtRef.current = null
    if (sessionId) {
      setAudienceConnectionState('loading')
    }
  }, [isAudienceView, sessionId])

  useEffect(() => {
    if (copyAudienceUrlState === 'idle') {
      return
    }

    const timer = window.setTimeout(() => {
      setCopyAudienceUrlState('idle')
    }, 2000)

    return () => window.clearTimeout(timer)
  }, [copyAudienceUrlState])

  useEffect(() => {
    if (isPresenterModeEnabled && syncCapability === 'cross-browser') {
      return
    }

    setIsShareModalOpen(false)
    setSharePermissionMode('read-only')
  }, [isPresenterModeEnabled, syncCapability])

  useEffect(() => {
    const shouldLockPageScroll = isMobileViewport && (
      isSidebarDrawerVisible
      || showMenu
      || isShareModalOpen
      || (isAdmin && !isPresenterModeEnabled && showNotes)
    )

    if (!shouldLockPageScroll) {
      return
    }

    const previousBodyOverflow = document.body.style.overflow
    const previousHtmlOverflow = document.documentElement.style.overflow
    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousBodyOverflow
      document.documentElement.style.overflow = previousHtmlOverflow
    }
  }, [isAdmin, isMobileViewport, isPresenterModeEnabled, isShareModalOpen, isSidebarDrawerVisible, showMenu, showNotes])

  useEffect(() => {
    if (!isAdmin || !isPresenterModeEnabled) {
      setShowPresenterNotesScrollHint(false)
      return
    }

    const notesElement = presenterNotesScrollRef.current
    if (!notesElement) {
      setShowPresenterNotesScrollHint(false)
      return
    }

    const updateHint = () => {
      updatePresenterNotesScrollHint()
    }

    const frameId = window.requestAnimationFrame(updateHint)
    window.addEventListener('resize', updateHint)

    const resizeObserver = typeof ResizeObserver === 'undefined'
      ? null
      : new ResizeObserver(() => {
          updateHint()
        })

    resizeObserver?.observe(notesElement)

    return () => {
      window.cancelAnimationFrame(frameId)
      window.removeEventListener('resize', updateHint)
      resizeObserver?.disconnect()
    }
  }, [currentSlide, isAdmin, isPresenterModeEnabled, slide.notes, updatePresenterNotesScrollHint])

  // 解析所有投影片 notes 中的 Q&A
  const qaItems = useMemo(() => {
    const marker = '\u3010\u9810\u671f\u96e3\u641e\u5b78\u54e1\u554f\u984c'
    const items: { q: string; a: string }[] = []
    slides.forEach(slide => {
      const notes = slide.notes || ''
      const idx = notes.indexOf(marker)
      if (idx === -1) return
      const qaText = notes.slice(idx)
      const lines = qaText.split('\n')
      let currentQ = ''
      let currentA = ''
      for (const line of lines) {
        const trimmed = line.trim()
        if (trimmed.startsWith('Q\uff1a') || trimmed.startsWith('Q:')) {
          if (currentQ && currentA) items.push({ q: currentQ, a: currentA })
          currentQ = trimmed.replace(/^Q[：:]/, '').trim()
          currentA = ''
        } else if (trimmed.startsWith('A\uff1a') || trimmed.startsWith('A:')) {
          currentA = trimmed.replace(/^A[：:]/, '').trim()
        } else if (currentA && trimmed) {
          currentA += ' ' + trimmed
        }
      }
      if (currentQ && currentA) items.push({ q: currentQ, a: currentA })
    })
    return items
  }, [slides])

  // 計算時間
  const totalMinutes = slides.reduce((sum, s) => sum + parseInt(s.duration || '2'), 0)
  const currentMinutes = slides.slice(0, currentSlide).reduce((sum, s) => sum + parseInt(s.duration || '2'), 0)

  // 按天分組課程
  const days = Array.from(new Set(LESSONS.map(l => l.day)))
  const allLessonIds = useMemo(() => LESSONS.map(({ id }) => id), [])
  const currentLessonSections = lessonSectionStates[lesson.id]?.sections ?? (loading ? [] : sections)
  const currentDay = lesson.day
  const isOnlyCurrentLessonView = days.every((day) => day === currentDay || collapsedDays.has(day))
    && expandedLessons.size === 1
    && expandedLessons.has(lesson.id)
  const activeCurrentSection = currentLessonSections.find((_section, index) => isCurrentSection(currentLessonSections, index, currentSlide))

  const setExpandedSectionsForLesson = useCallback((lessonId: string, sectionKeys: string[]) => {
    setExpandedSectionsByLesson((prev) => ({
      ...prev,
      [lessonId]: new Set(sectionKeys),
    }))
  }, [])

  const focusCurrentLessonOutline = useCallback(() => {
    const outlineState = buildFocusedOutlineState(lessonOutlineEntries, lesson.id, currentDay)
    setCollapsedDays(outlineState.collapsedDays)
    setExpandedLessons(outlineState.expandedLessons)
    setExpandedSectionsForLesson(
      lesson.id,
      activeCurrentSection ? [buildSectionKey(activeCurrentSection)] : [],
    )
  }, [activeCurrentSection, currentDay, lesson.id, lessonOutlineEntries, setExpandedSectionsForLesson])

  const expandAllOutline = useCallback(async () => {
    setOutlineExpandingAll(true)
    setCollapsedDays(new Set())
    setExpandedLessons(new Set(allLessonIds))

    try {
      const sectionEntries = await Promise.all(
        LESSONS.map(async (lessonItem, lessonIndex) => {
          const loadedSections = await loadLessonSections(lessonIndex)
          return [lessonItem.id, new Set(loadedSections.map(buildSectionKey))] as const
        }),
      )

      setExpandedSectionsByLesson(Object.fromEntries(sectionEntries))
    } finally {
      setOutlineExpandingAll(false)
    }
  }, [allLessonIds, loadLessonSections])

  const collapseAllOutline = useCallback(() => {
    setCollapsedDays(new Set(days))
    setExpandedLessons(new Set())
    setExpandedSectionsByLesson({})
  }, [days])

  const toggleLessonExpansion = useCallback((lessonIndex: number) => {
    const lessonToToggle = LESSONS[lessonIndex]
    const isExpanded = expandedLessons.has(lessonToToggle.id)

    setExpandedLessons((prev) => {
      const next = new Set(prev)
      if (next.has(lessonToToggle.id)) {
        next.delete(lessonToToggle.id)
      } else {
        next.add(lessonToToggle.id)
      }
      return next
    })

    if (!isExpanded) {
      void ensureLessonSectionsLoaded(lessonIndex)
    }
  }, [ensureLessonSectionsLoaded, expandedLessons])

  const jumpToLessonSection = useCallback((lessonIndex: number, section: SectionEntry) => {
    const targetLesson = LESSONS[lessonIndex]
    const sectionKey = buildSectionKey(section)

    setExpandedLessons((prev) => new Set(prev).add(targetLesson.id))
    setCollapsedDays((prev) => {
      const next = new Set(prev)
      next.delete(targetLesson.day)
      return next
    })
    setExpandedSectionsForLesson(targetLesson.id, [sectionKey])

    if (lessonIndex === currentLesson) {
      goToSlide(section.firstIndex)
      if (isMobileViewport) {
        setSidebarOpen(false)
      }
      return
    }

    pendingSidebarSectionRef.current = { lessonId: targetLesson.id, slideIndex: section.firstIndex }
    switchLesson(lessonIndex)
  }, [currentLesson, goToSlide, isMobileViewport, setExpandedSectionsForLesson, switchLesson])

  const toggleSectionExpansion = useCallback((lessonId: string, sectionKey: string) => {
    setExpandedSectionsByLesson((prev) => {
      const currentKeys = prev[lessonId] ?? new Set<string>()
      const nextKeys = new Set(currentKeys)

      if (nextKeys.has(sectionKey)) {
        nextKeys.delete(sectionKey)
      } else {
        nextKeys.add(sectionKey)
      }

      return {
        ...prev,
        [lessonId]: nextKeys,
      }
    })
  }, [])

  const jumpToLessonSlide = useCallback((lessonIndex: number, section: SectionEntry, slideIndex: number) => {
    const targetLesson = LESSONS[lessonIndex]
    const sectionKey = buildSectionKey(section)

    setExpandedLessons((prev) => new Set(prev).add(targetLesson.id))
    setCollapsedDays((prev) => {
      const next = new Set(prev)
      next.delete(targetLesson.day)
      return next
    })
    setExpandedSectionsForLesson(targetLesson.id, [sectionKey])

    if (lessonIndex === currentLesson) {
      goToSlide(slideIndex)
      if (isMobileViewport) {
        setSidebarOpen(false)
      }
      return
    }

    pendingSidebarSectionRef.current = { lessonId: targetLesson.id, slideIndex }
    switchLesson(lessonIndex)
  }, [currentLesson, goToSlide, isMobileViewport, setExpandedSectionsForLesson, switchLesson])

  const presenterStatusLabel = presenterSyncStatus === 'connected'
    ? 'Audience connected'
    : presenterSyncStatus === 'connecting'
    ? 'Connecting audience'
    : presenterSyncStatus === 'disconnected'
    ? 'Audience disconnected'
    : presenterSyncStatus === 'unsupported'
    ? 'Sync unavailable'
    : 'Presenter mode off'
  const presenterTransportLabel = syncCapability === 'same-browser' && transportStatus === 'fallback'
    ? 'Same-browser fallback'
    : getPresentationSyncCapabilityLabel(syncCapability)
  const canShareAudienceUrl = isPresenterModeEnabled && syncCapability === 'cross-browser'
  const selectedShareAudienceUrl = sessionId
    ? buildAudienceUrl(sessionId, lesson.id, {
        accessMode: sharePermissionMode,
        controlToken: sharePermissionMode === 'control' ? controlToken : null,
      })
    : null
  const canCopySelectedShareLink = canShareAudienceUrl
    && Boolean(selectedShareAudienceUrl)
    && (sharePermissionMode === 'read-only' || Boolean(controlToken))
  const shareCopyActionLabel = copyAudienceUrlState === 'copied'
    ? 'Link Copied'
    : copyAudienceUrlState === 'error'
    ? 'Copy Failed'
    : 'Copy Link'
  const shareAudienceButtonTitle = !isPresenterModeEnabled
    ? 'Start Presenter before opening link sharing'
    : syncCapability !== 'cross-browser'
    ? 'Link sharing is unavailable in the current sync mode'
    : 'Open link sharing options'
  const sharePermissionDescription = sharePermissionMode === 'control'
    ? 'Anyone with this link can control presenter navigation.'
    : 'Audience members can view slides but cannot control navigation.'
  if (isAudienceView) {
    return (
      <AudienceView
        lessonLabel={lesson.label}
        lessonTitle={lesson.title}
        slide={slide || null}
        loading={loading}
        connectionState={audienceConnectionState}
        controlsEnabled={audienceControlsEnabled}
        currentSlide={currentSlide}
        totalSlides={slides.length}
        onPrev={() => audienceNav('prev')}
        onNext={() => audienceNav('next')}
      />
    )
  }

  return (
    <div className="flex min-h-screen overflow-x-clip bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">

      {/* ===== LEFT SIDEBAR ===== */}
      {shouldRenderSidebar && (
        <button
          type="button"
          aria-label="Close sidebar"
          onClick={() => setSidebarOpen(false)}
          className={`fixed inset-0 z-20 bg-slate-950/70 backdrop-blur-sm transition-opacity md:hidden ${
            isSidebarDrawerVisible ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
          }`}
        />
      )}
      {shouldRenderSidebar && (
      <aside
        className={`fixed top-0 left-0 z-30 flex h-[100dvh] max-w-full flex-col overflow-hidden touch-pan-y transition-all duration-300 ${
          isMobileViewport
            ? `w-[min(22rem,calc(100vw-2rem))] ${sidebarOpen ? 'translate-x-0 pointer-events-auto' : '-translate-x-[110%] pointer-events-none'}`
            : `w-[420px] ${sidebarOpen ? 'translate-x-0 pointer-events-auto' : '-translate-x-full pointer-events-none'}`
        }`}
        style={{ background: 'rgba(15,23,42,0.97)', borderRight: '1px solid rgba(51,65,85,0.7)' }}
      >
        {/* Sidebar header */}
        <div className="flex shrink-0 items-start justify-between gap-4 border-b border-slate-700/50 p-4 md:p-5">
          <div>
            <div className="mb-1 flex items-center gap-3">
              <span className="text-3xl">☸️</span>
              <span className="text-white font-bold text-xl">K8s 課程大綱</span>
            </div>
            <p className="text-sm text-slate-400 md:text-base">{lesson.label} · {lesson.title}</p>
          </div>
          <button
            type="button"
            onClick={() => setSidebarOpen(false)}
            className="rounded-xl border border-slate-700/70 bg-slate-800/80 px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-slate-700 hover:text-white md:hidden"
          >
            Close
          </button>
        </div>

        <div
          className="flex-1 min-h-0 overflow-y-auto overscroll-y-contain"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >

        {/* 課程切換（依天分組，含每堂課子目錄） */}
        <div className="p-4 border-b border-slate-700/50 flex-shrink-0">
          <div className="mb-3 rounded-2xl border border-slate-700/60 bg-slate-800/35 p-2">
            <div className="mb-2 px-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              大綱檢視
            </div>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
              <button
                type="button"
                onClick={focusCurrentLessonOutline}
                className={`rounded-xl px-3 py-2 text-sm font-semibold transition-all ${
                  isOnlyCurrentLessonView
                    ? 'border border-blue-500/50 bg-blue-600/20 text-blue-200 shadow-sm shadow-blue-950/30'
                    : 'border border-slate-700/70 bg-slate-800/70 text-slate-300 hover:border-slate-500/70 hover:bg-slate-700/70 hover:text-white'
                }`}
              >
                本堂課
              </button>
              <button
                type="button"
                onClick={() => {
                  void expandAllOutline()
                }}
                disabled={outlineExpandingAll}
                className="rounded-xl border border-slate-700/70 bg-slate-800/70 px-3 py-2 text-sm font-semibold text-slate-300 transition-all hover:border-slate-500/70 hover:bg-slate-700/70 hover:text-white disabled:cursor-wait disabled:opacity-60"
              >
                {outlineExpandingAll ? '展開中' : '全部展開'}
              </button>
              <button
                type="button"
                onClick={collapseAllOutline}
                className="rounded-xl border border-slate-700/70 bg-slate-800/70 px-3 py-2 text-sm font-semibold text-slate-300 transition-all hover:border-slate-500/70 hover:bg-slate-700/70 hover:text-white"
              >
                全部收合
              </button>
            </div>
          </div>
          {days.map((day) => {
            const isCollapsed = collapsedDays.has(day)
            const lessonsInDay = LESSONS.filter((item) => item.day === day)
            const hasActiveLesson = lessonsInDay.some((item) => LESSONS.indexOf(item) === currentLesson)

            return (
              <div key={day} className="mb-2">
                <button
                  onClick={() => setCollapsedDays((prev) => {
                    const next = new Set(prev)
                    if (next.has(day)) next.delete(day)
                    else next.add(day)
                    return next
                  })}
                  className={`w-full flex items-center justify-between px-2 py-1.5 rounded-lg transition-colors hover:bg-slate-700/50 ${
                    hasActiveLesson ? 'text-blue-300' : 'text-slate-400'
                  }`}
                >
                  <span className="text-sm font-bold uppercase tracking-wider">{day}</span>
                  <span className="text-base">{isCollapsed ? '▶' : '▼'}</span>
                </button>
                {!isCollapsed && (
                  <div className="space-y-2 mt-2">
                    {lessonsInDay.map((lessonItem) => {
                      const idx = LESSONS.indexOf(lessonItem)
                      const isCurrentLesson = idx === currentLesson
                      const isExpanded = expandedLessons.has(lessonItem.id)
                      const cachedState = lessonSectionStates[lessonItem.id]
                      const sectionState = isCurrentLesson
                        ? { status: loading ? 'loading' as const : 'ready' as const, sections: currentLessonSections }
                        : cachedState ?? { status: 'idle' as const, sections: [] }

                      return (
                        <div key={lessonItem.id} className="rounded-xl border border-slate-700/50 bg-slate-800/30">
                          <div className="flex items-stretch">
                            <button
                              onClick={() => switchLesson(idx)}
                              className={`flex-1 text-left px-3 py-2.5 rounded-l-xl text-base transition-colors ${
                                isCurrentLesson
                                  ? 'bg-blue-600/25 text-blue-300 font-semibold'
                                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                              }`}
                            >
                              <span className="font-medium">{lessonItem.label}</span>
                              <span className="text-slate-500 ml-1">· {lessonItem.title}</span>
                            </button>
                            <button
                              type="button"
                              aria-label={isExpanded ? `收合 ${lessonItem.label} 子目錄` : `展開 ${lessonItem.label} 子目錄`}
                              aria-expanded={isExpanded}
                              onClick={() => toggleLessonExpansion(idx)}
                              className={`w-11 rounded-r-xl border-l border-slate-700/50 text-base transition-colors ${
                                isExpanded
                                  ? 'bg-slate-700/70 text-slate-200 hover:bg-slate-600/80'
                                  : 'bg-slate-800/60 text-slate-400 hover:bg-slate-700/70 hover:text-white'
                              }`}
                            >
                              {isExpanded ? '▼' : '▶'}
                            </button>
                          </div>

                          {isExpanded && (
                            <div className="px-3 pb-3">
                              <div className="ml-2 mt-2 border-l border-slate-700/60 pl-3 space-y-1.5">
                                {sectionState.status === 'loading' && (
                                  <div className="py-2 text-sm text-slate-500">載入章節中...</div>
                                )}
                                {sectionState.status === 'error' && (
                                  <div className="py-2 text-sm text-red-400">無法載入這堂課的章節</div>
                                )}
                                {sectionState.status !== 'loading' && sectionState.sections.length === 0 && (
                                  <div className="py-2 text-sm text-slate-500">沒有可顯示的章節</div>
                                )}
                                {sectionState.sections.map((section, sectionIndex) => {
                                  const active = isCurrentLesson
                                    ? isCurrentSection(sectionState.sections, sectionIndex, currentSlide)
                                    : false
                                  const sectionKey = buildSectionKey(section)
                                  const expandedSectionKeys = expandedSectionsByLesson[lessonItem.id]
                                  const isSectionExpanded = Boolean(
                                    (expandedSectionKeys && expandedSectionKeys.has(sectionKey))
                                      || (isCurrentLesson && active),
                                  )
                                  const completionPercent = section.totalExpectedChars > 0
                                    ? Math.round((section.totalActualChars / section.totalExpectedChars) * 100)
                                    : 0

                                  return (
                                    <div key={`${lessonItem.id}-${sectionKey}`} className="rounded-lg">
                                      <div className={`flex items-stretch rounded-lg transition-all ${
                                        active
                                          ? 'bg-blue-600/20 border border-blue-500/40'
                                          : 'border border-transparent hover:bg-slate-700/40'
                                      }`}
                                      >
                                        <button
                                          onClick={() => jumpToLessonSection(idx, section)}
                                          className="flex-1 px-3 py-2.5 text-left"
                                        >
                                          <div className={`text-sm font-semibold leading-snug ${
                                            active ? 'text-blue-300' : 'text-slate-300'
                                          }`}
                                          >
                                            {section.name}
                                          </div>
                                          <div className="mt-1 flex items-center gap-2 text-xs text-slate-500">
                                            <span>{section.totalMinutes} 分鐘</span>
                                            <span>·</span>
                                            <span>{section.slideCount} 張</span>
                                          </div>
                                          {isAdmin && (
                                            <div className="mt-1 text-xs text-slate-500">
                                              預計 {section.totalExpectedChars.toLocaleString()} 字
                                              <span className="mx-1">·</span>
                                              實際 {section.totalActualChars.toLocaleString()} 字
                                              <span className="mx-1">·</span>
                                              <span className={
                                                completionPercent >= 80
                                                  ? 'text-green-400'
                                                  : completionPercent >= 50
                                                  ? 'text-yellow-400'
                                                  : 'text-red-400'
                                              }
                                              >
                                                {completionPercent}%
                                              </span>
                                            </div>
                                          )}
                                        </button>
                                        <button
                                          type="button"
                                          aria-label={isSectionExpanded ? `收合 ${section.name} 投影片標題` : `展開 ${section.name} 投影片標題`}
                                          aria-expanded={isSectionExpanded}
                                          onClick={() => toggleSectionExpansion(lessonItem.id, sectionKey)}
                                          className={`w-10 rounded-r-lg border-l border-slate-700/50 text-sm transition-colors ${
                                            isSectionExpanded
                                              ? 'bg-slate-700/70 text-slate-200 hover:bg-slate-600/80'
                                              : 'bg-slate-800/60 text-slate-400 hover:bg-slate-700/70 hover:text-white'
                                          }`}
                                        >
                                          {isSectionExpanded ? '▼' : '▶'}
                                        </button>
                                      </div>

                                      {isSectionExpanded && (
                                        <div className="ml-4 mt-1 border-l border-slate-700/60 pl-3 space-y-1">
                                          {section.slides.map((sectionSlide, slidePosition) => {
                                            const isActiveSlide = isCurrentLesson && sectionSlide.index === currentSlide

                                            return (
                                              <button
                                                key={`${lessonItem.id}-${sectionKey}-${sectionSlide.index}`}
                                                onClick={() => jumpToLessonSlide(idx, section, sectionSlide.index)}
                                                className={`w-full rounded-md px-3 py-2 text-left text-sm transition-all ${
                                                  isActiveSlide
                                                    ? 'bg-blue-500/20 text-blue-200 border border-blue-500/30'
                                                    : 'text-slate-400 hover:text-white hover:bg-slate-700/40 border border-transparent'
                                                }`}
                                              >
                                                <div className="flex items-start gap-2">
                                                  <span className="mt-0.5 text-[11px] text-slate-500">
                                                    {slidePosition + 1}.
                                                  </span>
                                                  <span className="leading-snug">{sectionSlide.title}</span>
                                                </div>
                                              </button>
                                            )
                                          })}
                                        </div>
                                      )}
                                    </div>
                                  )
                                })}
                              </div>
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* 演講稿總字數統計 (admin only) */}
        {isAdmin && (() => {
          const totalExpected = slides.reduce((sum, s) => sum + parseInt(s.duration || '2') * 150, 0)
          const totalActual = slides.reduce((sum, s) => sum + (s.notes || '').length, 0)
          const pct = totalExpected > 0 ? Math.round((totalActual / totalExpected) * 100) : 0
          return (
            <div className="px-5 py-4 border-t border-slate-700/50">
              <p className="text-slate-400 text-base font-semibold uppercase tracking-wider mb-3">📝 演講稿總計</p>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-base">預計字數</span>
                  <span className="text-slate-200 text-base font-bold">{totalExpected.toLocaleString()} 字</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-base">實際字數</span>
                  <span className={`text-base font-bold ${pct >= 80 ? 'text-green-400' : pct >= 50 ? 'text-yellow-400' : 'text-red-400'}`}>
                    {totalActual.toLocaleString()} 字
                  </span>
                </div>
                <div className="h-2.5 bg-slate-700 rounded-full overflow-hidden mt-2">
                  <div
                    className={`h-full rounded-full transition-all ${pct >= 80 ? 'bg-green-500' : pct >= 50 ? 'bg-yellow-500' : 'bg-red-500'}`}
                    style={{ width: `${Math.min(100, pct)}%` }}
                  />
                </div>
                <div className="text-right text-base font-semibold text-slate-400">{pct}% 完成</div>
              </div>
            </div>
          )
        })()}

        {/* ❓ Q&A 學員預期問題 (admin only) */}
        {isAdmin && qaItems.length > 0 && (
          <div className="border-t border-slate-700/50">
            <button
              onClick={() => setShowQA(prev => !prev)}
              className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-800/50 transition-colors"
            >
              <span className="text-slate-400 text-base font-semibold uppercase tracking-wider">
                ❓ 學員預期問題 ({qaItems.length})
              </span>
              <span className="text-slate-500 text-xl">{showQA ? '▲' : '▼'}</span>
            </button>
            {showQA && (
              <div className="px-4 pb-4 space-y-3 max-h-[50vh] overflow-y-auto">
                {qaItems.map((item, i) => (
                  <div key={i} className="bg-slate-800/60 rounded-lg overflow-hidden border border-slate-700/50">
                    <div className="px-4 py-3 bg-blue-900/30 border-b border-slate-700/50">
                      <p className="text-blue-300 text-base font-semibold leading-snug">Q：{item.q}</p>
                    </div>
                    <div className="px-4 py-3">
                      <p className="text-slate-300 text-sm leading-relaxed">{item.a}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* 進度 */}
        <div className="px-5 py-4 border-t border-slate-700/50">
          <div className="flex justify-between text-base text-slate-400 mb-2">
            <span>投影片進度</span>
            <span className="font-bold">{currentSlide + 1} / {slides.length} 張</span>
          </div>
          <div className="h-2.5 bg-slate-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-500 rounded-full transition-all duration-300"
              style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
            />
          </div>
          <div className="flex justify-between text-sm text-slate-500 mt-1.5">
            <span>⏱ {currentMinutes} 分</span>
            <span>共 {totalMinutes} 分</span>
          </div>
        </div>
        </div>
      </aside>
      )}

      {/* ===== MAIN CONTENT ===== */}
      <div
        className={`min-w-0 flex-1 flex flex-col transition-all duration-300 ${
          shouldRenderSidebar && sidebarOpen ? 'md:ml-[420px]' : ''
        }`}
      >
        {/* Top progress bar */}
        <div className="fixed top-0 left-0 right-0 h-1 bg-slate-700 z-50">
          <div
            className="h-full bg-blue-500 transition-all duration-300"
            style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          />
        </div>

        {/* Hamburger Menu Button (Mobile Only) */}
        {shouldRenderSidebar && (
          <button
            onClick={() => setSidebarOpen(prev => !prev)}
            className="md:hidden fixed top-4 left-4 z-50 p-3 bg-slate-800/90 hover:bg-slate-700 rounded-lg transition-colors border border-slate-600 shadow-lg"
            title="切換側邊欄"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        )}

        {/* 課程選擇浮層 */}
        {showMenu && (
          <div className="fixed inset-0 z-40 flex items-end justify-center bg-black/80 p-0 sm:items-center sm:p-4" onClick={() => setShowMenu(false)}>
            <div className="mobile-panel max-h-[85vh] overflow-y-auto rounded-b-none p-5 sm:max-w-2xl sm:rounded-3xl sm:p-8" onClick={e => e.stopPropagation()}>
              <div className="mb-6 flex items-center justify-between gap-3">
                <h2 className="text-2xl font-bold text-white">📚 選擇課程</h2>
                <button
                  type="button"
                  onClick={() => setShowMenu(false)}
                  className="rounded-xl border border-slate-700/80 bg-slate-800/80 px-3 py-2 text-sm text-slate-300 transition-colors hover:bg-slate-700 hover:text-white"
                >
                  Close
                </button>
              </div>
              <div className="grid gap-3">
                {LESSONS.map((l, i) => (
                  <button
                    key={l.id}
                    onClick={() => { switchLesson(i); setShowMenu(false) }}
                    className={`text-left p-4 rounded-xl border-2 transition-all ${
                      i === currentLesson
                        ? 'border-blue-500 bg-blue-500/20'
                        : 'border-slate-600 hover:border-slate-400 bg-slate-700/50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`font-bold ${i === currentLesson ? 'text-blue-400' : 'text-white'}`}>{l.label}</span>
                      <span className="text-slate-400 text-sm">{l.time}</span>
                    </div>
                    <p className="text-slate-300 mt-1 text-sm">{l.title}</p>
                  </button>
                ))}
              </div>
              <button onClick={() => setShowMenu(false)} className="mt-6 w-full rounded-xl bg-slate-700 py-3 text-white transition-colors hover:bg-slate-600">
                關閉（ESC）
              </button>
            </div>
          </div>
        )}

        {isShareModalOpen && (
          <div className="fixed inset-0 z-50 flex items-end justify-center bg-slate-950/70 p-0 backdrop-blur-sm sm:items-center sm:p-4">
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="share-audience-link-title"
              className="mobile-panel max-h-[85vh] overflow-y-auto rounded-b-none p-5 sm:max-w-xl sm:rounded-3xl sm:p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 id="share-audience-link-title" className="text-xl font-semibold text-white">
                    Share Audience Link
                  </h2>
                  <p className="mt-1 text-sm text-slate-300">
                    Choose how much control the recipient should have, then copy the link.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsShareModalOpen(false)}
                  className="rounded-xl border border-slate-700/80 bg-slate-800/80 px-3 py-1.5 text-sm text-slate-300 transition-colors hover:bg-slate-700 hover:text-white"
                >
                  Close
                </button>
              </div>

              <div className="mt-5 grid gap-3 md:grid-cols-2">
                <button
                  type="button"
                  onClick={() => {
                    setCopyAudienceUrlState('idle')
                    setSharePermissionMode('read-only')
                  }}
                  className={`rounded-2xl border px-4 py-4 text-left transition-colors ${
                    sharePermissionMode === 'read-only'
                      ? 'border-sky-500/70 bg-sky-900/30 text-sky-50'
                      : 'border-slate-700/80 bg-slate-800/70 text-slate-200 hover:border-slate-500/80 hover:bg-slate-800'
                  }`}
                >
                  <div className="text-sm font-semibold">Read-only Audience</div>
                  <p className="mt-1 text-sm text-slate-300">
                    Audience members can view slides but cannot control navigation.
                  </p>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setCopyAudienceUrlState('idle')
                    setSharePermissionMode('control')
                  }}
                  className={`rounded-2xl border px-4 py-4 text-left transition-colors ${
                    sharePermissionMode === 'control'
                      ? 'border-amber-500/70 bg-amber-900/25 text-amber-50'
                      : 'border-slate-700/80 bg-slate-800/70 text-slate-200 hover:border-slate-500/80 hover:bg-slate-800'
                  }`}
                >
                  <div className="text-sm font-semibold">Can Control Presenter</div>
                  <p className="mt-1 text-sm text-slate-300">
                    Anyone with this link can control presenter navigation.
                  </p>
                </button>
              </div>

              <div className="mt-4 rounded-2xl border border-slate-700/70 bg-slate-950/70 p-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Selected Access
                    </div>
                    <div className="mt-1 text-sm font-medium text-white">
                      {sharePermissionMode === 'control' ? 'Interactive control link' : 'Read-only audience link'}
                    </div>
                  </div>
                  <span
                    className={`rounded-full border px-2.5 py-1 text-xs ${
                      sharePermissionMode === 'control'
                        ? 'border-amber-700/70 bg-amber-900/30 text-amber-200'
                        : 'border-sky-700/70 bg-sky-900/30 text-sky-200'
                    }`}
                  >
                    {sharePermissionMode === 'control' ? 'Control enabled' : 'Read-only'}
                  </span>
                </div>
                <p className="mt-3 text-sm text-slate-400">
                  {sharePermissionDescription}
                </p>
                <div className="mt-4 rounded-xl border border-slate-800 bg-slate-900/90 px-3 py-3 font-mono text-xs leading-relaxed text-slate-200 break-all">
                  {selectedShareAudienceUrl ?? 'Audience link unavailable'}
                </div>
              </div>

              <div className="mt-5 flex flex-wrap items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsShareModalOpen(false)}
                  className="rounded-xl border border-slate-700/80 bg-slate-800/80 px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-slate-700 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => {
                    void copyAudienceUrl(selectedShareAudienceUrl)
                  }}
                  disabled={!canCopySelectedShareLink}
                  className={`rounded-xl px-4 py-2 text-sm font-semibold transition-colors ${
                    !canCopySelectedShareLink
                      ? 'cursor-not-allowed bg-slate-800 text-slate-500'
                      : copyAudienceUrlState === 'copied'
                      ? 'bg-emerald-600 text-white hover:bg-emerald-500'
                      : copyAudienceUrlState === 'error'
                      ? 'bg-red-600 text-white hover:bg-red-500'
                      : 'bg-sky-600 text-white hover:bg-sky-500'
                  }`}
                >
                  {shareCopyActionLabel}
                </button>
              </div>
            </div>
          </div>
        )}

        {presenterError && (
          <div className="fixed left-3 right-3 top-3 z-40 rounded-2xl border border-red-700/70 bg-red-950/90 p-4 text-red-100 shadow-xl sm:left-auto sm:right-4 sm:top-4 sm:max-w-md">
            <p className="text-sm font-semibold">Presenter mode warning</p>
            <p className="text-sm mt-1">{presenterError}</p>
            {manualAudienceUrl && (
              <a href={manualAudienceUrl} target="_blank" rel="noreferrer" className="text-sm underline text-red-200 mt-2 block">
                Open audience view manually
              </a>
            )}
            <button
              onClick={reopenAudienceWindow}
              className="mt-3 px-3 py-1.5 text-sm rounded bg-red-700 hover:bg-red-600 transition-colors"
            >
              Retry opening audience window
            </button>
          </div>
        )}

        {/* Slide area */}
        <div className={`min-w-0 text-white ${
          isAdmin && isPresenterModeEnabled
            ? 'w-full px-4 pb-[calc(7.25rem+env(safe-area-inset-bottom))] pt-[calc(4.75rem+env(safe-area-inset-top))] sm:px-6 xl:h-[calc(100dvh-4.5rem)] xl:overflow-hidden xl:px-8 xl:pb-24 xl:pt-6'
            : 'min-h-screen w-full px-4 pb-[calc(7.25rem+env(safe-area-inset-bottom))] pt-[calc(4.75rem+env(safe-area-inset-top))] sm:px-6 md:flex md:flex-col md:items-center md:justify-center md:px-8 md:pb-24 md:pt-8'
        }`}>
          {loading ? (
            <div className="text-center">
              <div className="text-6xl mb-4 animate-pulse">⏳</div>
              <p className="text-2xl text-slate-300">載入課程中...</p>
            </div>
          ) : isAdmin && isPresenterModeEnabled ? (
            <div className="mx-auto grid w-full max-w-[1800px] grid-cols-1 gap-4 sm:gap-6 xl:h-full xl:min-h-0 xl:grid-cols-[minmax(0,1fr)_minmax(500px,1.2fr)]" key={`${currentLesson}-${currentSlide}`}>
              <div className="rounded-2xl border border-slate-700 bg-slate-900/60 p-4 sm:p-6 xl:min-h-0 xl:flex xl:flex-col xl:overflow-hidden">
                <div className="slide-breadcrumb">
                  <span>{lesson.day}</span>
                  <span>›</span>
                  <span>{lesson.label}</span>
                  {slide.section && (
                    <>
                      <span>›</span>
                      <span className="text-blue-400">{slide.section}</span>
                    </>
                  )}
                </div>

                <div className="xl:min-h-0 xl:flex-1 xl:overflow-y-auto xl:overscroll-contain xl:pr-2">
                  {slide.section && (
                    <div className="slide-section-label">
                      {slide.section}
                    </div>
                  )}

                  <h1 className="slide-title-compact">
                    {slide.title}
                  </h1>

                  {slide.subtitle && (
                    <h2 className="slide-subtitle-compact">
                      {slide.subtitle}
                    </h2>
                  )}

                  <div className="slide-content-compact space-y-5">
                    {slide.content}
                  </div>

                  {slide.code && (
                    <pre className="slide-code-block-compact">
                      <code className="text-green-400 font-mono">{slide.code}</code>
                    </pre>
                  )}
                </div>
              </div>

              <div className="space-y-4 xl:min-h-0 xl:flex xl:flex-col">
                <div className="bg-slate-900/70 border border-slate-700 rounded-xl p-4 shrink-0">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm uppercase tracking-wide text-slate-400">Next slide</h3>
                    <span className="text-xs text-slate-500">
                      {Math.min(currentSlide + 2, slides.length)} / {slides.length}
                    </span>
                  </div>
                  {nextSlidePreview ? (
                    <div>
                      {nextSlidePreview.section && (
                        <p className="text-xs text-blue-400 mb-2 uppercase tracking-wide">{nextSlidePreview.section}</p>
                      )}
                      <p className="text-lg text-white font-semibold leading-snug">{nextSlidePreview.title}</p>
                      {nextSlidePreview.subtitle && (
                        <p className="text-sm text-slate-300 mt-2">{nextSlidePreview.subtitle}</p>
                      )}
                    </div>
                  ) : (
                    <p className="text-slate-400 text-sm">This is the last slide.</p>
                  )}
                </div>

                <div className="relative flex min-h-[320px] flex-1 flex-col rounded-xl border border-slate-700 bg-black/70 p-4 sm:min-h-[420px] sm:p-6 xl:min-h-0 xl:overflow-hidden">
                  <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-lg uppercase tracking-wide text-blue-400 font-semibold">📝 演講稿</h3>
                    <span className="text-sm text-slate-400">
                      ⏱ {slide.duration || '2-3'} min · {(slide.notes || '').length} 字
                    </span>
                  </div>
                  <div
                    ref={presenterNotesScrollRef}
                    onScroll={updatePresenterNotesScrollHint}
                    className="min-h-0 flex-1 overflow-y-auto pr-2 text-base leading-relaxed text-slate-100 whitespace-pre-line overscroll-contain sm:text-lg xl:text-xl"
                  >
                    {slide.notes?.trim() ? slide.notes : 'No notes for this slide yet.'}
                  </div>
                  {showPresenterNotesScrollHint && (
                    <div className="pointer-events-none absolute inset-x-6 bottom-6 rounded-b-xl bg-gradient-to-t from-black/95 via-black/70 to-transparent px-4 pb-2 pt-10 text-center">
                      <div className="inline-flex items-center gap-2 rounded-full border border-slate-600/70 bg-slate-950/75 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-200 shadow-lg shadow-slate-950/30">
                        <span aria-hidden="true" className="text-sm leading-none">↓</span>
                        <span>Scroll for more</span>
                      </div>
                    </div>
                  )}
                </div>

              </div>
            </div>
          ) : (
            <div className="slide-shell" key={`${currentLesson}-${currentSlide}`}>
              {/* breadcrumb */}
              <div className="slide-breadcrumb">
                <span>{lesson.day}</span>
                <span>›</span>
                <span>{lesson.label}</span>
                {slide.section && (
                  <>
                    <span>›</span>
                    <span className="text-blue-400">{slide.section}</span>
                  </>
                )}
              </div>

              {slide.section && (
                <div className="slide-section-label">
                  {slide.section}
                </div>
              )}

              <h1 className="slide-title">
                {slide.title}
              </h1>

              {slide.subtitle && (
                <h2 className="slide-subtitle">
                  {slide.subtitle}
                </h2>
              )}

              <div className="slide-content-responsive space-y-5">
                {slide.content}
              </div>

              {slide.code && (
                <pre className="slide-code-block">
                  <code className="text-green-400 font-mono">{slide.code}</code>
                </pre>
              )}
            </div>
          )}
        </div>

        {/* Speaker notes (admin only) */}
        {isAdmin && !isPresenterModeEnabled && showNotes && slide.notes && (
          <div className="fixed bottom-[calc(6.75rem+env(safe-area-inset-bottom))] left-3 right-3 z-30 max-h-[60vh] overflow-y-auto rounded-2xl border border-slate-700 bg-black/95 p-4 text-white shadow-2xl backdrop-blur-sm sm:p-6 md:left-auto md:right-4 md:w-[800px] md:p-8">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-blue-400 font-semibold text-xl">📝 演講稿</h3>
              <div className="flex flex-wrap gap-3 text-sm text-slate-400">
                <span>⏱ {slide.duration || '2-3'} 分鐘</span>
                <span className={slide.notes.length >= parseInt(slide.duration || '2') * 150 ? 'text-green-400' : 'text-yellow-400'}>
                  {slide.notes.length} / {parseInt(slide.duration || '2') * 150} 字
                  {slide.notes.length >= parseInt(slide.duration || '2') * 150 ? ' ✅' : ' ⚠️'}
                </span>
              </div>
            </div>
            <div className="text-slate-100 whitespace-pre-line leading-loose text-xl">
              {slide.notes}
            </div>
          </div>
        )}

        {/* Bottom nav */}
        <div className={`fixed bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm border-t border-slate-700/50 z-20 ${
          shouldRenderSidebar && sidebarOpen ? 'md:pl-[420px]' : ''
        }`}>
          <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 sm:px-4">
            <div className="flex flex-1 items-center gap-2 sm:flex-none">
              {shouldRenderSidebar && (
                <button
                  onClick={() => setSidebarOpen(prev => !prev)}
                  className="p-2 bg-slate-700/80 hover:bg-slate-600 rounded-lg transition-colors text-slate-300"
                  title="切換側邊欄 (B)"
                >
                  {sidebarOpen ? '◀' : '▶'}
                </button>
              )}
              <button
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className="px-4 py-2 bg-slate-700/80 hover:bg-slate-600 disabled:opacity-30 disabled:cursor-not-allowed rounded-lg transition-colors text-sm"
              >
                ← 上一頁
              </button>
            </div>

            <div className="order-3 flex w-full flex-col gap-2 text-center md:order-none md:w-auto md:items-end">
              <div className="flex flex-wrap items-center justify-center gap-2 md:justify-end">
                <span className="hidden text-sm text-slate-400 md:block">{lesson.label}</span>
                <span className="hidden text-slate-600 md:block">·</span>
                <span className="text-slate-400 text-sm">{currentSlide + 1} / {slides.length}</span>
                {isAdmin && isPresenterModeEnabled && (
                  <>
                    <span className="hidden text-slate-600 md:block">·</span>
                    <span className="hidden text-slate-400 text-sm md:block">Timer</span>
                    <span className={`font-semibold tabular-nums text-sm ${timerPaused ? 'text-amber-400' : 'text-slate-200'}`}>
                      {elapsedMinutes}:{elapsedRemainderSeconds.toString().padStart(2, '0')}
                    </span>
                    <button
                      onClick={toggleTimerPause}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                        timerPaused
                          ? 'bg-emerald-600 hover:bg-emerald-500 text-white'
                          : 'bg-amber-600 hover:bg-amber-500 text-white'
                      }`}
                      title={timerPaused ? '繼續計時' : '暫停計時'}
                    >
                      {timerPaused ? '▶ 繼續' : '⏸ 暫停'}
                    </button>
                  </>
                )}
              </div>

              {isAdmin && (
                <div className="flex flex-col items-center gap-2 md:items-end">
                  <div className="flex flex-wrap items-center justify-center gap-2 md:justify-end">
                    {!isPresenterModeEnabled && (
                      <button
                        onClick={() => setShowNotes(!showNotes)}
                        className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-colors ${
                          showNotes ? 'bg-blue-600 text-white' : 'bg-slate-700/80 text-slate-300 hover:bg-slate-600'
                        }`}
                      >
                        {showNotes ? 'Hide Notes' : 'Show Notes'} (N)
                      </button>
                    )}

                    <div className="flex flex-wrap items-center justify-center gap-2 rounded-2xl border border-slate-700/70 bg-slate-900/65 p-1.5 shadow-lg shadow-slate-950/20">
                      <button
                        onClick={() => {
                          if (isPresenterModeEnabled) {
                            stopPresenterMode()
                          } else {
                            startPresenterMode()
                          }
                        }}
                        className={`min-w-[9.5rem] rounded-xl px-4 py-2 text-sm font-semibold transition-colors sm:min-w-[11rem] ${
                          isPresenterModeEnabled
                            ? 'bg-red-600/90 text-white hover:bg-red-500'
                            : 'bg-emerald-600/90 text-white hover:bg-emerald-500'
                        }`}
                        title="Toggle presenter mode (P)"
                      >
                        {isPresenterModeEnabled ? 'End Presenter (P)' : 'Start Presenter (P)'}
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setCopyAudienceUrlState('idle')
                          setSharePermissionMode('read-only')
                          setIsShareModalOpen(true)
                        }}
                        disabled={!canShareAudienceUrl}
                        aria-disabled={!canShareAudienceUrl}
                        title={shareAudienceButtonTitle}
                        className={`min-w-[8.5rem] rounded-xl border px-4 py-2 text-sm font-semibold transition-colors sm:min-w-[10rem] ${
                          !canShareAudienceUrl
                            ? 'cursor-not-allowed border-slate-700/80 bg-slate-800/80 text-slate-500'
                            : 'border-sky-600/70 bg-sky-900/35 text-sky-100 hover:bg-sky-800/50'
                        }`}
                      >
                        Share Link
                      </button>
                    </div>
                  </div>

                  {isPresenterModeEnabled && (
                    <div className="flex flex-wrap items-center justify-center gap-2 md:justify-end">
                      <span className={`text-xs px-2.5 py-1 rounded-full border ${
                        presenterSyncStatus === 'connected'
                          ? 'text-emerald-300 border-emerald-700/70 bg-emerald-900/40'
                          : presenterSyncStatus === 'unsupported'
                          ? 'text-red-300 border-red-700/70 bg-red-900/40'
                          : 'text-amber-300 border-amber-700/70 bg-amber-900/40'
                      }`}>
                        {presenterStatusLabel}
                      </span>
                      <span className={`text-xs px-2.5 py-1 rounded-full border ${
                        syncCapability === 'cross-browser'
                          ? 'text-sky-300 border-sky-700/70 bg-sky-900/40'
                          : syncCapability === 'same-browser'
                          ? 'text-slate-300 border-slate-700/70 bg-slate-900/40'
                          : 'text-red-300 border-red-700/70 bg-red-900/40'
                      }`}>
                        {presenterTransportLabel}
                      </span>
                      {presenterSyncStatus === 'disconnected' && (
                        <button
                          onClick={reopenAudienceWindow}
                          className="px-3 py-1.5 rounded-full text-xs font-medium border border-amber-700/70 bg-amber-900/40 text-amber-200 hover:bg-amber-800/50 transition-colors"
                        >
                          Reopen Audience
                        </button>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>

            <button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="order-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium transition-colors hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-30 sm:order-none"
            >
              下一頁 →
            </button>
          </div>
        </div>
      </div>

      {/* Slide rail（靠右） */}
      <div className="fixed right-3 top-1/2 z-10 hidden -translate-y-1/2 md:block">
        <div className="flex flex-col items-center gap-2 rounded-2xl border border-slate-800/70 bg-slate-950/55 px-2 py-3 shadow-xl shadow-slate-950/30 backdrop-blur">
          <div className="rounded-full border border-slate-800/80 bg-slate-900/80 px-2 py-1 text-[10px] font-semibold tracking-[0.2em] text-slate-300">
            {currentSlide + 1}
            <span className="ml-1 text-slate-500">/ {slides.length}</span>
          </div>

          {hiddenSlidesBefore > 0 && (
            <button
              type="button"
              onClick={() => goToSlide(Math.max(visibleSlideRail.start - SLIDE_RAIL_VISIBLE_COUNT, 0))}
              className="min-h-7 rounded-full px-2 text-[10px] font-medium text-slate-400 transition-colors hover:bg-slate-800/70 hover:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-400/70"
              aria-label={`Jump back to earlier slides, ${hiddenSlidesBefore} hidden above`}
              title={`${hiddenSlidesBefore} earlier slides`}
            >
              ↑ {hiddenSlidesBefore}
            </button>
          )}

          <div className="flex flex-col items-center gap-2">
            {slides.slice(visibleSlideRail.start, visibleSlideRail.end).map((s, offset) => {
              const index = visibleSlideRail.start + offset
              const isActive = index === currentSlide

              return (
                <div key={index} className="group relative flex items-center justify-center">
                  <button
                    type="button"
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to slide ${index + 1}: ${s.title}`}
                    aria-current={isActive ? 'page' : undefined}
                    className={`rounded-full border transition-all focus:outline-none focus:ring-2 focus:ring-blue-400/70 ${
                      isActive
                        ? 'h-8 w-3 border-blue-300/80 bg-blue-400 shadow-lg shadow-blue-500/35'
                        : 'h-2.5 w-2.5 border-slate-500/80 bg-slate-600/80 hover:h-4 hover:w-2.5 hover:border-slate-300/80 hover:bg-slate-300'
                    }`}
                    title={s.title}
                  >
                    <span className="sr-only">{`${index + 1}. ${s.title}`}</span>
                  </button>
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute right-full top-1/2 mr-3 -translate-y-1/2 whitespace-nowrap rounded-lg border border-slate-700/80 bg-slate-950/95 px-2.5 py-1 text-xs text-slate-100 opacity-0 shadow-lg transition-opacity duration-150 group-hover:opacity-100 group-focus-within:opacity-100"
                  >
                    {index + 1}. {s.title}
                  </div>
                </div>
              )
            })}
          </div>

          {hiddenSlidesAfter > 0 && (
            <button
              type="button"
              onClick={() => goToSlide(Math.min(visibleSlideRail.end, slides.length - 1))}
              className="min-h-7 rounded-full px-2 text-[10px] font-medium text-slate-400 transition-colors hover:bg-slate-800/70 hover:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-400/70"
              aria-label={`Jump forward to later slides, ${hiddenSlidesAfter} hidden below`}
              title={`${hiddenSlidesAfter} later slides`}
            >
              ↓ {hiddenSlidesAfter}
            </button>
          )}
        </div>
      </div>

      {/* Keyboard hint */}
      <div className="fixed left-4 bottom-16 hidden text-slate-600 text-xs lg:block">
        {isAdmin
          ? '← → 換頁 | N 演講稿 | B 側邊欄 | M 課程選單 | P 演講者模式'
          : '← → 換頁 | B 側邊欄 | M 課程選單'}
      </div>
    </div>
  )
}

export default App
