import React, { useState } from 'react';
import { INDUSTRY_DEMOS } from '../data/portfolioData';
import { SITE_CONFIG } from '../config';
import { IndustryDemo } from '../types';
import { 
  Coffee, 
  Utensils, 
  Scissors, 
  Wrench, 
  Stethoscope, 
  GraduationCap, 
  Hammer, 
  Sparkles, 
  Dumbbell, 
  Fan, 
  Building, 
  Camera, 
  Smartphone, 
  Monitor, 
  MessageCircle, 
  Star, 
  MapPin, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck,
  Send,
  Eye
} from 'lucide-react';

interface IndustryShowcaseProps {
  onOpenEstimatorWithIndustry?: (industryName: string) => void;
}

// Icon mapping helper
const getIndustryIcon = (iconName: string) => {
  switch (iconName) {
    case 'Coffee': return Coffee;
    case 'Utensils': return Utensils;
    case 'Scissors': return Scissors;
    case 'Wrench': return Wrench;
    case 'Stethoscope': return Stethoscope;
    case 'GraduationCap': return GraduationCap;
    case 'Hammer': return Hammer;
    case 'Sparkles': return Sparkles;
    case 'Dumbbell': return Dumbbell;
    case 'Fan': return Fan;
    case 'Building': return Building;
    case 'Camera': return Camera;
    default: return Coffee;
  }
};

