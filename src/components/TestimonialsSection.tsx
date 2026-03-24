import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Adebayo Ogunlesi",
    role: "CEO, TechVentures Nigeria",
    text: "Exceptional developer! Delivered our e-commerce platform ahead of schedule with flawless payment integration. Sales increased 40% in the first month.",
    rating: 5,
  },
  {
    name: "Chioma Nwosu",
    role: "Founder, GreenLeaf Health",
    text: "The AI chatbot integration transformed our customer support. Response time dropped from hours to seconds. Highly recommend!",
    rating: 5,
  },
  {
    name: "Ibrahim Musa",
    role: "Director, LogiPharma",
    text: "Built us a comprehensive inventory management system that saved us 20+ hours per week. The attention to detail is incredible.",
    rating: 5,
  },
  {
    name: "Funke Adeyemi",
    role: "Marketing Lead, StyleHub",
    text: "Our new website looks amazing and loads incredibly fast. The SEO work alone doubled our organic traffic in three months.",
    rating: 5,
  },
  {
    name: "Emeka Obi",
    role: "CTO, FinEdge",
    text: "Reliable, skilled, and always delivers on time. The cross-platform mobile app works perfectly on both Android and iOS.",
    rating: 5,
  },
  {
    name: "Aisha Bello",
    role: "Owner, BellaFoods",
    text: "The WhatsApp bot handles 80% of our customer inquiries automatically. Best investment we've made for our business!",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="py-24" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-sm text-primary mb-2 tracking-wider uppercase">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What my <span className="text-gradient">clients say</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i, duration: 0.4 }}
              className="p-6 rounded-xl bg-card card-shadow hover:card-hover-shadow transition-shadow relative"
            >
              <Quote className="w-8 h-8 text-primary/20 absolute top-4 right-4" />
              <div className="flex gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{t.text}</p>
              <div>
                <p className="font-semibold text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
