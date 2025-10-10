import { ArrowUpRight, ArrowDownRight, TrendingUp, MoreHorizontal } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import StatCards from "./stat-cards";
import { transactions, creditCards, contacts } from "../data";
import Analiytics from "@/app/(dashboard)/banking/components/analiytics";
import PayMoney from "@/app/(dashboard)/banking/components/pay-money";

export default function BankingDashboard() {
  return (
    <div className="space-y-6 p-4 md:p-6">
      <StatCards />
      <Card className="rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-0 font-semibold text-white">
        <CardContent className="bg-none!">
          <div className="flex flex-col justify-between gap-4 lg:flex-row">
            <div className="justify-center">
              <div className="space-y-4">
                <div>
                  <h2 className="text-sm font-medium opacity-90">Balance</h2>
                  <p className="text-3xl font-bold">$6,556.55</p>
                  <div className="flex items-center gap-1 text-sm">
                    <TrendingUp className="h-4 w-4" />
                    <span>+3.5%</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm opacity-90">Income</p>
                    <div className="flex items-center gap-1">
                      <ArrowUpRight className="h-4 w-4 text-green-300" />
                      <span className="font-semibold">$2,225.22</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm opacity-90">Expense</p>
                    <div className="flex items-center gap-1">
                      <ArrowDownRight className="h-4 w-4 text-red-300" />
                      <span className="font-semibold">$225.22</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid max-w-4xl grow grid-cols-1 justify-end gap-4 lg:grid-cols-3">
              {creditCards.map((card) => (
                <div
                  key={card.id}
                  className={`bg-white/15 ${card.gradient} relative overflow-hidden rounded-xl p-4`}>
                  <div className="mb-8 flex items-start justify-between">
                    <div className="text-xs font-medium opacity-90">VISA</div>
                    <div className="h-6 w-8 rounded-sm bg-white/20"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-lg font-bold">${card.balance}</div>
                    <div className="text-xs opacity-75">•••• •••• •••• {card.lastFour}</div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="h-4 w-6 rounded-full bg-white/30"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Transaction History */}
        <Card className="lg:col-span-1">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg">History</CardTitle>
            <Button variant="ghost" size="sm">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            {transactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={transaction.avatar} />
                    <AvatarFallback>
                      {transaction.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">{transaction.name}</p>
                    <p className="text-muted-foreground text-xs">{transaction.date}</p>
                  </div>
                </div>
                <div
                  className={`font-semibold ${transaction.type === "income" ? "text-green-600" : "text-red-600"}`}>
                  {transaction.type === "income" ? "+" : ""}$
                  {Math.abs(transaction.amount).toFixed(2)}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Analiytics />

        <PayMoney />
      </div>
    </div>
  );
}
