import { motion } from "framer-motion";

const technologies = [
  { name: "React", color: "#61DAFB" },
  { name: "Next.js", color: "#6366F1" },
  { name: "Node.js", color: "#339933" },
  { name: "NestJS", color: "#E0234E" },
  { name: "AI/ML", color: "#7C3AED" },
  { name: "Cloud", color: "#2563EB" },
  { name: "AWS", color: "#FF9900" },
  { name: "PostgreSQL", color: "#336791" },
  { name: "Automation", color: "#EC4899" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "Docker", color: "#2496ED" },
  { name: "GraphQL", color: "#E10098" },
];

export default function TechStackSection() {
  return (
    <section id="tech" className="relative py-32 overflow-hidden dark-section">
      {/* Background */}
      <div className="absolute inset-0 dot-grid opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#7C3AED]/3 to-transparent" />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#7C3AED]/5 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <span className="text-sm font-medium text-white/60">Technology Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-5 text-white">
            Powered by{" "}
            <span className="shimmer-text">Modern Tech</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-white/40">
            We build with the most powerful and proven technologies in the
            industry.
          </p>
        </motion.div>

        {/* Orbital layout */}
        <div className="relative flex items-center justify-center min-h-[400px]">
          {/* Center element */}
          <motion.div
            className="relative z-10 w-20 h-20 rounded-2xl bg-gradient-to-br from-[#7C3AED] to-[#2563EB] flex items-center justify-center shadow-2xl"
            style={{ boxShadow: "0 0 60px rgba(124,58,237,0.3)" }}
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-white font-display font-bold text-xl">BX</span>
          </motion.div>

          {/* Orbital rings */}
          <div className="absolute w-[280px] h-[280px] rounded-full border border-white/[0.04] animate-spin-slow" style={{ animationDuration: "40s" }} />
          <div className="absolute w-[420px] h-[420px] rounded-full border border-white/[0.03] animate-spin-slow" style={{ animationDuration: "60s", animationDirection: "reverse" }} />

          {/* Tech badges positioned around */}
          {technologies.map((tech, i) => {
            const angle = (i / technologies.length) * 2 * Math.PI - Math.PI / 2;
            const radius = i % 2 === 0 ? 180 : 250;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <motion.div
                key={tech.name}
                className="absolute"
                style={{ left: `calc(50% + ${x}px - 48px)`, top: `calc(50% + ${y}px - 18px)` }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, type: "spring" }}
                whileHover={{ scale: 1.15, y: -4 }}
              >
                <div
                  className="px-5 py-2.5 rounded-xl flex items-center gap-2 cursor-default"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: `1px solid ${tech.color}25`,
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <div
                    className="w-2 h-2 rounded-full animate-breathe"
                    style={{
                      backgroundColor: tech.color,
                      boxShadow: `0 0 10px ${tech.color}40`,
                      animationDelay: `${i * 0.3}s`,
                    }}
                  />
                  <span className="text-sm font-medium text-white/70 whitespace-nowrap">
                    {tech.name}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Infinite marquee */}
        <div className="mt-20 overflow-hidden relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0F0A1F] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0F0A1F] to-transparent z-10 pointer-events-none" />

          <div className="flex gap-8 animate-marquee whitespace-nowrap" style={{ opacity: 0.25 }}>
            {[...technologies, ...technologies, ...technologies].map((tech, i) => (
              <div
                key={`${tech.name}-${i}`}
                className="flex items-center gap-2"
              >
                <div
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: tech.color }}
                />
                <span className="font-mono text-sm text-white/40">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
