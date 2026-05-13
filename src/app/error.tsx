"use client"

import * as Sentry from "@sentry/nextjs"
import Link from "next/link"
import { useEffect } from "react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    Sentry.captureException(error)
  }, [error])

  return (
    <section className="dark-section min-h-[60vh] flex items-center justify-center pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-8 max-w-2xl text-center">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-dark-heading mb-4">
          Something went wrong
        </h1>
        <p className="text-lg text-dark-muted mb-10">
          An unexpected error occurred. Our team has been notified.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
          <button
            onClick={() => reset()}
            className="text-primary underline-offset-4 hover:underline transition-colors"
          >
            Try again
          </button>
          <Link
            href="/"
            className="text-primary underline-offset-4 hover:underline transition-colors"
          >
            Return home
          </Link>
        </div>
        {process.env.NODE_ENV === "development" && error.message ? (
          <pre className="mt-12 p-4 bg-dark-hover-bg border border-dark-border rounded text-left text-sm font-mono text-dark-muted overflow-auto">
            {error.message}
          </pre>
        ) : null}
      </div>
    </section>
  )
}
