import { SectionHeading } from "@/components/shared/SectionHeading"
import { CTASection } from "@/components/shared/CTASection"
import Image from "next/image"

export const metadata = {
  title: "About Us | Wilburn Pacific",
  description: "Our history, mission, and leadership team.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="dark-section pt-32 pb-24 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-dark-bg to-dark-bg" />
        <div className="container mx-auto px-4 md:px-8 max-w-5xl text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-dark-fg mb-6">
            Engineering Precision
          </h1>
          <p className="text-xl md:text-2xl text-dark-muted max-w-2xl mx-auto leading-relaxed">
            Wilburn Pacific is a multidisciplinary engineering firm dedicated to building, optimizing, and securing the critical infrastructure of modern industry.
          </p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading title="Our Mission" />
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  At Wilburn Pacific, we believe that the systems powering our world—whether physical or digital—require rigorous, uncompromising engineering.
                </p>
                <p>
                  Our mission is to bridge the gap between complex software architecture and heavy industrial automation, providing a unified approach to systems engineering that ensures reliability, scale, and safety.
                </p>
                <p>
                  From investigating mechanical failures in century-old foundries to architecting cloud-native platforms capable of handling millions of transactions, our teams bring deep domain expertise and a commitment to excellence to every project.
                </p>
              </div>
            </div>
            <div className="bg-secondary/50 rounded-2xl p-8 border border-border">
              <h3 className="text-xl font-bold mb-6 text-foreground">Core Values</h3>
              <ul className="space-y-6">
                <li>
                  <strong className="text-x2 block mb-1">Uncompromising Quality</strong>
                  <span className="text-muted-foreground">We do not cut corners. Our solutions are built to last and designed to scale.</span>
                </li>
                <li>
                  <strong className="text-x2 block mb-1">Scientific Rigor</strong>
                  <span className="text-muted-foreground">Our forensic and architectural approaches are grounded in data and objective analysis.</span>
                </li>
                <li>
                  <strong className="text-x2 block mb-1">Cross-Disciplinary Insight</strong>
                  <span className="text-muted-foreground">We leverage insights from both physical engineering and digital architecture to create better systems.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* <CTASection /> */}
    </div>
  )
}
