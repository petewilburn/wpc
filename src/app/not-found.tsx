import Link from "next/link"

export const metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <section className="dark-section min-h-[60vh] flex items-center justify-center pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-8 max-w-2xl text-center">
        <p className="font-mono text-7xl md:text-9xl text-primary mb-6 tracking-tight">404</p>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-dark-heading mb-4">
          Page not found
        </h1>
        <p className="text-lg text-dark-muted mb-10">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="text-primary underline-offset-4 hover:underline transition-colors"
        >
          Return home
        </Link>
      </div>
    </section>
  )
}
