import Image from 'next/image'
import Link from 'next/link'

interface LogoProps {
  variant?: 'white' | 'color'
}

export function Logo({ variant = 'white' }: LogoProps) {
  const src = variant === 'color' ? '/lkc-logo-color.png' : '/lkc-logo-white.png'
  return (
    <Link href="/" className="flex items-center gap-2.5 cursor-pointer select-none">
      <Image
        src={src}
        alt="LKC Fintech"
        width={38}
        height={38}
        className="object-contain"
        priority
      />
      <div className="font-bold text-[15px] tracking-tight text-white">LKC Fintech</div>
    </Link>
  )
}
