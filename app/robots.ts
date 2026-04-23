import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://www.simplifai.com/sitemap.xml",
    host: "https://www.simplifai.com",
  };
}
