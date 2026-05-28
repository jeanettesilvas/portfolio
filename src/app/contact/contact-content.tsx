"use client"

import { motion } from "framer-motion"
import { fadeUp } from "@/lib/animations"

const links = [
  {
    label: "Email",
    display: "jeanettesilvas.dev@gmail.com",
    href: "mailto:jeanettesilvas.dev@gmail.com",
  },
  {
    label: "LinkedIn",
    display: "/in/jeanettesilvas",
    href: "https://www.linkedin.com/in/jeanettesilvas",
  },
  {
    label: "GitHub",
    display: "@jeanettesilvas",
    href: "https://github.com/jeanettesilvas",
  },
]

export function ContactContent() {
  return (
    <main className="px-8 md:px-12 pb-24">
      {/* Header */}
      <header className="pt-8 pb-12">
        <motion.p
          {...fadeUp(0)}
          className="text-xs uppercase tracking-widest text-muted-foreground mb-4"
        >
          Contact
        </motion.p>
        <motion.h1
          {...fadeUp(0.1)}
          className="font-heading font-bold text-5xl md:text-6xl tracking-tight leading-[1.05] mb-6 max-w-lg"
        >
          Hiring for design engineering?
        </motion.h1>
        <motion.p
          {...fadeUp(0.2)}
          className="text-muted-foreground max-w-md leading-relaxed"
        >
          I&apos;m moving toward design engineering full-time. Let&apos;s talk.
        </motion.p>
      </header>

      {/* Contact links */}
      <div>
        {links.map(({ label, display, href }, i) => (
          <motion.div key={label} {...fadeUp(0.35 + i * 0.1)}>
            <div className="border-t border-border" />
            <a
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="grid grid-cols-[160px_1fr] items-center gap-6 py-5 group hover:opacity-70 transition-opacity"
            >
              <span className="text-xs uppercase tracking-widest text-muted-foreground">
                {label}
              </span>
              <span className="text-base font-medium">{display}</span>
            </a>
          </motion.div>
        ))}
        <div className="border-t border-border" />
      </div>
    </main>
  )
}
