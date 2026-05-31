import type { Metadata } from "next"
import { ImageManagerContent } from "./image-manager-content"

export const metadata: Metadata = {
  title: "Image Manager",
  description:
    "How I redesigned Amazon's Image Manager — making a years-old fixed layout responsive and accessible.",
}

export default function ImageManagerPage() {
  return <ImageManagerContent />
}
