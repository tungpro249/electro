/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["buffer.com", "electrox.arenacommerce.com"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'electrox.arenacommerce.com',
        pathname: '/cdn/shop/files/**',
      },
    ],
  },
};

export default nextConfig;
