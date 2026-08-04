import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
      {
        protocol: 'https',
        hostname: 'assets.st-note.com',
      },
      {
        protocol: 'https',
        hostname: '*.st-note.com',
      },
      {
        // note.com 本体ドメインの画像
        protocol: 'https',
        hostname: 'note.com',
      },
    ],
  },
};

export default nextConfig;
