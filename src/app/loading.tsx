import { Loader2 } from "lucide-react"

export default function Loading() {
  return (
    <section className="dark-section min-h-[60vh] flex items-center justify-center">
      <Loader2 className="w-10 h-10 text-primary animate-spin" aria-label="Loading" />
    </section>
  )
}
