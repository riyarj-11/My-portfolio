import { motion } from "framer-motion";
import { GraduationCap, Target } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-2">
            <span className="text-gradient">About</span> Me
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="p-6 rounded-xl border border-glow bg-card/50 backdrop-blur-sm mb-8"
        >
          <div className="flex items-start gap-4">
            <Target className="w-6 h-6 text-primary mt-1 shrink-0" />
            <div>
              <h3 className="font-mono font-semibold text-lg mb-2">Career Objective</h3>
              <p className="text-muted-foreground leading-relaxed">
                An optimistic and passionate individual with excellent communication skills seeking an entry-level position in Full Stack Development using HTML, CSS, JavaScript, React and the MERN stack where I can utilize my technical skills.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="p-6 rounded-xl border border-glow bg-card/50 backdrop-blur-sm"
        >
          <div className="flex items-start gap-4">
            <GraduationCap className="w-6 h-6 text-primary mt-1 shrink-0" />
            <div>
              <h3 className="font-mono font-semibold text-lg mb-3">Education</h3>
              <div className="space-y-3">
                <div>
                  <p className="font-medium">B.Tech in Computer Science</p>
                  <p className="text-sm text-muted-foreground">Lloyd Institute of Engineering and Technology • 2023-27</p>
                </div>
                <div>
                  <p className="font-medium">12th (CBSE Board)</p>
                  <p className="text-sm text-muted-foreground">Jean Paul's Senior Secondary School • 2022-23</p>
                </div>
                <div>
                  <p className="font-medium">10th (CBSE Board)</p>
                  <p className="text-sm text-muted-foreground">Jean Paul's Senior Secondary School • 2020-21</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
