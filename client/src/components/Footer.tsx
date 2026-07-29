import { motion } from "framer-motion";
import { useState } from "react";
import Logo from "./Logo";
import { Facebook, Instagram, MessageCircle } from "lucide-react";

const footerLinks = {
  solutions: [
    { label: "Technology", href: "#services" },
    { label: "CRM", href: "#services" },
    { label: "ERP", href: "#services" },
    { label: "AI Solutions", href: "#services" },
    { label: "Digital Marketing", href: "#services" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Contact Us", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms" },
  ],
  socials: [
    { label: "Facebook", href: "https://www.facebook.com/share/p/1Bu7dcRhTA/" },
    { label: "Instagram", href: "https://www.instagram.com/p/DbOnjU7TmOJ/?igsh=eG5heG4wZnd0c2dl" },
    { label: "WhatsApp", href: "https://wa.me/8480947297" },
  ],
};

function FooterLinkGroup({
  title,
  links,
  delay,
}: {
  title: string;
  links: { label: string; href: string }[];
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <h4 className="font-display text-xs font-semibold mb-5 uppercase tracking-widest text-[#7C3AED]">
        {title}
      </h4>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-sm text-[#6b6b8a] hover:text-[#1a1035] transition-colors duration-200 relative group inline-block"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 group-hover:w-full h-[1px] bg-[#7C3AED]/30 transition-all duration-300" />
            </a>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function Footer() {
  const [email, setEmail] = useState("");
  const [focused, setFocused] = useState(false);

  return (
    <footer className="relative bg-white border-t border-gray-100">
      {/* Animated gradient top divider */}
      <div className="absolute top-0 left-0 right-0 h-[2px] overflow-hidden">
        <motion.div
          className="h-full w-[200%]"
          style={{
            background: "linear-gradient(90deg, transparent, #7C3AED, #2563EB, #EC4899, #7C3AED, transparent)",
          }}
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-5 gap-8">
          {/* Brand */}
          <motion.div
            className="md:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <a href="/" className="inline-block mb-3">
              <Logo className="h-12" />
            </a>
            <p className="text-sm font-medium gradient-text mt-1">
              Creating What's Next.
            </p>
            <p className="text-xs mt-3 leading-relaxed text-[#8b8ba0]">
              Intelligent technology solutions for forward-thinking enterprises.
            </p>
            <div className="mt-5 space-y-1">
              <p className="text-xs text-[#8b8ba0] font-medium tracking-wide">+91 63719 36832</p>
              <p className="text-xs text-[#8b8ba0] font-medium tracking-wide">+91 84809 47297</p>
              <p className="text-xs text-[#8b8ba0] font-medium tracking-wide">+91 82803 82328</p>
              <a href="mailto:team@aeviqlabs.site" className="text-xs text-[#8b8ba0] hover:text-[#7C3AED] transition-colors block mt-2 font-medium">team@aeviqlabs.site</a>
            </div>
          </motion.div>

          {/* Solutions */}
          <FooterLinkGroup title="Solutions" links={footerLinks.solutions} delay={0.1} />

          {/* Company */}
          <FooterLinkGroup title="Company" links={footerLinks.company} delay={0.2} />

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <h4 className="font-display text-xs font-semibold mb-5 uppercase tracking-widest text-[#7C3AED]">
              Connect
            </h4>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/Aeviqlabs" target="_blank" rel="noreferrer" className="flex items-center justify-center w-9 h-9 rounded-full bg-[#1a1035]/5 hover:bg-[#7C3AED]/10 text-[#6b6b8a] hover:text-[#7C3AED] transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="https://www.instagram.com/aeviqlabs/" target="_blank" rel="noreferrer" className="flex items-center justify-center w-9 h-9 rounded-full bg-[#1a1035]/5 hover:bg-[#7C3AED]/10 text-[#6b6b8a] hover:text-[#7C3AED] transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="https://wa.me/8480947297" target="_blank" rel="noreferrer" className="flex items-center justify-center w-9 h-9 rounded-full bg-[#1a1035]/5 hover:bg-[#7C3AED]/10 text-[#6b6b8a] hover:text-[#7C3AED] transition-colors" aria-label="WhatsApp">
                <MessageCircle size={18} />
              </a>
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-display text-xs font-semibold mb-5 uppercase tracking-widest text-[#7C3AED]">
              Stay Updated
            </h4>
            <p className="text-xs mb-4 leading-relaxed text-[#8b8ba0]">
              Get the latest insights on AI, enterprise tech, and digital
              transformation.
            </p>
            <div
              className="flex gap-2 rounded-xl p-1 transition-all duration-300"
              style={{
                background: focused ? "rgba(124,58,237,0.04)" : "transparent",
                border: focused ? "1px solid rgba(124,58,237,0.15)" : "1px solid transparent",
              }}
            >
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                className="flex-1 px-4 py-2.5 rounded-lg text-sm bg-gray-50 border border-gray-100 focus:border-purple-200 focus:outline-none focus:bg-white transition-all text-[#1a1035] placeholder:text-[#b0b0c0]"
              />
              <button className="btn-primary px-5 py-2.5 rounded-lg text-sm font-medium text-white shrink-0">
                Join
              </button>
            </div>
            <a href="/contact" className="mt-6 inline-block btn-primary px-5 py-2.5 rounded-lg text-sm font-medium text-white w-full text-center shadow-lg shadow-purple-500/20 hover:scale-105 transition-transform duration-300">
              Now Book Your Demo
            </a>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          className="mt-14 pt-8 border-t border-gray-50 flex flex-col sm:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-xs text-[#b0b0c0]">
            &copy; {new Date().getFullYear()} AEVIQ Labs. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <a href="/privacy-policy" className="text-xs text-[#b0b0c0] hover:text-[#7C3AED] transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="/terms" className="text-xs text-[#b0b0c0] hover:text-[#7C3AED] transition-colors duration-200">
              Terms &amp; Conditions
            </a>
            <a href="/contact" className="text-xs text-[#b0b0c0] hover:text-[#7C3AED] transition-colors duration-200">
              Contact
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
