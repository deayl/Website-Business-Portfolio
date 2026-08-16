import React from 'react';
import { SITE_CONFIG } from '../config';
import { MessageCircle, Mail, MapPin, ShieldCheck, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080808] border-t border-[#1A1A1A] text-[#71717A] text-xs py-14 pb-24 sm:pb-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 bg-white rounded-sm flex items-center justify-center font-serif font-bold text-sm text-black">
                S
              </div>
              <span className="font-serif font-bold text-base text-white">
                {SITE_CONFIG.agencyName}
              </span>
            </div>

            <p className="text-[#A1A1AA] leading-relaxed max-w-sm text-xs">
              Modern digital storefronts engineered for Malaysian and regional SMEs. We build websites that turn search queries into paying WhatsApp enquiries.
            </p>

            <div className="flex items-center gap-2 text-[#71717A] text-xs font-mono">
              <MapPin className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
              <span>{SITE_CONFIG.location}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2.5">
            <p className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-3">
              Navigation
            </p>
            <ul className="space-y-2 text-xs font-mono">
              <li><a href="#why-website" className="text-[#A1A1AA] hover:text-white transition-colors">Verified Market Research</a></li>
              <li><a href="#comparison" className="text-[#A1A1AA] hover:text-white transition-colors">Before vs. After Comparison</a></li>
              <li><a href="#industry-showcase" className="text-[#A1A1AA] hover:text-white transition-colors">Interactive Industry Demos</a></li>
              <li><a href="#portfolio" className="text-[#A1A1AA] hover:text-white transition-colors">Concept Blueprints</a></li>
              <li><a href="#roi-calculator" className="text-[#A1A1AA] hover:text-white transition-colors">Revenue Opportunity Scenario</a></li>
              <li><a href="#process" className="text-[#A1A1AA] hover:text-white transition-colors">5-Step Process</a></li>
              <li><a href="#pricing" className="text-[#A1A1AA] hover:text-white transition-colors">Pricing & Packages</a></li>
              <li><a href="#faq" className="text-[#A1A1AA] hover:text-white transition-colors">Frequently Asked Questions</a></li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div className="md:col-span-4 space-y-3">
            <p className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-3">
              Direct Contact
            </p>
            <div className="space-y-2 text-xs font-mono">
              <p className="flex items-center gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                <span>WhatsApp: <a href={`https://wa.me/${SITE_CONFIG.whatsappNumber.replace(/[^0-9]/g, '')}`} target="_blank" rel="noreferrer" className="text-white hover:underline font-bold">{SITE_CONFIG.whatsappDisplay}</a></span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                <span>Email: <a href={`mailto:${SITE_CONFIG.email}`} className="text-white hover:underline font-bold">{SITE_CONFIG.email}</a></span>
              </p>
              <p className="text-[#71717A] text-[11px] pt-2">
                Operating Hours: Monday – Saturday: 9:00 AM – 7:00 PM (WhatsApp response usually within 30 minutes).
              </p>
            </div>
          </div>

        </div>

        {/* Legal Disclaimer & Bottom Bar */}
        <div className="pt-8 border-t border-[#1A1A1A] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-[#71717A]">
          <p>
            © {new Date().getFullYear()} {SITE_CONFIG.agencyName}. All rights reserved. Concept projects are labeled for illustrative purposes.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[#71717A] hover:text-white uppercase tracking-wider transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>

      </div>
    </footer>
  );
};
