"use client";

import { Card, CardAction, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import CardHeaderDropdown from "@/components/card-header-dropdown";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
  { month: "July", desktop: 150, mobile: 120 }
];
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--muted)"
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)"
  },
  label: {
    color: "var(--muted-foreground)"
  }
} satisfies ChartConfig;

export default function MonthlyEarning() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Monthly Earning</CardTitle>
        <CardAction>
          <CardHeaderDropdown />
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex items-center gap-2">
          <span className="text-2xl font-bold">32.46K</span>
          <Badge variant="outline" className="bg-green-100 text-green-700">
            +12.4%
          </Badge>
        </div>
        <ChartContainer className="h-80 w-full" config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              right: 16
            }}>
            <CartesianGrid horizontal={false} />
            <YAxis
              dataKey="month"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
              hide
            />
            <XAxis dataKey="desktop" type="number" hide />
            <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4}>
              <LabelList
                dataKey="month"
                position="insideLeft"
                offset={8}
                className="fill-(--color-label)"
                fontSize={12}
              />
              <LabelList
                dataKey="desktop"
                position="right"
                offset={8}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
