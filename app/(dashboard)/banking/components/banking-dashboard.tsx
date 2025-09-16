"use client";

import { useState } from "react";
import { ArrowUpRight, ArrowDownRight, TrendingUp, MoreHorizontal } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import StatCards from "./stat-cards";
import { transactions, creditCards, contacts } from "../data";

export default function BankingDashboard() {
  const [sendAmount, setSendAmount] = useState("");

  return (
    <div className="space-y-6 p-4 md:p-6">
      <Card className="rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 font-semibold text-white">
        <CardContent>
          <div className="flex flex-col justify-between gap-4 lg:flex-row">
            {/* Balance Overview */}
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

        {/* Chart Section */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Analytics</CardTitle>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                  <span>Sales</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-cyan-500"></div>
                  <span>Profit</span>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex h-48 items-end justify-between gap-2">
              {/* Simple bar chart representation */}
              {[40, 60, 45, 80, 35, 90, 55, 75, 30, 85, 40, 95].map((height, index) => (
                <div key={index} className="flex flex-1 flex-col items-center gap-1">
                  <div
                    className="w-full rounded-t bg-gradient-to-t from-blue-500 to-blue-400"
                    style={{ height: `${height}%` }}></div>
                  <div
                    className="w-full rounded-t bg-gradient-to-t from-cyan-500 to-cyan-400"
                    style={{ height: `${height * 0.6}%` }}></div>
                </div>
              ))}
            </div>
            <div className="text-muted-foreground mt-2 flex justify-between text-xs">
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>
              <span>Jul</span>
              <span>Aug</span>
              <span>Sep</span>
              <span>Oct</span>
              <span>Nov</span>
              <span>Dec</span>
            </div>
          </CardContent>
        </Card>

        {/* Send Money */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="text-lg">Send Money</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-2">
              {contacts.map((contact) => (
                <Avatar
                  key={contact.id}
                  className="h-10 w-10 cursor-pointer hover:ring-2 hover:ring-blue-500">
                  <AvatarImage src={contact.avatar} />
                  <AvatarFallback className="bg-gradient-to-br from-orange-400 to-orange-500 font-semibold text-white">
                    {contact.initials}
                  </AvatarFallback>
                </Avatar>
              ))}
            </div>

            <Button variant="link" className="h-auto p-0 text-sm text-blue-600">
              View All Contacts →
            </Button>

            <div className="space-y-3">
              <div>
                <Label htmlFor="payTo" className="text-sm font-medium">
                  Pay to
                </Label>
                <Input id="payTo" placeholder="•••• •••• •••• ••••" className="mt-1" />
              </div>

              <div>
                <Label htmlFor="amount" className="text-sm font-medium">
                  Amount
                </Label>
                <div className="mt-1 flex">
                  <Select defaultValue="usd">
                    <SelectTrigger className="w-20">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="usd">$</SelectItem>
                      <SelectItem value="eur">€</SelectItem>
                      <SelectItem value="gbp">£</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input
                    placeholder="Enter Amount"
                    value={sendAmount}
                    onChange={(e) => setSendAmount(e.target.value)}
                    className="flex-1 rounded-l-none"
                  />
                </div>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Commission:</span>
                <span>3$</span>
              </div>

              <div className="flex justify-between text-sm font-medium">
                <span>Total:</span>
                <span>3$</span>
              </div>

              <Button className="w-full">Send Money</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <StatCards />
    </div>
  );
}
