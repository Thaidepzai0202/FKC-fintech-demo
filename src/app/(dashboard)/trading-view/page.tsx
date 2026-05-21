import { TradingViewChart } from "@/features/trading-view/components/TradingViewChart";
import { Header } from "@/components/layout/Header";

export default function TradingViewPage() {
  return (
    <div className="flex flex-col h-full">
      <Header title="TradingView" />
      <div className="flex-1 p-4 overflow-hidden">
        <TradingViewChart />
      </div>
    </div>
  );
}
