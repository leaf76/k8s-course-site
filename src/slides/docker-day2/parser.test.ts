import { describe, expect, it } from 'vitest'
import courseScheduleRaw from './content/course-schedule.md?raw'
import day2Hour1FullRaw from './content/day2-hour1-full.md?raw'
import day2Hour1Raw from './content/day2-hour1.md?raw'
import day2Hour2FullRaw from './content/day2-hour2-full.md?raw'
import day2Hour2Raw from './content/day2-hour2.md?raw'
import day2Hour3FullRaw from './content/day2-hour3-full.md?raw'
import day2Hour3Raw from './content/day2-hour3.md?raw'
import day2Hour4FullRaw from './content/day2-hour4-full.md?raw'
import day2Hour4Raw from './content/day2-hour4.md?raw'
import day2Hour5FullRaw from './content/day2-hour5-full.md?raw'
import day2Hour5Raw from './content/day2-hour5.md?raw'
import day2Hour6FullRaw from './content/day2-hour6-full.md?raw'
import day2Hour6Raw from './content/day2-hour6.md?raw'
import day2Hour7FullRaw from './content/day2-hour7-full.md?raw'
import day2Hour7Raw from './content/day2-hour7.md?raw'
import day3Hour8FullRaw from './content/day3-hour8-full.md?raw'
import day3Hour8Raw from './content/day3-hour8.md?raw'
import day3Hour9FullRaw from './content/day3-hour9-full.md?raw'
import day3Hour9Raw from './content/day3-hour9.md?raw'
import day3Hour10FullRaw from './content/day3-hour10-full.md?raw'
import day3Hour10Raw from './content/day3-hour10.md?raw'
import day3Hour11FullRaw from './content/day3-hour11-full.md?raw'
import day3Hour11Raw from './content/day3-hour11.md?raw'
import day3Hour12FullRaw from './content/day3-hour12-full.md?raw'
import day3Hour12Raw from './content/day3-hour12.md?raw'
import day3Hour13FullRaw from './content/day3-hour13-full.md?raw'
import day3Hour13Raw from './content/day3-hour13.md?raw'
import day3Hour14FullRaw from './content/day3-hour14-full.md?raw'
import day3Hour14Raw from './content/day3-hour14.md?raw'
import { buildDockerDay2SlideSpecs, parseCourseSchedule } from './parser'
import type { BulletGroup } from './parser'

const documents = {
  'course-schedule.md': courseScheduleRaw,
  'day2-hour1-full.md': day2Hour1FullRaw,
  'day2-hour1.md': day2Hour1Raw,
  'day2-hour2-full.md': day2Hour2FullRaw,
  'day2-hour2.md': day2Hour2Raw,
  'day2-hour3-full.md': day2Hour3FullRaw,
  'day2-hour3.md': day2Hour3Raw,
  'day2-hour4-full.md': day2Hour4FullRaw,
  'day2-hour4.md': day2Hour4Raw,
  'day2-hour5-full.md': day2Hour5FullRaw,
  'day2-hour5.md': day2Hour5Raw,
  'day2-hour6-full.md': day2Hour6FullRaw,
  'day2-hour6.md': day2Hour6Raw,
  'day2-hour7-full.md': day2Hour7FullRaw,
  'day2-hour7.md': day2Hour7Raw,
  'day3-hour8-full.md': day3Hour8FullRaw,
  'day3-hour8.md': day3Hour8Raw,
  'day3-hour9-full.md': day3Hour9FullRaw,
  'day3-hour9.md': day3Hour9Raw,
  'day3-hour10-full.md': day3Hour10FullRaw,
  'day3-hour10.md': day3Hour10Raw,
  'day3-hour11-full.md': day3Hour11FullRaw,
  'day3-hour11.md': day3Hour11Raw,
  'day3-hour12-full.md': day3Hour12FullRaw,
  'day3-hour12.md': day3Hour12Raw,
  'day3-hour13-full.md': day3Hour13FullRaw,
  'day3-hour13.md': day3Hour13Raw,
  'day3-hour14-full.md': day3Hour14FullRaw,
  'day3-hour14.md': day3Hour14Raw,
}

function group(items: string[], label?: string): BulletGroup {
  return label ? { label, items } : { items }
}

function countItems(groups: BulletGroup[]): number {
  return groups.reduce((total, current) => total + current.items.length, 0)
}

