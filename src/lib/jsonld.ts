const ORG_URL = "https://wilburnpacific.com"
const ORG_NAME = "Wilburn Pacific Company"

type BreadcrumbItem = { name: string; url: string }

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url.startsWith("http") ? it.url : `${ORG_URL}${it.url}`,
    })),
  }
}

export function serviceJsonLd(capability: {
  title: string
  description: string
  slug: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: capability.title,
    description: capability.description,
    url: `${ORG_URL}/capabilities/${capability.slug}`,
    provider: {
      "@type": "Organization",
      name: ORG_NAME,
      url: ORG_URL,
    },
  }
}

export function articleJsonLd(post: {
  title: string
  excerpt?: string
  date: string
  slug: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    publisher: {
      "@type": "Organization",
      name: ORG_NAME,
      url: ORG_URL,
    },
    mainEntityOfPage: `${ORG_URL}/resources/blog/${post.slug}`,
  }
}
