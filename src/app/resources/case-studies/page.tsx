import { caseStudies } from "@/data/resources"
import { ResourceCard } from "@/components/resources/ResourceCard"

export const metadata = {
  title: "Case Studies | Wilburn Pacific",
  description: "Detailed analysis of our past projects and solutions.",
}

export default function CaseStudiesIndex() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-8 text-card-foreground">Case Studies</h2>
      {caseStudies.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <ResourceCard key={study.id} resource={study} />
          ))}
        </div>
      ) : (
        <div className="text-center py-24 bg-card border border-border rounded-xl">
          <h3 className="text-xl font-semibold text-card-foreground mb-2">No case studies available</h3>
          <p className="text-muted-foreground">Check back soon for detailed analysis of our engineering projects.</p>
        </div>
      )}
    </div>
  )
}
