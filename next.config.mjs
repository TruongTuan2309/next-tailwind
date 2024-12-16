import withBundleAnalyzer from '@next/bundle-analyzer';
import withPlugins from 'next-compose-plugins';

/** @type {import('next').NextConfig} */

const nextConfig = {
  swcMinify: true, // Sử dụng SWC để nén JavaScript
  images: {
    domains: ['example.com'], // Thêm các domain hình ảnh của bạn ở đây
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840], // Kích thước thiết bị cho tối ưu hóa hình ảnh
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // Kích thước hình ảnh cho tối ưu hóa hình ảnh
  },
  i18n: {
    locales: ['en', 'fr', 'de'],
    defaultLocale: 'en',
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false; // Ngăn Webpack cố gắng polyfill module fs
    }
    return config;
  },
  typescript: {
    ignoreBuildErrors: false, // Không bỏ qua lỗi build TypeScript
  },
  eslint: {
    ignoreDuringBuilds: false, // Không bỏ qua lỗi ESLint trong quá trình build
  },
  poweredByHeader: false, // Tắt header X-Powered-By để bảo mật
  compress: true, // Bật nén gzip cho các phản hồi HTTP
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable', // Cấu hình cache cho các tệp tĩnh
          },
        ],
      },
    ];
  },
};

export default withPlugins(
  [withBundleAnalyzer({ enabled: process.env.ANALYZE === 'true' })],
  nextConfig,
);
