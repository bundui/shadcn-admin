"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface Conversation {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  timestamp: string;
  unreadCount: number;
  isActive: boolean;
  status: string;
}

interface ConversationListProps {
  conversations: Conversation[];
  selectedConversation: Conversation;
  onSelectConversation: (conversation: Conversation) => void;
}

export function ConversationList({
  conversations,
  selectedConversation,
  onSelectConversation
}: ConversationListProps) {
  return (
    <div className="flex w-80 flex-col border-r border-gray-200 bg-white">
      <div className="border-b border-gray-200 p-4">
        <h1 className="mb-4 text-xl font-semibold text-gray-900">Messages</h1>
        <div className="relative">
          <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
          <Input placeholder="Search messages..." className="border-gray-200 bg-gray-50 pl-10" />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {conversations.map((conversation) => (
          <div
            key={conversation.id}
            onClick={() => onSelectConversation(conversation)}
            className={`cursor-pointer border-b border-gray-100 p-4 transition-colors hover:bg-gray-50 ${
              selectedConversation.id === conversation.id
                ? "border-l-4 border-l-blue-500 bg-blue-50"
                : ""
            }`}>
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={conversation.avatar} alt={conversation.name} />
                  <AvatarFallback>
                    {conversation.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                {conversation.isActive && (
                  <div className="absolute right-0 bottom-0 h-3 w-3 rounded-full border-2 border-white bg-green-500"></div>
                )}
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="truncate text-sm font-medium text-gray-900">
                    {conversation.name}
                  </h3>
                  <span className="text-xs text-gray-500">{conversation.timestamp}</span>
                </div>
                <p className="text-muted-foreground mt-1 truncate text-sm">
                  {conversation.lastMessage}
                </p>
              </div>

              {conversation.unreadCount > 0 && (
                <Badge variant="destructive" className="h-5 min-w-5 text-xs">
                  {conversation.unreadCount}
                </Badge>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
