import React, { useState } from 'react';
import { SITE_CONFIG } from '../config';
import { Calculator, Sparkles, MessageCircle, AlertCircle, ArrowRight } from 'lucide-react';

export const RoiCalculator: React.FC = () => {
  const [customerValue, setCustomerValue] = useState<number>(150); // RM 150 default
  const [newCustomersPerMonth, setNewCustomersPerMonth] = useState<number>(6); // 6 new customers default

  const monthlyOpportunity = customerValue * newCustomersPerMonth;
  const annualOpportunity = monthlyOpportunity * 12;

  const handleWhatsAppWithCalculations = () => {
    const text = `Hi Hasif, I tried your website value calculator with RM ${customerValue} avg transaction and ${newCustomersPerMonth} target new customers/mo (Est. RM ${monthlyOpportunity.toLocaleString()} monthly opportunity). I'd like to discuss a website for my business!`;
    const cleanNumber = SITE_CONFIG.whatsappNumber.replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${cleanNumber}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="roi-calculator" className="py-20 md:py-28 bg-[#080808] border-t border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-sm bg-[#121212] border border-[#27272A] text-[#A1A1AA] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
            <Calculator className="w-3.5 h-3.5 text-zinc-400" />
            <span>Interactive Business Scenario</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight leading-tight mb-5">
            What Could Even a Few New Customers <br className="hidden sm:inline" />
            <span className="italic opacity-85">
              Be Worth to Your Business?
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed">
            A website is a one-time business asset. Even capturing just 3 to 6 additional clients a month who found you on Google can permanently transform your bottom line.
          </p>
        </div>

        {/* Calculator Card Container */}
        <div className="max-w-4xl mx-auto bg-[#0D0D0D] border border-[#1A1A1A] rounded-sm p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Sliders Side (Left) */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Slider 1: Average Customer Spend */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold text-white uppercase tracking-wider">
                    Average Customer Transaction / Lifetime Value:
                  </label>
                  <span className="text-sm font-bold text-white font-mono bg-[#141414] px-3 py-1 rounded-sm border border-[#27272A]">
                    RM {customerValue.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="30"
                  max="3000"
                  step="10"
                  value={customerValue}
                  onChange={(e) => setCustomerValue(Number(e.target.value))}
                  className="w-full h-1.5 bg-[#27272A] rounded-sm appearance-none cursor-pointer accent-white"
                />
                <div className="flex justify-between text-[10px] font-mono text-[#71717A] mt-1">
                  <span>RM 30 (e.g. Cafe / Barber)</span>
                  <span>RM 3,000+ (e.g. Clinic / Renovation)</span>
                </div>
              </div>

              {/* Slider 2: Additional Monthly Customers */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold text-white uppercase tracking-wider">
                    Target Additional Customers Captured Per Month:
                  </label>
                  <span className="text-sm font-bold text-white font-mono bg-[#141414] px-3 py-1 rounded-sm border border-[#27272A]">
                    +{newCustomersPerMonth} customers / mo
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="30"
                  step="1"
                  value={newCustomersPerMonth}
                  onChange={(e) => setNewCustomersPerMonth(Number(e.target.value))}
                  className="w-full h-1.5 bg-[#27272A] rounded-sm appearance-none cursor-pointer accent-white"
                />
                <div className="flex justify-between text-[10px] font-mono text-[#71717A] mt-1">
                  <span>+1 customer</span>
                  <span>+30 customers</span>
                </div>
              </div>

              {/* Quick Preset Buttons */}
              <div>
                <span className="text-[10px] font-bold text-[#71717A] uppercase tracking-[0.2em] block mb-2">
                  Quick Industry Presets:
                </span>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => { setCustomerValue(35); setNewCustomersPerMonth(20); }}
                    className="px-3 py-1 bg-[#121212] hover:bg-zinc-800 text-[#A1A1AA] hover:text-white text-xs font-mono rounded-sm border border-[#27272A] transition-colors"
                  >
                    ☕ Cafe / Bakery (RM 35 × 20)
                  </button>
                  <button
                    onClick={() => { setCustomerValue(180); setNewCustomersPerMonth(8); }}
                    className="px-3 py-1 bg-[#121212] hover:bg-zinc-800 text-[#A1A1AA] hover:text-white text-xs font-mono rounded-sm border border-[#27272A] transition-colors"
                  >
                    🔧 Car Workshop (RM 180 × 8)
                  </button>
                  <button
                    onClick={() => { setCustomerValue(450); setNewCustomersPerMonth(5); }}
                    className="px-3 py-1 bg-[#121212] hover:bg-zinc-800 text-[#A1A1AA] hover:text-white text-xs font-mono rounded-sm border border-[#27272A] transition-colors"
                  >
                    🦷 Dental / Clinic (RM 450 × 5)
                  </button>
                  <button
                    onClick={() => { setCustomerValue(2500); setNewCustomersPerMonth(2); }}
                    className="px-3 py-1 bg-[#121212] hover:bg-zinc-800 text-[#A1A1AA] hover:text-white text-xs font-mono rounded-sm border border-[#27272A] transition-colors"
                  >
                    🔨 Contractor / Wedding (RM 2.5k × 2)
                  </button>
                </div>
              </div>

            </div>

            {/* Opportunity Result Display (Right) */}
            <div className="lg:col-span-5 bg-[#121212] border border-[#27272A] rounded-sm p-6 sm:p-7 flex flex-col justify-between shadow-xl">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-white bg-zinc-800 px-2 py-0.5 rounded-sm border border-zinc-700">
                  Potential Revenue Opportunity
                </span>

                <div className="mt-5 space-y-4">
                  <div>
                    <span className="text-xs text-[#71717A] uppercase tracking-wider block">Monthly Revenue Opportunity:</span>
                    <span className="text-3xl sm:text-4xl font-serif text-white tracking-tight">
                      RM {monthlyOpportunity.toLocaleString()}
                      <span className="text-xs font-mono text-[#71717A] ml-2">/ month</span>
                    </span>
                  </div>

                  <div className="pt-3 border-t border-[#1A1A1A]">
                    <span className="text-xs text-[#71717A] uppercase tracking-wider block">Annual Revenue Opportunity:</span>
                    <span className="text-2xl sm:text-3xl font-serif text-white tracking-tight">
                      RM {annualOpportunity.toLocaleString()}
                      <span className="text-xs font-mono text-zinc-400 ml-2">/ year</span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#1A1A1A] space-y-3">
                <button
                  onClick={handleWhatsAppWithCalculations}
                  className="w-full py-3 px-4 rounded-sm bg-white hover:bg-zinc-200 text-black font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-black" />
                  <span>Discuss This Scenario</span>
                </button>

                <p className="text-[10px] text-[#71717A] leading-tight italic flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5 text-[#71717A] shrink-0" />
                  <span>Illustrative business scenario only. Actual results depend on market demand, service quality, and pricing.</span>
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
