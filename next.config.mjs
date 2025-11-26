/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "randomuser.me",
          },
        ],
    },
    reactStrictMode: false, // Temporarily disable to reduce hydration issues
    experimental: {
        optimizePackageImports: ['@clerk/nextjs'],
    },
};

export default nextConfig;
