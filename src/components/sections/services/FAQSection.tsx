import { serviceFaqs } from "@/data/faqs";
import { Container } from "@/components/ui/Container";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function FAQSection() {
  return (
    <section className="pb-24 md:pb-32">
      <Container>
        <SectionLabel>FAQ</SectionLabel>
        <h2 className="mb-8 max-w-3xl font-serif text-5xl font-bold leading-none text-ivory">
          Practical answers, without killing the mood.
        </h2>
        <FAQAccordion items={serviceFaqs} />
      </Container>
    </section>
  );
}
