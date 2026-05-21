import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Plus, Search } from "lucide-react";

export function TraderTable() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="relative w-64">
          <Search className="absolute left-2.5 top-2.5 size-4 text-muted-foreground" />
          <Input placeholder="Tìm trader..." className="pl-8 h-9" />
        </div>
        <Button size="sm" className="gap-1.5">
          <Plus className="size-4" />
          Thêm trader
        </Button>
      </div>

      <Card>
        <CardContent className="p-0">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-muted/40">
                <th className="text-left px-4 py-3 font-medium text-muted-foreground">Tên</th>
                <th className="text-left px-4 py-3 font-medium text-muted-foreground">Team</th>
                <th className="text-left px-4 py-3 font-medium text-muted-foreground">Account ID</th>
                <th className="text-left px-4 py-3 font-medium text-muted-foreground">Trạng thái</th>
                <th className="text-left px-4 py-3 font-medium text-muted-foreground">Tuần gần nhất</th>
                <th className="px-4 py-3" />
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={6} className="text-center py-16 text-muted-foreground">
                  Chưa có trader nào. Thêm trader hoặc upload Excel để bắt đầu.
                </td>
              </tr>
            </tbody>
          </table>
        </CardContent>
      </Card>

      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <Badge variant="secondary">Active</Badge>
        <Badge variant="outline">Inactive</Badge>
        <span className="ml-2">— màu badge hiển thị trạng thái trader</span>
      </div>
    </div>
  );
}
