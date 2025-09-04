/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'blog.protingentindia.com',
        port: '',
        pathname: '/**',
      }
    ],
  },
  experimental: {
    webVitalsAttribution: ['CLS', 'LCP']
  },
  output: "export",
  trailingSlash: true
};

export default nextConfig;
