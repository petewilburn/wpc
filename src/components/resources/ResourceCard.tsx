import { Resource } from "@/data/resources"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Download } from "lucide-react"

export function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <a href={resource.pdfPath} target="_blank" rel="noopener noreferrer" className="block group h-full">
      <Card className="bg-white border-border shadow-sm group-hover:shadow-md transition-all h-full flex flex-col group-hover:border-primary/30">
        <CardContent className="p-6 flex flex-col flex-1">
          <div className="flex justify-between items-start mb-6">
            <div className="p-3 bg-secondary rounded-lg text-secondary-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors">
              <FileText className="w-6 h-6" />
            </div>
            <Badge variant="outline" className="text-xs">
              PDF
            </Badge>
          </div>
          <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
            {resource.title}
          </h3>
          <p className="text-muted-foreground leading-relaxed flex-1 mb-8 text-sm">
            {resource.excerpt}
          </p>
          <div className="mt-auto flex items-center text-primary font-medium text-sm">
            <Download className="w-4 h-4 mr-2" />
            Download Resource
          </div>
        </CardContent>
      </Card>
    </a>
  )
}
