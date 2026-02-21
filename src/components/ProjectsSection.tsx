import { motion } from "framer-motion";
import { ExternalLink, Bot, Gift, Wallet } from "lucide-react";

const projects = [
  {
    icon: Bot,
    title: "Sakhi: Digital Companion",
    description: "AI chatbot offering comfort, companionship, and emotional support with warm, human-like interactions.",
    tech: ["HTML", "CSS", "JavaScript", "TypeScript", "React"],
  },
  {
    icon: Gift,
    title: "AppStory Scratch Card",
    description: "Interactive Scratch Card web app using Canvas API and React state to reveal rewards dynamically.",
    tech: ["HTML", "CSS", "JavaScript", "React", "Canvas API"],
  },
  {
    icon: Wallet,
    title: "Pocket Ledger",
    description: "Full-stack expense management app with JWT authentication, REST APIs, and real-time balance calculation.",
    tech: ["React", "TypeScript", "REST API", "JWT"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-2">
            <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full" />
        </motion.div>

        <div className="space-y-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group p-6 rounded-xl border border-glow bg-card/50 backdrop-blur-sm hover:border-primary/40 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                  <project.icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-mono font-semibold text-lg">{project.title}</h3>
                    <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="px-2 py-1 rounded text-xs font-mono bg-secondary text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
