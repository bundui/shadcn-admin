import { Metadata } from "next";
import { generateMeta } from "@/lib/generate-meta";

import CheckoutPage from "./components/checkout";

export async function generateMetadata(): Promise<Metadata> {
  return generateMeta({
    title: "Checkout Page",
    description:
      "The checkout page is a template where users review their orders and complete their payments. Built with shadcn/ui, Tailwind CSS, Next.js, Vue.js, and React. Typescript is supported.",
    canonical: "/checkout"
  });
}

export default function Page() {
  return <CheckoutPage />;
}
