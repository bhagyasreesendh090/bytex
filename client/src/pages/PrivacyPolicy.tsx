import { motion } from "framer-motion";
import { Shield, ChevronRight, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "wouter";

const sections = [
  {
    title: "1. Information We Collect",
    content: [
      "When you visit our website or contact us, we may collect personal information including your name, email address, phone number, company name, and project details you voluntarily provide through our contact or demo booking forms.",
      "We also automatically collect non-personally identifiable information such as browser type, IP address, pages visited, and time spent on the site using standard web analytics tools.",
    ],
  },
  {
    title: "2. How We Use Your Information",
    content: [
      "We use the information collected to respond to your inquiries, schedule demo calls, provide project consultations, and deliver the services you request.",
      "With your consent, we may use your email to send updates about AEVIQ Solutions, relevant industry insights, or service announcements. You may unsubscribe at any time.",
      "We do not sell, rent, or trade your personal information to third parties.",
    ],
  },
  {
    title: "3. Cookies and Tracking",
    content: [
      "Our website may use cookies to enhance your browsing experience. Cookies are small files stored on your device that help us analyze site traffic and remember your preferences.",
      "You can choose to disable cookies through your browser settings. Disabling cookies may affect certain features of our website.",
    ],
  },
  {
    title: "4. Data Storage and Security",
    content: [
      "All personal information you provide is stored securely using industry-standard encryption and access controls. We implement appropriate technical and organisational measures to protect your data against unauthorized access, alteration, disclosure, or destruction.",
      "AEVIQ Solutions is headquartered in Bhubaneswar, Odisha, India. Your data may be processed and stored within India in compliance with applicable Indian data protection laws.",
    ],
  },
  {
    title: "5. Data Retention",
    content: [
      "We retain your personal information only as long as necessary to fulfil the purposes for which it was collected, or as required by law. Project-related data is retained for the duration of the engagement and a reasonable period thereafter for legal and business purposes.",
    ],
  },
  {
    title: "6. Third-Party Services",
    content: [
      "Our website may contain links to third-party websites or integrate third-party services (such as Google Maps or analytics tools). We are not responsible for the privacy practices of those third parties and encourage you to review their respective privacy policies.",
    ],
  },
  {
    title: "7. Your Rights",
    content: [
      "You have the right to access, correct, or request deletion of your personal information held by AEVIQ Solutions. To exercise any of these rights, please contact us at team@aeviqlabs.site.",
      "If you are based in a jurisdiction that provides additional data protection rights (such as the right to data portability), we will honor those rights to the extent applicable.",
    ],
  },
  {
    title: "8. Children's Privacy",
    content: [
      "Our services are not directed at children under the age of 18. We do not knowingly collect personal information from minors. If we become aware that we have inadvertently collected such information, we will delete it promptly.",
    ],
  },
  {
    title: "9. Changes to This Policy",
    content: [
      "We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised effective date. We encourage you to review this page periodically.",
    ],
  },
  {
    title: "10. Contact Us",
    content: [
      "If you have any questions, concerns, or requests regarding this Privacy Policy, please reach out to us:",
      "📧 Email: team@aeviqlabs.site\n📞 Phone: +91 84809 47297, +91 82803 82328\n📍 Address: Bhubaneswar, Odisha, India",
    ],
  },
];

const fadeInUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section
        className="relative pt-36 pb-16 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #FAF7FF 0%, #F0F0FF 50%, #FFF8F0 100%)" }}
      >
        <div className="absolute inset-0 dot-grid opacity-50" />
        <div
          className="absolute top-0 right-1/4 w-[400px] h-[300px] rounded-full blur-[100px] opacity-20"
          style={{ background: "radial-gradient(circle, #7C3AED40, transparent 70%)" }}
        />
        <div className="relative max-w-4xl mx-auto px-6">
          <Link href="/">
            <span className="inline-flex items-center gap-2 text-sm text-[#7C3AED] font-medium mb-6 hover:underline cursor-pointer">
              <ArrowLeft size={14} /> Back to Home
            </span>
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-purple-100 border border-purple-200 flex items-center justify-center">
              <Shield size={26} className="text-[#7C3AED]" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-display font-bold text-[#1a1035]">Privacy Policy</h1>
              <p className="text-sm text-[#8b8ba0] mt-1">Effective Date: July 24, 2025 · AEVIQ Solutions</p>
            </div>
          </div>
          <p className="text-base text-[#5a5a7a] max-w-2xl leading-relaxed">
            At AEVIQ Solutions, we are committed to protecting your privacy. This Privacy Policy explains how we
            collect, use, store, and safeguard your personal information when you interact with our website or services.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Table of Contents */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-purple-50 rounded-2xl border border-purple-100 p-6 mb-12"
          >
            <h2 className="text-xs font-mono font-semibold text-[#7C3AED] uppercase tracking-widest mb-4">Table of Contents</h2>
            <ul className="grid sm:grid-cols-2 gap-2">
              {sections.map((s, i) => (
                <li key={i}>
                  <a
                    href={`#section-pp-${i}`}
                    className="text-sm text-[#4a4a6a] hover:text-[#7C3AED] flex items-center gap-2 transition-colors group"
                  >
                    <ChevronRight size={12} className="text-purple-300 group-hover:text-[#7C3AED] transition-colors" />
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Sections */}
          <div className="space-y-10">
            {sections.map((s, i) => (
              <motion.div
                key={i}
                id={`section-pp-${i}`}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                className="border-b border-gray-100 pb-10 last:border-0"
              >
                <h2 className="text-lg font-display font-bold text-[#1a1035] mb-4">{s.title}</h2>
                {s.content.map((para, j) => (
                  <p key={j} className="text-sm leading-relaxed text-[#5a5a7a] mb-3 whitespace-pre-line">{para}</p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
