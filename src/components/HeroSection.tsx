import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Abstract data visualization"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto section-padding pt-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-coral-light text-coral font-display text-sm font-medium mb-6">
                Data Scientist · ML Engineer · Analytics Engineer
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6"
            >
              The{" "}
              <span className="text-gradient">Mis.fit</span>
              <br />
              Data Scientist
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-lg mb-8 font-body"
            >
              Senior Data Scientist with 4+ years building and deploying 
              production ML and LLM systems, translating ambiguous problems 
              into measurable business impact.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-display font-medium text-sm hover:opacity-90 transition-opacity"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 rounded-full border border-border bg-card text-foreground font-display font-medium text-sm hover:bg-muted transition-colors"
              >
                Get in Touch
              </a>
            </motion.div>
          </div>


          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="hidden md:flex justify-center items-center"
          >
            {/* Fixed stage so absolute positioning is stable across screen sizes */}
            <div className="relative w-[420px] h-[420px]">
              {/* Centered anchor */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-72 h-72 rounded-full bg-pastel-gradient animate-float" />
              </div>

              {/* 4+ yrs (top-right quadrant) */}
              <div className="absolute top-[14%] right-[16%] w-28 h-28 rounded-2xl bg-mint-light border border-border flex items-center justify-center">
                <span className="font-display text-2xl font-bold text-foreground">4+</span>
                <span className="text-xs text-muted-foreground ml-1">yrs</span>
              </div>

              {/* AWS · GCP (top-left quadrant) */}
              <div className="absolute top-[18%] left-[10%] w-36 h-20 rounded-2xl bg-cream border border-border flex items-center justify-center">
                <span className="font-display text-sm font-semibold text-foreground">AWS · GCP</span>
              </div>

              {/* ML (bottom-left quadrant) */}
              <div className="absolute bottom-[16%] left-[18%] w-28 h-28 rounded-2xl bg-lavender-light border border-border flex items-center justify-center">
                <span className="font-display text-xl font-bold text-foreground">ML</span>
              </div>

              {/* LLM (bottom-right quadrant) */}
              <div className="absolute bottom-[18%] right-[18%] w-32 h-20 rounded-2xl bg-peach-light border border-border flex items-center justify-center">
                <span className="font-display text-sm font-semibold text-foreground">LLM</span>
              </div>

              {/* PRODUCTION (bottom center) */}
              <div className="absolute bottom-[6%] left-1/2 -translate-x-1/2 w-64 h-16 rounded-2xl bg-coral-light border border-border flex items-center justify-center">
                <span className="font-display text-sm font-bold text-foreground">PRODUCTION</span>
              </div>
            </div>
          </motion.div>



        </div>
      </div>
    </section>
  );
};

export default HeroSection;