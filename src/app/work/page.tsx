import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected design engineering work — Bulk Image Upload, Image Manager, and Craft Log.",
};
import { Nav } from "@/components/nav";

const projects = [
  {
    title: "Bulk Image Upload",
    company: "Amazon",
    year: "2025",
    href: "/work/bulk-upload",
  },
  {
    title: "Image Manager",
    company: "Amazon",
    year: "2026",
    href: "/work/image-manager",
  },
  {
    title: "Craft Log",
    company: "Personal",
    year: "2026",
    href: "https://craftlog.app",
  },
];

export default function WorkPage() {
  return (
    <>
      <Nav active="Work" />
      <main className="px-8 md:px-12 pb-24">
        {/* Header */}
        <header className="pt-8 pb-12">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
            Work
          </p>
          <h1 className="font-heading font-bold text-5xl md:text-6xl tracking-tight">
            Selected work.
          </h1>
        </header>

        {/* Card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map(({ title, company, year, href }) => (
            <Link
              key={title}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="border border-border rounded-sm overflow-hidden hover:opacity-80 transition-opacity block"
            >
              {/* Placeholder image */}
              <div
                className="w-full aspect-[4/3]"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(-45deg, transparent, transparent 6px, oklch(0.9 0.003 34.3) 6px, oklch(0.9 0.003 34.3) 7px)",
                  backgroundColor: "oklch(0.96 0.002 17.2)",
                }}
              />
              {/* Card footer */}
              <div className="px-5 pt-4 pb-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-heading font-bold text-xl">{title}</span>
                  <span className="text-sm text-muted-foreground">
                    {company} · {year}
                  </span>
                </div>
                <div className="border-t border-border" />
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
