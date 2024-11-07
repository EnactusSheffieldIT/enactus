import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  
  reactStrictMode: true,
  images: {
    domains: ['images.squarespace-cdn.com'],
  },
};

export default nextConfig;
