import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section id="contact" className="relative py-32 overflow-hidden bg-gradient-to-br from-[#FAF7FF] via-[#F0F0FF] to-[#FFF5F8]">
      {/* Aurora-like animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full animate-aurora"
          style={{
            background: "linear-gradient(135deg, rgba(124,58,237,0.12), rgba(37,99,235,0.08), rgba(236,72,153,0.06))",
            backgroundSize: "300% 300%",
            filter: "blur(100px)",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full animate-aurora"
          style={{
            background: "linear-gradient(135deg, rgba(236,72,153,0.08), rgba(124,58,237,0.1), rgba(37,99,235,0.06))",
            backgroundSize: "300% 300%",
            filter: "blur(120px)",
            animationDelay: "4s",
          }}
        />

        {/* Top divider line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7C3AED]/20 to-transparent" />
      </div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-[#7C3AED]/15"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.4,
          }}
        />
      ))}

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-purple-100 shadow-sm mb-8">
            <motion.span
              className="w-2 h-2 rounded-full bg-[#EC4899]"
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-sm font-medium text-[#5a5a7a]">
              Ready to Build
            </span>
          </div>

          {/* Heading with shimmer */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-6 leading-tight text-[#1a1035]">
            Ready to Transform{" "}
            <br className="hidden sm:block" />
            <span className="gradient-text">Your Business?</span>
          </h2>

          <p className="text-lg sm:text-xl max-w-xl mx-auto mb-10 text-[#5a5a7a]">
            Let's build next-generation digital solutions together. From
            concept to deployment, we engineer systems that scale.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="mailto:hello@bytexsolutions.com"
              className="btn-primary px-10 py-4 rounded-2xl text-white font-semibold text-lg inline-flex items-center gap-3"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Start Your Project
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight size={20} />
              </motion.span>
            </motion.a>
            <motion.a
              href="#services"
              className="btn-secondary px-10 py-4 rounded-2xl font-semibold text-lg inline-flex items-center gap-3"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              View Solutions
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
