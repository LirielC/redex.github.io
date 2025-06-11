/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Configuração para GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/RedexCloud.github.io' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/RedexCloud.github.io/' : '',
  trailingSlash: true,
  // Garante que a exportação estática funcione corretamente
  distDir: 'out',
};

export default nextConfig;
