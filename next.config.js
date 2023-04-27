/** @type {import('next').NextConfig} */
const { withContentlayer } = require("next-contentlayer");

const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["www.google.com"],
  },
};

module.exports = withContentlayer(nextConfig);
