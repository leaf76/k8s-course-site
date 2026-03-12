import type { Slide } from './slides/lesson1-morning/index'
import type { ViewMode } from './types/presentation'

export interface SectionSlideEntry {
  index: number
  title: string
}

export interface SectionEntry {
  name: string
  firstIndex: number
  slideCount: number
  totalMinutes: number
  totalExpectedChars: number
  totalActualChars: number
  slides: SectionSlideEntry[]
}

export interface OutlineLessonRef {
  id: string
  day: string
}

export function shouldShowSidebar(viewMode: ViewMode): boolean {
  return viewMode !== 'audience'
}

export function expandLessonInOutline(expandedLessons: ReadonlySet<string>, lessonId: string): Set<string> {
  return new Set(expandedLessons).add(lessonId)
}

export function revealDayInOutline(collapsedDays: ReadonlySet<string>, day: string): Set<string> {
  const next = new Set(collapsedDays)
  next.delete(day)
  return next
}

export function buildSections(slides: Slide[]): SectionEntry[] {
  const map = new Map<string, SectionEntry>()

  slides.forEach((slide, index) => {
    const name = slide.section || '未分類'
    if (!map.has(name)) {
      map.set(name, {
        name,
        firstIndex: index,
        slideCount: 0,
        totalMinutes: 0,
        totalExpectedChars: 0,
        totalActualChars: 0,
        slides: [],
      })
    }

    const entry = map.get(name)!
    const duration = Number.parseInt(slide.duration || '2', 10)
    entry.slideCount += 1
    entry.totalMinutes += duration
    entry.totalExpectedChars += duration * 150
    entry.totalActualChars += (slide.notes || '').length
    entry.slides.push({
      index,
      title: slide.title || '未命名投影片',
    })
  })

  return Array.from(map.values())
}

export function buildSectionKey(section: Pick<SectionEntry, 'name' | 'firstIndex'>): string {
  return `${section.name}::${section.firstIndex}`
}

export function buildFocusedOutlineState(
  lessons: OutlineLessonRef[],
  currentLessonId: string,
  currentDay: string,
): {
  collapsedDays: Set<string>
  expandedLessons: Set<string>
} {
  return {
    collapsedDays: new Set(
      Array.from(new Set(lessons.map((lesson) => lesson.day)))
        .filter((day) => day !== currentDay),
    ),
    expandedLessons: new Set([currentLessonId]),
  }
}

export function isCurrentSection(
  sections: SectionEntry[],
  sectionIndex: number,
  currentSlide: number,
): boolean {
  const section = sections[sectionIndex]
  const nextSection = sections[sectionIndex + 1]

  if (!section) {
    return false
  }

  return currentSlide >= section.firstIndex
    && (nextSection ? currentSlide < nextSection.firstIndex : true)
}
