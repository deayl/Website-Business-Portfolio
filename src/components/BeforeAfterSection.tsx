import React, { useState } from 'react';
import { 
  XCircle, 
  CheckCircle2, 
  Sparkles, 
  Sliders, 
  Layers, 
  MessageSquare, 
  MapPin, 
  Clock, 
  Star,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';

export const BeforeAfterSection: React.FC = () => {
  const [viewMode, setViewMode] = useState<'split' | 'slider'>('split');
  const [sliderPosition, setSliderPosition] = useState<number>(50);

  const withoutWebsitePoints = [
    'Scattered information across dozens of Instagram/TikTok posts',
    'Customer must send DM and wait hours just to ask for price list',
    'Opening hours & public holiday updates buried in old story highlights',
    'Zero presence when people search on Google Maps or browser',
    'Brand appears casual or hobby-like compared to structured competitors',
    'No automated FAQs — you repeat the same answers to 20 people a day',
  ];

  const withWebsitePoints = [
    'Complete service menu with clear, upfront pricing in 15 seconds',
    '1-Tap WhatsApp chat with pre-written message for instant booking',
    'Always-updated live opening hours and Google Maps / Waze direction links',
    'High search engine visibility for local keywords in your neighborhood',
    'Polished, high-trust digital storefront that commands higher price points',
    'Comprehensive FAQs that answer customer objections before they even ask',
  ];

  return (
    <section id="comparison" className="py-20 md:py-28 bg-[#080808] border-t border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-sm bg-[#121212] border border-[#27272A] text-[#A1A1AA] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
            <Sliders className="w-3.5 h-3.5 text-zinc-400" />
            <span>Direct Transformation Contrast</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight leading-tight mb-5">
            Same Business. <span className="italic opacity-85">Different First Impression.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed">
            Your products and services might already be exceptional. But if your online front door looks neglected, potential customers assume the service is too.
          </p>

          {/* Toggle View Mode */}
          <div className="mt-8 inline-flex p-1 bg-[#121212] rounded-sm border border-[#27272A]">
            <button
              onClick={() => setViewMode('split')}
              className={`px-4 py-1.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all ${
                viewMode === 'split'
                  ? 'bg-white text-black shadow-sm'
                  : 'text-[#71717A] hover:text-white'
              }`}
            >
              Side-by-Side View
            </button>
            <button
              onClick={() => setViewMode('slider')}
              className={`px-4 py-1.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all ${
                viewMode === 'slider'
                  ? 'bg-white text-black shadow-sm'
                  : 'text-[#71717A] hover:text-white'
              }`}
            >
              Comparison Slider
            </button>
          </div>
        </div>

        {/* View Mode 1: Split Cards */}
        {viewMode === 'split' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* LEFT: Without Website */}
            <div className="bg-[#0D0D0D] border border-[#27272A] rounded-sm p-6 sm:p-8 flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex items-center justify-between pb-5 border-b border-[#1A1A1A] mb-6">
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#A1A1AA] bg-[#1A1A1A] px-2.5 py-1 rounded-sm border border-[#27272A]">
                      WITHOUT DEDICATED STOREFRONT
                    </span>
                    <h3 className="text-lg font-bold text-white mt-2.5 uppercase tracking-wide">Social Media Only (Friction & Chaos)</h3>
                  </div>
                  <XCircle className="w-7 h-7 text-zinc-500 shrink-0" />
                </div>

                {/* Simulated Cluttered DM UI */}
                <div className="bg-[#121212] p-4 rounded-sm border border-[#1A1A1A] mb-6 space-y-2 text-xs font-mono text-[#A1A1AA]">
                  <div className="text-white font-bold mb-1 text-[11px] uppercase tracking-wider">Customer DM Preview:</div>
                  <p className="bg-[#18181B] p-2.5 rounded-sm text-[#D4D4D8] border border-[#27272A]">&ldquo;Hi boss, opening today? Where is your shop? Can send menu?&rdquo;</p>
                  <p className="bg-[#141414] text-[#71717A] p-2.5 rounded-sm italic text-[11px] border border-[#1A1A1A]">
                    *You reply 3 hours later* &rarr; Customer already ate somewhere else.
                  </p>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-3 text-xs sm:text-sm text-[#A1A1AA]">
                  {withoutWebsitePoints.map((pt, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-zinc-500 font-bold text-xs mt-0.5">✕</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-5 border-t border-[#1A1A1A] text-xs text-[#71717A] font-mono">
                Outcome: Constant repetitive inquiries, lost Google searchers, and lower perceived value.
              </div>
            </div>

            {/* RIGHT: With High-Converting Website */}
            <div className="bg-[#0D0D0D] border border-white/20 rounded-sm p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative">
              <div className="absolute -top-3 right-6 bg-white text-black text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-0.5 rounded-sm shadow-md">
                Recommended Solution
              </div>

              <div>
                <div className="flex items-center justify-between pb-5 border-b border-[#1A1A1A] mb-6">
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-white bg-zinc-800 px-2.5 py-1 rounded-sm border border-zinc-700">
                      WITH DEDICATED DIGITAL ASSET
                    </span>
                    <h3 className="text-lg font-bold text-white mt-2.5 uppercase tracking-wide">Modern, 24/7 Conversion Machine</h3>
                  </div>
                  <CheckCircle2 className="w-7 h-7 text-white shrink-0" />
                </div>

                {/* Simulated Polished Flow UI */}
                <div className="bg-[#121212] p-4 rounded-sm border border-zinc-700 mb-6 space-y-2 text-xs">
                  <div className="text-white font-bold flex items-center justify-between text-[11px] uppercase tracking-wider">
                    <span>Clean WhatsApp Enquiry Received:</span>
                    <span className="bg-white text-black px-2 py-0.5 rounded-sm text-[9px] font-bold uppercase tracking-widest">1-Tap Fast Lead</span>
                  </div>
                  <p className="bg-[#18181B] p-2.5 rounded-sm text-[#F5F5F5] border border-zinc-700 text-[11px] font-mono">
                    &ldquo;Hi! I saw your website. I would like to book a slot this Thursday at 3 PM. My name is Amanda.&rdquo;
                  </p>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-3 text-xs sm:text-sm text-[#D4D4D8]">
                  {withWebsitePoints.map((pt, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-white font-bold text-xs mt-0.5">✓</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-5 border-t border-[#1A1A1A] text-xs text-[#F5F5F5] font-mono flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-white shrink-0" />
                <span>Outcome: Higher prestige, effortless WhatsApp leads, and hours saved weekly.</span>
              </div>
            </div>
          </div>
        )}

        {/* View Mode 2: Interactive Draggable Slider */}
        {viewMode === 'slider' && (
          <div className="max-w-4xl mx-auto bg-[#0D0D0D] border border-[#27272A] rounded-sm p-6 sm:p-8 shadow-2xl">
            <div className="mb-6 flex items-center justify-between text-xs text-[#71717A] uppercase tracking-wider font-mono">
              <span>← Social Only</span>
              <span>Dedicated Website →</span>
            </div>

            {/* Slider Range Input */}
            <div className="relative mb-8">
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={(e) => setSliderPosition(Number(e.target.value))}
                className="w-full h-2 bg-[#1A1A1A] rounded-sm appearance-none cursor-pointer accent-white focus:outline-none"
              />
              <div className="flex justify-between text-[10px] font-mono text-[#71717A] mt-2">
                <span>0% Storefront</span>
                <span className="text-white font-bold">{sliderPosition}% Transformation</span>
                <span>100% Bespoke Website</span>
              </div>
            </div>

            {/* Dynamic Comparison Box based on slider value */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 rounded-sm bg-[#080808] border border-[#1A1A1A]">
              <div className={`p-4 rounded-sm transition-opacity duration-200 ${sliderPosition < 50 ? 'bg-[#121212] border border-zinc-700 opacity-100' : 'opacity-40'}`}>
                <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-2">Unorganized Presence ({100 - sliderPosition}%)</h4>
                <p className="text-xs text-[#71717A] leading-relaxed">
                  Lost customers, no search ranking, repeated manual messaging, and lack of professional standing in your city.
                </p>
              </div>

              <div className={`p-4 rounded-sm transition-opacity duration-200 ${sliderPosition >= 50 ? 'bg-[#121212] border border-white/40 opacity-100' : 'opacity-40'}`}>
                <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-2">Pro Digital Storefront ({sliderPosition}%)</h4>
                <p className="text-xs text-[#D4D4D8] leading-relaxed">
                  Instant Google credibility, 24/7 automated answers, one-tap WhatsApp bookings, and clear value presentation.
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
