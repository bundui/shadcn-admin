import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  Users,
  TrendingUp,
  DollarSign,
  Target,
  ChevronRightIcon,
  ChevronUpIcon,
  ChevronDownIcon
} from "lucide-react";

import { Card, CardContent, CardFooter } from "@/components/ui/card";

const statsData = [
  {
    title: "Total Leads",
    value: "12,486",
    change: 15.2,
    icon: Target,
    gradient: "primary" as const
  },
  {
    title: "Conversion Rate",
    value: "24.8%",
    change: 3.1,
    icon: TrendingUp,
    gradient: "success" as const
  },
  {
    title: "Total Customers",
    value: "3,092",
    change: 8.7,
    icon: Users,
    gradient: "secondary" as const
  },
  {
    title: "Monthly Revenue",
    value: "$48,392",
    change: -2.4,
    icon: DollarSign,
    gradient: "warning" as const
  }
];

const gradientClasses = {
  primary: "bg-indigo-200",
  secondary: "bg-orange-200",
  success: "bg-green-200",
  warning: "bg-purple-200"
};

export default function StatCards() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
      {statsData.map((stat, i) => (
        <Card key={i} className="pb-0">
          <CardContent>
            <div className="flex items-start justify-between">
              <div className="mb-4 flex items-center gap-4">
                <div
                  className={cn(
                    "flex h-12 w-12 items-center justify-center rounded-xl",
                    gradientClasses[stat.gradient]
                  )}>
                  {stat.icon && <stat.icon />}
                </div>
                <div>
                  <p className="text-muted-foreground mb-1 text-sm font-medium">{stat.title}</p>
                  <div className="flex items-end gap-2">
                    <div className="text-foreground text-2xl font-bold">{stat.value}</div>
                    <div className="flex items-center gap-2">
                      <span
                        className={cn(
                          "inline-flex items-center gap-1 text-sm font-medium",
                          stat.change >= 0 ? "text-success" : "text-destructive"
                        )}>
                        {stat.change >= 0 ? (
                          <ChevronUpIcon className="size-4 text-green-600" />
                        ) : (
                          <ChevronDownIcon className="size-4 text-red-600" />
                        )}{" "}
                        {Math.abs(stat.change)}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="border-border border-t p-0!">
            <Link href="#" className="flex h-full w-full justify-between px-6 py-4 text-sm">
              View all
              <ChevronRightIcon className="size-4 opacity-50" />
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
