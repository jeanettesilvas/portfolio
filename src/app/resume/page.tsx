import { Nav } from "@/components/nav";
import { PrintButton } from "@/components/print-button";

const experience = [
  {
    company: "Amazon",
    role: "Product Image Experience · design + frontend",
    years: "2021 — now",
  },
  {
    company: "AWS",
    role: "Frontend engineer",
    years: "2019 — 2021",
  },
  {
    company: "InVision",
    role: "Design technologist",
    years: "2016 — 2019",
  },
  {
    company: "Expedia",
    role: "Frontend engineer",
    years: "2014 — 2016",
  },
];

const stack = [
  "React · TypeScript · Next.js",
  "Tailwind CSS · CSS-in-JS",
  "Figma · design systems",
  "Node.js · Supabase",
];

const education = [
  "B.S. Computer Science",
  "University of Washington, 2014",
  "",
  "AWS Certified Developer",
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
      {children}
    </p>
  );
}

export default function ResumePage() {
  return (
    <>
      <Nav active="Resume" />
      <main className="px-8 md:px-12 pb-24 print:px-0 print:pb-0">
        {/* Header */}
        <header className="pt-8 pb-10 flex items-start justify-between">
          <div>
            <h1 className="font-heading font-bold text-5xl tracking-tight mb-2">
              Jeanette Silvas
            </h1>
            <p className="text-muted-foreground">
              Design engineer · Seattle · jeanettesilvas.dev@gmail.com
            </p>
          </div>
          <div className="print:hidden">
            <PrintButton />
          </div>
        </header>

        {/* Experience */}
        <section className="mb-14">
          <SectionLabel>Experience</SectionLabel>
          <div className="border-t border-border" />
          {experience.map(({ company, role, years }) => (
            <div key={company}>
              <div className="grid grid-cols-[160px_1fr_auto] items-center gap-6 py-5">
                <span className="font-semibold">{company}</span>
                <span className="text-muted-foreground text-sm">{role}</span>
                <span className="text-sm text-muted-foreground whitespace-nowrap">
                  {years}
                </span>
              </div>
              <div className="border-t border-border" />
            </div>
          ))}
        </section>

        {/* Stack + Education */}
        <div className="grid grid-cols-2 gap-12">
          <section>
            <SectionLabel>Stack</SectionLabel>
            <div className="border-t border-border mb-4" />
            <ul className="space-y-2 text-sm text-muted-foreground">
              {stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <SectionLabel>Education / Etc</SectionLabel>
            <div className="border-t border-border mb-4" />
            <ul className="space-y-2 text-sm text-muted-foreground">
              {education.filter(Boolean).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}
