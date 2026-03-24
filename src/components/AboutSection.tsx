import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Layers, Shield, Rocket } from "lucide-react";

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "3+", label: "Years Experience" },
  { value: "30+", label: "Happy Clients" },
  { value: "99%", label: "Client Satisfaction" },
];

const skills = [
  { icon: Zap, title: "Fast Delivery", desc: "Rapid prototyping and deployment with modern tools." },
  { icon: Layers, title: "Full-Stack", desc: "Frontend, backend, databases, and cloud — all covered." },
  { icon: Shield, title: "Secure & Reliable", desc: "Best practices for security, performance, and uptime." },
  { icon: Rocket, title: "AI-Powered", desc: "Smart integrations with chatbots, automation, and analytics." },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-sm text-primary mb-2 tracking-wider uppercase">About Me</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Developer. Builder. <span className="text-gradient">Problem Solver.</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm a full-stack developer passionate about building high-quality web and mobile
            applications. I specialize in React, Node.js, Python, and AI integrations — helping
            businesses grow with technology.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.1 * i, duration: 0.4 }}
              className="text-center p-6 rounded-xl bg-card card-shadow"
            >
              <div className="text-3xl font-bold text-gradient mb-1">{s.value}</div>
              <div className="text-sm text-muted-foreground">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + 0.1 * i, duration: 0.4 }}
              className="p-6 rounded-xl bg-card card-shadow hover:card-hover-shadow transition-shadow group"
            >
              <div className="w-12 h-12 rounded-lg bg-hero-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <s.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
