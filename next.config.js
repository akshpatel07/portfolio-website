/** @type {import('next').NextConfig} */
const nextConfig = {
  // GitHub Pages serves project sites from /portfolio-website.
  output: 'export',
  basePath: process.env.GITHUB_ACTIONS === 'true' ? '/portfolio-website' : '',

  // Enable React strict mode for development
  reactStrictMode: true,

  // Image optimization
  images: {
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },

  // Compression
  compress: true,

  // Cache optimization
  onDemandEntries: {
    maxInactiveAge: 60 * 1000,
    pagesBufferLength: 5,
  },

};

module.exports = nextConfig;
