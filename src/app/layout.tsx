import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { FloatingContact } from '@/features/landing/components/FloatingContact'

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "LKC Fintech — Đầu tư thông minh, Tương lai vững chắc",
  description:
    "Giải pháp tài chính toàn diện: tư vấn đầu tư, ủy thác đầu tư chứng khoán, FX và Crypto tại Việt Nam.",
  icons: {
    icon: '/lkc-logo.png',
    shortcut: '/lkc-logo.png',
    apple: '/lkc-logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi" className={inter.variable}>
      <body className="min-h-full flex flex-col antialiased bg-white text-[#0A1628]">
        {children}
        <FloatingContact />
      </body>
    </html>
  )
}
