import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack: async (config, { isServer }) => {
    if (isServer) {
      await import('./src/script/sitemap.js');
    }
    return config;
  },
  // Add Turbopack configuration
  experimental: {
    turbo: {
      rules: {
        // Add any custom Turbopack rules here if needed
      },
    },
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.squarespace-cdn.com',
        port: '',
        // pathname: '/account123/**',
      },
      {
        protocol: 'https',
        hostname: 'static.wixstatic.com',
        port: '',
        // pathname: '/account123/**',
      },
    ],
  },
};

export default nextConfig;
