import { ContactSection } from "@/components/sections/ContactSection";
import { ConsultationCardSection } from "@/components/sections/contact/ConsultationCardSection";
import { ContactFAQSection } from "@/components/sections/contact/ContactFAQSection";
import { PageHeader } from "@/components/ui/PageHeader";

export default function ContactPage() {
  return (
    <>
      <PageHeader
        label="Contact"
        title="A calm enquiry experience for rooms with potential."
        description="Tell us what feels unfinished. We will help shape it into a space with depth, warmth, and quiet luxury."
      />
      <ContactSection />
      <ConsultationCardSection />
      <ContactFAQSection />
    </>
  );
}
