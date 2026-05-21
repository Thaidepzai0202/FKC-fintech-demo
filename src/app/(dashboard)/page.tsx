import { Header } from "@/components/layout/Header";
import { StatCards } from "@/features/dashboard/components/StatCards";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DashboardPage() {
  return (
    <div className="flex flex-col h-full">
      <Header title="Dashboard" />
      <div className="p-6 flex flex-col gap-6">
        <StatCards />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <Card className="min-h-64">
            <CardHeader>
              <CardTitle className="text-sm font-medium">Top traders tuần này</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-center h-40 text-muted-foreground text-sm">
              Chưa có dữ liệu — upload Excel để bắt đầu
            </CardContent>
          </Card>
          <Card className="min-h-64">
            <CardHeader>
              <CardTitle className="text-sm font-medium">Xu hướng điểm trung bình</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-center h-40 text-muted-foreground text-sm">
              Chưa có dữ liệu
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
