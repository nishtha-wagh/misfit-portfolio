import { motion } from "framer-motion";
import { Brain, BarChart3, Database, Code2 } from "lucide-react";

const skills = [
  { icon: Brain, label: "Machine Learning & Statistics", color: "bg-coral-light text-coral" },
  { icon: BarChart3, label: "Experimentation & Analytics", color: "bg-mint-light text-mint" },
  { icon: Database, label: "Data Engineering", color: "bg-lavender-light text-lavender" },
  { icon: Code2, label: "Python & SQL", color: "bg-peach-light text-peach" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-card">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-display text-sm font-medium text-primary mb-2 block">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
            Not your typical
            <br />
            <span className="text-gradient">data person.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4 text-muted-foreground font-body leading-relaxed"
          >
            <p>
              I'm a Senior Data Scientist with 4+ years building end-to-end ML systems from scoping business problems to deploying models that serve production traffic. I work across experimentation, predictive modeling, and LLM applications, handling everything from feature engineering to model monitoring.
            </p>
            <p>
                My experience includes credit risk modeling at Amazon (gradient boosting models serving millions of daily decisions on AWS), analytics and LLM pipelines at ASU (Azure OpenAI and GCP-based systems processing thousands of records weekly), and A/B testing frameworks that drove measurable engagement improvements. I've worked with messy real-world data, tight latency requirements, and cross-functional stakeholders across Product, Engineering, and Business teams.
            </p>
            <p>
              What distinguishes my approach: I validate assumptions before building, I optimize for production performance over notebook accuracy, and I focus on systems that inform actual business decisions. I thrive in ambiguous problem spaces where the requirements aren't clear and the path to impact requires both technical depth and business judgment.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {skills.map((skill, i) => (
              <div
                key={skill.label}
                className={`rounded-2xl p-6 border border-border ${skill.color} bg-opacity-50 flex flex-col items-start gap-3`}
              >
                <skill.icon size={28} />
                <span className="font-display text-sm font-semibold text-foreground">
                  {skill.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;