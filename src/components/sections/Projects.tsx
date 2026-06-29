import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import projectStudent from "@/assets/project-student.jpg";
import projectRestaurant from "@/assets/project-restaurant.jpg";
import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectSSInfotech from "@/assets/project-ss-image.png";
import projectMagbee from "@/assets/project-ecommerce.jpg";
import projectSchoolERP from "@/assets/erp-image.png";
import projectDoctorAC from "@/assets/project-drac-image.png"; // Import the image for Doctor AC Services
type Project = {
  title: string;
  description: string;
  image: string;
  stack: string[];
  category: "Full Stack" | "Frontend" | "Dashboard";
  demo: string;
  repo: string;
};

const projects: Project[] = [
  {
  title: "Magbee E-Commerce Platform",
  description:
    "A full-featured e-commerce platform with product catalog, category management, authentication, shopping cart, wishlist, order management, secure payment integration, and an admin dashboard.",
  image: projectMagbee,
  stack: [
    "Next.js",
    "React.js",
    "TypeScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Redux Toolkit",
    "Tailwind CSS",
    "AWS S3",
  ],
  category: "Full Stack",
  demo: "https://magbee.in",
  repo: "#", // Private repository
},
  {
  title: "SS Infotech - Corporate Website",
  description:
    "A modern corporate website for SS Infotech featuring product showcase, service pages, WhatsApp integration, inquiry forms, SEO optimization, and a fully responsive design.",
  image: projectSSInfotech,
  stack: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "MongoDB",
  ],
  category: "Frontend",
  demo: "https://ssinfotechservice.com",
  repo: "#", // GitHub private ho to "#" rehne do
},
{
  title: "School SaaS ERP Platform",
  description:
    "A comprehensive School ERP SaaS platform for managing students, teachers, attendance, admissions, fees, exams, timetables, and academic records with role-based access control and a responsive admin dashboard.",
  image: projectSchoolERP,
  stack: [
    "Next.js",
    "React.js",
    "TypeScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Redux Toolkit",
    "Tailwind CSS",
    "JWT Authentication",
    "REST APIs",
  ],
  category: "Full Stack",
  demo: "https://your-demo-link.com",
  repo: "#", // Private repository
},
  {
    title: "Student Admittance System",
    description: "End-to-end MERN platform for application, review and enrollment workflows.",
    image: projectStudent,
    stack: ["React", "Node.js", "Express", "MongoDB"],
    category: "Full Stack",
    demo: "#",
    repo: "#",
  },
  {
    title: "Restaurant Management System",
    description: "Order, table and inventory management with real-time analytics.",
    image: projectRestaurant,
    stack: ["Next.js", "TypeScript", "MySQL", "Tailwind"],
    category: "Full Stack",
    demo: "#",
    repo: "#",
  },
  {
    title: "E-commerce Dashboard",
    description: "Admin dashboard with charts, product CRUD and Redux Toolkit state.",
    image: projectEcommerce,
    stack: ["React", "Redux Toolkit", "Recharts", "Tailwind"],
    category: "Dashboard",
    demo: "#",
    repo: "#",
  },
  {
  title: "Doctor AC Services",
  description:
    "A modern Frontend AC service booking platform with online booking, service management, WhatsApp integration, and responsive UI.",
  image: projectDoctorAC, // Add the image import for Doctor AC Services
  
  stack: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
  ],
  category: "Frontend",
  demo: "https://doctor-ac-services-client-y9xd.vercel.app/", // Apna live URL
  repo: "#", // Private ho to "#" rehne do
},
];

const filters = ["All", "Full Stack", "Frontend", "Dashboard"] as const;
type Filter = (typeof filters)[number];

const Projects = () => {
  const [filter, setFilter] = useState<Filter>("All");
  const [showAll, setShowAll] = useState(false);
  // const visible = useMemo(
  //   () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
  //   [filter]
  // );
  const filteredProjects = useMemo(() => {
  return filter === "All"
    ? projects
    : projects.filter((p) => p.category === filter);
}, [filter]);

const visible = showAll
  ? filteredProjects
  : filteredProjects.slice(0, 3);

  return (
    <section id="projects" className="relative py-24 sm:py-32 bg-gradient-mesh">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-10"
        >
          <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3">
            04 — Projects
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Selected <span className="text-gradient">work</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A few projects I'm proud of. More on GitHub.
          </p>
        </motion.div>
 
 
        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => {
  setFilter(f);
  setShowAll(false);
}}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-smooth ${
                filter === f
                  ? "bg-gradient-primary text-primary-foreground border-transparent shadow-elegant"
                  : "bg-card text-muted-foreground border-border/50 hover:text-foreground hover:border-primary/40"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {visible.map((p) => (
              <motion.article
                layout
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="group rounded-2xl overflow-hidden bg-card border border-border/50 shadow-card hover:shadow-elegant hover:-translate-y-1 transition-smooth"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                  <img
                    src={p.image}
                    alt={`${p.title} preview`}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="font-semibold text-lg">{p.title}</h3>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                      {p.category}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{p.description}</p>
                  <ul className="flex flex-wrap gap-1.5 mb-5">
                    {p.stack.map((s) => (
                      <li
                        key={s}
                        className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-secondary text-secondary-foreground"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-2">
                    <Button asChild size="sm" variant="outline" className="flex-1">
                      <a href={p.demo} target="_blank" rel="noreferrer">
                        <ExternalLink className="h-3.5 w-3.5 mr-1" /> Demo
                      </a>
                    </Button>
                    <Button asChild size="sm" variant="ghost" className="flex-1">
                      <a href={p.repo} target="_blank" rel="noreferrer">
                        <Github className="h-3.5 w-3.5 mr-1" /> Code
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
        {filteredProjects.length > 3 && (
  <div className="flex justify-center mt-12">
    <Button
      onClick={() => setShowAll(!showAll)}
      className="px-8 py-6 rounded-full bg-gradient-primary text-primary-foreground hover:scale-105 transition-all"
    >
      {showAll ? "Show Less" : "View More Projects"}
    </Button>
  </div>
)}
      </div>
    </section>
  );
};

export default Projects;