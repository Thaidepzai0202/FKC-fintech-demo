import { ArrowUpRight } from 'lucide-react'
import { Navbar } from '@/features/landing/components/Navbar'
import { Footer } from '@/features/landing/components/Footer'
import { SectionLabel } from '@/features/landing/components/SectionLabel'
import { FeaturedVideo } from '@/features/landing/components/FeaturedVideo'
import { fetchNews, fetchFeaturedVideo } from '@/features/landing/gocnhin'

// Lấy dữ liệu mới từ Google Sheets, cache lại tối đa 60s.
export const revalidate = 60

export default async function GocNhinPage() {
  const [video, news] = await Promise.all([fetchFeaturedVideo(), fetchNews()])

  return (
    <div className="min-h-screen bg-[#F8FAFC]" style={{ fontFamily: "var(--font-inter), 'Inter', system-ui, sans-serif" }}>
      <Navbar />

      {/* PAGE HEADER */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-[#EFF6FF] to-slate-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto text-center">
          <div className="lkc-a1"><SectionLabel>Phân tích chuyên sâu</SectionLabel></div>
          <h1 className="lkc-a2 text-4xl md:text-5xl font-bold text-[#0F172A]">Góc nhìn thị trường</h1>
          <p className="lkc-a3 mt-4 text-[#475569] max-w-lg mx-auto text-lg leading-relaxed">
            Phân tích từ đội ngũ chuyên gia LKC — cập nhật trực tiếp qua video và bản tin thị trường
          </p>
        </div>
      </section>

      {/* VIDEO + NEWS */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8">
          {/* Video nổi bật */}
          <div className={video ? 'lg:col-span-7' : 'hidden'}>
            <SectionLabel>Trực tiếp / Video nổi bật</SectionLabel>
            <div className="mt-4">
              {video && <FeaturedVideo video={video} />}
            </div>
          </div>

          {/* Bản tin chính */}
          <div className={video ? 'lg:col-span-5' : 'lg:col-span-12'}>
            <SectionLabel>Bản tin thị trường</SectionLabel>

            {news.length === 0 ? (
              <p className="mt-4 text-[#64748B]">Chưa có bản tin nào.</p>
            ) : (
              <div className={`mt-4 ${video ? 'flex flex-col gap-3 lg:max-h-[520px] lg:overflow-y-auto lg:pr-1' : 'grid md:grid-cols-2 gap-4'}`}>
                {news.map(item => {
                  const inner = (
                    <>
                      <div className="flex items-start gap-3">
                        <h3 className="flex-1 font-semibold leading-snug text-[#0F172A] group-hover:text-[#0891B2] transition-colors">
                          {item.title}
                        </h3>
                        {item.link && (
                          <ArrowUpRight className="h-4 w-4 shrink-0 text-[#94A3B8] group-hover:text-[#0AACB5] transition-colors" />
                        )}
                      </div>
                      {item.subtitle && (
                        <p className="mt-1.5 text-sm leading-relaxed text-[#64748B] line-clamp-3">{item.subtitle}</p>
                      )}
                    </>
                  )

                  const cls = 'block p-4 rounded-xl bg-white border border-slate-200 hover:border-[#0AACB5]/40 hover:shadow-md transition-all group'

                  return item.link ? (
                    <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer" className={`${cls} cursor-pointer`}>
                      {inner}
                    </a>
                  ) : (
                    <div key={item.id} className={cls}>{inner}</div>
                  )
                })}
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
