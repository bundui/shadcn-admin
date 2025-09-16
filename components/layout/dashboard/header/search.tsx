"use client";

import React from "react";
import { CommandIcon, SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator
} from "@/components/ui/command";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { DialogTitle } from "@/components/ui/dialog";
import { sidebarData, type SidebarNavMainItem } from "@/@data/sidebar";

export default function Search() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const CommandItemComponent = ({ item }: { item: SidebarNavMainItem }) => {
    const LucideIcon = item.icon;

    return (
      <CommandItem
        onSelect={() => {
          setOpen(false);
          router.push(item.url);
        }}>
        {LucideIcon && <LucideIcon className="me-2 h-4! w-4!" />}
        <span>{item.title}</span>
      </CommandItem>
    );
  };

  return (
    <div className="ms-auto lg:me-auto lg:flex-1">
      <div className="relative hidden max-w-sm flex-1 lg:block">
        <SearchIcon className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-neutral-500 dark:text-neutral-400" />
        <Input
          className="h-9 w-full cursor-pointer rounded-md border pr-4 pl-10 text-sm shadow-xs"
          placeholder="Search..."
          type="search"
          onFocus={() => setOpen(true)}
        />
        <div className="absolute top-1/2 right-2 hidden -translate-y-1/2 items-center gap-0.5 rounded-sm bg-zinc-200 p-1 font-mono text-xs font-medium sm:flex dark:bg-neutral-700">
          <CommandIcon className="size-3" />
          <span>k</span>
        </div>
      </div>
      <div className="block lg:hidden">
        <Button size="sm" variant="link" onClick={() => setOpen(true)} className="text-foreground">
          <SearchIcon className="size-5" />
        </Button>
      </div>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <DialogTitle className="sr-only">Search</DialogTitle>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {sidebarData.navMain.map((route) => (
            <React.Fragment key={route.title}>
              <CommandGroup heading={route.title}>
                {route.items.map((item, key) => (
                  <CommandItemComponent key={key} item={item} />
                ))}
              </CommandGroup>
              <CommandSeparator />
            </React.Fragment>
          ))}
        </CommandList>
      </CommandDialog>
    </div>
  );
}
