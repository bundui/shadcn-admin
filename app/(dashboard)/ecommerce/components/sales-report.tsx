import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";

export default function SalesReport() {
  return (
    <Card className="lg:col-span-2">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">Sales Report</CardTitle>
        <div className="flex items-center gap-2">
          <span className="text-muted-foreground text-sm">Monthly</span>
          <Button variant="ghost" size="sm">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="relative h-64">
          <div className="absolute top-0 left-0 flex h-full flex-col justify-between text-xs text-gray-500">
            <span>20%</span>
            <span>15%</span>
            <span>10%</span>
            <span>5%</span>
            <span>0%</span>
          </div>
          <div className="relative ml-8 h-full">
            <svg className="h-full w-full" viewBox="0 0 400 200">
              <path
                d="M 0 180 Q 50 160 100 140 T 200 120 T 300 100 T 400 80"
                fill="none"
                stroke="#f59e0b"
                strokeWidth="2"
              />
              <path
                d="M 0 160 Q 50 140 100 120 T 200 100 T 300 80 T 400 60"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="2"
              />
            </svg>
          </div>
          <div className="absolute right-0 bottom-0 left-8 flex justify-between text-xs text-gray-500">
            {[
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec"
            ].map((month) => (
              <span key={month}>{month}</span>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
