"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { fadeUp } from "@/lib/animations"

const projects = [
  {
    title: "Bulk Image Upload",
    company: "Amazon",
    year: "2024–2025",
    href: "/work/bulk-image-upload",
    thumbnail: "/decision-1.svg",
  },
  {
    title: "Image Manager",
    company: "Amazon",
    year: "2026",
    href: "/work/image-manager",
    thumbnail: undefined,
  },
]

export function WorkContent() {
  return (
    <main className="px-8 md:px-12 pb-24">
      {/* Header */}
      <header className="pt-8 pb-12">
        <motion.p
          {...fadeUp(0)}
          className="text-xs uppercase tracking-widest text-muted-foreground mb-4"
        >
          Work
        </motion.p>
        <motion.h1
          {...fadeUp(0.1)}
          className="font-heading font-bold text-5xl md:text-6xl tracking-tight"
        >
          Selected work.
        </motion.h1>
      </header>

      {/* Card grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map(({ title, company, year, href, thumbnail }, i) => (
          <motion.div key={title} {...fadeUp(0.25 + i * 0.1)}>
            <Link
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="border border-border rounded-sm overflow-hidden hover:opacity-80 transition-opacity block"
            >
              {/* Thumbnail */}
              <div className="w-full aspect-[4/3] relative overflow-hidden">
                {thumbnail ? (
                  <Image
                    src={thumbnail}
                    alt={title}
                    fill
                    className="object-cover"
                  />
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
              </div>
              {/* Card footer */}
              <div className="px-5 pt-4 pb-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-heading font-bold text-xl">{title}</span>
                  <span className="text-sm text-muted-foreground">
                    {company} · {year}
                  </span>
                </div>
                <div className="border-t border-border" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </main>
  )
}
