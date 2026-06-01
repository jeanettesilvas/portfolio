'use client'

import Link from "next/link";
import { LayoutGroup, motion } from "framer-motion";
import { useId } from "react";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./theme-toggle";

const links = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

function getActive(pathname: string): string | undefined {
  if (pathname.startsWith("/work")) return "Work";
  if (pathname.startsWith("/about")) return "About";
  if (pathname.startsWith("/resume")) return "Resume";
  if (pathname.startsWith("/contact")) return "Contact";
  return undefined;
}

export function Nav() {
  const id = useId();
  const pathname = usePathname();
  const active = getActive(pathname);

  return (
    <nav className="flex items-center justify-between px-8 py-6 md:px-12">
      <Link href="/" className="text-xl font-bold tracking-tight">
        jeanette.
      </Link>
      <LayoutGroup id={id}>
        <ul className="flex items-center gap-7">
          {links.map(({ label, href }) => {
            const isCurrent = active === label;
            return (
              <li key={label} className="relative">
                <Link
                  href={href}
                  className={`text-sm font-medium transition-colors pb-0.5 ${
                    isCurrent ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {label}
                </Link>
                {isCurrent && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-0 -bottom-0.5 h-px bg-foreground"
                    transition={{ type: "spring", stiffness: 400, damping: 35 }}
                  />
                )}
              </li>
            );
          })}
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </LayoutGroup>
    </nav>
  );
}
