"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    TradingView: any;
  }
}

const MARKETS = [
  { symbol: "HOSE:VNINDEX", label: "VN-Index" },
  { symbol: "HOSE:VIC",     label: "VIC"      },
  { symbol: "HOSE:VCB",     label: "VCB"      },
  { symbol: "HOSE:HPG",     label: "HPG"      },
  { symbol: "HOSE:MBB",     label: "MBB"      },
];

export function TradingViewChart() {
  const chartRef = useRef<HTMLDivElement>(null);
  const tickerRef = useRef<HTMLDivElement>(null);
  const widgetRef = useRef<object | null>(null);

  /* ── Advanced Chart ── */
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;
    script.onload = () => {
      if (chartRef.current && window.TradingView) {
        widgetRef.current = new window.TradingView.widget({
          autosize: true,
          symbol: "HOSE:VNINDEX",
          interval: "D",
          timezone: "Asia/Ho_Chi_Minh",
          theme: "light",
          style: "1",
          locale: "vi_VN",
          toolbar_bg: "#f1f3fa",
          enable_publishing: false,
          allow_symbol_change: true,
          container_id: "tv_chart_container",
          studies: ["RSI@tv-basicstudies", "MASimple@tv-basicstudies"],
          show_popup_button: true,
        });
      }
    };
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  /* ── Ticker Tape ── */
  useEffect(() => {
    if (!tickerRef.current) return;
    tickerRef.current.innerHTML = "";
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: MARKETS.map((m) => ({
        proName: m.symbol,
        title: m.label,
      })),
      showSymbolLogo: true,
      colorTheme: "light",
      isTransparent: false,
      displayMode: "adaptive",
      locale: "vi_VN",
    });
    tickerRef.current.appendChild(script);
  }, []);

  return (
    <div className="flex flex-col gap-3 h-full">
      {/* Ticker tape */}
      <div className="rounded-xl overflow-hidden border shadow-sm">
        <div className="tradingview-widget-container" ref={tickerRef}>
          <div className="tradingview-widget-container__widget" />
        </div>
      </div>

      {/* Header bar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* TradingView wordmark */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="16"
            viewBox="0 0 32 16"
            className="text-[#2962FF]"
          >
            <path
              d="M12 0H0v6h6v10h6V0zm14 16h-8l6-16h8l-6 16zM17 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
              fill="currentColor"
            />
          </svg>
          <span className="font-bold text-base text-[#2962FF]">TradingView</span>
        </div>
        <a
          href="https://vn.tradingview.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-semibold bg-[#2962FF] text-white hover:bg-[#1849CC] transition-colors shadow-sm"
        >
          Mở TradingView
          <svg xmlns="http://www.w3.org/2000/svg" className="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        </a>
      </div>

      {/* Chart container */}
      <div
        className="flex-1 rounded-xl overflow-hidden border shadow-sm min-h-0"
        style={{ minHeight: 480 }}
      >
        <div
          id="tv_chart_container"
          ref={chartRef}
          className="w-full h-full"
          style={{ height: "100%" }}
        />
      </div>

      {/* Footer attribution */}
      <p className="text-xs text-muted-foreground text-right">
        Dữ liệu cung cấp bởi{" "}
        <a
          href="https://vn.tradingview.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#2962FF] hover:underline font-medium"
        >
          TradingView
        </a>
      </p>
    </div>
  );
}
