import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import { generateMeta } from "@/lib/generate-meta";

export async function generateMetadata(): Promise<Metadata> {
  return generateMeta({
    title: "403 Page",
    description:
      "The unauthorized 403 page template. Built with Tailwind CSS, Next.js, React and Shadcn.",
    canonical: "/error/404"
  });
}

export default function Error404() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="text-center">
        <figure className="m-auto w-40 lg:w-72">
          <img src={`/images/403.svg`} className="w-full" alt="403 image" />
        </figure>
        <div className="mt-8 space-y-4 lg:mt-14">
          <h1 className="text-3xl font-bold tracking-tight lg:text-5xl">No authorization</h1>
          <p className="text-muted-foreground">
            You do not appear to have permission to access this page
          </p>
        </div>
        <div className="mt-8">
          <Button size="lg">Go to home</Button>
        </div>
      </div>
    </div>
  );
}
