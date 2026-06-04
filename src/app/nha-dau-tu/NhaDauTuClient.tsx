'use client'

import { useState } from 'react'
import { FileText, Lock, AlertTriangle, MapPin, ArrowRight, ChevronDown } from 'lucide-react'
import { Navbar } from '@/features/landing/components/Navbar'
import { Footer } from '@/features/landing/components/Footer'
import { SectionLabel } from '@/features/landing/components/SectionLabel'
import { ConsultationForm } from '@/features/landing/components/ConsultationForm'
import { CONTACT_CHANNELS, CONTACT_INFO, COMPANY_INFO } from '@/features/landing/data'
import { useInView } from '@/features/landing/hooks/useInView'

// Logo thương hiệu chính thức cho từng kênh (lucide không có sẵn Zalo/TikTok)
const CHANNEL_ICONS: Record<string, React.ReactNode> = {
  // Zalo — bong bóng chat trắng, chữ "Zalo" đậm (theo logo gốc)
  zalo: (
    <svg viewBox="0 0 48 48" className="w-full h-full">
      <path d="M24 4C12.4 4 3 11.6 3 21c0 5.4 3.1 10.2 7.9 13.2-.2 1.9-.9 3.9-2.2 5.5-.5.6-.1 1.5.7 1.4 3.4-.5 6-1.8 7.8-2.9 2 .5 4.1.8 6.3.8 11.6 0 21-7.6 21-17S35.6 4 24 4Z" fill="#fff" />
      <text x="24" y="26.5" textAnchor="middle" fontFamily="Arial, Helvetica, sans-serif" fontSize="13" fontWeight="700" fill="#111">Zalo</text>
    </svg>
  ),
  // Facebook "f" (Simple Icons)
  facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  ),
  // TikTok music note (Simple Icons)
  tiktok: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.08-.14 1.62.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  ),
}

