import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // [Added by Antigravity Mac: Turbopack panics on Cyrillic parent paths]
  turbopack: {
    root: '.',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.adam-audio.com',
      },
    ],
  },
};

export default nextConfig;
