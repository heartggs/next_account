import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    fallbackNodePolyfills: false,
  },
  images:{
    remotePatterns:[
      {
        protocol:'https',
        hostname: '**.iconfinder.com'
      }
    ]
  }
}

export default nextConfig
