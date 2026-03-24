import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMsg = encodeURIComponent(
      `Hi! I'm ${form.name} (${form.email}). ${form.message}`
    );
    window.open(`https://wa.me/2348000000000?text=${whatsappMsg}`, "_blank");
  };

  return (
    <section id="contact" className="py-24 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-sm text-primary mb-2 tracking-wider uppercase">Contact</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="text-gradient">work together</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Have a project in mind? Reach out and let's discuss how I can help bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="space-y-6 mb-8">
              {[
                { icon: Mail, label: "hello@devname.com", href: "mailto:hello@devname.com" },
                { icon: Phone, label: "+234 800 000 0000", href: "tel:+2348000000000" },
                { icon: MessageCircle, label: "Chat on WhatsApp", href: "https://wa.me/2348000000000" },
                { icon: MapPin, label: "Lagos, Nigeria", href: "#" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  className="flex items-center gap-4 p-4 rounded-xl bg-card card-shadow hover:card-hover-shadow transition-shadow group"
                >
                  <div className="w-10 h-10 rounded-lg bg-hero-gradient flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <span className="text-sm font-medium">{label}</span>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <textarea
              placeholder="Tell me about your project..."
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
            />
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-hero-gradient text-primary-foreground font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
            >
              <Send className="w-4 h-4" />
              Send via WhatsApp
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
