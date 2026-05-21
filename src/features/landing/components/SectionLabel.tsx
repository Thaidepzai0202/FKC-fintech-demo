export function SectionLabel({ children }: { children: string }) {
  return (
    <div className="inline-block px-3 py-1 rounded-full bg-[#0AACB5]/10 text-[#0AACB5] text-xs font-semibold uppercase tracking-wider mb-4">
      {children}
    </div>
  )
}
