import type { ReactNode } from 'react'
import { buildDockerDay2SlideSpecs } from './parser'
import type { BulletGroup, SlideCardSpec } from './parser'

export interface Slide {
  title: string
  subtitle?: string
  section?: string
  content?: ReactNode
  code?: string
  image?: string
  notes?: string
  duration?: string
}

const rawDocuments = import.meta.glob('./content/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

function getFileName(path: string): string {
  const parts = path.split('/')
  return parts[parts.length - 1]
}

const documents = Object.fromEntries(
  Object.entries(rawDocuments).map(([path, content]) => [getFileName(path), content]),
)

const slideSpecs = buildDockerDay2SlideSpecs(documents)

function splitComparisonCells(item: string): string[] | null {
  const cells = item
    .split(' / ')
    .map((cell) => cell.trim())
    .filter(Boolean)

  return cells.length >= 2 ? cells : null
}

function getComparisonRows(items: string[]): string[][] | null {
  if (items.length < 2) {
    return null
  }

  const rows = items.map(splitComparisonCells)
  if (rows.some((row) => row === null)) {
    return null
  }

  const typedRows = rows as string[][]
  const columnCount = typedRows[0].length

  if (columnCount < 2 || typedRows.some((row) => row.length !== columnCount)) {
    return null
  }

  return typedRows
}

function renderOverview(summary: BulletGroup[], cards: SlideCardSpec[]) {
  if (summary.length === 0 && cards.length === 0) {
    return null
  }

  const overviewChips = summary.length === 0
    ? cards.slice(0, 3).map((card) => card.title)
    : []

  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-cyan-400/20 bg-gradient-to-r from-blue-950/70 via-slate-900/80 to-cyan-950/65 shadow-[0_24px_60px_rgba(2,6,23,0.35)]">
      <div className="border-b border-white/10 px-5 py-4 sm:px-6">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-cyan-300/80">
          Overview
        </p>
      </div>

      <div className="space-y-4 px-5 py-5 sm:px-6">
        {summary.length > 0 ? (
          summary.map((group, groupIndex) => (
            <div key={`${group.label ?? 'group'}-${groupIndex}`} className="space-y-3">
              {group.label && (
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-100/75">
                  {group.label}
                </p>
              )}

              <div className="flex flex-wrap gap-2.5">
                {group.items.map((item, itemIndex) => (
                  <span
                    key={`${group.label ?? 'group'}-${groupIndex}-${itemIndex}`}
                    className="rounded-full border border-white/10 bg-white/6 px-3.5 py-1.5 text-sm font-medium leading-relaxed text-slate-100 break-normal whitespace-normal [overflow-wrap:break-word] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-wrap gap-2.5">
            {overviewChips.map((item) => (
              <span
                key={item}
                className="rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3.5 py-1.5 text-sm font-semibold leading-relaxed text-cyan-100 break-normal whitespace-normal [overflow-wrap:break-word]"
              >
                {item}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

function renderComparisonGroup(group: BulletGroup, groupIndex: number, rows: string[][]) {
  const [header, ...bodyRows] = rows
  const gridStyle = { gridTemplateColumns: `repeat(${header.length}, minmax(0, 1fr))` }

  return (
    <div key={`${group.label ?? 'group'}-${groupIndex}`} className="space-y-3">
      {group.label && (
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/75">
          {group.label}
        </p>
      )}

      <div className="overflow-hidden rounded-2xl border border-white/8 bg-slate-950/55">
        <div className="grid gap-px bg-white/6" style={gridStyle}>
          {header.map((cell, cellIndex) => (
            <div
              key={`header-${cellIndex}`}
              className="bg-slate-900/95 px-3 py-2.5 text-sm font-semibold uppercase tracking-[0.16em] text-slate-300"
            >
              {cell}
            </div>
          ))}
        </div>

        <div className="divide-y divide-white/6">
          {bodyRows.map((row, rowIndex) => (
            <div
              key={`row-${rowIndex}`}
              className="grid gap-px bg-white/6"
              style={gridStyle}
            >
              {row.map((cell, cellIndex) => (
                <div
                  key={`row-${rowIndex}-cell-${cellIndex}`}
                  className="bg-slate-950/70 px-3 py-3 text-[1.02rem] leading-7 text-slate-100 break-normal [overflow-wrap:break-word]"
                >
                  {cell}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function renderDetailGroup(group: BulletGroup, groupIndex: number) {
  const comparisonRows = getComparisonRows(group.items)

  if (comparisonRows) {
    return renderComparisonGroup(group, groupIndex, comparisonRows)
  }

  return (
    <div key={`${group.label ?? 'group'}-${groupIndex}`} className="space-y-3">
      {group.label && (
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/75">
          {group.label}
        </p>
      )}

      <ul className="space-y-3.5">
        {group.items.map((item, itemIndex) => (
          <li
            key={`${group.label ?? 'group'}-${groupIndex}-${itemIndex}`}
            className="flex items-start gap-3.5"
          >
            <span className="mt-3 h-2.5 w-2.5 flex-none rounded-full bg-cyan-300/90" />
            <span className="min-w-0 flex-1 text-lg leading-8 text-slate-100 break-normal [overflow-wrap:break-word]">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function renderCards(cards: SlideCardSpec[]) {
  if (cards.length === 0) {
    return null
  }

  const minCardWidth = cards.length <= 2 ? '30rem' : '36rem'
  const gridStyle = cards.length > 1
    ? { gridTemplateColumns: `repeat(auto-fit, minmax(min(100%, ${minCardWidth}), 1fr))` }
    : undefined

  return (
    <div className="grid gap-4" style={gridStyle}>
      {cards.map((card) => (
        <div
          key={card.title}
          className="rounded-[1.6rem] border border-slate-700/70 bg-slate-900/55 p-5 shadow-[0_18px_50px_rgba(2,6,23,0.24)] backdrop-blur-sm"
        >
          <div className="mb-5 h-1.5 w-14 rounded-full bg-gradient-to-r from-cyan-300 to-blue-400" />
          <p className="mb-5 text-2xl font-semibold leading-tight text-slate-50">
            {card.title}
          </p>
          <div className="space-y-5">
            {card.bullets.map(renderDetailGroup)}
          </div>
        </div>
      ))}
    </div>
  )
}

function renderFallback() {
  return (
    <div className="bg-slate-800/55 border border-slate-700 rounded-xl p-4">
      <p className="text-slate-300">Use the speaker notes for the full explanation.</p>
    </div>
  )
}

function buildSlide(spec: (typeof slideSpecs)[number]): Slide {
  const shouldRenderFallback = spec.summary.length === 0 && spec.cards.length === 0 && !spec.code

  return {
    title: spec.title,
    subtitle: `${spec.subtitle} · ${spec.hourTitle}`,
    section: spec.section,
    duration: spec.duration,
    code: spec.code,
    notes: spec.notes,
    content: (
      <div className="space-y-5">
        {renderOverview(spec.summary, spec.cards)}
        {renderCards(spec.cards)}
        {shouldRenderFallback ? renderFallback() : null}
      </div>
    ),
  }
}

function buildSlidesForHours(minHour: number, maxHour: number): Slide[] {
  return slideSpecs
    .filter((spec) => spec.hour >= minHour && spec.hour <= maxHour)
    .map(buildSlide)
}

export const dockerDay2Slides: Slide[] = slideSpecs.map(buildSlide)
export const dockerDay2MorningSlides = buildSlidesForHours(1, 3)
export const dockerDay2AfternoonSlides = buildSlidesForHours(4, 14)
