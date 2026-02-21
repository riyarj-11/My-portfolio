import { motion } from "framer-motion";
import { Briefcase, Award, ChevronRight } from "lucide-react";

const experiences = [
  {
    role: "IBM Virtual Internship - Generative AI",
    period: "Sep 2025 – Nov 2025",
    desc: "Completed a 6-week virtual internship with IBM in Generative AI, gaining hands-on experience in LLMs, prompt engineering, NLP, model integration, and building scalable, responsible AI solutions.",
  },
  {
    role: "Web Development Internship — CodSoft",
    period: "May 2025 – Jun 2025",
    desc: "Gained hands-on experience in HTML, CSS, JavaScript, and building responsive, user-friendly real-world web applications.",
  },
];

const certifications = [
  "Oracle Certified in Generative AI",
  "Cleared Flipkart Online Assessment Round (2025)",
  "Google Gemini Certified Hackathon Participant",
  "Finalist in 5+ Hackathons",
  "Proficient in ChatGPT and AI tools",
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-28 px-6 relative">
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-primary/5 blur-[150px] rounded-full -translate-x-1/2" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-widest uppercase">// my journey</span>
          <h2 className="text-3xl md:text-5xl font-bold font-mono mt-2 mb-3">
            <span className="text-gradient">Experience</span> & Achievements
          </h2>
          <div className="w-20 h-1 rounded-full bg-gradient-to-r from-primary to-accent" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Experience */}
          <div>
            <h3 className="font-mono text-xs text-primary uppercase tracking-widest flex items-center gap-2 mb-6">
              <Briefcase className="w-4 h-4" /> Work Experience
            </h3>
            <div className="space-y-5">
              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.role}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-2xl glass neon-border group hover:glow-primary transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-primary/10 text-primary">{exp.period}</span>
                  </div>
                  <h4 className="font-mono font-bold text-sm mb-2 group-hover:text-primary transition-colors">{exp.role}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{exp.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="font-mono text-xs text-primary uppercase tracking-widest flex items-center gap-2 mb-6">
              <Award className="w-4 h-4" /> Achievements
            </h3>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl glass neon-border"
            >
              <ul className="space-y-4">
                {certifications.map((cert, i) => (
                  <motion.li
                    key={cert}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 text-sm group"
                  >
                    <ChevronRight className="w-4 h-4 text-primary mt-0.5 shrink-0 group-hover:translate-x-1 transition-transform" />
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">{cert}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
