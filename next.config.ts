import { type NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: false, 
  },
  eslint: {
    ignoreDuringBuilds: false, 
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
};

export default nextConfig;