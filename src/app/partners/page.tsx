import { CTASection } from "@/components/shared/CTASection"

export const metadata = {
  title: "Partners | Wilburn Pacific",
  description: "Our technology and implementation partners.",
}

export default function PartnersPage() {
  return (
    <div className="min-h-screen">
      <section className="dark-section pt-32 pb-24 border-b border-dark-border">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-dark-fg mb-6">
            Our Partners
          </h1>
          <p className="text-xl md:text-2xl text-dark-muted max-w-3xl mx-auto leading-relaxed">
            We collaborate with industry-leading technology providers to deliver comprehensive solutions.
          </p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl text-center">
          <div className="bg-card text-card-foreground p-16 rounded-xl border border-border shadow-sm max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Partner Network</h2>
            <p className="text-muted-foreground text-lg mb-8">
              We are currently updating our partner directory. Please check back later or contact us directly for partnership inquiries.
            </p>
          </div>
        </div>
      </section>

      {/* <CTASection /> */}
    </div>
  )
}
