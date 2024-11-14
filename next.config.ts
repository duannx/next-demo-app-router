import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.electrolux.it',
        port: '',
        pathname: '/**',
      },
    ],
  },
  sassOptions: {
    silenceDeprecations: ["legacy-js-api"], // 👈 HERE
  }
};

export default nextConfig;
