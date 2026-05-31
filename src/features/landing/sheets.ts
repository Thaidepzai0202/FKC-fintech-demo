/**
 * Helper đọc dữ liệu từ Google Sheets qua gviz JSON (không cần API key).
 *
 * Yêu cầu: Sheet được share "Bất kỳ ai có đường liên kết → Người xem".
 * Đặt env GOOGLE_SHEET_ID = <id trong URL .../spreadsheets/d/<id>/edit>.
 *
 * Mỗi tab có dòng đầu là tiêu đề cột. fetchSheetRows trả về mảng object
 * { <tên cột viết thường>: <giá trị text> }.
 */

const SHEET_ID = process.env.GOOGLE_SHEET_ID ?? ''

export type SheetRow = Record<string, string>

type GvizCell = { v: unknown; f?: string } | null
type GvizTable = {
  cols: { label?: string }[]
  rows: { c: GvizCell[] }[]
}

function cellText(cell: GvizCell): string {
  if (!cell) return ''
  if (cell.f != null) return String(cell.f).trim()
  if (cell.v != null) return String(cell.v).trim()
  return ''
}

export async function fetchSheetRows(tab: string): Promise<SheetRow[]> {
  if (!SHEET_ID) return []

  const url =
    `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq` +
    `?tqx=out:json&headers=1&sheet=${encodeURIComponent(tab)}`

  try {
    const res = await fetch(url, { next: { revalidate: 60 } })
    if (!res.ok) return []

    const raw = await res.text()
    // Phản hồi gviz bọc trong: /*O_o*/\ngoogle.visualization.Query.setResponse({...});
    const start = raw.indexOf('{')
    const end = raw.lastIndexOf('}')
    if (start === -1 || end === -1) return []

    const parsed = JSON.parse(raw.slice(start, end + 1)) as { table?: GvizTable }
    const table = parsed.table
    if (!table?.rows?.length) return []

    const labels = table.cols.map(c => (c.label ?? '').trim().toLowerCase())

    return table.rows.map(row => {
      const obj: SheetRow = {}
      ;(row.c ?? []).forEach((cell, i) => {
        const key = labels[i]
        if (key) obj[key] = cellText(cell)
      })
      return obj
    })
  } catch {
    return []
  }
}
