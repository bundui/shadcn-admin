import { Metadata } from "next";
import { generateMeta } from "@/lib/generate-meta";

import ProductFilter from "./components/product-filter";

export async function generateMetadata(): Promise<Metadata> {
  return generateMeta({
    title: "Product Filter",
    description:
      "A product filter is a tool that helps users sort and find products based on specific criteria. Built with shadcn/ui, Tailwind CSS, Next.js, Vue.js, and React. Typescript is supported.",
    canonical: "/product-filter"
  });
}

export default function Page() {
  return <ProductFilter />;
}
