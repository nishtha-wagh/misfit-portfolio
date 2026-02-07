import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    role: "Data Scientist",
    company: "ASU Enterprise Partners",
    period: "Mar 2024 – Present",
    description:
      "Turning thousands of alumni narratives into actionable insights with LLM pipelines on GCP. Designed A/B experiments that improved engagement by 7% and built topic models that cut manual categorization from weeks to hours.",
    tags: [
      "LLMs",
      "NLP",
      "A/B Testing",
      "Machine Learning",
      "Python",
      "Data Pipelines",
      "GCP",
    ],
  },
  {
    role: "Senior Data Scientist",
    company: "Amazon India (via Axio)",
    period: "May 2022 – Jun 2023",
    description:
      "Shipped credit risk models on AWS serving 500K+ daily decisions. Led the pipeline optimization that cut runtime by 95% (8 hours to 25 minutes) and fixed data quality issues that improved model reliability by 12%.",
    tags: [
      "Production ML",
      "Machine Learning",
      "Model Deployment",
      "AWS",
      "Data Pipelines",
      "Credit Risk",
      "Large-Scale Systems",
    ],
  },
  {
    role: "Data Scientist",
    company: "Amazon India (via Axio)",
    period: "Jan 2021 – May 2022",
    description:
      "Built and deployed risk models for Amazon's BNPL product serving 2M+ customers. Automated underwriting with batch pipelines processing 300K+ daily evaluations and engineered features from bureau data and transaction patterns.",
    tags: [
      "Feature Engineering",
      "Statistical Modeling",
      "SQL",
      "Python",
      "Batch Processing",
      "Predictive Modeling",
    ],
  },
];

const education = [
  {
    degree: "M.S. in Data Science",
    school: "Arizona State University",
    period: "Aug 2023 – May 2025",
    detail: "GPA: 3.90 · Expected Graduation: May 2025",
  },
  {
    degree: "B.Tech in Computer Engineering",
    school: "Nirma University, India",
    period: "Aug 2017 – Jun 2021",
    detail: "GPA: 3.46",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-display text-sm font-medium text-primary mb-2 block">
            Experience & Education
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-12">
            The <span className="text-gradient">journey</span> so far.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Experience */}
          <div className="lg:col-span-3 space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <Briefcase size={20} className="text-primary" />
              <h3 className="font-display text-lg font-semibold">Work Experience</h3>
            </div>
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-6 border-l-2 border-border pb-6 last:pb-0"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
                <span className="text-xs font-display font-medium text-primary">
                  {exp.period}
                </span>
                <h4 className="font-display text-lg font-semibold mt-1">{exp.role}</h4>
                <p className="text-sm text-muted-foreground mb-2">{exp.company}</p>
                <p className="text-sm text-muted-foreground font-body leading-relaxed mb-3">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-full text-xs font-display font-medium bg-muted text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Education */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap size={20} className="text-accent" />
              <h3 className="font-display text-lg font-semibold">Education</h3>
            </div>
            {education.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <span className="text-xs font-display font-medium text-accent">
                  {edu.period}
                </span>
                <h4 className="font-display text-base font-semibold mt-1">{edu.degree}</h4>
                <p className="text-sm text-muted-foreground">{edu.school}</p>
                <p className="text-xs text-muted-foreground mt-2 italic">{edu.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;