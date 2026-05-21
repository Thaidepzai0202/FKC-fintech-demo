import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function ReportTabs() {
  return (
    <Tabs defaultValue="weekly">
      <TabsList>
        <TabsTrigger value="weekly">Theo tuần</TabsTrigger>
        <TabsTrigger value="monthly">Theo tháng</TabsTrigger>
        <TabsTrigger value="ranking">Xếp hạng</TabsTrigger>
      </TabsList>

      <TabsContent value="weekly" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Báo cáo tuần</CardTitle>
          </CardHeader>
          <CardContent className="py-12 text-center text-muted-foreground text-sm">
            Chưa có dữ liệu — sẵn sàng sau khi upload Excel đầu tiên
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="monthly" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Báo cáo tháng</CardTitle>
          </CardHeader>
          <CardContent className="py-12 text-center text-muted-foreground text-sm">
            Sẽ tự tổng hợp từ dữ liệu tuần
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="ranking" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Leaderboard</CardTitle>
          </CardHeader>
          <CardContent className="py-12 text-center text-muted-foreground text-sm">
            Xếp hạng điểm traders theo kỳ chọn
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
