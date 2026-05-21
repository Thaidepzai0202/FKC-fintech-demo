'use client'

import { Navbar } from '@/features/landing/components/Navbar'
import { Footer } from '@/features/landing/components/Footer'
import { SectionLabel } from '@/features/landing/components/SectionLabel'
import { KNOWLEDGE } from '@/features/landing/data'
import { useInView } from '@/features/landing/hooks/useInView'

export default function KienThucPage() {
  const { ref: levelsRef, inView: levelsIn } = useInView()
  const { ref: topicsRef, inView: topicsIn } = useInView()
  const { ref: ctaRef, inView: ctaIn } = useInView()

  return (
    <div className="min-h-screen bg-[#F8FAFC]" style={{ fontFamily: "var(--font-ibm), 'IBM Plex Sans', system-ui, sans-serif" }}>
      <Navbar />

      {/* PAGE HEADER */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-[#EFF6FF] to-slate-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto text-center">
          <div className="lkc-a1"><SectionLabel>Kiến thức đầu tư</SectionLabel></div>
          <h1 className="lkc-a2 text-4xl md:text-5xl font-bold text-[#0F172A]">Học đầu tư cùng LKC</h1>
          <p className="lkc-a3 mt-4 text-[#475569] max-w-xl mx-auto text-lg leading-relaxed">
            Từ nhập môn đến chuyên nghiệp — lộ trình học được thiết kế bởi chuyên gia
          </p>
        </div>
      </section>

      {/* KNOWLEDGE LEVELS */}
      <section className="py-20 px-6">
        <div ref={levelsRef} className="max-w-7xl mx-auto">
          <div className={`text-center mb-14 transition-all duration-700 ease-out ${levelsIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            <SectionLabel>Lộ trình học</SectionLabel>
            <h2 className="text-3xl font-bold text-[#0F172A]">3 cấp độ từ cơ bản đến nâng cao</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {KNOWLEDGE.map((k, i) => (
              <div key={k.level}
                style={{ transitionDelay: levelsIn ? `${i * 120}ms` : '0ms' }}
                className={`p-6 rounded-2xl bg-white border border-slate-200 hover:shadow-lg transition-all group cursor-pointer ${levelsIn ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-95'}`}>
                <div className="flex items-start justify-between mb-4">
                  <span className="text-6xl font-black leading-none select-none" style={{ color: k.color, opacity: 0.35 }}>
                    {k.level}
                  </span>
                  <span className="text-xs px-3 py-1 rounded-full font-semibold" style={{ background: `${k.color}15`, color: k.color }}>
                    {k.count} bài học
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#0F172A] group-hover:text-[#0AACB5] transition-colors">{k.title}</h3>
                <p className="text-sm text-[#475569] mb-5">{k.desc}</p>
                <ul className="space-y-2.5 mb-6">
                  {k.items.map(item => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-[#334155]">
                      <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: k.color }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <button
                  className="w-full h-10 rounded-xl border font-medium text-sm cursor-pointer transition-all"
                  style={{ borderColor: k.color, color: k.color }}
                  onMouseEnter={e => { e.currentTarget.style.background = k.color; e.currentTarget.style.color = 'white' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = k.color }}>
                  Bắt đầu học →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOPICS */}
      <section className="py-20 px-6 bg-slate-100">
        <div ref={topicsRef} className="max-w-7xl mx-auto">
          <div className={`text-center mb-14 transition-all duration-700 ease-out ${topicsIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            <SectionLabel>Chủ đề nổi bật</SectionLabel>
            <h2 className="text-3xl font-bold text-[#0F172A]">Kiến thức theo chủ đề</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { topic: 'Phân tích kỹ thuật', count: 8, color: '#0AACB5' },
              { topic: 'Phân tích cơ bản', count: 6, color: '#10B981' },
              { topic: 'Quản lý rủi ro', count: 5, color: '#6366F1' },
              { topic: 'Tâm lý giao dịch', count: 4, color: '#D4A843' },
              { topic: 'Chiến lược DCA', count: 3, color: '#EC4899' },
              { topic: 'Blockchain & DeFi', count: 7, color: '#8B5CF6' },
              { topic: 'Thị trường FX', count: 5, color: '#F59E0B' },
              { topic: 'Chứng khoán VN', count: 6, color: '#14B8A6' },
            ].map((t, i) => (
              <div key={t.topic}
                style={{ transitionDelay: topicsIn ? `${i * 60}ms` : '0ms' }}
                className={`p-5 rounded-2xl bg-white border border-slate-200 hover:border-[#0AACB5]/40 hover:shadow-md transition-all cursor-pointer group ${topicsIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <div className="w-2 h-2 rounded-full mb-3" style={{ background: t.color }} />
                <div className="font-semibold text-sm text-[#0F172A] group-hover:text-[#0AACB5] transition-colors mb-1">{t.topic}</div>
                <div className="text-xs text-[#64748B]">{t.count} bài viết</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div ref={ctaRef}
          className={`max-w-4xl mx-auto rounded-3xl p-10 text-center text-white relative overflow-hidden transition-all duration-700 ease-out ${ctaIn ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
          style={{ background: 'linear-gradient(135deg, #0891B2, #10B981)' }}>
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }} />
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Sẵn sàng học đầu tư?</h2>
            <p className="text-white/85 mb-8 max-w-md mx-auto">
              Đăng ký nhận bản tin kiến thức đầu tư miễn phí từ đội ngũ chuyên gia LKC Fintech
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                placeholder="Email của bạn"
                className="flex-1 h-12 px-4 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-white text-sm" />
              <button className="h-12 px-6 rounded-xl bg-white text-[#0891B2] font-semibold text-sm hover:bg-white/90 transition whitespace-nowrap cursor-pointer">
                Đăng ký ngay
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
