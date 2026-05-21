import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, TrendingUp, Upload, BarChart3 } from "lucide-react";

const stats = [
  { label: "Tổng traders", value: "—", icon: Users, desc: "Chưa có dữ liệu" },
  { label: "Traders active", value: "—", icon: TrendingUp, desc: "Chưa có dữ liệu" },
  { label: "Tuần gần nhất", value: "—", icon: BarChart3, desc: "Chưa upload" },
  { label: "Tổng lô upload", value: "—", icon: Upload, desc: "Chưa có lịch sử" },
];

export function StatCards() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map(({ label, value, icon: Icon, desc }) => (
        <Card key={label}>
          <CardHeader className="pb-2 flex flex-row items-center justify-between">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {label}
            </CardTitle>
            <Icon className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{value}</p>
            <p className="text-xs text-muted-foreground mt-1">{desc}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
