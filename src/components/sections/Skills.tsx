import { motion } from "framer-motion";

const groups = [
  {
    title: "Frontend",
    items: ["React.js", "Next.js", "TypeScript", "Redux Toolkit", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "JWT Auth"],
  },
  {
    title: "Database",
    items: ["MongoDB", "MySQL", "Mongoose", "Prisma"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Postman", "Cloudinary", "Vercel"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="relative py-24 sm:py-32 bg-gradient-mesh">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3">
            02 — Skills
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Tools I use to <span className="text-gradient">ship daily</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A focused, modern stack — picked for productivity, performance and longevity.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl p-6 bg-card border border-border/50 shadow-card hover:shadow-elegant hover:-translate-y-1 transition-smooth"
            >
              <h3 className="text-sm font-mono uppercase tracking-wider text-muted-foreground mb-4">
                {g.title}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="px-3 py-1.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground border border-border/50"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;