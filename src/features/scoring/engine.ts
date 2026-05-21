export interface RawEntryData {
  [key: string]: number | string;
}

export interface ScoreResult {
  total: number;         // 0–100
  components: Record<string, number>;
  grade: "A" | "B" | "C" | "D" | "F";
  flags: string[];
}

export function calculateScore(raw: RawEntryData): ScoreResult {
  // TODO: implement actual scoring logic from spec
  void raw;
  return {
    total: 0,
    components: {},
    grade: "F",
    flags: ["scoring_not_configured"],
  };
}

export function getGrade(total: number): ScoreResult["grade"] {
  if (total >= 90) return "A";
  if (total >= 75) return "B";
  if (total >= 60) return "C";
  if (total >= 45) return "D";
  return "F";
}
