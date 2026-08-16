import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { VerifiedStatsSection } from './components/VerifiedStatsSection';
import { FrictionJourneySection } from './components/FrictionJourneySection';
import { BeforeAfterSection } from './components/BeforeAfterSection';
import { DigitalSalespersonSection } from './components/DigitalSalespersonSection';
import { IndustryShowcase } from './components/IndustryShowcase';
import { PortfolioProjects } from './components/PortfolioProjects';
import { BusinessValueFunnel } from './components/BusinessValueFunnel';
import { RoiCalculator } from './components/RoiCalculator';
import { WhyWorkWithMe } from './components/WhyWorkWithMe';
import { ProcessSection } from './components/ProcessSection';
import { PricingSection } from './components/PricingSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { FloatingContactWidget } from './components/FloatingContactWidget';
import { QuickEstimatorModal } from './components/QuickEstimatorModal';

export default function App() {
  const [isEstimatorOpen, setIsEstimatorOpen] = useState<boolean>(false);
  const [estimatorIndustry, setEstimatorIndustry] = useState<string>('Café & Bakery');

  const handleOpenEstimator = (industry = 'Café & Bakery') => {
    setEstimatorIndustry(industry);
    setIsEstimatorOpen(true);
  };

  const handleExploreIndustries = () => {
    const el = document.getElementById('industry-showcase');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#080808] text-[#F5F5F5] selection:bg-white selection:text-black">
      {/* Top Navbar */}
      <Navbar onOpenEstimator={() => handleOpenEstimator()} />

      {/* Main Sections */}
      <main>
        {/* 1. Hero Section with Live Interactive Mockup */}
        <HeroSection
          onOpenEstimator={() => handleOpenEstimator()}
          onExploreIndustries={handleExploreIndustries}
        />

        {/* 2. Verified Research & Statistics */}
        <VerifiedStatsSection />

        {/* 3. Customer Journey: What Happens When Customers Can't Find You */}
        <FrictionJourneySection />

        {/* 4. Interactive Before vs. After Comparison */}
        <BeforeAfterSection />

        {/* 5. 24/7 Digital Salesperson Timeline */}
        <DigitalSalespersonSection />

        {/* 6. Complete Industry Showcase & Live Mini-Website Simulator (12 Industries) */}
        <IndustryShowcase onOpenEstimatorWithIndustry={handleOpenEstimator} />

        {/* 7. Portfolio Projects & Blueprint Breakdown */}
        <PortfolioProjects />

        {/* 8. Business Value Customer Journey Funnel */}
        <BusinessValueFunnel />

        {/* 9. Interactive Revenue Opportunity & ROI Calculator */}
        <RoiCalculator />

        {/* 10. Why Local Businesses Work With Me */}
        <WhyWorkWithMe />

        {/* 11. 5-Step Headache-Free Process */}
        <ProcessSection />

        {/* 12. Transparent Packages & Pricing */}
        <PricingSection onOpenEstimator={() => handleOpenEstimator()} />

        {/* 13. Comprehensive Business Owner FAQs */}
        <FaqSection />

        {/* 14. Strong Final High-Converting Call to Action */}
        <FinalCtaSection onOpenEstimator={() => handleOpenEstimator()} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Persistent Floating WhatsApp & Contact Widget */}
      <FloatingContactWidget onOpenEstimator={() => handleOpenEstimator()} />

      {/* Interactive Scope Estimator Modal */}
      <QuickEstimatorModal
        isOpen={isEstimatorOpen}
        onClose={() => setIsEstimatorOpen(false)}
        initialIndustry={estimatorIndustry}
      />
    </div>
  );
}
