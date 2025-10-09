"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CheckIcon, ChevronDown, ChevronDownIcon } from "lucide-react";

const statusOptions = [
  {
    value: "active",
    label: "Active",
    state: "bg-green-500"
  },
  {
    value: "inactive",
    label: "Inactive",
    state: "bg-zinc-600 dark:bg-zinc-300"
  },
  {
    value: "pending",
    label: "Pending",
    state: "bg-yellow-500"
  },
  {
    value: "suspended",
    label: "Suspended",
    state: "bg-violet-500"
  },
  {
    value: "archived",
    label: "Archived",
    state: "bg-destructive"
  }
];

export default function Component() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  const selectedStatus = statusOptions.find((status) => status.value === value);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between">
          {selectedStatus ? (
            <span className="flex items-center gap-2.5">
              <span className={cn("ms-0.5 size-1.5 rounded-full", selectedStatus.state)}></span>
              <span className="truncate">{selectedStatus.label}</span>
            </span>
          ) : (
            <span>Select status...</span>
          )}
          <ChevronDownIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-(--radix-popper-anchor-width) p-0">
        <Command>
          <CommandInput placeholder="Search status..." />
          <CommandList>
            <CommandEmpty>No status found.</CommandEmpty>
            <CommandGroup>
              {statusOptions.map((status) => (
                <CommandItem
                  key={status.value}
                  value={status.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}>
                  <span className="flex items-center gap-2.5">
                    <span className={cn("ms-1 size-1.5 rounded-full", status.state)}></span>
                    <span className="truncate">{status.label}</span>
                  </span>
                  {value === status.value && <CheckIcon />}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
