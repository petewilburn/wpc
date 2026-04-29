import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Zap, ShieldAlert, Settings, Map } from "lucide-react"

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="dark-section min-h-[85vh] flex items-center relative overflow-hidden">
        {/* Geometric background shapes — right side */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Angular shapes inspired by Liminal — CSS-only parallelograms */}
          <div className="absolute top-0 right-0 w-[55%] h-full">
            <div className="absolute inset-0 bg-shape/[0.03] skew-x-[-12deg] translate-x-[10%]" />
            <div className="absolute top-[20%] right-[5%] w-[40%] h-[60%] bg-shape/[0.02] skew-x-[-12deg]" />
            <div className="absolute top-[10%] right-[15%] w-[20%] h-[80%] bg-shape/[0.04] skew-x-[-12deg]" />
          </div>
          {/* Gradient overlay to fade shapes into text area */}
          <div className="absolute inset-0 bg-gradient-to-r from-dark-bg via-dark-bg/95 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-dark-heading mb-6 leading-tight">
              Engineering the <br />
              <span className="text-primary">systems that power</span> <br />
              modern industry.
            </h1>
            <p className="text-xl md:text-2xl text-dark-muted mb-10 max-w-2xl leading-relaxed">
              Wilburn Pacific engineers dynamic industrial systems from the ground up or built to suit existing infrastructure. We bridge mechanical expertise with software, automation, and forensic engineering to keep the core of your operations running reliably and safely.
            </p>
            {/* <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/company/contact">
                <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg bg-primary text-primary-foreground hover:bg-dark-hover-bg hover:text-dark-fg border border-transparent hover:border-primary transition-all duration-200">
                  Discuss Your Project
                </Button>
              </Link>
              <Link href="/capabilities/software-systems">
                <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-lg border-dark-border text-dark-heading hover:bg-dark-hover-bg hover:text-dark-heading bg-transparent">
                  Explore Capabilities
                </Button>
              </Link>
            </div> */}
          </div>
        </div>
      </section>

      {/* Core Focus Areas Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">Core Competencies</h2>
            {/* <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our multidisciplinary engineering teams provide end-to-end solutions for complex operational challenges.
            </p> */}
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/capabilities/software-systems" className="group block">
              <div className="bg-card text-card-foreground border border-border rounded-xl p-8 shadow-sm group-hover:shadow-md transition-all group-hover:border-primary/30 h-full flex flex-col">
                <Map className="w-10 h-10 text-primary mb-6" />
                <h3 className="text-2xl font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors">Software Systems</h3>
                <p className="text-muted-foreground flex-1 mb-6 leading-relaxed">
                  Cloud-native platforms, microservices, and robust backend systems designed for high availability and scale.
                </p>
                <div className="text-primary font-medium flex items-center mt-auto">
                  Learn more <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>

            <Link href="/capabilities/industrial-automation" className="group block">
              <div className="bg-card text-card-foreground border border-border rounded-xl p-8 shadow-sm group-hover:shadow-md transition-all group-hover:border-primary/30 h-full flex flex-col">
                <Zap className="w-10 h-10 text-primary mb-6" />
                <h3 className="text-2xl font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors">Industrial Automation</h3>
                <p className="text-muted-foreground flex-1 mb-6 leading-relaxed">
                  PLC integration, robotics control, and SCADA systems that bridge the gap between physical and digital.
                </p>
                <div className="text-primary font-medium flex items-center mt-auto">
                  Learn more <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>

            <Link href="/capabilities/mechanical-engineering" className="group block">
              <div className="bg-card text-card-foreground border border-border rounded-xl p-8 shadow-sm group-hover:shadow-md transition-all group-hover:border-primary/30 h-full flex flex-col">
                <Settings className="w-10 h-10 text-primary mb-6" />
                <h3 className="text-2xl font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors">Mechanical Engineering</h3>
                <p className="text-muted-foreground flex-1 mb-6 leading-relaxed">
                  Structural analysis, machine design, and physical infrastructure engineering for heavy industry.
                </p>
                <div className="text-primary font-medium flex items-center mt-auto">
                  Learn more <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>

            <Link href="/capabilities/forensic-engineering" className="group block">
              <div className="bg-card text-card-foreground border border-border rounded-xl p-8 shadow-sm group-hover:shadow-md transition-all group-hover:border-primary/30 h-full flex flex-col">
                <ShieldAlert className="w-10 h-10 text-primary mb-6" />
                <h3 className="text-2xl font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors">Forensic Engineering</h3>
                <p className="text-muted-foreground flex-1 mb-6 leading-relaxed">
                  Rigorous root-cause analysis, material testing, and expert testimony for operational failures and accidents.
                </p>
                <div className="text-primary font-medium flex items-center mt-auto">
                  Learn more <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      {/* <section className="dark-section py-24 text-center">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-dark-heading mb-6">Ready to solve your toughest challenges?</h2>
          <p className="text-xl text-dark-muted mb-10 max-w-2xl mx-auto">
            Our teams are available for comprehensive project delivery or specialized consulting.
          </p>
          <Link href="/company/contact">
            <Button size="lg" className="h-14 px-8 text-lg bg-primary text-primary-foreground hover:bg-dark-hover-bg hover:text-dark-fg border border-transparent hover:border-primary transition-all duration-200">
              Contact Our Engineers
            </Button>
          </Link>
        </div>
      </section> */}
    </div>
  );
}
