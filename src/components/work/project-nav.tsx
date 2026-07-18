"use client"

import Link from "next/link"
import { projects } from "@/lib/projects"

export function WorkBackLink() {
  return (
    <Link
      href="/work"
      className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
    >
      ← All work
    </Link>
  )
}

export function ProjectFooterNav({ current }: { current: string }) {
  const index = projects.findIndex((p) => p.href === current)
  if (index === -1 || projects.length < 2) return null

  const next = projects[(index + 1) % projects.length]

  return (
    <div className="mt-20 pt-8 border-t border-border flex items-center justify-between gap-4">
      <WorkBackLink />
      <Link
        href={next.href}
        className="group text-right hover:opacity-80 transition-opacity"
      >
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
          Next project
        </p>
        <p className="font-heading font-bold text-lg">{next.title} →</p>
      </Link>
    </div>
  )
}
