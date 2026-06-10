/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  distDir: 'out',
  trailingSlash: true,
  compress: true,
  images: { unoptimized: true },
  experimental: { optimizePackageImports: ['framer-motion'] },
}

module.exports = nextConfig
