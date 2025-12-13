import { ArrowUp } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const items = [
  { path: "blog/how-to-improve-seo", visits: 1250, color: "bg-violet-400" },
  { path: "products/new-launch", visits: 1100, color: "bg-cyan-400" },
  { path: "services/digital-marketing", visits: 950, color: "bg-amber-400" },
  { path: "pricing", visits: 890, color: "bg-emerald-500" }
];

export function TopReferralPages() {
  const totalVisits = items.reduce((sum, item) => sum + item.visits, 0);
  const percentageChange = 1.02;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Referral Pages</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="text-foreground text-4xl font-bold">{totalVisits.toLocaleString()}</span>
          <Badge
            variant="secondary"
            className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
            {percentageChange}
            <ArrowUp className="ml-0.5 h-3 w-3" />
          </Badge>
          <span className="text-muted-foreground text-sm">compared to last week</span>
        </div>

        <div className="flex h-2 w-full overflow-hidden rounded-full">
          {items.map((item, index) => (
            <div
              key={index}
              className={`h-full ${item.color}`}
              style={{ width: `${(item.visits / totalVisits) * 100}%` }}
            />
          ))}
        </div>

        <div className="space-y-3">
          {items.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`h-2.5 w-2.5 rounded-full ${item.color}`} />
                <span className="text-foreground text-sm font-medium">{item.path}</span>
              </div>
              <span className="text-muted-foreground text-sm">{item.visits.toLocaleString()}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
