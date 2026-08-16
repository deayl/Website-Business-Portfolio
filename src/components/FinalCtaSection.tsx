import React, { useState } from 'react';
import { SITE_CONFIG } from '../config';
import { MessageCircle, Mail, ArrowRight, Sparkles, CheckCircle2, ShieldCheck, PhoneCall } from 'lucide-react';

interface FinalCtaSectionProps {
  onOpenEstimator: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenEstimator }) => {
  const [quickEmail, setQuickEmail] = useState('');
  const [quickPhone, setQuickPhone] = useState('');
  const [quickIndustry, setQuickIndustry] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleWhatsApp = () => {
    const text = SITE_CONFIG.whatsappMessages.general;
    const cleanNumber = SITE_CONFIG.whatsappNumber.replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${cleanNumber}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  const handleEmailDirect = () => {
    const subject = encodeURIComponent(SITE_CONFIG.emailTemplate.subject);
    const body = encodeURIComponent(SITE_CONFIG.emailTemplate.body());
    window.open(`mailto:${SITE_CONFIG.email}?subject=${subject}&body=${body}`, '_blank');
  };

  const handleQuickFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi Hasif, I submitted the quick enquiry on your website.\nIndustry: ${quickIndustry || 'Not specified'}\nPhone/WhatsApp: ${quickPhone || 'N/A'}\nEmail: ${quickEmail || 'N/A'}`;
    const cleanNumber = SITE_CONFIG.whatsappNumber.replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${cleanNumber}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <section className="py-20 md:py-32 bg-[#080808] border-t border-[#1A1A1A] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main CTA Card */}
        <div className="bg-[#0D0D0D] border border-[#1A1A1A] rounded-sm p-8 sm:p-14 shadow-2xl relative overflow-hidden">
          
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-[#121212] border border-[#27272A] text-[#A1A1AA] text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
              <Sparkles className="w-3.5 h-3.5 text-zinc-400" />
              <span>Ready for Real Customer Growth?</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-white tracking-tight leading-tight mb-6">
              Your Next Customer Is Already Online. <br />
              <span className="italic opacity-85">
                Give Them a Reason to Choose You.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#A1A1AA] max-w-2xl mx-auto leading-relaxed mb-8">
              Stop letting potential clients get lost in messy social DMs or slip away to your competitors on Google. Let&rsquo;s build a digital storefront you are genuinely proud of.
            </p>

            {/* Direct Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-10">
              <button
                onClick={handleWhatsApp}
                id="final-cta-whatsapp"
                className="w-full sm:w-auto px-8 py-3.5 rounded-sm bg-white hover:bg-zinc-200 text-black font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2.5 group cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-black" />
                <span>Start on WhatsApp Directly</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenEstimator}
                id="final-cta-estimator"
                className="w-full sm:w-auto px-7 py-3.5 rounded-sm bg-[#121212] hover:bg-zinc-800 border border-[#27272A] text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-zinc-400" />
                <span>Scope Estimator</span>
              </button>

              <button
                onClick={handleEmailDirect}
                id="final-cta-email"
                className="w-full sm:w-auto px-6 py-3.5 rounded-sm bg-transparent hover:bg-[#121212] border border-[#1A1A1A] hover:border-[#27272A] text-[#A1A1AA] hover:text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Mail className="w-3.5 h-3.5 text-[#71717A]" />
                <span>Email Consultation</span>
              </button>
            </div>

            {/* Contact Details Display */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#71717A] font-mono pt-6 border-t border-[#1A1A1A]">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                <span>WhatsApp: <strong className="text-white">{SITE_CONFIG.whatsappDisplay}</strong></span>
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-zinc-400" />
                <span>Email: <strong className="text-white">{SITE_CONFIG.email}</strong></span>
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-zinc-400" />
                <span>Serving Businesses Across Malaysia & Southeast Asia</span>
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
