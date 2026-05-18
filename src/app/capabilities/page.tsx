import { capabilities } from "@/data/capabilities"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "Capabilities",
  description: "Our engineering disciplines — software systems, industrial automation, mechanical engineering, and forensic engineering.",
  alternates: { canonical: "/capabilities" },
}

export default function CapabilitiesIndexPage() {
  return (
    <div className="min-h-screen">
      <section className="dark-section pt-32 pb-24 border-b border-dark-border">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-dark-fg mb-6">
            Engineering Capabilities
          </h1>
          <p className="text-xl md:text-2xl text-dark-muted max-w-3xl mx-auto leading-relaxed">
            Multidisciplinary engineering for the systems that power modern industry.
          </p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {capabilities.map(cap => (
              <Link key={cap.slug} href={`/capabilities/${cap.slug}`} className="block group">
                <div className="bg-card text-card-foreground p-8 rounded-xl border border-border shadow-sm group-hover:shadow-md transition-all group-hover:border-primary/30 h-full flex flex-col">
                  <h3 className="text-2xl font-bold text-card-foreground mb-3">{cap.title}</h3>
                  <p className="text-muted-foreground mb-8 flex-1 leading-relaxed">
                    {cap.subtitle}
                  </p>
                  <div className="text-primary font-medium flex items-center mt-auto">
                    Learn more <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
