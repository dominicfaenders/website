import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 80, 92],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  redirects: async () => [
    { source: "/asset-management", destination: "/#begleitung", permanent: false },
    { source: "/betreuung", destination: "/#begleitung", permanent: false },
    { source: "/begleitung", destination: "/#begleitung", permanent: false },
    { source: "/investment", destination: "/#wachstum", permanent: false },
    { source: "/geschaeftsfelder", destination: "/#geschaeftsfelder", permanent: false },
    { source: "/ueber-uns", destination: "/#ueber-uns", permanent: false },
    { source: "/projekte", destination: "/#projekte", permanent: false },
    { source: "/insights", destination: "/#insights", permanent: false },
    { source: "/kontakt", destination: "/#kontakt", permanent: false },
    { source: "/ankaufsprofil", destination: "/", permanent: false },
    { source: "/karriere", destination: "/#karriere", permanent: false },
    { source: "/leistungen", destination: "/#geschaeftsfelder", permanent: false },
  ],
};

export default nextConfig;
