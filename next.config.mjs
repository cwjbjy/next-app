/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'standalone',
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
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
};

export default nextConfig;
