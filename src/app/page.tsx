"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Code,
  Briefcase,
  MessageCircle,
  Shapes,
  Mail,
  Sparkles,
  Calendar,
  Building2,
} from "lucide-react";
import { FaGithub, FaLinkedin, FaFileLines } from "react-icons/fa6";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { Navbar } from "@/components/ui/Navbar";
import { Marquee } from "@/components/ui/Marquee";
import OrbitingSkills from "@/components/ui/orbiting-skills";
import portfolioData from "@/data/portfolio.json";

/* ─── Icon resolver ───────────────────────────────── */
const iconMap: Record<string, React.ReactNode> = {
  Code: <Code strokeWidth={2.5} />,
  Briefcase: <Briefcase strokeWidth={2.5} />,
  MessageCircle: <MessageCircle strokeWidth={2.5} />,
  Shapes: <Shapes strokeWidth={2.5} />,
  FaGithub: <FaGithub size={22} />,
  FaLinkedin: <FaLinkedin size={22} />,
  FaFileLines: <FaFileLines size={22} />,
};

const colorMap: Record<string, string> = {
  accent: "bg-accent",
  secondary: "bg-secondary",
  tertiary: "bg-tertiary",
  quaternary: "bg-quaternary",
};

/* ─── Floating shape component ────────────────────── */
function FloatingShape({
  color,
  size,
  className,
  shape = "circle",
  delay = 0,
}: {
  color: string;
  size: string;
  className: string;
  shape?: "circle" | "square" | "triangle";
  delay?: number;
}) {
  const shapeClass = shape === "circle" ? "rounded-full" : shape === "square" ? "rounded-lg rotate-12" : "";
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay, duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
      className={`absolute ${size} ${colorMap[color]} border-2 border-foreground ${shapeClass} shadow-pop hidden md:block ${className}`}
    />
  );
}

