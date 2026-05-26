import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "About",
  description:
    "Design engineer working across Figma and React. Currently at Amazon's Product Image Experience team.",
}
import { Nav } from "@/components/nav"

const principles = [
  {
    n: "01",
    title: "Fidelity matters to me.",
    body: "If it loses something in handoff, it wasn't finished yet.",
  },
  {
    n: "02",
    title: "I'm drawn to the complicated flows.",
    body: "The ones that feel like they can't be simplified usually can.",
  },
  {
    n: "03",
    title: "I like when design and engineering inform each other.",
    body: "I've worked on both sides, and that perspective makes me better at each one.",
  },
  {
    n: "04",
    title: "Constraints are where the real decisions happen.",
    body: "Limitations aren't blockers — they're where the interesting design problems live.",
  },
]

const stack = ["React · TypeScript", "Tailwind", "Figma"]

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
      {children}
    </p>
  )
}

// function Placeholder({ label, className }: { label?: string; className?: string }) {
//   return (
//     <div
//       className={`flex items-center justify-center rounded-sm ${className}`}
//       style={{
//         backgroundImage:
//           "repeating-linear-gradient(-45deg, transparent, transparent 6px, oklch(0.9 0.003 34.3) 6px, oklch(0.9 0.003 34.3) 7px)",
//         backgroundColor: "oklch(0.96 0.002 17.2)",
//       }}
//     >
//       {label && (
//         <span className="font-sans italic text-sm text-muted-foreground bg-background/80 px-2 py-1 rounded">
//           {label}
//         </span>
//       )}
//     </div>
//   );
// }

export default function AboutPage() {
  return (
    <>
      <Nav active="About" />
      <main className="px-8 md:px-12 pb-24">
        <div className="pt-8 grid grid-cols-1 md:grid-cols-[1fr_380px] gap-16 items-start">
          {/* Left column */}
          <div>
            {/* Header */}
            <header className="mb-12">
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
                About
              </p>
              <h1 className="font-heading font-bold text-5xl md:text-6xl tracking-tight leading-[1.05] mb-6">
                Design and engineering feel like the same job to me.
              </h1>
              <p className="text-base leading-relaxed text-muted-foreground max-w-xl">
                Currently at Amazon, building tools for sellers worldwide.
              </p>
            </header>

            {/* Principles */}
            <section>
              <SectionLabel>What I care about</SectionLabel>
              <div>
                {principles.map(({ n, title, body }) => (
                  <div key={n}>
                    <div className="border-t border-border" />
                    <div className="grid grid-cols-[60px_1fr] gap-4 py-5">
                      <span className="text-sm text-muted-foreground font-mono mt-0.5">
                        {n}
                      </span>
                      <div>
                        <p className="font-semibold mb-1">{title}</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {body}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="border-t border-border" />
              </div>
            </section>
          </div>

          {/* Right column */}
          <aside className="space-y-8 md:pt-10">
            {/* Portrait */}
            <div className="relative aspect-4/5 w-full rounded-sm overflow-hidden">
              <Image
                src="/portrait.jpeg"
                alt="Jeanette Silvas"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 380px"
                priority
              />
            </div>

            {/* Now */}
            <div>
              <SectionLabel>Now</SectionLabel>
              <p className="text-sm">Amazon · Product Image Experience team</p>
            </div>

            {/* Before */}
            <div>
              <SectionLabel>Before</SectionLabel>
              <p className="text-sm">AWS · InVision · Expedia</p>
            </div>

            {/* Stack */}
            <div>
              <SectionLabel>Stack</SectionLabel>
              <ul className="space-y-1">
                {stack.map((item) => (
                  <li key={item} className="text-sm font-mono">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </main>
    </>
  )
}
