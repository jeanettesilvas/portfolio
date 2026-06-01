"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { fadeUp } from "@/lib/animations"
import { TableOfContents } from "@/components/work/toc"
import { cn } from "@/lib/utils"

const tocSections = [
  { id: "problem", label: "Problem" },
  { id: "decisions", label: "Decisions" },
  { id: "outcome", label: "Outcome" },
  { id: "retrospective", label: "Retrospective" },
]

const stack = [
  "React · TS",
  "Tailwind",
  "Figma",
  "Internal design system",
  "AG Grid",
]

const outcomes = [{ stat: "↓20%", label: "support tickets" }]

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

const scrollFadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5, ease: "easeOut" as const },
}

export function BulkUploadContent() {
  return (
    <div className="px-8 md:px-12 py-10 pb-24">
      {/* Page header */}
      <header className="mb-10">
        <motion.h1
          {...fadeUp(0)}
          className="font-heading font-bold text-5xl tracking-tight mb-2"
        >
          Bulk Image Upload
        </motion.h1>
        <motion.p {...fadeUp(0.1)} className="text-muted-foreground">
          Amazon · 2024–2025 · design + engineering
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
            <div className="space-y-4 text-base leading-relaxed mb-8">
              <p>
                Amazon sellers — from global brands like Procter &amp; Gamble to
                small independent businesses — upload product images in bulk,
                sometimes hundreds at a time across multiple products and
                variants. The existing tool put the burden entirely on the
                seller before a single file could be uploaded: every image had
                to be renamed using an exact format, bundled into a zip, and
                submitted with no indication of whether anything was wrong until
                after the fact. On-screen feedback was a generic failure
                message. Detailed errors were buried in a downloadable CSV that
                sellers had to hunt for and parse themselves.
              </p>
              <p>
                A separate, nearly identical page existed for country-specific
                images, requiring sellers to navigate between two tools to
                complete what was essentially one task.
              </p>
              <p>
                The tool worked, but it was unforgiving — and the volume of
                customer contacts reflected it.
              </p>
            </div>
            <Image
              src="/images/biu-problem.svg"
              alt="Problem"
              width={888}
              height={640}
              priority
            />
          </motion.section>

          {/* 02 Decisions */}
          <motion.section id="decisions" {...scrollFadeUp}>
            <SectionLabel n="02" />
            <h2 className="font-heading font-bold text-4xl mb-10">Decisions</h2>

            <div className="space-y-14">
              <motion.div {...scrollFadeUp}>
                <h3 className="font-heading font-bold text-2xl mb-4">
                  Decision 1 — The naming convention was doing the work the UI
                  should have been doing.
                </h3>
                <div className="space-y-4 text-base leading-relaxed mb-6">
                  <p>
                    The strict filename format —{" "}
                    <code className="text-sm bg-muted px-1.5 py-0.5 rounded">
                      [product-id].[variant].[ext]
                    </code>{" "}
                    — existed because the system needed to know where each image
                    belonged. It was a metadata problem solved by pushing the
                    work onto the seller. The obvious alternative was to let
                    sellers upload files with any name, then collect that
                    metadata through the interface itself during an explicit
                    assignment step.
                  </p>
                  <p>
                    This kept the old convention as an option for sellers
                    already accustomed to it, while removing it as a requirement
                    for everyone else. The assignment step became its own
                    distinct part of the workflow rather than something sellers
                    had to complete before they even touched the tool.
                  </p>
                </div>
                <Image
                  src={"/images/biu-decision-1.svg"}
                  alt="Decision 1"
                  width={800}
                  height={450}
                  style={{ height: "auto" }}
                />
              </motion.div>

              <motion.div {...scrollFadeUp}>
                <h3 className="font-heading font-bold text-2xl mb-4">
                  Decision 2 — Errors needed to surface before submission, not
                  after.
                </h3>
                <div className="space-y-4 text-base leading-relaxed mb-6">
                  <p>
                    The new upload page accepted individual files or zip files
                    with no naming requirements. As files were selected, basic
                    validation ran immediately — unsupported file types,
                    duplicates, anything catchable on the client side — with
                    inline feedback on the offending file rather than a generic
                    page-level message. Sellers could see and fix problems
                    before hitting upload, rather than discovering them in a CSV
                    afterward.
                  </p>
                  <p>
                    Once uploaded, a second layer of backend validation ran
                    against each image — checking things like background color,
                    logo presence, and other Amazon image requirements. These
                    results surfaced in the Assign Images table as an Issues
                    column, giving sellers a specific reason for each failure
                    and a path to resolve it in place rather than starting over.
                  </p>
                  <p>
                    The two separate upload pages — one for standard images, one
                    for country-specific — were consolidated into one. A country
                    field was added as an optional input alongside product ID,
                    covering both use cases without requiring sellers to
                    navigate between tools.
                  </p>
                  <p>
                    Assignment metadata could also be provided upfront as an
                    optional shortcut. If all images in a batch belonged to the
                    same product, a seller could fill in the product ID once and
                    skip the assignment step entirely for that batch.
                  </p>
                </div>
                <Image
                  src="/images/biu-decision-2.svg"
                  alt="Decision 2"
                  width={888}
                  height={640}
                />
              </motion.div>

              <motion.div {...scrollFadeUp}>
                <h3 className="font-heading font-bold text-2xl mb-4">
                  Decision 3 — The hardest decision wasn&apos;t design. It was
                  where things lived.
                </h3>
                <div className="space-y-6 text-base leading-relaxed">
                  <p>
                    Once images were uploaded and validated, they needed
                    somewhere to live until they were assigned to a product. My
                    original design was a unified Media Manager — a single table
                    showing all of a seller&apos;s images regardless of status,
                    filterable by Unassigned, Uploaded, Live, and other states.
                    One place to see everything, act on anything.
                  </p>
                  <Image
                    src="/images/biu-decision-3-1.svg"
                    alt="Decision 3, part 1"
                    width={888}
                    height={640}
                  />
                  <p>
                    The backend couldn&apos;t support it at the time. The data
                    model that powered Image Manager — organized around
                    products, not images — made a flat, image-first table view
                    technically out of reach without significant infrastructure
                    work that wasn&apos;t scoped for this project.
                  </p>
                  <p>
                    The first compromise was a separate Assign Images tab. It
                    kept unassigned images visible without requiring changes to
                    Image Manager, but it introduced a problem I flagged at the
                    time: sellers who uploaded images and then left the page had
                    no obvious reason to go back to a tab they&apos;d never used
                    before. The assignment step was easy to miss.
                  </p>
                  <Image
                    src="/images/biu-decision-3-2.svg"
                    alt="Decision 3, part 2"
                    width={888}
                    height={640}
                  />
                  <p>
                    The second compromise made it worse. For reasons of scope
                    and timeline, the unassigned images table was moved to its
                    own separate page entirely, one more step removed from the
                    upload moment.
                  </p>
                  <p>
                    The data confirmed what the design suggested — sellers
                    weren&apos;t completing the assignment step, and images were
                    sitting unassigned. The team is now scoping a project to
                    bring the unassigned table back onto the upload page, and
                    the unified media table remains the longer-term goal.
                  </p>
                  <Image
                    src="/images/biu-decision-3-3.svg"
                    alt="Decision 3, part 3"
                    width={888}
                    height={640}
                  />
                </div>
              </motion.div>
            </div>
          </motion.section>

          {/* 03 Outcome */}
          <motion.section id="outcome" {...scrollFadeUp}>
            <SectionLabel n="03" />
            <h2 className="font-heading font-bold text-4xl mb-6">Outcome</h2>
            <div className="grid grid-cols-3 gap-4 mb-8">
              {outcomes.map(({ stat, label }) => (
                <div
                  key={stat}
                  className="border border-border rounded-sm p-6 text-center"
                >
                  <p className="font-heading font-bold text-4xl">{stat}</p>
                  <p className="text-sm text-muted-foreground mt-2">{label}</p>
                </div>
              ))}
            </div>
            <div className="space-y-4 text-base leading-relaxed">
              <p>
                The redesign resulted in a 20% reduction in customer contacts
                related to bulk image upload — a meaningful signal that sellers
                were completing the workflow with less confusion and fewer
                errors than before.
              </p>
              <p>
                The consolidation of two upload pages into one, combined with
                inline validation and the explicit assignment step, removed the
                most common failure points from the old experience. Sellers no
                longer needed to prepare files correctly before touching the
                tool — the tool met them where they were.
              </p>
              <p>
                The assignment completion rate told a different story. Images
                were being uploaded successfully, but too many were sitting
                unassigned — a gap that traced directly back to the placement of
                the assignment step. The 20% improvement was real, but
                incomplete.
              </p>
            </div>
          </motion.section>

          {/* 04 Retrospective */}
          <motion.section id="retrospective" {...scrollFadeUp}>
            <SectionLabel n="04" />
            <h2 className="font-heading font-bold text-4xl mb-6">
              Retrospective
            </h2>
            <div className="space-y-4 text-base leading-relaxed">
              <p>
                The bulk image upload redesign shipped better than what it
                replaced, and the outcome data confirmed it. But the version I
                originally designed — where upload and assignment lived
                together, and all of a seller&apos;s media was visible in one
                place — was closer to the right answer than what we shipped.
              </p>
              <p>
                The constraints were real. The backend couldn&apos;t support the
                unified media table, and the timeline couldn&apos;t absorb the
                scope of keeping the unassigned table on the upload page. These
                weren&apos;t bad decisions in the moment so much as deferred
                ones, and the user behavior data has since validated what the
                design was trying to prevent.
              </p>
              <p>
                What I&apos;d do differently is less about advocacy — I made the
                case for keeping assignment on the upload page, and the
                constraints were genuinely immovable at the time. The timeline
                was tight, the backend wasn&apos;t ready, and sometimes
                that&apos;s just the reality of shipping. What I&apos;d carry
                forward is the importance of documenting the known tradeoffs
                explicitly when committing to a compromise, so the path back to
                the right solution is already mapped when the team is ready to
                build it.
              </p>
              <p>
                The team is now scoping the fix: bringing unassigned images onto
                the upload page where they belong. The unified media table is
                the longer-term goal. Both feel inevitable in retrospect, which
                is its own kind of validation.
              </p>
            </div>
          </motion.section>
        </main>
      </div>
    </div>
  )
}
