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

function renderBulletGroups(groups: BulletGroup[], itemClassName: string) {
  if (groups.length === 0) {
    return null
  }

  return (
    <div className="space-y-4">
      {groups.map((group, groupIndex) => (
        <div key={`${group.label ?? 'group'}-${groupIndex}`} className="space-y-2">
          {group.label && (
            <p className="text-slate-100 font-medium leading-relaxed">
              {group.label}
            </p>
          )}
          <ul className="space-y-2">
            {group.items.map((item, itemIndex) => (
              <li
                key={`${group.label ?? 'group'}-${groupIndex}-${itemIndex}`}
                className={itemClassName}
              >
                • {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

function renderSummary(summary: BulletGroup[]) {
  if (summary.length === 0) {
    return null
  }

  return (
    <div className="bg-slate-800/55 border border-slate-700 rounded-xl p-4">
      <p className="text-blue-400 font-semibold mb-3">本段重點</p>
      {renderBulletGroups(summary, 'text-slate-200 leading-relaxed')}
    </div>
  )
}

function renderCards(cards: SlideCardSpec[]) {
  if (cards.length === 0) {
    return null
  }

  return (
    <div className={`grid gap-4 ${cards.length > 1 ? 'md:grid-cols-2' : ''}`}>
      {cards.map((card) => (
        <div key={card.title} className="bg-slate-800/45 border border-slate-700 rounded-xl p-4">
          <p className="text-blue-300 font-semibold mb-3">{card.title}</p>
          {renderBulletGroups(card.bullets, 'text-slate-200 text-lg leading-relaxed')}
        </div>
      ))}
    </div>
  )
}

function renderFallback() {
  return (
    <div className="bg-slate-800/55 border border-slate-700 rounded-xl p-4">
      <p className="text-slate-300">本段內容請搭配演講稿講解。</p>
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
        {renderSummary(spec.summary)}
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
