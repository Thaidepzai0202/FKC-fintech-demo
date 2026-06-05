import type { MetadataRoute } from 'next'
import { SITE } from '@/lib/seo'

// Tạo /sitemap.xml — danh sách trang để nộp cho Google Search Console.
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: '', priority: 1.0 },
    { path: '/gioi-thieu', priority: 0.8 },
    { path: '/san-pham', priority: 0.9 },
    { path: '/goc-nhin', priority: 0.7 },
    { path: '/kien-thuc', priority: 0.7 },
    { path: '/nha-dau-tu', priority: 0.6 },
  ]
  return routes.map(({ path, priority }) => ({
    url: `${SITE.url}${path}`,
    changeFrequency: 'weekly',
    priority,
  }))
}
