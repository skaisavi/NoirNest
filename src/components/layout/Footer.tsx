import Link from "next/link";
import { Container } from "@/components/ui/Container";

const footerLinks = [
  { label: "Work", href: "/projects" },
  { label: "Contact", href: "/contact" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-obsidian text-ivory/62">
      <Container className="flex min-h-24 flex-col items-start justify-between gap-4 py-6 md:flex-row md:items-center">
        <small>Copyright {new Date().getFullYear()} NoirNest. Crafted with restraint.</small>
        <nav aria-label="Footer navigation" className="flex gap-5">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-bold uppercase tracking-[0.08em] transition hover:text-ivory"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </Container>
    </footer>
  );
}
