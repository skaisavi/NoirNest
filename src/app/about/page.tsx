import { AboutHeroSection } from "@/components/sections/about/AboutHeroSection";
import { DesignPrinciplesSection } from "@/components/sections/about/DesignPrinciplesSection";
import { FounderStorySection } from "@/components/sections/about/FounderStorySection";
import { ProcessPreviewSection } from "@/components/sections/about/ProcessPreviewSection";
import { StudioValuesSection } from "@/components/sections/about/StudioValuesSection";

export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <FounderStorySection />
      <StudioValuesSection />
      <DesignPrinciplesSection />
      <ProcessPreviewSection />
    </>
  );
}
