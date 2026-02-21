import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: ["C", "C++", "JavaScript", "TypeScript"],
  },
  {
    title: "Web Technologies",
    skills: ["HTML5", "CSS3", "React", "Tailwind CSS"],
  },
  {
    title: "Frameworks",
    skills: ["ASP.NET MVC", "MERN Stack"],
  },
  {
    title: "Databases",
    skills: ["SQL Server", "MySQL", "MongoDB"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Visual Studio"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-card/30">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-2">
            <span className="text-gradient">Skills</span> & Tech
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-xl border border-glow bg-card/50 backdrop-blur-sm"
            >
              <h3 className="font-mono font-semibold text-sm text-primary mb-4 uppercase tracking-wider">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground text-sm font-medium"
                  >
                    {skill}
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
