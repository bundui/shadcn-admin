import { Metadata } from "next";
import { generateMeta } from "@/lib/generate-meta";

import ChatApp from "./components/chat-app";

export async function generateMetadata(): Promise<Metadata> {
  return generateMeta({
    title: "Chat App",
    description:
      "Chat app is a ui template used for instant messaging and communication between users. Built with shadcn/ui, Tailwind CSS, Next.js, Vue.js, and React. Typescript is supported.",
    canonical: "/chats"
  });
}

export default function Page() {
  return <ChatApp />;
}
