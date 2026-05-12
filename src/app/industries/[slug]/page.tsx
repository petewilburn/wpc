import { getIndustryGroupBySlug, industryGroups } from "@/data/industries"
import { IndustryGroupTemplate } from "@/components/industries/IndustryGroupTemplate"
import { breadcrumbJsonLd } from "@/lib/jsonld"
import { notFound } from "next/navigation"
import { Metadata } from "next"

export async function generateStaticParams() {
  return industryGroups.map((group) => ({
    slug: group.slug,
  }))
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const params = await props.params;
  const group = getIndustryGroupBySlug(params.slug)
  
  if (!group) {
    return {
      title: "Not Found",
    }
  }

  return {
    title: `${group.name} Solutions`,
    description: group.description,
    alternates: { canonical: `/industries/${group.slug}` },
  }
}

export default async function IndustryGroupPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const group = getIndustryGroupBySlug(params.slug)

  if (!group) {
    notFound()
  }

  const breadcrumbs = breadcrumbJsonLd([
    { name: "Home", url: "/" },
    { name: "Industries", url: "/industries" },
    { name: group.name, url: `/industries/${group.slug}` },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <IndustryGroupTemplate group={group} />
    </>
  )
}
