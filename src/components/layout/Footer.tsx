"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { navigation } from "@/data/navigation"
import { LegalModals } from "./LegalModals"

export function Footer() {
  const [modalType, setModalType] = React.useState<'privacy' | 'terms' | 'disclaimer' | null>(null)
  const [isModalOpen, setIsModalOpen] = React.useState(false)

  const openModal = (type: 'privacy' | 'terms' | 'disclaimer') => {
    setModalType(type)
    setIsModalOpen(true)
  }

  return (
    <footer className="dark-section border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Logo & Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo_teal.svg" alt="Wilburn Pacific" className="h-10 w-auto" />
              <div className="flex flex-col">
                <span className="font-mono font-bold text-lg leading-none tracking-tighter text-primary">WILBURN</span>
                <span className="font-mono text-xs text-dark-muted tracking-widest uppercase">PACIFIC</span>
                <span className="font-mono text-xs text-dark-muted tracking-widest uppercase">COMPANY</span>
              </div>
            </div>
            <p className="text-dark-muted text-sm leading-relaxed max-w-xs">
              Engineering dynamic systems, reliable machinery, robust software, and precision automation for mission-critical operations.
            </p>
          </div>

          {/* Column 2: Capabilities & Resources */}
          <div>
            <h3 className="font-semibold text-dark-fg mb-4">Capabilities</h3>
            <ul className="space-y-3 mb-8">
              {navigation.capabilities.map(item => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-dark-muted hover:text-white transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="font-semibold text-dark-fg mb-4">Resources</h3>
            <ul className="space-y-3">
              {navigation.resources.map(item => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-dark-muted hover:text-white transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Industries */}
          <div>
            <h3 className="font-semibold text-dark-fg mb-4">Industries</h3>
            <ul className="space-y-3">
              {navigation.industries.map(item => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-dark-muted hover:text-white transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Company & Contact */}
          <div>
            <h3 className="font-semibold text-dark-fg mb-4">Company</h3>
            <ul className="space-y-3 mb-8">
              {navigation.company.map(item => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-dark-muted hover:text-white transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="font-semibold text-dark-fg mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-dark-muted">
              <li>Walla Walla, Washington</li>
              <Link href="/company/contact">
                <li className="hover:text-white transition-colors">Contact Us</li>
              </Link>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-sm text-dark-muted">
          <p>© {new Date().getFullYear()} Wilburn Pacific. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <button onClick={() => openModal('privacy')} className="hover:text-white transition-colors">Privacy Policy</button>
            <button onClick={() => openModal('terms')} className="hover:text-white transition-colors">Terms of Service</button>
            <button onClick={() => openModal('disclaimer')} className="hover:text-white transition-colors">Disclaimer</button>
          </div>
        </div>
      </div>

      <LegalModals isOpen={isModalOpen} setIsOpen={setIsModalOpen} type={modalType} />
    </footer>
  )
}
