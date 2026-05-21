import type { Trader, WeeklyEntry, UploadBatch, User, Role } from "@prisma/client";

export type { Trader, WeeklyEntry, UploadBatch, User, Role };

export interface TraderWithEntries extends Trader {
  entries: WeeklyEntry[];
}

export interface WeeklyEntryWithTrader extends WeeklyEntry {
  trader: Trader;
}

export interface BatchWithEntries extends UploadBatch {
  entries: WeeklyEntryWithTrader[];
  uploader: Pick<User, "id" | "name" | "email">;
}

export interface WeekOption {
  week: number;
  year: number;
  label: string;
}

export interface DashboardSummary {
  totalTraders: number;
  activeTraders: number;
  latestWeek: WeekOption | null;
  totalUploads: number;
}
