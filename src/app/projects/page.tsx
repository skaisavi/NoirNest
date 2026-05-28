import { BeforeAfterSliderSection } from "@/components/sections/BeforeAfterSliderSection";
import { MaterialPaletteSection } from "@/components/sections/MaterialPaletteSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { Button } from "@/components/ui/Button";
import { PageHeader } from "@/components/ui/PageHeader";

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        label="Projects"
        title="An editorial portfolio of dark, atmospheric rooms."
        description="Explore apartments, bedrooms, cafes, and studios shaped around mood, material, light, and daily use."
        cta={<Button href="/contact">Discuss a Room</Button>}
      />
      <ProjectsSection />
      <BeforeAfterSliderSection />
      <MaterialPaletteSection />
    </>
  );
}
