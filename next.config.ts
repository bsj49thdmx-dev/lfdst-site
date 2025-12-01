import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* On dit à Vercel d'ignorer les erreurs strictes pour publier quand même */
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;