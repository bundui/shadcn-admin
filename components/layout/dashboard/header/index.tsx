"use client";

import ThemeSwitch from "./theme-switch";
import Notifications from "./notifications";
import UserMenu from "./user-menu";
import Messages from "./messages";
import Search from "./search";
import { SidebarTrigger } from "@/components/ui/sidebar-v2";
import { usePathname } from "next/navigation";
import { Separator } from "@/components/ui/separator";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-background/50 sticky top-0 z-10 flex h-(--header-height) flex-row items-center justify-between gap-2 rounded-tl-xl rounded-tr-xl px-6 backdrop-blur-lg">
      <div className="flex grow items-center gap-1">
        <SidebarTrigger className="*:size-5" />
        <Separator orientation="vertical" className="mx-2 data-[orientation=vertical]:h-4" />
        <h1 className="text-lg font-medium capitalize">{pathname.split("/")[1]}</h1>
      </div>
      <Search />
      <div className="flex grow justify-end gap-1">
        <Messages />
        <Notifications />
        <ThemeSwitch />
        <UserMenu />
      </div>
    </header>
  );
}
