import { Metadata } from "next";

export function generateMeta({
  title,
  description,
  canonical
}: {
  title: string;
  description: string;
  canonical: string;
}): Metadata {
  return {
    title: `${title} - Shadcn Admin`,
    description: description,
    metadataBase: new URL(`${process.env.BASE_URL}`),
    alternates: {
      canonical
    },
    openGraph: {
      images: [`${process.env.BASE_URL}/seo.png`]
    }
  };
}
