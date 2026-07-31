import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "treuhans",
    short_name: "treuhans",
    description: "treuhans — dein Partner für Asset Management und Investment.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0e0d",
    theme_color: "#0a0e0d",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
