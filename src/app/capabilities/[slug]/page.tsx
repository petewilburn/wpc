import { getCapabilityBySlug, capabilities } from "@/data/capabilities"
import { CapabilityPageTemplate } from "@/components/capabilities/CapabilityPageTemplate"
import { notFound } from "next/navigation"
import { Metadata } from "next"

export async function generateStaticParams() {
  return capabilities.map((capability) => ({
    slug: capability.slug,
  }))
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const params = await props.params;
  const capability = getCapabilityBySlug(params.slug)
  
  if (!capability) {
    return {
      title: "Not Found",
    }
  }

  return {
    title: `${capability.title} Consulting | Wilburn Pacific`,
    description: capability.description,
  }
}

export default async function CapabilityPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const capability = getCapabilityBySlug(params.slug)

  if (!capability) {
    notFound()
  }

  return <CapabilityPageTemplate capability={capability} />
}
