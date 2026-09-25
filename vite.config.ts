// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@mdx-js/rollup";

export default defineConfig({
  plugins: [
    // Per-route code splitting: each TanStack file route becomes its own
    // lazy chunk instead of inflating the initial bundle. This is the single
    // biggest win for IIS static hosting (smaller first load, hashed chunks
    // cached long-term by browsers).
    TanStackRouterVite({ autoCodeSplitting: true }),
    // Only process real .mdx articles (wedding guides). Without `include`,
    // the plugin still only matches .mdx by default, but pinning it avoids
    // surprises if new extensions are added later.
    mdx({ include: ["**/*.mdx"] }),
    react(),
    tailwindcss(),
  ],
  resolve: {
    tsconfigPaths: true,
    alias: {
      "@": "/src",
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    // Skip the compressed-size report: it gzip-compresses every asset to
    // print sizes, which noticeably slows the build for zero runtime gain.
    reportCompressedSize: false,
    // No sourcemaps for the IIS static bundle (smaller dist, faster build).
    sourcemap: false,
    // Inline only tiny assets (<4KB) as base64; everything else stays a
    // separate hashed file so IIS + browsers can cache it immutably.
    assetsInlineLimit: 4096,
    chunkSizeWarningLimit: 600,
    target: "es2022",
    rollupOptions: {
      output: {
        // Stable vendor chunking: React/framework code changes rarely, so
        // splitting it out keeps the hash stable across deploys and lets
        // returning visitors reuse the cached file.
        // NOTE: Vite 8 (Rolldown) requires the function form — a plain
        // object is rejected at build time.
        manualChunks: (id) => {
          if (!id.includes("node_modules")) return undefined;
          if (
            id.includes("node_modules/react-dom") ||
            id.includes("node_modules/react/") ||
            id.includes("node_modules/scheduler")
          )
            return "vendor-react";
          if (id.includes("node_modules/@tanstack")) return "vendor-router";
          if (
            id.includes("node_modules/lucide-react") ||
            id.includes("node_modules/clsx") ||
            id.includes("node_modules/tailwind-merge") ||
            id.includes("node_modules/class-variance-authority")
          )
            return "vendor-ui";
          if (
            id.includes("node_modules/react-hook-form") ||
            id.includes("node_modules/@hookform") ||
            id.includes("node_modules/zod")
          )
            return "vendor-forms";
          return undefined;
        },
        assetFileNames: "assets/[name]-[hash][extname]",
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",
      },
    },
  },
});
