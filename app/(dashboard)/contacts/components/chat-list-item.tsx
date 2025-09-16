import { cn } from "@/lib/utils";
import { EllipsisIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { ChatUserDropdown } from "@/app/(dashboard)/contacts/components/chat-list-item-dropdown";
import { TeamUsers } from "@/app/(dashboard)/contacts/layout";

export function ChatListItem({ user, active }: { user: TeamUsers; active: boolean | null }) {
  return (
    <Link
      href={`/contacts/${user.id}`}
      className={cn(
        "group/item hover:bg-muted relative flex min-w-0 cursor-pointer items-center gap-4 px-6 py-4 transition-colors",
        { "dark:bg-muted! bg-muted": active }
      )}>
      <Avatar>
        <AvatarImage src={`${user.avatar}`} alt="avatar image" />
        <AvatarFallback>AC</AvatarFallback>
      </Avatar>
      <div className="min-w-0 grow">
        <div className="flex items-center justify-between">
          <span className="truncate font-medium">{user.name}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-muted-foreground truncate text-start text-sm">{user.phone}</span>
        </div>
      </div>
      <div
        className={cn(
          "absolute end-0 top-0 bottom-0 flex items-center bg-linear-to-l from-70% px-4 opacity-0 group-hover/item:opacity-100",
          { "from-muted": !active },
          { "dark:from-muted from-gray-200": active }
        )}>
        <ChatUserDropdown>
          <Button size="icon" variant="outline" className="rounded-full">
            <EllipsisIcon />
          </Button>
        </ChatUserDropdown>
      </div>
    </Link>
  );
}
