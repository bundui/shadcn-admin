"use client";

import { useState } from "react";
import { Card, CardAction, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig
} from "@/components/ui/chart";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis, ReferenceLine } from "recharts";
import { Calendar, ChevronDown, MoreVertical, TrendingUp } from "lucide-react";

const data = {
  daily: {
    totalAmount: 12450.5,
    percentageChange: 8,
    chartData: [
      { label: "00:00", sales: 400, goals: 500 },
      { label: "04:00", sales: 800, goals: 700 },
      { label: "08:00", sales: 1200, goals: 1000 },
      { label: "12:00", sales: 2000, goals: 1800 },
      { label: "16:00", sales: 1600, goals: 1500 },
      { label: "20:00", sales: 900, goals: 1000 },
      { label: "23:59", sales: 600, goals: 800 }
    ]
  },
  weekly: {
    totalAmount: 45320.8,
    percentageChange: 12,
    chartData: [
      { label: "Mon", sales: 5000, goals: 6000 },
      { label: "Tue", sales: 7500, goals: 7000 },
      { label: "Wed", sales: 6200, goals: 6500 },
      { label: "Thu", sales: 8000, goals: 7500 },
      { label: "Fri", sales: 9500, goals: 8000 },
      { label: "Sat", sales: 4500, goals: 5000 },
      { label: "Sun", sales: 3200, goals: 4000 }
    ]
  },
  monthly: {
    totalAmount: 84994.8,
    percentageChange: 16,
    chartData: [
      { label: "Sat", sales: 3000, goals: 4000 },
      { label: "Sun", sales: 7000, goals: 6000 },
      { label: "Mon", sales: 4000, goals: 5000 },
      { label: "Tue", sales: 5000, goals: 8000 },
      { label: "Wed", sales: 8000, goals: 7000 },
      { label: "Thu", sales: 3000, goals: 6000 },
      { label: "Fri", sales: 4000, goals: 5000 }
    ]
  },
  yearly: {
    totalAmount: 984520.0,
    percentageChange: 24,
    chartData: [
      { label: "Jan", sales: 65000, goals: 60000 },
      { label: "Feb", sales: 72000, goals: 70000 },
      { label: "Mar", sales: 80000, goals: 75000 },
      { label: "Apr", sales: 78000, goals: 80000 },
      { label: "May", sales: 85000, goals: 82000 },
      { label: "Jun", sales: 92000, goals: 88000 },
      { label: "Jul", sales: 88000, goals: 90000 },
      { label: "Aug", sales: 95000, goals: 92000 },
      { label: "Sep", sales: 82000, goals: 85000 },
      { label: "Oct", sales: 90000, goals: 88000 },
      { label: "Nov", sales: 98000, goals: 95000 },
      { label: "Dec", sales: 105000, goals: 100000 }
    ]
  }
};

const chartConfig = {
  sales: {
    label: "Sales",
    color: "hsl(217, 91%, 60%)"
  },
  goals: {
    label: "Goals",
    color: "hsl(0, 0%, 70%)"
  }
} satisfies ChartConfig;

export function SalesReport() {
  const [period, setPeriod] = useState<"daily" | "weekly" | "monthly" | "yearly">("monthly");

  const currentData = data[period];

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2
    }).format(value);
  };

  const formatYAxis = (value: number) => {
    if (value === 0) return "0";
    if (value >= 1000) return `${value / 1000}h`;
    return `${value}`;
  };

  const formatTooltipValue = (value: number) => {
    if (value >= 1000) {
      return `$${(value / 1000).toFixed(0)}K`;
    }
    return `$${value}`;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Sales Report</CardTitle>
        <CardAction className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                <Calendar />
                {period.charAt(0).toUpperCase() + period.slice(1)}
                <ChevronDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setPeriod("daily")}>Daily</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setPeriod("weekly")}>Weekly</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setPeriod("monthly")}>Monthly</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setPeriod("yearly")}>Yearly</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreVertical />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Export</DropdownMenuItem>
              <DropdownMenuItem>Share</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex items-baseline gap-4">
          <span className="text-2xl font-semibold">{formatCurrency(currentData.totalAmount)}</span>
          <div className="flex items-center gap-1 text-sm">
            <TrendingUp className="h-4 w-4 text-green-500" />
            <span className="font-medium text-green-500">{currentData.percentageChange}%</span>
            <span className="text-muted-foreground">from last period</span>
          </div>
        </div>
        <ChartContainer config={chartConfig} className="h-[250px] w-full">
          <AreaChart
            data={currentData.chartData}
            margin={{ top: 10, right: 0, left: -15, bottom: 0 }}>
            <defs>
              <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(217, 91%, 60%)" stopOpacity={0.3} />
                <stop offset="100%" stopColor="hsl(217, 91%, 60%)" stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
            <XAxis
              dataKey="label"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
              tickFormatter={formatYAxis}
              dx={-10}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => `June 2024`}
                  formatter={(value, name) => (
                    <div className="flex items-center justify-between gap-8">
                      <div className="flex items-center gap-2">
                        <div
                          className="h-2.5 w-2.5 rounded-full"
                          style={{
                            backgroundColor:
                              name === "sales" ? "hsl(217, 91%, 60%)" : "hsl(0, 0%, 70%)"
                          }}
                        />
                        <span className="text-muted-foreground">
                          {name === "sales" ? "Sales" : "Goals"}:
                        </span>
                      </div>
                      <span className="font-medium">{formatTooltipValue(value as number)}</span>
                    </div>
                  )}
                />
              }
            />
            <ReferenceLine x="Tue" stroke="hsl(var(--foreground))" strokeDasharray="5 5" />
            <Area
              type="monotone"
              dataKey="goals"
              stroke="hsl(0, 0%, 70%)"
              strokeWidth={2}
              strokeDasharray="5 5"
              fill="transparent"
              dot={false}
            />
            <Area
              type="monotone"
              dataKey="sales"
              stroke="hsl(217, 91%, 60%)"
              strokeWidth={2}
              fill="url(#salesGradient)"
              dot={false}
              activeDot={{ r: 6, fill: "hsl(217, 91%, 60%)", stroke: "white", strokeWidth: 2 }}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
