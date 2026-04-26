export interface Resource {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  pdfPath: string;
  featuredImage?: string;
}

export const caseStudies: Resource[] = [
  // {
  //   id: "mill-crane-retrofit",
  //   title: "Mill Crane Retrofit Analysis",
  //   excerpt: "Structural reinforcement methodology for aging bridge cranes in a high-temperature foundry environment.",
  //   category: "Mechanical Engineering",
  //   pdfPath: "/assets/case-studies/mill-retrofit.pdf",
  // }
];

export const guides: Resource[] = [
  // {
  //   id: "microservices-migration",
  //   title: "Microservices Migration Strategy",
  //   excerpt: "A comprehensive guide to decoupling legacy monolithic architectures without downtime.",
  //   category: "Software Systems",
  //   pdfPath: "/assets/guides/microservices-migration.pdf",
  // }
];
