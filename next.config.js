/* eslint-disable import/no-extraneous-dependencies */
const Cookies = require('universal-cookie');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const cookies = new Cookies();
const cardID = cookies.get('cart_id');
module.exports = withBundleAnalyzer({
  poweredByHeader: false,
  trailingSlash: true,
  // basePath: '/',
  // The starter code load resources from `public` folder with `router.basePath` in React components.
  // So, the source code is "basePath-ready".
  // You can remove `basePath` if you don't need it.
  reactStrictMode: true,
  rewrites: () => [
    {
      source: '/ab',
      destination: '/about',
    },
  ],
  redirects: () => [
    {
      source: '/cart',
      has: [
        {
          type: 'cookie',
          key: 'cart_id',
          value: cardID,
        },
      ],
      permanent: true,
      destination: '/',
    },
  ],

  // Use the CDN in production and localhost for development.
  // assetPrefix: isProd ? 'https://cdn.mydomain.com' : '',
});
