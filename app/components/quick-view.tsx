import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreVertical, User, Server, Zap, Target, TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatItem {
  label: string;
  value: string;
  percentage: number;
  isIncrease: boolean;
  description: string;
  icon: React.ReactNode;
  iconBgClass: string;
  iconFgClass: string;
}

function StatCard({ item }: { item: StatItem }) {
  return (
    <div className="flex items-start justify-between p-6">
      <div className="flex flex-col gap-2">
        <span className="text-muted-foreground text-sm font-medium">{item.label}</span>
        <span className="text-foreground text-2xl font-bold">{item.value}</span>
        <Badge
          variant="outline"
          className={cn(
            { "text-success": item.isIncrease },
            { "text-destructive": !item.isIncrease }
          )}>
          {item.isIncrease ? (
            <TrendingUp className="size-3" />
          ) : (
            <TrendingDown className="size-3" />
          )}
          {item.percentage}%
        </Badge>
        <span className="text-muted-foreground text-sm">{item.description}</span>
      </div>
      <div className={cn("flex size-14 items-center justify-center rounded-xl", item.iconBgClass)}>
        <div className={item.iconFgClass}>{item.icon}</div>
      </div>
    </div>
  );
}

const stats: StatItem[] = [
  {
    label: "Users",
    value: "25.6K",
    percentage: 4.11,
    isIncrease: true,
    description: "Increases this month",
    icon: <User className="size-6" />,
    iconBgClass: "bg-purple-200 dark:bg-purple-900",
    iconFgClass: "text-purple-800 dark:text-purple-300"
  },
  {
    label: "Sessions",
    value: "56.17K",
    percentage: 1.25,
    isIncrease: false,
    description: "Decreases this month",
    icon: <Server className="size-6" />,
    iconBgClass: "bg-blue-200 dark:bg-blue-900",
    iconFgClass: "text-blue-800 dark:text-blue-300"
  },
  {
    label: "Avg. Visit Duration",
    value: "2m 12s",
    percentage: 0.35,
    isIncrease: false,
    description: "Decreases this month",
    icon: <Zap className="size-6" />,
    iconBgClass: "bg-orange-200 dark:bg-orange-900",
    iconFgClass: "text-orange-800 dark:text-orange-300"
  },
  {
    label: "Bounce Rate",
    value: "15.33%",
    percentage: 1.14,
    isIncrease: true,
    description: "Increases this month",
    icon: <Target className="size-6" />,
    iconBgClass: "bg-green-200 dark:bg-green-900",
    iconFgClass: "text-green-800 dark:text-green-300"
  }
];

export function QuickView() {
  return (
    <Card className="gap-0 overflow-hidden pt-0">
      <CardHeader className="bg-primary px-6 py-4 pb-10">
        <div className="flex items-center justify-between">
          <CardTitle className="text-primary-foreground text-xl font-semibold">
            Quick View
          </CardTitle>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-primary-foreground hover:bg-primary-foreground/10">
                <MoreVertical />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Refresh Data</DropdownMenuItem>
              <DropdownMenuItem>Export CSV</DropdownMenuItem>
              <DropdownMenuItem>View Details</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>

      <CardContent className="-mt-8 px-6">
        <div className="bg-card grid grid-cols-1 rounded-lg border md:grid-cols-2">
          {stats.map((item, index) => (
            <div
              key={item.label}
              className={cn(
                "border-border",
                index < 2 && "border-b",
                index % 2 === 0 && "md:border-r"
              )}>
              <StatCard item={item} />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
