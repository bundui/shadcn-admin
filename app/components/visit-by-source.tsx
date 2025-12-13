import { Card, CardAction, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Target, Camera, Mail, Users, MessageSquare } from "lucide-react";

const items = [
  {
    id: "1",
    icon: "target" as const,
    iconBgColor: "bg-violet-100",
    iconColor: "text-violet-600",
    title: "Direct Source",
    date: "15 Nov 2023 - 11:40am",
    value: 90954,
    change: 2.3
  },
  {
    id: "2",
    icon: "camera" as const,
    iconBgColor: "bg-blue-100",
    iconColor: "text-blue-600",
    title: "Social Networks",
    date: "15 Nov 2023 - 11:40am",
    value: 2312,
    change: 14
  },
  {
    id: "3",
    icon: "mail" as const,
    iconBgColor: "bg-green-100",
    iconColor: "text-green-600",
    title: "Email Newsletter",
    date: "15 Nov 2023 - 11:40am",
    value: 90954,
    change: -0.35
  },
  {
    id: "4",
    icon: "users" as const,
    iconBgColor: "bg-red-100",
    iconColor: "text-red-500",
    title: "Referrals",
    date: "15 Nov 2023 - 11:40am",
    value: 15312,
    change: 32
  },
  {
    id: "5",
    icon: "message" as const,
    iconBgColor: "bg-orange-100",
    iconColor: "text-orange-500",
    title: "Other",
    date: "15 Nov 2023 - 11:40am",
    value: 1325,
    change: -2.14
  }
];

const iconMap = {
  target: Target,
  camera: Camera,
  mail: Mail,
  users: Users,
  message: MessageSquare
};

export function VisitBySource() {
  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };

  const formatChange = (change: number) => {
    const sign = change >= 0 ? "+" : "";
    return `${sign}${change}%`;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Visit By Source</CardTitle>
        <CardAction>
          <Select defaultValue="this-week">
            <SelectTrigger>
              <SelectValue placeholder="This Week" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="this-week">This Week</SelectItem>
              <SelectItem value="last-week">Last Week</SelectItem>
              <SelectItem value="this-month">This Month</SelectItem>
            </SelectContent>
          </Select>
        </CardAction>
      </CardHeader>
      <CardContent>
        {items.map((item, index) => {
          const IconComponent = iconMap[item.icon];
          const isPositive = item.change >= 0;

          return (
            <div key={item.id}>
              <div className="flex items-center justify-between py-4">
                <div className="flex items-center gap-3">
                  <div
                    className={`flex size-8 items-center justify-center rounded-lg ${item.iconBgColor}`}>
                    <IconComponent className={`size-4 ${item.iconColor}`} />
                  </div>
                  <div>
                    <p className="text-foreground font-medium">{item.title}</p>
                    <p className="text-muted-foreground text-sm">{item.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-foreground font-semibold">{formatNumber(item.value)}</p>
                  <p
                    className={`text-sm font-medium ${
                      isPositive ? "text-green-500" : "text-destructive"
                    }`}>
                    {formatChange(item.change)}
                  </p>
                </div>
              </div>
              {index < items.length - 1 && <div className="order border-b border-dashed" />}
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
