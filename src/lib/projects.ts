export interface Project {
  title: string
  company: string
  year: string
  href: string
  thumbnail: string
  imageClassName: string
  thumbnailOffset: boolean
}

export const projects: Project[] = [
  {
    title: "Bulk Image Upload",
    company: "Amazon",
    year: "2024–2025",
    href: "/work/bulk-image-upload",
    thumbnail: "/images/biu-decision-1.svg",
    imageClassName: "object-cover object-top",
    thumbnailOffset: false,
  },
  {
    title: "Image Manager",
    company: "Amazon",
    year: "2026",
    href: "/work/image-manager",
    thumbnail: "/images/image-manager-after.svg",
    imageClassName: "object-cover object-top",
    thumbnailOffset: true,
  },
]
