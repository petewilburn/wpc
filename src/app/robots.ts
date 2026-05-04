import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/prep/", "/prep"],
    },
    sitemap: "https://wilburnpacific.com/sitemap.xml",
  }
}
