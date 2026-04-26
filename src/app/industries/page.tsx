import { industryGroups } from "@/data/industries"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { CTASection } from "@/components/shared/CTASection"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "Industries | Wilburn Pacific",
  description: "Explore our cross-industry expertise and tailored solutions for specialized sectors.",
}

export default function IndustriesIndexPage() {
  return (
    <div className="min-h-screen">
      <section className="dark-section pt-32 pb-24 border-b border-white/10">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-dark-fg mb-6">
            Industries We Serve
          </h1>
          <p className="text-xl md:text-2xl text-dark-muted max-w-3xl mx-auto leading-relaxed">
            Our engineering methodologies are adaptable across highly specialized and regulated environments.
          </p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {industryGroups.map(group => (
              <Link key={group.slug} href={`/industries/${group.slug}`} className="block group">
                <div className="bg-white p-8 rounded-xl border border-border shadow-sm group-hover:shadow-md transition-all group-hover:border-primary/30 h-full flex flex-col">
                  <h3 className="text-2xl font-bold text-foreground mb-3">{group.name}</h3>
                  <p className="text-muted-foreground mb-8 flex-1 leading-relaxed">
                    {group.description}
                  </p>
                  <div className="text-primary font-medium flex items-center mt-auto">
                    Explore sectors <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* <CTASection /> */}
    </div>
  )
}
