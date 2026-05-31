'use server'

import { Resend } from 'resend'

const CONSULTATION_RECIPIENT = 'hoangkhanhchi4747@gmail.com'

export type ConsultationInput = {
  name: string
  phone: string
  email: string
  message: string
  source?: string
}

export type ConsultationResult =
  | { ok: true }
  | { ok: false; error: string }

const NAME_MIN = 2
const MESSAGE_MIN = 10
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_RE = /^(\+?84|0)(3|5|7|8|9)\d{8}$/

function validate(input: ConsultationInput): string | null {
  const name = input.name?.trim() ?? ''
  const phone = (input.phone ?? '').replace(/[\s.-]/g, '')
  const email = input.email?.trim() ?? ''
  const message = input.message?.trim() ?? ''

  if (name.length < NAME_MIN) return 'Họ và tên không hợp lệ.'
  if (!PHONE_RE.test(phone)) return 'Số điện thoại không hợp lệ.'
  if (!EMAIL_RE.test(email)) return 'Email không hợp lệ.'
  if (message.length < MESSAGE_MIN) return 'Nội dung tư vấn quá ngắn.'
  return null
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export async function submitConsultation(input: ConsultationInput): Promise<ConsultationResult> {
  const validationError = validate(input)
  if (validationError) return { ok: false, error: validationError }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return { ok: false, error: 'Hệ thống chưa cấu hình email. Vui lòng liên hệ qua hotline.' }
  }

  const resend = new Resend(apiKey)
  const from = process.env.RESEND_FROM ?? 'LKC Fintech <onboarding@resend.dev>'
  const source = input.source ?? 'website'

  const subject = `[LKC Fintech] Yêu cầu tư vấn mới — ${input.name.trim()}`
  const safe = {
    name: escapeHtml(input.name.trim()),
    phone: escapeHtml(input.phone.trim()),
    email: escapeHtml(input.email.trim()),
    message: escapeHtml(input.message.trim()).replace(/\n/g, '<br/>'),
    source: escapeHtml(source),
  }

  const html = `
    <div style="font-family:'Inter',system-ui,sans-serif;max-width:560px;margin:0 auto;padding:24px;background:#F8FAFC;color:#0F172A">
      <h2 style="margin:0 0 16px;font-size:18px;color:#0AACB5">Yêu cầu tư vấn mới</h2>
      <table style="width:100%;border-collapse:collapse;background:#fff;border:1px solid #E2E8F0;border-radius:12px;overflow:hidden">
        <tr><td style="padding:12px 16px;border-bottom:1px solid #E2E8F0;width:140px;color:#64748B;font-size:13px">Họ và tên</td><td style="padding:12px 16px;border-bottom:1px solid #E2E8F0;font-weight:600">${safe.name}</td></tr>
        <tr><td style="padding:12px 16px;border-bottom:1px solid #E2E8F0;color:#64748B;font-size:13px">Số điện thoại</td><td style="padding:12px 16px;border-bottom:1px solid #E2E8F0;font-weight:600">${safe.phone}</td></tr>
        <tr><td style="padding:12px 16px;border-bottom:1px solid #E2E8F0;color:#64748B;font-size:13px">Email</td><td style="padding:12px 16px;border-bottom:1px solid #E2E8F0;font-weight:600">${safe.email}</td></tr>
        <tr><td style="padding:12px 16px;border-bottom:1px solid #E2E8F0;color:#64748B;font-size:13px;vertical-align:top">Nội dung</td><td style="padding:12px 16px;border-bottom:1px solid #E2E8F0;line-height:1.6">${safe.message}</td></tr>
        <tr><td style="padding:12px 16px;color:#64748B;font-size:13px">Nguồn</td><td style="padding:12px 16px;font-size:13px;color:#64748B">${safe.source}</td></tr>
      </table>
      <p style="margin:16px 0 0;font-size:12px;color:#94A3B8">Trả lời trực tiếp email này sẽ gửi tới khách hàng.</p>
    </div>
  `

  try {
    const { data, error } = await resend.emails.send({
      from,
      to: CONSULTATION_RECIPIENT,
      replyTo: input.email.trim(),
      subject,
      html,
    })

    if (error) {
      console.error('[Resend] send error:', error)
      return { ok: false, error: `Không gửi được: ${error.message ?? 'lỗi không xác định'}` }
    }
    console.log('[Resend] sent:', data?.id)
    return { ok: true }
  } catch (e) {
    console.error('[Resend] exception:', e)
    const msg = e instanceof Error ? e.message : 'lỗi không xác định'
    return { ok: false, error: `Không gửi được: ${msg}` }
  }
}
