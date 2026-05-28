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
    <section className="py-28 md:py-36">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div>
            <SectionLabel>Before / After</SectionLabel>
            <h2 className="font-serif text-[clamp(2.5rem,5.4vw,5rem)] font-bold leading-[1] text-ivory">
              Transformation without losing the comfort of home.
            </h2>
            <div className="mt-8 grid gap-4">
              {transformations.map((item) => (
                <GlassCard key={item.label} className="p-6 md:p-7">
                  <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-gold">
                    {item.label}
                  </p>
                  <p className="mt-4 text-base leading-8 text-ivory/70">{item.copy}</p>
                </GlassCard>
              ))}
            </div>
          </div>
          <div className="relative">
            <ImageFrame
              src="https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=1400&auto=format&fit=crop"
              alt="Warm dark interior transformation with layered lighting"
              className="h-[430px] md:h-[620px]"
            />
            <GlassCard className="absolute bottom-5 left-5 right-5 p-5 md:left-auto md:w-72">
              <p className="text-[0.65rem] font-extrabold uppercase tracking-[0.15em] text-gold">
                Finished palette
              </p>
              <div className="mt-4 flex gap-2">
                {["#2a1f18", "#7a654b", "#d8c7a3", "#11100e"].map((color) => (
                  <span
                    key={color}
                    className="h-8 flex-1 rounded-full border border-white/10"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </Container>
    </section>
  );
}
