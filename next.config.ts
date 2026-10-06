/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: '**',
        port: '5000',
        pathname: '/uploads/**',
      },

      // AWS S3 product images
      {
        protocol: 'https',
        hostname: 'face-product-images-ankush.s3.ap-northeast-1.amazonaws.com',
        port: '',
        pathname: '/products/**',
      },
    ],
  },

  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:5000/api/:path*',
      },
    ];
  },
};

export default nextConfig;