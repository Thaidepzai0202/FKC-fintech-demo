"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Upload,
  FileBarChart2,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard },
  { href: "/traders", label: "Traders", icon: Users },
  { href: "/upload", label: "Upload dữ liệu", icon: Upload },
  { href: "/reports", label: "Báo cáo", icon: FileBarChart2 },
];

function TradingViewLogo({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="16"
      viewBox="0 0 32 16"
      className={className}
    >
      <path
        d="M12 0H0v6h6v10h6V0zm14 16h-8l6-16h8l-6 16zM17 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Sidebar() {
  const pathname = usePathname();
  const isTradingView = pathname === "/trading-view";

  return (
    <aside className="w-60 shrink-0 border-r bg-background flex flex-col h-screen">
      <div className="h-14 flex items-center gap-2 px-4 bg-gradient-to-r from-[#1B4FA0] via-[#2BAD97] to-[#5DC9A0]">
        <Image
          src="/lkc-logo.png"
          alt="LKC"
          width={30}
          height={30}
          className="object-contain brightness-0 invert shrink-0"
        />
        <span className="font-bold text-sm text-white tracking-tight">Trader Evaluation</span>
      </div>
      <nav className="flex-1 py-3 px-2 flex flex-col gap-0.5">
        {navItems.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className={cn(
              "flex items-center gap-2.5 px-3 py-2 rounded-md text-sm transition-colors",
              pathname === href
                ? "bg-primary/10 text-primary font-medium"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            )}
          >
            <Icon className="size-4" />
            {label}
          </Link>
        ))}

        {/* TradingView — styled button riêng */}
        <div className="mt-2 px-1">
          <Link
            href="/trading-view"
            className={cn(
              "flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200",
              isTradingView
                ? "bg-[#2962FF] text-white shadow-md shadow-[#2962FF]/30"
                : "bg-[#2962FF]/10 text-[#2962FF] hover:bg-[#2962FF] hover:text-white hover:shadow-md hover:shadow-[#2962FF]/30"
            )}
          >
            <TradingViewLogo className="w-8 h-4 shrink-0" />
            <span>TradingView</span>
          </Link>
        </div>
      </nav>
      <div className="p-3 border-t text-xs text-muted-foreground">
        LKC Fin-tech © 2025
      </div>
    </aside>
  );
}
