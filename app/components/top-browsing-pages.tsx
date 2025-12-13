"use client";

import { Card, CardAction, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from "@/components/ui/chart";
import { MoreVertical } from "lucide-react";
import { BarChart, Bar, XAxis, LabelList } from "recharts";

const items = {
  chartData: [
    { browser: "chrome", value: 18 },
    { browser: "safari", value: 30 },
    { browser: "firefox", value: 42 },
    { browser: "edge", value: 18 },
    { browser: "opera", value: 37 },
    { browser: "brave", value: 26 },
    { browser: "other", value: 11 },
    { browser: "mobile", value: 34 },
    { browser: "desktop", value: 15 },
    { browser: "tablet", value: 22 }
  ],
  tableData: [
    { page: "/dashboard-overview", views: 25, bounceRate: "83.9%" },
    { page: "/dashboard/products", views: 113, bounceRate: "90.15%" },
    { page: "/dashboard/users", views: 75, bounceRate: "25.3%" },
    { page: "/dashboard/performance", views: 29, bounceRate: "17.2%" }
  ]
};

const chartConfig = {
  views: {
    label: "Views",
    color: "var(--chart-1)"
  }
} satisfies ChartConfig;

export function TopBrowsingPages() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Browsing Pages Per Minute</CardTitle>
        <CardAction>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreVertical className="text-muted-foreground" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Export</DropdownMenuItem>
              <DropdownMenuItem>Refresh</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </CardAction>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="h-32 w-full">
          <ChartContainer config={chartConfig} className="h-full w-full">
            <BarChart
              accessibilityLayer
              data={items.chartData}
              margin={{ top: 0, right: -5, left: -5, bottom: 0 }}>
              <XAxis dataKey="browser" hide />

              <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />

              <Bar dataKey="value" fill="var(--color-views)" radius={[4, 4, 0, 0]} maxBarSize={40}>
                <LabelList
                  dataKey="value"
                  position="top"
                  className="fill-muted-foreground text-sm font-medium"
                  offset={10}
                />
              </Bar>
            </BarChart>
          </ChartContainer>
        </div>

        <div className="bg-muted/50 rounded-lg">
          <Table>
            <TableHeader>
              <TableRow className="border-none hover:bg-transparent">
                <TableHead className="text-muted-foreground font-medium">Page</TableHead>
                <TableHead className="text-muted-foreground text-center font-medium">
                  Views
                </TableHead>
                <TableHead className="text-muted-foreground text-right font-medium">
                  Bounce Rate
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {items.tableData.map((row, index) => (
                <TableRow key={index} className="border-border border-dashed hover:bg-transparent">
                  <TableCell className="text-primary font-medium">{row.page}</TableCell>
                  <TableCell className="text-foreground text-center">{row.views}</TableCell>
                  <TableCell className="text-foreground text-right">{row.bounceRate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
