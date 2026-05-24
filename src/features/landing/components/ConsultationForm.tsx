'use client'

import { useMemo, useState, useTransition } from 'react'
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import { submitConsultation } from '@/features/landing/actions'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_RE = /^(\+?84|0)(3|5|7|8|9)\d{8}$/
const NAME_MIN = 2
const MESSAGE_MIN = 10

type Field = 'name' | 'phone' | 'email' | 'message'

type Props = {
  source?: string
  inputBg?: string
  rows?: number
}

export function ConsultationForm({ source, inputBg = 'bg-[#F8FAFC]', rows = 3 }: Props) {
  const [values, setValues] = useState({ name: '', phone: '', email: '', message: '' })
  const [touched, setTouched] = useState<Record<Field, boolean>>({
    name: false, phone: false, email: false, message: false,
  })
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [statusMsg, setStatusMsg] = useState('')
  const [pending, startTransition] = useTransition()

  const errors = useMemo(() => {
    const name = values.name.trim()
    const phone = values.phone.replace(/[\s.-]/g, '')
    const email = values.email.trim()
    const message = values.message.trim()
    return {
      name: name.length < NAME_MIN ? 'Tối thiểu 2 ký tự' : '',
      phone: !PHONE_RE.test(phone) ? 'SĐT không hợp lệ' : '',
      email: !EMAIL_RE.test(email) ? 'Email không hợp lệ' : '',
      message: message.length < MESSAGE_MIN ? `Tối thiểu ${MESSAGE_MIN} ký tự` : '',
    }
  }, [values])

  const isValid = !errors.name && !errors.phone && !errors.email && !errors.message
  const canSubmit = isValid && !pending

  function update(field: Field, v: string) {
    setValues(s => ({ ...s, [field]: v }))
    if (status !== 'idle') setStatus('idle')
  }

  function blur(field: Field) {
    setTouched(s => ({ ...s, [field]: true }))
  }

  function showErr(field: Field) {
    return touched[field] && !!errors[field]
  }

  function inputCls(field: Field) {
    const err = showErr(field)
    return [
      'h-11 px-4 rounded-xl border text-sm text-[#0F172A] placeholder-[#94A3B8] focus:outline-none transition',
      inputBg,
      err
        ? 'border-red-300 focus:border-red-400'
        : 'border-slate-200 focus:border-[#0AACB5]',
    ].join(' ')
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setTouched({ name: true, phone: true, email: true, message: true })
    if (!canSubmit) return

    startTransition(async () => {
      const res = await submitConsultation({ ...values, source })
      if (res.ok) {
        setStatus('success')
        setStatusMsg('Đã gửi yêu cầu. Đội ngũ LKC Fintech sẽ liên hệ trong thời gian sớm nhất.')
        setValues({ name: '', phone: '', email: '', message: '' })
        setTouched({ name: false, phone: false, email: false, message: false })
      } else {
        setStatus('error')
        setStatusMsg(res.error)
      }
    })
  }

  return (
    <form className="space-y-3" onSubmit={onSubmit} noValidate>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <input
            placeholder="Họ và tên"
            value={values.name}
            onChange={e => update('name', e.target.value)}
            onBlur={() => blur('name')}
            aria-invalid={showErr('name')}
            className={`w-full ${inputCls('name')}`}
          />
          {showErr('name') && <p className="mt-1 text-[11px] text-red-500">{errors.name}</p>}
        </div>
        <div>
          <input
            placeholder="Số điện thoại"
            inputMode="tel"
            value={values.phone}
            onChange={e => update('phone', e.target.value)}
            onBlur={() => blur('phone')}
            aria-invalid={showErr('phone')}
            className={`w-full ${inputCls('phone')}`}
          />
          {showErr('phone') && <p className="mt-1 text-[11px] text-red-500">{errors.phone}</p>}
        </div>
      </div>

      <div>
        <input
          placeholder="Email"
          type="email"
          value={values.email}
          onChange={e => update('email', e.target.value)}
          onBlur={() => blur('email')}
          aria-invalid={showErr('email')}
          className={`w-full ${inputCls('email')}`}
        />
        {showErr('email') && <p className="mt-1 text-[11px] text-red-500">{errors.email}</p>}
      </div>

      <div>
        <textarea
          rows={rows}
          placeholder="Bạn muốn tư vấn về..."
          value={values.message}
          onChange={e => update('message', e.target.value)}
          onBlur={() => blur('message')}
          aria-invalid={showErr('message')}
          className={[
            'w-full px-4 py-3 rounded-xl border text-sm text-[#0F172A] placeholder-[#94A3B8] focus:outline-none transition resize-none',
            inputBg,
            showErr('message')
              ? 'border-red-300 focus:border-red-400'
              : 'border-slate-200 focus:border-[#0AACB5]',
          ].join(' ')}
        />
        {showErr('message') && <p className="mt-1 text-[11px] text-red-500">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={!canSubmit}
        aria-disabled={!canSubmit}
        className={[
          'w-full h-12 rounded-xl font-semibold transition flex items-center justify-center gap-2',
          canSubmit
            ? 'bg-gradient-to-r from-[#0891B2] to-[#10B981] text-white hover:opacity-90 cursor-pointer'
            : 'bg-slate-200 text-slate-400 cursor-not-allowed',
        ].join(' ')}
      >
        {pending ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Đang gửi...
          </>
        ) : (
          <>Gửi yêu cầu tư vấn →</>
        )}
      </button>

      {status === 'success' && (
        <div className="flex items-start gap-2 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700">
          <CheckCircle2 size={16} className="shrink-0 mt-0.5" />
          <span className="text-xs leading-relaxed">{statusMsg}</span>
        </div>
      )}
      {status === 'error' && (
        <div className="flex items-start gap-2 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700">
          <AlertCircle size={16} className="shrink-0 mt-0.5" />
          <span className="text-xs leading-relaxed">{statusMsg}</span>
        </div>
      )}
    </form>
  )
}
