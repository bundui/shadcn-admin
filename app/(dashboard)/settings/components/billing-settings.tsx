"use client";

import Image from "next/image";
import { Plus, Edit } from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";

export function BillingSettings() {
  const transactions = [
    {
      reference: "#36223",
      product: "Mock premium pack",
      status: "Pending",
      date: "12/10/2021",
      amount: "$39.90"
    },
    {
      reference: "#34283",
      product: "Business board basic subscription",
      status: "Paid",
      date: "11/13/2021",
      amount: "$59.90"
    },
    {
      reference: "#32234",
      product: "Business board basic subscription",
      status: "Paid",
      date: "10/13/2021",
      amount: "$59.90"
    },
    {
      reference: "#31354",
      product: "Business board basic subscription",
      status: "Paid",
      date: "09/13/2021",
      amount: "$59.90"
    }
  ];

  return (
    <Card className="border-none shadow-none">
      <CardHeader>
        <CardTitle>Billing</CardTitle>
        <CardDescription>Manage your subscription and payment methods.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <h3 className="font-semibold">
            Business board basic <span className="ml-2 text-sm text-green-600">Active</span>
          </h3>
          <div className="flex items-center justify-between">
            <p className="text-muted-foreground text-sm">
              Billing monthly | Next payment on 02/09/2025 for{" "}
              <span className="text-foreground font-medium">$59.90</span>
            </p>
            <Button variant="outline" className="bg-orange-500 text-white hover:bg-orange-600">
              Change plan
            </Button>
          </div>
        </div>

        <Separator />

        <div className="space-y-4">
          <h3 className="font-semibold">Payment method</h3>
          <div className="grid gap-4">
            <div className="flex items-center justify-between rounded-md border p-4">
              <div className="flex items-center gap-3">
                <Image src="/avatars/08.jpeg" alt="Visa" width={36} height={24} />
                <div>
                  <p className="font-medium">
                    Carolyn Perkins •••• 0392{" "}
                    <span className="ml-2 text-xs text-blue-600">Primary</span>
                  </p>
                  <p className="text-muted-foreground text-sm">Expired Dec 2025</p>
                </div>
              </div>
              <Button variant="outline" size="sm" className="gap-1 bg-transparent">
                <Edit className="h-4 w-4" />
                Edit
              </Button>
            </div>
            <div className="flex items-center justify-between rounded-md border p-4">
              <div className="flex items-center gap-3">
                <Image src="/avatars/08.jpeg" alt="Mastercard" width={36} height={24} />
                <div>
                  <p className="font-medium">Carolyn Perkins •••• 8461</p>
                  <p className="text-muted-foreground text-sm">Expired Jun 2025</p>
                </div>
              </div>
              <Button variant="outline" size="sm" className="gap-1 bg-transparent">
                <Edit className="h-4 w-4" />
                Edit
              </Button>
            </div>
            <Button variant="ghost" className="text-primary w-fit gap-2">
              <Plus className="h-4 w-4" />
              Add payment method
            </Button>
          </div>
        </div>

        <Separator />

        <div className="space-y-4">
          <h3 className="font-semibold">Transaction history</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>REFERENCE</TableHead>
                <TableHead>PRODUCT</TableHead>
                <TableHead>STATUS</TableHead>
                <TableHead>DATE</TableHead>
                <TableHead className="text-right">AMOUNT</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((transaction) => (
                <TableRow key={transaction.reference}>
                  <TableCell className="font-medium">{transaction.reference}</TableCell>
                  <TableCell>{transaction.product}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <span
                        className={`h-2 w-2 rounded-full ${transaction.status === "Paid" ? "bg-green-500" : "bg-yellow-500"}`}
                      />
                      {transaction.status}
                    </div>
                  </TableCell>
                  <TableCell>{transaction.date}</TableCell>
                  <TableCell className="text-right">{transaction.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
