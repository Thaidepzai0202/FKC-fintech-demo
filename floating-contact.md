# Floating Contact Widget — Spec

## Tổng quan

Widget nổi cố định ở góc dưới phải màn hình, cho phép người dùng mở nhanh 5 kênh liên hệ: **Zalo, Facebook, Telegram, Email, Hotline**. Hoạt động trên tất cả trang landing (không xuất hiện trong dashboard).

---

## Vị trí tích hợp

- **File tạo mới:** `src/components/landing/FloatingContact.tsx`
- **Mount vào:** `src/app/layout.tsx` — render sau `{children}` nhưng chỉ khi pathname **không** bắt đầu bằng `/dashboard` (xét bằng `usePathname` + wrapper `'use client'`).
- **z-index:** `z-50` — ngang bằng Navbar, không che dialog/modal.

> Thực tế dashboard đã tách route group `(dashboard)` có layout riêng, nhưng vẫn nên guard bằng pathname để tránh widget xuất hiện nếu sau này có thêm route mới.

---

## Dữ liệu liên hệ

Thêm constant `FLOATING_CONTACTS` vào `src/lib/landing-data.ts`:

```ts
export const FLOATING_CONTACTS = [
  {
    id: 'zalo',
    label: 'Zalo',
    tooltip: 'Nhắn Zalo ngay',
    href: 'https://zalo.me/<zalo-id>',   // ← điền số thật
    color: '#0068FF',
    bgAlpha: '20',
  },
  {
    id: 'facebook',
    label: 'Facebook',
    tooltip: 'Nhắn Facebook',
    href: 'https://m.me/<page-id>',       // ← điền page thật
    color: '#1877F2',
    bgAlpha: '20',
  },
  {
    id: 'telegram',
    label: 'Telegram',
    tooltip: 'Nhắn Telegram',
    href: 'https://t.me/<username>',      // ← điền username thật
    color: '#0088CC',
    bgAlpha: '20',
  },
  {
    id: 'email',
    label: 'Email',
    tooltip: 'minhmv@lkcfintech.com.vn',
    href: 'mailto:minhmv@lkcfintech.com.vn',
    color: '#10B981',
    bgAlpha: '20',
  },
  {
    id: 'hotline',
    label: 'Hotline',
    tooltip: '032.541.3939',
    href: 'tel:0325413939',
    color: '#0AACB5',
    bgAlpha: '20',
  },
]
```

---

## Thiết kế UI

### Trạng thái đóng (mặc định)

```
┌──────────────────────────────────────────────────────┐
│                                              [  ✉  ] │  ← toggle button
└──────────────────────────────────────────────────────┘
```

- Nút tròn 52×52 px, gradient `from-[#0891B2] to-[#10B981]`.
- Icon mặc định: `MessageCircle` (lucide-react), trắng 22 px.
- Pulse ring nhẹ để thu hút sự chú ý (animate-ping, opacity 30%).

### Trạng thái mở (fan up)

```
                      [ Zalo    ]
                      [ FB      ]
                      [ TG      ]
                      [ Email   ]
                      [ Hotline ]
                      [  ✕  ]   ← toggle đổi sang X
```

- 5 item xuất hiện bằng cách **stack lên trên** (translate-y), mỗi item delay 30 ms.
- Mỗi item gồm:
  - Icon tròn 44×44 px (màu từng kênh, nền `color + bgAlpha`).
  - Tooltip text trái nút, fade-in khi hover item.
- Khoảng cách giữa các item: `gap-3` (12 px).
- Click ra ngoài widget → đóng lại.

### Responsive

| Breakpoint | Vị trí | Kích thước nút |
|---|---|---|
| Mobile (`< md`) | `bottom-4 right-4` | 48 px |
| Desktop (`≥ md`) | `bottom-6 right-6` | 52 px |

Tooltip ẩn trên mobile (không có hover), label hiển thị ngay bên cạnh icon.

---

## Icons

Lucide-react **không có** icon Zalo/Facebook/Telegram. Dùng SVG inline thuần:

| Kênh | SVG source |
|---|---|
| Zalo | Path chữ "Z" đặc trưng — tự vẽ hoặc dùng `ZapIcon` tạm |
| Facebook | Chữ "f" — tự vẽ hoặc dùng `FacebookIcon` nếu cài `lucide-react ≥ 0.400` |
| Telegram | Paper-plane — `Send` (lucide) gần đúng nhất |
| Email | `Mail` (lucide) |
| Hotline | `Phone` (lucide) |

