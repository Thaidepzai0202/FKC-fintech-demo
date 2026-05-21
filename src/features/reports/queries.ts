import { prisma } from "@/lib/prisma";

export async function getWeeklyEntries(year: number, week: number) {
  return prisma.weeklyEntry.findMany({
    where: { year, week },
    include: { trader: true },
  });
}
