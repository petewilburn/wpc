// Shared Inter font loader for opengraph-image routes.
//
// Why a runtime fetch instead of a bundled file: avoids committing a 250KB
// binary font to the repo, and the result is cached aggressively by social
// platforms after first generation. The IE11 User-Agent makes Google Fonts
// serve woff (not woff2), which is what Satori — the engine behind
// next/og's ImageResponse — actually supports.

let cachedBold: ArrayBuffer | null = null

export async function loadInterBold(): Promise<ArrayBuffer> {
  if (cachedBold) return cachedBold

  const css = await fetch(
    "https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap",
    {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; rv:11.0) like Gecko",
      },
    },
  ).then((res) => res.text())

  const match = css.match(/src:\s*url\((https:\/\/[^)]+)\)\s*format\('woff'\)/)
  if (!match) {
    throw new Error("Could not extract Inter woff URL from Google Fonts CSS")
  }

  const data = await fetch(match[1]).then((res) => res.arrayBuffer())
  cachedBold = data
  return data
}
