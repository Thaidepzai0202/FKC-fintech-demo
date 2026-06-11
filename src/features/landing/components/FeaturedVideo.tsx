'use client'

import { useState } from 'react'
import { Play } from 'lucide-react'
import type { FeaturedVideo as FeaturedVideoType } from '../gocnhin'

function LiveBadge({ small = false }: { small?: boolean }) {
  return (
    <span
      className={`absolute z-10 flex items-center gap-1.5 rounded-full bg-red-600 font-semibold text-white shadow ${
        small ? 'left-1.5 top-1.5 px-1.5 py-0.5 text-[10px] gap-1' : 'left-3 top-3 px-2.5 py-1 text-xs'
      }`}
    >
      <span className={`animate-pulse rounded-full bg-white ${small ? 'h-1.5 w-1.5' : 'h-2 w-2'}`} />
      LIVE
    </span>
  )
}

export function FeaturedVideo({ videos }: { videos: FeaturedVideoType[] }) {
  // Live đầu tiên (nếu có) được chọn mặc định, không thì video đầu danh sách.
  const defaultIndex = Math.max(0, videos.findIndex(v => v.type === 'live'))
  const [activeIndex, setActiveIndex] = useState(defaultIndex)
  // userPicked: đã click chọn trong list → autoplay có tiếng (user gesture).
  const [userPicked, setUserPicked] = useState(false)
  const [playing, setPlaying] = useState(false)

  const video = videos[activeIndex]
  if (!video) return null

  const isLive = video.type === 'live'
  const showPlayer = isLive || playing || userPicked

  // Live tự phát khi load: phải mute (chính sách autoplay của trình duyệt).
  // Mọi trường hợp phát do người dùng bấm: cho phép có tiếng.
  const mute = isLive && !userPicked && !playing
  const src =
    `https://www.youtube.com/embed/${video.videoId}` +
    `?autoplay=1&rel=0&modestbranding=1${mute ? '&mute=1' : ''}`

  const thumb = `https://i.ytimg.com/vi/${video.videoId}/hqdefault.jpg`

  function pickVideo(i: number) {
    setActiveIndex(i)
    setUserPicked(true)
  }

  return (
    <div>
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-black shadow-sm">
        <div className="relative aspect-video w-full">
          {showPlayer ? (
            <iframe
              key={video.videoId}
              className="absolute inset-0 h-full w-full"
              src={src}
              title={video.title ?? 'YouTube video'}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <button
              type="button"
              onClick={() => setPlaying(true)}
              className="group absolute inset-0 h-full w-full cursor-pointer"
              aria-label={`Phát video: ${video.title ?? ''}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={thumb} alt={video.title ?? 'Video'} className="h-full w-full object-cover" />
              <span className="absolute inset-0 bg-black/25 transition group-hover:bg-black/10" />
              <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#0AACB5] text-white shadow-lg transition group-hover:scale-110">
                <Play className="ml-1 h-7 w-7 fill-current" />
              </span>
            </button>
          )}

          {isLive && <LiveBadge />}
        </div>

        {video.title && (
          <div className="bg-white px-5 py-4">
            <h3 className="font-semibold leading-snug text-[#0F172A]">{video.title}</h3>
          </div>
        )}
      </div>

      {videos.length > 1 && (
        <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
          {videos.map((v, i) => {
            const isActive = i === activeIndex
            return (
              <button
                key={`${v.videoId}-${i}`}
                type="button"
                onClick={() => pickVideo(i)}
                className="group w-40 shrink-0 text-left"
                aria-label={`Phát video: ${v.title ?? ''}`}
                aria-current={isActive}
              >
                <div
                  className={`relative aspect-video w-full overflow-hidden rounded-lg border bg-black transition ${
                    isActive
                      ? 'border-transparent ring-2 ring-[#0AACB5]'
                      : 'border-slate-200 group-hover:border-[#0AACB5]/40 group-hover:shadow-md'
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://i.ytimg.com/vi/${v.videoId}/mqdefault.jpg`}
                    alt={v.title ?? 'Video'}
                    className="h-full w-full object-cover"
                  />
                  {v.type === 'live' && <LiveBadge small />}
                  {isActive && (
                    <span className="absolute inset-x-0 bottom-0 flex items-center justify-center gap-1 bg-[#0AACB5]/90 py-0.5 text-[10px] font-semibold text-white">
                      <Play className="h-2.5 w-2.5 fill-current" />
                      Đang phát
                    </span>
                  )}
                </div>
                {v.title && (
                  <p
                    className={`mt-1.5 line-clamp-2 text-sm leading-snug transition-colors ${
                      isActive ? 'font-semibold text-[#0891B2]' : 'text-[#0F172A] group-hover:text-[#0891B2]'
                    }`}
                  >
                    {v.title}
                  </p>
                )}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
