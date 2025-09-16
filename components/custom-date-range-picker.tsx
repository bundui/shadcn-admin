"use client";

import * as React from "react";
import {
  format,
  subDays,
  startOfMonth,
  endOfMonth,
  subMonths,
  startOfDay,
  endOfDay,
  startOfYear,
  startOfWeek
} from "date-fns";
import { CalendarIcon } from "lucide-react";
import type { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { useIsMobile } from "@/hooks/use-mobile";

const dateFilterPresets = [
  { name: "Today", value: "today" },
  { name: "Yesterday", value: "yesterday" },
  { name: "This Week", value: "thisWeek" },
  { name: "Last 7 Days", value: "last7Days" },
  { name: "Last 28 Days", value: "last28Days" },
  { name: "This Month", value: "thisMonth" },
  { name: "Last Month", value: "lastMonth" },
  { name: "This Year", value: "thisYear" }
];

export default function CalendarDateRangePicker({
  className
}: React.HTMLAttributes<HTMLDivElement>) {
  const isMobile = useIsMobile();
  const today = new Date();
  const twentyEightDaysAgo = startOfDay(subDays(today, 27));

  // Initialize with "Last 28 days" as default
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: twentyEightDaysAgo,
    to: endOfDay(today)
  });
  const [open, setOpen] = React.useState(false);
  const [currentMonth, setCurrentMonth] = React.useState<Date>(new Date());

  const handleQuickSelect = (from: Date, to: Date) => {
    setDate({ from, to });
    setCurrentMonth(from);
  };

  const changeHandle = (type: string) => {
    const today = new Date();

    switch (type) {
      case "today":
        handleQuickSelect(startOfDay(today), endOfDay(today));
        break;
      case "yesterday":
        const yesterday = subDays(today, 1);
        handleQuickSelect(startOfDay(yesterday), endOfDay(yesterday));
        break;
      case "thisWeek":
        const startOfCurrentWeek = startOfWeek(today);
        handleQuickSelect(startOfDay(startOfCurrentWeek), endOfDay(today));
        break;
      case "last7Days":
        const sevenDaysAgo = subDays(today, 6);
        handleQuickSelect(startOfDay(sevenDaysAgo), endOfDay(today));
        break;
      case "last28Days":
        const twentyEightDaysAgo = subDays(today, 27); // 27 days ago + today = 28 days
        handleQuickSelect(startOfDay(twentyEightDaysAgo), endOfDay(today));
        break;
      case "thisMonth":
        handleQuickSelect(startOfMonth(today), endOfDay(today));
        break;
      case "lastMonth":
        const lastMonth = subMonths(today, 1);
        handleQuickSelect(startOfMonth(lastMonth), endOfMonth(lastMonth));
        break;
      case "thisYear":
        const startOfCurrentYear = startOfYear(today);
        handleQuickSelect(startOfDay(startOfCurrentYear), endOfDay(today));
        break;
    }
  };

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          {isMobile ? (
            <div>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      id="date"
                      variant={"outline"}
                      className={cn(
                        "justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}>
                      <CalendarIcon />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    {date?.from ? (
                      date.to ? (
                        <>
                          {format(date.from, "dd MMM yyyy")} - {format(date.to, "dd MMM yyyy")}
                        </>
                      ) : (
                        format(date.from, "dd MMM yyyy")
                      )
                    ) : (
                      <span>Select date range</span>
                    )}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          ) : (
            <Button
              id="date"
              variant={"outline"}
              className={cn(
                "justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}>
              <CalendarIcon />
              {date?.from ? (
                date.to ? (
                  <>
                    {format(date.from, "dd MMM yyyy")} - {format(date.to, "dd MMM yyyy")}
                  </>
                ) : (
                  format(date.from, "dd MMM yyyy")
                )
              ) : (
                <span>Select date range</span>
              )}
            </Button>
          )}
        </PopoverTrigger>
        <PopoverContent className="w-auto" align="end">
          <div className="flex flex-col lg:flex-row">
            <div className="me-0 lg:me-4">
              <ToggleGroup
                type="single"
                defaultValue="last28Days"
                className="hidden w-28 flex-col lg:block">
                {dateFilterPresets.map((item, key) => (
                  <ToggleGroupItem
                    key={key}
                    className="text-muted-foreground w-full"
                    value={item.value}
                    onClick={() => changeHandle(item.value)}
                    asChild>
                    <Button variant="ghost" className="justify-start rounded-md">
                      {item.name}
                    </Button>
                  </ToggleGroupItem>
                ))}
              </ToggleGroup>
              <Select defaultValue="last28Days" onValueChange={(value) => changeHandle(value)}>
                <SelectTrigger className="mb-4 flex w-full lg:hidden" aria-label="Select a value">
                  <SelectValue placeholder="Last 28 Days" />
                </SelectTrigger>
                <SelectContent>
                  {dateFilterPresets.map((item, key) => (
                    <SelectItem key={key} value={item.value}>
                      {item.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Calendar
              className="border-s-0 py-0! ps-0! pe-0! lg:border-s lg:ps-4!"
              mode="range"
              month={currentMonth}
              selected={date}
              onSelect={(newDate) => {
                setDate(newDate);
                if (newDate?.from) {
                  setCurrentMonth(newDate.from);
                }
              }}
              onMonthChange={setCurrentMonth}
            />
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
