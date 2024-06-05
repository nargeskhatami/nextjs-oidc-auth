/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    optimizePackageImports: [
      "@mantine/core",
      "@mantine/dates",
      "@mantine/form",
      "@mantine/hooks",
      "@mantine/modals",
      "@mantine/notifications",
      "@mantine/nprogress",
    ],
  },
};

export default nextConfig;
