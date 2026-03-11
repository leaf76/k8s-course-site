export interface HourMeta {
  hour: number
  title: string
  lectureMinutes: number
}

export interface SlideCardSpec {
  title: string
  bullets: string[]
}

export interface SlideSpec {
  hour: number
  hourTitle: string
  phase: 'morning' | 'afternoon'
  title: string
  subtitle: string
  section: string
  duration: string
  summary: string[]
  cards: SlideCardSpec[]
  code?: string
  notes: string
}

interface MarkdownSection {
  heading: string
  title: string
  rawDuration: number
  body: string
}

interface MarkdownSubSection {
  title: string
  body: string
}

const IGNORE_SECTION_TITLES = new Set([
  '板書 / PPT 建議',
])

function normalizeLine(value: string): string {
  return value.replace(/\r/g, '').trim()
}

export function normalizeSectionTitle(value: string): string {
  return normalizeLine(value)
    .replace(/^第?[一二三四五六七八九十\d]+[、.．]\s*/, '')
    .replace(/^\d+\.\d+\s*/, '')
    .replace(/\s*（\d+\s*分鐘）\s*$/u, '')
    .replace(/\s+/g, ' ')
    .trim()
}

function parseDurationFromHeading(value: string): number {
  const match = value.match(/（(\d+)\s*分鐘）/u)
  return match ? Number.parseInt(match[1], 10) : 1
}

function pushSection(
  sections: MarkdownSection[],
  heading: string | null,
  buffer: string[],
) {
  if (!heading) {
    return
  }

  const title = normalizeSectionTitle(heading)
  if (!title || IGNORE_SECTION_TITLES.has(title)) {
    return
  }

  sections.push({
    heading,
    title,
    rawDuration: parseDurationFromHeading(heading),
    body: buffer.join('\n').trim(),
  })
}

export function extractLevelTwoSections(markdown: string): MarkdownSection[] {
  const sections: MarkdownSection[] = []
  const lines = markdown.replace(/\r/g, '').split('\n')
  let currentHeading: string | null = null
  let buffer: string[] = []

  for (const line of lines) {
    if (line.startsWith('## ')) {
      pushSection(sections, currentHeading, buffer)
      currentHeading = line.slice(3).trim()
      buffer = []
      continue
    }

    buffer.push(line)
  }

  pushSection(sections, currentHeading, buffer)
  return sections
}

function pushSubSection(
  sections: MarkdownSubSection[],
  heading: string | null,
  buffer: string[],
) {
  if (!heading) {
    return
  }

  sections.push({
    title: normalizeSectionTitle(heading),
    body: buffer.join('\n').trim(),
  })
}

function extractLevelThreeSections(markdown: string): MarkdownSubSection[] {
  const sections: MarkdownSubSection[] = []
  const lines = markdown.replace(/\r/g, '').split('\n')
  let currentHeading: string | null = null
  let buffer: string[] = []

  for (const line of lines) {
    if (line.startsWith('### ')) {
      pushSubSection(sections, currentHeading, buffer)
      currentHeading = line.slice(4).trim()
      buffer = []
      continue
    }

    buffer.push(line)
  }

  pushSubSection(sections, currentHeading, buffer)
  return sections
}

function cleanTableRow(line: string): string {
  return line
    .replace(/^\|/, '')
    .replace(/\|$/, '')
    .split('|')
    .map((part) => normalizeLine(part))
    .filter(Boolean)
    .join(' / ')
}

