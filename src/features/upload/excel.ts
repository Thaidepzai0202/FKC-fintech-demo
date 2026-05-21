import * as XLSX from "xlsx";

export interface ParsedRow {
  [key: string]: string | number | null;
}

export interface ParseResult {
  rows: ParsedRow[];
  headers: string[];
  errors: string[];
}

export function parseExcelBuffer(buffer: Buffer): ParseResult {
  const errors: string[] = [];

  let workbook: XLSX.WorkBook;
  try {
    workbook = XLSX.read(buffer, { type: "buffer", cellDates: true });
  } catch {
    return { rows: [], headers: [], errors: ["Không đọc được file Excel"] };
  }

  const sheetName = workbook.SheetNames[0];
  if (!sheetName) {
    return { rows: [], headers: [], errors: ["File Excel không có sheet nào"] };
  }

  const sheet = workbook.Sheets[sheetName];
  const rawRows = XLSX.utils.sheet_to_json<ParsedRow>(sheet, { defval: null });

  if (rawRows.length === 0) {
    return { rows: [], headers: [], errors: ["Sheet trống"] };
  }

  const headers = Object.keys(rawRows[0]);

  return { rows: rawRows, headers, errors };
}

export function detectWeekYear(
  rows: ParsedRow[]
): { week: number; year: number } | null {
  // TODO: detect from file name or a dedicated column once format is known
  void rows;
  return null;
}
