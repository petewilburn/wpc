"use client"

import * as React from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export function LegalModals({
  isOpen,
  setIsOpen,
  type
}: {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
  type: 'privacy' | 'terms' | 'disclaimer' | null
}) {
  const content = {
    privacy: {
      title: "Privacy Policy",
      body: (
        <div className="space-y-4 text-sm text-muted-foreground">
          <p>Last updated: April 2026</p>
          <h3 className="text-foreground font-semibold">1. Information We Collect</h3>
          <p>We collect information you provide directly to us when using our contact forms, including your name, email address, company name, and phone number. We also collect anonymous usage data through standard web analytics.</p>
          <h3 className="text-foreground font-semibold">2. How We Use Your Information</h3>
          <p>We use the information we collect to respond to your inquiries, provide our consulting services, and improve our website experience. We do not sell or share your personal information with third parties for marketing purposes.</p>
          <h3 className="text-foreground font-semibold">3. Data Security</h3>
          <p>We implement appropriate technical and organizational measures to protect the security of your personal information. However, please be aware that no security measures are perfect or impenetrable.</p>
        </div>
      )
    },
    terms: {
      title: "Terms of Service",
      body: (
        <div className="space-y-4 text-sm text-muted-foreground">
          <p>Last updated: April 2026</p>
          <h3 className="text-foreground font-semibold">1. Acceptance of Terms</h3>
          <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>
          <h3 className="text-foreground font-semibold">2. Intellectual Property</h3>
          <p>The website and its original content, features, and functionality are owned by Wilburn Pacific and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.</p>
          <h3 className="text-foreground font-semibold">3. Disclaimer of Warranties</h3>
          <p>Our website is provided "as is" without any representations or warranties, express or implied. Wilburn Pacific makes no representations or warranties in relation to this website or the information and materials provided on this website.</p>
          <h3 className="text-foreground font-semibold">4. Limitation of Liability</h3>
          <p>Wilburn Pacific shall not be liable for any special or consequential damages that result from the use of, or the inability to use, the materials on this site.</p>
        </div>
      )
    },
    disclaimer: {
      title: "Website Disclaimer",
      body: (
        <div className="space-y-4 text-sm text-muted-foreground">
          <p>The information contained on the Wilburn Pacific website is for general information purposes only.</p>
          <p>Wilburn Pacific assumes no responsibility for errors or omissions in the contents on the Service.</p>
          <p>In no event shall Wilburn Pacific be liable for any special, direct, indirect, consequential, or incidental damages or any damages whatsoever, whether in an action of contract, negligence or other tort, arising out of or in connection with the use of the Service or the contents of the Service. Wilburn Pacific reserves the right to make additions, deletions, or modification to the contents on the Service at any time without prior notice.</p>
          <p>This website may contain links to external websites that are not provided or maintained by or in any way affiliated with Wilburn Pacific. Please note that Wilburn Pacific does not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.</p>
        </div>
      )
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        {type && (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl">{content[type].title}</DialogTitle>
            </DialogHeader>
            <div className="mt-4">
              {content[type].body}
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
