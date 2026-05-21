import { prisma } from "@/lib/prisma";

export async function getTraders() {
  return prisma.trader.findMany({ orderBy: { createdAt: "desc" } });
}

export async function getTraderById(id: string) {
  return prisma.trader.findUnique({ where: { id }, include: { entries: true } });
}
