import { generateMeta } from "@/lib/generate-meta";
import { Metadata } from "next";
import { ProductList } from "./components/products";

export async function generateMetadata(): Promise<Metadata> {
  return generateMeta({
    title: "Product List",
    description:
      "A list of products created using the Tanstack Table. Built with Tailwind CSS and Next.js.",
    canonical: "/products"
  });
}

export default function Page() {
  return <ProductList />;
}
