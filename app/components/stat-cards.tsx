import { Card } from "@/components/ui/card";
import { User, BarChart3, Percent, Clock } from "lucide-react";

const items = [
  {
    icon: "users" as const,
    title: "Total Users",
    value: "42,643",
    change: 0.45,
    period: "This Year"
  },
  {
    icon: "sessions" as const,
    title: "Total Sessions",
    value: "143K",
    change: 2.76,
    period: "This Year"
  },
  {
    icon: "bounce" as const,
    title: "Bounce Rate",
    value: "91.6%",
    change: 3.85,
    period: "This Year"
  },
  {
    icon: "duration" as const,
    title: "Avg Session Duration",
    value: "2m 27s",
    change: -2.44,
    period: "This Year"
  }
];

const iconMap = {
  users: User,
  sessions: BarChart3,
  bounce: Percent,
  duration: Clock
};

const iconStyles = {
  users: "bg-purple-100 text-purple-600",
  sessions: "bg-pink-100 text-pink-600",
  bounce: "bg-green-100 text-green-600",
  duration: "bg-orange-100 text-orange-600"
};

export function StatCards() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item, index) => {
        const IconComponent = iconMap[item.icon];
        const isPositive = item.change >= 0;

        return (
          <Card key={index} className="p-6">
            <div className="flex items-start gap-4">
              <div className={`rounded-lg p-3 ${iconStyles[item.icon]}`}>
                <IconComponent className="h-6 w-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-muted-foreground text-sm">{item.title}</span>
                <span className="text-foreground text-2xl font-bold">{item.value}</span>
                <div className="mt-1 flex items-center gap-1">
                  <span
                    className={`text-sm font-medium ${isPositive ? "text-green-500" : "text-red-500"}`}>
                    {isPositive ? "↑" : "↓"} {Math.abs(item.change)}%
                  </span>
                  <span className="text-muted-foreground text-sm">{item.period}</span>
                </div>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
