import Image from "next/image"
import { Nav } from "@/components/nav"

const principles = [
  {
    n: "01",
    title: "Fidelity is the point.",
    body: "If it loses something in handoff, it wasn't finished yet.",
  },
  {
    n: "02",
    title: "Own the whole vertical.",
    body: "Most teams split design and engineering. I don't.",
  },
  {
    n: "03",
    title: "Constraints are the brief.",
    body: "Limitations aren't blockers — they're where the real design decisions live.",
  },
  {
    n: "04",
    title: "Ship to learn.",
    body: "A component in production teaches you more than a month in Figma.",
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
                The handoff is where products lose fidelity.
              </h1>
              <p className="text-base leading-relaxed text-muted-foreground max-w-xl">
                I work on both sides of that gap. At Amazon that&apos;s meant
                owning two of our team&apos;s most-used features end-to-end —
                Figma explorations, frontend spec, React + TypeScript
                implementation. Same head, both sides.
              </p>
            </header>

            {/* Principles */}
            <section>
              <SectionLabel>Principles</SectionLabel>
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
