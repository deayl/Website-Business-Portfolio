import React from 'react';
import { PRICING_PACKAGES } from '../data/portfolioData';
import { SITE_CONFIG } from '../config';
import { PricingPackage } from '../types';
import { CheckCircle2, MessageCircle, Sparkles, Clock, ShieldCheck, ArrowRight } from 'lucide-react';

interface PricingSectionProps {
  onOpenEstimator: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenEstimator }) => {
  const handlePackageWhatsApp = (pkg: PricingPackage) => {
    const text = SITE_CONFIG.whatsappMessages.packageSpecific(pkg.name);
    const cleanNumber = SITE_CONFIG.whatsappNumber.replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${cleanNumber}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="pricing" className="py-20 md:py-32 bg-[#080808] border-t border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-sm bg-[#121212] border border-[#27272A] text-[#A1A1AA] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-zinc-400" />
            <span>Transparent Investment</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight leading-tight mb-5">
            Clear Packages Built Around <br />
            <span className="italic opacity-85">
              Real Business Deliverables.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed">
            You are purchasing a high-performing digital asset designed to generate customers, not an empty DIY theme. Fixed scopes, fast turnarounds, and zero hidden maintenance fees.
          </p>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
          {PRICING_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-sm p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                pkg.popular
                  ? 'bg-[#18181B] border-2 border-white shadow-2xl scale-100 lg:-translate-y-2'
                  : 'bg-[#0D0D0D] border border-[#1A1A1A] hover:border-[#27272A]'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-0.5 rounded-sm shadow-md">
                  Most Popular
                </div>
              )}

              <div>
                <div className="border-b border-[#1A1A1A] pb-6 mb-6">
                  <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-1">{pkg.name}</h3>
                  <p className="text-xs text-[#71717A] min-h-[36px] mb-4 font-mono">{pkg.tagline}</p>
                  
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-2xl sm:text-3xl font-serif text-white">
                      {pkg.priceDisplay}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-mono">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{pkg.timeline}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-[10px] font-bold text-[#71717A] uppercase tracking-[0.2em] mb-2">
                    Ideal For:
                  </p>
                  <p className="text-xs text-[#A1A1AA] mb-4 bg-[#141414] p-2.5 rounded-sm border border-[#27272A]">
                    {pkg.idealFor}
                  </p>

                  <p className="text-[10px] font-bold text-[#71717A] uppercase tracking-[0.2em] mb-3">
                    What&rsquo;s Included:
                  </p>
                  <ul className="space-y-2.5 text-xs text-[#A1A1AA]">
                    {pkg.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="text-white text-xs mt-0.5">✓</span>
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 border-t border-[#1A1A1A]">
                <button
                  onClick={() => handlePackageWhatsApp(pkg)}
                  className={`w-full py-3 rounded-sm font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                    pkg.popular
                      ? 'bg-white hover:bg-zinc-200 text-black'
                      : 'bg-[#141414] hover:bg-zinc-800 text-white border border-[#27272A]'
                  }`}
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>{pkg.ctaText}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Scope Estimator Card */}
        <div className="bg-[#0D0D0D] border border-[#1A1A1A] rounded-sm p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-base font-bold text-white uppercase tracking-wider mb-1">
              Not sure which package fits your exact business model?
            </h4>
            <p className="text-xs sm:text-sm text-[#A1A1AA] max-w-2xl">
              Use our interactive scope estimator to check what specific features your trade needs (e.g. online menu, booking forms, multiple languages), or send a quick WhatsApp voice note.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
            <button
              onClick={onOpenEstimator}
              className="px-5 py-2.5 rounded-sm bg-[#121212] hover:bg-zinc-800 text-white text-xs font-bold uppercase tracking-wider border border-[#27272A] flex items-center justify-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5 text-zinc-400" />
              <span>Scope Estimator</span>
            </button>
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hi Hasif, I would like to consult on what type of website my business needs.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-sm bg-white hover:bg-zinc-200 text-black text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-black" />
              <span>Free Consultation</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
