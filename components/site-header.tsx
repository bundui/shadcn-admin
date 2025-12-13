"use client";

import React from "react";
import Link from "next/link";

import { Separator } from "@/components/ui/separator";
import { useSidebar } from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
import NotificationsPanel from "@/components/layout/dashboard/header/notifications";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import ThemeSwitcher from "@/components/theme-switcher";
import { PanelLeftOpenIcon, PanelRightOpenIcon } from "lucide-react";

function CustomTrigger() {
  const { toggleSidebar } = useSidebar();

  return (
    <Button variant="ghost" onClick={toggleSidebar}>
      <PanelLeftOpenIcon className="hidden group-has-data-[collapsible=icon]/sidebar-wrapper:inline" />
      <PanelRightOpenIcon className="inline group-has-data-[collapsible=icon]/sidebar-wrapper:hidden" />
    </Button>
  );
}

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <CustomTrigger />
        <Separator orientation="vertical" className="mx-2 data-[orientation=vertical]:h-4" />
        <Breadcrumb className="hidden lg:inline-block">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/ecommerce">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="capitalize">{pathname.split("/")[1]}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="ml-auto flex items-center gap-2">
          <NotificationsPanel />
          <ThemeSwitcher />
          <div className="ms-3">
            <Button size="sm" asChild>
              <Link href="https://github.com/bundui/shadcn-admin">Github</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
