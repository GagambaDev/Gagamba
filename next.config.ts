import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The tour frames and video are large and rarely change, so let browsers and CDNs keep them for a day.
  async headers() {
    return [
      {
        source: "/images/tour/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=604800" }],
      },
    ];
  },
};

export default nextConfig;
