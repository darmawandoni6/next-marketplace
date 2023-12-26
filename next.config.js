/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  publicRuntimeConfig: require('./environtment'),
  serverRuntimeConfig: require('./environtment'),
};

module.exports = nextConfig;
