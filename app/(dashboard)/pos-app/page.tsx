import PosApp from "@/app/(dashboard)/pos-app/components/pos-app";
import { Metadata } from "next";
import { generateMeta } from "@/lib/generate-meta";

export async function generateMetadata(): Promise<Metadata> {
  return generateMeta({
    title: "POS App",
    description:
      "A POS app is a template used to process sales, payments, and manage transactions. Built with shadcn/ui, Tailwind CSS, Next.js, Vue.js, and React. Typescript is supported.",
    canonical: "/pos-app"
  });
}

export default function Page() {
  return <PosApp />;
}
