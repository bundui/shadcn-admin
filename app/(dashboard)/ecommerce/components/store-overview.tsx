import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DollarSign, MoreHorizontal, ShoppingCart, Users } from "lucide-react";

export default function StoreOverview() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">Store Overview</CardTitle>
        <Button variant="ghost" size="sm">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100">
              <ShoppingCart className="h-5 w-5 text-orange-600" />
            </div>
            <div>
              <div className="font-semibold">$89,585</div>
              <div className="text-muted-foreground text-sm">Store Sales</div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-100">
              <Users className="h-5 w-5 text-red-600" />
            </div>
            <div>
              <div className="font-semibold">$42,455</div>
              <div className="text-muted-foreground text-sm">Visits</div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100">
              <DollarSign className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <div className="font-semibold">$38,625</div>
              <div className="text-muted-foreground text-sm">Avg Earnings</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
