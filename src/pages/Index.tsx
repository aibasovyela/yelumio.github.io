import { Header } from "@/components/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { StickyCTA } from "@/components/StickyCTA";
import { lazy, Suspense } from "react";

const CourseProgramSection = lazy(() => import("@/components/sections/CourseProgramSection").then(m => ({ default: m.CourseProgramSection })));
const ShowcaseSection = lazy(() => import("@/components/sections/ShowcaseSection").then(m => ({ default: m.ShowcaseSection })));
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
  return (
    <div className="min-h-screen bg-background relative">
      <div className="relative z-10">
        <Header />
        
        <main>
          {/* Hero: beige */}
          <HeroSection />
          
          <Suspense fallback={<SectionFallback />}>
            {/* Showcase: white */}
            <div className="section-white">
              <ShowcaseSection />
            </div>

            {/* Program: beige */}
            <div id="program" className="section-beige">
              <CourseProgramSection />
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
