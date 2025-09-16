import { Card, CardAction, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { DollarSign, Users, CreditCard, Activity } from "lucide-react";
import { cn } from "@/lib/utils";

export default function EcommerceKpi() {
  const kpiData = [
    {
      title: "Total Revenue",
      value: "$45,231.89",
      change: "+20.1% from last month",
      icon: DollarSign
    },
    {
      title: "Subscriptions",
      value: "-350",
      change: "+180.1% from last month",
      icon: Users,
      trend: "positive"
    },
    {
      title: "Sales",
      value: "+12,234",
      change: "-2% from last month",
      icon: CreditCard,
      trend: "negative"
    },
    {
      title: "Active Now",
      value: "+573",
      change: "+21 since last hour",
      icon: Activity,
      trend: "positive"
    }
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {kpiData.map((kpi, index) => {
        const IconComponent = kpi.icon;
        return (
          <Card key={index} className="gap-4">
            <CardHeader>
              <CardDescription>{kpi.title}</CardDescription>
              <CardAction>
                <IconComponent className="text-muted-foreground size-4" />
              </CardAction>
            </CardHeader>
            <CardContent>
              <div
                className={cn("text-3xl font-bold", {
                  "text-green-500": kpi.trend === "positive",
                  "text-red-500": kpi.trend === "negative"
                })}>
                {kpi.value}
              </div>
              <p className="text-muted-foreground text-xs">{kpi.change}</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
