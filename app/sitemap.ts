import { MetadataRoute } from "next";
import { sidebarData } from "@/@data/sidebar";

export default function sitemap(): MetadataRoute.Sitemap {
  const pageRoutesLinks: MetadataRoute.Sitemap = [];

  sidebarData.navMain.forEach(({ items }) => {
    items.forEach((route) => {
      if (route.url) {
        pageRoutesLinks.push({
          url: `${process.env.BASE_URL}${route.url}`,
          lastModified: new Date(),
          changeFrequency: "weekly",
          priority: 1
        });
      }

      if (route.items?.length) {
        route.items.forEach((route) => {
          pageRoutesLinks.push({
            url: `${process.env.BASE_URL}${route.url}`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1
          });
        });
      }
    });
  });

  return [
    {
      url: `${process.env.BASE_URL}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1
    },
    ...pageRoutesLinks
  ];
}
