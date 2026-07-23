import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";
import { useTheme } from "@/contexts/ThemeContext";
import ThemeToggle from "./ThemeToggle";
import Logo from "./Logo";

const navLinks = [
  { label: "About", href: "/about", isRoute: true },
  { label: "Portfolio", href: "/portfolio", isRoute: true },
  { label: "Solutions", href: "#services", isRoute: false },
  { label: "Process", href: "#process", isRoute: false },
  { label: "Tech", href: "#tech", isRoute: false },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { switchable } = useTheme();
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const handleHashClick = (href: string) => {
    // If we're not on the home page, navigate there first
    if (location !== "/") {
      window.location.href = "/" + href;
      return;
    }
    // Smooth scroll to section
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? "rgba(255,255,255,0.85)"
          : "transparent",
        borderBottom: scrolled
          ? "1px solid rgba(124,58,237,0.08)"
          : "1px solid transparent",
        backdropFilter: scrolled ? "blur(24px) saturate(1.4)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-[80px] flex items-center justify-between">
        {/* Crisp Official Logo */}
        <Link href="/" className="flex items-center gap-2 group py-1">
          <Logo className="h-10 sm:h-11" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <NavItem key={link.label} link={link} onHashClick={handleHashClick} />
          ))}
        </nav>

        {/* CTA + Theme Toggle */}
        <div className="hidden md:flex items-center gap-3">
          {switchable && <ThemeToggle />}
          <button
            onClick={() => handleHashClick("#contact")}
            className="btn-primary px-6 py-2.5 rounded-xl text-sm font-semibold inline-flex items-center gap-2 group shadow-md shadow-purple-500/10"
          >
            <span>Get Started</span>
            <motion.span
              className="inline-block"
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              →
            </motion.span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-2">
          {switchable && <ThemeToggle />}
          <button
            className="p-2 rounded-xl hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {mobileOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={22} className="text-[#1a1035]" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={22} className="text-[#1a1035]" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, height: "auto", filter: "blur(0px)" }}
            exit={{ opacity: 0, height: 0, filter: "blur(10px)" }}
            transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
            className="overflow-hidden bg-white/95 backdrop-blur-xl border-b border-purple-100 shadow-xl"
          >
            <nav className="flex flex-col px-6 py-6 gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                >
                  {link.isRoute ? (
                    <Link href={link.href}>
                      <span className="text-base font-medium py-3 px-4 rounded-xl hover:bg-purple-50 transition-colors block text-[#1a1035] cursor-pointer">
                        {link.label}
                      </span>
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleHashClick(link.href)}
                      className="text-base font-medium py-3 px-4 rounded-xl hover:bg-purple-50 transition-colors block text-[#1a1035] w-full text-left"
                    >
                      {link.label}
                    </button>
                  )}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.06 + 0.1, duration: 0.3 }}
                className="mt-2"
              >
                <button
                  onClick={() => handleHashClick("#contact")}
                  className="btn-primary px-5 py-3.5 rounded-xl text-sm font-semibold text-white text-center block w-full"
                >
                  Get Started →
                </button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* ── Individual Nav Item with animated underline ── */
function NavItem({
  link,
  onHashClick,
}: {
  link: { label: string; href: string; isRoute: boolean };
  onHashClick: (href: string) => void;
}) {
  const [hovered, setHovered] = useState(false);

  const content = (
    <span
      className="relative text-sm font-medium px-4 py-2 rounded-lg transition-colors duration-200 text-[#4a4a6a] hover:text-[#1a1035] inline-block cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {link.label}
      {/* Animated underline */}
      <motion.span
        className="absolute bottom-0 left-1/2 h-[2px] bg-gradient-to-r from-[#7C3AED] to-[#2563EB] rounded-full"
        initial={{ width: 0, x: "-50%" }}
        animate={{
          width: hovered ? "60%" : "0%",
          x: "-50%",
        }}
        transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
      />
    </span>
  );

  if (link.isRoute) {
    return (
      <Link href={link.href}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={() => onHashClick(link.href)}>
      {content}
    </button>
  );
}
