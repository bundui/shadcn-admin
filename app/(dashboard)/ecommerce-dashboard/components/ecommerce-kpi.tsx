"use client";

import { Card, CardAction, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { Users, Activity } from "lucide-react";
import { cn } from "@/lib/utils";
import { ChartContainer } from "@/components/ui/chart";
import { Area, AreaChart } from "recharts";
import { ArrowUp, ArrowDown } from "lucide-react";

const statsData = [
  {
    title: "Total Sales",
    value: "$7389",
    change: 18,
    changeLabel: "from last week",
    chartData: [
      { value: 30 },
      { value: 45 },
      { value: 35 },
      { value: 50 },
      { value: 40 },
      { value: 60 },
      { value: 55 },
      { value: 70 },
      { value: 65 },
      { value: 75 }
    ],
    chartColor: "#3b82f6"
  },
  {
    title: "Total Earning",
    value: "$7389",
    change: -14,
    changeLabel: "from last week",
    chartData: [
      { value: 40 },
      { value: 55 },
      { value: 45 },
      { value: 60 },
      { value: 70 },
      { value: 65 },
      { value: 75 },
      { value: 60 },
      { value: 50 },
      { value: 45 }
    ],
    chartColor: "#f97316"
  }
];

export default function EcommerceKpi() {
  const kpiData = [
    {
      title: "Subscriptions",
      value: "-350",
      change: "+180.1% from last month",
      icon: Users,
      trend: "positive"
    },
    {
      title: "Active Now",
      value: "+573",
      change: "+21 since last hour",
      icon: Activity,
      trend: "positive"
    }
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StatsCards items={statsData} />
      {kpiData.map((kpi, index) => {
        const IconComponent = kpi.icon;
        return (
          <Card key={index} className="gap-4">
            <CardHeader>
              <CardDescription>{kpi.title}</CardDescription>
              <CardAction>
                <IconComponent className="text-muted-foreground size-4" />
              </CardAction>
            </CardHeader>
            <CardContent>
              <div
                className={cn("text-3xl font-bold", {
                  "text-green-500": kpi.trend === "positive",
                  "text-red-500": kpi.trend === "negative"
                })}>
                {kpi.value}
              </div>
              <p className="text-muted-foreground text-xs">{kpi.change}</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

interface StatItem {
  title: string;
  value: string;
  change: number;
  changeLabel: string;
  chartData: { value: number }[];
  chartColor: string;
}

interface StatsCardsProps {
  items: StatItem[];
}

function StatsCards({ items }: StatsCardsProps) {
  return (
    <>
      {items.map((item, index) => (
        <Card key={index}>
          <CardContent>
            <div className="flex items-start justify-between">
              <div className="flex flex-col gap-2">
                <span className="text-muted-foreground text-sm">{item.title}</span>
                <span className="text-foreground text-3xl font-semibold">{item.value}</span>
                <div className="flex items-center gap-1">
                  {item.change >= 0 ? (
                    <ArrowUp className="h-4 w-4 text-green-500" />
                  ) : (
                    <ArrowDown className="h-4 w-4 text-red-500" />
                  )}
                  <span
                    className={
                      item.change >= 0 ? "text-sm text-green-500" : "text-sm text-red-500"
                    }>
                    {Math.abs(item.change)}%
                  </span>
                  <span className="text-muted-foreground text-xs">{item.changeLabel}</span>
                </div>
              </div>
              <div className="h-16 w-32">
                <ChartContainer
                  config={{
                    value: {
                      color: item.chartColor
                    }
                  }}
                  className="h-full w-full">
                  <AreaChart data={item.chartData}>
                    <defs>
                      <linearGradient id={`gradient-${index}`} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor={item.chartColor} stopOpacity={0.3} />
                        <stop offset="100%" stopColor={item.chartColor} stopOpacity={0.05} />
                      </linearGradient>
                    </defs>
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke={item.chartColor}
                      strokeWidth={2}
                      fill={`url(#gradient-${index})`}
                    />
                  </AreaChart>
                </ChartContainer>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
}
