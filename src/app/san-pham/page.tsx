import type { Metadata } from 'next'
import SanPhamClient from './SanPhamClient'

export const metadata: Metadata = {
  title: 'Sản phẩm & Dịch vụ',
  description:
    'Dịch vụ tư vấn đầu tư và quản lý danh mục chứng khoán, FX, Crypto của LKC Fintech — giải pháp tài chính phù hợp từng nhà đầu tư.',
  alternates: { canonical: '/san-pham' },
}

export default function Page() {
  return <SanPhamClient />
}
