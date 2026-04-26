import { ContactForm } from "@/components/contact/ContactForm"
import { MapPin, Mail, Phone } from "lucide-react"

export const metadata = {
  title: "Contact Us | Wilburn Pacific",
  description: "Get in touch with our engineering team.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="dark-section pt-32 pb-24 border-b border-white/10">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-dark-fg mb-6">
            Get in Touch
          </h1>
          {/* <p className="text-xl md:text-2xl text-dark-muted max-w-3xl mx-auto leading-relaxed">
            Our engineering team is ready to discuss your project requirements.
          </p> */}
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24">
            
            {/* Contact Info Sidebar */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Contact Information</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  We work best with teams who value precision and long-term thinking. If that sounds like your organization, we'd welcome the conversation.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Headquarters</h3>
                    <p className="text-muted-foreground">Walla Walla, Washington<br />United States</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
              <ContactForm />
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
