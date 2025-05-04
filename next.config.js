/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const repo = '<YOUR_REPO>'; // set your repo name
module.exports = {
  output: 'export',
  images: { unoptimized: true },
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : '',
};
