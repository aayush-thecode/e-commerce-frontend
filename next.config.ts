import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'e-commerce-server-4khy.onrender.com',
        port: '',
        pathname: '/**'
      }
    ]
  }
};

export default nextConfig;
