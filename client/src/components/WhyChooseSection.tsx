import { motion } from "framer-motion";
import { Shield, Cpu, Zap, BarChart3 } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";

const reasons = [
  {
    icon: Cpu,
    title: "AI Powered Technology",
    description:
      "Autonomous systems that process millions of data points in real-time, delivering actionable intelligence.",
    statEnd: 10,
    statSuffix: "x",
    statLabel: "Processing Speed",
    color: "#7C3AED",
    span: "md:col-span-2",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Zero-trust architecture with end-to-end encryption, SOC 2 compliance, and 24/7 threat monitoring.",
    statEnd: 99.9,
    statSuffix: "%",
    statDecimals: 1,
    statLabel: "Uptime SLA",
    color: "#2563EB",
    span: "md:col-span-1",
  },
  {
    icon: Zap,
    title: "Scalable Architecture",
    description:
      "Cloud-native microservices that auto-scale from 100 to 10 million users seamlessly.",
    statEnd: 100,
    statSuffix: "x",
    statLabel: "Scale Capacity",
    color: "#EC4899",
    span: "md:col-span-1",
  },
  {
    icon: BarChart3,
    title: "Growth Analytics",
    description:
      "Real-time dashboards with predictive models that surface growth opportunities before competitors.",
    statEnd: 40,
    statSuffix: "%",
    statLabel: "Avg. Growth Lift",
    color: "#10B981",
    span: "md:col-span-2",
  },
];

function ReasonCard({ reason, index }: { reason: (typeof reasons)[0]; index: number }) {
  const [display, ref] = useCountUp({
    end: reason.statEnd,
    suffix: reason.statSuffix,
    decimals: reason.statDecimals || 0,
    duration: 2500,
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
      className={`${reason.span} group relative overflow-hidden rounded-2xl bg-white border border-gray-100 hover:border-purple-100 p-8 transition-all duration-400 hover:shadow-xl hover:shadow-purple-50 hover:-translate-y-1`}
    >
      {/* Hover gradient overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 20% 80%, ${reason.color}06, transparent 70%)`,
        }}
      />

      {/* Animated bottom border on hover */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-1/4 h-[2px] rounded-full transition-all duration-500"
        style={{ background: `linear-gradient(90deg, transparent, ${reason.color}, transparent)` }}
      />

      <div className="relative z-10 flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ background: `${reason.color}10` }}
            >
              <reason.icon size={24} style={{ color: reason.color }} />
            </div>
            <h3 className="text-lg font-display font-bold text-[#1a1035]">
              {reason.title}
            </h3>
          </div>
          <p className="text-sm leading-relaxed text-[#5a5a7a] max-w-md">
            {reason.description}
          </p>
        </div>

        {/* Animated counter */}
        <div ref={ref as any} className="text-right shrink-0 ml-6">
          <div
            className="font-mono text-4xl font-bold"
            style={{ color: reason.color }}
          >
            {display}
          </div>
          <div className="text-xs text-[#8b8ba0] mt-1">{reason.statLabel}</div>
        </div>
      </div>
    </motion.div>
  );
}

export default function WhyChooseSection() {
  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-[#FAF7FF] to-white">
      {/* Subtle background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7C3AED]/4 rounded-full blur-[150px]" />

      {/* Decorative shapes */}
      <motion.div
        className="absolute top-20 right-[15%] w-20 h-20 border border-purple-100 rounded-xl"
        animate={{ rotate: [0, 90, 180, 270, 360] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-100 mb-6">
            <span className="text-sm font-medium text-[#7C3AED]">Why ByteX</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-5 leading-tight text-[#1a1035]">
            Engineering the Intelligent{" "}
            <span className="gradient-text">Infrastructure</span>
          </h2>
          <p className="text-lg leading-relaxed text-[#5a5a7a]">
            We don't just build software — we engineer the intelligent systems
            that power tomorrow's enterprises at scale.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid md:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <ReasonCard key={reason.title} reason={reason} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
