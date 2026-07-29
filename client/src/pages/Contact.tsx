import { motion } from "framer-motion";
import { useState } from "react";
import {
  Mail, Phone, MapPin, Globe, Clock, Send, CheckCircle, Calendar,
  ArrowRight, MessageSquare, Sparkles, Facebook, Instagram, MessageCircle
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const contactInfo = [
  {
    icon: Mail,
    label: "Email Us",
    value: "team@aeviqlabs.site",
    href: "mailto:team@aeviqlabs.site",
    color: "#7C3AED",
    desc: "We reply within 24 hours",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 63719 36832, +91 84809 47297, +91 82803 82328",
    href: "tel:+916371936832",
    color: "#2563EB",
    desc: "Mon – Sat, 9 AM – 7 PM IST",
  },
  {
    icon: MapPin,
    label: "Headquarters",
    value: "Bhubaneswar, Odisha",
    href: "https://maps.google.com/?q=Bhubaneswar,Odisha",
    color: "#EC4899",
    desc: "Pan India Service Available",
  },
  {
    icon: Globe,
    label: "Service Coverage",
    value: "Pan India",
    href: "#",
    color: "#10B981",
    desc: "Remote collaboration nationwide",
  },
];

const services = [
  "Web Application Development",
  "CRM & ERP Solutions",
  "AI-Powered Automation",
  "Medical / Diagnostic Portals",
  "Real Estate Platforms",
  "Event Management Systems",
  "Custom Software Architecture",
  "Other",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
    bookDemo: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const target = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [target.name]: target.type === "checkbox" ? target.checked : target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    await new Promise((res) => setTimeout(res, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* ── Hero Banner ── */}
      <section className="relative pt-36 pb-20 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #FAF7FF 0%, #F0F0FF 40%, #FFF8F0 100%)" }}
      >
        <div className="absolute inset-0 dot-grid opacity-60" />
        <div
          className="absolute top-0 left-1/4 w-[500px] h-[400px] rounded-full blur-[100px] opacity-25"
          style={{ background: "radial-gradient(circle, #7C3AED30, transparent 70%)" }}
        />

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-purple-100 shadow-sm mb-6"
          >
            <Sparkles size={14} className="text-[#7C3AED]" />
            <span className="text-sm font-medium text-[#6b6b8a]">Let's Build Together</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-[#1a1035] leading-tight mb-5"
          >
            Get In Touch With{" "}
            <span className="gradient-text">AEVIQ Labs</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-[#5a5a7a] max-w-2xl mx-auto"
          >
            Have a project in mind? Book a free demo, send us a message, or just give us a call.
            We're based in Bhubaneswar and serve clients across India.
          </motion.p>
        </div>
      </section>

      {/* ── Contact Cards ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, i) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="group relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:border-purple-100 transition-all duration-400 text-left flex flex-col gap-4"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: `${info.color}15` }}
                  >
                    <Icon size={22} style={{ color: info.color }} />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-[#8b8ba0] mb-1">{info.label}</p>
                    <p className="font-semibold text-[#1a1035] text-base group-hover:text-[#7C3AED] transition-colors">
                      {info.value}
                    </p>
                    <p className="text-xs text-[#8b8ba0] mt-1">{info.desc}</p>
                  </div>
                  <ArrowRight
                    size={14}
                    className="absolute top-5 right-5 text-gray-300 group-hover:text-[#7C3AED] group-hover:translate-x-1 transition-all duration-300"
                  />
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Main Form + Info ── */}
      <section className="py-20 bg-gradient-to-b from-white to-[#F7F4FF]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-5 gap-12">

          {/* Left — Info Panel */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h2 className="text-2xl font-display font-bold text-[#1a1035] mb-3">
                Why Work With AEVIQ?
              </h2>
              <p className="text-sm leading-relaxed text-[#5a5a7a]">
                We're a Bhubaneswar-based digital engineering team building production-grade web platforms —
                from event booking systems and medical portals to real estate showcases and AI-powered tools.
              </p>
            </div>

            {/* Highlights */}
            {[
              { icon: Clock, text: "24-hour response guarantee" },
              { icon: Globe, text: "Pan India service & remote collaboration" },
              { icon: MessageSquare, text: "Free 30-minute strategy call" },
              { icon: Calendar, text: "Flexible booking — demo at your convenience" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.text} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-50 border border-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon size={15} className="text-[#7C3AED]" />
                  </div>
                  <p className="text-sm text-[#4a4a6a] font-medium">{item.text}</p>
                </div>
              );
            })}

            {/* Quick contact strip */}
            <div className="rounded-2xl bg-[#1a1035] p-6 space-y-4">
              <p className="text-xs font-mono text-purple-300 uppercase tracking-widest">Quick Contact</p>
              <a
                href="mailto:team@aeviqlabs.site"
                className="flex items-center gap-3 text-white hover:text-purple-300 transition-colors group"
              >
                <Mail size={16} className="text-purple-400" />
                <span className="text-sm font-medium">team@aeviqlabs.site</span>
              </a>
              <a
                href="tel:+916371936832"
                className="flex items-center gap-3 text-white hover:text-purple-300 transition-colors"
              >
                <Phone size={16} className="text-purple-400" />
                <span className="text-sm font-medium">+91 63719 36832 / +91 84809 47297 / +91 82803 82328</span>
              </a>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin size={16} className="text-purple-400" />
                <span className="text-sm">Bhubaneswar, Odisha · Pan India</span>
              </div>
              <div className="pt-4 mt-4 border-t border-[#2a2045]">
                <p className="text-xs font-mono text-purple-300 uppercase tracking-widest mb-3">Social Media</p>
                <div className="flex gap-4">
                  <a href="https://www.facebook.com/share/p/1Bu7dcRhTA/" target="_blank" rel="noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-purple-500/20 text-gray-400 hover:text-purple-300 transition-colors" aria-label="Facebook">
                    <Facebook size={18} />
                  </a>
                  <a href="https://www.instagram.com/p/DbOnjU7TmOJ/?igsh=eG5heG4wZnd0c2dl" target="_blank" rel="noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-purple-500/20 text-gray-400 hover:text-purple-300 transition-colors" aria-label="Instagram">
                    <Instagram size={18} />
                  </a>
                  <a href="https://wa.me/8480947297" target="_blank" rel="noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-purple-500/20 text-gray-400 hover:text-purple-300 transition-colors" aria-label="WhatsApp">
                    <MessageCircle size={18} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Contact / Demo Form */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-3xl border border-gray-100 shadow-xl shadow-purple-500/5 p-8 md:p-10">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-16 gap-6"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                    className="w-20 h-20 rounded-full bg-emerald-50 flex items-center justify-center border border-emerald-100"
                  >
                    <CheckCircle size={36} className="text-emerald-500" />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-display font-bold text-[#1a1035] mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-[#5a5a7a] max-w-sm">
                      Thank you for reaching out. Our team will get back to you within 24 hours.
                    </p>
                  </div>
                  <a href="/" className="btn-primary px-6 py-3 rounded-xl text-white text-sm font-semibold inline-flex items-center gap-2">
                    Back to Home <ArrowRight size={16} />
                  </a>
                </motion.div>
              ) : (
                <>
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <h2 className="text-2xl font-display font-bold text-[#1a1035]">Send a Message</h2>
                      <p className="text-sm text-[#8b8ba0] mt-1">Or book a free demo call with our team</p>
                    </div>
                    <div className="px-3 py-1.5 rounded-xl bg-purple-50 border border-purple-100 text-xs font-mono text-[#7C3AED] font-semibold">
                      Free Consultation
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name + Company */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-[#4a4a6a] mb-2">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#1a1035] bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-[#7C3AED] transition-all placeholder:text-gray-400"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#4a4a6a] mb-2">Company / Business</label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your company name"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#1a1035] bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-[#7C3AED] transition-all placeholder:text-gray-400"
                        />
                      </div>
                    </div>

                    {/* Email + Phone */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-[#4a4a6a] mb-2">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="you@company.com"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#1a1035] bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-[#7C3AED] transition-all placeholder:text-gray-400"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#4a4a6a] mb-2">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 XXXXX XXXXX"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#1a1035] bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-[#7C3AED] transition-all placeholder:text-gray-400"
                        />
                      </div>
                    </div>

                    {/* Service */}
                    <div>
                      <label className="block text-xs font-semibold text-[#4a4a6a] mb-2">Service Required</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#1a1035] bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-[#7C3AED] transition-all"
                      >
                        <option value="">Select a service...</option>
                        {services.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-semibold text-[#4a4a6a] mb-2">Project Brief</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Tell us about your project, goals, or any specific requirements..."
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#1a1035] bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-[#7C3AED] transition-all placeholder:text-gray-400 resize-none"
                      />
                    </div>

                    {/* Book Demo Checkbox */}
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <div className="relative mt-0.5">
                        <input
                          type="checkbox"
                          name="bookDemo"
                          checked={formData.bookDemo}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <div
                          className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all duration-200 ${
                            formData.bookDemo
                              ? "bg-[#7C3AED] border-[#7C3AED]"
                              : "bg-white border-gray-300 group-hover:border-purple-300"
                          }`}
                        >
                          {formData.bookDemo && (
                            <motion.svg
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              width="10" height="8" viewBox="0 0 10 8" fill="none"
                            >
                              <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </motion.svg>
                          )}
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#1a1035]">
                          📅 Book a Free Demo
                        </p>
                        <p className="text-xs text-[#8b8ba0] mt-0.5">
                          Our team will schedule a free 30-min strategy call at your preferred time.
                        </p>
                      </div>
                    </label>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={loading}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full btn-primary py-4 rounded-xl text-white font-semibold text-sm inline-flex items-center justify-center gap-3 shadow-lg shadow-purple-500/20 disabled:opacity-70"
                    >
                      {loading ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full"
                          />
                          Sending…
                        </>
                      ) : (
                        <>
                          {formData.bookDemo ? (
                            <>
                              <Calendar size={16} />
                              Book Demo Now
                            </>
                          ) : (
                            <>
                              <Send size={16} />
                              Send Message
                            </>
                          )}
                          <ArrowRight size={16} />
                        </>
                      )}
                    </motion.button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Map / Location Banner ── */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden border border-purple-100 shadow-lg shadow-purple-500/5"
          >
            <div className="bg-[#1a1035] p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-purple-900/40 border border-purple-700/30 flex items-center justify-center">
                  <MapPin size={24} className="text-purple-300" />
                </div>
                <div>
                  <p className="text-xs font-mono text-purple-300 uppercase tracking-widest mb-1">Headquarters</p>
                  <p className="text-xl font-display font-bold text-white">Bhubaneswar, Odisha</p>
                  <p className="text-sm text-gray-400 mt-0.5">Pan India service · Remote collaboration available</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:+916371936832"
                  className="px-6 py-3 rounded-xl bg-white text-[#1a1035] font-semibold text-sm inline-flex items-center gap-2 hover:bg-purple-50 transition-colors"
                >
                  <Phone size={15} />
                  Call Now
                </a>
                <a
                  href="mailto:team@aeviqlabs.site"
                  className="btn-primary px-6 py-3 rounded-xl text-white font-semibold text-sm inline-flex items-center gap-2"
                >
                  <Mail size={15} />
                  Email Us
                </a>
              </div>
            </div>
            <iframe
              title="AEVIQ Labs Location - Bhubaneswar, Odisha"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119741.60906893555!2d85.75805329355455!3d20.30093220000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909d2d5170aa5%3A0xfc580e2b68b33fa8!2sBhubaneswar%2C%20Odisha!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin"
              width="100%"
              height="340"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
