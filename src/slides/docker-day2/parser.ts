export interface HourMeta {
  hour: number
  title: string
  lectureMinutes: number
}

export interface BulletGroup {
  label?: string
  items: string[]
}

export interface SlideCardSpec {
  title: string
  bullets: BulletGroup[]
}

export interface SlideSpec {
  hour: number
  hourTitle: string
  phase: 'morning' | 'afternoon'
  title: string
  subtitle: string
  section: string
  duration: string
  summary: BulletGroup[]
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

interface MarkdownChunk {
  title: string
  body: string
  isIntro: boolean
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

function extractLeadBody(markdown: string): string {
  const lines = markdown.replace(/\r/g, '').split('\n')
  const leadLines: string[] = []

  for (const line of lines) {
    if (line.startsWith('### ')) {
      break
    }

    leadLines.push(line)
  }

  return leadLines.join('\n').trim()
}

function pushChunk(
  chunks: MarkdownChunk[],
  title: string,
  buffer: string[],
  isIntro: boolean,
) {
  const body = buffer.join('\n').trim()
  if (!body) {
    return
  }

  chunks.push({
    title: normalizeSectionTitle(title),
    body,
    isIntro,
  })
}

function extractStepChunks(markdown: string, parentTitle: string): MarkdownChunk[] {
  const chunks: MarkdownChunk[] = []
  const lines = markdown.replace(/\r/g, '').split('\n')
  let currentTitle = parentTitle
  let currentIsIntro = true
  let buffer: string[] = []

  for (const line of lines) {
    if (line.startsWith('### ')) {
      pushChunk(chunks, currentTitle, buffer, currentIsIntro)
      currentTitle = line.slice(4).trim()
      currentIsIntro = false
      buffer = []
      continue
    }

    buffer.push(line)
  }

  pushChunk(chunks, currentTitle, buffer, currentIsIntro)
  return chunks
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

function isMarkdownThematicBreak(line: string): boolean {
  const normalized = line.trim()
  return /^(?:-{3,}|\*{3,}|_{3,}|(?:-\s+){2,}-?|(?:\*\s+){2,}\*?|(?:_\s+){2,}_?)$/.test(normalized)
}

function normalizeSummaryLine(line: string): string {
  let normalized = line.trim()

  if (/^[-*+]\s+/.test(normalized)) {
    normalized = normalized.replace(/^[-*+]\s+/, '')
  } else if (/^\d+\.\s+/.test(normalized)) {
    normalized = normalized.replace(/^\d+\.\s+/, '')
  } else if (normalized.startsWith('|')) {
    normalized = cleanTableRow(normalized)
  }

  return normalized
    .replace(/`([^`]+)`/g, '$1')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .trim()
}

function isMarkdownListItem(line: string): boolean {
  return /^[-*+]\s+/.test(line) || /^\d+\.\s+/.test(line)
}

function collectGroupedKeyLines(markdown: string, limit: number): BulletGroup[] {
  const results: BulletGroup[] = []
  const lines = markdown.replace(/\r/g, '').split('\n')
  let inCodeBlock = false
  let itemCount = 0

  for (let index = 0; index < lines.length && itemCount < limit; index += 1) {
    const line = lines[index].trim()

    if (line.startsWith('```')) {
      inCodeBlock = !inCodeBlock
      continue
    }

    if (
      inCodeBlock
      || !line
      || isMarkdownThematicBreak(line)
      || line.startsWith('## ')
      || line.startsWith('### ')
      || /^\|(?:\s*[-:]+\s*\|)+$/.test(line)
      || !/[：:]$/.test(line)
    ) {
      continue
    }

    const label = normalizeSummaryLine(line)
    if (!label) {
      continue
    }

    let nextIndex = index + 1
    while (nextIndex < lines.length && !lines[nextIndex].trim()) {
      nextIndex += 1
    }

    if (nextIndex >= lines.length || !isMarkdownListItem(lines[nextIndex].trim())) {
      continue
    }

