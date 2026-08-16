import React, { useState } from 'react';
import { Clock, Moon, Sun, Sunrise, Sunset, MessageCircle, CheckCircle, ShieldCheck, Sparkles } from 'lucide-react';

export const DigitalSalespersonSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(3); // default highlight 10:20 PM

  const timelineEvents = [
    {
      time: '8:00 AM',
      phase: 'Morning Commute',
      icon: Sunrise,
      title: 'Customer Discovers Your Business',
      desc: 'Searches on Google Maps during transit. Finds your clinic/cafe website with high star rating and opening hours.',
      action: 'Saved to bookmarks & viewed map location',
      highlight: false,
    },
    {
      time: '12:30 PM',
      phase: 'Lunch Break',
      icon: Sun,
      title: 'Customer Checks Services & Rates',
      desc: 'Browses your full price list, treatment options, or daily menu on mobile without having to ask anyone.',
      action: 'Verified pricing transparency in 20 seconds',
      highlight: false,
    },
    {
      time: '5:45 PM',
      phase: 'Evening Research',
      icon: Sunset,
      title: 'Customer Compares You with Competitors',
      desc: 'Looks at your customer reviews, portfolio photos, and certificates. Your site looks 10x more trustworthy.',
      action: 'Decision made to choose your business',
      highlight: false,
    },
    {
      time: '10:20 PM',
      phase: 'After Hours (Bedtime)',
      icon: Moon,
      title: 'Customer Sends WhatsApp Booking',
      desc: 'Your physical shop is closed and you are asleep with your family. The customer taps the WhatsApp button on your website with their appointment request.',
      action: 'Lead generated while you sleep',
      highlight: true,
    },
    {
      time: '2:00 AM',
      phase: 'Night Shift & Insomnia',
      icon: Moon,
      title: 'Website Works 24/7 Non-Stop',
      desc: 'An insomniac or shift worker browses your pricing and FAQs. Zero downtime, zero missed opportunities.',
      action: 'Always ready for tomorrow morning',
      highlight: false,
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#080808] border-t border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-sm bg-[#121212] border border-[#27272A] text-[#A1A1AA] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
            <Clock className="w-3.5 h-3.5 text-zinc-400" />
            <span>24/7 Digital Salesperson</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight leading-tight mb-5">
            Your Website Works Even <span className="italic opacity-85">When You Don&rsquo;t.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed">
            While your physical shutters are closed and your staff is resting, your website is awake—answering pricing questions, showing your best work, and capturing leads.
          </p>
        </div>

        {/* 24-Hour Interactive Timeline */}
        <div className="relative mb-16">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-[#1A1A1A] -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative z-10">
            {timelineEvents.map((evt, idx) => {
              const IconComp = evt.icon;
              const isSelected = activeStep === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`p-5 rounded-sm border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#18181B] border-white/60 shadow-2xl -translate-y-1.5'
                      : 'bg-[#0D0D0D] border-[#1A1A1A] hover:border-[#27272A] hover:bg-[#121212]'
                  }`}
                >
                  <div>
                    {/* Time & Phase Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-base font-extrabold font-mono ${isSelected ? 'text-white' : 'text-[#A1A1AA]'}`}>
                        {evt.time}
                      </span>
                      <div className={`p-2 rounded-sm ${isSelected ? 'bg-white text-black' : 'bg-[#1A1A1A] text-[#71717A]'}`}>
                        <IconComp className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    <span className="text-[10px] font-bold text-[#71717A] uppercase tracking-[0.2em] block mb-1">
                      {evt.phase}
                    </span>

                    <h3 className="text-sm font-bold text-white mb-2 leading-snug uppercase tracking-wider">
                      {evt.title}
                    </h3>

                    <p className="text-xs text-[#A1A1AA] leading-relaxed mb-4">
                      {evt.desc}
                    </p>
                  </div>

                  <div className={`pt-3 border-t text-[11px] font-mono flex items-center gap-1.5 ${
                    isSelected ? 'border-zinc-700 text-white' : 'border-[#1A1A1A] text-[#71717A]'
                  }`}>
                    <CheckCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{evt.action}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4 Superpowers Bento Box */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#0D0D0D] border border-[#1A1A1A] p-6 rounded-sm">
            <div className="w-8 h-8 rounded-sm bg-[#1A1A1A] border border-[#27272A] text-white flex items-center justify-center font-bold mb-4">
              💬
            </div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">Answers Repetitive FAQs</h4>
            <p className="text-xs text-[#71717A] leading-relaxed">
              No more typing &ldquo;what are your prices?&rdquo; or &ldquo;where are you located?&rdquo; 30 times a day. Your site gives instant answers.
            </p>
          </div>

          <div className="bg-[#0D0D0D] border border-[#1A1A1A] p-6 rounded-sm">
            <div className="w-8 h-8 rounded-sm bg-[#1A1A1A] border border-[#27272A] text-white flex items-center justify-center font-bold mb-4">
              ⭐
            </div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">Builds Unshakeable Trust</h4>
            <p className="text-xs text-[#71717A] leading-relaxed">
              Presents your licenses, verified customer reviews, and high-res job photos in a clean, impressive presentation.
            </p>
          </div>

          <div className="bg-[#0D0D0D] border border-[#1A1A1A] p-6 rounded-sm">
            <div className="w-8 h-8 rounded-sm bg-[#1A1A1A] border border-[#27272A] text-white flex items-center justify-center font-bold mb-4">
              📍
            </div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">Guides Customers to Your Door</h4>
            <p className="text-xs text-[#71717A] leading-relaxed">
              Direct 1-tap navigation into Google Maps and Waze so drivers don&rsquo;t get lost or give up.
            </p>
          </div>

          <div className="bg-[#0D0D0D] border border-[#1A1A1A] p-6 rounded-sm">
            <div className="w-8 h-8 rounded-sm bg-[#1A1A1A] border border-[#27272A] text-white flex items-center justify-center font-bold mb-4">
              📲
            </div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">Channels Inquiries to WhatsApp</h4>
            <p className="text-xs text-[#71717A] leading-relaxed">
              Every call-to-action is pre-configured to open WhatsApp with the customer&rsquo;s desired service prefilled.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
