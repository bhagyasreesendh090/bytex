import { useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Users, Settings, Brain, Rocket, Activity, Zap, CheckCircle, TrendingUp, Sparkles, Cpu, Layers } from "lucide-react";

const services = [
  {
    id: "crm",
    icon: Users,
    title: "CRM Solutions",
    description: "Intelligent platforms to manage customers, leads, and sales pipelines at enterprise scale.",
    features: ["Lead Scoring", "Sales Automation", "Customer Analytics", "Pipeline Reports"],
    gradient: "from-[#7C3AED] to-[#6366F1]",
    color: "#7C3AED",
    metrics: [
      { label: "Conversion Lift", value: "+34%" },
      { label: "Pipeline Velocity", value: "2.1x" },
    ],
  },
  {
    id: "erp",
    icon: Settings,
    title: "ERP Software",
    description: "Unified business operations — from inventory to finance, HR to intelligence.",
    features: ["Inventory Tracking", "Finance Control", "HR Operations", "Bi-Dashboards"],
    gradient: "from-[#2563EB] to-[#4F46E5]",
    color: "#2563EB",
    metrics: [
      { label: "Process Efficiency", value: "+48%" },
      { label: "Cost Reduction", value: "27%" },
    ],
  },
  {
    id: "ai",
    icon: Brain,
    title: "AI Solutions",
    description: "Autonomous systems that automate complex workflows and predict business outcomes.",
    features: ["AI Assistants", "Autonomous Flow", "Predictive ML", "Smart Workflows"],
    gradient: "from-[#EC4899] to-[#A855F7]",
    color: "#EC4899",
    metrics: [
      { label: "Tasks Automated", value: "12.4K" },
      { label: "Accuracy Rate", value: "99.2%" },
    ],
  },
  {
    id: "marketing",
    icon: Rocket,
    title: "Digital Marketing",
    description: "Data-driven growth engines — SEO, social, advertising, and marketing automation.",
    features: ["Growth SEO", "Campaign Engine", "Ad Analytics", "Auto-Funnel"],
    gradient: "from-[#10B981] to-[#2563EB]",
    color: "#10B981",
    metrics: [
      { label: "ROI Improvement", value: "3.2x" },
      { label: "Traffic Growth", value: "+180%" },
    ],
  },
];

/* ═══════════════════════════════════════
   ANIMATED ART DEMO CANVAS FOR SERVICES
   ═══════════════════════════════════════ */
