import createMDX from '@next/mdx';
import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@/posts': path.resolve('./posts'),
    };
    return config;
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
