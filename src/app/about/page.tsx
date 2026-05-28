import type { Metadata } from "next"
import { AboutContent } from "./about-content"

export const metadata: Metadata = {
  title: "About",
  description:
    "Design engineer working across Figma and React. Currently at Amazon's Product Image Experience team.",
}

export default function AboutPage() {
  return <AboutContent />
}
