import { motion, useScroll, useTransform } from "framer-motion";
import { Search, Palette, Code, Rocket } from "lucide-react";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Deep business analysis to map requirements, stakeholders, and technical constraints.",
    icon: Search,
    details: ["Requirements Analysis", "Stakeholder Interviews", "Technical Assessment", "Project Scoping"],
    metric: "2-3 Weeks",
    color: "#7C3AED",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Architecting scalable systems with precision-engineered UI/UX and technical blueprints.",
    icon: Palette,
    details: ["System Architecture", "UI/UX Design", "Prototype Building", "Technical Blueprint"],
    metric: "3-4 Weeks",
    color: "#2563EB",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "Building enterprise-grade software with agile sprints, continuous testing, and code reviews.",
    icon: Code,
    details: ["Agile Development", "Code Reviews", "QA Testing", "Integration Testing"],
    metric: "6-12 Weeks",
    color: "#EC4899",
  },
  {
    number: "04",
    title: "Deploy",
    description:
      "Production launch with performance monitoring, continuous support, and growth optimization.",
    icon: Rocket,
    details: ["Production Launch", "Performance Monitoring", "Continuous Support", "Growth Optimization"],
    metric: "Ongoing",
    color: "#10B981",
  },
];

export default function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Progress line fill based on scroll
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section
      ref={containerRef}
      id="process"
      className="relative py-32 overflow-hidden bg-gradient-to-b from-white to-[#FAF7FF]"
    >
      {/* Subtle background */}
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-[#7C3AED]/4 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-100 mb-6">
            <span className="text-sm font-medium text-[#7C3AED]">Our Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-5 leading-tight text-[#1a1035]">
            Our Development{" "}
            <span className="gradient-text">Process</span>
          </h2>
          <p className="text-lg leading-relaxed text-[#5a5a7a]">
            A battle-tested methodology that transforms complex requirements
            into enterprise-grade systems.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line track */}
          <div className="absolute left-[28px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-[2px] bg-purple-100 rounded-full" />

          {/* Animated fill line */}
          <motion.div
            className="absolute left-[28px] md:left-1/2 md:-translate-x-px top-0 w-[2px] rounded-full"
            style={{
              height: lineHeight,
              background: "linear-gradient(180deg, #7C3AED, #2563EB, #EC4899, #10B981)",
            }}
          />

          <div className="space-y-20">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.7,
                  delay: 0.1,
                  ease: [0.23, 1, 0.32, 1],
                }}
                className={`relative flex items-start gap-8 md:gap-16 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content Card */}
                <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"} pl-16 md:pl-0`}>
                  <motion.div
                    className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-lg hover:shadow-purple-50 hover:border-purple-100 transition-all duration-400 inline-block"
                    whileHover={{ y: -4 }}
                  >
                    <div className={`flex items-center gap-3 mb-4 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center"
                        style={{ background: `${step.color}10` }}
                      >
                        <step.icon size={20} style={{ color: step.color }} />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-sm font-bold" style={{ color: step.color }}>
                          Phase {step.number}
                        </span>
                        <span className="font-mono text-xs text-[#8b8ba0]">
                          {step.metric}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-xl font-display font-bold text-[#1a1035] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-[#5a5a7a] mb-4">
                      {step.description}
                    </p>
                    <div className={`flex flex-wrap gap-2 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                      {step.details.map((detail) => (
                        <span
                          key={detail}
                          className="px-3 py-1.5 rounded-full text-xs bg-gray-50 border border-gray-100 text-[#5a5a7a]"
                        >
                          {detail}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Center marker with glow */}
                <div className="absolute left-[28px] md:left-1/2 -translate-x-1/2">
                  <motion.div
                    className="w-[18px] h-[18px] rounded-full border-[3px] bg-white flex items-center justify-center"
                    style={{
                      borderColor: step.color,
                      boxShadow: `0 0 20px ${step.color}30`,
                    }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2, type: "spring" }}
                  >
                    <div
                      className="w-[6px] h-[6px] rounded-full"
                      style={{ background: step.color }}
                    />
                  </motion.div>
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
