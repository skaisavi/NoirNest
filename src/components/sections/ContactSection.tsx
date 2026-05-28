"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function ContactSection() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      setStatus("Please complete the required fields.");
      form.reportValidity();
      return;
    }

    setStatus("Enquiry noted. NoirNest will reply within 48 hours.");
    form.reset();
  }

  return (
    <section id="contact" className="border-t border-white/10 bg-ink py-24 md:py-28">
      <Container className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionLabel>Contact CTA</SectionLabel>
          <h2 className="font-serif text-4xl font-bold leading-tight text-ivory md:text-6xl">
            Tell us what the room needs to become.
          </h2>
          <p className="mt-6 text-base leading-8 text-ivory/68">
            Share the room type, location, timeline, and what currently feels unresolved. A few
            clear details are enough for the first conversation.
          </p>
          <address className="mt-6 not-italic text-ivory/68">
            Email:{" "}
            <a href="mailto:hello@noirnest.com" className="text-gold no-underline">
              hello@noirnest.com
            </a>
          </address>
        </div>
        <GlassCard className="p-6">
          <form onSubmit={handleSubmit} className="grid gap-4" noValidate>
            <div className="grid gap-4 md:grid-cols-2">
              <label className="grid gap-2">
                <span className="text-xs font-extrabold uppercase tracking-[0.12em] text-ivory/78">
                  Name
                </span>
                <input
                  required
                  name="name"
                  autoComplete="name"
                  className="rounded-md border border-white/10 bg-obsidian px-4 py-3 text-ivory transition hover:border-white/20 focus:border-gold/60"
                />
              </label>
              <label className="grid gap-2">
                <span className="text-xs font-extrabold uppercase tracking-[0.12em] text-ivory/78">
                  Email
                </span>
                <input
                  required
                  type="email"
                  name="email"
                  autoComplete="email"
                  className="rounded-md border border-white/10 bg-obsidian px-4 py-3 text-ivory transition hover:border-white/20 focus:border-gold/60"
                />
              </label>
            </div>
            <label className="grid gap-2">
              <span className="text-xs font-extrabold uppercase tracking-[0.12em] text-ivory/78">
                Space type
              </span>
              <select
                name="spaceType"
                className="rounded-md border border-white/10 bg-obsidian px-4 py-3 text-ivory transition hover:border-white/20 focus:border-gold/60"
              >
                <option>Private apartment</option>
                <option>Bedroom styling</option>
                <option>Boutique cafe</option>
                <option>Studio or workspace</option>
              </select>
            </label>
            <label className="grid gap-2">
              <span className="text-xs font-extrabold uppercase tracking-[0.12em] text-ivory/78">
                Message
              </span>
              <textarea
                required
                name="message"
                rows={6}
                className="resize-y rounded-md border border-white/10 bg-obsidian px-4 py-3 text-ivory transition hover:border-white/20 focus:border-gold/60"
              />
            </label>
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Button type="submit">Send Enquiry</Button>
              <p role="status" aria-live="polite" className="text-sm text-gold">
                {status}
              </p>
            </div>
          </form>
        </GlassCard>
      </Container>
    </section>
  );
}
