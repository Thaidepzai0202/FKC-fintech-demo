import type { Metadata } from 'next'
import KienThucClient from './KienThucClient'

export const metadata: Metadata = {
  title: 'Kiến thức đầu tư',
  description:
    'Học đầu tư cùng LKC Fintech — kiến thức nền tảng về chứng khoán, FX, Crypto và quản trị rủi ro cho nhà đầu tư Việt Nam.',
  alternates: { canonical: '/kien-thuc' },
}

export default function Page() {
  return <KienThucClient />
}
