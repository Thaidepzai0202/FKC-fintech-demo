"use client";

import { Bell, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <header className="h-14 border-b flex items-center justify-between px-6 bg-background">
      <h1 className="font-semibold text-base">{title}</h1>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="size-8">
          <Bell className="size-4" />
        </Button>
        <Button variant="ghost" size="icon" className="size-8">
          <Settings className="size-4" />
        </Button>
        <Avatar className="size-8">
          <AvatarFallback className="text-xs">AD</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
