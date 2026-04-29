import { IndustryGroup } from "@/data/industries"
import { capabilities } from "@/data/capabilities"
import { IndustryCard } from "./IndustryCard"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { CTASection } from "@/components/shared/CTASection"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export function IndustryGroupTemplate({ group }: { group: IndustryGroup }) {
  const relatedCaps = capabilities.filter(c => group.relatedCapabilities.includes(c.slug));

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="dark-section pt-32 pb-24 border-b border-dark-border">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl text-center">
          <Badge className="bg-primary/20 text-primary hover:bg-primary/30 border-none mb-6 text-sm px-4 py-1">
            Industry Group
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-dark-fg mb-6">
            {group.name}
          </h1>
          <p className="text-xl md:text-2xl text-dark-muted max-w-3xl mx-auto leading-relaxed">
            {group.description}
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <SectionHeading title="Sectors We Serve" subtitle={`Tailored engineering and architectural solutions for ${group.name.toLowerCase()} applications.`} />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {group.industries.map(industry => (
              <IndustryCard key={industry.id} industry={industry} />
            ))}
          </div>
        </div>
      </section>

      {/* Relevant Capabilities */}
      {relatedCaps.length > 0 && (
        <section className="py-24 bg-secondary/50 border-t border-border">
          <div className="container mx-auto px-4 md:px-8 max-w-6xl">
            <SectionHeading title="Relevant Capabilities" subtitle="Our core competencies applied to this industry group." />
            <div className="grid md:grid-cols-2 gap-8">
              {relatedCaps.map(cap => (
                <Link key={cap.slug} href={`/capabilities/${cap.slug}`} className="block group">
                  <div className="bg-card text-card-foreground p-8 rounded-xl border border-border shadow-sm group-hover:shadow-md transition-all group-hover:border-primary/30">
                    <h3 className="text-2xl font-bold text-card-foreground mb-3 flex items-center justify-between">
                      {cap.title}
                      <ChevronRight className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                    </h3>
                    <p className="text-muted-foreground">{cap.subtitle}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* <CTASection /> */}
    </div>
  )
}
