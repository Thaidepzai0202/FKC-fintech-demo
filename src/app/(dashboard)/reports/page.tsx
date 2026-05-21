import { Header } from "@/components/layout/Header";
import { ReportTabs } from "@/features/reports/components/ReportTabs";

export default function ReportsPage() {
  return (
    <div className="flex flex-col h-full">
      <Header title="Báo cáo" />
      <div className="p-6">
        <ReportTabs />
      </div>
    </div>
  );
}
