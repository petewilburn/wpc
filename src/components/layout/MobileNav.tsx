"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { navigation } from "@/data/navigation"
import { cn } from "@/lib/utils"

export function MobileNav() {
  const [isOpen, setIsOpen] = React.useState(false)

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  return (
    <>
      <Button
        variant="ghost"
        className="lg:hidden text-gray-200 hover:text-white hover:bg-white/10"
        size="icon"
        onClick={() => setIsOpen(true)}
      >
        <Menu className="h-6 w-6" />
        <span className="sr-only">Open menu</span>
      </Button>

      {isOpen && (
        <>
          {/* Backdrop — click to dismiss */}
          <div
            className="fixed inset-0 z-40 bg-black/40 lg:hidden"
            onClick={() => setIsOpen(false)}
          />

          {/* Dropdown panel */}
          <div className="fixed top-16 right-4 z-50 w-72 max-h-[calc(100vh-5rem)] dark-section lg:hidden flex flex-col rounded-xl shadow-2xl ring-1 ring-white/10 overflow-hidden">
            <div className="flex items-center justify-between px-5 py-3 border-b border-white/10">
              <span className="font-bold text-sm text-dark-fg uppercase tracking-wider">Navigation</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-dark-muted hover:text-white hover:bg-white/10 h-8 w-8"
              >
                <X className="h-5 w-5" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>

            <div className="overflow-y-auto p-4 space-y-2">
              <MobileNavSection title="Capabilities" items={navigation.capabilities} onClick={() => setIsOpen(false)} />
              <MobileNavSection title="Industries" items={navigation.industries} onClick={() => setIsOpen(false)} />
              <MobileNavSection title="Resources" items={navigation.resources} onClick={() => setIsOpen(false)} />
              <MobileNavSection title="Company" items={navigation.company} onClick={() => setIsOpen(false)} />
            </div>
          </div>
        </>
      )}
    </>
  )
}

function MobileNavSection({ title, items, onClick }: { title: string, items: any[], onClick: () => void }) {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
      <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md font-medium text-lg h-12 px-2 text-dark-fg hover:text-primary transition-colors">
        {title}
        <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", isOpen && "rotate-180")} />
      </CollapsibleTrigger>
      <CollapsibleContent className="space-y-2 px-4 py-2">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClick}
            className="block py-2 text-dark-muted hover:text-primary transition-colors"
          >
            {item.title}
          </Link>
        ))}
      </CollapsibleContent>
    </Collapsible>
  )
}

