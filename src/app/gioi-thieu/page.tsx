'use client'

import {
  Phone, Mail, MapPin, ArrowRight,
  Target, Shield, TrendingUp,
  Globe, Coins, PieChart,
  CheckCircle2, Award, Users, Building2,
} from 'lucide-react'
import Link from 'next/link'
import { Navbar } from '@/features/landing/components/Navbar'
import { Footer } from '@/features/landing/components/Footer'
import { SectionLabel } from '@/features/landing/components/SectionLabel'
import { ABOUT_CARDS } from '@/features/landing/data'
import { useInView } from '@/features/landing/hooks/useInView'

export default function GioiThieuPage() {
  const { ref: missionRef, inView: missionIn } = useInView()
  const { ref: valuesRef, inView: valuesIn } = useInView()
  const { ref: marketsRef, inView: marketsIn } = useInView()
  const { ref: contactRef, inView: contactIn } = useInView()

  return (
    <div className="min-h-screen bg-[#F8FAFC]" style={{ fontFamily: "var(--font-ibm), 'IBM Plex Sans', system-ui, sans-serif" }}>
      <Navbar />

      {/* ── PAGE HERO ─────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden bg-[#0A1628]">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'linear-gradient(#0AACB5 1px,transparent 1px),linear-gradient(90deg,#0AACB5 1px,transparent 1px)',
            backgroundSize: '60px 60px',
          }} />
        <div className="absolute top-0 right-1/4 w-[600px] h-[400px] rounded-full blur-[120px] opacity-20"
          style={{ background: 'radial-gradient(circle, #0891B2, transparent)' }} />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <div className="lkc-a1"><SectionLabel>Về LKC Fintech</SectionLabel></div>
            <h1 className="lkc-a2 text-4xl md:text-6xl font-bold text-white leading-tight mb-6 tracking-tight">
              Đồng hành trên<br />
              <span className="bg-gradient-to-r from-[#0AACB5] to-[#10B981] bg-clip-text text-transparent">
                mọi hành trình đầu tư
              </span>
            </h1>
            <p className="lkc-a3 text-white/70 text-lg leading-relaxed mb-10 max-w-2xl">
              Công ty TNHH Đầu tư LKC Fintech — đơn vị tư vấn và ủy thác đầu tư đa tài sản với hơn 10 năm kinh nghiệm trên thị trường Việt Nam.
            </p>

            <div className="lkc-a4 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { Icon: Award, value: '10+', label: 'Năm kinh nghiệm' },
                { Icon: Users, value: '1,000+', label: 'Nhà đầu tư' },
                { Icon: Globe, value: '3', label: 'Thị trường' },
                { Icon: Building2, value: '95%', label: 'Tỉ lệ hài lòng' },
              ].map(s => (
                <div key={s.label} className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                  <s.Icon size={18} className="text-[#0AACB5] mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{s.value}</div>
                  <div className="text-xs text-white/55 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION ──────────────────────────────────────────── */}
      <section className="py-20 px-6">
        <div ref={missionRef} className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className={`transition-all duration-700 ease-out ${missionIn ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <SectionLabel>Sứ mệnh & Tầm nhìn</SectionLabel>
              <h2 className="text-4xl font-bold mb-6 leading-tight text-[#0F172A]">
                Không chỉ quản lý tiền —<br />
                <span className="bg-gradient-to-r from-[#0891B2] to-[#10B981] bg-clip-text text-transparent">
                  Kiến tạo tương lai tài chính
                </span>
              </h2>
              <p className="text-[#334155] text-lg leading-relaxed mb-5">
                LKC Fintech là công ty dịch vụ tài chính công nghệ chuyên cung cấp giải pháp đầu tư đa tài sản tại Việt Nam, với đội ngũ chuyên gia am hiểu sâu ba thị trường: chứng khoán, ngoại hối (FX) và tài sản số (Crypto).
              </p>
              <p className="text-[#334155] leading-relaxed mb-8">
                Tầm nhìn của chúng tôi: xây dựng hệ sinh thái đầu tư{' '}
                <strong className="text-[#0AACB5]">minh bạch, dễ tiếp cận và hiệu quả</strong> — nơi mọi nhà đầu tư đều tìm được giải pháp phù hợp với mục tiêu tài chính của mình.
              </p>
              <div className="space-y-3">
                {[
                  'Tư vấn cá nhân hóa theo mục tiêu và khẩu vị rủi ro',
                  'Báo cáo hiệu suất minh bạch, định kỳ hàng tháng',
                  'Đội ngũ chuyên gia với hơn 10 năm kinh nghiệm thực chiến',
                  'Tuân thủ đầy đủ quy định pháp luật Việt Nam',
                ].map(item => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-[#10B981] shrink-0 mt-0.5" />
                    <span className="text-sm text-[#334155]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={`grid grid-cols-2 gap-4 transition-all duration-700 ease-out delay-150 ${missionIn ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              {ABOUT_CARDS.map(c => (
                <div key={c.label}
                  className="p-5 rounded-2xl border border-slate-200 bg-white hover:border-[#0AACB5]/50 hover:shadow-md transition-all cursor-pointer group">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ background: `${c.color}18` }}>
                    <c.icon size={20} style={{ color: c.color }} />
                  </div>
                  <div className="font-semibold text-sm mb-1 text-[#0F172A] group-hover:text-[#0AACB5] transition-colors">{c.label}</div>
                  <div className="text-xs text-[#64748B]">{c.desc}</div>
                </div>
              ))}
              <div className="col-span-2 p-5 rounded-2xl border border-[#0AACB5]/30 bg-gradient-to-br from-[#EFF6FF] to-[#F0FDFA] flex items-center justify-between">
                <div>
                  <div className="font-semibold text-sm text-[#0F172A] mb-0.5">Sẵn sàng bắt đầu?</div>
                  <div className="text-xs text-[#475569]">Liên hệ tư vấn miễn phí ngay hôm nay</div>
                </div>
                <Link href="/nha-dau-tu"
                  className="shrink-0 h-9 px-4 rounded-full bg-[#0AACB5] text-white text-xs font-semibold hover:bg-[#0891B2] transition flex items-center gap-1.5 cursor-pointer">
                  Liên hệ <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ───────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-slate-100">
        <div ref={valuesRef} className="max-w-7xl mx-auto">
          <div className={`text-center mb-14 transition-all duration-700 ease-out ${valuesIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            <SectionLabel>Giá trị cốt lõi</SectionLabel>
            <h2 className="text-4xl font-bold text-[#0F172A]">Cam kết của LKC Fintech</h2>
            <p className="mt-3 text-[#475569] max-w-lg mx-auto">Ba nguyên tắc định hướng mọi quyết định và hành động của chúng tôi</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                Icon: Target, color: '#0AACB5',
                title: 'Minh bạch', sub: 'Không ẩn phí',
                desc: 'Mọi khoản phí, chiến lược và hiệu suất đều được công bố rõ ràng. Không ẩn phí, không che giấu thông tin với nhà đầu tư.',
                points: ['Phí quản lý công khai', 'Báo cáo NAV định kỳ', 'Hợp đồng rõ ràng'],
              },
              {
                Icon: Shield, color: '#10B981',
                title: 'Tin cậy', sub: 'Tuân thủ pháp luật',
                desc: 'Hoạt động theo đúng quy định pháp luật Việt Nam. Bảo mật thông tin khách hàng theo tiêu chuẩn quốc tế.',
                points: ['Giấy phép kinh doanh hợp lệ', 'Mã hóa dữ liệu tiêu chuẩn', 'Bảo mật thông tin tuyệt đối'],
              },
              {
                Icon: TrendingUp, color: '#6366F1',
                title: 'Hiệu quả', sub: '10+ năm kinh nghiệm',
                desc: 'Đội ngũ chuyên gia nhiều năm kinh nghiệm thực chiến, tập trung mang lại lợi nhuận bền vững cho từng nhà đầu tư.',
                points: ['Hiệu suất vượt benchmark', 'Chiến lược đã được kiểm chứng', 'Quản lý rủi ro chủ động'],
              },
            ].map((v, i) => (
              <div key={v.title}
                style={{ transitionDelay: valuesIn ? `${i * 120}ms` : '0ms' }}
                className={`p-8 rounded-2xl bg-white border border-slate-200 shadow-sm transition-all duration-600 ease-out ${valuesIn ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-95'}`}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0" style={{ background: `${v.color}15` }}>
                    <v.Icon size={24} style={{ color: v.color }} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0F172A]">{v.title}</h3>
                    <div className="text-xs font-medium mt-0.5" style={{ color: v.color }}>{v.sub}</div>
                  </div>
                </div>
                <p className="text-sm text-[#475569] leading-relaxed mb-5">{v.desc}</p>
                <div className="space-y-2">
                  {v.points.map(p => (
                    <div key={p} className="flex items-center gap-2 text-xs text-[#334155]">
                      <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: v.color }} />
                      {p}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MARKETS ───────────────────────────────────────────────────── */}
      <section className="py-20 px-6">
        <div ref={marketsRef} className="max-w-7xl mx-auto">
          <div className={`text-center mb-14 transition-all duration-700 ease-out ${marketsIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            <SectionLabel>Thị trường hoạt động</SectionLabel>
            <h2 className="text-4xl font-bold text-[#0F172A]">Chuyên sâu trên 3 thị trường</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                Icon: TrendingUp, color: '#0AACB5',
                title: 'Chứng khoán Việt Nam',
                desc: 'Phân tích và đầu tư cổ phiếu tại các sàn HOSE, HNX, UPCOM. Tập trung vào blue-chip, tăng trưởng và cổ tức bền vững.',
                tags: ['HOSE', 'HNX', 'UPCOM', 'ETF'],
              },
              {
                Icon: Globe, color: '#6366F1',
                title: 'Ngoại hối (FX)',
                desc: 'Giao dịch các cặp tiền tệ chính và vàng. Phân tích kỹ thuật và cơ bản kết hợp, bám sát sự kiện kinh tế vĩ mô toàn cầu.',
                tags: ['EUR/USD', 'GBP/USD', 'Vàng', 'Hàng hóa'],
              },
              {
                Icon: Coins, color: '#10B981',
                title: 'Tài sản số (Crypto)',
                desc: 'Đầu tư tài sản số theo chiến lược Spot không đòn bẩy. Tập trung BTC, ETH và các layer-1 tiềm năng theo chu kỳ thị trường.',
                tags: ['Bitcoin', 'Ethereum', 'Layer-1', 'DCA'],
              },
            ].map((m, i) => (
              <div key={m.title}
                style={{ transitionDelay: marketsIn ? `${i * 110}ms` : '0ms' }}
                className={`p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#0AACB5]/40 hover:shadow-md transition-all group ${marketsIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: `${m.color}15` }}>
                  <m.Icon size={24} style={{ color: m.color }} />
                </div>
                <h3 className="font-bold text-[#0F172A] mb-2 group-hover:text-[#0AACB5] transition-colors">{m.title}</h3>
                <p className="text-sm text-[#475569] leading-relaxed mb-4">{m.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {m.tags.map(t => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-full border border-slate-200 text-[#475569] bg-slate-50">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ───────────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-slate-100">
        <div ref={contactRef} className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-700 ease-out ${contactIn ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <SectionLabel>Liên hệ</SectionLabel>
              <h2 className="text-3xl font-bold mb-4 text-[#0F172A]">Gặp gỡ đội ngũ LKC Fintech</h2>
              <p className="text-[#475569] mb-8 leading-relaxed">
                Văn phòng của chúng tôi luôn mở cửa đón tiếp nhà đầu tư từ Thứ 2 đến Thứ 6, 8:30 – 17:30. Đặt lịch hẹn trước để được tư vấn tốt nhất.
              </p>
              <div className="space-y-4">
                {[
                  { Icon: Phone, label: 'Hotline', value: '032.541.3939 / 032.959.3699' },
                  { Icon: Mail, label: 'Email', value: 'minhmv@lkcfintech.com.vn' },
                  { Icon: MapPin, label: 'Địa chỉ', value: 'Tầng 2, Tòa nhà HH1, 90 Nguyễn Tuân, Thanh Xuân, Hà Nội' },
                ].map(item => (
                  <div key={item.label} className="flex gap-4 items-start">
                    <div className="w-9 h-9 rounded-xl bg-[#0AACB5]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <item.Icon size={15} className="text-[#0AACB5]" />
                    </div>
                    <div>
                      <div className="text-xs text-[#64748B] mb-0.5">{item.label}</div>
                      <div className="text-sm font-medium text-[#0F172A]">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={`p-8 rounded-2xl bg-white border border-slate-200 shadow-sm transition-all duration-700 ease-out delay-150 ${contactIn ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <h3 className="text-lg font-bold text-[#0F172A] mb-6">Đặt lịch tư vấn</h3>
              <form className="space-y-3" onSubmit={e => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-3">
                  <input placeholder="Họ và tên"
                    className="h-11 px-4 rounded-xl border border-slate-200 bg-[#F8FAFC] text-sm text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#0AACB5] transition" />
                  <input placeholder="Số điện thoại"
                    className="h-11 px-4 rounded-xl border border-slate-200 bg-[#F8FAFC] text-sm text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#0AACB5] transition" />
                </div>
                <input placeholder="Email"
                  className="w-full h-11 px-4 rounded-xl border border-slate-200 bg-[#F8FAFC] text-sm text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#0AACB5] transition" />
                <textarea rows={3} placeholder="Bạn muốn tư vấn về..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-[#F8FAFC] text-sm text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#0AACB5] transition resize-none" />
                <button type="submit"
                  className="w-full h-12 rounded-xl bg-gradient-to-r from-[#0891B2] to-[#10B981] text-white font-semibold hover:opacity-90 transition cursor-pointer">
                  Gửi yêu cầu tư vấn →
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
