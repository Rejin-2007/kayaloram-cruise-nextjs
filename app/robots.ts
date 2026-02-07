import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: [
          "/",
          "/about",
          "/service",
          "/gallery",
          "/blog",
          "/reservation",
          "/contact",
          "/privacy-policy",
          "/terms-and-conditions",
          "/reviews",
        ],
        disallow: [
          "/api/",
          "/_next/",
          "/admin/",
          "/dashboard/",
        ],
      },
    ],
    sitemap: "https://www.poovarislandboating.com/sitemap.xml",
    host: "https://www.poovarislandboating.com",
  };
}
