import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";

const data = [
  { name: "Timothy Boyd", date: "14 DEC, 2023", amount: "$750.00" },
  { name: "Adrian Monino", date: "23 DEC, 2023", amount: "$820.00" },
  { name: "Socrates Itumay", date: "24 DEC, 2023", amount: "$180.00" },
  { name: "Althea Cabardo", date: "01 DEC, 2023", amount: "$190.00" }
];

export default function SalesHistory() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">Sales History</CardTitle>
        <Button variant="ghost" size="sm">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="mb-4 h-20">
          <svg className="h-full w-full" viewBox="0 0 300 80">
            <path d="M 0 60 Q 75 40 150 50 T 300 30" fill="none" stroke="#3b82f6" strokeWidth="2" />
          </svg>
        </div>
        <div className="space-y-3">
          {data.map((sale, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100">
                <div className="h-2 w-2 rounded-full bg-blue-600"></div>
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium">{sale.name}</div>
                <div className="text-xs text-gray-500">{sale.date}</div>
              </div>
              <div className="text-sm font-semibold">{sale.amount}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
