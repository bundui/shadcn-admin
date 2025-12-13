"use client";

import { Card, CardAction, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Pencil, Trash2, ChevronDown } from "lucide-react";

const items = [
  {
    id: "1",
    name: "Leo Phillips",
    role: "Influencer",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    sales: 12465,
    goal: 23.3,
    status: "on-process" as const
  },
  {
    id: "2",
    name: "Noah Russell",
    role: "Influencer",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    sales: 3576,
    goal: 19.4,
    status: "achieved" as const
  },
  {
    id: "3",
    name: "Henry Morgan",
    role: "Youtuber",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    sales: 12764,
    goal: 12.76,
    status: "on-process" as const
  },
  {
    id: "4",
    name: "Ava Taylor",
    role: "Content Creator",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
    sales: 13864,
    goal: 16.78,
    status: "achieved" as const
  },
  {
    id: "5",
    name: "Liam Parker",
    role: "Youtuber",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop",
    sales: 9756,
    goal: 6.13,
    status: "achieved" as const
  }
];

export function TopCampaignsTable() {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0
    }).format(value);
  };

  const formatGoal = (value: number) => {
    return `${value.toFixed(value % 1 === 0 ? 1 : 2)}%`;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Campaigns</CardTitle>
        <CardAction>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                View All
                <ChevronDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>All Campaigns</DropdownMenuItem>
              <DropdownMenuItem>Active Only</DropdownMenuItem>
              <DropdownMenuItem>Achieved Only</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </CardAction>
      </CardHeader>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[280px]">Provider</TableHead>
            <TableHead>Sales</TableHead>
            <TableHead>Goal</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-end">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((campaign) => (
            <TableRow key={campaign.id}>
              <TableCell>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={campaign.avatar} alt={campaign.name} />
                    <AvatarFallback>
                      {campaign.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-foreground font-medium">{campaign.name}</p>
                    <p className="text-muted-foreground text-sm">{campaign.role}</p>
                  </div>
                </div>
              </TableCell>
              <TableCell className="font-medium">{formatCurrency(campaign.sales)}</TableCell>
              <TableCell className="font-medium text-teal-500">
                {formatGoal(campaign.goal)}
              </TableCell>
              <TableCell>
                {campaign.status === "achieved" ? (
                  <Badge variant="outline" className="border-green-200 bg-green-50 text-green-600">
                    Achieved
                  </Badge>
                ) : (
                  <Badge variant="outline" className="border-blue-200 bg-blue-50 text-blue-600">
                    On process
                  </Badge>
                )}
              </TableCell>
              <TableCell>
                <div className="flex items-center justify-end gap-2">
                  <Button variant="outline" size="icon-sm">
                    <Pencil />
                  </Button>
                  <Button variant="destructive-light" size="icon-sm">
                    <Trash2 />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
