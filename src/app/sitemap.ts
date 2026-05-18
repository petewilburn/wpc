import type { MetadataRoute } from "next"
import { capabilities } from "@/data/capabilities"
import { industryGroups } from "@/data/industries"

const BASE_URL = "https://wilburnpacific.com"

// Default last-modified for items without an explicit updatedAt.
// Search engines weight this signal, so it should reflect actual content
// changes — bump only when the underlying page or data file is meaningfully
// edited (not on every deploy).
const DEFAULT_LAST_MODIFIED = "2026-04-21"

const STATIC_LAST_MODIFIED: Record<string, string> = {
  "/": "2026-05-12",
  "/capabilities": "2026-05-18",
  "/company/about": "2026-04-21",
  "/company/contact": "2026-05-12",
  "/industries": "2026-04-21",
  "/resources/guides": "2026-04-21",
  "/resources/blog": "2026-04-21",
  "/resources/case-studies": "2026-04-21",
}

function lastModForStatic(path: string): Date {
  return new Date(STATIC_LAST_MODIFIED[path] ?? DEFAULT_LAST_MODIFIED)
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: lastModForStatic("/"), changeFrequency: "monthly", priority: 1.0 },
    { url: `${BASE_URL}/company/about`, lastModified: lastModForStatic("/company/about"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/company/contact`, lastModified: lastModForStatic("/company/contact"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/capabilities`, lastModified: lastModForStatic("/capabilities"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/industries`, lastModified: lastModForStatic("/industries"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/resources/guides`, lastModified: lastModForStatic("/resources/guides"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/resources/blog`, lastModified: lastModForStatic("/resources/blog"), changeFrequency: "weekly", priority: 0.6 },
    { url: `${BASE_URL}/resources/case-studies`, lastModified: lastModForStatic("/resources/case-studies"), changeFrequency: "monthly", priority: 0.6 },
  ]

  const capabilityPages: MetadataRoute.Sitemap = capabilities.map((cap) => ({
    url: `${BASE_URL}/capabilities/${cap.slug}`,
    lastModified: new Date(cap.updatedAt ?? DEFAULT_LAST_MODIFIED),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }))

  const industryPages: MetadataRoute.Sitemap = industryGroups.map((group) => ({
    url: `${BASE_URL}/industries/${group.slug}`,
    lastModified: new Date(group.updatedAt ?? DEFAULT_LAST_MODIFIED),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  return [...staticPages, ...capabilityPages, ...industryPages]
}
