import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Check, Globe, ShoppingCart, Smartphone, Brain, Wrench, BarChart3, Cpu } from "lucide-react";

type PlanItem = { name: string; price: string; features: string[]; popular?: boolean };

type Category = {
  icon: React.ElementType;
  title: string;
  description: string;
  plans: PlanItem[];
};

const categories: Category[] = [
  {
    icon: Globe,
    title: "Landing Pages & Websites",
    description: "Professional web presence for your brand",
    plans: [
      {
        name: "Landing Page",
        price: "₦120,000",
        features: ["1 page", "Mobile responsive", "WhatsApp integration", "Basic SEO", "Delivery: 3–5 days"],
      },
      {
        name: "Standard Website",
        price: "₦200,000",
        features: ["3–5 pages", "Contact form + WhatsApp", "Admin panel (basic content edit)", "SEO setup"],
        popular: true,
      },
      {
        name: "Advanced Website",
        price: "₦300,000",
        features: ["5–10 pages", "Blog / CMS", "Payment integration (optional)", "Performance optimization"],
      },
    ],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description: "Online stores that convert visitors to customers",
    plans: [
      {
        name: "Basic E-commerce",
        price: "₦300,000",
        features: ["Product listings", "Cart + checkout", "Payment integration (Paystack/Flutterwave)", "Order dashboard"],
      },
      {
        name: "Advanced E-commerce",
        price: "₦450,000",
        features: ["Inventory management", "Admin dashboard", "Customer accounts", "Analytics"],
        popular: true,
      },
    ],
  },
  {
    icon: Cpu,
    title: "Web Apps (Custom Systems)",
    description: "Tailored applications for your business needs",
    plans: [
      {
        name: "Web App",
        price: "from ₦500,000",
        features: ["Dashboards", "Booking systems", "Inventory systems", "SaaS MVPs"],
      },
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile solutions",
    plans: [
      { name: "Android App", price: "from ₦400,000", features: ["Native Android", "Custom UI/UX", "API integration", "Play Store deployment"] },
      { name: "iOS App", price: "from ₦600,000", features: ["Native iOS", "Custom UI/UX", "API integration", "App Store deployment"] },
      {
        name: "Cross-platform",
        price: "from ₦800,000",
        features: ["Android + iOS", "Single codebase", "Cost effective", "Faster delivery"],
        popular: true,
      },
    ],
  },
  {
    icon: Brain,
    title: "AI Services",
    description: "Intelligent automation and smart solutions",
    plans: [
      {
        name: "AI Integration",
        price: "₦300,000 – ₦700,000",
        features: ["Chatbots", "Smart recommendations", "Automation"],
      },
      {
        name: "WhatsApp Bot",
        price: "₦200,000",
        features: ["Automated responses", "Customer support", "24/7 availability"],
      },
      {
        name: "Telegram Bot",
        price: "₦150,000",
        features: ["Custom commands", "Automated workflows", "User engagement"],
      },
      {
        name: "Full AI Suite",
        price: "₦450,000",
        features: ["WhatsApp + Telegram + Email", "Complete automation", "Analytics dashboard"],
        popular: true,
      },
    ],
  },
  {
    icon: Wrench,
    title: "Monthly Services",
    description: "Ongoing support and growth packages",
    plans: [
      {
        name: "Maintenance",
        price: "₦30,000/mo",
        features: ["Hosting support", "Bug fixes", "Minor updates"],
      },
      {
        name: "Growth Package",
        price: "₦70,000/mo",
        features: ["Regular updates", "SEO improvements", "Performance optimization"],
        popular: true,
      },
    ],
  },
  {
    icon: BarChart3,
    title: "AI Usage Billing",
    description: "Scalable AI compute for your applications",
    plans: [
      { name: "Starter AI", price: "₦10,000/mo", features: ["Basic AI usage", "Standard support"] },
      { name: "Business AI", price: "₦25,000/mo", features: ["Increased capacity", "Priority support"], popular: true },
      { name: "Scale AI", price: "₦50,000+/mo", features: ["Unlimited scale", "Dedicated support", "Custom models"] },
    ],
  },
];

const PricingCard = ({ plan, index, inView }: { plan: PlanItem; index: number; inView: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ delay: 0.1 * index, duration: 0.4 }}
    className={`relative p-6 rounded-xl card-shadow transition-shadow hover:card-hover-shadow flex flex-col ${
      plan.popular ? "bg-hero-gradient text-primary-foreground ring-2 ring-primary" : "bg-card"
    }`}
  >
    {plan.popular && (
      <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-xs font-bold rounded-full bg-card text-foreground">
        Popular
      </span>
    )}
    <h4 className="font-semibold text-lg mb-1">{plan.name}</h4>
    <p className={`text-2xl font-bold mb-4 ${plan.popular ? "" : "text-gradient"}`}>{plan.price}</p>
    <ul className="space-y-2 flex-1">
      {plan.features.map((f) => (
        <li key={f} className="flex items-start gap-2 text-sm">
          <Check className={`w-4 h-4 mt-0.5 shrink-0 ${plan.popular ? "text-primary-foreground" : "text-accent"}`} />
          <span className={plan.popular ? "text-primary-foreground/90" : "text-muted-foreground"}>{f}</span>
        </li>
      ))}
    </ul>
    <a
      href="#contact"
      className={`mt-6 text-center py-2.5 rounded-lg font-semibold text-sm transition-colors ${
        plan.popular
          ? "bg-card text-foreground hover:bg-card/90"
          : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
      }`}
    >
      Get Started
    </a>
  </motion.div>
);

const PricingSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="pricing" className="py-24 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="font-mono text-sm text-primary mb-2 tracking-wider uppercase">Pricing</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Transparent <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Clear pricing for every service. No hidden fees — just quality work delivered on time.
          </p>
        </motion.div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat, i) => (
            <button
              key={cat.title}
              onClick={() => setActiveTab(i)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === i
                  ? "bg-hero-gradient text-primary-foreground"
                  : "bg-card text-muted-foreground hover:text-foreground card-shadow"
              }`}
            >
              <cat.icon className="w-4 h-4" />
              <span className="hidden sm:inline">{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Active category */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-center text-muted-foreground mb-8">{categories[activeTab].description}</p>
          <div className={`grid gap-6 ${
            categories[activeTab].plans.length === 1
              ? "max-w-md mx-auto"
              : categories[activeTab].plans.length === 2
              ? "md:grid-cols-2 max-w-3xl mx-auto"
              : categories[activeTab].plans.length === 4
              ? "md:grid-cols-2 lg:grid-cols-4"
              : "md:grid-cols-3"
          }`}>
            {categories[activeTab].plans.map((plan, i) => (
              <PricingCard key={plan.name} plan={plan} index={i} inView={inView} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
