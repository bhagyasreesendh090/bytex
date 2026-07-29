import { motion } from "framer-motion";
import { FileText, ChevronRight, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "wouter";

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: [
      "By accessing or using the AEVIQ Solutions website at aeviqlabs.site, or by engaging our services, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our website or services.",
      "We reserve the right to modify these Terms at any time. Continued use of our services following any changes constitutes your acceptance of the revised Terms.",
    ],
  },
  {
    title: "2. Services Provided",
    content: [
      "AEVIQ Solutions provides custom digital engineering services including but not limited to web application development, CRM and ERP software development, AI-powered automation, medical diagnostic portals, real estate platforms, event management systems, and related technology consulting.",
      "All services are subject to a separate written agreement or Statement of Work (SOW) signed between AEVIQ Solutions and the client. In the absence of a signed agreement, these Terms govern the engagement.",
    ],
  },
  {
    title: "3. Intellectual Property",
    content: [
      "Upon full payment for the project, the client receives ownership of the final deliverables as specified in the project agreement. AEVIQ Solutions retains the right to showcase completed work in its portfolio unless explicitly restricted in the project agreement.",
      "Any proprietary frameworks, tools, libraries, templates, or internal methodologies developed or used by AEVIQ Solutions remain the exclusive property of AEVIQ Solutions.",
      "Third-party open-source components used in your project are governed by their respective open-source licenses.",
    ],
  },
  {
    title: "4. Payment Terms",
    content: [
      "Payment schedules, milestones, and amounts are as agreed in the individual project contract. Typically, an advance payment is required before work commences.",
      "Late payments may attract a delay penalty as outlined in the project agreement. AEVIQ Solutions reserves the right to suspend work on overdue accounts.",
      "All prices are in Indian Rupees (INR) unless otherwise specified. Applicable taxes (GST) will be added to invoices.",
    ],
  },
  {
    title: "5. Project Changes & Revisions",
    content: [
      "Any changes to the agreed scope of work may result in additional charges and revised timelines. All scope changes must be agreed upon in writing.",
      "Revision rounds are as specified in the project agreement. Additional revisions beyond the agreed number will be billed at our standard hourly rate.",
    ],
  },
  {
    title: "6. Confidentiality",
    content: [
      "Both parties agree to keep confidential all non-public information shared during the engagement. AEVIQ Solutions will not disclose your business data, processes, or proprietary information to third parties without your written consent.",
      "This confidentiality obligation continues for two (2) years following the conclusion of the project.",
    ],
  },
  {
    title: "7. Limitation of Liability",
    content: [
      "AEVIQ Solutions' total liability for any claim arising from our services shall not exceed the total amount paid by the client for the specific service giving rise to the claim.",
      "We are not liable for any indirect, incidental, consequential, or punitive damages arising from the use or inability to use our services.",
      "AEVIQ Solutions does not guarantee specific business outcomes (such as revenue growth or search engine rankings) as a result of our services.",
    ],
  },
  {
    title: "8. Warranties",
    content: [
      "AEVIQ Solutions warrants that all deliverables will be original work or properly licensed, and will function substantially as described in the project specification at the time of delivery.",
      "We provide a 30-day post-launch support window for bug fixes directly related to the delivered work, at no additional charge. This warranty does not cover issues arising from third-party services, hosting environments, or client modifications.",
    ],
  },
  {
    title: "9. Termination",
    content: [
      "Either party may terminate a project engagement with 14 days' written notice. In case of termination, the client is liable for payment of all work completed up to the termination date.",
      "AEVIQ Solutions reserves the right to terminate an engagement immediately for non-payment or breach of these Terms.",
    ],
  },
  {
    title: "10. Governing Law & Disputes",
    content: [
      "These Terms are governed by the laws of India. Any disputes arising from or related to these Terms or our services shall be subject to the exclusive jurisdiction of the courts in Bhubaneswar, Odisha, India.",
      "We encourage amicable resolution of any disputes before initiating formal legal proceedings.",
    ],
  },
  {
    title: "11. Website Use",
    content: [
      "You agree to use our website for lawful purposes only. You must not attempt to gain unauthorized access to any part of our website or its underlying infrastructure.",
      "AEVIQ Solutions reserves the right to restrict or terminate access to the website for any user who violates these Terms.",
    ],
  },
  {
    title: "12. Contact",
    content: [
      "For any questions about these Terms and Conditions, please contact us:",
      "📧 Email: team@aeviqlabs.site\n📞 Phone: +91 84809 47297, +91 82803 82328\n📍 Address: Bhubaneswar, Odisha, India",
    ],
  },
];

const fadeInUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section
        className="relative pt-36 pb-16 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #F0F8FF 0%, #F5F0FF 50%, #FFF8F0 100%)" }}
      >
        <div className="absolute inset-0 dot-grid opacity-50" />
        <div
          className="absolute top-0 left-1/4 w-[400px] h-[300px] rounded-full blur-[100px] opacity-20"
          style={{ background: "radial-gradient(circle, #2563EB40, transparent 70%)" }}
        />
        <div className="relative max-w-4xl mx-auto px-6">
          <Link href="/">
            <span className="inline-flex items-center gap-2 text-sm text-[#2563EB] font-medium mb-6 hover:underline cursor-pointer">
              <ArrowLeft size={14} /> Back to Home
            </span>
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-blue-100 border border-blue-200 flex items-center justify-center">
              <FileText size={26} className="text-[#2563EB]" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-display font-bold text-[#1a1035]">Terms & Conditions</h1>
              <p className="text-sm text-[#8b8ba0] mt-1">Effective Date: July 24, 2025 · AEVIQ Solutions</p>
            </div>
          </div>
          <p className="text-base text-[#5a5a7a] max-w-2xl leading-relaxed">
            These Terms and Conditions govern your use of the AEVIQ Solutions website and our digital engineering services.
            Please read them carefully before engaging with us.
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
            className="bg-blue-50 rounded-2xl border border-blue-100 p-6 mb-12"
          >
            <h2 className="text-xs font-mono font-semibold text-[#2563EB] uppercase tracking-widest mb-4">Table of Contents</h2>
            <ul className="grid sm:grid-cols-2 gap-2">
              {sections.map((s, i) => (
                <li key={i}>
                  <a
                    href={`#section-tc-${i}`}
                    className="text-sm text-[#4a4a6a] hover:text-[#2563EB] flex items-center gap-2 transition-colors group"
                  >
                    <ChevronRight size={12} className="text-blue-300 group-hover:text-[#2563EB] transition-colors" />
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
                id={`section-tc-${i}`}
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
