/** @type {import('next').NextConfig} */
const nextConfig = {
  api: {
    responseLimit: '8mb',
  },
  reactStrictMode: true,
}

module.exports = nextConfig
