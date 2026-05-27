import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch about design engineering roles.",
}

const links = [
  {
    label: "Email",
    display: "jeanettesilvas.dev@gmail.com",
    href: "mailto:jeanettesilvas.dev@gmail.com",
  },
  {
    label: "LinkedIn",
    display: "/in/jeanettesilvas",
    href: "https://www.linkedin.com/in/jeanettesilvas",
  },
  {
    label: "GitHub",
    display: "@jeanettesilvas",
    href: "https://github.com/jeanettesilvas",
  },
]

export default function ContactPage() {
  return (
    <>
      <main className="px-8 md:px-12 pb-24">
        {/* Header */}
        <header className="pt-8 pb-12">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
            Contact
          </p>
          <h1 className="font-heading font-bold text-5xl md:text-6xl tracking-tight leading-[1.05] mb-6 max-w-lg">
            Hiring for design engineering?
          </h1>
          <p className="text-muted-foreground max-w-md leading-relaxed">
            I&apos;m moving toward design engineering full-time. Let&apos;s
            talk.
          </p>
        </header>

        {/* Contact links */}
        <div>
          {links.map(({ label, display, href }) => (
            <div key={label}>
              <div className="border-t border-border" />
              <a
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="grid grid-cols-[160px_1fr] items-center gap-6 py-5 group hover:opacity-70 transition-opacity"
              >
                <span className="text-xs uppercase tracking-widest text-muted-foreground">
                  {label}
                </span>
                <span className="text-base font-medium">{display}</span>
              </a>
            </div>
          ))}
          <div className="border-t border-border" />
        </div>
      </main>
    </>
  )
}
