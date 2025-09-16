import ProfilePage from "./components/profile-page";
import { Metadata } from "next";
import { generateMeta } from "@/lib/generate-meta";

export async function generateMetadata(): Promise<Metadata> {
  return generateMeta({
    title: "User Profile",
    description:
      "A user profile page is a page displaying a user’s personal information, settings, and activity. Built with shadcn/ui, Tailwind CSS, Next.js, Vue.js, and React. Typescript is supported.",
    canonical: "/user-profile"
  });
}

export default function Page() {
  return (
    <div className="min-h-screen p-4 md:p-8 lg:p-12">
      <ProfilePage />
    </div>
  );
}
