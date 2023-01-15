/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["upload.wikimedia.org", "image.tmdb.org"],
  },
}

module.exports = nextConfig
