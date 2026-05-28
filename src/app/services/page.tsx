import { PackageRecommenderSection } from "@/components/sections/PackageRecommenderSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { FAQSection } from "@/components/sections/services/FAQSection";
import { ProcessTimelineSection } from "@/components/sections/services/ProcessTimelineSection";
import { Button } from "@/components/ui/Button";
import { PageHeader } from "@/components/ui/PageHeader";

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        label="Services"
        title="A premium consultation guide for atmospheric interiors."
        description="Choose the level of support your room needs, from remote moodboards to full atmosphere plans."
        cta={<Button href="/contact">Enquire Now</Button>}
      />
      <ServicesSection />
      <PackageRecommenderSection />
      <ProcessTimelineSection />
      <FAQSection />
    </>
  );
}
