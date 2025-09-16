import * as React from "react";

import { ChevronRight } from "lucide-react";
import Flag from "react-world-flags";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function SalesByCountries() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Sales by Countries</CardTitle>
        <CardDescription>Last 28 days</CardDescription>
        <CardAction className="relative">
          <div className="absolute end-0 top-0">
            <Button variant="outline" size="sm">
              View All <ChevronRight className="size-4" />
            </Button>
          </div>
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="space-y-5">
          <div className="flex items-center">
            <Flag code="US" className="size-10 rounded-full object-cover" />
            <div className="ml-4 space-y-1">
              <p className="text-sm leading-none font-medium">United states</p>
              <p className="text-muted-foreground text-sm">
                <span className="text-green-600">+27.4%</span> from last month
              </p>
            </div>
            <div className="ms-auto font-medium">+$1,999.00</div>
          </div>
          <div className="flex items-center">
            <Flag code="BR" className="size-10 rounded-full object-cover" />
            <div className="ml-4 space-y-1">
              <p className="text-sm leading-none font-medium">Brazil</p>
              <p className="text-muted-foreground text-sm">
                <span className="text-green-600">+20.1%</span> from last month
              </p>
            </div>
            <div className="ms-auto font-medium">+$39.00</div>
          </div>
          <div className="flex items-center">
            <Flag code="IN" className="size-10 rounded-full object-cover" />
            <div className="ml-4 space-y-1">
              <p className="text-sm leading-none font-medium">India</p>
              <p className="text-muted-foreground text-sm">
                <span className="text-red-600">-5%</span> from last month
              </p>
            </div>
            <div className="ms-auto font-medium">+$299.00</div>
          </div>
          <div className="flex items-center">
            <Flag code="AU" className="size-10 rounded-full object-cover" />
            <div className="ml-4 space-y-1">
              <p className="text-sm leading-none font-medium">Australia</p>
              <p className="text-muted-foreground text-sm">
                <span className="text-green-600">+10.9%</span> from last month
              </p>
            </div>
            <div className="ms-auto font-medium">+$99.00</div>
          </div>
          <div className="flex items-center">
            <Flag code="FR" className="size-10 rounded-full object-cover" />
            <div className="ml-4 space-y-1">
              <p className="text-sm leading-none font-medium">France</p>
              <p className="text-muted-foreground text-sm">
                <span className="text-green-600">+2.1%</span> from last month
              </p>
            </div>
            <div className="ms-auto font-medium">+$39.00</div>
          </div>
          <div className="flex items-center">
            <Flag code="GR" className="size-10 rounded-full object-cover" />
            <div className="ml-4 space-y-1">
              <p className="text-sm leading-none font-medium">Greece</p>
              <p className="text-muted-foreground text-sm">
                <span className="text-green-600">-0.1%</span> from last month
              </p>
            </div>
            <div className="ms-auto font-medium">+$30.00</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
