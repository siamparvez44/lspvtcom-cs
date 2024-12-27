/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: [
        'simpleicons.org',
        'cdn.simpleicons.org',
      ],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**.simpleicons.org',
        },
      ],
    },
    async headers() {
      return [
        {
          source: '/(.*)',
          headers: [
            {
              key: 'Access-Control-Allow-Origin',
              value: '*',
            },
          ],
        },
      ];
    },
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      });
      return config;
    },
  }
  
  module.exports = nextConfig
  
  