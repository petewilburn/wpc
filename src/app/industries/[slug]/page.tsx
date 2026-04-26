import { getIndustryGroupBySlug, industryGroups } from "@/data/industries"
import { IndustryGroupTemplate } from "@/components/industries/IndustryGroupTemplate"
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
    title: `${group.name} Solutions | Wilburn Pacific`,
    description: group.description,
  }
}

export default async function IndustryGroupPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const group = getIndustryGroupBySlug(params.slug)

  if (!group) {
    notFound()
  }

  return <IndustryGroupTemplate group={group} />
}
