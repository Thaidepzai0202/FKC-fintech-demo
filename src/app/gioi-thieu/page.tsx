'use client'

import {
  Phone, Mail, MapPin,
  Target, Shield, TrendingUp,
  Cpu, GraduationCap, Sparkles,
  Rocket, Compass,
  CheckCircle2, Award, Users, Layers,
} from 'lucide-react'
import { Navbar } from '@/features/landing/components/Navbar'
import { Footer } from '@/features/landing/components/Footer'
import { SectionLabel } from '@/features/landing/components/SectionLabel'
import { ConsultationForm } from '@/features/landing/components/ConsultationForm'
import { useInView } from '@/features/landing/hooks/useInView'

export default function GioiThieuPage() {
  const { ref: scopeRef, inView: scopeIn } = useInView()
  const { ref: missionRef, inView: missionIn } = useInView()
  const { ref: valuesRef, inView: valuesIn } = useInView()
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
              Đối tác tài chính<br />
              <span className="bg-gradient-to-r from-[#0AACB5] to-[#10B981] bg-clip-text text-transparent">
                tin cậy và hiệu quả
              </span>
            </h1>
            <p className="lkc-a3 text-white/70 text-lg leading-relaxed mb-10 max-w-2xl">
              Công ty TNHH Đầu tư LKC Fintech — kết hợp tri thức tài chính và công nghệ hiện đại để tạo ra giải pháp đầu tư thông minh, bền vững và hiệu quả.
            </p>

            <div className="lkc-a4 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { Icon: Award, value: '10+', label: 'Năm kinh nghiệm' },
                { Icon: Users, value: '1,000+', label: 'Nhà đầu tư' },
                { Icon: Layers, value: '4', label: 'Lĩnh vực hoạt động' },
                { Icon: CheckCircle2, value: '95%', label: 'Tỉ lệ hài lòng' },
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

      {/* ── LĨNH VỰC HOẠT ĐỘNG ────────────────────────────────────────── */}
      <section className="py-20 px-6">
        <div ref={scopeRef} className="max-w-7xl mx-auto">
          <div className={`text-center mb-14 transition-all duration-700 ease-out ${scopeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            <SectionLabel>Lĩnh vực hoạt động</SectionLabel>
            <h2 className="text-4xl font-bold text-[#0F172A]">Hệ sinh thái Fintech toàn diện</h2>
            <p className="mt-3 text-[#475569] max-w-2xl mx-auto">
              Từ giao dịch trực tiếp đến công nghệ định lượng, dịch vụ chuyên sâu và giải pháp tài chính số — đồng hành với nhà đầu tư trên toàn bộ hành trình.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                Icon: TrendingUp, color: '#0AACB5',
                title: 'Giao dịch tài chính',
                desc: 'Hoạt động giao dịch chuyên sâu trên hai thị trường trọng điểm: Tài sản số và Chứng khoán.',
                tags: ['Tài sản số', 'Chứng khoán'],
              },
              {
                Icon: Cpu, color: '#6366F1',
                title: 'Công nghệ giao dịch',
                desc: 'Nghiên cứu, phát triển và triển khai hệ thống giao dịch định lượng, chỉ báo kỹ thuật và thuật toán AI.',
                tags: ['Định lượng', 'Chỉ báo', 'AI'],
              },
              {
                Icon: GraduationCap, color: '#10B981',
                title: 'Dịch vụ đầu tư',
                desc: 'Cung cấp tín hiệu, cho thuê hệ thống giao dịch, tư vấn và đào tạo giao dịch chuyên sâu cho nhà đầu tư.',
                tags: ['Tín hiệu', 'Hệ thống', 'Đào tạo'],
              },
              {
                Icon: Sparkles, color: '#D4A843',
                title: 'Giải pháp Fintech',
                desc: 'Ứng dụng công nghệ vào quản lý vốn, tối ưu hoá lợi nhuận và tự động hóa hoạt động đầu tư.',
                tags: ['Quản lý vốn', 'Tối ưu', 'Tự động hoá'],
              },
            ].map((m, i) => (
              <div key={m.title}
                style={{ transitionDelay: scopeIn ? `${i * 110}ms` : '0ms' }}
                className={`p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#0AACB5]/40 hover:shadow-md transition-all group ${scopeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
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

      {/* ── MISSION & VISION ──────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-slate-100">
        <div ref={missionRef} className="max-w-7xl mx-auto">
          <div className={`text-center mb-14 transition-all duration-700 ease-out ${missionIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            <SectionLabel>Sứ mệnh &amp; Tầm nhìn</SectionLabel>
            <h2 className="text-4xl font-bold text-[#0F172A]">Kim chỉ nam của LKC Fintech</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Sứ mệnh */}
            <div
              className={`relative overflow-hidden p-10 rounded-3xl bg-white border border-slate-200 shadow-sm transition-all duration-700 ease-out ${missionIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full blur-3xl opacity-30"
                style={{ background: 'radial-gradient(circle, #0AACB5, transparent)' }} />
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 bg-[#0AACB5]/12">
                  <Rocket size={22} className="text-[#0AACB5]" />
                </div>
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0AACB5] mb-3">Sứ mệnh</div>
                <p className="text-xl md:text-2xl font-semibold text-[#0F172A] leading-snug">
                  &ldquo;Kết hợp tri thức tài chính và công nghệ hiện đại để tạo ra giải pháp đầu tư{' '}
                  <span className="bg-gradient-to-r from-[#0891B2] to-[#10B981] bg-clip-text text-transparent">
                    thông minh, bền vững và hiệu quả
                  </span>
                  .&rdquo;
                </p>
              </div>
            </div>

            {/* Tầm nhìn */}
            <div
              style={{ transitionDelay: missionIn ? '120ms' : '0ms' }}
              className={`relative overflow-hidden p-10 rounded-3xl bg-[#0A1628] text-white shadow-sm transition-all duration-700 ease-out ${missionIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full blur-3xl opacity-30"
                style={{ background: 'radial-gradient(circle, #10B981, transparent)' }} />
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 bg-white/10">
                  <Compass size={22} className="text-[#10B981]" />
                </div>
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#10B981] mb-3">Tầm nhìn</div>
                <p className="text-xl md:text-2xl font-semibold leading-snug">
                  Trở thành doanh nghiệp Fintech{' '}
                  <span className="bg-gradient-to-r from-[#0AACB5] to-[#10B981] bg-clip-text text-transparent">
                    hàng đầu Việt Nam
                  </span>
                  , tiên phong trong lĩnh vực giao dịch định lượng và trí tuệ nhân tạo tài chính, vươn ra thị trường quốc tế.
                </p>
              </div>
            </div>
          </div>

          {/* Cam kết đi kèm */}
          <div className={`mt-10 grid md:grid-cols-2 gap-3 transition-all duration-700 ease-out delay-200 ${missionIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            {[
              'Tư vấn cá nhân hóa theo mục tiêu và khẩu vị rủi ro',
              'Báo cáo hiệu suất minh bạch, định kỳ hàng tháng',
              'Đội ngũ chuyên gia với hơn 10 năm kinh nghiệm thực chiến',
              'Tuân thủ đầy đủ quy định pháp luật Việt Nam',
            ].map(item => (
              <div key={item} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200">
                <CheckCircle2 size={16} className="text-[#10B981] shrink-0 mt-0.5" />
                <span className="text-sm text-[#334155]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ───────────────────────────────────────────────── */}
      <section className="py-20 px-6">
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
              <ConsultationForm source="gioi-thieu" inputBg="bg-[#F8FAFC]" rows={3} />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
