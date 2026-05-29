"use client"

import { motion } from "framer-motion"
import { fadeUp } from "@/lib/animations"
import { PrintButton } from "@/components/print-button"

const experience = [
  {
    company: "Amazon",
    role: "Product Image Experience · design + frontend",
    years: "2023 — now",
  },
  {
    company: "AWS",
    role: "Frontend engineer",
    years: "2022 — 2023",
  },
  {
    company: "InVision",
    role: "Lead software engineer",
    years: "2018 — 2022",
  },
  {
    company: "Expedia",
    role: "Senior UI Engineer",
    years: "2013 — 2018",
  },
]

const stack = [
  "React · TypeScript · Next.js",
  "Tailwind CSS · CSS-in-JS",
  "Figma · design systems",
  "Kiro · Claude Code",
]

const education = ["B.S. Bioengineering", "Texas A&M University"]

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
      {children}
    </p>
  )
}

export function ResumeContent() {
  return (
    <main className="px-8 md:px-12 pb-24 print:px-0 print:pb-0">
      {/* Header */}
      <header className="pt-8 pb-10 flex items-start justify-between">
        <motion.div {...fadeUp(0)}>
          <h1 className="font-heading font-bold text-5xl tracking-tight mb-2">
            Jeanette Silvas
          </h1>
          <p className="text-muted-foreground">
            Design engineer · Austin · jeanettesilvas.dev@gmail.com
          </p>
        </motion.div>
        <motion.div {...fadeUp(0.1)} className="print:hidden">
          <PrintButton />
        </motion.div>
      </header>

      {/* Experience */}
      <motion.section {...fadeUp(0.2)} className="mb-14">
        <SectionLabel>Experience</SectionLabel>
        <div className="border-t border-border" />
        {experience.map(({ company, role, years }, i) => (
          <motion.div key={company} {...fadeUp(0.28 + i * 0.07)}>
            <div className="grid grid-cols-[160px_1fr_auto] items-center gap-6 py-5">
              <span className="font-semibold">{company}</span>
              <span className="text-muted-foreground text-sm">{role}</span>
              <span className="text-sm text-muted-foreground whitespace-nowrap">
                {years}
              </span>
            </div>
            <div className="border-t border-border" />
          </motion.div>
        ))}
      </motion.section>

      {/* Stack + Education */}
      <div className="grid grid-cols-2 gap-12">
        <motion.section {...fadeUp(0.6)}>
          <SectionLabel>Stack</SectionLabel>
          <div className="border-t border-border mb-4" />
          <ul className="space-y-2 text-sm text-muted-foreground">
            {stack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </motion.section>

        <motion.section {...fadeUp(0.7)}>
          <SectionLabel>Education</SectionLabel>
          <div className="border-t border-border mb-4" />
          <ul className="space-y-2 text-sm text-muted-foreground">
            {education.filter(Boolean).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </motion.section>
      </div>
    </main>
  )
}
