'use client'

import { useState } from 'react'
import { Navbar } from '@/features/landing/components/Navbar'
import { Footer } from '@/features/landing/components/Footer'
import { SectionLabel } from '@/features/landing/components/SectionLabel'
import { ARTICLES, MARKET_TABS } from '@/features/landing/data'
import { useInView } from '@/features/landing/hooks/useInView'

export default function GocNhinPage() {
  const [activeTab, setActiveTab] = useState('Hàng ngày')
  const filtered = ARTICLES.filter(a => a.tab === activeTab)

  const { ref: articlesRef, inView: articlesIn } = useInView()
  const { ref: marketsRef, inView: marketsIn } = useInView()

  return (
    <div className="min-h-screen bg-[#F8FAFC]" style={{ fontFamily: "var(--font-ibm), 'IBM Plex Sans', system-ui, sans-serif" }}>
      <Navbar />

      {/* PAGE HEADER */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-[#EFF6FF] to-slate-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto text-center">
          <div className="lkc-a1"><SectionLabel>Phân tích chuyên sâu</SectionLabel></div>
          <h1 className="lkc-a2 text-4xl md:text-5xl font-bold text-[#0F172A]">Góc nhìn thị trường</h1>
          <p className="lkc-a3 mt-4 text-[#475569] max-w-lg mx-auto text-lg leading-relaxed">
            Phân tích từ đội ngũ chuyên gia LKC — cập nhật đều đặn hàng ngày, tuần, tháng và quý
          </p>
        </div>
      </section>

      {/* MARKET VIEW */}
      <section className="py-20 px-6">
        <div ref={articlesRef} className="max-w-7xl mx-auto">
          <div className={`flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 transition-all duration-700 ease-out ${articlesIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            <div>
              <SectionLabel>Góc nhìn thị trường</SectionLabel>
              <h2 className="text-3xl font-bold text-[#0F172A]">Phân tích từ chuyên gia LKC</h2>
              <p className="mt-2 text-[#475569]">Cập nhật đều đặn — Hàng ngày · Tuần · Tháng · Quý</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {MARKET_TABS.map(tab => (
                <button key={tab} onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
                    activeTab === tab
                      ? 'bg-[#0AACB5] text-white shadow-sm'
                      : 'bg-white border border-slate-200 text-[#334155] hover:border-[#0AACB5]/50 hover:text-[#0AACB5]'
                  }`}>
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {(filtered.length ? filtered : ARTICLES.slice(0, 2)).map((article, i) => (
              <div key={article.id}
                style={{ transitionDelay: articlesIn ? `${i * 80}ms` : '0ms' }}
                className={`p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#0AACB5]/40 hover:shadow-md transition-all group cursor-pointer ${articlesIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                <div className="flex items-center gap-2 mb-4 flex-wrap">
                  <span className="px-2.5 py-1 rounded-full text-xs font-semibold text-white" style={{ background: article.marketColor }}>
                    {article.market}
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-[#475569]">{article.tab}</span>
                  <span className="ml-auto text-xs text-[#64748B]">{article.date}</span>
                </div>
                <h3 className="font-semibold text-[#0F172A] leading-snug group-hover:text-[#0891B2] transition-colors mb-3">{article.title}</h3>
                <div className="flex items-center gap-2 text-xs text-[#64748B]">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#0891B2] to-[#10B981] shrink-0" />
                  LKC Research
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button className="h-11 px-8 rounded-full border border-[#0AACB5] text-[#0891B2] font-medium hover:bg-[#0AACB5]/10 transition cursor-pointer">
              Xem tất cả phân tích →
            </button>
          </div>
        </div>
      </section>

      {/* MARKETS OVERVIEW */}
      <section className="py-20 px-6 bg-slate-100">
        <div ref={marketsRef} className="max-w-7xl mx-auto">
          <div className={`text-center mb-14 transition-all duration-700 ease-out ${marketsIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            <SectionLabel>3 thị trường</SectionLabel>
            <h2 className="text-3xl font-bold text-[#0F172A]">Phạm vi phân tích</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Chứng khoán Việt Nam', color: '#0AACB5', exchanges: ['HOSE', 'HNX', 'UPCOM'], desc: 'Phân tích kỹ thuật & cơ bản cổ phiếu niêm yết. Khuyến nghị mua/bán/nắm giữ hàng tuần.' },
              { title: 'Ngoại hối (FX)', color: '#6366F1', exchanges: ['EUR/USD', 'GBP/USD', 'USD/JPY', 'Vàng'], desc: 'Phân tích xu hướng tỉ giá, điểm vào/ra tối ưu. Cập nhật sự kiện kinh tế vĩ mô toàn cầu.' },
              { title: 'Tài sản số (Crypto)', color: '#10B981', exchanges: ['Bitcoin', 'Ethereum', 'Altcoin L1/L2'], desc: 'Theo dõi chu kỳ thị trường crypto, on-chain data và sentiment. Chiến lược DCA dài hạn.' },
            ].map((m, i) => (
              <div key={m.title}
                style={{ transitionDelay: marketsIn ? `${i * 110}ms` : '0ms' }}
                className={`p-6 rounded-2xl bg-white border border-slate-200 hover:shadow-md transition-all ${marketsIn ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-95'}`}>
                <div className="w-3 h-3 rounded-full mb-4" style={{ background: m.color }} />
                <h3 className="text-lg font-bold mb-2 text-[#0F172A]">{m.title}</h3>
                <p className="text-sm text-[#475569] leading-relaxed mb-4">{m.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {m.exchanges.map(e => (
                    <span key={e} className="text-xs px-2.5 py-1 rounded-full border text-[#334155]" style={{ borderColor: `${m.color}50`, background: `${m.color}08` }}>{e}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
