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

const countries = [
  { code: "US", name: "United States", change: +27.4, value: 1999 },
  { code: "BR", name: "Brazil", change: +20.1, value: 39 },
  { code: "IN", name: "India", change: -5, value: 299 },
  { code: "AU", name: "Australia", change: +10.9, value: 99 },
  { code: "FR", name: "France", change: +2.1, value: 39 },
  { code: "GR", name: "Greece", change: -0.1, value: 30 }
];

export default function SalesByCountries() {
  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="space-y-2">
          <CardTitle>Sales by Countries</CardTitle>
          <CardDescription>Last 28 days</CardDescription>
        </div>
        <CardAction>
          <Button variant="outline" size="sm">
            View All <ChevronRight className="ml-1 size-4" />
          </Button>
        </CardAction>
      </CardHeader>

      <CardContent>
        <div className="space-y-6">
          {countries.map(({ code, name, change, value }) => (
            <div key={code} className="flex items-center gap-4">
              <Flag code={code} className="size-10 rounded-full object-cover" />

              <div className="space-y-2">
                <p className="text-sm leading-none font-medium">{name}</p>
                <p className="text-muted-foreground text-sm">
                  <span className={change >= 0 ? "text-green-600" : "text-red-600"}>
                    {change > 0 ? `+${change}%` : `${change}%`}
                  </span>{" "}
                  from last month
                </p>
              </div>

              <div className="ms-auto text-sm font-medium">
                +${value.toLocaleString(undefined, { minimumFractionDigits: 2 })}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