export const IndustryShowcase: React.FC<IndustryShowcaseProps> = ({ onOpenEstimatorWithIndustry }) => {
  const [selectedIndustryId, setSelectedIndustryId] = useState<string>('cafe');
  const [demoViewport, setDemoViewport] = useState<'desktop' | 'mobile'>('desktop');
  const [activeTab, setActiveTab] = useState<'services' | 'about' | 'reviews' | 'location'>('services');
  const [bookingSuccessNotice, setBookingSuccessNotice] = useState<boolean>(false);

  const currentDemo = INDUSTRY_DEMOS.find(d => d.id === selectedIndustryId) || INDUSTRY_DEMOS[0];

  const handleWhatsAppBooking = (serviceName?: string) => {
    const text = serviceName 
      ? `Hi ${currentDemo.businessName}, I saw your website and I would like to enquire about: ${serviceName}.`
      : `Hi ${currentDemo.businessName}, I would like to book an appointment / reserve a slot.`;
    const cleanNumber = SITE_CONFIG.whatsappNumber.replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${cleanNumber}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  const handlePersonalizedQuote = () => {
    const message = encodeURIComponent(SITE_CONFIG.whatsappMessages.industrySpecific(currentDemo.name));
    const cleanNumber = SITE_CONFIG.whatsappNumber.replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${cleanNumber}?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="industry-showcase" className="py-20 md:py-32 bg-[#080808] border-t border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-sm bg-[#121212] border border-[#27272A] text-[#A1A1AA] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
            <Eye className="w-3.5 h-3.5 text-zinc-400" />
            <span>Interactive Industry Simulator</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight leading-tight mb-5">
            See What Your Business <span className="italic opacity-85">Could Look Like.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed">
            Select your industry below to interact with a full website concept tailored specifically to your trade.
          </p>
        </div>

        {/* Industry Pill Selector Buttons (Scrollable on Mobile) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar sm:flex-wrap sm:justify-center">
          {INDUSTRY_DEMOS.map((ind) => {
            const Icon = getIndustryIcon(ind.iconName);
            const isSelected = ind.id === selectedIndustryId;
            return (
              <button
                key={ind.id}
                onClick={() => {
                  setSelectedIndustryId(ind.id);
                  setActiveTab('services');
                  setBookingSuccessNotice(false);
                }}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-sm text-xs font-bold uppercase tracking-wider transition-all shrink-0 border ${
                  isSelected
                    ? 'bg-white text-black border-white shadow-md'
                    : 'bg-[#121212] hover:bg-[#18181B] text-[#A1A1AA] hover:text-white border-[#27272A]'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-black' : 'text-zinc-400'}`} />
                <span>{ind.name}</span>
                {ind.badge && (
                  <span className={`text-[9px] px-1 py-0.2 rounded-sm font-mono ${
                    isSelected ? 'bg-black/10 text-black' : 'bg-[#1A1A1A] text-[#71717A]'
                  }`}>
                    {ind.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Live Interactive Concept Frame */}
        <div className="bg-[#0D0D0D] border border-[#27272A] rounded-sm shadow-2xl overflow-hidden">
          
          {/* Top Browser Bar */}
          <div className="bg-[#121212] px-4 py-3 border-b border-[#1A1A1A] flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-600" />
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-600" />
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-600" />
              <div className="bg-[#080808] px-3 py-1 rounded-sm text-[11px] font-mono text-[#A1A1AA] border border-[#27272A] ml-2 hidden sm:flex items-center gap-2">
                <span className="text-white">https://</span>
                <span>{currentDemo.id}-demo.my</span>
                <span className="text-white text-[9px] bg-zinc-800 px-1 rounded-sm border border-zinc-700">SSL Active</span>
              </div>
            </div>

            {/* Viewport & Actions */}
            <div className="flex items-center gap-2">
              <div className="flex items-center bg-[#080808] p-1 rounded-sm border border-[#27272A]">
                <button
                  onClick={() => setDemoViewport('desktop')}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-sm text-xs font-bold uppercase tracking-wider ${
                    demoViewport === 'desktop' ? 'bg-white text-black' : 'text-[#71717A] hover:text-white'
                  }`}
                >
                  <Monitor className="w-3 h-3" />
                  <span className="hidden md:inline">Desktop</span>
                </button>
                <button
                  onClick={() => setDemoViewport('mobile')}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-sm text-xs font-bold uppercase tracking-wider ${
                    demoViewport === 'mobile' ? 'bg-white text-black' : 'text-[#71717A] hover:text-white'
                  }`}
                >
                  <Smartphone className="w-3 h-3" />
                  <span className="hidden md:inline">Mobile</span>
                </button>
              </div>

              {/* Build This for Me button */}
              <button
                onClick={handlePersonalizedQuote}
                className="text-xs font-bold uppercase tracking-wider bg-white hover:bg-zinc-200 text-black px-3.5 py-1.5 rounded-sm flex items-center gap-1.5 shadow-md"
              >
                <span>Build this for me</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Device Screen Body */}
          <div className="p-3 sm:p-6 bg-[#080808] min-h-[580px] flex justify-center">
            
            {/* The Inner Website */}
            <div
              className={`w-full bg-[#121212] border border-[#27272A] rounded-sm overflow-hidden transition-all duration-300 ${
                demoViewport === 'mobile' ? 'max-w-sm shadow-2xl ring-2 ring-zinc-800 my-2' : 'max-w-5xl'
              }`}
            >
              {/* Simulated Client Nav Header */}
              <div className="bg-[#18181B] px-4 py-3 flex items-center justify-between border-b border-[#27272A] sticky top-0 z-20">
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white tracking-wide flex items-center gap-1.5">
                    <span>{currentDemo.businessName}</span>
                  </h4>
                  <div className="flex items-center gap-2 text-[10px] text-[#A1A1AA] mt-0.5">
                    <span className="flex items-center gap-1 text-white font-mono font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      Open Now
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-0.5 text-zinc-300">
                      <Star className="w-3 h-3 fill-white text-white" />
                      {currentDemo.rating} ({currentDemo.reviewCount})
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleWhatsAppBooking()}
                    className="text-[11px] font-bold uppercase tracking-wider bg-white hover:bg-zinc-200 text-black px-3 py-1 rounded-sm flex items-center gap-1 shadow-sm transition-all"
                  >
                    <MessageCircle className="w-3 h-3 fill-black" />
                    <span>WhatsApp</span>
                  </button>
                </div>
              </div>

              {/* Simulated Hero Section */}
              <div className="relative h-56 sm:h-72 overflow-hidden">
                <img
                  src={currentDemo.heroImage}
                  alt={currentDemo.businessName}
                  className="w-full h-full object-cover brightness-[0.5] hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/60 to-transparent flex flex-col justify-end p-4 sm:p-6">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-white bg-zinc-800 px-2 py-0.5 rounded-sm w-fit mb-2 border border-zinc-700">
                    {currentDemo.category}
                  </span>
                  <h3 className="text-xl sm:text-3xl font-serif text-white leading-tight mb-2">
                    {currentDemo.heroHeadline}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A1A1AA] max-w-xl line-clamp-2 mb-4">
                    {currentDemo.heroSubheadline}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => handleWhatsAppBooking()}
                      className="px-4 py-2 rounded-sm bg-white hover:bg-zinc-200 text-black text-xs font-bold uppercase tracking-wider flex items-center gap-1.5"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-black" />
                      <span>{currentDemo.primaryCtaText}</span>
                    </button>
                    <button
                      onClick={() => setActiveTab('location')}
                      className="px-3.5 py-2 rounded-sm bg-[#18181B] hover:bg-[#27272A] text-white text-xs font-bold uppercase tracking-wider border border-zinc-700"
                    >
                      <span>{currentDemo.secondaryCtaText}</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Perks Strip */}
              <div className="bg-[#18181B] border-y border-[#27272A] px-4 py-2 flex items-center gap-4 overflow-x-auto text-[11px] text-[#A1A1AA] font-mono no-scrollbar">
                {currentDemo.keyPerks.map((perk, i) => (
                  <span key={i} className="flex items-center gap-1.5 shrink-0">
                    <span className="text-white">✓</span>
                    <span>{perk}</span>
                  </span>
                ))}
              </div>

              {/* Navigation Tabs within Demo */}
              <div className="p-4 sm:p-6">
                <div className="flex border-b border-[#27272A] pb-3 gap-2 overflow-x-auto no-scrollbar mb-6">
                  <button
                    onClick={() => setActiveTab('services')}
                    className={`text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-sm transition-all ${
                      activeTab === 'services'
                        ? 'bg-white text-black'
                        : 'text-[#71717A] hover:text-white'
                    }`}
                  >
                    Services & Rates
                  </button>
                  <button
                    onClick={() => setActiveTab('about')}
                    className={`text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-sm transition-all ${
                      activeTab === 'about'
                        ? 'bg-white text-black'
                        : 'text-[#71717A] hover:text-white'
                    }`}
                  >
                    About & Story
                  </button>
                  <button
                    onClick={() => setActiveTab('reviews')}
                    className={`text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-sm transition-all ${
                      activeTab === 'reviews'
                        ? 'bg-white text-black'
                        : 'text-[#71717A] hover:text-white'
                    }`}
                  >
                    Reviews & Social Proof
                  </button>
                  <button
                    onClick={() => setActiveTab('location')}
                    className={`text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-sm transition-all ${
                      activeTab === 'location'
                        ? 'bg-white text-black'
                        : 'text-[#71717A] hover:text-white'
                    }`}
                  >
                    Location & Hours
                  </button>
                </div>

                {/* Tab 1: Services & Transparent Pricing */}
                {activeTab === 'services' && (
                  <div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                      {currentDemo.services.map((srv, idx) => (
                        <div
                          key={idx}
                          className={`p-4 rounded-sm border transition-all flex flex-col justify-between ${
                            srv.highlight
                              ? 'bg-[#18181B] border-zinc-500 shadow-md'
                              : 'bg-[#141414] border-[#27272A] hover:border-zinc-700'
                          }`}
                        >
                          <div>
                            <div className="flex items-start justify-between gap-2 mb-2">
                              <h5 className="text-sm font-bold text-white flex items-center gap-1.5">
                                {srv.name}
                                {srv.highlight && (
                                  <span className="text-[9px] bg-white text-black px-1.5 py-0.2 rounded-sm font-mono font-bold uppercase tracking-wider">
                                    Featured
                                  </span>
                                )}
                              </h5>
                              {srv.price && (
                                <span className="text-xs font-mono font-bold text-white bg-zinc-800 px-2 py-0.5 rounded-sm border border-zinc-700 shrink-0">
                                  {srv.price}
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-[#A1A1AA] leading-relaxed mb-4">
                              {srv.description}
                            </p>
                          </div>

                          <button
                            onClick={() => handleWhatsAppBooking(srv.name)}
                            className="w-full text-xs font-bold uppercase tracking-wider py-2 rounded-sm bg-[#27272A] hover:bg-zinc-700 text-white transition-colors flex items-center justify-center gap-1.5 border border-zinc-600"
                          >
                            <MessageCircle className="w-3.5 h-3.5 text-white" />
                            <span>Book on WhatsApp</span>
                          </button>
                        </div>
                      ))}
                    </div>

                    {/* Image Gallery */}
                    <div className="pt-4 border-t border-[#27272A]">
                      <p className="text-[11px] font-bold text-[#71717A] uppercase tracking-[0.2em] mb-3">
                        Atmosphere & Recent Work
                      </p>
                      <div className="grid grid-cols-3 gap-3">
                        {currentDemo.gallery.map((img, i) => (
                          <div key={i} className="h-24 sm:h-32 rounded-sm overflow-hidden border border-[#27272A]">
                            <img
                              src={img}
                              alt="Gallery preview"
                              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab 2: About Snippet */}
                {activeTab === 'about' && (
                  <div className="bg-[#141414] p-6 rounded-sm border border-[#27272A] space-y-4 text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                    <h5 className="text-base font-serif text-white">Why Choose {currentDemo.businessName}?</h5>
                    <p>{currentDemo.aboutSnippet}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <div className="p-3 bg-[#0D0D0D] rounded-sm border border-[#1A1A1A]">
                        <p className="font-bold text-white text-xs mb-1 uppercase tracking-wider">Verified Quality Standards</p>
                        <p className="text-[11px] text-[#71717A]">Strict hygiene, genuine parts, or certified practitioners.</p>
                      </div>
                      <div className="p-3 bg-[#0D0D0D] rounded-sm border border-[#1A1A1A]">
                        <p className="font-bold text-white text-xs mb-1 uppercase tracking-wider">Fast Communication</p>
                        <p className="text-[11px] text-[#71717A]">Average WhatsApp response time within 15 minutes.</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab 3: Reviews */}
                {activeTab === 'reviews' && (
                  <div className="space-y-4">
                    <div className="p-5 rounded-sm bg-[#141414] border border-[#27272A]">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-1 text-white">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-white" />
                          ))}
                        </div>
                        <span className="text-[10px] font-mono text-[#71717A]">Google Verified Review</span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#F5F5F5] italic mb-3">
                        &ldquo;{currentDemo.featuredTestimonial.text}&rdquo;
                      </p>
                      <div className="flex items-center justify-between text-xs text-[#A1A1AA]">
                        <span className="font-bold text-white">{currentDemo.featuredTestimonial.author}</span>
                        <span>{currentDemo.featuredTestimonial.role}</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab 4: Location & Hours */}
                {activeTab === 'location' && (
                  <div className="p-5 rounded-sm bg-[#141414] border border-[#27272A] space-y-4 text-xs sm:text-sm text-[#A1A1AA]">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-white shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-white text-xs uppercase tracking-wider">Physical Address</p>
                        <p className="text-[#A1A1AA] text-xs mt-0.5">{currentDemo.location}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="w-4 h-4 text-white shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-white text-xs uppercase tracking-wider">Opening Hours</p>
                        <p className="text-[#A1A1AA] text-xs mt-0.5">{currentDemo.hours}</p>
                      </div>
                    </div>

                    <div className="pt-3 flex flex-wrap gap-2">
                      <button
                        onClick={() => window.open(`https://maps.google.com/?q=${encodeURIComponent(currentDemo.location)}`, '_blank')}
                        className="px-4 py-2 bg-[#27272A] hover:bg-zinc-700 text-white rounded-sm text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 border border-zinc-600"
                      >
                        <MapPin className="w-3.5 h-3.5 text-white" />
                        <span>Google Maps</span>
                      </button>
                      <button
                        onClick={() => window.open(`https://waze.com/ul?q=${encodeURIComponent(currentDemo.location)}`, '_blank')}
                        className="px-4 py-2 bg-[#27272A] hover:bg-zinc-700 text-white rounded-sm text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 border border-zinc-600"
                      >
                        <span>Navigate Waze</span>
                      </button>
                    </div>
                  </div>
                )}

              </div>
            </div>

          </div>

          {/* Bottom Conversion Prompt Bar */}
          <div className="bg-[#121212] px-6 py-5 border-t border-[#1A1A1A] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-sm font-bold text-white uppercase tracking-wider">
                Do you run a {currentDemo.name} business?
              </p>
              <p className="text-xs text-[#A1A1AA]">
                We can adapt this exact digital storefront blueprint with your branding, photos, and price list in 7–10 days.
              </p>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={handlePersonalizedQuote}
                className="w-full sm:w-auto px-5 py-2.5 rounded-sm bg-white hover:bg-zinc-200 text-black font-bold uppercase tracking-wider text-xs transition-all shadow-md flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-black" />
                <span>Get a {currentDemo.name} Website</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
