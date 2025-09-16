import SettingsPage from "./components/settings";
import { Metadata } from "next";
import { generateMeta } from "@/lib/generate-meta";

export async function generateMetadata(): Promise<Metadata> {
  return generateMeta({
    title: "Settings Page",
    description:
      "A settings page is a page where users can configure preferences, account options, and app settings. Built with shadcn/ui, Tailwind CSS, Next.js, Vue.js, and React. Typescript is supported.",
    canonical: "/settings"
  });
}

export default function Page() {
  return <SettingsPage />;
}
