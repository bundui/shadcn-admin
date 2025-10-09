"use client";

import * as React from "react";
import { Badge } from "@/components/ui/badge";
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
import { CheckIcon, ChevronDownIcon, X, XIcon } from "lucide-react";

const topCities = [
  { value: "tokyo", label: "Tokyo" },
  { value: "new_york", label: "New York" },
  { value: "london", label: "London" },
  { value: "paris", label: "Paris" },
  { value: "dubai", label: "Dubai" },
  { value: "singapore", label: "Singapore" },
  { value: "hong_kong", label: "Hong Kong" },
  { value: "los_angeles", label: "Los Angeles" },
  { value: "seoul", label: "Seoul" },
  { value: "amsterdam", label: "Amsterdam" }
];

export default function ComboboxDemo() {
  const [open, setOpen] = React.useState(false);
  const [selectedValues, setSelectedValues] = React.useState<string[]>(["london", "tokyo"]);

  const toggleSelection = (value: string) => {
    setSelectedValues((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const removeSelection = (value: string) => {
    setSelectedValues((prev) => prev.filter((v) => v !== value));
  };

  return (
    <div className="w-[300px]">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="relative h-auto w-full justify-start p-1">
            <div className="flex flex-wrap items-center gap-1 pe-2.5">
              {selectedValues.length > 0 ? (
                selectedValues.map((val) => {
                  const city = topCities.find((c) => c.value === val);
                  return city ? (
                    <Badge
                      key={val}
                      variant="outline"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeSelection(val);
                      }}>
                      {city.label}
                      <XIcon />
                    </Badge>
                  ) : null;
                })
              ) : (
                <span className="px-2.5">Select cities</span>
              )}
            </div>
            <ChevronDownIcon className="absolute end-3 top-2" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-(--radix-popper-anchor-width) p-0">
          <Command>
            <CommandInput placeholder="Search city..." />
            <CommandList>
              <CommandEmpty>No city found.</CommandEmpty>
              <CommandGroup>
                {topCities.map((city) => (
                  <CommandItem
                    key={city.value}
                    value={city.value}
                    onSelect={() => toggleSelection(city.value)}>
                    <span className="truncate">{city.label}</span>
                    {selectedValues.includes(city.value) && <CheckIcon />}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
