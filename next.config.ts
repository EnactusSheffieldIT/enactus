import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./src/script/sitemap.js');
    }

    return config;
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
