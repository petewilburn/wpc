import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  metadataBase: new URL("https://wilburnpacific.com"),
  title: {
    default: "Wilburn Pacific | Engineering & Automation",
    template: "%s | Wilburn Pacific",
  },
  description: "Engineering dynamic systems, reliable machinery, robust software, and precision automation for mission-critical operations.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Wilburn Pacific",
  },
  robots: {
    index: true,
    follow: true,
  },
  // Google Search Console — replace with your verification code
  // Get it from: https://search.google.com/search-console → Add Property → HTML tag method
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION ?? "",
  },
};

// JSON-LD Organization structured data for Google Knowledge Panel
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Wilburn Pacific Company",
  url: "https://wilburnpacific.com",
  logo: "https://wilburnpacific.com/logo_teal.svg",
  description: "Engineering dynamic systems, reliable machinery, robust software, and precision automation for mission-critical operations.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Walla Walla",
    addressRegion: "WA",
    addressCountry: "US",
  },
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans min-h-screen bg-background text-foreground flex flex-col">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
