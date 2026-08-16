import React, { useState } from 'react';
import { TrendingUp, ArrowDown, CheckCircle, ShieldCheck, HelpCircle } from 'lucide-react';

export const BusinessValueFunnel: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(2);

  const funnelStages = [
    {
      step: '01',
      name: 'DISCOVER',
      tagline: '“I’ve never heard of this business.”',
      action: 'Searches on Google Maps or browser for a local service.',
      websiteRole: 'Ranks on local searches, displays clean name, opening hours & verified star ratings.',
      dropoffWithoutSite: 'Without a website, 70%+ of searchers skip to a competitor that has one.',
    },
    {
      step: '02',
      name: 'UNDERSTAND',
      tagline: '“I know exactly what they offer and how much it costs.”',
      action: 'Lands on your website and checks your specific services and menu in 10 seconds.',
      websiteRole: 'Categorized services, transparent price tiers, clear photos, and no guessing games.',
      dropoffWithoutSite: 'On social media, the visitor gets lost in old photos and gives up.',
    },
    {
      step: '03',
      name: 'TRUST',
      tagline: '“They look established and reliable.”',
      action: 'Verifies credibility through licenses, verified Google reviews, and real job photos.',
      websiteRole: 'Showcases KKM/CIDB badges, doctor/barber bios, and real customer testimonials.',
      dropoffWithoutSite: 'A blank or amateur online presence creates doubt in the customer’s mind.',
    },
    {
      step: '04',
      name: 'ENQUIRE',
      tagline: '“I want to book or ask a question right now.”',
      action: 'Taps the WhatsApp or Call button directly from their phone.',
      websiteRole: 'Pre-filled WhatsApp message reduces friction, making contact effortless in 1 tap.',
      dropoffWithoutSite: 'Typing an unformatted phone number manually from an Instagram bio loses 50% of people.',
    },
    {
      step: '05',
      name: 'BECOME CUSTOMER',
      tagline: '“I visited, loved the experience, and will come back.”',
      action: 'Customer visits your physical location or completes their paid booking.',
      websiteRole: 'One-click Waze & Google Maps navigation ensures zero lost customers.',
      dropoffWithoutSite: 'Lost customers never return.',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#080808] border-t border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-sm bg-[#121212] border border-[#27272A] text-[#A1A1AA] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
            <TrendingUp className="w-3.5 h-3.5 text-zinc-400" />
            <span>The Customer Acquisition Pipeline</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight leading-tight mb-5">
            Don&rsquo;t Think of It as &ldquo;Buying a Website.&rdquo; <br />
            <span className="italic opacity-85">
              Think of It as Buying a Better Customer Journey.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed">
            A website is not an online brochure collecting digital dust. It is the bridge that takes someone who has never heard of you and converts them into a paying client.
          </p>
        </div>

        {/* Interactive Funnel Steps */}
        <div className="max-w-4xl mx-auto space-y-3">
          {funnelStages.map((stage, idx) => {
            const isSelected = activeStage === idx;
            return (
              <div
                key={idx}
                onClick={() => setActiveStage(idx)}
                className={`p-5 sm:p-6 rounded-sm border transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'bg-[#18181B] border-white/60 shadow-2xl'
                    : 'bg-[#0D0D0D] border-[#1A1A1A] hover:border-[#27272A] hover:bg-[#121212]'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <span className={`w-7 h-7 rounded-sm flex items-center justify-center font-mono font-bold text-xs ${
                      isSelected ? 'bg-white text-black' : 'bg-[#1A1A1A] text-[#71717A] border border-[#27272A]'
                    }`}>
                      {stage.step}
                    </span>
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">
                        {stage.name}
                      </h3>
                      <p className="text-xs text-[#A1A1AA] italic">
                        {stage.tagline}
                      </p>
                    </div>
                  </div>

                  <span className="text-[11px] text-[#71717A] font-mono">
                    {stage.action}
                  </span>
                </div>

                {isSelected && (
                  <div className="pt-4 border-t border-zinc-700 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs animate-in fade-in duration-200">
                    <div className="p-3.5 rounded-sm bg-[#121212] border border-[#27272A]">
                      <p className="font-bold text-white uppercase tracking-wider text-[11px] mb-1">What Your Pro Website Does:</p>
                      <p className="text-[#D4D4D8] leading-relaxed">{stage.websiteRole}</p>
                    </div>
                    <div className="p-3.5 rounded-sm bg-[#121212] border border-[#27272A]">
                      <p className="font-bold text-[#A1A1AA] uppercase tracking-wider text-[11px] mb-1">The Risk Without a Website:</p>
                      <p className="text-[#71717A] leading-relaxed">{stage.dropoffWithoutSite}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Balanced Reality Note */}
        <div className="mt-10 max-w-3xl mx-auto bg-[#0D0D0D] border border-[#1A1A1A] rounded-sm p-4 text-xs text-[#71717A] leading-relaxed flex items-start gap-3">
          <ShieldCheck className="w-4 h-4 text-white shrink-0 mt-0.5" />
          <div>
            <strong className="text-white">Realistic Business Expectation:</strong> A website is a foundational pillar of your business infrastructure. Real-world client volume also depends on your location, product quality, Google reviews, and pricing competitiveness.
          </div>
        </div>

      </div>
    </section>
  );
};
