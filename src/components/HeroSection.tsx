import { motion } from "framer-motion";
import { ArrowDown, Code2, Smartphone, Brain } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-sm text-primary mb-4 tracking-wider uppercase">
            Full-Stack Developer &middot; AI Engineer
          </p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            I build{" "}
            <span className="text-gradient">digital experiences</span>
            <br />
            that drive results.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            From stunning websites to intelligent AI systems — I turn your ideas into
            powerful, scalable solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <a
            href="#pricing"
            className="px-8 py-3.5 rounded-lg bg-hero-gradient text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
          >
            View Pricing
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-lg border border-border bg-card text-foreground font-semibold hover:bg-secondary transition-colors"
          >
            Get in Touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex justify-center gap-12 text-muted-foreground"
        >
          {[
            { icon: Code2, label: "Web Development" },
            { icon: Smartphone, label: "Mobile Apps" },
            { icon: Brain, label: "AI Solutions" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-2">
              <Icon className="w-6 h-6 text-primary" />
              <span className="text-xs font-mono">{label}</span>
            </div>
          ))}
        </motion.div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <ArrowDown className="w-5 h-5 text-muted-foreground" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
