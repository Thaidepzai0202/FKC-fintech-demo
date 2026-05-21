import { Header } from "@/components/layout/Header";
import { UploadZone } from "@/features/upload/components/UploadZone";
import { BatchHistory } from "@/features/upload/components/BatchHistory";

export default function UploadPage() {
  return (
    <div className="flex flex-col h-full">
      <Header title="Upload dữ liệu" />
      <div className="p-6 flex flex-col gap-6 max-w-2xl">
        <UploadZone />
        <BatchHistory />
      </div>
    </div>
  );
}
