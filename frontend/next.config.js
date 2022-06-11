const nextConfig = {
  env: {
    NEXT_PUBLIC_FRONTEND_ORIGIN: 'http://localhost:4000',
    NEXT_PUBLIC_API_SERVER: 'http://localhost:8080/api',
    NEXT_PUBLIC_SITE_NAME: 'Boilerplate_Next',
  },
}

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
module.exports = withBundleAnalyzer(nextConfig)
