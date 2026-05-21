import { prisma } from "@/lib/prisma";

export async function getUploadBatches() {
  return prisma.uploadBatch.findMany({
    orderBy: { createdAt: "desc" },
    include: { uploader: { select: { id: true, name: true, email: true } } },
  });
}
