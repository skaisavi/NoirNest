import { faqs } from "@/data/faqs";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function FAQSection() {
  return (
    <section className="py-24 md:py-28">
      <Container>
        <div className="mb-9 max-w-3xl">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="font-serif text-4xl font-bold leading-tight text-ivory md:text-6xl">
            Practical answers, no theatre.
          </h2>
        </div>
        <div className="grid gap-4">
          {faqs.map((faq) => (
            <GlassCard key={faq.question} className="p-6">
              <h3 className="font-serif text-2xl font-bold text-ivory">{faq.question}</h3>
              <p className="mt-4 text-sm leading-7 text-ivory/66">{faq.answer}</p>
            </GlassCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
