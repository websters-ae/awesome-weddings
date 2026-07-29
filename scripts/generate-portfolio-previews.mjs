import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = process.cwd();
const SOURCE_DIR = path.join(ROOT, "src/assets/portfolio");
const PREVIEW_DIR = path.join(ROOT, "public/portfolio-previews");
const MANIFEST_FILE = path.join(ROOT, "src/lib/generated/portfolio-manifest.ts");
const PREVIEW_WIDTH = 640;
const PREVIEW_QUALITY = 58;

await fs.mkdir(PREVIEW_DIR, { recursive: true });
await fs.mkdir(path.dirname(MANIFEST_FILE), { recursive: true });

const files = (await fs.readdir(SOURCE_DIR, { withFileTypes: true }))
  .filter((entry) => entry.isFile() && entry.name.toLowerCase().endsWith(".webp"))
  .map((entry) => entry.name)
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }));

const items = [];
for (let index = 0; index < files.length; index += 1) {
  const filename = files[index];
  const sourcePath = path.join(SOURCE_DIR, filename);
  const previewPath = path.join(PREVIEW_DIR, filename);
  const image = sharp(sourcePath, { failOn: "none" });
  const metadata = await image.metadata();
  if (!metadata.width || !metadata.height) throw new Error(`Cannot read ${filename}`);
  await image.rotate().resize({ width: PREVIEW_WIDTH, withoutEnlargement: true }).webp({ quality: PREVIEW_QUALITY, effort: 5 }).toFile(previewPath);
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
console.log(`Generated ${items.length} previews.`);
