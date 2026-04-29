import * as React from "react"
import Link from "next/link"
import Image from "next/image"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { MobileNav } from "./MobileNav"
import { navigation } from "@/data/navigation"
import { Map, Zap, Settings, ShieldAlert, ChevronRight } from "lucide-react"

const iconMap: Record<string, React.ReactNode> = {
  "Software Systems": <Map className="w-5 h-5 text-primary" />,
  "Industrial Automation": <Zap className="w-5 h-5 text-primary" />,
  "Mechanical Engineering": <Settings className="w-5 h-5 text-primary" />,
  "Forensic Engineering": <ShieldAlert className="w-5 h-5 text-primary" />
}

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b dark-section border-dark-border">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-8">
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="h-12 w-auto flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.svg" alt="Wilburn Pacific" className="h-10 w-auto" />
          </div>
          <div className="flex flex-col">
            <span className="font-mono font-bold text-lg leading-none tracking-tighter text-primary">WILBURN</span>
            <span className="font-mono text-xs text-dark-muted tracking-widest uppercase">PACIFIC</span>
            <span className="font-mono text-xs text-dark-muted tracking-widest uppercase">COMPANY</span>
          </div>
        </Link>
        
        <div className="hidden lg:flex flex-1 justify-center">
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-dark-fg text-base hover:text-primary data-[popup-open]:text-primary">
                  Capabilities
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-dropdown text-dropdown-foreground">
                    {navigation.capabilities.map((capability) => (
                      <ListItem
                        key={capability.title}
                        title={capability.title}
                        href={capability.href}
                        icon={iconMap[capability.title]}
                      >
                        {capability.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-dark-fg text-base hover:text-primary data-[popup-open]:text-primary">
                  Industries
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-dropdown text-dropdown-foreground">
                    <li className="row-span-3">
                      <NavigationMenuLink
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/industries"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium text-dropdown-foreground">
                          All Industries
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Explore our cross-industry expertise and tailored solutions for specialized sectors.
                        </p>
                      </NavigationMenuLink>
                    </li>
                    {navigation.industries.map((group) => (
                      <ListItem
                        key={group.title}
                        title={group.title}
                        href={group.href}
                      >
                        {group.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-dark-fg text-base hover:text-primary data-[popup-open]:text-primary">
                  Resources
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-dropdown text-dropdown-foreground">
                    {navigation.resources.map((resource) => (
                      <ListItem
                        key={resource.title}
                        title={resource.title}
                        href={resource.href}
                      >
                        {resource.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-dark-fg text-base hover:text-primary data-[popup-open]:text-primary">
                  Company
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-dropdown text-dropdown-foreground">
                    {navigation.company.map((item) => (
                      <ListItem
                        key={item.title}
                        title={item.title}
                        href={item.href}
                      >
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center space-x-4">
          {/* <Link href="/company/contact" className="hidden lg:inline-flex">
            <Button variant="default" className="bg-primary text-primary-foreground hover:bg-primary-hover-bg hover:text-foreground group border border-transparent hover:border-border transition-all duration-200">
              Contact Us <ChevronRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link> */}
          <div className="lg:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon?: React.ReactNode }
>(({ className, title, children, icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink
        ref={ref}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors group text-left",
          className
        )}
        {...props}
      >
        <div className="flex items-center gap-3">
          {icon && <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-200">{icon}</div>}
          <div>
            <div className="text-sm font-medium leading-none text-dropdown-foreground group-hover:text-primary transition-colors">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1.5 group-hover:text-muted-foreground">
              {children}
            </p>
          </div>
        </div>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
