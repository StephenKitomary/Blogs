import type { MetadataRoute } from "next";

import { SITE_INFO } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    short_name: SITE_INFO.name,
    name: SITE_INFO.name,
    description: SITE_INFO.description,
    icons: [
      {
        src: "/Sitelogo.webp",
        type: "image/webp",
        sizes: "600x600",
        purpose: "any",
      },
      {
        src: "/Sitelogo192.webp",
        type: "image/webp",
        sizes: "192x192",
        purpose: "any",
      },
      {
        src: "/Sitelogo.webp",
        type: "image/webp",
        sizes: "600x600",
        purpose: "any",
      },
      {
        src: "/Sitelogo.webp",
        type: "image/webp",
        sizes: "600x600",
        purpose: "any",
      },
    ],
    id: "/?utm_source=pwa",
    start_url: "/?utm_source=pwa",
    display: "standalone",
    scope: "/",
    screenshots: [
      {
        src: "/screenshot-narrow-light.webp",
        type: "image/webp",
        sizes: "720x1558",
        form_factor: "narrow",
      },
      {
        src: "/screenshot-narrow-dark.webp",
        type: "image/webp",
        sizes: "720x1558",
        form_factor: "narrow",
      },
      {
        src: "/screenshot-wide-light.webp",
        type: "image/webp",
        sizes: "1920x1200",
        form_factor: "wide",
      },
      {
        src: "/screenshot-wide-dark.webp",
        type: "image/webp",
        sizes: "1920x1200",
        form_factor: "wide",
      },
    ],
  };
}
