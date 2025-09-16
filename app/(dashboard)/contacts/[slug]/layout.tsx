import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import teamUsers from "../data/contacts.json";
import { TeamUsers } from "@/app/(dashboard)/contacts/layout";

type Params = Promise<{ slug: string }>;

export default async function TeamLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Params;
}) {
  const { slug } = await params;
  const user = teamUsers.find((item: TeamUsers) => item.id.toString() == slug);

  return (
    <div className="space-y-4 px-6 py-8">
      <div>
        <div className="flex items-center space-x-4">
          <h2 className="mb-2 text-3xl font-bold text-gray-900">{user?.name}</h2>
          <Badge variant="secondary" className="bg-green-100 text-green-800">
            Active
          </Badge>
        </div>
        <p className="text-muted-foreground mb-4 text-sm">Team member profile and information</p>
      </div>

      <Tabs defaultValue="profile" className="w-[400px]">
        <TabsList className="*:data-[state=active]:bg-muted *:data-[state=active]:border-border bg-white p-0 *:data-[state=active]:shadow-none">
          <TabsTrigger value="profile" className="" asChild>
            <Link href={`/contacts/${slug}`}>Profile</Link>
          </TabsTrigger>
          <TabsTrigger value="edit" asChild>
            <Link href={`/contacts/${slug}/edit`}>Edit</Link>
          </TabsTrigger>
          <TabsTrigger value="bookings" asChild>
            <Link href={`/contacts/${slug}/bookings`}>Bookings</Link>
          </TabsTrigger>
          <TabsTrigger value="availability" asChild>
            <Link href={`/contacts/${slug}/availability`}>Availability</Link>
          </TabsTrigger>
        </TabsList>
      </Tabs>
      {children}
    </div>
  );
}
