export interface Industry {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface IndustryGroup {
  id: string;
  slug: string;
  name: string;
  description: string;
  industries: Industry[];
  relatedCapabilities: string[]; // slugs
}

export const industryGroups: IndustryGroup[] = [
  {
    id: "heavy-industry",
    slug: "heavy-industry",
    name: "Heavy Industry",
    description: "Robust solutions for high-stakes, physically demanding environments.",
    relatedCapabilities: ["industrial-automation", "mechanical-engineering"],
    industries: [
      { id: "mills", name: "Mills", description: "Process optimization and equipment reliability for steel, paper, and lumber mills.", icon: "Factory" },
      { id: "foundries", name: "Foundries", description: "Automation and safety systems for high-temperature casting operations.", icon: "Flame" },
      { id: "marine", name: "Marine", description: "Engineering and structural analysis for port facilities and maritime vessels.", icon: "Ship" },
      { id: "manufacturing", name: "Manufacturing", description: "Production line automation and quality control systems.", icon: "Wrench" },
      { id: "semiconductors", name: "Semiconductors", description: "Precision environmental control and automated material handling.", icon: "Cpu" },
      { id: "hardware", name: "Hardware", description: "Product design, testing, and lifecycle management.", icon: "HardDrive" },
      { id: "robotics", name: "Robotics", description: "Integration and programming of industrial robotic systems.", icon: "Bot" }
    ]
  },
  {
    id: "technology",
    slug: "technology",
    name: "Technology",
    description: "Scalable architecture for software and digital platforms.",
    relatedCapabilities: ["software-systems"],
    industries: [
      { id: "saas", name: "SaaS", description: "Cloud infrastructure and multi-tenant architecture optimization.", icon: "Cloud" },
      { id: "enterprise-software", name: "Enterprise Software", description: "Integration and modernization of complex enterprise systems.", icon: "Server" },
      { id: "software-engineering", name: "Software Engineering", description: "Best practices, CI/CD, and custom development.", icon: "Code" },
      { id: "e-commerce", name: "E-Commerce", description: "High-availability transactional systems and inventory management.", icon: "ShoppingCart" },
      { id: "security", name: "Security", description: "System hardening, compliance, and threat mitigation architectures.", icon: "Shield" }
    ]
  },
  {
    id: "supply-chain",
    slug: "supply-chain",
    name: "Supply Chain",
    description: "Streamlining logistics and operations through technology and engineering.",
    relatedCapabilities: ["industrial-automation", "software-systems"],
    industries: [
      { id: "logistics", name: "Logistics", description: "Warehouse automation and routing optimization.", icon: "Truck" },
      { id: "scm", name: "Supply Chain Management", description: "End-to-end visibility and predictive analytics.", icon: "Globe" },
      { id: "transportation", name: "Transportation", description: "Fleet management systems and infrastructure engineering.", icon: "Train" },
      { id: "service-industry", name: "Service Industry", description: "Operational efficiency and customer experience platforms.", icon: "Briefcase" }
    ]
  },
  {
    id: "professional-services",
    slug: "professional-services",
    name: "Professional Services",
    description: "Reliable, compliant systems for specialized service providers.",
    relatedCapabilities: ["software-systems", "forensic-engineering"],
    industries: [
      { id: "government", name: "Government", description: "Secure, compliant systems for public sector operations.", icon: "Landmark" },
      { id: "aerospace", name: "Aerospace", description: "Precision engineering and rigorous compliance tracking.", icon: "Rocket" },
      { id: "compliance", name: "Compliance", description: "Audit trails and regulatory reporting systems.", icon: "CheckSquare" },
      { id: "analytics", name: "Analytics", description: "Data warehousing and business intelligence architectures.", icon: "BarChart" },
      { id: "recruiting", name: "Recruiting", description: "ATS integration and talent pipeline management.", icon: "Users" }
    ]
  },
  {
    id: "commerce-marketing",
    slug: "commerce-marketing",
    name: "Commerce & Marketing",
    description: "Digital foundations for customer engagement and growth.",
    relatedCapabilities: ["software-systems"],
    industries: [
      { id: "retail", name: "Retail", description: "Omnichannel point-of-sale and inventory synchronization.", icon: "Store" },
      { id: "advertising", name: "Advertising", description: "High-throughput ad delivery and tracking systems.", icon: "Megaphone" },
      { id: "seo", name: "SEO", description: "Technical SEO optimization and performance engineering.", icon: "Search" },
      { id: "content", name: "Content", description: "CMS architecture and digital asset management.", icon: "FileText" },
      { id: "marketing", name: "Marketing", description: "Marketing automation and CRM integration.", icon: "Target" },
      { id: "sales", name: "Sales", description: "Sales enablement platforms and forecasting tools.", icon: "TrendingUp" },
      { id: "customer-success", name: "Customer Success", description: "Support portal architecture and ticketing systems.", icon: "Heart" },
      { id: "food-beverage", name: "Food & Beverage", description: "Supply chain tracking and compliance for F&B.", icon: "Coffee" },
      { id: "sustainability", name: "Sustainability", description: "ESG reporting and energy monitoring systems.", icon: "Leaf" }
    ]
  }
];

export function getIndustryGroupBySlug(slug: string): IndustryGroup | undefined {
  return industryGroups.find(g => g.slug === slug);
}