function ServiceArtCanvas({ activeId }: { activeId: string }) {
  return (
    <div className="relative rounded-2xl p-6 sm:p-8 overflow-hidden min-h-[340px] flex flex-col justify-between border border-white/10 bg-white/[0.02] backdrop-blur-xl">
      {/* Scan line animation */}
      <motion.div
        className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-400/40 to-transparent pointer-events-none"
        animate={{ top: ["0%", "100%", "0%"] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <AnimatePresence mode="wait">
        {activeId === "crm" && (
          <motion.div
            key="crm-art"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.4 }}
            className="space-y-6"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono text-white/60">Live Sales Pipeline Engine</span>
              </div>
              <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-[#7C3AED]/20 text-[#7C3AED] border border-[#7C3AED]/30">
                +45 Leads Today
              </span>
            </div>

            {/* Pipeline progress bars */}
            <div className="space-y-3">
              {[
                { stage: "Qualified Prospects", val: "88%", count: "$240K", col: "#7C3AED" },
                { stage: "Proposal Sent", val: "64%", count: "$180K", col: "#2563EB" },
                { stage: "Closed Won", val: "42%", count: "$95K", col: "#10B981" },
              ].map((item, idx) => (
                <div key={item.stage} className="space-y-1.5">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-white/70">{item.stage}</span>
                    <span style={{ color: item.col }}>{item.count} ({item.val})</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: item.col }}
                      initial={{ width: "0%" }}
                      animate={{ width: item.val }}
                      transition={{ duration: 1, delay: idx * 0.15, ease: "easeOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Live lead notification toast simulation */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#7C3AED]/20 flex items-center justify-center text-[#7C3AED]">
                  <Activity size={16} />
                </div>
                <div>
                  <div className="text-xs font-medium text-white">Enterprise Deal Qualified</div>
                  <div className="text-[10px] text-white/40 font-mono">Score: 98/100 · High Intent</div>
                </div>
              </div>
              <span className="text-xs font-mono font-bold text-emerald-400">+$65,000</span>
            </motion.div>
          </motion.div>
        )}

        {activeId === "erp" && (
          <motion.div
            key="erp-art"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.4 }}
            className="space-y-6"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-pulse" />
                <span className="text-xs font-mono text-white/60">Unified Operations Topology</span>
              </div>
              <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-[#2563EB]/20 text-[#2563EB] border border-[#2563EB]/30">
                200+ Nodes Syncing
              </span>
            </div>

            {/* Animated node diagram */}
            <div className="grid grid-cols-3 gap-3 py-2">
              {[
                { label: "Inventory", stat: "99.8% Sync", icon: Layers, col: "#2563EB" },
                { label: "Ledger", stat: "Real-time", icon: TrendingUp, col: "#7C3AED" },
                { label: "Supply Chain", stat: "Auto-routed", icon: Settings, col: "#10B981" },
              ].map((node, i) => (
                <motion.div
                  key={node.label}
                  initial={{ y: 15, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.15 }}
                  className="p-4 rounded-xl bg-white/5 border border-white/10 text-center relative overflow-hidden"
                >
                  <motion.div
                    className="w-8 h-8 rounded-lg mx-auto mb-2 flex items-center justify-center"
                    style={{ background: `${node.col}20`, color: node.col }}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                  >
                    <node.icon size={16} />
                  </motion.div>
                  <div className="text-xs font-bold text-white">{node.label}</div>
                  <div className="text-[10px] font-mono text-white/40 mt-0.5">{node.stat}</div>
                </motion.div>
              ))}
            </div>

            {/* Activity ticker */}
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs font-mono">
              <span className="text-white/60">Automated Reorder Triggered</span>
              <span className="text-blue-400">SKU-9042 · Success</span>
            </div>
          </motion.div>
        )}

        {activeId === "ai" && (
          <motion.div
            key="ai-art"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.4 }}
            className="space-y-6"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-pink-400 animate-pulse" />
                <span className="text-xs font-mono text-white/60">Autonomous AI Agent Studio</span>
              </div>
              <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-[#EC4899]/20 text-[#EC4899] border border-[#EC4899]/30">
                12.4K Tasks Processed
              </span>
            </div>

            {/* Prompt simulator */}
            <div className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-3 font-mono text-xs">
              <div className="flex items-center gap-2 text-pink-400">
                <Sparkles size={14} />
                <span>AI Workflow Execution Log:</span>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="text-white/80 leading-relaxed bg-white/5 p-3 rounded-lg border border-white/5"
              >
                &gt; Analyzing customer churn risk model...<br />
                &gt; Identified 142 retention targets.<br />
                <span className="text-emerald-400">&gt; Automated personalized engagement sequence deployed (99.2% accuracy).</span>
              </motion.div>
            </div>

            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-white/40">Latency: 42ms</span>
              <span className="text-pink-400 flex items-center gap-1">
                <Zap size={12} /> Auto-Scaling Active
              </span>
            </div>
          </motion.div>
        )}

        {activeId === "marketing" && (
          <motion.div
            key="marketing-art"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.4 }}
            className="space-y-6"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono text-white/60">Multi-Channel Growth Hub</span>
              </div>
              <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/30">
                3.2x ROI Lift
              </span>
            </div>

            {/* Growth metrics visual */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-[10px] font-mono text-white/40">Organic Traffic</div>
                <div className="text-2xl font-mono font-bold text-emerald-400 mt-1">+180.4%</div>
                <div className="w-full bg-white/10 h-1.5 rounded-full mt-3 overflow-hidden">
                  <motion.div className="bg-emerald-400 h-full rounded-full" initial={{ width: 0 }} animate={{ width: "80%" }} transition={{ duration: 1 }} />
                </div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-[10px] font-mono text-white/40">Campaign Conversions</div>
                <div className="text-2xl font-mono font-bold text-purple-400 mt-1">4.8k / mo</div>
                <div className="w-full bg-white/10 h-1.5 rounded-full mt-3 overflow-hidden">
                  <motion.div className="bg-purple-400 h-full rounded-full" initial={{ width: 0 }} animate={{ width: "65%" }} transition={{ duration: 1 }} />
                </div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs font-mono">
              <span className="text-white/60">Ad Spend Optimization</span>
              <span className="text-emerald-400">-68% CPA Reduction</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── 3D Tilt Card ── */
function TiltCard({ service, index, isActive, onClick }: { service: (typeof services)[0]; index: number; isActive: boolean; onClick: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), {
    stiffness: 200,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), {
    stiffness: 200,
    damping: 30,
  });

  function handleMouseMove(e: React.MouseEvent) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1200,
        transformStyle: "preserve-3d",
      }}
      className={`relative rounded-2xl p-7 cursor-pointer group transition-all duration-300 ${
        isActive ? "ring-2 ring-purple-500/50" : ""
      }`}
    >
      {/* Card background with glass effect */}
      <div
        className="absolute inset-0 rounded-2xl transition-all duration-400"
        style={{
          background: isActive ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,0.03)",
          border: isActive ? `1px solid ${service.color}60` : "1px solid rgba(255,255,255,0.08)",
          backdropFilter: "blur(16px)",
        }}
      />

      {/* Hover glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${service.color}12, transparent 70%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border"
            style={{
              background: `${service.color}15`,
              borderColor: `${service.color}30`,
            }}
          >
            <service.icon size={22} style={{ color: service.color }} />
          </div>
          {isActive && (
            <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 flex items-center gap-1">
              <Sparkles size={10} /> Active View
            </span>
          )}
        </div>

        <h3 className="text-xl font-display font-bold text-white mb-1.5">
          {service.title}
        </h3>
        <p className="text-sm leading-relaxed text-white/40 mb-5">
          {service.description}
        </p>

        {/* Features grid */}
        <div className="grid grid-cols-2 gap-2 mb-5">
          {service.features.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`} />
              <span className="font-medium text-white/60">{feature}</span>
            </div>
          ))}
        </div>

        {/* Metrics */}
        <div
          className="flex items-center gap-6 pt-4 border-t"
          style={{ borderColor: "rgba(255,255,255,0.06)" }}
        >
          {service.metrics.map((metric) => (
            <div key={metric.label}>
              <div className="font-mono text-lg font-bold text-white">
                {metric.value}
              </div>
              <div className="text-[11px] text-white/30">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState("crm");
  const activeService = services.find((s) => s.id === activeTab) || services[0];

  return (
    <section id="services" className="relative py-32 overflow-hidden dark-section">
      {/* Background */}
      <div className="absolute inset-0 dot-grid opacity-40" />

      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#7C3AED]/8 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#2563EB]/6 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <span className="w-2 h-2 rounded-full bg-[#7C3AED] animate-pulse" />
            <span className="text-sm font-medium text-white/60">
              Interactive Solutions Engine
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-5 leading-tight text-white">
            Intelligent Digital{" "}
            <span className="shimmer-text">Solutions</span>
          </h2>
          <p className="text-lg leading-relaxed text-white/40">
            Select a solution below to preview live automated capabilities and metrics.
          </p>
        </motion.div>

        {/* ═══ INTERACTIVE ART SHOWCASE COMPONENT ═══ */}
        <div className="mb-16">
          {/* Tab Selector */}
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 p-1.5 rounded-2xl bg-white/[0.03] border border-white/10 w-fit">
            {services.map((s) => {
              const Icon = s.icon;
              const isSel = s.id === activeTab;
              return (
                <button
                  key={s.id}
                  onClick={() => setActiveTab(s.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-mono font-medium transition-all duration-300 flex items-center gap-2 ${
                    isSel
                      ? "bg-gradient-to-r from-[#7C3AED] to-[#2563EB] text-white shadow-lg shadow-[#7C3AED]/30"
                      : "text-white/50 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Icon size={16} />
                  <span>{s.title}</span>
                </button>
              );
            })}
          </div>

          {/* Animated Canvas */}
          <ServiceArtCanvas activeId={activeTab} />
        </div>

        {/* Services 3D Tilt Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <TiltCard
              key={service.title}
              service={service}
              index={i}
              isActive={service.id === activeTab}
              onClick={() => setActiveTab(service.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
