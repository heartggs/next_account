import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    fallbackNodePolyfills: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.iconfinder.com',
      },
      {
        protocol: 'https',
        hostname: '**.googleusercontent.com',
      },
    ],
  },
  env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXTAUTH_URL_INTERNAL: process.env.NEXTAUTH_URL_INTERNAL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  },
}

export default nextConfig
