import Logo from "./Logo";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, Code2, BarChart3, Shield, Cpu } from "lucide-react";
import { useRef } from "react";
import { useCountUp } from "@/hooks/useCountUp";

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
                delay: delay + wi * 0.08 + ci * 0.03,
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

/* ── Floating card component ── */
function FloatingCard({
  icon: Icon,
  label,
  value,
  color,
  delay,
  y,
}: {
  icon: any;
  label: string;
  value: string;
  color: string;
  delay: number;
  y: [number, number, number];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1, y }}
      transition={{
        opacity: { duration: 0.6, delay },
        scale: { duration: 0.6, delay },
        y: { duration: 4 + delay, repeat: Infinity, ease: "easeInOut" },
      }}
      whileHover={{ scale: 1.08, rotate: 2 }}
      className="glass-card px-5 py-4 flex items-center gap-3 cursor-default shadow-lg shadow-purple-100/50"
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center"
        style={{ background: `${color}15` }}
      >
        <Icon size={20} style={{ color }} />
      </div>
      <div>
        <div className="font-mono text-lg font-bold text-[#1a1035]">{value}</div>
        <div className="text-[11px] text-[#6b6b8a]">{label}</div>
      </div>
    </motion.div>
  );
}

/* ── Animated stat counter ── */
function StatCounter({ end, suffix, label, decimals = 0 }: { end: number; suffix: string; label: string; decimals?: number }) {
  const [display, ref] = useCountUp({ end, suffix, decimals, duration: 2500 });
  return (
    <div ref={ref as any}>
      <div className="font-mono text-3xl font-bold text-[#1a1035]">{display}</div>
      <div className="text-sm text-[#6b6b8a] mt-1">{label}</div>
    </div>
  );
}

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
      style={{ background: "linear-gradient(135deg, #FAF7FF 0%, #F0F0FF 30%, #FFF8F0 60%, #F5F0FF 100%)" }}
    >
      {/* ── Animated dot grid ── */}
      <motion.div
        className="absolute inset-0 dot-grid"
        style={{ y: bgY, opacity }}
      />

      {/* ── Morphing gradient orbs ── */}
      <div
        className="absolute top-[10%] left-[15%] w-[500px] h-[500px] animate-morph opacity-30"
        style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.15), rgba(37,99,235,0.1))", filter: "blur(80px)" }}
      />
      <div
        className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] animate-morph opacity-25"
        style={{ background: "linear-gradient(135deg, rgba(236,72,153,0.12), rgba(124,58,237,0.08))", filter: "blur(100px)", animationDelay: "4s" }}
      />
      <div
        className="absolute top-[40%] right-[30%] w-[200px] h-[200px] animate-morph opacity-20"
        style={{ background: "linear-gradient(135deg, rgba(37,99,235,0.15), rgba(124,58,237,0.1))", filter: "blur(60px)", animationDelay: "8s" }}
      />

      {/* ── Decorative floating shapes ── */}
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
        className="absolute top-[55%] left-[20%] w-3 h-3 bg-blue-300/40 rounded-full"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
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
              <span className="text-sm font-medium text-[#6b6b8a]">
                Creating What's Next
              </span>
              <Sparkles size={14} className="text-[#7C3AED] opacity-60" />
            </div>
          </motion.div>

          {/* Headline — character reveal */}
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-display font-bold leading-[1.08] tracking-tight text-[#1a1035]">
              <AnimatedText text="Building Digital" delay={0.3} />
              <br className="hidden sm:block" />
              <AnimatedText text="Systems That " delay={0.6} />
              <span className="gradient-text">
                <AnimatedText text="Drive" delay={0.9} />
              </span>
              <br className="hidden sm:block" />
              <span className="gradient-text">
                <AnimatedText text="Business Growth" delay={1.0} />
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
            We create intelligent CRM, ERP, AI-powered software solutions and
            digital experiences that help businesses automate, scale and grow.
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
              Get Started
              <motion.span
                className="inline-block"
                whileHover={{ x: 4 }}
              >
                <ArrowRight size={18} />
              </motion.span>
            </a>
            <a
              href="#services"
              className="btn-secondary px-8 py-4 rounded-2xl font-semibold text-base inline-flex items-center gap-3"
            >
              Explore Solutions
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.7 }}
            className="flex items-center gap-10 pt-4"
          >
            <StatCounter end={150} suffix="+" label="Projects Delivered" />
            <div className="w-px h-10 bg-purple-100" />
            <StatCounter end={98} suffix="%" label="Client Retention" />
            <div className="w-px h-10 bg-purple-100" />
            <StatCounter end={50} suffix="+" label="Enterprise Clients" />
          </motion.div>
        </div>

        {/* ═══ Right — Floating Cards Composition ═══ */}
        <div className="relative hidden lg:flex items-center justify-center min-h-[520px]">
          {/* Central glowing orb */}
          <motion.div
            className="absolute w-48 h-48 rounded-full animate-breathe"
            style={{
              background: "radial-gradient(circle, rgba(124,58,237,0.12) 0%, rgba(37,99,235,0.06) 50%, transparent 70%)",
            }}
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Central AEVIQ logo mark */}
          <motion.div
            className="relative z-10 w-28 h-28 rounded-2xl bg-white p-2.5 flex items-center justify-center shadow-2xl shadow-purple-500/20 border border-purple-100"
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.23, 1, 0.32, 1] }}
            whileHover={{ rotate: 12, scale: 1.1 }}
          >
            <img src="/logo.png" alt="AEVIQ Solutions" className="w-full h-full object-contain" />
          </motion.div>

          {/* Floating cards orbiting */}
          <div className="absolute top-4 right-4">
            <FloatingCard
              icon={BarChart3}
              label="AI Metrics"
              value="94.7%"
              color="#7C3AED"
              delay={1.2}
              y={[0, -12, 0]}
            />
          </div>

          <div className="absolute bottom-8 left-0">
            <FloatingCard
              icon={Shield}
              label="Uptime SLA"
              value="99.9%"
              color="#2563EB"
              delay={1.5}
              y={[0, 10, 0]}
            />
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 -right-4">
            <FloatingCard
              icon={Cpu}
              label="Automations"
              value="1,247"
              color="#EC4899"
              delay={1.8}
              y={[0, -8, 0]}
            />
          </div>

          <div className="absolute top-16 left-8">
            <FloatingCard
              icon={Code2}
              label="Revenue"
              value="$2.4M"
              color="#10B981"
              delay={2.0}
              y={[0, 8, 0]}
            />
          </div>

          {/* Connecting dotted lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.15 }}>
            <motion.circle
              cx="50%"
              cy="50%"
              r="160"
              fill="none"
              stroke="#7C3AED"
              strokeWidth="1"
              strokeDasharray="4 8"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: "center" }}
            />
            <motion.circle
              cx="50%"
              cy="50%"
              r="100"
              fill="none"
              stroke="#2563EB"
              strokeWidth="1"
              strokeDasharray="3 10"
              initial={{ rotate: 0 }}
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: "center" }}
            />
          </svg>
        </div>
      </motion.div>

      {/* ── Bottom gradient fade ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to top, #FAF7FF, transparent)" }}
      />
    </section>
  );
}
