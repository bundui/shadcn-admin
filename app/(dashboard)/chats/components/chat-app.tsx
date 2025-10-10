"use client";

import { useState } from "react";

import { ConversationList } from "./conversation-list";
import { ChatArea } from "./chat-area";
import { UserProfile } from "./user-profile";

const conversations = [
  {
    id: "1",
    name: "Alice Johnson",
    avatar: "/avatars/01.jpeg",
    lastMessage: "Hey, how are you?",
    timestamp: "10:30 AM",
    unreadCount: 2,
    isActive: true,
    status: "Active now"
  },
  {
    id: "2",
    name: "Bob Smith",
    avatar: "/avatars/02.jpeg",
    lastMessage: "Can we meet tomorrow?",
    timestamp: "Yesterday",
    unreadCount: 54,
    isActive: false,
    status: "Last seen 2 hours ago"
  },
  {
    id: "3",
    name: "Charlie Brown",
    avatar: "/avatars/03.jpeg",
    lastMessage: "Thanks for your help!",
    timestamp: "Tuesday",
    unreadCount: 1,
    isActive: false,
    status: "Last seen yesterday"
  },
  {
    id: "4",
    name: "Diana Prince",
    avatar: "/avatars/04.jpeg",
    lastMessage: "The project is done!",
    timestamp: "2 days ago",
    unreadCount: 0,
    isActive: false,
    status: "Last seen 3 days ago"
  },
  {
    id: "5",
    name: "Ethan Hunt",
    avatar: "/avatars/05.jpeg",
    lastMessage: "Mission accomplished",
    timestamp: "Last week",
    unreadCount: 0,
    isActive: false,
    status: "Last seen last week"
  }
];

const messages = [
  {
    id: "1",
    senderId: "2",
    content: "Hey there! How's it going?",
    timestamp: "10:30 AM",
    isOwn: false
  },
  {
    id: "2",
    senderId: "1",
    content: "Hi Alice! I'm doing well, thanks for asking. How about you?",
    timestamp: "10:32 AM",
    isOwn: true
  },
  {
    id: "3",
    senderId: "2",
    content:
      "I'm great! Just working on some new projects. Have you heard about the latest tech conference?",
    timestamp: "10:35 AM",
    isOwn: false
  },
  {
    id: "4",
    senderId: "1",
    content: "No, I haven't. Tell me more about it!",
    timestamp: "10:36 AM",
    isOwn: true
  },
  {
    id: "5",
    senderId: "2",
    content:
      "It's called TechXpo 2023. It's happening next month and features some amazing speakers from top tech companies.",
    timestamp: "10:38 AM",
    isOwn: false
  }
];

const currentUser = {
  id: "2",
  name: "Alice Johnson",
  avatar: "/02.png",
  status: "Active now",
  bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  email: "alicejohnson@example.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  sharedFiles: [
    { name: "project_proposal.pdf", type: "pdf" },
    { name: "meeting_notes.docx", type: "docx" },
    { name: "budget_2023.xlsx", type: "xlsx" }
  ]
};

export default function ChatApp() {
  const [selectedConversation, setSelectedConversation] = useState(conversations[0]);
  const [showProfile, setShowProfile] = useState(true);

  return (
    <div className="flex h-screen">
      <ConversationList
        conversations={conversations}
        selectedConversation={selectedConversation}
        onSelectConversation={setSelectedConversation}
      />
      <ChatArea
        conversation={selectedConversation}
        messages={messages}
        onToggleProfile={() => setShowProfile(!showProfile)}
      />
      {showProfile && <UserProfile user={currentUser} onClose={() => setShowProfile(false)} />}
    </div>
  );
}
