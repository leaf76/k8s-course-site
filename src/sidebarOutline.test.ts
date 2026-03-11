import { describe, expect, it } from 'vitest'
import type { Slide } from './slides/lesson1-morning/index'
import { buildFocusedOutlineState, buildSectionKey, buildSections, isCurrentSection } from './sidebarOutline'

const slides: Slide[] = [
  { title: 'A-1', section: '開場', duration: '2', notes: 'abc' },
  { title: 'A-2', section: '開場', duration: '3', notes: 'abcdef' },
  { title: 'B-1', section: '實作', duration: '4', notes: 'abcdefghi' },
  { title: 'C-1', duration: '1', notes: '' },
]

describe('sidebarOutline helpers', () => {
  it('builds grouped section metadata from slides', () => {
    expect(buildSections(slides)).toEqual([
      {
        name: '開場',
        firstIndex: 0,
        slideCount: 2,
        totalMinutes: 5,
        totalExpectedChars: 750,
        totalActualChars: 9,
        slides: [
          { index: 0, title: 'A-1' },
          { index: 1, title: 'A-2' },
        ],
      },
      {
        name: '實作',
        firstIndex: 2,
        slideCount: 1,
        totalMinutes: 4,
        totalExpectedChars: 600,
        totalActualChars: 9,
        slides: [
          { index: 2, title: 'B-1' },
        ],
      },
      {
        name: '未分類',
        firstIndex: 3,
        slideCount: 1,
        totalMinutes: 1,
        totalExpectedChars: 150,
        totalActualChars: 0,
        slides: [
          { index: 3, title: 'C-1' },
        ],
      },
    ])
  })

  it('returns focused outline state for the current lesson only', () => {
    const outlineState = buildFocusedOutlineState(
      [
        { id: 'lesson1-morning', day: '第一天' },
        { id: 'lesson1-afternoon', day: '第一天' },
        { id: 'lesson2-morning', day: '第二天' },
      ],
      'lesson1-afternoon',
      '第一天',
    )

    expect(Array.from(outlineState.collapsedDays)).toEqual(['第二天'])
    expect(Array.from(outlineState.expandedLessons)).toEqual(['lesson1-afternoon'])
  })

  it('detects the active section from the current slide index', () => {
    const sections = buildSections(slides)

    expect(isCurrentSection(sections, 0, 0)).toBe(true)
    expect(isCurrentSection(sections, 0, 1)).toBe(true)
    expect(isCurrentSection(sections, 0, 2)).toBe(false)
    expect(isCurrentSection(sections, 1, 2)).toBe(true)
    expect(isCurrentSection(sections, 2, 3)).toBe(true)
  })

  it('builds a stable key for section expansion state', () => {
    const [firstSection] = buildSections(slides)
    expect(buildSectionKey(firstSection)).toBe('開場::0')
  })
})
