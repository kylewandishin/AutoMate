/* eslint-disable */
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: "default",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.clerk.com',
      },
      {
        protocol: 'https',
        hostname: 'ucarecdn.com',
      },
    ],
  },
};

export default nextConfig;
