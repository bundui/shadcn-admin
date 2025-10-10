import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  BanknoteArrowDown,
  ChevronRight,
  DollarSign,
  MoreHorizontal,
  ShoppingCart,
  Users
} from "lucide-react";
import { IconTruckReturn } from "@tabler/icons-react";

export default function StoreOverview() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Store Overview</CardTitle>
        <Button variant="ghost" size="sm">
          <MoreHorizontal />
        </Button>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-md bg-orange-100">
              <ShoppingCart className="h-5 w-5 text-orange-600" />
            </div>
            <div>
              <div className="font-semibold">$89,585</div>
              <div className="text-muted-foreground text-sm">Store Sales</div>
            </div>
          </div>
          <Button variant="ghost">
            <ChevronRight />
          </Button>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-md bg-orange-100">
              <Users className="h-5 w-5 text-orange-600" />
            </div>
            <div>
              <div className="font-semibold">$42,455</div>
              <div className="text-muted-foreground text-sm">Visits</div>
            </div>
          </div>
          <Button variant="ghost">
            <ChevronRight />
          </Button>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-md bg-green-100">
              <DollarSign className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <div className="font-semibold">$38,625</div>
              <div className="text-muted-foreground text-sm">Avg Earnings</div>
            </div>
          </div>
          <Button variant="ghost">
            <ChevronRight />
          </Button>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-md bg-red-100">
              <BanknoteArrowDown className="h-5 w-5 text-red-600" />
            </div>
            <div>
              <div className="font-semibold">$1,245</div>
              <div className="text-muted-foreground text-sm">Refunds</div>
            </div>
          </div>
          <Button variant="ghost">
            <ChevronRight />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
