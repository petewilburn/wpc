import { guides } from "@/data/resources"
import { ResourceCard } from "@/components/resources/ResourceCard"

export const metadata = {
  title: "Guides & Whitepapers | Wilburn Pacific",
  description: "In-depth technical resources and methodologies.",
}

export default function GuidesIndex() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-8 text-foreground">Guides & Whitepapers</h2>
      {guides.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guides.map((guide) => (
            <ResourceCard key={guide.id} resource={guide} />
          ))}
        </div>
      ) : (
        <div className="text-center py-24 bg-white border border-border rounded-xl">
          <h3 className="text-xl font-semibold text-foreground mb-2">No guides available</h3>
          <p className="text-muted-foreground">Check back soon for technical whitepapers and engineering guides.</p>
        </div>
      )}
    </div>
  )
}
