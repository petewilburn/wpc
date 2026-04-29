import { Industry } from "@/data/industries"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronRight, Factory, Flame, Ship, Wrench, Cpu, HardDrive, Bot, Cloud, Server, Code, ShoppingCart, Shield, Truck, Globe, Train, Briefcase, Landmark, Rocket, CheckSquare, BarChart, Users, Store, Megaphone, Search, FileText, Target, TrendingUp, Heart, Coffee, Leaf } from "lucide-react"

const iconMap: Record<string, React.ReactNode> = {
  Factory: <Factory className="w-8 h-8 text-primary" />,
  Flame: <Flame className="w-8 h-8 text-primary" />,
  Ship: <Ship className="w-8 h-8 text-primary" />,
  Wrench: <Wrench className="w-8 h-8 text-primary" />,
  Cpu: <Cpu className="w-8 h-8 text-primary" />,
  HardDrive: <HardDrive className="w-8 h-8 text-primary" />,
  Bot: <Bot className="w-8 h-8 text-primary" />,
  Cloud: <Cloud className="w-8 h-8 text-primary" />,
  Server: <Server className="w-8 h-8 text-primary" />,
  Code: <Code className="w-8 h-8 text-primary" />,
  ShoppingCart: <ShoppingCart className="w-8 h-8 text-primary" />,
  Shield: <Shield className="w-8 h-8 text-primary" />,
  Truck: <Truck className="w-8 h-8 text-primary" />,
  Globe: <Globe className="w-8 h-8 text-primary" />,
  Train: <Train className="w-8 h-8 text-primary" />,
  Briefcase: <Briefcase className="w-8 h-8 text-primary" />,
  Landmark: <Landmark className="w-8 h-8 text-primary" />,
  Rocket: <Rocket className="w-8 h-8 text-primary" />,
  CheckSquare: <CheckSquare className="w-8 h-8 text-primary" />,
  BarChart: <BarChart className="w-8 h-8 text-primary" />,
  Users: <Users className="w-8 h-8 text-primary" />,
  Store: <Store className="w-8 h-8 text-primary" />,
  Megaphone: <Megaphone className="w-8 h-8 text-primary" />,
  Search: <Search className="w-8 h-8 text-primary" />,
  FileText: <FileText className="w-8 h-8 text-primary" />,
  Target: <Target className="w-8 h-8 text-primary" />,
  TrendingUp: <TrendingUp className="w-8 h-8 text-primary" />,
  Heart: <Heart className="w-8 h-8 text-primary" />,
  Coffee: <Coffee className="w-8 h-8 text-primary" />,
  Leaf: <Leaf className="w-8 h-8 text-primary" />,
}

export function IndustryCard({ industry }: { industry: Industry }) {
  return (
    <Card id={industry.id} className="bg-card text-card-foreground border-border shadow-sm flex flex-col group hover:shadow-md transition-shadow">
      <CardContent className="pt-8 flex flex-col flex-1">
        <div className="mb-6 p-3 bg-primary/10 w-fit rounded-lg group-hover:scale-110 transition-transform duration-300">
          {iconMap[industry.icon] || <Factory className="w-8 h-8 text-primary" />}
        </div>
        <h3 className="text-xl font-bold text-card-foreground mb-3">{industry.name}</h3>
        <p className="text-muted-foreground leading-relaxed flex-1 mb-8">
          {industry.description}
        </p>
        {/* <div className="mt-auto pt-4 border-t border-border">
          <Link href={`/company/contact?interest=${industry.id}`}>
            <Button variant="ghost" className="w-full justify-between text-primary hover:text-primary hover:bg-primary/5 px-0 font-medium">
              Discuss your needs <ChevronRight className="w-4 h-4" />
            </Button>
          </Link>
        </div> */}
      </CardContent>
    </Card>
  )
}
