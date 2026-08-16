import React from 'react';
import { SITE_CONFIG } from '../config';
import { 
  Sparkles, 
  Smartphone, 
  Target, 
  Zap, 
  MessageCircle, 
  TrendingUp, 
  ShieldCheck, 
  CheckCircle2,
  Award
} from 'lucide-react';

export const WhyWorkWithMe: React.FC = () => {
  const reasons = [
    {
      icon: Target,
      title: 'Designed Around Your Actual Business',
      desc: 'No generic cookie-cutter templates dumped onto your brand. Every headline, layout, and service breakdown is written specifically to sell what you do.',
    },
    {
      icon: Smartphone,
      title: 'Mobile-First by Default',
      desc: 'Over 80% of your prospective customers are searching on an iPhone or Android device. Your site will feel like a smooth, lightweight native mobile app.',
    },
    {
      icon: Zap,
      title: 'Lightning Fast (Under 1.5s Load Time)',
      desc: 'If a website takes more than 3 seconds to load on mobile data, 50% of people bounce. We build clean, bloat-free code that loads almost instantaneously.',
    },
    {
      icon: MessageCircle,
      title: 'Direct WhatsApp Acquisition Funnel',
      desc: 'We don’t force Malaysian customers to fill out complex 15-field forms. Every button opens WhatsApp directly with their enquiry already composed.',
    },
    {
      icon: ShieldCheck,
      title: 'Direct Personal Accountability',
      desc: 'You work directly with me—the designer and strategist. No junior account managers, no automated support tickets, and no 3-week email delays.',
    },
    {
      icon: TrendingUp,
      title: 'Built for Long-Term Growth',
      desc: 'Whether you expand to a second branch, add new treatment packages, or hire more stylists, your website infrastructure is built to scale easily.',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#080808] border-t border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-sm bg-[#121212] border border-[#27272A] text-[#A1A1AA] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
            <Award className="w-3.5 h-3.5 text-zinc-400" />
            <span>The Working Relationship</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight leading-tight mb-5">
            Why Local Businesses <span className="italic opacity-85">Choose to Work With Me.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed">
            I don&rsquo;t just write code. I help business owners translate their real-world expertise into a digital front door that commands respect and drives enquiries.
          </p>
        </div>

        {/* 6 Value Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#0D0D0D] hover:bg-[#121212] border border-[#1A1A1A] hover:border-[#27272A] rounded-sm p-6 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-sm bg-[#141414] text-white border border-[#27272A] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 uppercase tracking-wider leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Founder Assurance Banner */}
        <div className="bg-[#0D0D0D] border border-[#1A1A1A] rounded-sm p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-sm bg-[#18181B] text-white flex items-center justify-center font-serif text-xl border border-[#27272A] shrink-0">
              H
            </div>
            <div>
              <p className="text-sm font-bold text-white uppercase tracking-wider">Direct WhatsApp Consultation</p>
              <p className="text-xs text-[#71717A] mt-0.5">
                Have a quick question about what your clinic, cafe, or shop needs? Send a message directly.
              </p>
            </div>
          </div>

          <a
            href={`https://wa.me/${SITE_CONFIG.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(SITE_CONFIG.whatsappMessages.general)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-sm bg-white hover:bg-zinc-200 text-black font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-black" />
            <span>Chat on WhatsApp Directly</span>
          </a>
        </div>

      </div>
    </section>
  );
};
