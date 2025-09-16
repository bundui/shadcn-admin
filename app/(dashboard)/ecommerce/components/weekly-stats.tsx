import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, ShoppingCart, TrendingUp } from "lucide-react";

export default function WeeklyStats() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">Weekly Stats</CardTitle>
        <Button variant="ghost" size="sm">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="mb-6 flex h-32 items-end justify-between gap-2">
          {[60, 80, 70, 90, 75, 85, 95].map((height, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm bg-blue-600"
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100">
              <ShoppingCart className="h-4 w-4 text-blue-600" />
            </div>
            <div>
              <div className="font-semibold">Total Sales</div>
              <div className="text-muted-foreground text-sm">2,458 Today</div>
            </div>
            <div className="ml-auto font-semibold">$5,258</div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-100">
              <TrendingUp className="h-4 w-4 text-green-600" />
            </div>
            <div>
              <div className="font-semibold">Total Revenue</div>
              <div className="text-muted-foreground text-sm">Revenue target</div>
            </div>
            <div className="ml-auto font-semibold">$4,958</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
