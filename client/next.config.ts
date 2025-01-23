import { withSentryConfig } from '@sentry/nextjs';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  env: {},
  images: {
    remotePatterns: [],
  },
  reactStrictMode: true,
};

export default withSentryConfig(nextConfig, {
  org: 'francis-lagares',
  project: 'javascript-nextjs',

  silent: !process.env.CI,
  widenClientFileUpload: true,
  tunnelRoute: '/monitoring',
  hideSourceMaps: true,
  disableLogger: true,
  automaticVercelMonitors: true,
});
