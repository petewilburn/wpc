import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export function CTASection({
  title = "Ready to discuss your project?",
  subtitle = "Our engineering team is ready to help you architect, build, and scale your next mission-critical system.",
  buttonText = "Contact Us",
  href = "/company/contact"
}: {
  title?: string
  subtitle?: string
  buttonText?: string
  href?: string
}) {
  return (
    <section className="dark-section py-24">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-dark-fg">
            {title}
          </h2>
          <p className="text-xl text-dark-muted">
            {subtitle}
          </p>
          <div className="pt-4">
            <Link href={href}>
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-white/10 hover:text-dark-fg text-lg h-14 px-8 group border border-transparent hover:border-primary transition-all duration-200">
                {buttonText} <ChevronRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
