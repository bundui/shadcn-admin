import CreateProjectEmptyState from "./components/create-project-empty-state";
import { generateMeta } from "@/lib/generate-meta";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return generateMeta({
    title: "Empty States 02",
    description:
      "Empty states are UI screens shown when no data or content is available. Built with shadcn/ui, Tailwind CSS, Next.js, Vue.js, and React. Typescript is supported.",
    canonical: "/empty-states-02"
  });
}

export default function Page() {
  return <CreateProjectEmptyState />;
}
