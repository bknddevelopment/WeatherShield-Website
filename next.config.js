/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/WeatherShield-Website',
  assetPrefix: '/WeatherShield-Website',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  reactStrictMode: true,
  swcMinify: true,
}