import type { NextConfig } from "next";

// On met ': any' pour forcer TypeScript à accepter ces réglages
const nextConfig: any = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;