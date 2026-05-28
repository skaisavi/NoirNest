import { AboutHeroSection } from "@/components/sections/about/AboutHeroSection";
import { AboutProcessSection } from "@/components/sections/about/AboutProcessSection";
import { FounderSection } from "@/components/sections/about/FounderSection";
import { ValuesSection } from "@/components/sections/about/ValuesSection";
import { FinalCTASection } from "@/components/sections/home/FinalCTASection";

export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <FounderSection />
      <ValuesSection />
      <AboutProcessSection />
      <FinalCTASection />
    </>
  );
}
