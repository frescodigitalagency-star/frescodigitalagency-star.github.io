import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: hosted on GitHub Pages, no Next server (middleware/ISR unavailable)
  output: 'export',
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
