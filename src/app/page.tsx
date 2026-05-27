import type { Metadata } from "next"
import { HomeContent } from "./home-content"

export const metadata: Metadata = {
  title: "Jeanette Silvas — Design Engineer",
  description:
    "The handoff between design and engineering is where products lose fidelity. I work on both sides of that gap.",
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jeanette Silvas",
  url: "https://www.jeanettesilvas.com",
  jobTitle: "Design Engineer",
  worksFor: { "@type": "Organization", name: "Amazon" },
  sameAs: [
    "https://www.linkedin.com/in/jeanettesilvas",
    "https://github.com/jeanettesilvas",
  ],
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeContent />
    </>
  )
}