function collectKeyLines(markdown: string, limit: number): string[] {
  const results: string[] = []
  const lines = markdown.replace(/\r/g, '').split('\n')
  let inCodeBlock = false

  for (const rawLine of lines) {
    const line = rawLine.trim()

    if (line.startsWith('```')) {
      inCodeBlock = !inCodeBlock
      continue
    }

    if (inCodeBlock || !line || line.startsWith('## ') || line.startsWith('### ')) {
      continue
    }

    if (/^\|(?:\s*[-:]+\s*\|)+$/.test(line)) {
      continue
    }

    let normalized = line

    if (/^[-*+]\s+/.test(line)) {
      normalized = line.replace(/^[-*+]\s+/, '')
    } else if (/^\d+\.\s+/.test(line)) {
      normalized = line.replace(/^\d+\.\s+/, '')
    } else if (line.startsWith('|')) {
      normalized = cleanTableRow(line)
    }

    normalized = normalized
      .replace(/`([^`]+)`/g, '$1')
      .replace(/\*\*([^*]+)\*\*/g, '$1')
      .replace(/\*([^*]+)\*/g, '$1')
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
      .trim()

    if (!normalized) {
      continue
    }

    results.push(normalized)
    if (results.length >= limit) {
      break
    }
  }

  return results
}

function extractFirstCodeBlock(markdown: string): string | undefined {
  const match = markdown.match(/```(?:[\w-]+)?\n([\s\S]*?)```/)
  return match?.[1].trim()
}

function cleanNotes(markdown: string): string {
  return markdown
    .replace(/\r/g, '')
    .replace(/^##+\s+/gm, '')
    .replace(/```(?:[\w-]+)?\n([\s\S]*?)```/g, (_match, code: string) => `\n${code.trim()}\n`)
    .replace(/`([^`]+)`/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1')
    .replace(/^\s*[-*+]\s+/gm, '• ')
    .replace(/^\s*\d+\.\s+/gm, '• ')
    .replace(/^\|(?:\s*[-:]+\s*\|)+$/gm, '')
    .replace(/^\|(.+)\|$/gm, (_match, row: string) => row
      .split('|')
      .map((part) => normalizeLine(part))
      .filter(Boolean)
      .join(' | '))
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}

function scaleDurations(rawDurations: number[], targetTotal: number): number[] {
  if (rawDurations.length === 0) {
    return []
  }

  const safeTarget = Math.max(targetTotal, rawDurations.length)
  const rawTotal = rawDurations.reduce((sum, value) => sum + value, 0)
  if (rawTotal <= 0) {
    return rawDurations.map(() => 1)
  }

  const scaled = rawDurations.map((value) => (value / rawTotal) * safeTarget)
  const floors = scaled.map((value) => Math.max(1, Math.floor(value)))
  let allocated = floors.reduce((sum, value) => sum + value, 0)

  if (allocated > safeTarget) {
    for (let index = floors.length - 1; index >= 0 && allocated > safeTarget; index -= 1) {
      if (floors[index] > 1) {
        floors[index] -= 1
        allocated -= 1
      }
    }
    return floors
  }

  const remainders = scaled
    .map((value, index) => ({ index, remainder: value - Math.floor(value) }))
    .sort((left, right) => right.remainder - left.remainder)

  for (const item of remainders) {
    if (allocated >= safeTarget) {
      break
    }
    floors[item.index] += 1
    allocated += 1
  }

  return floors
}

export function parseCourseSchedule(markdown: string): HourMeta[] {
  const hours: HourMeta[] = []
  const regex = /^\|\s*Hour\s+(\d+)\s*\|\s*([^|]+?)\s*\|\s*(\d+)\s*分鐘\s*\|/gm

  for (const match of markdown.matchAll(regex)) {
    hours.push({
      hour: Number.parseInt(match[1], 10),
      title: normalizeLine(match[2]),
      lectureMinutes: Number.parseInt(match[3], 10),
    })
  }

  return hours
}

export function buildDockerDay2SlideSpecs(
  documents: Record<string, string>,
): SlideSpec[] {
  const schedule = parseCourseSchedule(documents['course-schedule.md'] ?? '')
  const scheduleByHour = new Map(schedule.map((hour) => [hour.hour, hour]))
  const specs: SlideSpec[] = []

  for (let hour = 1; hour <= 14; hour += 1) {
    const sourceDay = hour <= 7 ? 2 : 3
    const outline = documents[`day${sourceDay}-hour${hour}.md`]
    const full = documents[`day${sourceDay}-hour${hour}-full.md`]
    const hourMeta = scheduleByHour.get(hour)

    if (!outline || !full || !hourMeta) {
      continue
    }

    const outlineSections = extractLevelTwoSections(outline)
    const fullSections = extractLevelTwoSections(full)
    const fullByTitle = new Map(fullSections.map((section) => [section.title, section]))
    const normalizedDurations = scaleDurations(
      outlineSections.map((section) => section.rawDuration),
      hourMeta.lectureMinutes,
    )

    outlineSections.forEach((section, index) => {
      const matchingFullSection = fullByTitle.get(section.title)
      const subSections = extractLevelThreeSections(section.body)
      const summary = collectKeyLines(section.body, 3)
      const cards = subSections
        .map((subSection) => ({
          title: subSection.title,
          bullets: collectKeyLines(subSection.body, 3),
        }))
        .filter((card) => card.bullets.length > 0)
      const phase = hour <= 3 ? 'morning' : 'afternoon'
      const subtitlePrefix = sourceDay === 2
        ? `Day 2 ${phase === 'morning' ? '上午' : '下午'}`
        : 'Day 3 擴充'

      specs.push({
        hour,
        hourTitle: hourMeta.title,
        phase,
        title: section.title,
        subtitle: `${subtitlePrefix} · Hour ${hour}`,
        section: `Hour ${hour}｜${hourMeta.title}`,
        duration: String(normalizedDurations[index] ?? 1),
        summary,
        cards,
        code: extractFirstCodeBlock(section.body),
        notes: cleanNotes(matchingFullSection?.body ?? section.body),
      })
    })
  }

  return specs
}
