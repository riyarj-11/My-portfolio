import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Rocket, ChevronDown, Download } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Ambient gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-[28rem] h-[28rem] rounded-full bg-primary/15 blur-[140px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-32 w-[28rem] h-[28rem] rounded-full bg-accent/15 blur-[140px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-neon-purple/10 blur-[160px]" />

      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(hsl(var(--primary) / 0.5) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.5) 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Greeting badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass neon-border mb-10"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs md:text-sm text-muted-foreground font-mono tracking-wider">
              Hello, I'm
            </span>
          </motion.div>

          {/* Name — dominant hero typography */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="font-sans font-extrabold tracking-tighter leading-[0.9] mb-8"
            style={{ fontSize: "clamp(3.5rem, 14vw, 11rem)" }}
          >
            <span className="block bg-gradient-to-r from-primary via-accent to-neon-purple bg-clip-text text-transparent drop-shadow-[0_0_40px_hsl(var(--primary)/0.35)]">
              Riya Raj
            </span>
          </motion.h1>

          {/* Accent line */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent mb-8 origin-center"
          />

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="font-mono text-base md:text-xl lg:text-2xl text-muted-foreground mb-12 tracking-wide"
          >
            <span className="text-foreground font-medium">Full Stack Developer</span>
            <span className="mx-3 text-primary">|</span>
            <span className="text-foreground font-medium">AI Enthusiast</span>
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex items-center justify-center gap-4 flex-wrap mb-14"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold glow-primary hover:scale-105 transition-all duration-300"
            >
              <Rocket className="w-5 h-5 group-hover:-translate-y-0.5 group-hover:rotate-12 transition-transform" />
              View Projects
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl glass neon-border font-semibold hover:scale-105 transition-all duration-300"
            >
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Contact Me
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-xl text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              <Download className="w-4 h-4" />
              Resume
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="flex items-center justify-center gap-3"
          >
            {[
              { icon: Github, href: "https://github.com/riyarj-11", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/riyarj11/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:riyarajdk@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="group p-3 rounded-xl glass hover:glow-primary transition-all duration-300"
              >
                <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/50 hover:text-primary transition-colors"
      >
        <span className="text-xs font-mono tracking-widest uppercase">scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default HeroSection;
