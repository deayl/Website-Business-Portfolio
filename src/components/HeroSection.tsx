import React, { useState } from 'react';
import { SITE_CONFIG } from '../config';
import { 
  ArrowRight, 
  MessageCircle, 
  CheckCircle2, 
  Smartphone, 
  Monitor, 
  Sparkles, 
  MapPin, 
  Clock, 
  Star, 
  PhoneCall, 
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

interface HeroSectionProps {
  onOpenEstimator: () => void;
  onExploreIndustries: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenEstimator, onExploreIndustries }) => {
  const [deviceView, setDeviceView] = useState<'desktop' | 'mobile'>('desktop');
  const [activeTab, setActiveTab] = useState<'menu' | 'hours' | 'reviews'>('menu');

  const handleWhatsApp = () => {
    const message = encodeURIComponent(SITE_CONFIG.whatsappMessages.general);
    const cleanNumber = SITE_CONFIG.whatsappNumber.replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${cleanNumber}?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-[#080808]">
      {/* Subtle Background Radial Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-zinc-800/10 rounded-full blur-3xl pointer-events-none -z-10" />
      
      {/* Subtle Architectural Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Header Content */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-sm bg-[#121212] border border-[#27272A] text-[#D4D4D8] text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
            <span>High-Converting Digital Assets for SMEs</span>
          </div>

          {/* Headline with Sophisticated Serif */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif text-white tracking-tight leading-[1.08] mb-6">
            Your Business Deserves More Than Just a <span className="italic opacity-85">Social Media Page.</span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg text-[#A1A1AA] font-normal leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-10">
            I design bespoke, ultra-fast digital storefronts for local businesses that want to <strong className="text-white font-semibold">look credible</strong>, <strong className="text-white font-semibold">get discovered on Google</strong>, and convert searchers into <strong className="text-white font-semibold underline decoration-[#25D366] decoration-2 underline-offset-4">real WhatsApp customers</strong>.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-10">
            <button
              onClick={handleWhatsApp}
              id="hero-primary-cta"
              className="w-full sm:w-auto px-8 py-4 rounded-sm bg-white text-black font-bold uppercase text-xs tracking-[0.15em] hover:bg-zinc-200 transition-all shadow-2xl hover:scale-[1.02] flex items-center justify-center gap-3 group"
            >
              <MessageCircle className="w-4 h-4 fill-black text-black" />
              <span>Build My Website →</span>
            </button>

            <button
              onClick={onExploreIndustries}
              id="hero-secondary-cta"
              className="w-full sm:w-auto px-8 py-4 rounded-sm border border-[#3F3F46] text-[#D4D4D8] font-bold uppercase text-xs tracking-[0.15em] bg-[#0A0A0A] hover:border-white hover:text-white transition-all flex items-center justify-center gap-2 group"
            >
              <span>See Concept Work</span>
              <ChevronRight className="w-4 h-4 text-[#A1A1AA] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Micro trust pills */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-[#71717A] uppercase tracking-wider font-medium">
            <span className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 bg-zinc-800 rounded-sm flex items-center justify-center text-[10px] text-white">✓</span>
              <span>Mobile-First Speed (&lt;1.5s)</span>
            </span>
            <span className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 bg-zinc-800 rounded-sm flex items-center justify-center text-[10px] text-white">✓</span>
              <span>1-Tap WhatsApp Acquisition</span>
            </span>
            <span className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 bg-zinc-800 rounded-sm flex items-center justify-center text-[10px] text-white">✓</span>
              <span>Local SEO & Google Maps Ready</span>
            </span>
          </div>
        </div>

        {/* Live Interactive Hero Mockup Viewport */}
        <div className="relative max-w-5xl mx-auto">
          {/* Top Control Bar */}
          <div className="flex items-center justify-between bg-[#121212] border border-[#27272A] rounded-t-xl px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#3F3F46]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#3F3F46]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#3F3F46]" />
              <span className="text-[11px] text-[#71717A] font-mono ml-2 hidden sm:inline-block uppercase tracking-wider">
                kopico-cafe.my • Blueprint Experience
              </span>
            </div>

            {/* Desktop / Mobile Switcher */}
            <div className="flex items-center bg-[#080808] p-1 rounded-sm border border-[#1A1A1A]">
              <button
                onClick={() => setDeviceView('desktop')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-sm text-[11px] font-bold uppercase tracking-wider transition-all ${
                  deviceView === 'desktop'
                    ? 'bg-[#1A1A1A] text-white border border-zinc-700'
                    : 'text-[#71717A] hover:text-[#D4D4D8]'
                }`}
              >
                <Monitor className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Desktop</span>
              </button>
              <button
                onClick={() => setDeviceView('mobile')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-sm text-[11px] font-bold uppercase tracking-wider transition-all ${
                  deviceView === 'mobile'
                    ? 'bg-[#1A1A1A] text-white border border-zinc-700'
                    : 'text-[#71717A] hover:text-[#D4D4D8]'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Mobile (84% Users)</span>
              </button>
            </div>
          </div>

          {/* Device Screen Frame */}
          <div className="bg-[#0A0A0A] border-x border-b border-[#27272A] rounded-b-xl p-3 sm:p-6 shadow-2xl">
            <div
              className={`mx-auto transition-all duration-300 overflow-hidden rounded-lg border border-[#1A1A1A] bg-[#080808] ${
                deviceView === 'mobile' ? 'max-w-sm shadow-2xl ring-2 ring-[#27272A]' : 'w-full'
              }`}
            >
              {/* Simulated Client Website Header */}
              <div className="bg-[#0D0D0D] px-4 py-3 flex items-center justify-between border-b border-[#1A1A1A]">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-sm bg-zinc-800 text-white flex items-center justify-center font-bold text-xs">
                    ☕
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white tracking-widest uppercase">Kopi & Co.</p>
                    <p className="text-[9px] text-[#25D366] font-mono flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                      Open Now until 10 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[10px] bg-[#1A1A1A] text-[#A1A1AA] border border-[#27272A] px-2 py-0.5 rounded-sm flex items-center gap-1">
                    <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                    4.9 (420+)
                  </span>
                  <a
                    href={`https://wa.me/${SITE_CONFIG.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hi Kopi & Co., I would like to reserve a table!')}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[10px] font-bold uppercase tracking-wider bg-white text-black hover:bg-zinc-200 px-2.5 py-1 rounded-sm flex items-center gap-1 shadow-sm transition-all"
                  >
                    <MessageCircle className="w-3 h-3 fill-black text-black" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Simulated Hero Banner */}
              <div className="relative h-48 sm:h-60 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200&auto=format&fit=crop"
                  alt="Cafe atmosphere"
                  className="w-full h-full object-cover brightness-[0.7] hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/50 to-transparent flex flex-col justify-end p-4 sm:p-6">
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#A1A1AA] mb-1.5">
                    Local Roasters & Artisanal Bakery
                  </span>
                  <h3 className="text-xl sm:text-3xl font-serif italic text-white leading-tight">
                    Crafting the perfect cup every morning in Bangsar.
                  </h3>
                  <p className="text-[11px] text-[#A1A1AA] line-clamp-1 mt-1 font-mono">
                    28, Jalan Telawi 3, Bangsar • 012-345 6789 • Halal Sourced
                  </p>
                </div>
              </div>

              {/* Interactive Tabs within the Mockup */}
              <div className="p-4 sm:p-5 bg-[#080808]">
                <div className="flex border-b border-[#1A1A1A] pb-3 gap-2">
                  <button
                    onClick={() => setActiveTab('menu')}
                    className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-sm transition-colors ${
                      activeTab === 'menu'
                        ? 'bg-[#1A1A1A] text-white border border-zinc-700'
                        : 'text-[#71717A] hover:text-white'
                    }`}
                  >
                    🍴 Popular Menu
                  </button>
                  <button
                    onClick={() => setActiveTab('hours')}
                    className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-sm transition-colors ${
                      activeTab === 'hours'
                        ? 'bg-[#1A1A1A] text-white border border-zinc-700'
                        : 'text-[#71717A] hover:text-white'
                    }`}
                  >
                    📍 Location & Hours
                  </button>
                  <button
                    onClick={() => setActiveTab('reviews')}
                    className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-sm transition-colors ${
                      activeTab === 'reviews'
                        ? 'bg-[#1A1A1A] text-white border border-zinc-700'
                        : 'text-[#71717A] hover:text-white'
                    }`}
                  >
                    ⭐ Reviews
                  </button>
                </div>

                {/* Tab 1: Menu Items */}
                {activeTab === 'menu' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                    <div className="p-3 rounded-sm bg-[#0F0F0F] border border-[#1A1A1A] flex justify-between items-center">
                      <div>
                        <p className="text-xs font-bold text-white">Almond Flake Croissant</p>
                        <p className="text-[10px] text-[#71717A]">Double baked French butter pastry</p>
                      </div>
                      <span className="text-xs font-mono font-bold text-white bg-[#1A1A1A] px-2 py-0.5 rounded-sm border border-[#27272A]">
                        RM 12.00
                      </span>
                    </div>
                    <div className="p-3 rounded-sm bg-[#0F0F0F] border border-[#1A1A1A] flex justify-between items-center">
                      <div>
                        <p className="text-xs font-bold text-white">Iced Spanish Latte</p>
                        <p className="text-[10px] text-[#71717A]">Espresso with condensed milk blend</p>
                      </div>
                      <span className="text-xs font-mono font-bold text-white bg-[#1A1A1A] px-2 py-0.5 rounded-sm border border-[#27272A]">
                        RM 14.00
                      </span>
                    </div>
                  </div>
                )}

                {/* Tab 2: Hours & Location */}
                {activeTab === 'hours' && (
                  <div className="pt-3 space-y-2 text-xs text-[#A1A1AA] bg-[#0F0F0F] p-3.5 rounded-sm border border-[#1A1A1A]">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-zinc-400 shrink-0" />
                      <span>28, Jalan Telawi 3, Bangsar Baru, 59100 Kuala Lumpur</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-zinc-400 shrink-0" />
                      <span>Monday to Sunday: 7:30 AM – 10:00 PM</span>
                    </div>
                    <div className="pt-2 flex gap-2">
                      <span className="text-[10px] font-mono bg-[#1A1A1A] text-[#D4D4D8] px-2.5 py-1 rounded-sm border border-[#27272A]">
                        🚗 Waze: &ldquo;Kopi & Co. Bangsar&rdquo;
                      </span>
                      <span className="text-[10px] font-mono bg-[#1A1A1A] text-[#D4D4D8] px-2.5 py-1 rounded-sm border border-[#27272A]">
                        🅿️ Basement Parking Available
                      </span>
                    </div>
                  </div>
                )}

                {/* Tab 3: Reviews */}
                {activeTab === 'reviews' && (
                  <div className="pt-3 bg-[#0F0F0F] p-3.5 rounded-sm border border-[#1A1A1A]">
                    <div className="flex items-center gap-1 text-amber-400 mb-1.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                    <p className="text-xs text-[#D4D4D8] italic">
                      &ldquo;The best weekend breakfast spot in Bangsar. Having their daily menu online saved our group 15 minutes of ordering time!&rdquo;
                    </p>
                    <p className="text-[10px] text-[#71717A] mt-1 font-mono uppercase tracking-wider">— Sarah M., Verified Google Review</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Interactive Floating Annotation Pill */}
          <div className="hidden sm:flex absolute -bottom-4 -left-3 bg-[#18181B] border border-[#27272A] px-4 py-3 rounded-lg items-center gap-3 shadow-2xl animate-pulse-subtle">
            <div className="w-2 h-2 bg-[#25D366] rounded-full animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#F5F5F5]">24/7 Digital Salesperson Ready</span>
          </div>
        </div>
      </div>
    </section>
  );
};
