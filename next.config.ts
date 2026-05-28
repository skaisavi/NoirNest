import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/projects/maison-aure.html",
        destination: "/projects/maison-aure",
        permanent: true,
      },
      {
        source: "/projects/the-ledger.html",
        destination: "/projects/the-ledger",
        permanent: true,
      },
      {
        source: "/projects/aurum-retreat.html",
        destination: "/projects/aurum-retreat",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
