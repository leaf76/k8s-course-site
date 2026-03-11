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
})
