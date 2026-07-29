import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 92],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  redirects: async () => [
    { source: "/asset-management", destination: "/#asset-management", permanent: false },
    { source: "/investment", destination: "/#investment", permanent: false },
    { source: "/ueber-uns", destination: "/#ueber-uns", permanent: false },
    { source: "/projekte", destination: "/#projekte", permanent: false },
    { source: "/insights", destination: "/#insights", permanent: false },
    { source: "/kontakt", destination: "/#kontakt", permanent: false },
    { source: "/ankaufsprofil", destination: "/", permanent: false },
    { source: "/karriere", destination: "/#karriere", permanent: false },
    { source: "/leistungen", destination: "/#asset-management", permanent: false },
  ],
};

export default nextConfig;
