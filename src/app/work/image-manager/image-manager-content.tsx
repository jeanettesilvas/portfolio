"use client"

import Image from "next/image"
import beforeImg from "../../../../public/image-manager-before.jpg"
import afterImg from "../../../../public/image-manager-after.jpg"
import { motion } from "framer-motion"
import { fadeUp } from "@/lib/animations"
import { TableOfContents } from "@/components/work/toc"

const tocSections = [
  { id: "problem", label: "Problem" },
  { id: "what-changed", label: "What Changed" },
  { id: "outcome", label: "Outcome" },
  { id: "retrospective", label: "Retrospective" },
]

const stack = ["React · TS", "Tailwind", "Figma", "Internal design system", "Kiro"]

const scrollFadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5, ease: "easeOut" as const },
}

function SectionLabel({ n }: { n: string }) {
  return <p className="text-sm text-muted-foreground mb-1 font-mono">{n}</p>
}

export function ImageManagerContent() {
  return (
    <div className="px-8 md:px-12 py-10 pb-24">
      {/* Page header */}
      <header className="mb-10">
        <motion.h1
          {...fadeUp(0)}
          className="font-heading font-bold text-5xl tracking-tight mb-2"
        >
          Image Manager
        </motion.h1>
        <motion.p {...fadeUp(0.1)} className="text-muted-foreground">
          Amazon · 2026 · design + engineering
        </motion.p>
      </header>

      {/* Two-column layout */}
      <div className="grid grid-cols-[180px_1fr] gap-16 items-start">
        {/* Sticky sidebar */}
        <motion.aside {...fadeUp(0.2)} className="sticky top-8 space-y-8">
          <TableOfContents sections={tocSections} />

          <div className="border border-dashed border-border p-4 rounded-sm">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
              Stack
            </p>
            <ul className="space-y-1 text-sm">
              {stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </motion.aside>

        {/* Scrolling content */}
        <main className="space-y-20 min-w-0">
          {/* 01 Problem */}
          <motion.section id="problem" {...scrollFadeUp}>
            <SectionLabel n="01" />
            <h2 className="font-heading font-bold text-4xl mb-6">Problem</h2>
            <div className="space-y-4 text-base leading-relaxed">
              <p>Image Manager is the primary tool sellers use to view and manage their product images after upload. The page had gone largely unchanged for years — built with fixed dimensions that constrained the content area regardless of screen size. On large screens, space was wasted. On smaller ones, the layout broke. Sellers managing large catalogs had to scroll and filter more than necessary just to see what they had.</p>
              <p>No one had filed a ticket. I noticed it while using the tool, built a demo on my own time to show what it could be, and brought it to the team. It was approved and prioritized for the next sprint.</p>
            </div>
            <div className="mt-8">
              <Image src={beforeImg} alt="Image Manager before redesign" priority style={{ width: "100%", height: "auto" }} />
            </div>
          </motion.section>

          {/* 02 What Changed */}
          <motion.section id="what-changed" {...scrollFadeUp}>
            <SectionLabel n="02" />
            <h2 className="font-heading font-bold text-4xl mb-6">What Changed</h2>
            <div className="space-y-4 text-base leading-relaxed">
              <p>The core fix was making the layout responsive. The content area had been built with fixed dimensions — replacing those with flexible, proportional columns meant the left panel shrank to fit its actual content, giving the image grid the space it needed to breathe. More images visible at once, less scrolling.</p>
              <p>The left column also became vertically flexible. The previous layout had fixed row heights that cut off content and made it difficult to surface additional product metadata. The new layout lets rows grow to fit their content, so nothing gets truncated and there&apos;s room to add information as the product evolves.</p>
              <p>Country sections became collapsible, so sellers with large international catalogs could focus on what they needed without the page becoming unwieldy. A country filter was added at the top for faster navigation across regions.</p>
              <p>Smaller improvements rounded it out — the search input was rebuilt to match the design system rather than sitting as a one-off custom component, and several other minor inconsistencies were cleaned up in the process.</p>
            </div>
            <div className="mt-8">
              <Image src={afterImg} alt="Image Manager after redesign" priority style={{ width: "100%", height: "auto" }} />
            </div>
          </motion.section>

          {/* 03 Outcome */}
          <motion.section id="outcome" {...scrollFadeUp}>
            <SectionLabel n="03" />
            <h2 className="font-heading font-bold text-4xl mb-6">Outcome</h2>
            <div className="space-y-4 text-base leading-relaxed">
              <p>The redesign was A/B tested against the original. On core business metrics it was neutral — conversion and task completion rates didn&apos;t move meaningfully in either direction.</p>
              <p>The more telling signal came from usage data. Sellers interacted with more of the page without needing to search or filter first — content that had previously required effort to find was now simply visible. The layout was doing work that users had been doing themselves.</p>
              <p>A layout that hadn&apos;t been touched in years, rebuilt to be responsive, accessible, and aligned with the design system — the data didn&apos;t shout, but it didn&apos;t need to.</p>
            </div>
          </motion.section>

          {/* 04 Retrospective */}
          <motion.section id="retrospective" {...scrollFadeUp}>
            <SectionLabel n="04" />
            <h2 className="font-heading font-bold text-4xl mb-6">Retrospective</h2>
            <div className="space-y-4 text-base leading-relaxed">
              <p>This was a small project with a clear problem and a straightforward fix. The hardest part wasn&apos;t the work — it was making the case for it. Unquantified pain rarely makes it onto a roadmap on its own, and &ldquo;the layout looks like it&apos;s from the 1990s&rdquo; isn&apos;t a ticket.</p>
              <p>Building the demo first was the right move. It gave the team something concrete to react to instead of a proposal to debate, and it compressed the approval process significantly. That&apos;s a pattern worth repeating.</p>
              <p>If I were doing it again I&apos;d instrument the page before shipping — having baseline data on scroll depth, filter usage, and time-on-page would have made the A/B results easier to interpret and the case for the improvement easier to make in retrospect.</p>
            </div>
          </motion.section>
        </main>
      </div>
    </div>
  )
}