    let lastConsumedIndex = index
    const items: string[] = []

    while (nextIndex < lines.length && itemCount < limit) {
      const childLine = lines[nextIndex].trim()

      if (!childLine) {
        nextIndex += 1
        continue
      }

      if (isMarkdownThematicBreak(childLine)) {
        nextIndex += 1
        continue
      }

      if (!isMarkdownListItem(childLine)) {
        break
      }

      const child = normalizeSummaryLine(childLine)
      if (child) {
        items.push(child)
        itemCount += 1
      }

      lastConsumedIndex = nextIndex
      nextIndex += 1
    }

    if (items.length > 0) {
      results.push({ label, items })
    }

    index = lastConsumedIndex
  }

  return results
}

function collectPlainKeyLines(markdown: string, limit: number): BulletGroup[] {
  const items: string[] = []
  const lines = markdown.replace(/\r/g, '').split('\n')
  let inCodeBlock = false

  for (const rawLine of lines) {
    const line = rawLine.trim()

    if (line.startsWith('```')) {
      inCodeBlock = !inCodeBlock
      continue
    }

    if (
      inCodeBlock
      || !line
      || isMarkdownThematicBreak(line)
      || line.startsWith('## ')
      || line.startsWith('### ')
    ) {
      continue
    }

    if (/^\|(?:\s*[-:]+\s*\|)+$/.test(line)) {
      continue
    }

    const normalized = normalizeSummaryLine(line)
    if (!normalized) {
      continue
    }

    items.push(normalized)
    if (items.length >= limit) {
      break
    }
  }

  return items.length > 0 ? [{ items }] : []
}

function collectKeyLines(markdown: string, limit: number): BulletGroup[] {
  const groupedResults = collectGroupedKeyLines(markdown, limit)
  if (groupedResults.length > 0) {
    return groupedResults
  }

  return collectPlainKeyLines(markdown, limit)
}

function extractCodeBlocks(markdown: string): string[] {
  return [...markdown.matchAll(/```(?:[\w-]+)?\n([\s\S]*?)```/g)]
    .map((match) => match[1].trim())
    .filter(Boolean)
}

function extractFirstCodeBlock(markdown: string): string | undefined {
  return extractCodeBlocks(markdown)[0]
}

