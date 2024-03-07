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
        hostname: 'minipc.eastday.com',
      },
      {
        protocol: 'https',
        hostname: 'dfzximg02.dftoutiao.com',
      },
    ],
  },
  sassOptions: {
    additionalData: '@import "@/styles/index.scss";',
  },
};

export default nextConfig;
