import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionLabel } from "@/components/ui/SectionLabel";

const trustStats = [
  { value: "18", label: "rooms styled" },
  { value: "4", label: "London districts" },
  { value: "48h", label: "enquiry reply" },
];

export function HeroSection() {
  return (
    <section id="top" className="relative isolate overflow-hidden border-b border-gold/10">
      <div className="absolute inset-0 -z-20 bg-obsidian" />
      <div
        className="absolute inset-0 -z-10 bg-cover bg-[center_45%] opacity-70 animate-image-reveal"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(5,4,4,0.96) 0%, rgba(5,4,4,0.78) 44%, rgba(5,4,4,0.5) 100%), linear-gradient(180deg, rgba(5,4,4,0.12), rgba(5,4,4,0.96)), url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1900&auto=format&fit=crop')",
        }}
      />
      <div className="absolute left-1/2 top-24 -z-10 h-72 w-72 rounded-full bg-gold/14 blur-[120px]" />
      <Container className="grid min-h-[calc(100svh-72px)] gap-10 py-20 pb-10 md:py-24 lg:grid-cols-[0.98fr_0.82fr] lg:items-center">
        <div className="max-w-[820px] animate-fade-up">
          <div className="mb-7 h-px w-24 bg-gradient-to-r from-gold to-transparent" />
          <SectionLabel>Dark luxury interior studio</SectionLabel>
          <h1 className="max-w-[9ch] font-serif text-[clamp(4rem,14vw,9.4rem)] font-bold leading-[0.92] tracking-[0.005em] text-ivory">
            NoirNest
          </h1>
          <p className="mt-7 max-w-[34rem] text-base leading-8 text-ivory/76 md:text-xl md:leading-9">
            Cinematic apartment, bedroom, cafe, and workspace interiors shaped with warm light,
            smoked materials, and the quiet drama of a room that knows exactly what it is.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="#projects">View Projects</Button>
            <Button href="#contact" variant="outline">
              Start an Enquiry
            </Button>
          </div>
          <dl className="mt-12 grid max-w-xl grid-cols-3 border-y border-gold/12">
            {trustStats.map((stat) => (
              <div key={stat.label} className="border-r border-gold/12 py-5 pr-4 last:border-r-0">
                <dt className="font-serif text-3xl font-bold text-gold md:text-4xl">{stat.value}</dt>
                <dd className="mt-1 text-[0.65rem] font-extrabold uppercase tracking-[0.14em] text-ivory/52">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto hidden w-full max-w-[520px] lg:block">
          <div className="relative h-[620px]">
            <div className="absolute right-0 top-0 h-[470px] w-[72%] overflow-hidden rounded-t-full rounded-b-[1.75rem] border border-gold/12 shadow-luxury">
              <Image
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1100&auto=format&fit=crop"
                alt="Dark luxury interior seating with warm ambient lighting"
                fill
                priority
                sizes="42vw"
                className="object-cover brightness-[0.78] contrast-110 saturate-[0.82]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,4,4,0.02),rgba(5,4,4,0.42))]" />
            </div>
            <GlassCard className="absolute bottom-12 left-0 w-[62%] p-5">
              <p className="text-[0.65rem] font-extrabold uppercase tracking-[0.16em] text-gold">
                Current mood
              </p>
              <p className="mt-4 font-serif text-2xl leading-tight text-ivory">
                Walnut, linen, brass, low amber light.
              </p>
            </GlassCard>
            <div className="absolute bottom-0 right-8 h-44 w-48 overflow-hidden rounded-xl border border-gold/12 shadow-luxury">
              <Image
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=700&auto=format&fit=crop"
                alt="Layered neutral bedroom detail"
                fill
                sizes="220px"
                className="object-cover brightness-[0.82] contrast-110 saturate-[0.8]"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
