import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { SectionLabel } from "@/components/ui/SectionLabel";

const transformations = [
  {
    label: "Before",
    copy: "Rooms with good bones but flat lighting, exposed clutter, mismatched furniture, and no clear emotional point of view.",
  },
  {
    label: "After",
    copy: "Layered lighting, dark timber, softened acoustics, better storage, and a cinematic palette that makes the room feel intentional.",
  },
];

export function BeforeAfterSection() {
  return (
    <section className="py-24 md:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionLabel>Before / After</SectionLabel>
            <h2 className="font-serif text-4xl font-bold leading-tight text-ivory md:text-6xl">
              Transformation without losing the comfort of home.
            </h2>
            <div className="mt-8 grid gap-4">
              {transformations.map((item) => (
                <GlassCard key={item.label} className="p-6">
                  <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-gold">
                    {item.label}
                  </p>
                  <p className="mt-4 text-base leading-8 text-ivory/70">{item.copy}</p>
                </GlassCard>
              ))}
            </div>
          </div>
          <ImageFrame
            src="https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=1400&auto=format&fit=crop"
            alt="Warm dark interior transformation with layered lighting"
            className="h-[420px] md:h-[560px]"
          />
        </div>
      </Container>
    </section>
  );
}
