import { motion } from "framer-motion";
import { Code2, Rocket, Layers } from "lucide-react";

const stats = [
  { value: "1.5+", label: "Years Experience" },
  { value: "20+", label: "Projects Shipped" },
  { value: "70→90+", label: "Performance Lift" },
];

const pillars = [
  { icon: Code2, title: "Clean Architecture", body: "Modular, testable codebases that scale with your team." },
  { icon: Rocket, title: "Performance First", body: "Lighthouse-grade speed via smart bundling & caching." },
  { icon: Layers, title: "End-to-End", body: "From REST APIs to polished UI — I own the whole stack." },
];

const About = () => {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3">
            01 — About
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Building products with <span className="text-gradient">craft & care</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm a Full Stack MERN developer with 1.5+ years of experience building
            production web apps. I specialize in React.js, Next.js, TypeScript and
            Redux Toolkit on the frontend, with a deep focus on performance,
            scalability and maintainable architecture.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl p-6 bg-gradient-card border border-border/50 shadow-card"
            >
              <div className="text-3xl sm:text-4xl font-bold text-gradient mb-1">{s.value}</div>
              <div className="text-sm text-muted-foreground">{s.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl p-6 bg-card border border-border/50 hover:border-primary/40 hover:shadow-elegant transition-smooth"
            >
              <div className="h-11 w-11 rounded-xl bg-gradient-primary grid place-items-center mb-4 shadow-elegant">
                <p.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-lg mb-1.5">{p.title}</h3>
              <p className="text-sm text-muted-foreground">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;