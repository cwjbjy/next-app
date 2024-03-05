/** @type {import('next').NextConfig} */
import './config/env.mjs';

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mini.eastday.com',
      },
      {
        protocol: 'https',
        hostname: 'dfzximg02.dftoutiao.com',
      },
    ],
  },
};

export default nextConfig;
