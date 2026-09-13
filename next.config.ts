import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // A stray lockfile in the user's home folder would otherwise be taken as the workspace root.
  turbopack: { root: __dirname },
  poweredByHeader: false,
  images: {
    // WebP only: AVIF encoding is several times slower and stalled cold-cache image requests.
    formats: ["image/webp"],
    qualities: [70, 80],
  },
};

export default nextConfig;
