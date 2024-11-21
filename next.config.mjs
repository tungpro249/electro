/** @type {import('next').NextConfig} */
import dotenv from 'dotenv';
dotenv.config();
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
import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: true,
});

export default withBundleAnalyzer(nextConfig);
