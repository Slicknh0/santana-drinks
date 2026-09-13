import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // A stray lockfile in the user's home folder would otherwise be taken as the workspace root.
  turbopack: { root: __dirname },
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [70, 80],
  },
};

export default nextConfig;
