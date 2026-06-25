/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  compress: true,
  images: { unoptimized: true },
  experimental: { optimizePackageImports: ['framer-motion'] },
}

module.exports = nextConfig
