import { Header } from "@/components/layout/Header";
import { TraderTable } from "@/features/traders/components/TraderTable";

export default function TradersPage() {
  return (
    <div className="flex flex-col h-full">
      <Header title="Traders" />
      <div className="p-6">
        <TraderTable />
      </div>
    </div>
  );
}
