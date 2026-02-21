import { motion } from "framer-motion";
import { GraduationCap, Target, Calendar } from "lucide-react";

const timeline = [
  { year: "2020-21", title: "10th (CBSE Board)", subtitle: "Jean Paul's Senior Secondary School", icon: GraduationCap },
  { year: "2022-23", title: "12th (CBSE Board)", subtitle: "Jean Paul's Senior Secondary School", icon: GraduationCap },
  { year: "2023-27", title: "B.Tech in Computer Science", subtitle: "Lloyd Institute of Engineering and Technology", icon: GraduationCap },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-28 px-6 relative">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 blur-[100px] rounded-full" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-widest uppercase">// who am i</span>
          <h2 className="text-3xl md:text-5xl font-bold font-mono mt-2 mb-3">
            <span className="text-gradient">About</span> Me
          </h2>
          <div className="w-20 h-1 rounded-full bg-gradient-to-r from-primary to-accent" />
        </motion.div>

        {/* Objective card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="p-8 rounded-2xl glass neon-border mb-12"
        >
          <div className="flex items-start gap-5">
            <div className="p-3 rounded-xl bg-primary/10 shrink-0">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-mono font-bold text-xl mb-3">Career Objective</h3>
              <p className="text-muted-foreground leading-relaxed text-base">
                An optimistic and passionate developer with excellent communication skills, seeking to leverage my Full Stack expertise in React, TypeScript, and the MERN stack to build impactful, scalable digital solutions.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-neon-purple opacity-30" />

          {timeline.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`relative flex items-center mb-10 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary glow-primary z-10" />

              {/* Card */}
              <div className={`ml-16 md:ml-0 md:w-[45%] ${i % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                <div className="p-5 rounded-xl glass hover:glow-primary transition-all duration-300 group">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="text-xs font-mono text-primary">{item.year}</span>
                  </div>
                  <h4 className="font-mono font-semibold mb-1 group-hover:text-primary transition-colors">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
