import { ConsultationSection } from "@/components/sections/contact/ConsultationSection";
import { ContactFormSection } from "@/components/sections/contact/ContactFormSection";
import { ContactHeroSection } from "@/components/sections/contact/ContactHeroSection";

export default function ContactPage() {
  return (
    <>
      <ContactHeroSection />
      <ContactFormSection />
      <ConsultationSection />
    </>
  );
}
