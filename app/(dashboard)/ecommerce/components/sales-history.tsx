"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from "@/components/ui/chart";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

const data = [
  { name: "Timothy Boyd", date: "14 DEC, 2023", amount: "$750.00" },
  { name: "Adrian Monino", date: "23 DEC, 2023", amount: "$820.00" },
  { name: "Socrates Itumay", date: "24 DEC, 2023", amount: "$180.00" },
  { name: "Althea Cabardo", date: "01 DEC, 2023", amount: "$190.00" }
];

const chartData = [
  { month: "Jan", desktop: 186 },
  { month: "Feb", desktop: 305 },
  { month: "Mar", desktop: 237 },
  { month: "Apr", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "Jun", desktop: 114 },
  { month: "Jul", desktop: 280 },
  { month: "Aug", desktop: 120 },
  { month: "Sep", desktop: 260 },
  { month: "Oct", desktop: 190 },
  { month: "Nov", desktop: 225 },
  { month: "Dec", desktop: 240 }
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)"
  }
} satisfies ChartConfig;

export default function SalesHistory() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Sales History</CardTitle>
        <Button variant="ghost" size="sm">
          <MoreHorizontal />
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        <ChartContainer className="h-32 w-full" config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12
            }}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Line
              dataKey="desktop"
              type="natural"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
        <div className="space-y-3">
          {data.map((sale, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="flex size-8 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-800">
                <div className="h-2 w-2 rounded-full bg-blue-600"></div>
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium">{sale.name}</div>
                <div className="text-muted-foreground text-xs">{sale.date}</div>
              </div>
              <div className="text-sm font-semibold">{sale.amount}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
