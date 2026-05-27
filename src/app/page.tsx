import type { Metadata } from "next"
import Link from "next/link"
import { Nav } from "@/components/nav"
import { Button } from "@/components/ui/button"

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

const projects = [
  { id: 1, href: "/work/bulk-upload", label: "Bulk Image Upload" },
  { id: 2, href: "/work/image-manager", label: "Image Manager" },
]

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <main className="px-8 md:px-12">
        {/* Hero */}
        <section className="pt-8 pb-20">
          <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-6 max-w-5xl">
            The handoff between design and engineering is where products lose
            fidelity.
          </h1>
          <p className="text-lg text-muted-foreground mb-10 max-w-lg leading-relaxed">
            I work on both sides of that gap — currently at Amazon, building
            tools for sellers worldwide.
          </p>
          <div className="flex items-center gap-4">
            <Button
              size="lg"
              className="normal-case tracking-normal text-sm"
              render={<a href="/work" />}
              nativeButton={false}
            >
              See the work →
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="normal-case tracking-normal text-sm"
              render={<a href="/about" />}
              nativeButton={false}
            >
              About
            </Button>
          </div>
        </section>

        {/* Project grid */}
        <section
          id="work"
          className="grid grid-cols-1 md:grid-cols-3 gap-5 pb-24"
        >
          {projects.map(({ id, href, label }) => (
            <Link
              key={id}
              href={href}
              className="aspect-4/3 rounded-sm block hover:opacity-80 transition-opacity"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(-45deg, transparent, transparent 6px, oklch(0.9 0.003 34.3) 6px, oklch(0.9 0.003 34.3) 7px)",
                backgroundColor: "oklch(0.96 0.002 17.2)",
              }}
              aria-label={label}
            />
          ))}
        </section>
      </main>
    </>
  )
}
