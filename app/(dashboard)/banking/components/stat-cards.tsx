import { Card, CardContent } from "@/components/ui/card";
import { Activity, CreditCard, DollarSign, TrendingDown, TrendingUp, Users } from "lucide-react";

export default function StatCards() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-muted-foreground text-sm">Income</p>
              <p className="text-2xl font-bold">$35.3k</p>
              <div className="flex items-center gap-1 text-sm text-green-600">
                <TrendingUp className="h-4 w-4" />
                <span>+2.5%</span>
              </div>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
              <DollarSign className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-muted-foreground text-sm">Expenses</p>
              <p className="text-2xl font-bold">$12.1k</p>
              <div className="flex items-center gap-1 text-sm text-red-600">
                <TrendingDown className="h-4 w-4" />
                <span>-1.2%</span>
              </div>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100">
              <Activity className="h-6 w-6 text-orange-600" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-muted-foreground text-sm">Savings</p>
              <p className="text-2xl font-bold">$23.2k</p>
              <div className="flex items-center gap-1 text-sm text-green-600">
                <TrendingUp className="h-4 w-4" />
                <span>+4.1%</span>
              </div>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-100">
              <CreditCard className="h-6 w-6 text-cyan-600" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-muted-foreground text-sm">Investments</p>
              <p className="text-2xl font-bold">$18.7k</p>
              <div className="flex items-center gap-1 text-sm text-green-600">
                <TrendingUp className="h-4 w-4" />
                <span>+3.8%</span>
              </div>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100">
              <Users className="h-6 w-6 text-purple-600" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
