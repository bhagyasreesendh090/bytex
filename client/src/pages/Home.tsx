import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ProductShowcase from "@/components/ProductShowcase";
import EstimatorSection from "@/components/EstimatorSection";
import ProcessSection from "@/components/ProcessSection";
import TechStackSection from "@/components/TechStackSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ServicesSection />        {/* DARK */}
      <WhyChooseSection />       {/* LIGHT */}
      <ProductShowcase />        {/* DARK */}
      <EstimatorSection />       {/* LIGHT — Interactive ROI Estimator */}
      <ProcessSection />         {/* LIGHT */}
      <TechStackSection />       {/* DARK */}
      <CTASection />             {/* LIGHT */}
      <Footer />                 {/* LIGHT */}
    </div>
  );
}
