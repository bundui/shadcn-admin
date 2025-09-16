"use client";

import Image from "next/image";
import { Upload, Trash } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function ProfileSettings() {
  return (
    <Card className="border-none shadow-none">
      <CardHeader>
        <CardTitle>Personal information</CardTitle>
        <CardDescription>Update your personal details and address.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center gap-4">
          <Avatar className="h-20 w-20">
            <AvatarImage src="/avatars/08.jpeg?height=80&width=80" alt="Profile picture" />
            <AvatarFallback className="bg-background">AG</AvatarFallback>
          </Avatar>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-1 bg-transparent">
              <Upload className="h-4 w-4" />
              Upload Image
            </Button>
            <Button variant="outline" className="gap-1 bg-transparent">
              <Trash className="h-4 w-4" />
              Remove
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="firstName">First name</Label>
            <Input id="firstName" defaultValue="Angelina" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="userName">User name</Label>
            <Input id="userName" defaultValue="Gotelli" />
          </div>
          <div className="col-span-full space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" defaultValue="carolyn_h@hotmail.com" />
          </div>
          <div className="col-span-full space-y-2">
            <Label htmlFor="phoneNumber">Phone number</Label>
            <div className="flex gap-2">
              <Select defaultValue="+1">
                <SelectTrigger className="w-[100px]">
                  <SelectValue placeholder="Country Code" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="+1">+1</SelectItem>
                  <SelectItem value="+44">+44</SelectItem>
                  <SelectItem value="+91">+91</SelectItem>
                </SelectContent>
              </Select>
              <Input id="phoneNumber" defaultValue="121231234" />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Address information</h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="col-span-full space-y-2">
              <Label htmlFor="country">Country</Label>
              <Select defaultValue="United States">
                <SelectTrigger>
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="United States">
                    <div className="flex items-center gap-2">
                      <Image
                        src="/avatars/08.jpeg?height=16&width=16"
                        alt="US Flag"
                        width={16}
                        height={16}
                      />
                      United States
                    </div>
                  </SelectItem>
                  <SelectItem value="Canada">
                    <div className="flex items-center gap-2">
                      <Image
                        src="/avatars/08.jpeg?height=16&width=16"
                        alt="Canada Flag"
                        width={16}
                        height={16}
                      />
                      Canada
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="col-span-full space-y-2">
              <Label htmlFor="address">Address</Label>
              <Input id="address" defaultValue="123 Main St." />
            </div>
            <div className="space-y-2">
              <Label htmlFor="city">City</Label>
              <Input id="city" defaultValue="New York" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="postalCode">Postal Code</Label>
              <Input id="postalCode" defaultValue="10001" />
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="ml-auto">Save</Button>
      </CardFooter>
    </Card>
  );
}
