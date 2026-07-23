import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ProductShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [12, 0, -5]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.92, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section
      ref={sectionRef}
      id="platform"
      className="relative py-32 overflow-hidden dark-section"
    >
      {/* Background */}
      <div className="absolute inset-0 dot-grid opacity-30" />

      {/* Ambient glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#7C3AED]/8 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#2563EB]/6 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <span className="text-sm font-medium text-white/60">
              Unified Platform
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-5 text-white">
            One Platform.{" "}
            <span className="shimmer-text">Infinite Possibilities.</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-white/40">
            CRM + ERP + AI Automation + Marketing Analytics — unified in a
            single intelligent platform.
          </p>
        </motion.div>

        {/* Dashboard Mockup with 3D perspective */}
        <motion.div
          style={{ rotateX, scale, opacity, transformPerspective: 1200 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Animated gradient border */}
          <div className="absolute -inset-[2px] rounded-2xl overflow-hidden">
            <div
              className="absolute inset-0 animate-gradient"
              style={{
                background:
                  "linear-gradient(135deg, rgba(124,58,237,0.4), rgba(37,99,235,0.2), rgba(236,72,153,0.3), rgba(124,58,237,0.4))",
                backgroundSize: "300% 300%",
              }}
            />
          </div>

          {/* Main dashboard area */}
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{
              background: "rgba(15,10,31,0.9)",
              backdropFilter: "blur(20px)",
            }}
          >
            {/* Mock dashboard UI */}
            <div className="p-8">
              {/* Top bar */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-400/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                  <div className="w-3 h-3 rounded-full bg-green-400/60" />
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-20 h-6 rounded-md bg-white/5" />
                  <div className="w-16 h-6 rounded-md bg-white/5" />
                  <div className="w-24 h-6 rounded-md bg-[#7C3AED]/20" />
                </div>
              </div>

              {/* Dashboard grid */}
              <div className="grid grid-cols-4 gap-4 mb-6">
                {[
                  { label: "Revenue", value: "$2.4M", change: "+28%", color: "#7C3AED" },
                  { label: "Users", value: "12.4K", change: "+15%", color: "#2563EB" },
                  { label: "Conversion", value: "4.2%", change: "+8%", color: "#10B981" },
                  { label: "AI Tasks", value: "1,247", change: "+42%", color: "#EC4899" },
                ].map((stat) => (
                  <motion.div
                    key={stat.label}
                    className="rounded-xl p-4"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.05)",
                    }}
                    whileHover={{ scale: 1.02, borderColor: `${stat.color}30` }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-xs text-white/30 mb-1 font-mono">{stat.label}</div>
                    <div className="text-lg font-bold text-white font-mono">{stat.value}</div>
                    <div className="text-xs font-mono mt-1" style={{ color: stat.color }}>
                      {stat.change}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Chart area */}
              <div
                className="rounded-xl p-6 h-48 relative overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.04)",
                }}
              >
                {/* Animated chart bars */}
                <div className="absolute bottom-6 left-6 right-6 flex items-end gap-2 h-32">
                  {[40, 65, 45, 80, 55, 90, 70, 95, 60, 85, 50, 100, 75, 88, 62, 92].map(
                    (h, i) => (
                      <motion.div
                        key={i}
                        className="flex-1 rounded-t-sm"
                        style={{
                          background: `linear-gradient(to top, rgba(124,58,237,0.3), rgba(37,99,235,0.15))`,
                        }}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.8,
                          delay: i * 0.05,
                          ease: [0.23, 1, 0.32, 1],
                        }}
                      />
                    )
                  )}
                </div>

                {/* Scan line */}
                <motion.div
                  className="absolute left-0 right-0 h-[1px]"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(124,58,237,0.4), transparent)",
                  }}
                  animate={{ top: ["0%", "100%", "0%"] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </div>
          </div>

          {/* Feature labels floating below */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {["CRM", "ERP", "AI Automation", "Marketing Analytics"].map(
              (label, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
                  className="px-5 py-2.5 rounded-full text-xs font-mono font-medium"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "rgba(255,255,255,0.6)",
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] inline-block mr-2 animate-pulse" />
                  {label}
                </motion.div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
