import Navbar from "@/components/portfolio/navbar";
import HeroSpecimen from "@/components/portfolio/hero-specimen";
import AboutSection from "@/components/portfolio/about-section";
import SkillsSection from "@/components/portfolio/skills-section";
import ProjectsSection from "@/components/portfolio/projects-section";
import JourneySection from "@/components/portfolio/journey-section";
import ContactSection from "@/components/portfolio/contact-section";
import Footer from "@/components/portfolio/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-ink text-bone">
      <Navbar />
      <HeroSpecimen />
      <main className="relative z-10">
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <JourneySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
