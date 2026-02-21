import { motion } from "framer-motion";

const skills = [
  { name: "React / TypeScript", level: 90, color: "from-primary to-primary" },
  { name: "JavaScript", level: 88, color: "from-primary to-accent" },
  { name: "HTML5 / CSS3", level: 95, color: "from-primary to-neon-purple" },
  { name: "Tailwind CSS", level: 85, color: "from-accent to-neon-purple" },
  { name: "Node.js / Express", level: 75, color: "from-neon-purple to-primary" },
  { name: "MongoDB", level: 70, color: "from-primary to-accent" },
  { name: "C / C++", level: 80, color: "from-accent to-primary" },
  { name: "Git / GitHub", level: 85, color: "from-neon-purple to-accent" },
];

const techCategories = [
  {
    title: "Languages",
    items: ["C", "C++", "JavaScript", "TypeScript"],
  },
  {
    title: "Frontend",
    items: ["React", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Backend & DB",
    items: ["Node.js", "Express", "MongoDB", "MySQL", "SQL Server"],
  },
  {
    title: "Tools & Frameworks",
    items: ["Git", "GitHub", "VS Code", "ASP.NET MVC", "MERN Stack"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-28 px-6 relative">
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 blur-[120px] rounded-full" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-widest uppercase">// what i know</span>
          <h2 className="text-3xl md:text-5xl font-bold font-mono mt-2 mb-3">
            <span className="text-gradient">Skills</span> & Tech Stack
          </h2>
          <div className="w-20 h-1 rounded-full bg-gradient-to-r from-primary to-accent" />
        </motion.div>

        {/* Animated skill bars */}
        <div className="grid md:grid-cols-2 gap-5 mb-16">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group"
            >
              <div className="flex justify-between mb-2">
                <span className="text-sm font-mono font-medium group-hover:text-primary transition-colors">{skill.name}</span>
                <span className="text-xs font-mono text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="h-2.5 rounded-full bg-secondary overflow-hidden">
                <motion.div
                  className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: i * 0.08, ease: "easeOut" }}
                  style={{ boxShadow: "0 0 10px hsl(186 100% 50% / 0.3)" }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {techCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl glass hover:glow-primary transition-all duration-300 group"
            >
              <h3 className="font-mono font-bold text-xs text-primary mb-4 uppercase tracking-widest">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-lg bg-secondary/80 text-secondary-foreground text-xs font-medium hover:bg-primary/20 hover:text-primary transition-all duration-200 cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
