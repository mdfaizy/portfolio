import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16"
    >
      {/* Background layers */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroBg}
          alt=""
          aria-hidden="true"
          width={1920}
          height={1280}
          className="absolute inset-0 w-full h-full object-cover opacity-20 dark:opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,hsl(var(--primary)/0.15),transparent_60%)]" />
      </div>

      {/* Floating orbs */}
      <div className="absolute top-1/4 -left-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl animate-float -z-10" />
      <div
        className="absolute bottom-1/4 -right-20 h-96 w-96 rounded-full bg-primary-glow/20 blur-3xl animate-float -z-10"
        style={{ animationDelay: "2s" }}
      />

      <div className="container relative">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
          }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium mb-8"
          >
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span className="text-muted-foreground">Available for opportunities</span>
          </motion.div>

          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-6"
          >
            MD Gul Moajjam
            <br />
            <span className="text-gradient">Faizy</span>
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground font-medium mb-3"
          >
           Frontend Developer | Full Stack (MERN) Developer
          </motion.p>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-sm sm:text-base text-muted-foreground/80 max-w-2xl mx-auto mb-10"
          >
          I craft modern, responsive, and scalable web applications using React.js,
Next.js, TypeScript, Node.js, Express.js, and MongoDB. Passionate about
building clean user experiences and high-performance full-stack solutions.
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="flex flex-wrap items-center justify-center gap-3 mb-12"
          >
            <Button asChild size="lg" className="bg-gradient-primary text-primary-foreground shadow-elegant hover:shadow-glow transition-smooth border-0">
              <a href="#projects">
                View Projects <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="glass">
              <a href="/resume.pdf" download>
                <Download className="mr-1 h-4 w-4" /> Download Resume
              </a>
            </Button>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            className="flex items-center justify-center gap-4"
          >
            {[
              { icon: Github, href: "https://github.com/mdfaizy", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/mdgmfaizy2002", label: "LinkedIn" },
              { icon: Mail, href: "mailto:mdgmfaizy@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noreferrer"
                className="h-10 w-10 grid place-items-center rounded-full glass text-muted-foreground hover:text-foreground hover:scale-110 transition-smooth"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;