/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ Remove static export to allow dynamic SSR pages
  // output: 'export',

  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  optimizeFonts: false,
};

module.exports = nextConfig;
