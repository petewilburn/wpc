import { cn } from "@/lib/utils"

export function SectionHeading({
  title,
  subtitle,
  align = "left",
  className
}: {
  title: string
  subtitle?: string
  align?: "left" | "center"
  className?: string
}) {
  return (
    <div className={cn(
      "space-y-4 mb-12",
      align === "center" && "text-center mx-auto",
      className
    )}>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">{title}</h2>
      {subtitle && (
        <p className={cn(
          "text-lg text-muted-foreground",
          align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl"
        )}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
