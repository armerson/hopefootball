import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

/**
 * This folder (`web/`) — NOT the parent `HopeFootball/` folder.
 * When a lockfile exists higher up (e.g. `~/package-lock.json`), Turbopack can
 * wrongly treat the parent as the root and fail to resolve `tailwindcss`.
 */
const appDir = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  turbopack: {
    root: appDir,
    // Explicit resolution so Tailwind always loads from this app's node_modules
    resolveAlias: {
      tailwindcss: path.join(appDir, "node_modules", "tailwindcss"),
      "@tailwindcss/postcss": path.join(appDir, "node_modules", "@tailwindcss", "postcss"),
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
