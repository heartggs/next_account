import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    fallbackNodePolyfills: false,
  },
}

export default nextConfig
