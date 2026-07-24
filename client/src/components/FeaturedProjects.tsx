import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Calendar, Activity, Building2, Globe } from "lucide-react";
import { Link } from "wouter";

const featuredProjects = [
  {
    title: "Eventmithra",
    client: "Eventmithra Management",
    url: "https://eventmithra.in/",
    image: "/portfolio/eventmithra.png",
    category: "Event Tech & Booking Platform",
    description: "All-in-one digital event management & vendor booking platform offering end-to-end celebration planning, customized event packages, and real-time vendor availability.",
    icon: Calendar,
    gradient: "from-[#EC4899] via-[#A855F7] to-[#7C3AED]",
    accentColor: "#EC4899",
    stats: "+250% Booking Growth",
    tags: ["React", "Node.js", "Payment Gateway", "Tailwind CSS"],
  },
  {
    title: "MVDR Lab",
    client: "MVDR Diagnostic Laboratories",
    url: "https://mvdrlab.site/",
    image: "/portfolio/mvdrlab.png",
    category: "Healthcare & Diagnostic LIMS",
    description: "Advanced medical laboratory and diagnostic portal providing online test bookings, automated patient diagnostic reports, and home sample collection scheduling.",
    icon: Activity,
    gradient: "from-[#00C6FF] via-[#0284C7] to-[#2563EB]",
    accentColor: "#00C6FF",
    stats: "99.8% Report Accuracy",
    tags: ["React", "Node.js", "Medical LIMS", "PostgreSQL"],
  },
  {
    title: "Sunstar Builders",
    client: "Sunstar Builders & Infrastructure",
    url: "https://sunstarbuilders.in/",
    image: "/portfolio/sunstar.png",
    category: "Real Estate & Construction",
    description: "Premium real estate and construction showcase portal featuring interactive property portfolios, architectural blueprints, and client consultation booking engine.",
    icon: Building2,
    gradient: "from-[#F59E0B] via-[#D97706] to-[#7C3AED]",
    accentColor: "#F59E0B",
    stats: "3.5x Lead Conversion",
    tags: ["Next.js", "Tailwind CSS", "3D Virtual Tours", "Lead Engine"],
  },
];

export default function FeaturedProjects() {
  return (
    <section className="py-28 relative overflow-hidden bg-white">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-50/50 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-100 mb-4">
              <Globe size={14} className="text-[#7C3AED]" />
              <span className="text-sm font-medium text-[#7C3AED]">Featured Live Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#1a1035] leading-tight">
              Real Websites. <span className="gradient-text">Real Business Impact.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#5a5a7a] mt-3 max-w-2xl">
              Explore live platforms engineered by AEVIQ Solutions for leading industry clients.
            </p>
          </div>

          <Link href="/portfolio">
            <button className="btn-secondary px-6 py-3 rounded-xl text-sm font-semibold inline-flex items-center gap-2 shrink-0">
              <span>View All Projects</span>
              <ArrowUpRight size={16} />
            </button>
          </Link>
        </motion.div>

        {/* Featured Projects Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, i) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="group relative bg-white rounded-3xl border border-gray-100 overflow-hidden hover:border-purple-200 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 flex flex-col justify-between"
              >
                {/* Realistic Image Mockup Preview */}
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-900 group/img">
                  {/* Browser Mockup Top Bar */}
                  <div className="absolute top-0 left-0 right-0 h-7 bg-black/40 backdrop-blur-md z-10 px-3 flex items-center justify-between border-b border-white/10">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-red-400/80" />
                      <div className="w-2 h-2 rounded-full bg-yellow-400/80" />
                      <div className="w-2 h-2 rounded-full bg-green-400/80" />
                    </div>
                    <div className="text-[10px] font-mono text-gray-300 opacity-90 truncate max-w-[170px]">
                      {project.url.replace("https://", "")}
                    </div>
                    <span className="px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[9px] font-mono font-medium flex items-center gap-1">
                      <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                      Live
                    </span>
                  </div>

                  {/* Website Image */}
                  <img
                    src={project.image}
                    alt={`${project.title} Website Screenshot`}
                    className="w-full h-full object-cover object-top group-hover/img:scale-105 transition-transform duration-700 pt-7"
                  />

                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  {/* Hover Visit Link Overlay */}
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px] z-20"
                  >
                    <span className="px-5 py-2.5 rounded-xl bg-white text-[#1a1035] font-semibold text-xs inline-flex items-center gap-2 shadow-2xl transform translate-y-2 group-hover/img:translate-y-0 transition-transform duration-300">
                      <span>Explore Live Site</span>
                      <ExternalLink size={14} className="text-[#7C3AED]" />
                    </span>
                  </a>
                </div>

                {/* Card Content */}
                <div className="p-7 flex flex-col justify-between flex-1">
                  <div>
                    {/* Category & Client Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center text-[#7C3AED] border border-purple-100">
                          <Icon size={16} />
                        </div>
                        <div>
                          <span className="text-[11px] font-mono text-[#8b8ba0] block">{project.category}</span>
                          <span className="text-xs font-semibold text-[#1a1035]">{project.client}</span>
                        </div>
                      </div>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-2xl font-display font-bold text-[#1a1035] group-hover:text-[#7C3AED] transition-colors mb-2">
                      {project.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-[#5a5a7a] mb-5">
                      {project.description}
                    </p>

                    {/* Highlight Stat */}
                    <div className="mb-6 px-3.5 py-2 rounded-xl bg-purple-50/60 border border-purple-100/60 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#7C3AED]" />
                      <span className="text-xs font-mono font-semibold text-[#7C3AED]">
                        {project.stats}
                      </span>
                    </div>
                  </div>

                  <div>
                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5 pt-4 border-t border-gray-100">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-gray-50 border border-gray-100 text-[#6b6b8a]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Visit Live Website Link Button */}
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 px-4 rounded-xl bg-gray-900 group-hover:bg-[#7C3AED] text-white text-xs font-semibold flex items-center justify-between transition-colors duration-300 shadow-md"
                    >
                      <span className="font-mono">{project.url.replace("https://", "")}</span>
                      <span className="inline-flex items-center gap-1">
                        <span>Visit Site</span>
                        <ExternalLink size={14} />
                      </span>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
