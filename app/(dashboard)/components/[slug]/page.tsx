import data from "@/config/nav.json";
import ListCard from "./components/list-card";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { AlertCircleIcon, ExternalLinkIcon } from "lucide-react";
import { Metadata } from "next";
import { Alert, AlertTitle } from "@/components/ui/alert";

export type ComponentType = (typeof data)[number];
export type ComponentExampleType = {
  name: string;
  title: string;
  description?: string;
};

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const componentData = data.find((item) => item.name === slug);

  if (!componentData) return {};

  return {
    title: `${componentData.title} - Shadcn Admin Dashboard`,
    description: componentData.description?.meta,
    metadataBase: new URL(`${process.env.BASE_URL}`),
    alternates: {
      canonical: `/components/${slug}`
    },
    openGraph: {
      images: [`${process.env.BASE_URL}/og-image.png`]
    }
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const componentData: ComponentType | undefined = data.find((item) => item.name === slug);

  if (!componentData) return null;

  return (
    <div className="relative min-h-screen space-y-6 p-6">
      <div className="space-y-6">
        <div className="flex max-w-3xl flex-col gap-4">
          <h1 className="text-foreground text-3xl font-bold">{componentData.title}</h1>
          <p className="text-muted-foreground">{componentData.description?.base}</p>
          {componentData.note && (
            <Alert>
              <AlertCircleIcon className="text-orange-400" />
              <AlertTitle dangerouslySetInnerHTML={{ __html: componentData.note ?? "" }} />
            </Alert>
          )}
        </div>
        {componentData.additional_urls && componentData.additional_urls?.length > 0 ? (
          <div className="flex gap-2">
            {componentData.additional_urls?.map((item, i) => {
              const url = item.url
                ? item.url
                : `https://www.radix-ui.com/primitives/docs/components/${componentData.reference_name ?? componentData.name}${i === 1 ? "#api-reference" : ""}`;
              return (
                <Badge variant="outline" key={i} asChild>
                  <Link key={item.name} href={url} target="_blank">
                    {item.name}
                    <ExternalLinkIcon className="ml-1 h-4 w-4" />
                  </Link>
                </Badge>
              );
            })}
          </div>
        ) : null}
      </div>

      <div className="relative grid grid-cols-[1fr_200px] gap-6">
        <div className="space-y-10">
          {componentData.examples.map((example, i) => (
            <ListCard componentName={componentData.name} key={i} example={example} />
          ))}
        </div>
        {componentData.examples.length && (
          <div className="sticky top-12 space-y-4">
            <div className="text-sm font-semibold">Table of contents</div>
            <div className="flex flex-col gap-2">
              {componentData.examples.map((item, i) => (
                <Link
                  key={i}
                  href={`#${item.name}`}
                  className="text-muted-foreground hover:text-foreground text-sm hover:underline">
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
