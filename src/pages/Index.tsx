import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import ChatWidget from "@/components/ChatWidget";
import ParticleBackground from "@/components/ParticleBackground";

const Index = () => {
  return (
    <div className="dark min-h-screen bg-background text-foreground overflow-x-hidden">
      <ParticleBackground />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      <ChatWidget />
      <footer className="relative z-10 py-10 text-center border-t border-border/50">
        <p className="text-sm text-muted-foreground font-mono">
          © 2025 <span className="text-gradient">Riya Raj</span>. Crafted with passion & pixels ✨
        </p>
      </footer>
    </div>
  );
};

export default Index;