**Phương án được khuyến nghị:** dùng SVG brand chính xác cho Zalo và Facebook (nhúng inline), các kênh còn lại dùng lucide icon. Điều này giữ độ nhận diện thương hiệu.

---

## Animation

```css
/* fan-up entrance cho mỗi item */
@keyframes floatUp {
  from { opacity: 0; transform: translateY(16px) scale(0.85); }
  to   { opacity: 1; transform: translateY(0)    scale(1);    }
}
```

Dùng Tailwind `animate-[floatUp_0.25s_ease-out_both]` với `style={{ animationDelay: `${index * 30}ms` }}`.

---

## Accessibility

- `aria-label` trên mỗi link: `"Liên hệ qua Zalo"`, `"Liên hệ qua Facebook"`, ...
- `aria-expanded` trên nút toggle.
- `role="dialog"` + `aria-label="Liên hệ"` trên container popup.
- Focus trap không cần thiết (widget nhỏ, không modal).

---

## File checklist

```
src/
  components/landing/
    FloatingContact.tsx      ← component mới (cần tạo)
  lib/
    landing-data.ts          ← thêm FLOATING_CONTACTS
  app/
    layout.tsx               ← import & mount FloatingContact
```

---

## Skeleton code

```tsx
// src/components/landing/FloatingContact.tsx
'use client'

import { useState, useEffect, useRef } from 'react'
import { X, MessageCircle, Mail, Phone, Send } from 'lucide-react'
import { FLOATING_CONTACTS } from '@/lib/landing-data'

export function FloatingContact() {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  // Đóng khi click ra ngoài
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <div ref={ref} className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Contact items — chỉ render khi open */}
      {open && FLOATING_CONTACTS.map((c, i) => (
        <a
          key={c.id}
          href={c.href}
          target={c.id !== 'hotline' && c.id !== 'email' ? '_blank' : undefined}
          rel="noopener noreferrer"
          aria-label={`Liên hệ qua ${c.label}`}
          className="group relative flex items-center gap-2"
          style={{ animationDelay: `${i * 30}ms` }}
        >
          {/* Tooltip */}
          <span className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity
                           text-xs font-medium text-white bg-[#0A1628]/90 px-2.5 py-1 rounded-full
                           whitespace-nowrap pointer-events-none">
            {c.tooltip}
          </span>
          {/* Icon */}
          <div
            className="w-11 h-11 rounded-full flex items-center justify-center shadow-md
                       hover:scale-110 active:scale-95 transition-transform cursor-pointer"
            style={{ background: c.color }}
          >
            {/* Icon tương ứng từng kênh */}
            <ContactIcon id={c.id} />
          </div>
        </a>
      ))}

      {/* Toggle button */}
      <button
        onClick={() => setOpen(v => !v)}
        aria-label={open ? 'Đóng liên hệ' : 'Mở liên hệ'}
        aria-expanded={open}
        className="relative w-[52px] h-[52px] rounded-full flex items-center justify-center
                   bg-gradient-to-br from-[#0891B2] to-[#10B981]
                   shadow-lg shadow-[#0891B2]/30
                   hover:scale-105 active:scale-95 transition-transform cursor-pointer"
      >
        {!open && (
          <span className="absolute inset-0 rounded-full bg-[#0AACB5] animate-ping opacity-30" />
        )}
        {open ? <X size={22} className="text-white" /> : <MessageCircle size={22} className="text-white" />}
      </button>
    </div>
  )
}

function ContactIcon({ id }: { id: string }) {
  if (id === 'email')   return <Mail   size={18} className="text-white" />
  if (id === 'hotline') return <Phone  size={18} className="text-white" />
  if (id === 'telegram') return <Send  size={18} className="text-white" />
  // Zalo & Facebook: SVG inline (placeholder — thay bằng brand SVG thật)
  return <MessageCircle size={18} className="text-white" />
}
```

---

## Câu hỏi cần confirm trước khi code

1. **Link thật** cho Zalo, Facebook Messenger/Fanpage, Telegram channel — hiện `SOCIAL_LINKS` trong `landing-data.ts` chưa có `href`.
2. **Hotline nào ưu tiên** khi tap trên mobile? (`032.541.3939` hay `032.959.3699`)?
3. Widget có hiển thị trong **dashboard** không (route `/dashboard/*`)? Đề xuất: **ẩn**.
4. Dùng **SVG brand chính xác** cho Zalo/Facebook hay chấp nhận dùng icon thay thế tạm?
