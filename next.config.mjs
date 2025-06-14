/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/demo', // Replace 'demo' with your repository name
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