const groupedSummarySections = [
  { hour: 1, title: '開場', labels: ['學習路線圖：'] },
  {
    hour: 1,
    title: '環境一致性問題',
    labels: ['程式不是獨立存在的，它依賴五個層面：'],
  },
  {
    hour: 1,
    title: '容器技術的誕生',
    labels: ['靠 Linux 核心兩個功能實現：', 'Docker 三個創新：'],
  },
  { hour: 2, title: 'Docker Daemon 詳解', labels: ['常見設定：'] },
  {
    hour: 2,
    title: 'Docker Hub 與官方文件',
    labels: ['搜尋結果標籤：', '映像詳情頁面：'],
  },
  {
    hour: 2,
    title: 'Image 的分層結構',
    labels: ['Container 修改 Image 的檔案時：'],
  },
  {
    hour: 2,
    title: '深入理解 Docker 的九個問題',
    labels: ['Docker 額外做了：'],
  },
  {
    hour: 4,
    title: '前情提要',
    labels: ['本堂課重點（取得和執行）：'],
  },
  {
    hour: 4,
    title: 'docker run - 執行容器',
    labels: ['兩種退出方式：'],
  },
  {
    hour: 6,
    title: '前情提要',
    labels: ['學完指令，用 Nginx 實戰：'],
  },
  {
    hour: 7,
    title: '前情提要',
    labels: ['Day 2 學完：'],
  },
] as const

