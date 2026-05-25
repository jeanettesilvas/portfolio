import Link from "next/link";

const links = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

export function Nav({ active }: { active?: string }) {
  return (
    <nav className="flex items-center justify-between px-8 py-6 md:px-12">
      <Link href="/" className="text-xl font-bold tracking-tight">
        jeanette.
      </Link>
      <ul className="flex items-center gap-7">
        {links.map(({ label, href }) => (
          <li key={label}>
            <Link
              href={href}
              className={`text-sm font-medium transition-colors ${
                active === label
                  ? "border-b border-foreground pb-0.5"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
