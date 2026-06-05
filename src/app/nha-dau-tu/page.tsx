import type { Metadata } from 'next'
import NhaDauTuClient from './NhaDauTuClient'

export const metadata: Metadata = {
  title: 'Nhà đầu tư',
  description:
    'Thông tin dành cho nhà đầu tư LKC Fintech — câu hỏi thường gặp (FAQ) và kênh liên hệ tư vấn đầu tư.',
  alternates: { canonical: '/nha-dau-tu' },
}

export default function Page() {
  return <NhaDauTuClient />
}
