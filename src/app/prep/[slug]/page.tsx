import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPrepSlugs, getPrepBySlug } from "@/lib/prep";

export async function generateStaticParams() {
  return getAllPrepSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getPrepBySlug(slug);
  return { title: guide?.title ?? "Not found" };
}

export default async function PrepGuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getPrepBySlug(slug);
  if (!guide) notFound();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-3xl">
      <Link
        href="/prep"
        className="inline-block mb-6 text-sm text-muted-foreground hover:text-primary"
      >
        ← Index
      </Link>
      <article
        className="prose prose-slate max-w-none prose-headings:scroll-mt-24 prose-pre:overflow-x-auto prose-table:overflow-x-auto"
        dangerouslySetInnerHTML={{ __html: guide.contentHtml }}
      />
      <div className="mt-12 pt-6 border-t border-border">
        <Link
          href="/prep"
          className="text-sm text-muted-foreground hover:text-primary"
        >
          ← Index
        </Link>
      </div>
    </div>
  );
}
