import { Header } from "@/components/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { StickyCTA } from "@/components/StickyCTA";
import { lazy, Suspense, useEffect } from "react";
import { trackSectionView } from "@/lib/analytics";

const Module0Section = lazy(() => import("@/components/sections/Module0Section").then(m => ({ default: m.Module0Section })));
const CourseProgramSection = lazy(() => import("@/components/sections/CourseProgramSection").then(m => ({ default: m.CourseProgramSection })));
const ShowcaseSection = lazy(() => import("@/components/sections/ShowcaseSection").then(m => ({ default: m.ShowcaseSection })));
const StudentCasesSection = lazy(() => import("@/components/sections/StudentCasesSection").then(m => ({ default: m.StudentCasesSection })));
const BrandsSection = lazy(() => import("@/components/sections/BrandsSection").then(m => ({ default: m.BrandsSection })));
const PricingSection = lazy(() => import("@/components/sections/PricingSection").then(m => ({ default: m.PricingSection })));
const FAQSection = lazy(() => import("@/components/sections/FAQSection").then(m => ({ default: m.FAQSection })));
const InstagramSection = lazy(() => import("@/components/sections/InstagramSection").then(m => ({ default: m.InstagramSection })));
const Footer = lazy(() => import("@/components/sections/Footer").then(m => ({ default: m.Footer })));

const SectionFallback = () => (
  <div className="section-padding">
    <div className="container">
      <div className="h-40 bg-muted/20 animate-pulse rounded-2xl" />
    </div>
  </div>
);

const Index = () => {
  useEffect(() => {
    trackSectionView("pricing", "pricing_view");
    trackSectionView("faq", "faq_view");
  }, []);

  return (
    <div className="min-h-screen bg-background relative">
      <div className="relative z-10">
        <Header />
        
        <main>
          {/* Hero: beige */}
          <HeroSection />
          
          <Suspense fallback={<SectionFallback />}>
            {/* Showcase: archived */}

            {/* Brands: white narrow strip */}
            <div className="section-white">
              <BrandsSection />
            </div>

            {/* Program: beige */}
            <div id="program" className="section-beige">
              <Module0Section />
              <CourseProgramSection />
            </div>

            {/* Student Cases: white */}
            <div id="cases" className="section-white">
              <StudentCasesSection />
            </div>
            
            {/* Pricing: white */}
            <div id="pricing" className="section-white">
              <PricingSection />
            </div>
            
            {/* FAQ: beige */}
            <div id="faq" className="section-beige">
              <FAQSection />
            </div>

            {/* Instagram: white */}
            <div className="section-white">
              <InstagramSection />
            </div>
          </Suspense>
        </main>

        <Suspense fallback={null}>
          <Footer />
        </Suspense>
        <StickyCTA />
      </div>
    </div>
  );
};

export default Index;
