/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['image.tmdb.org', 'www.gravatar.com']
  },
  experimental: {
    serverActions: true,
  },
  skipMiddlewareUrlNormalize: true,
}

module.exports = nextConfig
