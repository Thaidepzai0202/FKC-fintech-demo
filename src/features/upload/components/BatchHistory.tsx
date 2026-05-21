import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function BatchHistory() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-medium">Lịch sử upload</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground py-6 text-center">
          Chưa có lịch sử upload nào
        </p>
      </CardContent>
    </Card>
  );
}
