"use client";

import React from "react";
import Link from "next/link";

import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar-v2";
import { usePathname } from "next/navigation";
import MessagesPanel from "@/components/layout/dashboard/header/messages";
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

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
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
          <MessagesPanel />
          <NotificationsPanel />
          <div className="ms-3">
            <Button size="sm" asChild>
              <Link href="/pricing">
                <span className="hidden lg:inline-block">Get Shadcn Admin</span>
                <span className="inline-block lg:hidden">Get Template</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
