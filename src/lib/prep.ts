import { prepGuides, type PrepGuide } from "./prep-content";

export type { PrepGuide };

export function getAllPrepSlugs(): string[] {
  return prepGuides.map((g) => g.slug);
}

export function getPrepBySlug(slug: string): PrepGuide | undefined {
  const realSlug = slug.replace(/\.md$/, "");
  return prepGuides.find((g) => g.slug === realSlug);
}

export function getAllPrepGuides(): PrepGuide[] {
  return prepGuides;
}
