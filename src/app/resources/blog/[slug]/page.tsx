import { getPostBySlug, getAllPosts, markdownToHtml } from "@/lib/blog"
import { notFound } from "next/navigation"
import { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export async function generateStaticParams() {
  const posts = getAllPosts(["slug"])
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const params = await props.params;
  const post = getPostBySlug(params.slug, ["title", "excerpt"])

  if (!post) {
    return { title: "Not Found" }
  }

  return {
    title: `${post.title} | Wilburn Pacific`,
    description: post.excerpt,
  }
}

export default async function BlogPost(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "category",
  ])

  if (!post || !post.content) {
    notFound()
  }

  const contentHtml = await markdownToHtml(post.content)

  return (
    <article className="max-w-3xl mx-auto">
      <Link href="/resources/blog" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-8 transition-colors">
        <ArrowLeft className="mr-2 w-4 h-4" />
        Back to Blog
      </Link>
      
      <header className="mb-12 text-center">
        {post.category && (
          <Badge variant="secondary" className="mb-6 bg-primary/10 text-primary hover:bg-primary/20 border-none">
            {post.category}
          </Badge>
        )}
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6 leading-tight">
          {post.title}
        </h1>
        <div className="flex items-center justify-center gap-4 text-muted-foreground">
          <span className="font-medium text-foreground">{post.author || "Wilburn Pacific"}</span>
          <span>•</span>
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </time>
        </div>
      </header>
      
      <div 
        className="prose prose-slate prose-lg max-w-none dark:prose-invert prose-headings:font-bold prose-a:text-primary hover:prose-a:text-primary-hover"
        dangerouslySetInnerHTML={{ __html: contentHtml }} 
      />
    </article>
  )
}
