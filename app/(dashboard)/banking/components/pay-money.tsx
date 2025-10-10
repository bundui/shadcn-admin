"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { contacts } from "../data";
import * as React from "react";
import { ArrowRightIcon, ChevronRight } from "lucide-react";
import { ButtonGroup } from "@/components/ui/button-group";

const CURRENCIES = [
  {
    value: "$",
    label: "US Dollar"
  },
  {
    value: "€",
    label: "Euro"
  },
  {
    value: "£",
    label: "British Pound"
  }
];

export default function PayMoney() {
  const [currency, setCurrency] = React.useState("$");

  return (
    <Card className="lg:col-span-1">
      <CardHeader>
        <CardTitle className="text-lg">Send Money</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
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

          <Button variant="outline">
            View All Contacts <ChevronRight />
          </Button>
        </div>

        <div className="space-y-3">
          <div>
            <Label htmlFor="payTo" className="text-sm font-medium">
              Pay to
            </Label>
            <Input id="payTo" placeholder="•••• •••• •••• ••••" className="mt-1" />
          </div>

          <ButtonGroup className="w-full!">
            <ButtonGroup className="grow">
              <Select value={currency} onValueChange={setCurrency}>
                <SelectTrigger className="font-mono">{currency}</SelectTrigger>
                <SelectContent className="min-w-24">
                  {CURRENCIES.map((currency) => (
                    <SelectItem key={currency.value} value={currency.value}>
                      {currency.value}{" "}
                      <span className="text-muted-foreground">{currency.label}</span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Input placeholder="10.00" pattern="[0-9]*" />
            </ButtonGroup>
            <ButtonGroup>
              <Button aria-label="Send" size="icon" variant="outline">
                <ArrowRightIcon />
              </Button>
            </ButtonGroup>
          </ButtonGroup>

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
  );
}
