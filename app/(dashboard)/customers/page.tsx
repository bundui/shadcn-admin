import { generateMeta } from "@/lib/generate-meta";
import { Metadata } from "next";

import CustomerList from "./components/customer-list";

export async function generateMetadata(): Promise<Metadata> {
  return generateMeta({
    title: "Customers Page",
    description:
      "A customers list is a structured view of customer information, contact details, and activity. Built with shadcn/ui, Tailwind CSS, Next.js, Vue.js, and React. Typescript is supported.",
    canonical: "/customers"
  });
}

export default function Page() {
  return <CustomerList />;
}
