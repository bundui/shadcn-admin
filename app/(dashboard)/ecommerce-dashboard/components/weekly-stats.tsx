"use client";

import { Card, CardAction, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from "@/components/ui/chart";
import { BarChart, Bar, XAxis } from "recharts";
import { MoreHorizontal, ShoppingCart, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const chartConfig = {
  value: {
    label: "Value",
    color: "hsl(227, 95%, 60%)"
  }
} satisfies ChartConfig;

const data = {
  chartData: [
    { day: "Mon", value: 65 },
    { day: "Tue", value: 80 },
    { day: "Wed", value: 75 },
    { day: "Thu", value: 90 },
    { day: "Fri", value: 60 },
    { day: "Sat", value: 70 },
    { day: "Sun", value: 85 }
  ],
  stats: [
    {
      icon: "cart" as const,
      title: "Total Sales",
      subtitle: "2,458 Today",
      value: "$5,258"
    },
    {
      icon: "trend" as const,
      title: "Total Revenue",
      subtitle: "Revenue target",
      value: "$4,958"
    }
  ]
};

export function WeeklyStats() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Weekly Stats</CardTitle>
        <CardAction>
          <Button variant="ghost" size="icon">
            <MoreHorizontal />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent className="space-y-6">
        <ChartContainer config={chartConfig} className="h-64 w-full">
          <BarChart data={data.chartData} barCategoryGap="20%">
            <XAxis dataKey="day" hide />
            <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dot" />} />
            <Bar dataKey="value" fill="hsl(227, 95%, 60%)" radius={[6, 6, 6, 6]} />
          </BarChart>
        </ChartContainer>

        <div className="space-y-4">
          {data.stats.map((stat, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                    stat.icon === "cart"
                      ? "bg-blue-100 text-blue-600"
                      : "bg-green-100 text-green-600"
                  }`}>
                  {stat.icon === "cart" ? (
                    <ShoppingCart className="h-5 w-5" />
                  ) : (
                    <TrendingUp className="h-5 w-5" />
                  )}
                </div>
                <div>
                  <p className="text-foreground font-semibold">{stat.title}</p>
                  <p className="text-muted-foreground text-sm">{stat.subtitle}</p>
                </div>
              </div>
              <span className="text-foreground text-lg font-semibold">{stat.value}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
