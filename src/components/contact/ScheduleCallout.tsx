"use client"

import Cal, { getCalApi } from "@calcom/embed-react"
import { useEffect } from "react"

const CAL_LINK = "wilburnpacific/consultation"

export function ScheduleCallout() {
  useEffect(() => {
    ;(async () => {
      const cal = await getCalApi()
      cal("ui", {
        theme: "light",
        cssVarsPerTheme: {
          // Brand token: --color-primary
          light: { "cal-brand": "#eed202" },
          dark: { "cal-brand": "#eed202" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      })
    })()
  }, [])

  return (
    <div className="w-full">
      <Cal
        calLink={CAL_LINK}
        style={{ width: "100%", height: "100%", overflow: "scroll" }}
        config={{ layout: "month_view" }}
      />
    </div>
  )
}
