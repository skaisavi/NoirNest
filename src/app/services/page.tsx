import { AddOnsSection } from "@/components/sections/services/AddOnsSection";
import { FAQSection } from "@/components/sections/services/FAQSection";
import { ProcessTimelineSection } from "@/components/sections/services/ProcessTimelineSection";
import { ServicesGridSection } from "@/components/sections/services/ServicesGridSection";
import { ServicesHeroSection } from "@/components/sections/services/ServicesHeroSection";

export default function ServicesPage() {
  return (
    <>
      <ServicesHeroSection />
      <ServicesGridSection />
      <ProcessTimelineSection />
      <AddOnsSection />
      <FAQSection />
    </>
  );
}
