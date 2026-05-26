import type { Metadata } from "next"
import { Nav } from "@/components/nav"

export const metadata: Metadata = {
  title: "Bulk Image Upload",
  description:
    "How I redesigned Amazon's bulk image upload flow — reducing errors by 34% and doubling completion rate.",
}
import { TableOfContents } from "@/components/work/toc"
import { CaseStudyTabs } from "@/components/work/case-study-tabs"
import { cn } from "@/lib/utils"

const tocSections = [
  { id: "problem", label: "Problem" },
  { id: "constraints", label: "Constraints" },
  { id: "explorations", label: "Explorations" },
  { id: "figma-code", label: "Figma ⇔ Code" },
  { id: "decisions", label: "Decisions" },
  { id: "outcome", label: "Outcome" },
  { id: "retrospective", label: "Retrospective" },
]

const stack = ["React · TS", "Tailwind", "Figma"]

const outcomes = [
  { stat: "↓34%", label: "upload errors" },
  { stat: "↑2.1x", label: "completion rate" },
  { stat: "↓20%", label: "support tickets" },
]

function Placeholder({
  label,
  className,
}: {
  label?: string
  className?: string
}) {
  return (
    <div
      className={cn("rounded-sm flex items-center justify-center", className)}
      style={{
        backgroundImage:
          "repeating-linear-gradient(-45deg, transparent, transparent 6px, oklch(0.9 0.003 34.3) 6px, oklch(0.9 0.003 34.3) 7px)",
        backgroundColor: "oklch(0.96 0.002 17.2)",
      }}
    >
      {label && (
        <span className="font-sans italic text-sm text-muted-foreground bg-background/80 px-2 py-1 rounded">
          {label}
        </span>
      )}
    </div>
  )
}

function SectionLabel({ n }: { n: string }) {
  return <p className="text-sm text-muted-foreground mb-1 font-mono">{n}</p>
}

export default function BulkUploadPage() {
  return (
    <>
      <Nav active="Work" />
      <div className="px-8 md:px-12 py-10 pb-24">
        {/* Page header */}
        <header className="mb-10">
          <h1 className="font-heading font-bold text-5xl tracking-tight mb-2">
            Bulk Image Upload
          </h1>
          <p className="text-muted-foreground">
            Amazon · 2024 · design + engineering
          </p>
        </header>

        {/* Two-column layout */}
        <div className="grid grid-cols-[240px_1fr] gap-16 items-start">
          {/* Sticky sidebar */}
          <aside className="sticky top-8 space-y-8">
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
          </aside>

          {/* Scrolling content */}
          <main className="space-y-20 min-w-0">
            {/* 01 Problem */}
            <section id="problem">
              <SectionLabel n="01" />
              <h2 className="font-heading font-bold text-4xl mb-6">Problem</h2>
              <div className="space-y-2 mb-8">
                <div className="h-px bg-border w-full" />
                <div className="h-px bg-border w-2/3" />
              </div>
              <Placeholder
                label="annotated screenshot of old flow"
                className="aspect-video w-full"
              />
            </section>

            {/* 02 Figma ⇔ Code */}
            <section id="figma-code">
              <SectionLabel n="02" />
              <h2 className="font-heading font-bold text-4xl mb-6">
                Figma ⇔ Code
              </h2>
              <CaseStudyTabs
                tabs={[
                  {
                    value: "figma",
                    label: "Figma",
                    content: (
                      <Placeholder
                        label="figma frame"
                        className="aspect-video w-full"
                      />
                    ),
                  },
                  {
                    value: "code",
                    label: "Code",
                    content: (
                      <Placeholder
                        label="code snapshot"
                        className="aspect-video w-full"
                      />
                    ),
                  },
                  {
                    value: "split",
                    label: "Split",
                    content: (
                      <Placeholder
                        label="split view"
                        className="aspect-video w-full"
                      />
                    ),
                  },
                ]}
              />
            </section>

            {/* 03 Outcome */}
            <section id="outcome">
              <SectionLabel n="03" />
              <h2 className="font-heading font-bold text-4xl mb-6">Outcome</h2>
              <div className="grid grid-cols-3 gap-4">
                {outcomes.map(({ stat, label }) => (
                  <div
                    key={stat}
                    className="border border-border rounded-sm p-6 text-center"
                  >
                    <p className="font-heading font-bold text-4xl">{stat}</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Remaining sections — placeholder */}
            {[
              { n: "04", id: "constraints", label: "Constraints" },
              { n: "05", id: "explorations", label: "Explorations" },
              { n: "06", id: "decisions", label: "Decisions" },
              { n: "07", id: "retrospective", label: "Retrospective" },
            ].map(({ n, id, label }) => (
              <section key={id} id={id}>
                <SectionLabel n={n} />
                <h2 className="font-heading font-bold text-4xl mb-6">
                  {label}
                </h2>
                <div className="space-y-2">
                  <div className="h-px bg-border w-full" />
                  <div className="h-px bg-border w-3/4" />
                  <div className="h-px bg-border w-1/2" />
                </div>
              </section>
            ))}
          </main>
        </div>
      </div>
    </>
  )
}
