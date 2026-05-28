import { Container } from "@/components/ui/Container";

const footerLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-gold/10 bg-obsidian text-ivory/62">
      <Container className="grid gap-8 py-10 md:grid-cols-[1fr_auto] md:items-end md:py-12">
        <div>
          <a href="#top" className="font-serif text-3xl font-bold tracking-[0.08em] text-ivory">
            NoirNest
          </a>
          <p className="mt-3 max-w-md text-sm leading-6 text-ivory/56">
            Dark luxury interiors for compact homes, boutique rooms, and cinematic everyday spaces.
          </p>
          <small className="mt-6 block">
            Copyright {new Date().getFullYear()} NoirNest. Crafted with restraint.
          </small>
        </div>
        <div className="grid gap-4 md:justify-items-end">
          <a href="mailto:hello@noirnest.com" className="text-sm text-gold">
            hello@noirnest.com
          </a>
          <nav aria-label="Footer navigation" className="flex gap-5">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-bold uppercase tracking-[0.1em] transition hover:text-ivory"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </Container>
    </footer>
  );
}
