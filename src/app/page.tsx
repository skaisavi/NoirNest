import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Preloader } from "@/components/layout/Preloader";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { StickyCTA } from "@/components/layout/StickyCTA";
import { BeforeAfterSliderSection } from "@/components/sections/BeforeAfterSliderSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { MaterialPaletteSection } from "@/components/sections/MaterialPaletteSection";
import { MoodQuizSection } from "@/components/sections/MoodQuizSection";
import { PackageRecommenderSection } from "@/components/sections/PackageRecommenderSection";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

export default function HomePage() {
  return (
    <>
      <Preloader />
      <ScrollProgress />
      <Navbar />
      <main id="main">
        <HeroSection />
        <ServicesSection />
        <MaterialPaletteSection />
        <ProjectsSection />
        <BeforeAfterSliderSection />
        <MoodQuizSection />
        <PhilosophySection />
        <PackageRecommenderSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
