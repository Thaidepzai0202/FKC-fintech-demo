import Link from 'next/link'
import { MessageSquare } from 'lucide-react'
import { Logo } from './Logo'
import { NAV_LINKS, SOCIAL_LINKS } from '@/features/landing/data'

export function Footer() {
  return (
    <footer className="bg-[#071018] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div>
            <Logo />
            <p className="mt-4 text-sm text-[#94A3B8] leading-relaxed">
              Giải pháp tài chính toàn diện: tư vấn đầu tư, ủy thác đầu tư chứng khoán, FX và Crypto tại Việt Nam.
            </p>
            <p className="mt-4 text-xs text-[#64748B] italic leading-relaxed">
              Đầu tư có rủi ro. Hiệu suất quá khứ không đảm bảo kết quả tương lai.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white text-sm uppercase tracking-wider">Trang</h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-[#94A3B8] hover:text-[#0AACB5] transition-colors cursor-pointer">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white text-sm uppercase tracking-wider">Sản phẩm</h4>
            <ul className="space-y-2.5">
              {['Tư vấn đầu tư', 'Ủy thác đầu tư', 'Môi giới đầu tư', 'LKC Stock', 'LKC Crypto Spot'].map(i => (
                <li key={i}>
                  <Link href="/san-pham" className="text-sm text-[#94A3B8] hover:text-[#0AACB5] transition-colors cursor-pointer">
                    {i}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white text-sm uppercase tracking-wider">Kết nối</h4>
            <div className="space-y-3">
              {SOCIAL_LINKS.map(s => (
                <a key={s.label} href="#"
                  className="flex items-center gap-3 text-sm text-[#94A3B8] hover:text-white transition-colors cursor-pointer group">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: `${s.color}22` }}>
                    <MessageSquare size={14} style={{ color: s.color }} />
                  </div>
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#64748B]">
            © 2026 Công ty TNHH Đầu tư LKC Fintech. Tất cả quyền được bảo lưu.
          </p>
          <div className="flex gap-6">
            {['Chính sách bảo mật', 'Điều khoản sử dụng', 'Công bố thông tin'].map(l => (
              <a key={l} href="#" className="text-xs text-[#64748B] hover:text-[#0AACB5] transition-colors cursor-pointer">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