function extractCodeCommentLines(markdown: string, limit: number): string[] {
  const results: string[] = []

  for (const block of extractCodeBlocks(markdown)) {
    for (const rawLine of block.split('\n')) {
      const line = rawLine.trim()
      if (!line.startsWith('#')) {
        continue
      }

      const normalized = line.replace(/^#+\s*/, '').trim()
      if (!normalized || normalized === 'EOF') {
        continue
      }

      results.push(normalized)
      if (results.length >= limit) {
        return results
      }
    }
  }

  return results
}

function getCommandSignature(line: string): string | undefined {
  const normalized = line.trim().replace(/\s+#.*$/, '')
  if (!normalized || normalized === 'EOF' || normalized === "'EOF'" || normalized === '"EOF"') {
    return undefined
  }

  if (/^[<>{[(]/.test(normalized) || normalized.startsWith('-')) {
    return undefined
  }

  const tokens = normalized.split(/\s+/)
  if (tokens.length === 0) {
    return undefined
  }

  const first = tokens[0]
  if (!/^[A-Za-z0-9_./:-]+$/.test(first)) {
    return undefined
  }

  const second = tokens[1]
  if (second && !second.startsWith('-') && /^[A-Za-z0-9_./:-]+$/.test(second)) {
    return `${first} ${second}`
  }

  return first
}

function extractCommandSummaryLines(markdown: string, limit: number): string[] {
  const uniqueSignatures = new Set<string>()
  const summaries: string[] = []

  for (const block of extractCodeBlocks(markdown)) {
    let continuingCommand = false

    for (const rawLine of block.split('\n')) {
      const line = rawLine.trim()
      if (!line || line.startsWith('#')) {
        continue
      }

      if (continuingCommand) {
        continuingCommand = line.endsWith('\\')
        continue
      }

      const signature = getCommandSignature(line)
      if (!signature || uniqueSignatures.has(signature)) {
        continuingCommand = line.endsWith('\\')
        continue
      }

      uniqueSignatures.add(signature)
      summaries.push(`操作指令：${signature}`)
      continuingCommand = line.endsWith('\\')
      if (summaries.length >= limit) {
        return summaries
      }
    }
  }

  return summaries
}

function extractCodeSnippetSummaryLines(markdown: string, limit: number): string[] {
  const results: string[] = []
  const seen = new Set<string>()

  for (const block of extractCodeBlocks(markdown)) {
    for (const rawLine of block.split('\n')) {
      const line = rawLine.trim()
      if (!line || line.startsWith('#')) {
        continue
      }

      if (line === 'EOF' || line === "'EOF'" || line === '"EOF"') {
        continue
      }

      if (seen.has(line)) {
        continue
      }

      seen.add(line)
      results.push(line)
      if (results.length >= limit) {
        return results
      }
    }
  }

  return results
}

function deriveChunkSummary(markdown: string, limit: number): BulletGroup[] {
  const summary = collectKeyLines(markdown, limit)
  if (summary.length > 0) {
    return summary
  }

  const comments = extractCodeCommentLines(markdown, limit)
  if (comments.length > 0) {
    return [{ items: comments }]
  }

  const commands = extractCommandSummaryLines(markdown, limit)
  if (commands.length > 0) {
    return [{ items: commands }]
  }

  const snippets = extractCodeSnippetSummaryLines(markdown, limit)
  return snippets.length > 0 ? [{ items: snippets }] : []
}

function isCodeHeavySection(summary: BulletGroup[], cards: SlideCardSpec[], markdown: string): boolean {
  return summary.length === 0 && cards.length === 0 && extractCodeBlocks(markdown).length > 0
}

function normalizeComparableItem(value: string): string {
  return value.replace(/\s+/g, ' ').trim()
}

function dedupeSummaryAgainstCards(summary: BulletGroup[], cards: SlideCardSpec[]): BulletGroup[] {
  if (summary.length === 0 || cards.length === 0) {
    return summary
  }

  const cardItems = new Set(
    cards.flatMap((card) => (
      card.bullets.flatMap((group) => group.items.map(normalizeComparableItem))
    )),
  )

  return summary
    .map((group) => ({
      ...group,
      items: group.items.filter((item) => !cardItems.has(normalizeComparableItem(item))),
    }))
    .filter((group) => group.items.length > 0)
}

function allocateChunkDurations(targetTotal: number, count: number): number[] {
  if (count <= 0) {
    return []
  }

  const safeTotal = Math.max(targetTotal, 0)
  const base = Math.floor(safeTotal / count)
  const remainder = safeTotal % count

  return Array.from({ length: count }, (_unused, index) => base + (index < remainder ? 1 : 0))
}

function normalizeChunkMatchTitle(value: string): string {
  return normalizeSectionTitle(value)
    .replace(/[（(].*?[)）]/gu, '')
    .replace(/[：:]/g, '')
    .replace(/\s+/g, '')
    .trim()
}

function extractChunkCommandSignatures(markdown: string): Set<string> {
  return new Set(
    extractCommandSummaryLines(markdown, Number.MAX_SAFE_INTEGER)
      .map((summary) => summary.replace(/^操作指令：/, '')),
  )
}

function getRelativePosition(index: number, count: number): number {
  if (count <= 1) {
    return 0
  }

  return index / (count - 1)
}

function alignChunkNotes(outlineChunks: MarkdownChunk[], fullChunks: MarkdownChunk[]): string[] {
  if (fullChunks.length === 0) {
    return outlineChunks.map((chunk) => chunk.body)
  }

  const groupedBodies = outlineChunks.map(() => [] as string[])
  const outlineSignatures = outlineChunks.map((chunk) => extractChunkCommandSignatures(chunk.body))
  const outlineTitles = outlineChunks.map((chunk) => normalizeChunkMatchTitle(chunk.title))

  fullChunks.forEach((fullChunk, fullIndex) => {
    const fullTitle = normalizeChunkMatchTitle(fullChunk.title)
    const fullSignatures = extractChunkCommandSignatures(fullChunk.body)
    let bestIndex = 0
    let bestScore = Number.NEGATIVE_INFINITY

    outlineChunks.forEach((outlineChunk, outlineIndex) => {
      let score = 0
      const outlineTitle = outlineTitles[outlineIndex]

      if (fullChunk.isIntro === outlineChunk.isIntro) {
        score += 2
      }

      if (fullTitle && outlineTitle) {
        if (fullTitle === outlineTitle) {
          score += 8
        } else if (fullTitle.includes(outlineTitle) || outlineTitle.includes(fullTitle)) {
          score += 4
        }
      }

      const overlap = [...fullSignatures].filter((signature) => outlineSignatures[outlineIndex].has(signature)).length
      score += overlap * 3

      const positionPenalty = Math.abs(
        getRelativePosition(fullIndex, fullChunks.length) - getRelativePosition(outlineIndex, outlineChunks.length),
      )
      score -= positionPenalty

      if (score > bestScore) {
        bestScore = score
        bestIndex = outlineIndex
      }
    })

    groupedBodies[bestIndex].push(fullChunk.body)
  })

  return groupedBodies.map((bodies, index) => (
    bodies.length > 0 ? bodies.join('\n\n') : outlineChunks[index].body
  ))
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
    .replace(/^(?:-{3,}|\*{3,}|_{3,}|(?:-\s+){2,}-?|(?:\*\s+){2,}\*?|(?:_\s+){2,}_?)$/gm, '')
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
      const cards = subSections
        .map((subSection) => ({
          title: subSection.title,
          bullets: collectKeyLines(subSection.body, 3),
        }))
        .filter((card) => card.bullets.length > 0)
      const summary = dedupeSummaryAgainstCards(
        collectKeyLines(extractLeadBody(section.body), 3),
        cards,
      )
      const phase = hour <= 3 ? 'morning' : 'afternoon'
      const subtitlePrefix = sourceDay === 2
        ? `Day 2 ${phase === 'morning' ? '上午' : '下午'}`
        : 'Day 3 擴充'
      const sectionDuration = normalizedDurations[index] ?? 1

      if (isCodeHeavySection(summary, cards, section.body)) {
        const outlineChunks = extractStepChunks(section.body, section.title)
        const fullChunks = matchingFullSection
          ? extractStepChunks(matchingFullSection.body, matchingFullSection.title)
          : []
        const alignedNotes = alignChunkNotes(outlineChunks, fullChunks)
        const chunkDurations = allocateChunkDurations(sectionDuration, outlineChunks.length)

        outlineChunks.forEach((chunk, chunkIndex) => {
          specs.push({
            hour,
            hourTitle: hourMeta.title,
            phase,
            title: chunk.isIntro ? section.title : chunk.title,
            subtitle: `${subtitlePrefix} · Hour ${hour} · ${section.title}`,
            section: `Hour ${hour}｜${hourMeta.title}`,
            duration: String(chunkDurations[chunkIndex] ?? 0),
            summary: deriveChunkSummary(chunk.body, 3),
            cards: [],
            code: extractFirstCodeBlock(chunk.body),
            notes: cleanNotes(alignedNotes[chunkIndex] ?? chunk.body),
          })
        })

        return
      }

      specs.push({
        hour,
        hourTitle: hourMeta.title,
        phase,
        title: section.title,
        subtitle: `${subtitlePrefix} · Hour ${hour}`,
        section: `Hour ${hour}｜${hourMeta.title}`,
        duration: String(sectionDuration),
        summary,
        cards,
        code: extractFirstCodeBlock(section.body),
        notes: cleanNotes(matchingFullSection?.body ?? section.body),
      })
    })
  }

  return specs
}
