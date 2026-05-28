import { contactFaqs } from "@/data/faqs";
import { Container } from "@/components/ui/Container";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function ContactFAQSection() {
  return (
    <section className="pb-24 md:pb-32">
      <Container>
        <SectionLabel>Contact FAQ</SectionLabel>
        <FAQAccordion items={contactFaqs} />
      </Container>
    </section>
  );
}
