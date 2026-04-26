import { ResourceTabNav } from "@/components/resources/ResourceTabNav"
import { CTASection } from "@/components/shared/CTASection"

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <section className="dark-section pt-32 pb-12">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-dark-fg mb-4">
            Resources
          </h1>
          <p className="text-xl text-dark-muted max-w-2xl">
            Insights, technical documentation, and methodologies from our engineering teams.
          </p>
        </div>
      </section>

      <div className="bg-background">
        <ResourceTabNav />
      </div>

      <div className="flex-1 bg-background py-16">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          {children}
        </div>
      </div>

      {/* <CTASection /> */}
    </div>
  )
}
