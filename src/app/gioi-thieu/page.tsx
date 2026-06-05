import type { Metadata } from 'next'
import GioiThieuClient from './GioiThieuClient'

export const metadata: Metadata = {
  title: 'Giới thiệu',
  description:
    'Về LKC Fintech — đội ngũ, tầm nhìn và giá trị cốt lõi trong lĩnh vực tư vấn và quản lý đầu tư tài chính tại Việt Nam.',
  alternates: { canonical: '/gioi-thieu' },
}

export default function Page() {
  return <GioiThieuClient />
}
