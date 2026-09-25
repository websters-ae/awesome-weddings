import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = process.cwd();
const SOURCE_DIR = path.join(ROOT, "src/assets/portfolio");
const PREVIEW_DIR = path.join(ROOT, "public/portfolio-previews");
// Optimised "full" images for cards + lightbox. The raw sources are straight
// from the camera (up to ~5MB each) — serving those from IIS would destroy
// load times. 1600px / q70 is plenty for a fullscreen lightbox.
const FULL_DIR = path.join(ROOT, "public/portfolio-full");
const MANIFEST_FILE = path.join(ROOT, "src/lib/generated/portfolio-manifest.ts");
const PREVIEW_WIDTH = 640;
const PREVIEW_QUALITY = 58;
const FULL_WIDTH = 1600;
const FULL_QUALITY = 70;

await fs.mkdir(PREVIEW_DIR, { recursive: true });
await fs.mkdir(FULL_DIR, { recursive: true });
await fs.mkdir(path.dirname(MANIFEST_FILE), { recursive: true });

const files = (await fs.readdir(SOURCE_DIR, { withFileTypes: true }))
  .filter((entry) => entry.isFile() && entry.name.toLowerCase().endsWith(".webp"))
  .map((entry) => entry.name)
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }));

const items = [];
let skipped = 0;
for (let index = 0; index < files.length; index += 1) {
  const filename = files[index];
  const sourcePath = path.join(SOURCE_DIR, filename);
  const previewPath = path.join(PREVIEW_DIR, filename);
  const fullPath = path.join(FULL_DIR, filename);
  // Incremental: skip regeneration when both outputs are newer than the source.
  // Re-running `portfolio:prepare` on every build then costs almost nothing.
  try {
    const [srcStat, prevStat, fullStat] = await Promise.all([
      fs.stat(sourcePath),
      fs.stat(previewPath),
      fs.stat(fullPath),
    ]);
    if (prevStat.mtimeMs >= srcStat.mtimeMs && fullStat.mtimeMs >= srcStat.mtimeMs) {
      const metadata = await sharp(sourcePath, { failOn: "none" }).metadata();
      if (!metadata.width || !metadata.height) throw new Error(`Cannot read ${filename}`);
      items.push({ filename, width: metadata.width, height: metadata.height, previewSrc: `/portfolio-previews/${encodeURIComponent(filename)}` });
      skipped += 1;
      continue;
    }
  } catch (err) {
    if (err?.code !== "ENOENT") throw err;
    // Output missing — generate below.
  }
  const metadata = await sharp(sourcePath, { failOn: "none" }).metadata();
  if (!metadata.width || !metadata.height) throw new Error(`Cannot read ${filename}`);
  await sharp(sourcePath, { failOn: "none" }).rotate().resize({ width: PREVIEW_WIDTH, withoutEnlargement: true }).webp({ quality: PREVIEW_QUALITY, effort: 5 }).toFile(previewPath);
  await sharp(sourcePath, { failOn: "none" }).rotate().resize({ width: FULL_WIDTH, withoutEnlargement: true }).webp({ quality: FULL_QUALITY, effort: 5 }).toFile(fullPath);
  items.push({ filename, width: metadata.width, height: metadata.height, previewSrc: `/portfolio-previews/${encodeURIComponent(filename)}` });
  console.log(`[${index + 1}/${files.length}] ${filename}`);
}

const source = `/* Generated file. Do not edit manually. */

export type PortfolioManifestItem = {
  filename: string;
  width: number;
  height: number;
  previewSrc: string;
};

export const portfolioManifest: PortfolioManifestItem[] = ${JSON.stringify(items, null, 2)};
`;
await fs.writeFile(MANIFEST_FILE, source, "utf8");
console.log(`Generated ${items.length} previews (${skipped} up-to-date, skipped).`);
