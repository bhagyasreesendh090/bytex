import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Heart,
  Zap,
  Globe,
  Lightbulb,
  Shield,
  Users,
  TrendingUp,
  ChevronRight,
  Target,
  Rocket,
  Code2,
  Award,
  CheckCircle2,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useRef } from "react";
import { useCountUp } from "@/hooks/useCountUp";

/* ─────────── Animations ─────────── */
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] as any } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

/* ═══════════════════════════════════════
   1. HERO — Immersive Animated Landing
   ═══════════════════════════════════════ */
function AboutHero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const textScale = useTransform(scrollYProgress, [0, 0.6], [1, 0.95]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#FAF7FF] via-[#F0F0FF] to-[#FFF8F0]">
      {/* Parallax dot grid */}
      <motion.div className="absolute inset-0 dot-grid opacity-40" style={{ y: bgY }} />

      {/* Morphing blobs */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-gradient-to-br from-[#7C3AED]/12 to-[#EC4899]/6 rounded-full blur-[120px] animate-morph" />
      <div className="absolute bottom-[-15%] left-[-8%] w-[500px] h-[500px] bg-gradient-to-tr from-[#2563EB]/10 to-[#7C3AED]/6 rounded-full blur-[100px] animate-morph" style={{ animationDelay: "6s" }} />
      <div className="absolute top-[40%] left-[50%] w-[200px] h-[200px] bg-gradient-to-br from-[#10B981]/8 to-transparent rounded-full blur-[80px] animate-morph" style={{ animationDelay: "3s" }} />

      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-16 right-[15%] w-20 h-20 border-2 border-purple-200/30 rounded-xl"
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-24 left-[10%] w-12 h-12 border-2 border-pink-200/20 rounded-full"
        animate={{ y: [0, -20, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[30%] left-[8%] w-4 h-4 bg-purple-300/30 rounded-full"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute top-[60%] right-[8%] w-3 h-3 bg-blue-300/30 rounded-full"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <motion.div className="relative max-w-5xl mx-auto px-6 w-full text-center py-32" style={{ opacity: textOpacity, scale: textScale }}>
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/70 backdrop-blur-sm border border-purple-100 shadow-sm mb-10">
            <Sparkles size={14} className="text-[#7C3AED]" />
            <span className="text-sm text-[#7C3AED] font-medium">About AEVIQ</span>
          </div>
        </motion.div>

        {/* Big headline with word-by-word animation */}
        <div className="overflow-hidden mb-8">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-display font-bold text-[#1a1035] leading-[1.05] tracking-tight">
            {"We Build".split(" ").map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-4"
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.3 + i * 0.1, ease: [0.23, 1, 0.32, 1] }}
              >
                {word}
              </motion.span>
            ))}
            <br />
            {"the".split(" ").map((word, i) => (
              <motion.span
                key={`t${i}`}
                className="inline-block mr-4"
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.5 + i * 0.1, ease: [0.23, 1, 0.32, 1] }}
              >
                {word}
              </motion.span>
            ))}
            <motion.span
              className="inline-block gradient-text"
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6, ease: [0.23, 1, 0.32, 1] }}
            >
              Future
            </motion.span>
          </h1>
        </div>

        <motion.p
          className="text-xl text-[#5a5a7a] leading-relaxed max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          We're a team of engineers, designers, and strategists on a mission to make enterprise-grade AI, CRM, and ERP technology accessible to every ambitious business.
        </motion.p>

        {/* Animated scroll indicator */}
        <motion.div
          className="flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <span className="text-xs text-[#8b8ba0] font-mono tracking-widest uppercase">Scroll to explore</span>
          <motion.div
            className="w-5 h-8 rounded-full border-2 border-purple-200 flex justify-center pt-1"
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-2 rounded-full bg-[#7C3AED]"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ═══════════════════════════════════════
   2. BY THE NUMBERS — Animated Counters
   ═══════════════════════════════════════ */
function StatCounter({ end, suffix, label, prefix = "", decimals = 0, color }: { end: number; suffix: string; label: string; prefix?: string; decimals?: number; color: string }) {
  const [display, ref] = useCountUp({ end, suffix, prefix, decimals, duration: 2500 });
  return (
    <motion.div
      ref={ref as any}
      variants={fadeInUp}
      className="text-center group"
    >
      <div className="font-mono text-5xl lg:text-6xl font-bold mb-2" style={{ color }}>{display}</div>
      <div className="text-sm text-white/40">{label}</div>
    </motion.div>
  );
}

function ByTheNumbers() {
  return (
    <section className="relative py-28 overflow-hidden dark-section">
      <div className="absolute inset-0 dot-grid opacity-20" />

      {/* Glowing orbs */}
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-[#7C3AED]/8 rounded-full blur-[100px]" />
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-[#2563EB]/6 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-[#7C3AED] font-medium tracking-widest uppercase">By The Numbers</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mt-3 mb-4">
            Impact That <span className="shimmer-text">Speaks</span>
          </h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-12"
        >
          <StatCounter end={150} suffix="+" label="Projects Delivered" color="#7C3AED" />
          <StatCounter end={98} suffix="%" label="Client Retention" color="#2563EB" />
          <StatCounter end={50} suffix="+" label="Enterprise Clients" color="#EC4899" />
          <StatCounter end={12} suffix="" label="Countries Served" color="#10B981" />
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   3. WHAT WE DO — Interactive Service Pillars
   ═══════════════════════════════════════ */
function WhatWeDo() {
  const pillars = [
    { icon: Lightbulb, title: "Innovation First", desc: "Every solution pushes boundaries with AI and modern technology.", color: "#7C3AED", stat: "AI-Powered" },
    { icon: Shield, title: "Enterprise Grade", desc: "Security, scalability, and reliability are our baseline standards.", color: "#2563EB", stat: "99.9% Uptime" },
    { icon: Zap, title: "Lightning Fast", desc: "Cloud-native architecture built for speed and responsiveness.", color: "#EC4899", stat: "Sub-100ms" },
    { icon: Globe, title: "Global Scale", desc: "Solutions that serve businesses across borders and industries.", color: "#10B981", stat: "12+ Countries" },
    { icon: Heart, title: "Client Obsessed", desc: "We measure success by the growth we deliver to every client.", color: "#F59E0B", stat: "98% Retention" },
    { icon: Code2, title: "Modern Stack", desc: "Built with the most powerful and proven technologies.", color: "#6366F1", stat: "Best-in-class" },
  ];

  return (
    <section className="py-28 bg-gradient-to-b from-[#FAF7FF] to-white relative overflow-hidden">
      {/* Subtle decoration */}
      <motion.div
        className="absolute top-20 right-[10%] w-24 h-24 border border-purple-100 rounded-xl"
        animate={{ rotate: [0, 90, 180, 270, 360] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-100 mb-6">
            <Target size={14} className="text-[#7C3AED]" />
            <span className="text-sm font-medium text-[#7C3AED]">What We Stand For</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#1a1035] mb-4">
            Built on <span className="gradient-text">Strong Foundations</span>
          </h2>
          <p className="text-lg text-[#5a5a7a] max-w-2xl mx-auto">
            Six core principles that guide every decision and every line of code.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.23, 1, 0.32, 1] }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group relative bg-white rounded-2xl p-7 border border-gray-100 hover:border-purple-100 transition-shadow duration-400 hover:shadow-xl hover:shadow-purple-50 cursor-default"
            >
              {/* Hover gradient overlay */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(circle at 20% 80%, ${pillar.color}05, transparent 70%)` }}
              />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <motion.div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: `${pillar.color}10` }}
                    whileHover={{ rotate: 8, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <pillar.icon size={22} style={{ color: pillar.color }} />
                  </motion.div>
                  <span className="text-xs font-mono font-medium px-3 py-1 rounded-full" style={{ color: pillar.color, background: `${pillar.color}08` }}>
                    {pillar.stat}
                  </span>
                </div>
                <h3 className="text-lg font-display font-bold text-[#1a1035] mb-2">{pillar.title}</h3>
                <p className="text-sm text-[#5a5a7a] leading-relaxed">{pillar.desc}</p>
              </div>

              {/* Animated bottom accent */}
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-16 h-[2px] rounded-full transition-all duration-400"
                style={{ background: pillar.color }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   4. JOURNEY TIMELINE — Animated & Scroll-Driven
   ═══════════════════════════════════════ */
function JourneySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.85], ["0%", "100%"]);

  const milestones = [
    { year: "2024", title: "AEVIQ Founded", desc: "Launched with a vision to democratize enterprise tech for ambitious businesses worldwide.", color: "#7C3AED" },
    { year: "2024", title: "First Enterprise Clients", desc: "Onboarded pioneering clients for CRM and AI automation solutions across industries.", color: "#2563EB" },
    { year: "2025", title: "Unified Platform Launch", desc: "Released the unified platform combining CRM, ERP, and AI in a single intelligent system.", color: "#EC4899" },
    { year: "2025", title: "Global Expansion", desc: "Expanded to 12+ countries with cloud-native solutions and multi-region infrastructure.", color: "#10B981" },
    { year: "2026", title: "AI Revolution", desc: "Integrating next-gen AI models for autonomous business intelligence across all products.", color: "#F59E0B" },
  ];

  return (
    <section ref={containerRef} className="py-28 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-[#7C3AED]/3 rounded-full blur-[120px]" />

      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-100 mb-6">
            <Rocket size={14} className="text-[#7C3AED]" />
            <span className="text-sm font-medium text-[#7C3AED]">Our Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#1a1035] mb-4">
            From Vision to <span className="gradient-text">Reality</span>
          </h2>
          <p className="text-lg text-[#5a5a7a] max-w-xl mx-auto">
            Every great company starts with a single idea. Here's how AEVIQ evolved.
          </p>
        </motion.div>

        {/* Vertical timeline */}
        <div className="relative">
          {/* Track */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-[2px] bg-purple-100 rounded-full" />
          {/* Animated fill */}
          <motion.div
            className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 w-[2px] rounded-full"
            style={{
              height: lineHeight,
              background: "linear-gradient(180deg, #7C3AED, #2563EB, #EC4899, #10B981, #F59E0B)",
            }}
          />

          <div className="space-y-16">
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
                className={`relative flex items-start gap-8 md:gap-14 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"} pl-16 md:pl-0`}>
                  <motion.div
                    className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:shadow-purple-50 hover:border-purple-100 transition-all duration-400 inline-block"
                    whileHover={{ y: -4 }}
                  >
                    <div className={`flex items-center gap-3 mb-3 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                      <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-full" style={{ color: m.color, background: `${m.color}10` }}>
                        {m.year}
                      </span>
                    </div>
                    <h3 className="text-lg font-display font-bold text-[#1a1035] mb-2">{m.title}</h3>
                    <p className="text-sm text-[#5a5a7a] leading-relaxed">{m.desc}</p>
                  </motion.div>
                </div>

                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2">
                  <motion.div
                    className="w-[16px] h-[16px] rounded-full border-[3px] bg-white"
                    style={{ borderColor: m.color, boxShadow: `0 0 20px ${m.color}30` }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.15, type: "spring" }}
                  />
                </div>

                {/* Spacer */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   5. WHY AEVIQ — Unique Bento Grid
   ═══════════════════════════════════════ */
function WhyAEVIQ() {
  const features = [
    { title: "Rapid Delivery", desc: "From concept to production in weeks, not months. Agile sprints with continuous delivery.", icon: Rocket, color: "#7C3AED", span: "md:col-span-2" },
    { title: "AI-Native", desc: "Every solution has AI baked in from day one — not bolted on as an afterthought.", icon: Sparkles, color: "#EC4899", span: "md:col-span-1" },
    { title: "24/7 Support", desc: "Round-the-clock monitoring and dedicated support for all enterprise clients.", icon: CheckCircle2, color: "#10B981", span: "md:col-span-1" },
    { title: "Award-Winning Design", desc: "Beautiful, intuitive interfaces that users actually love to interact with.", icon: Award, color: "#F59E0B", span: "md:col-span-2" },
  ];

  return (
    <section className="py-28 relative overflow-hidden dark-section">
      <div className="absolute inset-0 dot-grid opacity-15" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-[#7C3AED]/6 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-[#EC4899]/4 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-[#7C3AED] font-medium tracking-widest uppercase">Why AEVIQ</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mt-3 mb-4">
            What Makes Us <span className="shimmer-text">Different</span>
          </h2>
          <p className="text-lg text-white/40 max-w-2xl mx-auto">
            We don't just build software — we engineer the intelligent systems that power tomorrow's enterprises.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid md:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`${f.span} group relative rounded-2xl p-8 cursor-default overflow-hidden`}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(circle at 30% 70%, ${f.color}10, transparent 70%)` }}
              />

              <div className="relative z-10">
                <motion.div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: `${f.color}15`, border: `1px solid ${f.color}20` }}
                  whileHover={{ rotate: 8, scale: 1.1 }}
                >
                  <f.icon size={22} style={{ color: f.color }} />
                </motion.div>
                <h3 className="text-xl font-display font-bold text-white mb-2">{f.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   6. CTA — Aurora Background
   ═══════════════════════════════════════ */
function AboutCTA() {
  return (
    <section className="py-28 bg-gradient-to-br from-[#FAF7FF] via-[#F0F0FF] to-[#FFF5F8] relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full animate-aurora"
          style={{
            background: "linear-gradient(135deg, rgba(124,58,237,0.1), rgba(37,99,235,0.06), rgba(236,72,153,0.05))",
            backgroundSize: "300% 300%",
            filter: "blur(100px)",
          }}
        />
      </div>

      {/* Floating particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-[#7C3AED]/10"
          style={{ left: `${15 + i * 18}%`, top: `${25 + (i % 3) * 20}%` }}
          animate={{ y: [0, -16, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
        />
      ))}

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#1a1035] mb-5 leading-tight">
            Ready to Build Something{" "}
            <span className="gradient-text">Extraordinary?</span>
          </h2>
          <p className="text-lg text-[#5a5a7a] max-w-xl mx-auto mb-10">
            Join the businesses transforming their operations with AEVIQ intelligent solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="mailto:hello@aeviqsolutions.com"
              className="btn-primary px-8 py-4 rounded-2xl text-white font-semibold text-base inline-flex items-center gap-3"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Start Your Project
              <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
                <ArrowRight size={18} />
              </motion.span>
            </motion.a>
            <motion.a
              href="/"
              className="btn-secondary px-8 py-4 rounded-2xl font-semibold text-base inline-flex items-center gap-2"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Back to Home
              <ChevronRight size={16} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   FULL PAGE
   ═══════════════════════════════════════ */
export default function About() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <AboutHero />          {/* LIGHT — Immersive hero with parallax */}
      <ByTheNumbers />       {/* DARK  — Animated stat counters */}
      <WhatWeDo />           {/* LIGHT — 6 pillar cards */}
      <JourneySection />     {/* LIGHT — Scroll-driven timeline */}
      <WhyAEVIQ />           {/* DARK  — Bento grid */}
      <AboutCTA />           {/* LIGHT — Aurora CTA */}
      <Footer />
    </div>
  );
}
