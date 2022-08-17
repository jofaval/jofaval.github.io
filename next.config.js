/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn-icons-png.flaticon.com"],
  },
  i18n: {
    locales: ["en-US", "es-ES"],
    defaultLocale: "en-US",
    localeDetection: true,
  },
};

module.exports = nextConfig;
