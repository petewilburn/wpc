import { ImageResponse } from "next/og"
import { loadInterBold } from "@/lib/og-fonts"

// Brand colors mirrored from src/app/globals.css. CSS variables don't
// resolve inside ImageResponse JSX (Satori parses raw style objects), so
// these hex values are the documented exception to the no-raw-colors rule.
const BRAND_DARK_BG = "#0f1720" // --color-dark-bg
const BRAND_PRIMARY = "#eed202" // --color-primary
const BRAND_HEADING = "#ffffff" // --color-dark-heading
const BRAND_MUTED = "#94a3b8"   // --color-dark-muted

export const alt = "Wilburn Pacific"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image() {
  const interBold = await loadInterBold()

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
            fontSize: 36,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: 24,
          }}
        >
          Wilburn Pacific
        </div>
        <div
          style={{
            color: BRAND_HEADING,
            fontSize: 92,
            lineHeight: 1.05,
            fontWeight: 700,
            marginBottom: 32,
            maxWidth: 1000,
          }}
        >
          Engineering the systems that power modern industry.
        </div>
        <div style={{ color: BRAND_MUTED, fontSize: 32 }}>
          Software · Automation · Mechanical · Forensics
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Inter", data: interBold, style: "normal", weight: 700 }],
    },
  )
}
