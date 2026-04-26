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
  }
];

export function getCapabilityBySlug(slug: string): Capability | undefined {
  return capabilities.find(c => c.slug === slug);
}