export default function NhaDauTuPage() {
  const [zaloOpen, setZaloOpen] = useState(false)
  const { ref: mainRef, inView: mainIn } = useInView()
  const { ref: complianceRef, inView: complianceIn } = useInView()

  return (
    <div className="min-h-screen bg-[#F8FAFC]" style={{ fontFamily: "var(--font-inter), 'Inter', system-ui, sans-serif" }}>
      <Navbar />

      {/* HEADER + CHANNELS — nền tối giống trang giới thiệu, cao 1 màn hình */}
      <section className="relative min-h-screen flex items-center pt-32 pb-24 px-6 overflow-hidden bg-[#0A1628]">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'linear-gradient(#0AACB5 1px,transparent 1px),linear-gradient(90deg,#0AACB5 1px,transparent 1px)',
            backgroundSize: '60px 60px',
          }} />
        <div className="absolute top-0 right-1/4 w-[600px] h-[400px] rounded-full blur-[120px] opacity-20"
          style={{ background: 'radial-gradient(circle, #0891B2, transparent)' }} />

        <div ref={mainRef} className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Cột trái — tiêu đề */}
          <div className={`transition-all duration-700 ease-out ${mainIn ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'}`}>
            <SectionLabel>Nhà đầu tư</SectionLabel>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
              Dành cho<br />
              <span className="bg-gradient-to-r from-[#0AACB5] to-[#10B981] bg-clip-text text-transparent">
                nhà đầu tư
              </span>
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-md">
              Kết nối qua các kênh chính thức, thông tin liên hệ và hỗ trợ từ đội ngũ LKC Fintech.
            </p>
          </div>

          {/* Cột phải — các kênh chính thức */}
          <div className={`transition-all duration-700 ease-out delay-150 ${mainIn ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'}`}>
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0AACB5] mb-5">Các kênh chính thức</div>
            <div className="divide-y divide-white/10 border-y border-white/10">
              {CONTACT_CHANNELS.map((c) => {
                const Logo = (
                  <span className="w-12 h-12 shrink-0 grid place-items-center text-white">
                    {CHANNEL_ICONS[c.id]}
                  </span>
                )
                const Body = (
                  <div className="min-w-0 flex-1">
                    <div className="font-bold text-white">{c.label}</div>
                    <p className="mt-0.5 text-sm text-white/60 leading-snug">{c.desc}</p>
                  </div>
                )
                const rowClass = 'group flex items-center gap-4 py-4 transition-colors hover:bg-white/5'

                // Zalo — bấm để sổ xuống chọn nhóm
                if (c.groups) {
                  return (
                    <div key={c.id}>
                      <button type="button" onClick={() => setZaloOpen(o => !o)} className={`${rowClass} w-full text-left cursor-pointer`}>
                        {Logo}
                        {Body}
                        <ChevronDown size={20} className={`shrink-0 text-white/40 transition-transform duration-200 ${zaloOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {zaloOpen && (
                        <div className="pb-4 pl-16 space-y-2">
                          {c.groups.map(g => (
                            <a key={g.href} href={g.href} target="_blank" rel="noopener noreferrer"
                              className="flex items-center justify-between gap-3 bg-white/5 px-4 py-3 text-sm font-medium text-white/85 transition-colors hover:bg-white/10 hover:text-white">
                              {g.label}
                              <ArrowRight size={15} className="shrink-0 text-[#0AACB5]" />
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  )
                }

                // Facebook / TikTok — mở thẳng link
                return (
                  <a key={c.id} href={c.href} target="_blank" rel="noopener noreferrer" className={rowClass}>
                    {Logo}
                    {Body}
                    <ArrowRight size={18} className="shrink-0 text-white/40 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-[#0AACB5]" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-20 px-6 bg-white border-y border-slate-200">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
            {/* Contact info */}
            <div>
              <SectionLabel>Liên hệ</SectionLabel>
              <h2 className="text-3xl font-bold mb-3 text-[#0F172A]">Liên hệ với chúng tôi</h2>
              <p className="text-[#475569] mb-6 text-sm">Đội ngũ LKC Fintech sẵn sàng hỗ trợ bạn từ Thứ 2 – Thứ 6, 8:30 – 17:30</p>

              {/* Company card */}
              <div className="mb-6 px-4 py-4 rounded-2xl bg-gradient-to-r from-[#0AACB5]/10 to-[#10B981]/8 border border-[#0AACB5]/25">
                <p className="font-bold text-[17px] leading-snug bg-gradient-to-r from-[#0AACB5] to-[#10B981] bg-clip-text text-transparent">
                  {COMPANY_INFO.name}
                </p>
                <div className="flex items-center gap-2 mt-2.5 pt-2.5 border-t border-[#0AACB5]/15">
                  <span className="text-xs text-[#94A3B8]">Mã số thuế:</span>
                  <span className="text-xs font-mono font-semibold text-[#475569] tracking-wider">{COMPANY_INFO.taxCode}</span>
                </div>
              </div>

              {/* Phone / Email / Addresses */}
              <div className="space-y-4">
                {CONTACT_INFO.map(item => (
                  <div key={item.label} className="flex gap-4 items-start">
                    <div className="w-9 h-9 rounded-xl bg-[#0AACB5]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <item.icon size={15} className="text-[#0AACB5]" />
                    </div>
                    <div>
                      <div className="text-xs text-[#64748B] mb-0.5">{item.label}</div>
                      <div className="text-sm font-medium text-[#0F172A]">{item.value}</div>
                    </div>
                  </div>
                ))}

                {/* Addresses — same level as Phone/Email */}
                <div className="flex gap-4 items-start">
                  <div className="w-9 h-9 rounded-xl bg-[#0AACB5]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin size={15} className="text-[#0AACB5]" />
                  </div>
                  <div>
                    <div className="text-xs text-[#64748B] mb-2">Địa chỉ</div>
                    <div className="space-y-2">
                      {COMPANY_INFO.addresses.map((addr) => (
                        <div key={addr.value} className="flex gap-2 items-start">
                          <div className={`w-1.5 h-1.5 rounded-full shrink-0 mt-1.5 ${addr.isHQ ? 'bg-[#0AACB5]' : 'bg-[#CBD5E1]'}`} />
                          <div>
                            {addr.isHQ && (
                              <span className="text-[10px] font-semibold text-[#0AACB5] uppercase tracking-wide mr-1.5">Trụ sở chính ·</span>
                            )}
                            <span className={`text-sm leading-relaxed ${addr.isHQ ? 'text-[#334155] font-medium' : 'text-[#64748B]'}`}>
                              {addr.value}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Consultation form */}
            <div className="rounded-3xl border border-slate-200 bg-[#F8FAFC] p-6 sm:p-8 shadow-sm">
              <h3 className="text-lg font-bold text-[#0F172A] mb-1">Đăng ký tư vấn</h3>
              <p className="text-sm text-[#475569] mb-5">Để lại thông tin, chúng tôi sẽ liên hệ lại trong thời gian sớm nhất.</p>
              <ConsultationForm source="nha-dau-tu" inputBg="bg-white" rows={4} />
            </div>
        </div>
      </section>

      {/* COMPLIANCE */}
      <section className="py-16 px-6 bg-slate-100">
        <div ref={complianceRef} className="max-w-7xl mx-auto">
          <div className={`text-center mb-10 transition-all duration-700 ease-out ${complianceIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            <SectionLabel>Pháp lý & Tuân thủ</SectionLabel>
            <h2 className="text-3xl font-bold text-[#0F172A]">Công bố thông tin</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { Icon: FileText, color: '#0AACB5', title: 'Giấy phép hoạt động', desc: 'Công ty TNHH Đầu tư LKC Fintech hoạt động theo Giấy chứng nhận đăng ký kinh doanh do Sở KH&ĐT TP. Hà Nội cấp.' },
              { Icon: Lock, color: '#10B981', title: 'Chính sách bảo mật', desc: 'Thông tin khách hàng được mã hóa và bảo mật theo tiêu chuẩn quốc tế. Không chia sẻ dữ liệu cá nhân cho bên thứ ba.' },
              { Icon: AlertTriangle, color: '#F59E0B', title: 'Cảnh báo rủi ro', desc: 'Đầu tư có rủi ro. Hiệu suất quá khứ không đảm bảo kết quả tương lai. Nhà đầu tư cần hiểu rõ rủi ro trước khi tham gia.' },
            ].map((c, i) => (
              <div key={c.title}
                style={{ transitionDelay: complianceIn ? `${i * 110}ms` : '0ms' }}
                className={`p-6 rounded-2xl bg-white border border-slate-200 shadow-sm transition-all duration-600 ease-out ${complianceIn ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-95'}`}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: `${c.color}15` }}>
                  <c.Icon size={22} style={{ color: c.color }} />
                </div>
                <h3 className="font-bold text-[#0F172A] mb-2">{c.title}</h3>
                <p className="text-sm text-[#475569] leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
