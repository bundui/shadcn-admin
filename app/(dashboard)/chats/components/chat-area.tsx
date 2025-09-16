"use client";

import type React from "react";

import { useState } from "react";
import { MoreHorizontal, Info, Paperclip, Send } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Message {
  id: string;
  senderId: string;
  content: string;
  timestamp: string;
  isOwn: boolean;
}

interface Conversation {
  id: string;
  name: string;
  avatar: string;
  status: string;
}

interface ChatAreaProps {
  conversation: Conversation;
  messages: Message[];
  onToggleProfile: () => void;
}

export function ChatArea({ conversation, messages, onToggleProfile }: ChatAreaProps) {
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      // Handle sending message
      console.log("Sending message:", newMessage);
      setNewMessage("");
    }
  };

  return (
    <div className="flex flex-1 flex-col bg-white">
      {/* Chat Header */}
      <div className="flex items-center justify-between border-b border-gray-200 p-4">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Avatar className="h-10 w-10">
              <AvatarImage
                src={conversation.avatar || "/avatars/08.jpeg"}
                alt={conversation.name}
              />
              <AvatarFallback>
                {conversation.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="absolute right-0 bottom-0 h-3 w-3 rounded-full border-2 border-white bg-green-500"></div>
          </div>
          <div>
            <h2 className="font-medium text-gray-900">{conversation.name}</h2>
            <p className="text-sm text-green-600">{conversation.status}</p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" onClick={onToggleProfile}>
            <Info className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 space-y-4 overflow-y-auto p-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isOwn ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-xs rounded-2xl px-4 py-2 lg:max-w-md ${
                message.isOwn ? "bg-black text-white" : "bg-gray-100 text-gray-900"
              }`}>
              <p className="text-sm">{message.content}</p>
            </div>
          </div>
        ))}

        {/* Timestamps */}
        <div className="flex justify-center">
          <span className="text-xs text-gray-500">10:32 AM</span>
        </div>
        <div className="flex justify-end">
          <span className="mr-4 text-xs text-gray-500">10:36 AM</span>
        </div>
      </div>

      {/* Message Input */}
      <div className="border-t border-gray-200 p-4">
        <form onSubmit={handleSendMessage} className="flex items-center space-x-2">
          <Button type="button" variant="ghost" size="sm">
            <Paperclip className="h-4 w-4" />
          </Button>
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1"
          />
          <Button type="submit" className="bg-black text-white hover:bg-gray-800">
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
  );
}
