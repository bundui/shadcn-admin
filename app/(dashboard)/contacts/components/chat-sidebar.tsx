"use client";

import React from "react";
import { ListFilterIcon, Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";
import { ChatListItem } from "@/app/(dashboard)/contacts/components/chat-list-item";
import { TeamUsers } from "@/app/(dashboard)/contacts/layout";

export function ChatSidebar({ teamUsers }: { teamUsers: TeamUsers[] }) {
  const [filteredTeamUsers, setFilteredTeamUsers] = React.useState(teamUsers);
  const params = useParams();

  const changeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.trim();

    const filteredItems = teamUsers.filter((chat) =>
      chat.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTeamUsers(filteredItems);
  };

  return (
    <Card className="w-full gap-0 rounded-none border-0 border-e-1 pb-0 lg:w-96">
      <CardHeader>
        <CardDescription className="flex gap-2">
          <div className="relative col-span-2 flex w-full items-center">
            <Search className="text-muted-foreground absolute start-4 size-4" />
            <Input type="text" className="ps-10" placeholder="Search..." onChange={changeHandle} />
          </div>
          <Button variant="outline" size="icon">
            <ListFilterIcon />
          </Button>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 overflow-auto p-0">
        <div className="block min-w-0 divide-y">
          {filteredTeamUsers.length ? (
            filteredTeamUsers.map((user, key) => (
              <ChatListItem key={key} user={user} active={params.slug == user.id.toString()} />
            ))
          ) : (
            <div className="text-muted-foreground mt-4 text-center text-sm">No user found</div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
