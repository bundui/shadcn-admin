"use client";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem
} from "@/components/ui/sidebar-v2";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from "@/components/ui/collapsible-v2";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { sidebarData } from "@/@data/sidebar";
import { Fragment } from "react";

export type NavMainProps = typeof sidebarData.navMain;

export function NavMain({ items }: { items: NavMainProps }) {
  const isMobile = useIsMobile();

  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        {items.map((item, i) => (
          <Fragment key={i}>
            {item.title && <SidebarGroupLabel>{item.title}</SidebarGroupLabel>}
            <SidebarMenu>
              {item.items.map((l, index) => (
                <Fragment key={index}>
                  {l?.items?.length ? (
                    <>
                      <div className="hidden group-data-[collapsible=icon]:block">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <SidebarMenuItem key={l.title}>
                              <SidebarMenuButton tooltip={l.title} asChild>
                                <Link href={l.url ?? "#"}>
                                  {l.icon && <l.icon />}
                                  <span>{l.title}</span>
                                </Link>
                              </SidebarMenuButton>
                            </SidebarMenuItem>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent
                            side={isMobile ? "bottom" : "right"}
                            align={isMobile ? "end" : "start"}>
                            <DropdownMenuLabel>{l.title}</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            {l.items.map((z, index) => (
                              <DropdownMenuItem key={index}>{z.title}</DropdownMenuItem>
                            ))}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                      <Collapsible key={l.title} asChild className="group/collapsible">
                        <SidebarMenuItem>
                          <CollapsibleTrigger asChild>
                            <SidebarMenuButton>
                              {l.icon && <l.icon />}
                              {l.title}{" "}
                              <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                            </SidebarMenuButton>
                          </CollapsibleTrigger>
                          {l.items?.length ? (
                            <CollapsibleContent>
                              <SidebarMenuSub>
                                {l.items.map((item) => (
                                  <SidebarMenuSubItem key={item.title}>
                                    <SidebarMenuSubButton asChild isActive={false}>
                                      <Link href={item.url}>{item.title}</Link>
                                    </SidebarMenuSubButton>
                                  </SidebarMenuSubItem>
                                ))}
                              </SidebarMenuSub>
                            </CollapsibleContent>
                          ) : null}
                        </SidebarMenuItem>
                      </Collapsible>
                    </>
                  ) : (
                    <SidebarMenuItem key={l.title}>
                      <SidebarMenuButton tooltip={l.title} asChild>
                        <Link href={l.url ?? "#"}>
                          {l.icon && <l.icon />}
                          <span>{l.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  )}
                </Fragment>
              ))}
            </SidebarMenu>
          </Fragment>
        ))}
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
