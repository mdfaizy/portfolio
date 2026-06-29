import { motion } from "framer-motion";
import { z } from "zod";
import { Github, Linkedin, Mail, Send,Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";


const Contact = () => {
  

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-gradient-mesh">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3">
              06 — Contact
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Let's build something <span className="text-gradient">together</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Have a project in mind, or just want to chat tech? Drop me a line.
            </p>
<div className="mb-8">
    <span className="inline-flex items-center rounded-full bg-green-500/10 border border-green-500/20 px-4 py-2 text-sm font-medium text-green-500">
      🟢 Available for Full-Time Opportunities
    </span>
  </div>
            <div className="space-y-3">
              {[
                { icon: Mail, label: "mdgmfaizy@gmail.com", href: "mailto:mdgmfaizy@gmail.com" },
                { icon: Linkedin, label: "https://linkedin.com/in/mdgmfaizy2002", href: "https://linkedin.com" },
                { icon: Github, label: "https://github.com/mdfaizy", href: "https://github.com" },
                { icon: Phone, label: "+91 7254065338", href: "tel:+91 7254065338" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border/50 hover:border-primary/40 hover:shadow-card transition-smooth"
                >
                  <span className="h-9 w-9 grid place-items-center rounded-lg bg-gradient-primary shadow-elegant">
                    <Icon className="h-4 w-4 text-primary-foreground" />
                  </span>
                  <span className="text-sm font-medium">{label}</span>
                </a>
              ))}
            </div>
          </motion.div>

          

          <motion.form
            
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl p-6 sm:p-8 bg-card border border-border/50 shadow-card space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" placeholder="Your name" maxLength={100} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="you@email.com" maxLength={255} required />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell me about your project..."
                rows={5}
                maxLength={1000}
                required
              />
            </div>
            <Button
              type="submit"
             
              className="w-full bg-gradient-primary text-primary-foreground shadow-elegant hover:shadow-glow transition-smooth border-0"
            >
              {(<><Send className="h-4 w-4 mr-1" /> Send Message</>)}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;