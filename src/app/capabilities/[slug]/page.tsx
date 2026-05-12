import { getCapabilityBySlug, capabilities } from "@/data/capabilities"
import { CapabilityPageTemplate } from "@/components/capabilities/CapabilityPageTemplate"
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/jsonld"
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
    title: `${capability.title} Consulting`,
    description: capability.description,
    alternates: { canonical: `/capabilities/${capability.slug}` },
  }
}

export default async function CapabilityPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const capability = getCapabilityBySlug(params.slug)

  if (!capability) {
    notFound()
  }

  const breadcrumbs = breadcrumbJsonLd([
    { name: "Home", url: "/" },
    { name: "Capabilities", url: "/capabilities" },
    { name: capability.title, url: `/capabilities/${capability.slug}` },
  ])
  const service = serviceJsonLd(capability)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
      />
      <CapabilityPageTemplate capability={capability} />
    </>
  )
}
