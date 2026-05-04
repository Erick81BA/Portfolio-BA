/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/Portfolio-BA' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Portfolio-BA/' : '',
}

export default nextConfig
