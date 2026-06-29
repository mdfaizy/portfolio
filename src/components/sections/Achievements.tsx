import { motion } from "framer-motion";
import { Award, Gauge, Component } from "lucide-react";

const items = [
  {
    icon: Gauge,
    title: "Performance Lift: 70 → 90+",
    body: "Boosted Lighthouse scores across production apps via lazy loading, code-splitting and image optimization.",
  },
  {
    icon: Component,
    title: "Reusable UI Library",
    body: "Built a typed component system reused across 4+ products — cutting feature dev time by ~40%.",
  },
  {
    icon: Award,
    title: "Team MVP",
    body: "Recognized for shipping critical features ahead of schedule with high code-review quality.",
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="relative py-24 sm:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3">
            05 — Achievements
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Outcomes that <span className="text-gradient">moved the needle</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative rounded-2xl p-6 bg-gradient-card border border-border/50 shadow-card overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-primary/10 blur-2xl" />
              <div className="relative">
                <div className="h-11 w-11 rounded-xl bg-gradient-primary grid place-items-center mb-4 shadow-elegant">
                  <it.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-lg mb-1.5">{it.title}</h3>
                <p className="text-sm text-muted-foreground">{it.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;