/* ─── Main page ───────────────────────────────────── */
export default function Home() {
  const { profile, projects, experience, marquee } = portfolioData;

  return (
    <main className="min-h-screen bg-background bg-dot-grid">
      <Navbar />

      {/* ═══ Hero ═══════════════════════════════════ */}
      <Section className="min-h-screen flex items-center pt-28 md:pt-36" id="hero">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Text */}
          <div className="relative">
            {/* Massive yellow circle decoration */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
              className="absolute -top-16 -left-16 w-56 h-56 md:w-72 md:h-72 bg-tertiary/30 rounded-full -z-10"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-sm md:text-base font-bold uppercase tracking-[0.2em] text-muted-foreground mb-4 flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-tertiary" strokeWidth={2.5} />
              {profile.role}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-extrabold leading-[1.05] mb-6"
            >
              Hi, I&apos;m{" "}
              <span className="text-accent squiggle-underline">{profile.name}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-lg leading-relaxed"
            >
              {profile.bio}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Button href="#contact">
                Get In Touch
                <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
              </Button>
              <Button variant="secondary" href="#work">
                View My Work
              </Button>
            </motion.div>

            {/* Social icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="flex gap-4 mt-12"
            >
              {profile.socials.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  className="w-12 h-12 border-2 border-foreground rounded-full flex items-center justify-center bg-card shadow-pop hover:shadow-pop-hover hover:animate-wiggle hover:-translate-y-1 transition-all duration-200"
                  aria-label={social.platform}
                >
                  {iconMap[social.icon]}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right — Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotate: 3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.5, duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
            className="relative"
          >
            {/* Pattern layers */}
            <div className="absolute inset-4 bg-accent/10 rounded-3xl -rotate-3 z-0" />
            <div className="absolute inset-4 bg-secondary/10 rounded-3xl rotate-3 z-0" />

            <div className="relative z-10 p-4 md:p-8">
              <div className="aspect-square bg-quaternary border-4 border-foreground rounded-[32px] md:rounded-[48px] overflow-hidden shadow-pop flex items-center justify-center">
                <Shapes
                  className="w-1/2 h-1/2 text-foreground/15"
                  strokeWidth={1.5}
                />
              </div>
            </div>

            {/* Floating decorations */}
            <FloatingShape color="accent" size="w-14 h-14" className="-top-6 -right-6" shape="circle" delay={0.8} />
            <FloatingShape color="tertiary" size="w-20 h-20" className="-bottom-8 -left-8" shape="square" delay={1.0} />
            <FloatingShape color="secondary" size="w-8 h-8" className="top-1/4 -right-10" shape="circle" delay={1.2} />
          </motion.div>
        </div>
      </Section>

      {/* ═══ Marquee ════════════════════════════════ */}
      <Marquee items={marquee} />

      {/* ═══ Experience ═════════════════════════════ */}
      <Section
        title="Experience"
        subtitle="Where I've been building and shipping."
        className="bg-muted/10"
        id="about"
      >
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

          <div className="space-y-8">
            {experience.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.12, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
                className="relative pl-0 md:pl-20"
              >
                {/* Timeline dot */}
                <div
                  className={`hidden md:flex absolute left-4 md:left-5 top-6 w-7 h-7 ${colorMap[exp.color]} border-2 border-foreground rounded-full items-center justify-center shadow-pop z-10`}
                >
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>

                <Card delay={i * 0.12} shadowColor={i === 1 ? "pink" : "default"}>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-3">
                    <div>
                      <h3 className="text-xl md:text-2xl font-heading font-bold">
                        {exp.role}
                      </h3>
                      <p className="text-muted-foreground flex items-center gap-2 mt-1">
                        <Building2 className="w-4 h-4" strokeWidth={2.5} />
                        {exp.company}
                      </p>
                    </div>
                    <span className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-3 py-1.5 ${colorMap[exp.color]} text-foreground border-2 border-foreground rounded-full shadow-[2px_2px_0px_var(--shadow-color)] whitespace-nowrap self-start`}>
                      <Calendar className="w-3 h-3" strokeWidth={2.5} />
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    {exp.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ═══ Skills ═════════════════════════════════ */}
      <Section title="Skills"
        subtitle="Technologies and tools I work with every day."
        className="relative py-20 md:py-28 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
            className="text-center mb-8"
          >
          </motion.div>
          <OrbitingSkills />
        </div>
      </Section>

      {/* ═══ Recent Work ════════════════════════════ */}
      <Section
        title="Recent Work"
        subtitle="A selection of projects I&apos;m proud of."
        className="bg-muted/10"
        id="work"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {projects.map((project, i) => (
            <Card
              key={project.title}
              className="overflow-hidden !p-0"
              delay={i * 0.12}
              shadowColor={i === 1 ? "pink" : "default"}
            >
              {/* Colored header area */}
              <div
                className={`h-44 ${colorMap[project.color]} flex items-center justify-center relative overflow-hidden`}
              >
                {/* Abstract decoration inside card header */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-4 left-4 w-16 h-16 border-2 border-white/40 rounded-full" />
                  <div className="absolute bottom-4 right-6 w-12 h-12 border-2 border-white/40 rounded-lg rotate-12" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 border-2 border-white/30 rounded-2xl rotate-45" />
                </div>
              </div>

              {/* Card body */}
              <div className="p-6">
                <div className="flex gap-2 mb-4 flex-wrap">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-bold uppercase tracking-wider px-3 py-1 bg-foreground text-background rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl md:text-2xl font-heading font-extrabold mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                <Button href={project.url} className="w-full text-sm py-2.5">
                  View Project
                  <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* ═══ CTA ════════════════════════════════════ */}
      <Section className="" id="contact">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
          whileInView={{ opacity: 1, scale: 1, rotate: -2 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
          className="text-center max-w-3xl mx-auto py-16 md:py-20 px-8 bg-accent text-white border-4 border-background/30 rounded-[40px] md:rounded-[60px] shadow-[12px_12px_0px_rgba(255,255,255,0.2)]"
        >
          <Mail className="w-12 h-12 mx-auto mb-6 opacity-80" strokeWidth={2} />
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-heading font-black mb-4 leading-tight">
            Ready to Build
            <br />
            Something Wild?
          </h2>
          <p className="text-lg md:text-xl mb-10 opacity-80 max-w-md mx-auto">
            Let&apos;s collaborate on your next energetic project. I&apos;m always
            excited to chat.
          </p>
          <Button
            variant="secondary"
            href={`mailto:${profile.email}`}
            className="bg-tertiary text-foreground border-foreground/30 hover:bg-white hover:text-accent"
          >
            Say Hello!
            <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
          </Button>
        </motion.div>
      </Section>

      {/* ═══ Footer ═════════════════════════════════ */}
      <footer className="py-10 border-t-2 border-foreground/10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-muted-foreground">
            © 2026{" "}
            <span className="font-bold text-foreground">{profile.name}</span>.
            Built with Bounce &amp; Energy.
          </p>
          <div className="flex gap-4">
            {profile.socials.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                className="w-10 h-10 border-2 border-foreground/20 rounded-full flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-colors duration-200"
                aria-label={social.platform}
              >
                {iconMap[social.icon]}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
