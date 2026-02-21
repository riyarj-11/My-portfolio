import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Bot, Gift, Wallet } from "lucide-react";

const projects = [
  {
    icon: Bot,
    title: "Sakhi: Digital Companion",
    description: "AI chatbot offering comfort, companionship, and emotional support with warm, human-like interactions.",
    tech: ["HTML", "CSS", "JavaScript", "TypeScript", "React"],
    gradient: "from-primary to-neon-purple",
  },
  {
    icon: Gift,
    title: "AppStory Scratch Card",
    description: "Interactive Scratch Card web app using Canvas API and React state to reveal rewards dynamically.",
    tech: ["HTML", "CSS", "JavaScript", "React", "Canvas API"],
    gradient: "from-accent to-primary",
  },
  {
    icon: Wallet,
    title: "Pocket Ledger",
    description: "Full-stack expense management app with JWT authentication, REST APIs, and real-time balance calculation.",
    tech: ["React", "TypeScript", "REST API", "JWT"],
    gradient: "from-neon-purple to-accent",
  },
];

const ProjectsSection = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="projects" className="py-28 px-6 relative">
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-neon-purple/5 blur-[120px] rounded-full" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-widest uppercase">// what i built</span>
          <h2 className="text-3xl md:text-5xl font-bold font-mono mt-2 mb-3">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 rounded-full bg-gradient-to-r from-primary to-accent" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="group relative"
              style={{ perspective: "1000px" }}
            >
              <motion.div
                animate={{
                  rotateY: hovered === i ? 5 : 0,
                  rotateX: hovered === i ? -5 : 0,
                  scale: hovered === i ? 1.02 : 1,
                }}
                transition={{ duration: 0.3 }}
                className="h-full p-6 rounded-2xl glass neon-border overflow-hidden relative"
              >
                {/* Gradient top bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient} opacity-60`} />

                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <project.icon className="w-6 h-6 text-primary-foreground" />
                </div>

                <h3 className="font-mono font-bold text-lg mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{project.description}</p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono bg-secondary/80 text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-3 border-t border-border/50">
                  <a href="#" className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-primary transition-colors">
                    <Github className="w-3.5 h-3.5" /> Code
                  </a>
                  <a href="#" className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-accent transition-colors">
                    <ExternalLink className="w-3.5 h-3.5" /> Demo
                  </a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
