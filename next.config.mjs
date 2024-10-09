/** @type {import('next').NextConfig} */
const nextConfig = {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'img.clerk.com',
    },
  ],
};

export default nextConfig;
