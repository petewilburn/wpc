import { BlogPost } from "@/lib/blog"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Card className="bg-card text-card-foreground border-border shadow-sm group hover:shadow-md transition-all flex flex-col h-full overflow-hidden">
      <CardContent className="p-6 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-4">
          {post.category && (
            <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
              {post.category}
            </Badge>
          )}
          <span className="text-sm text-muted-foreground">
            {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
          </span>
        </div>
        <h3 className="text-xl font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed flex-1 mb-6 line-clamp-3">
          {post.excerpt}
        </p>
        <div className="mt-auto pt-4 border-t border-border flex items-center justify-between">
          <span className="text-sm font-medium text-card-foreground">{post.author || "Wilburn Pacific"}</span>
          <Link href={`/resources/blog/${post.slug}`} className="text-primary hover:text-primary-foreground hover:bg-primary rounded-full p-2 transition-colors">
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
