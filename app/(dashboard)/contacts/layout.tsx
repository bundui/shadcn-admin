import React from "react";
import { ChatSidebar } from "@/app/(dashboard)/contacts/components";
import teamUsers from "./data/contacts.json";

export type TeamUsers = (typeof teamUsers)[number];

export default async function Page({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-[calc(100vh-3rem)] w-full">
      <ChatSidebar teamUsers={teamUsers} />
      <div className="h-[calc(100vh-3rem)] grow overflow-auto">{children}</div>
    </div>
  );
}
