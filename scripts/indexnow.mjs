import fs from "node:fs/promises";
import path from "node:path";

const HOST = "wilburnpacific.com";
const SITEMAP = `https://${HOST}/sitemap.xml`;
const ENDPOINT = "https://api.indexnow.org/indexnow";

const publicDir = path.join(process.cwd(), "public");
const files = await fs.readdir(publicDir);
const keyFile = files.find((f) => /^[a-f0-9]{8,128}\.txt$/i.test(f));
if (!keyFile) {
  console.error("No IndexNow key file found in public/ (expected a hex-named .txt file).");
  process.exit(1);
}
const key = (await fs.readFile(path.join(publicDir, keyFile), "utf8")).trim();

const sitemapRes = await fetch(SITEMAP);
if (!sitemapRes.ok) {
  console.error(`Sitemap fetch failed: ${sitemapRes.status} ${sitemapRes.statusText}`);
  process.exit(1);
}
const xml = await sitemapRes.text();
const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());

if (urlList.length === 0) {
  console.error("Sitemap returned zero URLs — refusing to submit.");
  process.exit(1);
}

const res = await fetch(ENDPOINT, {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: HOST,
    key,
    keyLocation: `https://${HOST}/${keyFile}`,
    urlList,
  }),
});

const body = await res.text().catch(() => "");
console.log(
  `IndexNow ${res.status}: submitted ${urlList.length} URLs${body ? ` — ${body}` : ""}`,
);
if (res.status >= 400) process.exit(1);
