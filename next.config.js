/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const nextConfig = {
  output: 'export',
  basePath: isProd ? '/WeatherShield-Website' : '',
  assetPrefix: isProd ? '/WeatherShield-Website/' : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  reactStrictMode: true,
  swcMinify: true,
}