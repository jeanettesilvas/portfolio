import type { MetadataRoute } from "next"

const baseUrl = "https://www.jeanettesilvas.com"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: baseUrl, priority: 1 },
    { url: `${baseUrl}/work`, priority: 0.9 },
    { url: `${baseUrl}/work/bulk-upload`, priority: 0.8 },
    { url: `${baseUrl}/about`, priority: 0.7 },
    { url: `${baseUrl}/resume`, priority: 0.7 },
    { url: `${baseUrl}/contact`, priority: 0.6 },
  ]
}
