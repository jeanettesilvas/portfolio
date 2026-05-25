import { Nav } from "@/components/nav";
import { Button } from "@/components/ui/button";

const projects = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
];

export default function Home() {
  return (
    <>
      <Nav active="Work" />
      <main className="px-8 md:px-12">
        {/* Hero */}
        <section className="pt-8 pb-20">
          <h1 className="font-heading font-bold text-6xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight mb-6 max-w-5xl">
            The handoff between design and engineering is where products lose fidelity.
          </h1>
          <p className="text-lg text-muted-foreground mb-10 max-w-lg leading-relaxed">
            I work on both sides of that gap. Currently at Amazon, on tools millions of sellers use.
          </p>
          <div className="flex items-center gap-4">
            <Button size="lg" className="normal-case tracking-normal text-sm" render={<a href="#work" />} nativeButton={false}>
              See the work →
            </Button>
            <Button size="lg" variant="outline" className="normal-case tracking-normal text-sm" render={<a href="/about" />} nativeButton={false}>
              About
            </Button>
          </div>
        </section>

        {/* Project grid */}
        <section id="work" className="grid grid-cols-1 md:grid-cols-3 gap-5 pb-24">
          {projects.map(({ id }) => (
            <div
              key={id}
              className="aspect-[4/3] rounded-sm bg-muted"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(-45deg, transparent, transparent 6px, oklch(0.9 0.003 34.3) 6px, oklch(0.9 0.003 34.3) 7px)",
              }}
            />
          ))}
        </section>
      </main>
    </>
  );
}
