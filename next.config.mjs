/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/Portfolio-BA' : '',
  assetPrefix: isProd ? '/Portfolio-BA/' : '',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? '/Portfolio-BA' : '',
  },
}

export default nextConfig
