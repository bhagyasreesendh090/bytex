import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, ExternalLink, Globe, CheckCircle2 } from "lucide-react";
import { useRef, useState, useEffect } from "react";

/* ── Real live client projects ── */
const liveProjects = [
  {
    name: "Eventmithra",
    url: "https://eventmithra.in/",
    category: "Event Booking Platform",
    image: "/portfolio/eventmithra.png",
    color: "#EC4899",
    badge: "+250% Bookings",
  },
  {
    name: "MVDR Lab",
    url: "https://mvdrlab.site/",
    category: "Medical Diagnostic Portal",
    image: "/portfolio/mvdrlab.png",
    color: "#00C6FF",
    badge: "99.8% Accuracy",
  },
  {
    name: "Sunstar Builders",
    url: "https://sunstarbuilders.in/",
    category: "Real Estate Showcase",
    image: "/portfolio/sunstar.png",
    color: "#F59E0B",
    badge: "3.5x Lead Growth",
  },
];

const techBadges = [
  { label: "React" },
  { label: "Node.js" },
  { label: "Next.js" },
  { label: "PostgreSQL" },
  { label: "Tailwind CSS" },
  { label: "AI / LLM" },
];

/* ── Staggered character reveal animation ── */
function AnimatedText({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, wi) => (
        <span key={wi} className="inline-block">
          {word.split("").map((char, ci) => (
            <motion.span
              key={`${wi}-${ci}`}
              className="inline-block"
              initial={{ opacity: 0, y: 20, rotateX: -40 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 0.5,
                delay: delay + wi * 0.07 + ci * 0.025,
                ease: [0.23, 1, 0.32, 1],
              }}
            >
              {char}
            </motion.span>
          ))}
          {wi < words.length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </span>
  );
}

/* ── Live project browser mockup ── */
function ProjectPreviewCard({ project, isActive }: { project: typeof liveProjects[0]; isActive: boolean }) {
  return (
    <motion.div
      initial={false}
      animate={{ opacity: isActive ? 1 : 0, scale: isActive ? 1 : 0.96, y: isActive ? 0 : 12 }}
      transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
      className="absolute inset-0"
      style={{ pointerEvents: isActive ? "auto" : "none" }}
    >
      <div className="w-full h-full rounded-2xl overflow-hidden bg-[#0f0a1e] shadow-2xl shadow-purple-900/30 border border-white/10 flex flex-col">
        {/* Browser bar */}
        <div className="flex-shrink-0 h-9 bg-[#1a1035]/90 flex items-center px-4 gap-3 border-b border-white/8">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
            <div className="w-3 h-3 rounded-full bg-green-400/80" />
          </div>
          <div className="flex-1 mx-3">
            <div className="bg-white/10 rounded-md px-3 py-1 text-[11px] font-mono text-gray-300 flex items-center gap-2">
              <Globe size={10} className="text-gray-400" />
              <span className="truncate">{project.url.replace("https://", "")}</span>
            </div>
          </div>
          <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[9px] font-mono font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Live
          </span>
        </div>

        {/* Website screenshot */}
        <div className="flex-1 relative overflow-hidden">
          <img
            src={project.image}
            alt={`${project.name} live website`}
            className="w-full h-full object-cover object-top"
          />
          {/* Result badge */}
          <div
            className="absolute bottom-4 left-4 px-3 py-1.5 rounded-full text-white text-xs font-semibold backdrop-blur-md flex items-center gap-1.5 shadow-lg"
            style={{ background: `${project.color}cc` }}
          >
            <CheckCircle2 size={12} />
            {project.badge}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  /* Auto-cycle through live projects */
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveProject((prev) => (prev + 1) % liveProjects.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const current = liveProjects[activeProject];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
      style={{ background: "linear-gradient(135deg, #FAF7FF 0%, #F0F0FF 30%, #FFF8F0 60%, #F5F0FF 100%)" }}
    >
      {/* ── Dot grid ── */}
      <motion.div className="absolute inset-0 dot-grid" style={{ y: bgY, opacity }} />

      {/* ── Ambient orbs ── */}
      <div
        className="absolute top-[10%] left-[15%] w-[500px] h-[500px] animate-morph opacity-30"
        style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.15), rgba(37,99,235,0.1))", filter: "blur(80px)" }}
      />
      <div
        className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] animate-morph opacity-25"
        style={{ background: "linear-gradient(135deg, rgba(236,72,153,0.12), rgba(124,58,237,0.08))", filter: "blur(100px)", animationDelay: "4s" }}
      />

      {/* ── Decorative rotating square ── */}
      <motion.div
        className="absolute top-[15%] right-[12%] w-16 h-16 border-2 border-purple-200/40 rounded-xl"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-[25%] left-[8%] w-8 h-8 bg-purple-200/30 rounded-full"
        animate={{ y: [0, -15, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="relative max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-20"
        style={{ opacity }}
      >
        {/* ═══ Left — Text Content ═══ */}
        <div className="space-y-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur-sm border border-purple-100 shadow-sm">
              <motion.span
                className="w-2 h-2 rounded-full bg-[#7C3AED]"
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-sm font-medium text-[#6b6b8a]">Intelligent Digital Engineering</span>
              <Sparkles size={14} className="text-[#7C3AED] opacity-60" />
            </div>
          </motion.div>

          {/* Headline */}
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-display font-bold leading-[1.08] tracking-tight text-[#1a1035]">
              <AnimatedText text="We Build Digital" delay={0.3} />
              <br className="hidden sm:block" />
              <AnimatedText text="Systems That " delay={0.6} />
              <span className="gradient-text">
                <AnimatedText text="Drive Results" delay={0.9} />
              </span>
            </h1>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="text-lg max-w-lg leading-relaxed text-[#5a5a7a]"
          >
            AEVIQ Solutions crafts enterprise-grade web platforms — from event management to medical portals and real estate systems — engineered to grow with your business.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="flex flex-wrap gap-4 pt-2"
          >
            <a
              href="#contact"
              className="btn-primary px-8 py-4 rounded-2xl text-white font-semibold text-base inline-flex items-center gap-3 group"
            >
              Start Your Project
              <motion.span className="inline-block" whileHover={{ x: 4 }}>
                <ArrowRight size={18} />
              </motion.span>
            </a>
            <a
              href="/portfolio"
              className="btn-secondary px-8 py-4 rounded-2xl font-semibold text-base inline-flex items-center gap-3"
            >
              View Live Work
              <ExternalLink size={16} />
            </a>
          </motion.div>

          {/* Real project selector tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.7 }}
            className="space-y-3 pt-2"
          >
            <p className="text-xs font-mono text-[#8b8ba0] uppercase tracking-widest">Live client websites →</p>
            <div className="flex flex-wrap gap-2">
              {liveProjects.map((proj, i) => (
                <button
                  key={proj.name}
                  onClick={() => setActiveProject(i)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-300 border ${
                    activeProject === i
                      ? "text-white border-transparent shadow-lg"
                      : "bg-white/60 text-[#5a5a7a] border-gray-200/80 hover:border-purple-200"
                  }`}
                  style={
                    activeProject === i
                      ? { background: proj.color, boxShadow: `0 4px 20px ${proj.color}50` }
                      : {}
                  }
                >
                  {proj.name}
                </button>
              ))}
            </div>

            {/* Tech stack chips */}
            <div className="flex flex-wrap gap-2 pt-1">
              {techBadges.map((b) => (
                <span
                  key={b.label}
                  className="px-3 py-1 rounded-md bg-white/70 border border-purple-100/80 text-[11px] font-mono text-[#6b6b8a]"
                >
                  {b.label}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ═══ Right — Live Project Preview ═══ */}
        <div className="relative hidden lg:block">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="relative"
          >
            {/* Glow behind card */}
            <motion.div
              className="absolute -inset-4 rounded-3xl blur-2xl opacity-40 transition-all duration-700"
              style={{ background: `radial-gradient(circle, ${current.color}60 0%, transparent 70%)` }}
            />

            {/* Main browser card */}
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden" style={{ minHeight: 380 }}>
              {liveProjects.map((proj, i) => (
                <ProjectPreviewCard key={proj.name} project={proj} isActive={i === activeProject} />
              ))}
            </div>

            {/* Category label below card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
                className="mt-4 flex items-center justify-between"
              >
                <div>
                  <p className="text-sm font-semibold text-[#1a1035]">{current.name}</p>
                  <p className="text-xs text-[#8b8ba0] font-mono">{current.category}</p>
                </div>
                <a
                  href={current.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white transition-all duration-300 hover:opacity-90 shadow-md"
                  style={{ background: current.color }}
                >
                  Visit Site
                  <ExternalLink size={12} />
                </a>
              </motion.div>
            </AnimatePresence>

            {/* Progress dots */}
            <div className="flex items-center justify-center gap-2 mt-4">
              {liveProjects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveProject(i)}
                  className="transition-all duration-300 rounded-full"
                  style={{
                    width: i === activeProject ? 24 : 8,
                    height: 8,
                    background: i === activeProject ? liveProjects[i].color : "#e2e2f0",
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* ── Bottom fade ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to top, #FAF7FF, transparent)" }}
      />
    </section>
  );
}
