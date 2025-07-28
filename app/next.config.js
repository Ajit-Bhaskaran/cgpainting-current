/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: { 
    unoptimized: true,
    domains: ['c8.alamy.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'c8.alamy.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
