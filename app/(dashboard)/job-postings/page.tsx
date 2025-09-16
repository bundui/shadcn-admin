import JobPostings from "./components/job-postings";
import { Metadata } from "next";
import { generateMeta } from "@/lib/generate-meta";

export async function generateMetadata(): Promise<Metadata> {
  return generateMeta({
    title: "Job Postings",
    description:
      "Job postings are listings of available positions with details about roles, requirements, and app instructions. Built with shadcn/ui, Tailwind CSS, Next.js, Vue.js, and React. Typescript is supported.",
    canonical: "/job-postings"
  });
}

export default function Page() {
  return <JobPostings />;
}
