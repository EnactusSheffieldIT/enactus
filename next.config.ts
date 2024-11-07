import type { NextConfig } from "next";

//cloudflare workers
import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';
if (process.env.NODE_ENV === 'development') {
  await setupDevPlatform();
}
//end cloudflare workers


const nextConfig: NextConfig = {
  /* config options here */
  
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
};


export default nextConfig;
// /** @type {import('next').NextConfig} */