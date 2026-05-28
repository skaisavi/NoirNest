import { BeforeAfterSection } from "@/components/sections/home/BeforeAfterSection";
import { FeaturedProjectsSection } from "@/components/sections/home/FeaturedProjectsSection";
import { FinalCTASection } from "@/components/sections/home/FinalCTASection";
import { HeroSection } from "@/components/sections/home/HeroSection";
import { ServicesPreviewSection } from "@/components/sections/home/ServicesPreviewSection";
import { StudioPhilosophySection } from "@/components/sections/home/StudioPhilosophySection";
import { TestimonialsSection } from "@/components/sections/home/TestimonialsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StudioPhilosophySection />
      <ServicesPreviewSection />
      <FeaturedProjectsSection />
      <BeforeAfterSection />
      <TestimonialsSection />
      <FinalCTASection />
    </>
  );
}
