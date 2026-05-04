import Link from "next/link";
import { getAllPrepGuides } from "@/lib/prep";

export const metadata = {
  title: "Index",
};

export default function PrepIndex() {
  const guides = getAllPrepGuides();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-4xl">
      <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-foreground">
        Interview Prep Guide Index
      </h1>
      <p className="text-muted-foreground mb-8">
        {guides.length} guides
      </p>
      <ul className="divide-y divide-border border-y border-border">
        {guides.map((guide) => (
          <li key={guide.slug}>
            <Link
              href={`/prep/${guide.slug}`}
              className="flex items-baseline gap-4 py-3 px-2 -mx-2 rounded hover:bg-accent transition-colors"
            >
              <span className="text-sm text-muted-foreground font-mono w-12 shrink-0 tabular-nums">
                {guide.number ?? ""}
              </span>
              <span className="text-foreground font-medium">{guide.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
