'use client'

import { useState } from 'react'
import { ChevronDown, FileText, Lock, AlertTriangle, MapPin } from 'lucide-react'
import { Navbar } from '@/features/landing/components/Navbar'
import { Footer } from '@/features/landing/components/Footer'
import { SectionLabel } from '@/features/landing/components/SectionLabel'
import { FAQS, CONTACT_INFO, COMPANY_INFO } from '@/features/landing/data'
import { useInView } from '@/features/landing/hooks/useInView'

export default function NhaDauTuPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const { ref: mainRef, inView: mainIn } = useInView()
  const { ref: complianceRef, inView: complianceIn } = useInView()

  return (
    <div className="min-h-screen bg-[#F8FAFC]" style={{ fontFamily: "var(--font-ibm), 'IBM Plex Sans', system-ui, sans-serif" }}>
      <Navbar />

      {/* PAGE HEADER */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-[#EFF6FF] to-slate-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto text-center">
          <div className="lkc-a1"><SectionLabel>Nhà đầu tư</SectionLabel></div>
          <h1 className="lkc-a2 text-4xl md:text-5xl font-bold text-[#0F172A]">Dành cho nhà đầu tư</h1>
          <p className="lkc-a3 mt-4 text-[#475569] max-w-lg mx-auto text-lg leading-relaxed">
            Câu hỏi thường gặp, thông tin liên hệ và hỗ trợ từ đội ngũ LKC Fintech
          </p>
        </div>
      </section>

      {/* FAQ + CONTACT */}
      <section className="py-20 px-6">
        <div ref={mainRef} className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            {/* FAQ */}
            <div className={`transition-all duration-700 ease-out ${mainIn ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <SectionLabel>Hỏi & Đáp</SectionLabel>
              <h2 className="text-3xl font-bold mb-8 text-[#0F172A]">Câu hỏi thường gặp</h2>
              <div className="space-y-3">
                {FAQS.map((f, i) => (
                  <div key={i}
                    style={{ transitionDelay: mainIn ? `${i * 50}ms` : '0ms' }}
                    className={`rounded-xl border border-slate-200 bg-white overflow-hidden transition-all duration-500 ease-out ${mainIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full px-5 py-4 flex items-center justify-between text-left cursor-pointer hover:bg-slate-50 transition-colors">
                      <span className="font-medium text-sm text-[#0F172A] pr-4">{f.q}</span>
                      <ChevronDown size={16}
                        className={`shrink-0 text-[#0AACB5] transition-transform duration-200 ${openFaq === i ? 'rotate-180' : ''}`} />
                    </button>
                    {openFaq === i && (
                      <div className="px-5 pb-4 text-sm text-[#475569] leading-relaxed border-t border-slate-100 pt-3">{f.a}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className={`transition-all duration-700 ease-out delay-150 ${mainIn ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
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
              <div className="space-y-4 mb-8">
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
              <form className="space-y-3" onSubmit={e => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-3">
                  <input placeholder="Họ và tên"
                    className="h-11 px-4 rounded-xl border border-slate-200 bg-white text-sm text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#0AACB5] transition" />
                  <input placeholder="Số điện thoại"
                    className="h-11 px-4 rounded-xl border border-slate-200 bg-white text-sm text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#0AACB5] transition" />
                </div>
                <input placeholder="Email"
                  className="w-full h-11 px-4 rounded-xl border border-slate-200 bg-white text-sm text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#0AACB5] transition" />
                <textarea rows={4} placeholder="Nội dung tư vấn..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#0AACB5] transition resize-none" />
                <button type="submit"
                  className="w-full h-12 rounded-xl bg-gradient-to-r from-[#0891B2] to-[#10B981] text-white font-semibold hover:opacity-90 transition cursor-pointer">
                  Gửi yêu cầu tư vấn →
                </button>
              </form>
            </div>
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
