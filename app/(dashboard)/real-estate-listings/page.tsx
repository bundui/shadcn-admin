import { RealEstateListings } from "./components/real-estate-listings";
import { Metadata } from "next";
import { generateMeta } from "@/lib/generate-meta";

export async function generateMetadata(): Promise<Metadata> {
  return generateMeta({
    title: "Real Estate Listings",
    description:
      "Real estate listings are structured displays of properties for sale or rent with key details. Built with shadcn/ui, Tailwind CSS, Next.js, Vue.js, and React. Typescript is supported.",
    canonical: "/real-estate-listings"
  });
}

export default function Page() {
  return <RealEstateListings />;
}
