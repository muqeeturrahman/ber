/** @type {import('next').NextConfig} */
const nextConfig = {

  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    formats: ['image/webp', 'image/avif'],
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
}

module.exports = nextConfig 