import { getAllPosts } from "@/lib/blog"
import { BlogCard } from "@/components/resources/BlogCard"

export const metadata = {
  title: "Blog | Wilburn Pacific",
  description: "Insights and perspectives from our engineering teams.",
}

export default function BlogIndex() {
  const posts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "excerpt",
    "category",
  ])

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8 text-card-foreground">Latest Insights</h2>
      {posts.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-24 bg-card border border-border rounded-xl">
          <h3 className="text-xl font-semibold text-card-foreground mb-2">No posts yet</h3>
          <p className="text-muted-foreground">Check back soon for insights from our engineering team.</p>
        </div>
      )}
    </div>
  )
}
