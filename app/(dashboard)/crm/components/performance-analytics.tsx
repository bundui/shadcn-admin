"use client";

import * as React from "react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from "@/components/ui/chart";

interface ChartDataPoint {
  period: string;
  value: number;
}

interface ChartDataStructure {
  day: ChartDataPoint[];
  week: ChartDataPoint[];
  month: ChartDataPoint[];
  year: ChartDataPoint[];
}

const chartData = {
  day: [
    { period: "12 AM", value: 180 },
    { period: "2 AM", value: 120 },
    { period: "4 AM", value: 90 },
    { period: "6 AM", value: 150 },
    { period: "8 AM", value: 280 },
    { period: "10 AM", value: 320 },
    { period: "12 PM", value: 450 },
    { period: "2 PM", value: 380 },
    { period: "4 PM", value: 420 },
    { period: "6 PM", value: 500 },
    { period: "8 PM", value: 350 },
    { period: "10 PM", value: 500 }
  ],
  week: [
    { period: "Mon", value: 820 },
    { period: "Tue", value: 650 },
    { period: "Wed", value: 900 },
    { period: "Thu", value: 750 },
    { period: "Fri", value: 1100 },
    { period: "Sat", value: 850 },
    { period: "Sun", value: 1000 }
  ],
  month: [
    { period: "Jan", value: 8500 },
    { period: "Feb", value: 4200 },
    { period: "Mar", value: 9800 },
    { period: "Apr", value: 12200 },
    { period: "May", value: 8500 },
    { period: "Jun", value: 10800 },
    { period: "Jul", value: 7900 },
    { period: "Aug", value: 11100 },
    { period: "Sep", value: 9400 },
    { period: "Oct", value: 14200 },
    { period: "Nov", value: 10800 },
    { period: "Dec", value: 9600 }
  ],
  year: [
    { period: "2026", value: 8500 },
    { period: "2025", value: 7200 },
    { period: "2024", value: 9800 },
    { period: "2023", value: 11200 },
    { period: "2022", value: 7500 },
    { period: "2021", value: 10500 },
    { period: "2020", value: 8000 }
  ]
};

const chartConfig = {
  views: {
    label: "Page Views"
  },
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)"
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)"
  }
} satisfies ChartConfig;

const filterLabels = {
  day: "24 Hours",
  week: "7 Days",
  month: "30 Days",
  year: "12 Months"
};

export default function PerformanceAnalytics() {
  const [selectedFilter, setSelectedFilter] = React.useState<keyof ChartDataStructure>("month");
  const currentData = chartData[selectedFilter];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Revenue</CardTitle>
        <CardDescription>
          Showing total visitors for the last {filterLabels[selectedFilter]}
        </CardDescription>
        <CardAction>
          <Tabs
            defaultValue={selectedFilter}
            onValueChange={(value) => setSelectedFilter(value as keyof ChartDataStructure)}>
            <TabsList>
              {Object.keys(chartData).map((filter, i) => (
                <TabsTrigger key={i} value={filter} className="capitalize">
                  {filter}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </CardAction>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[320px] w-full">
          <LineChart accessibilityLayer data={currentData}>
            <CartesianGrid vertical={false} />
            <YAxis axisLine={false} tickLine={false} dx={-20} />
            <XAxis
              dataKey="period"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              dy={10}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric"
                    });
                  }}
                />
              }
            />
            <Line
              dataKey="value"
              type="monotone"
              stroke="var(--chart-1)"
              strokeWidth={2}
              dot={{
                strokeWidth: 1,
                stroke: "var(--chart-1)",
                r: 4
              }}
              activeDot={{
                stroke: "var(--chart-primary)",
                strokeWidth: 2
              }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
