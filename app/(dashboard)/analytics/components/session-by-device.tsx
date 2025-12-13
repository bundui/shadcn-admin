"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const items = {
  day: [
    { name: "Mobile", value: 1754, color: "#ec4899" },
    { name: "Tablet", value: 1234, color: "#a855f7" },
    { name: "Desktop", value: 878, color: "#f59e0b" }
  ],
  month: [
    { name: "Mobile", value: 8420, color: "#ec4899" },
    { name: "Tablet", value: 5680, color: "#a855f7" },
    { name: "Desktop", value: 3240, color: "#f59e0b" }
  ],
  year: [
    { name: "Mobile", value: 52400, color: "#ec4899" },
    { name: "Tablet", value: 38600, color: "#a855f7" },
    { name: "Desktop", value: 21000, color: "#f59e0b" }
  ]
};

const formatNumber = (num: number): string => {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
  if (num >= 1000) return (num / 1000).toFixed(1) + "K";
  return num.toLocaleString();
};

export function SessionsByDevice() {
  const [filter, setFilter] = useState<"Day" | "Month" | "Year">("Day");

  const currentData = filter === "Day" ? items.day : filter === "Month" ? items.month : items.year;
  const total = currentData.reduce((sum, item) => sum + item.value, 0);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-semibold text-slate-800">Sessions By Device</CardTitle>
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-1 text-sm text-slate-500 outline-none hover:text-slate-700">
            View All
            <ChevronDown className="h-4 w-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setFilter("Day")}>Day</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setFilter("Month")}>Month</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setFilter("Year")}>Year</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent>
        <div className="relative mx-auto h-64 w-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={currentData}
                cx="50%"
                cy="50%"
                innerRadius={80}
                outerRadius={120}
                paddingAngle={0}
                dataKey="value"
                strokeWidth={0}>
                {currentData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-sm text-slate-500">Total Audience</span>
            <span className="text-4xl font-bold text-slate-800">{formatNumber(total)}</span>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-3 divide-x divide-slate-200 border-t border-slate-200 pt-4">
          {currentData.map((item) => (
            <div key={item.name} className="flex flex-col items-center">
              <span className="text-2xl font-bold text-slate-800">{formatNumber(item.value)}</span>
              <span className="text-sm text-slate-500">{item.name}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