describe('docker day 2 parser', () => {
  it('parses the official lecture minutes from the schedule', () => {
    expect(parseCourseSchedule(courseScheduleRaw)).toEqual([
      { hour: 1, title: '環境一致性問題與容器技術', lectureMinutes: 55 },
      { hour: 2, title: 'Docker 架構與工作原理', lectureMinutes: 55 },
      { hour: 3, title: 'Docker 安裝與環境設置', lectureMinutes: 45 },
      { hour: 4, title: 'Docker 基本指令（上）', lectureMinutes: 50 },
      { hour: 5, title: 'Docker 基本指令（下）', lectureMinutes: 50 },
      { hour: 6, title: 'Nginx 容器實戰', lectureMinutes: 40 },
      { hour: 7, title: '實作練習與 Day2 總結', lectureMinutes: 30 },
      { hour: 8, title: '映像檔深入理解', lectureMinutes: 55 },
      { hour: 9, title: '容器生命週期管理', lectureMinutes: 55 },
      { hour: 10, title: '容器網路基礎', lectureMinutes: 45 },
      { hour: 11, title: 'Port Mapping 進階', lectureMinutes: 55 },
      { hour: 12, title: 'Volume 資料持久化', lectureMinutes: 50 },
      { hour: 13, title: 'Dockerfile 入門', lectureMinutes: 45 },
      { hour: 14, title: 'Dockerfile 實戰與總結', lectureMinutes: 40 },
    ])
  })

  it('builds morning and afternoon slide specs with clean notes', () => {
    const slides = buildDockerDay2SlideSpecs(documents)
    const morningSlides = slides.filter((slide) => slide.phase === 'morning')
    const afternoonSlides = slides.filter((slide) => slide.phase === 'afternoon')

    expect(morningSlides.length).toBeGreaterThan(0)
    expect(afternoonSlides.length).toBeGreaterThan(0)
    expect(new Set(morningSlides.map((slide) => slide.hour))).toEqual(new Set([1, 2, 3]))
    expect(new Set(afternoonSlides.map((slide) => slide.hour))).toEqual(new Set([4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]))
    expect(new Set(slides.map((slide) => slide.hour))).toEqual(new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]))

    const firstSlide = morningSlides[0]
    expect(firstSlide.section).toBe('Hour 1｜環境一致性問題與容器技術')
    expect(firstSlide.title).toBe('開場')
    expect(firstSlide.duration).not.toBe('0')
    expect(firstSlide.notes).not.toContain('## ')
    expect(firstSlide.notes).not.toContain('```')

    const lastSlide = afternoonSlides[afternoonSlides.length - 1]
    expect(lastSlide.section).toBe('Hour 14｜Dockerfile 實戰與總結')
    expect(lastSlide.notes).not.toContain('## ')
    expect(lastSlide.notes).not.toContain('```')
  })

  it('builds podman slide with practical summary bullets and comparison cards', () => {
    const slides = buildDockerDay2SlideSpecs(documents)
    const podmanSlide = slides.find((slide) => slide.title === 'Podman 簡介')

    expect(podmanSlide).toBeDefined()
    expect(podmanSlide?.summary).toEqual([group([
      'Docker 和 Podman 都能跑 OCI 容器，日常指令非常接近',
      '核心差異：Docker 走 Client -> dockerd；Podman 是 daemonless，且更常搭配 rootless 使用',
      'Docker 生態和教材更完整；Podman 在 RHEL / Fedora 與 systemd 管理場景更自然',
    ])])
    expect(countItems(podmanSlide?.summary ?? [])).toBe(3)
    expect(podmanSlide?.cards).toEqual([
      {
        title: '架構與安全',
        bullets: [group([
          'Docker 依賴背景中的 dockerd 服務來管理容器',
          'Podman 沒有常駐 daemon，命令會直接呼叫底層 runtime',
          'Podman 較容易以一般使用者執行，安全邊界更單純',
        ])],
      },
      {
        title: '生態與相容性',
        bullets: [group([
          '多數 docker 指令都能直接對應成 podman',
          'Docker 在 Compose、教學資源、社群範例上更成熟',
          'Podman 同樣遵守 OCI 標準，和現代 Linux 容器工具鏈整合良好',
        ])],
      },
      {
        title: '適用場景',
        bullets: [group([
          '教學、跨平台開發、社群文件查找：Docker 通常更方便',
          'RHEL / Fedora、systemd 服務管理、偏好 rootless：Podman 更自然',
          '本課程仍以 Docker 為主，但實務上遇到 Podman 不會陌生',
        ])],
      },
    ])
  })

  it('splits hour 6 nginx config workflow into step slides with chunk-specific notes', () => {
    const slides = buildDockerDay2SlideSpecs(documents)
    const nginxConfigSlides = slides.filter((slide) => (
      slide.hour === 6
      && ['提取設定檔', '掛載自訂設定', '熱重載（不重啟）'].includes(slide.title)
    ))

    expect(nginxConfigSlides.map((slide) => slide.title)).toEqual([
      '提取設定檔',
      '掛載自訂設定',
      '熱重載（不重啟）',
    ])

    expect(nginxConfigSlides.map((slide) => slide.code)).toEqual([
      [
        'docker exec web cat /etc/nginx/conf.d/default.conf',
        'docker cp web:/etc/nginx/conf.d/default.conf ~/docker-demo/nginx/',
      ].join('\n'),
      [
        'docker run -d --name web \\',
        '  -p 8080:80 \\',
        '  -v ~/docker-demo/website:/usr/share/nginx/html:ro \\',
        '  -v ~/docker-demo/nginx/default.conf:/etc/nginx/conf.d/default.conf:ro \\',
        '  nginx:alpine',
      ].join('\n'),
      'docker exec web nginx -s reload',
    ])

    expect(nginxConfigSlides[0]?.summary).toEqual([
      group(['操作指令：docker exec', '操作指令：docker cp']),
    ])
    expect(nginxConfigSlides[1]?.summary).toEqual([
      group(['操作指令：docker run']),
    ])
    expect(nginxConfigSlides[2]?.summary).toEqual([
      group(['操作指令：docker exec']),
    ])

    expect(nginxConfigSlides[0]?.notes).toContain('docker exec web cat /etc/nginx/nginx.conf')
    expect(nginxConfigSlides[0]?.notes).toContain('mkdir -p ~/docker-demo/nginx')
    expect(nginxConfigSlides[0]?.notes).not.toContain('location /api')

    expect(nginxConfigSlides[1]?.notes).toContain('location /api')
    expect(nginxConfigSlides[1]?.notes).toContain('curl http://localhost:8080/api')
    expect(nginxConfigSlides[1]?.notes).not.toContain('nginx -s reload')

    expect(nginxConfigSlides[2]?.notes).toContain('docker exec web nginx -s reload')
    expect(nginxConfigSlides[2]?.notes).not.toContain('mkdir -p ~/docker-demo/nginx')
  })

  it('skips markdown thematic breaks in hour 3 summaries', () => {
    const slides = buildDockerDay2SlideSpecs(documents)
    const hour3Intro = slides.find((slide) => slide.hour === 3 && slide.title === '前情提要')

    expect(hour3Intro).toBeDefined()
    expect(hour3Intro?.summary).toEqual([
      group(['前兩小時講了概念和架構，現在開始動手——安裝 Docker。']),
    ])
    expect(hour3Intro?.summary.flatMap((entry) => entry.items)).not.toContain('---')
  })

  it('keeps every grouped-summary section free of dangling labels and within summary limits', () => {
    const slides = buildDockerDay2SlideSpecs(documents)

    for (const groupedSection of groupedSummarySections) {
      const slide = slides.find((candidate) => (
        candidate.hour === groupedSection.hour
        && candidate.title === groupedSection.title
      ))

      expect(slide, `missing slide ${groupedSection.hour}-${groupedSection.title}`).toBeDefined()
      expect(slide?.summary.length).toBeGreaterThan(0)
      expect(countItems(slide?.summary ?? [])).toBeLessThanOrEqual(3)
      expect(slide?.summary.some((summaryGroup) => Boolean(summaryGroup.label))).toBe(true)

      const labels = slide?.summary
        .map((summaryGroup) => summaryGroup.label)
        .filter((label): label is string => Boolean(label)) ?? []

        expect(
        labels.every((label) => groupedSection.labels.includes(label)),
        `unexpected labels for ${groupedSection.hour}-${groupedSection.title}: ${labels.join(', ')}`,
      ).toBe(true)

      for (const label of groupedSection.labels) {
        expect(
          slide?.summary.flatMap((summaryGroup) => summaryGroup.items),
          `dangling label leaked into items for ${groupedSection.hour}-${groupedSection.title}: ${label}`,
        ).not.toContain(label)
      }
    }
  })

  it('builds stable grouped summaries for representative docker day 2 sections', () => {
    const slides = buildDockerDay2SlideSpecs(documents)

    expect(
      slides.find((slide) => slide.hour === 2 && slide.title === 'Docker Daemon 詳解')?.summary,
    ).toEqual([
      group([
        'storage-driver：儲存驅動（推薦 overlay2）',
        'log-opts：日誌大小限制（避免硬碟爆炸）',
        'registry-mirrors：映射站加速下載',
      ], '常見設定：'),
    ])

    expect(
      slides.find((slide) => slide.hour === 4 && slide.title === 'docker run - 執行容器')?.summary,
    ).toEqual([
      group([
        'exit：停止容器並退出',
        'Ctrl+P+Q：退出但容器繼續跑',
      ], '兩種退出方式：'),
    ])

    expect(
      slides.find((slide) => slide.hour === 7 && slide.title === '前情提要')?.summary,
    ).toEqual([
      group([
        '容器概念與架構',
        'Docker 安裝',
        '基本指令',
      ], 'Day 2 學完：'),
    ])

    expect(
      slides.find((slide) => slide.hour === 1 && slide.title === '容器技術的誕生')?.summary,
    ).toEqual([
      group([
        'Namespace：隔離。PID、Network、Mount、UTS、User、IPC 六種隔離',
        'Cgroups：限制資源。控制 CPU、記憶體、磁碟 IO',
      ], '靠 Linux 核心兩個功能實現：'),
      group([
        'Image + Layer — 分層映像，共用 layer',
      ], 'Docker 三個創新：'),
    ])
  })

  it('never leaks markdown thematic breaks into summaries, cards, or notes', () => {
    const slides = buildDockerDay2SlideSpecs(documents)
    const thematicBreakPattern = /^(?:-{3,}|\*{3,}|_{3,}|(?:-\s+){2,}-?|(?:\*\s+){2,}\*?|(?:_\s+){2,}_?)$/
    const notesThematicBreakPattern = /^(?:-{3,}|\*{3,}|_{3,}|(?:-\s+){2,}-?|(?:\*\s+){2,}\*?|(?:_\s+){2,}_?)$/m

    for (const slide of slides) {
      for (const summaryGroup of slide.summary) {
        expect(summaryGroup.label ? thematicBreakPattern.test(summaryGroup.label) : false).toBe(false)

        for (const summaryItem of summaryGroup.items) {
          expect(thematicBreakPattern.test(summaryItem)).toBe(false)
        }
      }

      for (const card of slide.cards) {
        for (const bulletGroup of card.bullets) {
          expect(bulletGroup.label ? thematicBreakPattern.test(bulletGroup.label) : false).toBe(false)

          for (const bullet of bulletGroup.items) {
            expect(thematicBreakPattern.test(bullet)).toBe(false)
          }
        }
      }

      expect(notesThematicBreakPattern.test(slide.notes)).toBe(false)
    }
  })

  it('derives visible summary bullets for code-only command sections', () => {
    const slides = buildDockerDay2SlideSpecs(documents)
    const commandOnlySlide = slides.find((slide) => slide.hour === 5 && slide.title === '其他常用指令')

    expect(commandOnlySlide).toBeDefined()
    expect(commandOnlySlide?.summary).toEqual([
      group([
        '操作指令：docker inspect',
        '操作指令：docker stats',
        '操作指令：docker top',
      ]),
    ])
    expect(commandOnlySlide?.cards).toEqual([])
    expect(commandOnlySlide?.code).toContain('docker inspect my-nginx')
  })

  it('ensures every code slide exposes visible summary or cards after chunking', () => {
    const slides = buildDockerDay2SlideSpecs(documents)
    const emptyCodeSlides = slides.filter((slide) => (
      Boolean(slide.code) && slide.summary.length === 0 && slide.cards.length === 0
    ))

    expect(emptyCodeSlides).toEqual([])
  })
})
