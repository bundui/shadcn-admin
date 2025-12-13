"use client";

import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bar, Line, ComposedChart, XAxis, YAxis, CartesianGrid } from "recharts";

const items = [
  { month: "Jan", barValue: 22, lineValue: 44 },
  { month: "Feb", barValue: 10, lineValue: 55 },
  { month: "Mar", barValue: 21, lineValue: 40 },
  { month: "Apr", barValue: 26, lineValue: 68 },
  { month: "May", barValue: 12, lineValue: 21 },
  { month: "Jun", barValue: 21, lineValue: 42 },
  { month: "Jul", barValue: 36, lineValue: 22 },
  { month: "Aug", barValue: 20, lineValue: 41 },
  { month: "Sep", barValue: 43, lineValue: 56 },
  { month: "Oct", barValue: 21, lineValue: 28 },
  { month: "Nov", barValue: 44, lineValue: 45 },
  { month: "Dec", barValue: 34, lineValue: 25 }
];
const chartConfig = {
  barValue: {
    label: "Bar Value",
    color: "hsl(252, 87%, 67%)"
  },
  lineValue: {
    label: "Line Value",
    color: "hsl(330, 100%, 65%)"
  }
};

export function AudienceMetricsChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Audience Metrics</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[360px] w-full">
          <ComposedChart data={items} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <CartesianGrid
              strokeDasharray="3 3"
              horizontal={true}
              vertical={false}
              stroke="hsl(var(--border))"
            />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
              domain={[0, 80]}
              ticks={[0, 20, 40, 60, 80]}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="barValue" fill="hsl(252, 87%, 67%)" radius={[4, 4, 0, 0]} barSize={20} />
            <Line
              type="monotone"
              dataKey="lineValue"
              stroke="hsl(330, 100%, 65%)"
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={false}
            />
          </ComposedChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
