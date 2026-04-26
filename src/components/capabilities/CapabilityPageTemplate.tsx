import { Capability } from "@/data/capabilities"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { CTASection } from "@/components/shared/CTASection"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function CapabilityPageTemplate({ capability }: { capability: Capability }) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="dark-section pt-32 pb-24 border-b border-white/10">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <Badge className="bg-primary/20 text-primary hover:bg-primary/30 border-none mb-6 text-sm px-4 py-1">
            Capability Focus
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-dark-fg mb-6">
            {capability.title}
          </h1>
          <p className="text-xl md:text-2xl text-dark-muted max-w-3xl leading-relaxed">
            {capability.subtitle}
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <SectionHeading title="Overview" />
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            {capability.description}
          </p>
        </div>
      </section>

      {/* Specializations Section */}
      {capability.specializations.length > 0 && (
        <section className="py-24 bg-secondary/50">
          <div className="container mx-auto px-4 md:px-8 max-w-5xl">
            <SectionHeading title="Core Specializations" />
            <div className="grid md:grid-cols-3 gap-6">
              {capability.specializations.map(spec => (
                <Card key={spec.title} className="bg-white border-border shadow-sm">
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold text-foreground mb-3">{spec.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{spec.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Methodology Section */}
      {capability.process.length > 0 && (
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 md:px-8 max-w-5xl">
            <SectionHeading title="Our Methodology" subtitle="A rigorous, step-by-step approach to project execution." />
            <div className="space-y-6 mt-12">
              {capability.process.map((step, idx) => (
                <div key={step.title} className="flex gap-6 items-start p-6 rounded-lg border border-border bg-white shadow-sm">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold text-xl">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Certifications Section */}
      {capability.certifications.length > 0 && (
        <section className="py-24 bg-secondary/50 border-t border-border">
          <div className="container mx-auto px-4 md:px-8 max-w-5xl text-center">
            <SectionHeading title="Standards & Certifications" align="center" />
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              {capability.certifications.map(cert => (
                <Badge key={cert} variant="outline" className="text-sm px-4 py-2 border-border bg-white text-foreground">
                  {cert}
                </Badge>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      {/* <CTASection /> */}
    </div>
  )
}
