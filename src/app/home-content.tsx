"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { fadeUp } from "@/lib/animations"

const projects = [
  { id: 1, href: "/work/bulk-image-upload", label: "Bulk Image Upload", thumbnail: "/decision-1.svg" },
  { id: 2, href: "/work/image-manager", label: "Image Manager", thumbnail: undefined },
]

export function HomeContent() {
  return (
    <main className="px-8 md:px-12">
      {/* Hero */}
      <section className="pt-8 pb-20">
        <motion.h1
          {...fadeUp(0)}
          className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-6 max-w-5xl"
        >
          The handoff between design and engineering is where products lose
          fidelity.
        </motion.h1>
        <motion.p
          {...fadeUp(0.12)}
          className="text-lg text-muted-foreground mb-10 max-w-lg leading-relaxed"
        >
          I work on both sides of that gap — currently at Amazon, building
          tools for sellers worldwide.
        </motion.p>
        <motion.div {...fadeUp(0.22)} className="flex items-center gap-4">
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
        </motion.div>
      </section>

      {/* Project grid */}
      <section
        id="work"
        className="grid grid-cols-1 md:grid-cols-3 gap-5 pb-24"
      >
        {projects.map(({ id, href, label, thumbnail }, i) => (
          <motion.div key={id} {...fadeUp(0.35 + i * 0.1)}>
            <Link
              href={href}
              className="aspect-4/3 rounded-sm block hover:opacity-80 transition-opacity relative overflow-hidden border border-border"
              aria-label={label}
            >
              {thumbnail ? (
                <Image src={thumbnail} alt={label} fill className="object-cover" />
              ) : (
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(-45deg, transparent, transparent 6px, oklch(0.9 0.003 34.3) 6px, oklch(0.9 0.003 34.3) 7px)",
                    backgroundColor: "oklch(0.96 0.002 17.2)",
                  }}
                />
              )}
            </Link>
          </motion.div>
        ))}
      </section>
    </main>
  )
}
