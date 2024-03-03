/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mini.eastday.com",
      },
      {
        protocol: "https",
        hostname: "dfzximg02.dftoutiao.com",
      },
    ],
  },
};

export default nextConfig;
