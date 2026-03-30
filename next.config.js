/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  basePath: '/aryanmovies',
  images: {
    domains: ['image.tmdb.org', 'wsrv.nl', 'www.cineby.sc'],
    unoptimized: true,
  },
}

module.exports = nextConfig
