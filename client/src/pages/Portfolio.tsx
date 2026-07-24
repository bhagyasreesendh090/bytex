import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Quote, Star, ExternalLink, ChevronRight, BarChart3, Settings, Brain, ShoppingCart, Megaphone, TrendingUp, Calendar, Activity, Building2, Globe } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ─────────── Data ─────────── */
const categories = ["All", "CRM", "ERP", "AI", "E-Commerce", "Marketing"] as const;
type Category = (typeof categories)[number];

const projects = [
  {
    id: 101,
    title: "Eventmithra",
    category: "E-Commerce" as Category,
    client: "Eventmithra Management Services",
    url: "https://eventmithra.in/",
    image: "/portfolio/eventmithra.png",
    description: "All-in-one digital event management & vendor booking platform offering end-to-end celebration planning, customized event packages, real-time availability, and automated vendor workflows.",
    icon: Calendar,
    gradient: "from-[#EC4899] to-[#8B5CF6]",
    accentColor: "#EC4899",
    results: ["+250% booking volume", "10,000+ happy clients", "Real-time vendor portal"],
    tags: ["React", "Node.js", "Payment Gateway", "Tailwind CSS"],
    year: "2025",
    isLive: true,
  },
  {
    id: 102,
    title: "MVDR Lab",
    category: "ERP" as Category,
    client: "MVDR Diagnostic Laboratories",
    url: "https://mvdrlab.site/",
    image: "/portfolio/mvdrlab.png",
    description: "Advanced medical laboratory and diagnostic portal providing online test bookings, automated patient diagnostic reports, home sample collection scheduling, and laboratory workflow management.",
    icon: Activity,
    gradient: "from-[#00C6FF] to-[#2563EB]",
    accentColor: "#00C6FF",
    results: ["99.8% report accuracy", "Fast patient turnaround", "24/7 digital portal"],
    tags: ["React", "Node.js", "Medical LIMS", "PostgreSQL"],
    year: "2025",
    isLive: true,
  },
  {
    id: 103,
    title: "Sunstar Builders",
    category: "CRM" as Category,
    client: "Sunstar Builders & Infrastructure",
    url: "https://sunstarbuilders.in/",
    image: "/portfolio/sunstar.png",
    description: "Premium real estate and construction showcase portal featuring interactive property portfolios, architectural blueprints, ongoing construction tracking, and client consultation booking engine.",
    icon: Building2,
    gradient: "from-[#F59E0B] to-[#7C3AED]",
    accentColor: "#F59E0B",
    results: ["3.5x lead conversion", "Premium architectural UI", "100+ projects featured"],
    tags: ["Next.js", "Tailwind CSS", "3D Virtual Tours", "Lead Engine"],
    year: "2024",
    isLive: true,
  },
  {
    id: 104,
    title: "AEVIQ CogniBot AI Assistant",
    category: "AI" as Category,
    client: "AEVIQ R&D Labs",
    image: "/portfolio/cognibot.png",
    description: "Proprietary AI business intelligence & natural language processing engine featuring autonomous workflow orchestration, predictive data modeling, and instant client query handling.",
    icon: Brain,
    gradient: "from-[#EC4899] to-[#A855F7]",
    accentColor: "#EC4899",
    results: ["Instant response AI", "99.2% accuracy rate", "Autonomous workflows"],
    tags: ["Python", "TensorFlow", "React", "OpenAI"],
    year: "2025",
    isLive: false,
  },
  {
    id: 105,
    title: "AEVIQ Enterprise CRM Blueprint",
    category: "CRM" as Category,
    client: "AEVIQ Solution Blueprint",
    image: "/portfolio/salesforce.png",
    description: "Pre-built modular CRM architecture with automated lead scoring pipeline, deal stage tracking, customer communication logs, and real-time revenue analytics dashboards.",
    icon: BarChart3,
    gradient: "from-[#7C3AED] to-[#6366F1]",
    accentColor: "#7C3AED",
    results: ["Rapid 2-week deployment", "Automated pipelines", "Pre-built analytics"],
    tags: ["React", "Node.js", "AI Lead Scoring", "PostgreSQL"],
    year: "2025",
    isLive: false,
  },
  {
    id: 106,
    title: "AEVIQ Operations & ERP Accelerator",
    category: "ERP" as Category,
    client: "AEVIQ Solution Blueprint",
    image: "/portfolio/operatex.png",
    description: "Comprehensive ERP software architecture integrating real-time inventory management, multi-branch operations tracking, financial reporting, and supply chain automation.",
    icon: Settings,
    gradient: "from-[#2563EB] to-[#4F46E5]",
    accentColor: "#2563EB",
    results: ["Multi-location readiness", "Real-time analytics", "Cloud native"],
    tags: ["React", "Node.js", "Redis", "Docker"],
    year: "2025",
    isLive: false,
  },
];

