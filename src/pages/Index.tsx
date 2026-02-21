import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ChatWidget from "@/components/ChatWidget";

const Index = () => {
  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ChatWidget />
      <footer className="py-8 text-center border-t border-border">
        <p className="text-sm text-muted-foreground font-mono">
          © 2025 Riya Raj. Built with ❤️
        </p>
      </footer>
    </div>
  );
};

export default Index;
