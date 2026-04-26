import type { MetadataRoute } from "next"
import { capabilities } from "@/data/capabilities"
import { industryGroups } from "@/data/industries"

const BASE_URL = "https://wilburnpacific.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    { url: `${BASE_URL}/company/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/company/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/industries`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/resources/guides`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/resources/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    { url: `${BASE_URL}/resources/case-studies`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ]

  // Dynamic capability pages
  const capabilityPages: MetadataRoute.Sitemap = capabilities.map((cap) => ({
    url: `${BASE_URL}/capabilities/${cap.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }))

  // Dynamic industry group pages
  const industryPages: MetadataRoute.Sitemap = industryGroups.map((group) => ({
    url: `${BASE_URL}/industries/${group.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  return [...staticPages, ...capabilityPages, ...industryPages]
}
