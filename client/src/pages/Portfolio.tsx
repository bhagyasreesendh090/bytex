import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Quote, Star, ExternalLink, ChevronRight, BarChart3, Settings, Brain, ShoppingCart, Megaphone, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ─────────── Data ─────────── */
const categories = ["All", "CRM", "ERP", "AI", "E-Commerce", "Marketing"] as const;
type Category = (typeof categories)[number];

const projects = [
  {
    id: 1,
    title: "SalesForce Pro",
    category: "CRM" as Category,
    client: "TechVista Corp",
    description: "Enterprise CRM platform with AI-powered lead scoring, automated pipeline management, and real-time sales analytics for a Fortune 500 technology company.",
    icon: BarChart3,
    gradient: "from-[#7C3AED] to-[#6366F1]",
    accentColor: "#7C3AED",
    results: ["+34% conversion rate", "2.1x pipeline velocity", "45% less manual work"],
    tags: ["React", "Node.js", "AI/ML", "PostgreSQL"],
    year: "2025",
  },
  {
    id: 2,
    title: "OperateX ERP",
    category: "ERP" as Category,
    client: "GlobalManufact Ltd",
    description: "Full-scale ERP system integrating inventory, finance, HR, and supply chain management for a multinational manufacturing company with 200+ locations.",
    icon: Settings,
    gradient: "from-[#2563EB] to-[#4F46E5]",
    accentColor: "#2563EB",
    results: ["48% process efficiency gain", "27% cost reduction", "99.9% uptime"],
    tags: ["Vue.js", "Go", "Redis", "Kubernetes"],
    year: "2025",
  },
  {
    id: 3,
    title: "CogniBot AI",
    category: "AI" as Category,
    client: "DataFlow Inc",
    description: "AI-powered business intelligence platform with predictive analytics, natural language processing, and autonomous workflow automation.",
    icon: Brain,
    gradient: "from-[#EC4899] to-[#A855F7]",
    accentColor: "#EC4899",
    results: ["12,400 tasks automated", "99.2% accuracy rate", "60% faster decisions"],
    tags: ["Python", "TensorFlow", "React", "AWS"],
    year: "2024",
  },
  {
    id: 4,
    title: "ShopVerse",
    category: "E-Commerce" as Category,
    client: "StyleNest Fashion",
    description: "High-performance e-commerce platform with personalized recommendations, real-time inventory, and seamless checkout experience for a premium fashion brand.",
    icon: ShoppingCart,
    gradient: "from-[#10B981] to-[#059669]",
    accentColor: "#10B981",
    results: ["3.2x ROI improvement", "+180% traffic growth", "95% checkout completion"],
    tags: ["Next.js", "Stripe", "Algolia", "Vercel"],
    year: "2024",
  },
  {
    id: 5,
    title: "GrowthPulse",
    category: "Marketing" as Category,
    client: "MediaScale Agency",
    description: "Full-stack marketing automation platform with multi-channel campaign management, A/B testing engine, and real-time ROI tracking.",
    icon: Megaphone,
    gradient: "from-[#F59E0B] to-[#EF4444]",
    accentColor: "#F59E0B",
    results: ["+180% organic traffic", "3.2x ad ROI", "68% lower CPA"],
    tags: ["React", "Node.js", "Redis", "GCP"],
    year: "2024",
  },
  {
    id: 6,
    title: "FinEdge Pro",
    category: "ERP" as Category,
    client: "CapitalWorks Finance",
    description: "Fintech dashboard with real-time trading analytics, portfolio management, and automated compliance reporting for a leading investment firm.",
    icon: TrendingUp,
    gradient: "from-[#6366F1] to-[#2563EB]",
    accentColor: "#6366F1",
    results: ["99.99% uptime", "40% faster reporting", "SOC 2 compliant"],
    tags: ["Angular", "Java", "PostgreSQL", "Docker"],
    year: "2023",
  },
];

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "CTO, TechVista Corp",
    quote: "ByteX delivered our CRM platform 3 weeks ahead of schedule. The AI-powered lead scoring alone has increased our conversion rate by 34%. Exceptional team.",
    rating: 5,
    project: "SalesForce Pro",
  },
  {
    name: "Priya Sharma",
    role: "VP Operations, GlobalManufact",
    quote: "The ERP system ByteX built has transformed how we manage operations across 200+ locations. The real-time visibility and automation capabilities are outstanding.",
    rating: 5,
    project: "OperateX ERP",
  },
  {
    name: "Michael Chen",
    role: "Head of AI, DataFlow Inc",
    quote: "CogniBot AI transformed our decision-making process. What used to take days of analysis now happens in seconds. ByteX is in a league of their own.",
    rating: 5,
    project: "CogniBot AI",
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

/* ─────────── Project Card Visual (CSS-based, no images) ─────────── */
function ProjectVisual({ project }: { project: (typeof projects)[0] }) {
  const Icon = project.icon;
  return (
    <div
      className="relative aspect-[16/9] overflow-hidden rounded-t-2xl"
      style={{
        background: `linear-gradient(135deg, ${project.accentColor}08, ${project.accentColor}15)`,
      }}
    >
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-60" />

      {/* Gradient orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full blur-[60px] opacity-30"
        style={{ background: project.accentColor }}
      />

      {/* Center icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-xl`}
          style={{ boxShadow: `0 8px 40px ${project.accentColor}30` }}
          whileHover={{ rotate: 6, scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <Icon size={36} className="text-white" />
        </motion.div>
      </div>

      {/* Floating mini bars */}
      <div className="absolute bottom-4 left-6 right-6 flex items-end gap-1 h-12 opacity-20">
        {[35, 55, 40, 70, 50, 85, 60, 90, 45, 75, 55, 80].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t-sm"
            style={{ height: `${h}%`, background: project.accentColor }}
          />
        ))}
      </div>

      {/* Category badge */}
      <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-gray-100">
        <span className="text-xs font-mono font-medium text-[#1a1035]">
          {project.category}
        </span>
      </div>

      {/* Year badge */}
      <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-gray-100">
        <span className="text-xs font-mono text-[#5a5a7a]">{project.year}</span>
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
                        <h3 className="text-xl font-display font-bold text-[#1a1035] group-hover:text-[#7C3AED] transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-sm text-[#8b8ba0] mt-0.5">
                          for {project.client}
                        </p>
                      </div>
                      <ExternalLink
                        size={16}
                        className="text-[#b0b0c0] group-hover:text-[#7C3AED] transition-colors shrink-0 mt-1"
                      />
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

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-50">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full text-xs bg-gray-50 border border-gray-100 text-[#6b6b8a]"
                        >
                          {tag}
                        </span>
                      ))}
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
            Real feedback from real partners who trust ByteX with their digital transformation.
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
            Let's discuss how ByteX can engineer intelligent solutions tailored to your business needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="mailto:hello@bytexsolutions.com"
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
