"use client";

import { TrendingUp, TrendingDown, Store, Crown, Medal, Award } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";

const topStores = [
  {
    id: 1,
    name: "TechHub Electronics",
    avatar: "/avatars/07.jpeg",
    overallScore: 98.5,
    totalSales: 156789,
    revenue: 2340000,
    growth: 12.5,
    orders: 1234,
    customers: 892,
    category: "Electronics",
    rank: 1
  },
  {
    id: 2,
    name: "Fashion Forward",
    avatar: "/avatars/07.jpeg",
    overallScore: 94.2,
    totalSales: 134567,
    revenue: 1890000,
    growth: 8.3,
    orders: 987,
    customers: 743,
    category: "Fashion",
    rank: 2
  },
  {
    id: 3,
    name: "Home & Garden Plus",
    avatar: "/avatars/07.jpeg",
    overallScore: 87.8,
    totalSales: 98765,
    revenue: 1560000,
    growth: -2.1,
    orders: 756,
    customers: 634,
    category: "Home & Garden",
    rank: 3
  },
  {
    id: 4,
    name: "Sports Central",
    avatar: "/avatars/07.jpeg",
    overallScore: 85.6,
    totalSales: 87654,
    revenue: 1340000,
    growth: 15.7,
    orders: 654,
    customers: 521,
    category: "Sports",
    rank: 4
  },
  {
    id: 5,
    name: "Beauty Essentials",
    avatar: "/avatars/07.jpeg",
    overallScore: 82.3,
    totalSales: 76543,
    revenue: 1120000,
    growth: 6.9,
    orders: 543,
    customers: 467,
    category: "Beauty",
    rank: 5
  }
];

function formatCurrency(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
}

function formatNumber(num: number) {
  return new Intl.NumberFormat("en-US").format(num);
}

function getRankIcon(rank: number) {
  switch (rank) {
    case 1:
      return <Crown className="h-4 w-4 text-yellow-500" />;
    case 2:
      return <Medal className="h-4 w-4 text-gray-400" />;
    case 3:
      return <Award className="h-4 w-4 text-amber-600" />;
    default:
      return <span className="text-muted-foreground text-sm font-medium">#{rank}</span>;
  }
}

export default function TopSellingStores() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Top Selling Stores</CardTitle>
        <CardDescription>
          Performance ranking based on sales, revenue, and growth metrics
        </CardDescription>
      </CardHeader>

      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">Rank</TableHead>
              <TableHead>Store</TableHead>
              <TableHead>Score</TableHead>
              <TableHead>Revenue</TableHead>
              <TableHead>Sales</TableHead>
              <TableHead>Orders</TableHead>
              <TableHead className="text-right">Growth</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {topStores.map((store, i) => (
              <TableRow key={i}>
                <TableCell>
                  <div className="flex w-8 items-center justify-center">
                    {getRankIcon(store.rank)}
                  </div>
                </TableCell>

                <TableCell>
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={store.avatar || "/avatars/08.jpeg"} alt={store.name} />
                      <AvatarFallback>
                        <Store className="h-4 w-4" />
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">{store.name}</p>
                      <p className="text-muted-foreground text-xs">{store.category}</p>
                    </div>
                  </div>
                </TableCell>

                <TableCell>
                  <Progress
                    indicatorClassName={
                      store.overallScore >= 95
                        ? "bg-green-500"
                        : store.overallScore >= 85
                          ? "bg-blue-500"
                          : store.overallScore >= 75
                            ? "bg-yellow-500"
                            : "bg-red-500"
                    }
                    value={store.overallScore}
                  />
                </TableCell>

                <TableCell>
                  <span className="font-medium">{formatCurrency(store.revenue)}</span>
                </TableCell>

                <TableCell>
                  <span className="font-medium">{formatNumber(store.totalSales)}</span>
                </TableCell>

                <TableCell>
                  <span className="text-sm">{formatNumber(store.orders)}</span>
                </TableCell>

                <TableCell className="p-4 text-right">
                  <div className="flex items-center justify-end space-x-1">
                    {store.growth > 0 ? (
                      <TrendingUp className="h-3 w-3 text-green-500" />
                    ) : (
                      <TrendingDown className="h-3 w-3 text-red-500" />
                    )}
                    <span
                      className={`text-sm font-medium ${store.growth > 0 ? "text-green-600" : "text-red-600"}`}>
                      {store.growth > 0 ? "+" : ""}
                      {store.growth}%
                    </span>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
