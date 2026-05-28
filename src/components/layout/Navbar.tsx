"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gold/10 bg-obsidian/78 backdrop-blur-2xl">
      <Container className="flex min-h-[72px] items-center justify-between">
        <a
          href="#top"
          className="font-serif text-xl font-bold tracking-[0.08em] text-ivory no-underline"
          aria-label="NoirNest home"
        >
          NoirNest
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-xs font-bold uppercase tracking-[0.1em] text-ivory/62 transition hover:text-ivory after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-gold/70 after:transition-all hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
          className="grid size-11 place-items-center rounded-full border border-gold/12 text-ivory md:hidden"
        >
          <span className="sr-only">Menu</span>
          <span className="grid gap-1.5" aria-hidden="true">
            <span
              className={cn(
                "block h-0.5 w-5 bg-current transition",
                isOpen && "translate-y-1 rotate-45",
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-5 bg-current transition",
                isOpen && "-translate-y-1 -rotate-45",
              )}
            />
          </span>
        </button>
      </Container>
      {isOpen && (
        <div className="absolute left-4 right-4 top-[72px] rounded-xl border border-gold/12 bg-ink/98 p-2 shadow-luxury md:hidden">
          <nav aria-label="Mobile navigation" className="grid">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="border-b border-gold/[0.08] px-4 py-4 text-xs font-bold uppercase tracking-[0.1em] text-ivory/72 last:border-b-0 hover:text-ivory"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
