"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
    <section
      id="contact"
      className="border-t border-gold/10 bg-[radial-gradient(circle_at_80%_20%,rgba(193,161,105,0.09),transparent_25rem),linear-gradient(180deg,#0d0b0a,#050404)] py-28 md:py-36"
    >
      <Container className="grid gap-12 md:grid-cols-[0.86fr_1.14fr]">
        <div>
          <SectionLabel>Private Consultation</SectionLabel>
          <h2 className="font-serif text-[clamp(2.7rem,6vw,5.7rem)] font-bold leading-[0.98] text-ivory">
            Start with the room you cannot stop thinking about.
          </h2>
          <p className="mt-6 text-base leading-8 text-ivory/68">
            Tell us what feels unfinished. We&apos;ll help shape it into a space with depth, warmth,
            and quiet luxury.
          </p>
          <address className="mt-6 not-italic text-ivory/68">
            Email:{" "}
            <a href="mailto:hello@noirnest.com" className="text-gold no-underline">
              hello@noirnest.com
            </a>
          </address>
        </div>
        <GlassCard className="p-6 md:p-8">
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
                  className="rounded-lg border border-gold/10 bg-obsidian/80 px-4 py-3 text-ivory transition hover:border-gold/25 focus:border-gold/60"
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
                  className="rounded-lg border border-gold/10 bg-obsidian/80 px-4 py-3 text-ivory transition hover:border-gold/25 focus:border-gold/60"
                />
              </label>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <label className="grid gap-2">
                <span className="text-xs font-extrabold uppercase tracking-[0.12em] text-ivory/78">
                  Project type
                </span>
                <select
                  name="projectType"
                  className="rounded-lg border border-gold/10 bg-obsidian/80 px-4 py-3 text-ivory transition hover:border-gold/25 focus:border-gold/60"
                >
                  <option>Apartment</option>
                  <option>Bedroom</option>
                  <option>Cafe</option>
                  <option>Studio</option>
                  <option>Moodboard</option>
                  <option>Renovation concept</option>
                </select>
              </label>
              <label className="grid gap-2">
                <span className="text-xs font-extrabold uppercase tracking-[0.12em] text-ivory/78">
                  Preferred mood
                </span>
                <select
                  name="preferredMood"
                  className="rounded-lg border border-gold/10 bg-obsidian/80 px-4 py-3 text-ivory transition hover:border-gold/25 focus:border-gold/60"
                >
                  <option>Smoke & Walnut</option>
                  <option>Sand & Shadow</option>
                  <option>Velvet Dusk</option>
                  <option>Marble Noir</option>
                  <option>Not sure yet</option>
                </select>
              </label>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <label className="grid gap-2">
                <span className="text-xs font-extrabold uppercase tracking-[0.12em] text-ivory/78">
                  Budget range
                </span>
                <select
                  name="budgetRange"
                  className="rounded-lg border border-gold/10 bg-obsidian/80 px-4 py-3 text-ivory transition hover:border-gold/25 focus:border-gold/60"
                >
                  <option>Under £1,000</option>
                  <option>£1,000 - £2,500</option>
                  <option>£2,500 - £5,000</option>
                  <option>£5,000 - £10,000</option>
                  <option>£10,000+</option>
                </select>
              </label>
              <label className="grid gap-2">
                <span className="text-xs font-extrabold uppercase tracking-[0.12em] text-ivory/78">
                  Timeline
                </span>
                <select
                  name="timeline"
                  className="rounded-lg border border-gold/10 bg-obsidian/80 px-4 py-3 text-ivory transition hover:border-gold/25 focus:border-gold/60"
                >
                  <option>This month</option>
                  <option>1-3 months</option>
                  <option>3-6 months</option>
                  <option>Just exploring</option>
                </select>
              </label>
            </div>
            <label className="grid gap-2">
              <span className="text-xs font-extrabold uppercase tracking-[0.12em] text-ivory/78">
                Message
              </span>
              <textarea
                required
                name="message"
                rows={6}
                className="resize-y rounded-lg border border-gold/10 bg-obsidian/80 px-4 py-3 text-ivory transition hover:border-gold/25 focus:border-gold/60"
              />
            </label>
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Button type="submit" className="w-full sm:w-auto">
                Send Enquiry
              </Button>
              <AnimatePresence>
                {status ? (
                  <motion.p
                    key={status}
                    role="status"
                    aria-live="polite"
                    className="text-sm text-gold"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                  >
                    {status}
                  </motion.p>
                ) : null}
              </AnimatePresence>
            </div>
          </form>
        </GlassCard>
      </Container>
    </section>
  );
}
