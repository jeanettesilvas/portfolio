import Link from "next/link";
import { Nav } from "@/components/nav";

const projects = [
  {
    year: "2024",
    title: "Bulk Upload",
    meta: "Amazon · design + eng",
    cta: { label: "Case study →", href: "/work/bulk-upload" },
  },
  {
    year: "2023",
    title: "Image Manager",
    meta: "Amazon · design + eng",
    cta: { label: "Case study →", href: "/work/image-manager" },
  },
  {
    year: "2025",
    title: "Craft Log",
    meta: "Personal · live app",
    cta: { label: "Live · craftlog.app →", href: "https://craftlog.app" },
  },
];

export default function WorkPage() {
  return (
    <>
      <Nav active="Work" />
      <main className="px-8 md:px-12 pb-24">
        {/* Header */}
        <header className="pt-8 pb-10">
          <h1 className="font-heading font-bold text-5xl md:text-6xl tracking-tight mb-3">
            Selected work, 2014 — now.
          </h1>
          <p className="text-muted-foreground">
            Three I owned end-to-end. Resume covers the rest.
          </p>
        </header>

        {/* List */}
        <div>
          <div className="border-t border-border" />
          {projects.map(({ year, title, meta, cta }) => (
            <div key={title}>
              <Link
                href={cta.href}
                className="group grid grid-cols-[80px_1fr_auto] md:grid-cols-[100px_1fr_220px_200px] items-center gap-6 py-8 hover:opacity-70 transition-opacity"
              >
                <span className="text-sm text-muted-foreground">{year}</span>
                <span className="font-heading font-bold text-3xl md:text-4xl">
                  {title}
                </span>
                <span className="hidden md:block text-muted-foreground text-sm">
                  {meta}
                </span>
                <span className="text-sm font-medium text-right">{cta.label}</span>
              </Link>
              <div className="border-t border-border" />
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
