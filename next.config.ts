import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: hosted on GitHub Pages, no Next server (middleware/ISR unavailable)
  output: 'export',
  // GitHub Pages resolves /ru/ only via ru/index.html
  trailingSlash: true,
  // [Added by Antigravity Mac: Turbopack panics on Cyrillic parent paths]
  turbopack: {
    root: '.',
  },
  images: {
    // GitHub Pages has no image optimizer
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.adam-audio.com',
      },
    ],
  },
};

export default nextConfig;
