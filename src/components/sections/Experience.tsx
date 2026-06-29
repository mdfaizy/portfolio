import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const items = [
  {
    role: "Software Engineer",
    company: "Magarita Tech",
    period: "2024 — Present",
    points: [
      "Built scalable React + Next.js apps with Redux Toolkit and TypeScript.",
      "Improved Lighthouse performance scores from 70 to 90+ via code-splitting and image optimization.",
      "Designed reusable component libraries adopted across multiple products.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "SS Infotech",
    period: "2023 — 2024",
    points: [
      "Developed REST APIs with Node.js & Express, integrated with MongoDB.",
      "Shipped responsive UIs and collaborated on full-stack feature delivery.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3">
            03 — Experience
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            A track record of <span className="text-gradient">delivering</span>
          </h2>
        </motion.div>

        <div className="relative max-w-3xl">
          {/* Timeline line */}
          <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-border to-transparent" />

          <div className="space-y-10">
            {items.map((it, i) => (
              <motion.div
                key={it.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-16"
              >
                <div className="absolute left-0 top-0 h-10 w-10 rounded-full bg-gradient-primary grid place-items-center shadow-elegant ring-4 ring-background">
                  <Briefcase className="h-4 w-4 text-primary-foreground" />
                </div>
                <div className="rounded-2xl p-6 bg-card border border-border/50 shadow-card">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                    <h3 className="text-lg font-semibold">
                      {it.role}
                      <span className="text-muted-foreground font-normal"> · {it.company}</span>
                    </h3>
                    <span className="font-mono text-xs text-muted-foreground">{it.period}</span>
                  </div>
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    {it.points.map((p) => (
                      <li key={p} className="flex gap-2">
                        <span className="text-primary mt-1">▹</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;