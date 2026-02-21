import { motion } from "framer-motion";
import { Briefcase, Award } from "lucide-react";

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
    <section id="experience" className="py-24 px-6 bg-card/30">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-2">
            <span className="text-gradient">Experience</span> & Achievements
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Experience */}
          <div className="space-y-6">
            <h3 className="font-mono text-sm text-primary uppercase tracking-wider flex items-center gap-2">
              <Briefcase className="w-4 h-4" /> Work Experience
            </h3>
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-5 rounded-xl border border-glow bg-card/50 backdrop-blur-sm"
              >
                <p className="font-mono font-semibold text-sm mb-1">{exp.role}</p>
                <p className="text-xs text-primary mb-3">{exp.period}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{exp.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <h3 className="font-mono text-sm text-primary uppercase tracking-wider flex items-center gap-2 mb-6">
              <Award className="w-4 h-4" /> Certifications & Achievements
            </h3>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-5 rounded-xl border border-glow bg-card/50 backdrop-blur-sm"
            >
              <ul className="space-y-3">
                {certifications.map((cert) => (
                  <li key={cert} className="flex items-start gap-3 text-sm">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-primary shrink-0" />
                    <span className="text-muted-foreground">{cert}</span>
                  </li>
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
