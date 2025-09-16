import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import { generateMeta } from "@/lib/generate-meta";

export async function generateMetadata(): Promise<Metadata> {
  return generateMeta({
    title: "Contacts",
    description:
      "Contacts are a list of people or organizations with their details for communication and management. Built with shadcn/ui, Tailwind CSS, Next.js, Vue.js, and React. Typescript is supported.",
    canonical: "/contacts"
  });
}

export default async function Page() {
  return (
    <div className="flex h-[calc(100vh-3rem)] w-full flex-col items-center justify-center space-y-4">
      <h4 className="text-lg font-medium">Team Member Not Selected</h4>
      <p className="text-muted-foreground">
        Select a team member from the left or create a new team member.
      </p>
      <Button>Add Team Member</Button>
    </div>
  );
}