const testimonials = [
  {
    name: "Suresh V.",
    role: "Managing Director, Eventmithra Management",
    quote: "AEVIQ built our event booking platform from the ground up. The automated vendor scheduling and real-time package booking engine increased our bookings by 250%. Exceptional engineering team.",
    rating: 5,
    project: "Eventmithra Platform",
  },
  {
    name: "Dr. K. R. Vardhan",
    role: "Director & Pathologist, MVDR Diagnostic Laboratories",
    quote: "The diagnostic portal AEVIQ engineered streamlines test bookings, report automation, and home sample collection. Our patient turnaround time improved dramatically with 99.8% report accuracy.",
    rating: 5,
    project: "MVDR Lab Portal",
  },
  {
    name: "Naveen Reddy",
    role: "Founder & Managing Director, Sunstar Builders",
    quote: "AEVIQ transformed our online real estate presence. The 3D property portfolio showcase and lead engine boosted our client consultation inquiries by 3.5x. Highly recommended!",
    rating: 5,
    project: "Sunstar Builders Portal",
  },
];

/* ─────────── Animations ─────────── */
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] as any } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

/* ─────────── Project Card Visual ─────────── */
function ProjectVisual({ project }: { project: (typeof projects)[0] }) {
  const Icon = project.icon;
  return (
    <div
      className="relative aspect-[16/9] overflow-hidden rounded-t-2xl group/vis"
      style={{
        background: `linear-gradient(135deg, ${project.accentColor}0D, ${project.accentColor}20)`,
      }}
    >
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-60" />

      {/* Browser mockup header bar */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-black/20 backdrop-blur-md border-b border-white/10 px-3 flex items-center justify-between z-10">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
        </div>
        <div className="px-3 py-0.5 rounded-md bg-white/10 text-[10px] font-mono text-gray-200 truncate max-w-[200px]">
          {project.url ? project.url.replace("https://", "") : `${project.title.toLowerCase().replace(/\s+/g, "")}.com`}
        </div>
        {project.isLive ? (
          <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[9px] font-mono font-semibold uppercase flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Live Site
          </span>
        ) : (
          <div className="w-10" />
        )}
      </div>

      {/* Realistic Screenshot Image or Fallback */}
      {project.image ? (
        <img
          src={project.image}
          alt={`${project.title} Interface Mockup`}
          className="w-full h-full object-cover object-top group-hover/vis:scale-105 transition-transform duration-700 pt-8"
        />
      ) : (
        <>
          {/* Ambient gradient orb */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 rounded-full blur-[60px] opacity-35"
            style={{ background: project.accentColor }}
          />

          {/* Center icon */}
          <div className="absolute inset-0 flex items-center justify-center pt-5">
            <motion.div
              className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-xl`}
              style={{ boxShadow: `0 8px 40px ${project.accentColor}40` }}
              whileHover={{ rotate: 6, scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <Icon size={36} className="text-white" />
            </motion.div>
          </div>
        </>
      )}

      {/* Dark gradient overlay at bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

      {/* Visit Site Overlay Link */}
      {project.url && (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 bg-black/40 opacity-0 group-hover/vis:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px] z-20"
        >
          <span className="px-5 py-2.5 rounded-xl bg-white text-[#1a1035] font-semibold text-xs inline-flex items-center gap-2 shadow-2xl transform translate-y-2 group-hover/vis:translate-y-0 transition-transform duration-300">
            <span>Visit Live Website</span>
            <ExternalLink size={14} className="text-[#7C3AED]" />
          </span>
        </a>
      )}

      {/* Floating mini bars */}
      <div className="absolute bottom-3 left-6 right-6 flex items-end gap-1 h-10 opacity-15 pointer-events-none">
        {[35, 55, 40, 70, 50, 85, 60, 90, 45, 75, 55, 80].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t-sm"
            style={{ height: `${h}%`, background: project.accentColor }}
          />
        ))}
      </div>
    </div>
  );
}

/* ─────────── Hero Section ─────────── */
function PortfolioHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[#FAF7FF] via-[#F0F0FF] to-[#FFF8F0]">
      {/* Background decorations */}
      <div className="absolute inset-0 dot-grid opacity-40" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#7C3AED]/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#EC4899]/4 rounded-full blur-[120px]" />

      <motion.div
        className="absolute top-20 right-[15%] w-16 h-16 border-2 border-purple-200/30 rounded-xl"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-purple-100 shadow-sm mb-8">
            <motion.span
              className="w-2 h-2 rounded-full bg-[#EC4899]"
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-sm font-medium text-[#5a5a7a]">Our Work</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight text-[#1a1035]">
            Projects That{" "}
            <span className="gradient-text">Deliver Results</span>
          </h1>

          <p className="text-lg max-w-2xl mx-auto leading-relaxed text-[#5a5a7a]">
            A showcase of enterprise-grade solutions we've engineered for ambitious businesses worldwide.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────── Projects Grid ─────────── */
function ProjectsGrid() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="py-20 relative bg-white">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7C3AED]/15 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-14"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-[#7C3AED] to-[#2563EB] text-white shadow-lg shadow-[#7C3AED]/20"
                  : "bg-gray-50 border border-gray-100 text-[#5a5a7a] hover:border-purple-200 hover:text-[#1a1035]"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          layout
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                variants={fadeInUp}
                exit={{ opacity: 0, scale: 0.95 }}
                layout
                className="group mb-10"
              >
                <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-purple-100 hover:shadow-xl hover:shadow-purple-50 transition-all duration-400">
                  {/* Visual */}
                  <ProjectVisual project={project} />

                  {/* Content */}
                  <div className="p-7">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        {project.url ? (
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 group/title"
                          >
                            <h3 className="text-xl font-display font-bold text-[#1a1035] group-hover/title:text-[#7C3AED] transition-colors">
                              {project.title}
                            </h3>
                            <ExternalLink
                              size={16}
                              className="text-[#7C3AED] opacity-80 group-hover/title:opacity-100 group-hover/title:translate-x-0.5 group-hover/title:-translate-y-0.5 transition-all shrink-0"
                            />
                          </a>
                        ) : (
                          <h3 className="text-xl font-display font-bold text-[#1a1035] group-hover:text-[#7C3AED] transition-colors">
                            {project.title}
                          </h3>
                        )}
                        <p className="text-sm text-[#8b8ba0] mt-0.5">
                          for {project.client}
                        </p>
                      </div>
                      {project.isLive && (
                        <span className="px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-emerald-700 text-[11px] font-mono font-medium flex items-center gap-1.5 shrink-0">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          Live Website
                        </span>
                      )}
                    </div>

                    <p className="text-sm leading-relaxed text-[#5a5a7a] mb-5">
                      {project.description}
                    </p>

                    {/* Results */}
                    <div className="flex flex-wrap gap-3 mb-5">
                      {project.results.map((result) => (
                        <div
                          key={result}
                          className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-purple-50/60 border border-purple-100/60"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]" />
                          <span className="text-xs font-mono text-[#7C3AED] font-medium">
                            {result}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Tech tags + Live link button */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-gray-50">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 rounded-full text-xs bg-gray-50 border border-gray-100 text-[#6b6b8a]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#7C3AED] hover:text-[#2563EB] transition-colors py-1 px-2.5 rounded-lg hover:bg-purple-50"
                        >
                          <span>Visit Website</span>
                          <ArrowUpRight size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────── Stats Banner ─────────── */
function StatsBanner() {
  const stats = [
    { value: "150+", label: "Projects Delivered" },
    { value: "50+", label: "Enterprise Clients" },
    { value: "12", label: "Countries Served" },
    { value: "98%", label: "Client Retention" },
  ];

  return (
    <section className="relative py-20 overflow-hidden dark-section">
      <div className="absolute inset-0 dot-grid opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7C3AED]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#EC4899]/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={fadeInUp} className="text-center">
              <div className="font-mono text-4xl lg:text-5xl font-bold gradient-text">
                {stat.value}
              </div>
              <div className="text-sm mt-2 text-white/40">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────── Testimonials Section ─────────── */
function TestimonialsSection() {
  return (
    <section className="py-28 relative overflow-hidden bg-gradient-to-b from-white to-[#FAF7FF]">
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-[#7C3AED]/4 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-100 mb-6">
            <Quote size={14} className="text-[#EC4899]" />
            <span className="text-sm font-medium text-[#7C3AED]">Client Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4 text-[#1a1035]">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto text-[#5a5a7a]">
            Real feedback from real partners who trust AEVIQ with their digital transformation.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-6"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="bg-white rounded-2xl border border-gray-100 p-8 hover:border-purple-100 hover:shadow-lg hover:shadow-purple-50 transition-all duration-300 hover:-translate-y-1"
            >
              <Quote size={28} className="text-[#7C3AED]/15 mb-4" />

              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={14} className="fill-[#F59E0B] text-[#F59E0B]" />
                ))}
              </div>

              <p className="text-sm leading-relaxed text-[#5a5a7a] mb-6 italic">
                "{t.quote}"
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-gray-50">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#EC4899] flex items-center justify-center">
                  <span className="text-white text-sm font-bold font-display">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="text-sm font-medium text-[#1a1035]">{t.name}</div>
                  <div className="text-xs text-[#8b8ba0]">{t.role}</div>
                </div>
              </div>

              <div className="mt-3 text-[11px] font-mono text-[#b0b0c0]">
                Project: {t.project}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────── CTA Section ─────────── */
function PortfolioCTA() {
  return (
    <section className="py-28 relative overflow-hidden bg-gradient-to-br from-[#FAF7FF] via-[#F0F0FF] to-[#FFF5F8]">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-[#7C3AED]/6 via-[#EC4899]/4 to-[#2563EB]/6 rounded-full blur-[150px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-5 leading-tight text-[#1a1035]">
            Your Project Could Be{" "}
            <span className="gradient-text">Next</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto mb-10 text-[#5a5a7a]">
            Let's discuss how AEVIQ can engineer intelligent solutions tailored to your business needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="mailto:hello@aeviqsolutions.com"
              className="btn-primary px-8 py-4 rounded-2xl text-white font-semibold text-base inline-flex items-center gap-2"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Start a Conversation
              <ArrowUpRight size={18} />
            </motion.a>
            <motion.a
              href="/"
              className="btn-secondary px-8 py-4 rounded-2xl font-semibold text-base inline-flex items-center gap-2"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              View Our Services
              <ChevronRight size={16} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────── Full Page ─────────── */
export default function Portfolio() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <PortfolioHero />
      <ProjectsGrid />
      <StatsBanner />
      <TestimonialsSection />
      <PortfolioCTA />
      <Footer />
    </div>
  );
}
