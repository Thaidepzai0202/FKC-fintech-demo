'use client'

import { useState } from 'react'
import { Play } from 'lucide-react'
import type { FeaturedVideo as FeaturedVideoType } from '../gocnhin'

export function FeaturedVideo({ video }: { video: FeaturedVideoType }) {
  const isLive = video.type === 'live'
  const [playing, setPlaying] = useState(false)
  const showPlayer = isLive || playing

  // Live: tự phát nhưng phải mute (chính sách autoplay của trình duyệt).
  // Video thường: phát khi người dùng bấm → cho phép có tiếng.
  const src =
    `https://www.youtube.com/embed/${video.videoId}` +
    `?autoplay=1&rel=0&modestbranding=1${isLive ? '&mute=1' : ''}`

  const thumb = `https://i.ytimg.com/vi/${video.videoId}/hqdefault.jpg`

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-black shadow-sm">
      <div className="relative aspect-video w-full">
        {showPlayer ? (
          <iframe
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

        {isLive && (
          <span className="absolute left-3 top-3 z-10 flex items-center gap-1.5 rounded-full bg-red-600 px-2.5 py-1 text-xs font-semibold text-white shadow">
            <span className="h-2 w-2 animate-pulse rounded-full bg-white" />
            LIVE
          </span>
        )}
      </div>

      {video.title && (
        <div className="bg-white px-5 py-4">
          <h3 className="font-semibold leading-snug text-[#0F172A]">{video.title}</h3>
        </div>
      )}
    </div>
  )
}
