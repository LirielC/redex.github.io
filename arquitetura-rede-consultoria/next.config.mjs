/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/-NetArchitect-.github.io' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/-NetArchitect-.github.io' : '',
  trailingSlash: true,
};

export default nextConfig;
