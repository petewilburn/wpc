import { ImageResponse } from "next/og"
import { getCapabilityBySlug } from "@/data/capabilities"
import { loadInterBold } from "@/lib/og-fonts"

// Brand colors mirrored from src/app/globals.css (see opengraph-image.tsx
// at the app root for rationale on inlining hex values).
const BRAND_DARK_BG = "#0f1720"
const BRAND_PRIMARY = "#eed202"
const BRAND_HEADING = "#ffffff"
const BRAND_MUTED = "#94a3b8"

export const alt = "Wilburn Pacific capability"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const capability = getCapabilityBySlug(slug)
  const interBold = await loadInterBold()

  const title = capability?.title ?? "Wilburn Pacific"
  const subtitle = capability?.subtitle ?? ""

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          backgroundColor: BRAND_DARK_BG,
          padding: "80px",
          fontFamily: "Inter",
        }}
      >
        <div
          style={{
            color: BRAND_PRIMARY,
            fontSize: 32,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: 24,
          }}
        >
          Wilburn Pacific · Capability
        </div>
        <div
          style={{
            color: BRAND_HEADING,
            fontSize: 96,
            lineHeight: 1.05,
            fontWeight: 700,
            marginBottom: 24,
            maxWidth: 1000,
          }}
        >
          {title}
        </div>
        {subtitle ? (
          <div style={{ color: BRAND_MUTED, fontSize: 36, maxWidth: 1000 }}>
            {subtitle}
          </div>
        ) : null}
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Inter", data: interBold, style: "normal", weight: 700 }],
    },
  )
}
