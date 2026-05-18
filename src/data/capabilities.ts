export interface Capability {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  specializations: { title: string; description: string }[];
  process: { title: string; description: string }[];
  certifications: string[];
  updatedAt?: string; // ISO date, used by sitemap
}

export const capabilities: Capability[] = [
  {
    id: "software-systems",
    slug: "software-systems",
    title: "Software Systems",
    subtitle: "Scalable, resilient systems for modern enterprises",
    description: "We design and implement robust software architectures that form the backbone of complex digital operations. From microservices to event-driven paradigms, our solutions ensure high availability, security, and long-term maintainability.",
    icon: "Layers",
    specializations: [
      { title: "Cloud-Native Design", description: "Architectures optimized for AWS, Azure, and GCP." },
      { title: "Microservices", description: "Decoupled services for independent scaling and deployment." },
      { title: "Event-Driven Systems", description: "Real-time processing architectures." }
    ],
    process: [
      { title: "Assessment", description: "Evaluating existing systems and requirements." },
      { title: "Design", description: "Creating detailed architectural blueprints." },
      { title: "Implementation", description: "Guiding development teams through execution." }
    ],
    certifications: []
  },
  {
    id: "industrial-automation",
    slug: "industrial-automation",
    title: "Industrial Automation",
    subtitle: "Optimizing physical operations through intelligent control",
    description: "Our industrial automation services bridge the gap between hardware and software, creating intelligent, responsive, and safe operational environments for heavy industry and manufacturing.",
    icon: "Cpu",
    specializations: [
      { title: "PLC & SCADA Integration", description: "Seamless control system integration." },
      { title: "Robotics Control", description: "Programming and orchestrating robotic workcells." },
      { title: "IoT Sensor Networks", description: "Real-time data collection and analysis." }
    ],
    process: [
      { title: "Site Survey", description: "Analyzing current operational workflows." },
      { title: "System Engineering", description: "Designing the control architecture." },
      { title: "Commissioning", description: "Testing and deploying the automated systems." }
    ],
    certifications: []
  },
  {
    id: "mechanical-engineering",
    slug: "mechanical-engineering",
    title: "Mechanical Engineering",
    subtitle: "Precision engineering for complex physical systems",
    description: "From conceptual design to structural analysis, we provide comprehensive mechanical engineering services that ensure the reliability and safety of critical infrastructure and machinery.",
    icon: "Settings",
    specializations: [
      { title: "Structural Analysis", description: "FEA and stress testing for critical components." },
      { title: "Machine Design", description: "Custom machinery for specialized applications." },
      { title: "Retrofit Engineering", description: "Upgrading legacy equipment for modern standards." }
    ],
    process: [
      { title: "Conceptualization", description: "Developing initial design concepts." },
      { title: "Detailed Engineering", description: "Creating manufacturing-ready specifications." },
      { title: "Validation", description: "Rigorous testing and compliance verification." }
    ],
    certifications: ["Professional Engineer (PE)"]
  },
  {
    id: "forensic-engineering",
    slug: "forensic-engineering",
    title: "Forensic Engineering",
    subtitle: "Root cause analysis and failure investigation",
    description: "When systems fail, our forensic engineering team provides objective, scientifically rigorous investigations to determine the root cause, providing critical insights for legal, insurance, and operational teams.",
    icon: "Search",
    specializations: [
      { title: "Failure Analysis", description: "Determining why materials or structures failed." },
      { title: "Accident Reconstruction", description: "Recreating events leading to failure." },
      { title: "Expert Witness", description: "Providing unbiased testimony in legal proceedings." }
    ],
    process: [
      { title: "Site Inspection", description: "Documenting the scene and collecting evidence." },
      { title: "Laboratory Analysis", description: "Testing materials and components." },
      { title: "Reporting", description: "Delivering comprehensive findings and conclusions." }
    ],
    certifications: []
  },
  {
    id: "crane-engineering",
    slug: "crane-engineering",
    title: "Crane Engineering",
    subtitle: "Structural analysis, design review, and forensic investigation of overhead crane systems",
    description: "Engineering services for overhead crane and hoist systems. We engineer the analysis, design review, and root-cause investigation layer — we don't sell, install, or operate crane equipment. Our work supports owners, operators, and counsel who need independent engineering judgment on lift systems.",
    icon: "Construction",
    specializations: [
      { title: "Structural Analysis", description: "Finite element analysis of girders, end trucks, runways, and supporting steel." },
      { title: "Design Review", description: "Independent review of new designs against ASME B30, CMAA 70/74, and OSHA 1910.179." },
      { title: "Forensic Failure Analysis", description: "Root-cause investigation of wire rope, hoist, structural, and electrical failures." },
      { title: "Retrofit & Modernization", description: "Engineering specifications for capacity changes, control upgrades, and structural reinforcement." },
      { title: "Compliance Documentation", description: "Periodic inspection support, engineering letters, and code analysis." }
    ],
    process: [
      { title: "Site Survey", description: "On-site assessment of equipment, operating environment, and existing documentation." },
      { title: "Engineering Analysis", description: "FEA, calculations, and review against applicable codes." },
      { title: "Report & Specifications", description: "Documented findings, recommendations, and stamped specifications where required." }
    ],
    certifications: [
      "Licensed Professional Engineer (Washington)",
      "ASME B30 / CMAA 70 / CMAA 74 familiarity",
      "OSHA 1910.179 expertise"
    ]
  },
  {
    id: "factory-design",
    slug: "factory-design",
    title: "Factory Design",
    subtitle: "Production facility layout, material handling, and process flow engineering",
    description: "Engineering services for industrial facility design — from greenfield production lines to brownfield retrofit. We design and optimize the layout, material flow, and capacity of manufacturing and fulfillment operations, with emphasis on throughput and integration with downstream automation.",
    icon: "Factory",
    specializations: [
      { title: "Facility Layout", description: "Greenfield and brownfield production line, workstation, and workflow design." },
      { title: "Material Handling", description: "Conveyance, sortation, and storage system specification and integration." },
      { title: "Process Flow Optimization", description: "Throughput analysis, bottleneck identification, and line-balancing." },
      { title: "Capacity Planning", description: "Sizing for current operations and projected demand growth." },
      { title: "Automation Integration", description: "Coordination with PLC, SCADA, and robotic systems on the production floor." }
    ],
    process: [
      { title: "Discovery", description: "Operational walkthrough, throughput baseline, and constraint mapping." },
      { title: "Concept Design", description: "Layout options, material flow diagrams, and trade-off analysis." },
      { title: "Detail Engineering", description: "Specifications, drawings, and equipment selection for execution." }
    ],
    certifications: []
  }
];

export function getCapabilityBySlug(slug: string): Capability | undefined {
  return capabilities.find(c => c.slug === slug);
}
