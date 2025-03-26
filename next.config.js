/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/html5/:path*',
        destination: '/html5/:path*',
      },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    unoptimized: true, // This helps with Cloudflare Pages deployment
  },
  // Add allowedDevOrigins configuration to fix cross-origin warning
  experimental: {
    allowedDevOrigins: ['localhost', '127.0.0.1'],
  },
  output: 'standalone', // Optimized for Cloudflare Pages
}

module.exports = nextConfig
