import { fetchSheetRows } from './sheets'

/**
 * Dữ liệu trang "Góc nhìn thị trường" — lấy từ 2 tab trong cùng 1 Google Sheet.
 *
 *  Tab "News":   cột  title | subtitle | link
 *  Tab "Videos": cột  type  | url      | title
 *                type = "live"  → tự động phát (mute theo policy trình duyệt)
 *                type = "video" → hiện thumbnail, bấm mới phát
 *                Mỗi dòng là 1 video trong playlist; video live đầu tiên
 *                (nếu có) được chọn phát mặc định, không thì dòng đầu.
 */

const NEWS_TAB = process.env.GOOGLE_SHEET_NEWS_TAB ?? 'News'
const VIDEOS_TAB = process.env.GOOGLE_SHEET_VIDEOS_TAB ?? 'Videos'

export type NewsItem = {
  id: number
  title: string
  subtitle: string
  link?: string
}

export type FeaturedVideo = {
  type: 'live' | 'video'
  videoId: string
  title?: string
}

export async function fetchNews(): Promise<NewsItem[]> {
  const rows = await fetchSheetRows(NEWS_TAB)
  return rows
    .filter(r => r.title)
    .map((r, i) => ({
      id: i + 1,
      title: r.title,
      subtitle: r.subtitle ?? '',
      link: r.link || undefined,
    }))
}

/** Trích ID video từ nhiều dạng URL YouTube (hoặc nhận thẳng ID 11 ký tự). */
export function extractYouTubeId(input: string): string {
  if (!input) return ''
  const url = input.trim()
  const patterns = [
    /[?&]v=([\w-]{11})/,
    /youtu\.be\/([\w-]{11})/,
    /youtube\.com\/live\/([\w-]{11})/,
    /youtube\.com\/embed\/([\w-]{11})/,
    /youtube\.com\/shorts\/([\w-]{11})/,
  ]
  for (const p of patterns) {
    const m = url.match(p)
    if (m) return m[1]
  }
  if (/^[\w-]{11}$/.test(url)) return url
  return ''
}

export async function fetchVideos(): Promise<FeaturedVideo[]> {
  const rows = await fetchSheetRows(VIDEOS_TAB)
  return rows
    .map(r => {
      const videoId = extractYouTubeId(r.url || r.link || '')
      if (!videoId) return null
      const type = (r.type || '').toLowerCase() === 'live' ? 'live' : 'video'
      return { type, videoId, title: r.title || undefined } as FeaturedVideo
    })
    .filter((v): v is FeaturedVideo => v !== null)
}
