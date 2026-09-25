/*
  Generates public/sitemap.xml for STATIC hosting (IIS).

  Why: src/routes/sitemap[.]xml.ts is a TanStack Start *server* handler, so it
  only exists when running the Node/SSR server. `vite build` (dist/) is a pure
  SPA — /sitemap.xml would fall through to index.html. A static sitemap file
  fixes SEO on IIS without any server code.

  Slugs are parsed from source (no TS compilation needed), so this stays fast.
  Set SITE_URL env to override the default canonical origin.
*/
import fs from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const SITE_URL = (process.env.SITE_URL ?? "https://www.awesomeevents.ae").replace(/\/+$/, "");

const staticRoutes = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/services", changefreq: "monthly", priority: "0.9" },
  { path: "/venues", changefreq: "monthly", priority: "0.8" },
  { path: "/portfolio", changefreq: "monthly", priority: "0.7" },
  { path: "/process", changefreq: "yearly", priority: "0.6" },
  { path: "/contact", changefreq: "yearly", priority: "0.7" },
  { path: "/wedding-guide", changefreq: "weekly", priority: "0.8" },
  { path: "/privacy", changefreq: "yearly", priority: "0.2" },
];

async function serviceSlugs() {
  const src = await fs.readFile(path.join(ROOT, "src/lib/content/services.ts"), "utf8");
  return [...new Set([...src.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]))].map(
    (slug) => ({ path: `/wedding-services/${slug}`, changefreq: "monthly", priority: "0.8" }),
  );
}

async function guideSlugs() {
  const dir = path.join(ROOT, "src/lib/content/wedding-guides");
  let files = [];
  try {
    files = (await fs.readdir(dir)).filter((f) => f.endsWith(".mdx"));
  } catch {
    return [];
  }
  const entries = [];
  for (const file of files) {
    const src = await fs.readFile(path.join(dir, file), "utf8");
    const slug = src.match(/slug:\s*"([^"]+)"/)?.[1];
    const status = src.match(/status:\s*"([^"]+)"/)?.[1];
    const date = src.match(/date:\s*"([^"]+)"/)?.[1];
    if (slug && status === "published") {
      entries.push({
        path: `/wedding-guide/${slug}`,
        lastmod: date,
        changefreq: "monthly",
        priority: "0.6",
      });
    }
  }
  return entries;
}

const entries = [...staticRoutes, ...(await serviceSlugs()), ...(await guideSlugs())];

const urls = entries.map((e) =>
  [
    `  <url>`,
    `    <loc>${SITE_URL}${e.path}</loc>`,
    e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
    e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
    e.priority ? `    <priority>${e.priority}</priority>` : null,
    `  </url>`,
  ]
    .filter(Boolean)
    .join("\n"),
);

const xml = [`<?xml version="1.0" encoding="UTF-8"?>`, `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`, ...urls, `</urlset>`].join("\n");

await fs.writeFile(path.join(ROOT, "public/sitemap.xml"), xml, "utf8");
console.log(`Sitemap: ${entries.length} URLs -> public/sitemap.xml (${SITE_URL})`);
