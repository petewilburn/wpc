import { capabilities } from "./capabilities";
import { industryGroups } from "./industries";

export interface NavItem {
  title: string;
  href: string;
  description?: string;
  icon?: string;
  items?: NavItem[];
}

export const navigation: {
  capabilities: NavItem[];
  industries: NavItem[];
  resources: NavItem[];
  company: NavItem[];
} = {
  capabilities: capabilities.map(c => ({
    title: c.title,
    href: `/capabilities/${c.slug}`,
    description: c.subtitle,
    icon: c.icon
  })),
  industries: industryGroups.map(g => ({
    title: g.name,
    href: `/industries/${g.slug}`,
    description: g.description,
    items: g.industries.map(i => ({
      title: i.name,
      href: `/industries/${g.slug}#${i.id}`,
      description: i.description
    }))
  })),
  resources: [
    {
      title: "Blog",
      href: "/resources/blog",
      description: "Insights and perspectives from our engineering teams."
    },
    {
      title: "Case Studies",
      href: "/resources/case-studies",
      description: "Detailed analysis of our past projects and solutions."
    },
    {
      title: "Guides & Whitepapers",
      href: "/resources/guides",
      description: "In-depth technical resources and methodologies."
    }
  ],
  company: [
    {
      title: "About Us",
      href: "/company/about",
      description: "Our history, mission, and leadership team."
    },
    // {
    //   title: "Partners",
    //   href: "/partners",
    //   description: "Our technology and implementation partners."
    // }
  ]
};
