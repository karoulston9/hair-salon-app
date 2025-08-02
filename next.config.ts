import type {NextConfig} from 'next';

const repoName = 'hair-salon-app'; // Change if your repo name is different
const nextConfig: NextConfig = {
  output: 'export',
  assetPrefix: `/${repoName}/`,
  basePath: `/${repoName}`,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
