"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function ResourceTabNav() {
  const pathname = usePathname()
  
  const tabs = [
    { name: "Blog", href: "/resources/blog" },
    { name: "Case Studies", href: "/resources/case-studies" },
    { name: "Guides & Whitepapers", href: "/resources/guides" },
  ]

  return (
    <div className="border-b border-border">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          {tabs.map((tab) => {
            const isActive = pathname.startsWith(tab.href)
            return (
              <Link
                key={tab.name}
                href={tab.href}
                className={cn(
                  isActive
                    ? "border-primary text-primary"
                    : "border-transparent text-muted-foreground hover:border-border hover:text-foreground",
                  "whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium transition-colors"
                )}
                aria-current={isActive ? "page" : undefined}
              >
                {tab.name}
              </Link>
            )
          })}
        </nav>
      </div>
    </div>
  )
}
