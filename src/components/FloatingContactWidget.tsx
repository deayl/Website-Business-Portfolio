import React, { useState } from 'react';
import { SITE_CONFIG } from '../config';
import { MessageCircle, X, Sparkles, Send } from 'lucide-react';

interface FloatingContactWidgetProps {
  onOpenEstimator: () => void;
}

export const FloatingContactWidget: React.FC<FloatingContactWidgetProps> = ({ onOpenEstimator }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(SITE_CONFIG.whatsappMessages.general);
    const cleanNumber = SITE_CONFIG.whatsappNumber.replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${cleanNumber}?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* Desktop & Tablet Floating Widget (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:flex flex-col items-end gap-3">
        
        {/* Quick Popout Menu if user clicked expand */}
        {isExpanded && (
          <div className="bg-[#0D0D0D] border border-[#27272A] rounded-sm p-4 shadow-2xl w-72 mb-2 animate-in fade-in slide-in-from-bottom-2 duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-[#1A1A1A] mb-3">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <div className="w-7 h-7 rounded-sm bg-[#18181B] border border-[#27272A] flex items-center justify-center text-white font-serif font-bold text-xs">
                    H
                  </div>
                  <span className="w-2 h-2 rounded-full bg-white border border-black absolute -bottom-0.5 -right-0.5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white uppercase tracking-wider">{SITE_CONFIG.designerName}</p>
                  <p className="text-[9px] text-[#71717A] font-mono">Available on WhatsApp</p>
                </div>
              </div>
              <button
                onClick={() => setIsExpanded(false)}
                className="text-[#71717A] hover:text-white p-1 cursor-pointer"
                aria-label="Close widget"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            <p className="text-xs text-[#A1A1AA] mb-3 leading-relaxed">
              Have a question about what your cafe, clinic, or workshop needs? Chat with me directly.
            </p>

            <div className="space-y-2">
              <button
                onClick={() => {
                  setIsExpanded(false);
                  handleWhatsAppClick();
                }}
                className="w-full py-2.5 px-3 rounded-sm bg-white hover:bg-zinc-200 text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-black" />
                <span>Open WhatsApp Chat</span>
              </button>

              <button
                onClick={() => {
                  setIsExpanded(false);
                  onOpenEstimator();
                }}
                className="w-full py-2 px-3 rounded-sm bg-[#121212] hover:bg-zinc-800 text-white text-xs font-bold uppercase tracking-wider border border-[#27272A] flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-zinc-400" />
                <span>Scope Estimator</span>
              </button>
            </div>
          </div>
        )}

        {/* The Main Button */}
        <div className="flex items-center gap-2">
          {!isExpanded && (
            <button
              onClick={() => setIsExpanded(true)}
              className="bg-[#0D0D0D] hover:bg-[#121212] border border-[#27272A] text-white text-xs font-bold uppercase tracking-wider px-3.5 py-2 rounded-sm shadow-xl backdrop-blur-md flex items-center gap-2 transition-all cursor-pointer"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span>Questions? WhatsApp Me</span>
            </button>
          )}

          <button
            onClick={handleWhatsAppClick}
            className="w-12 h-12 rounded-sm bg-white hover:bg-zinc-200 text-black shadow-2xl flex items-center justify-center transition-all cursor-pointer group"
            aria-label="WhatsApp Contact"
            title="Chat on WhatsApp"
          >
            <MessageCircle className="w-5 h-5 fill-black text-black group-hover:scale-105 transition-transform" />
          </button>
        </div>

      </div>

      {/* Mobile Sticky Bottom Floating Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-[#080808]/95 border-t border-[#1A1A1A] p-3 backdrop-blur-lg flex items-center gap-2 shadow-2xl">
        <button
          onClick={onOpenEstimator}
          className="flex-1 py-2.5 px-3 rounded-sm bg-[#121212] border border-[#27272A] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5"
        >
          <Sparkles className="w-3.5 h-3.5 text-zinc-400" />
          <span>Scope Estimator</span>
        </button>

        <button
          onClick={handleWhatsAppClick}
          className="flex-1 py-2.5 px-3 rounded-sm bg-white text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md"
        >
          <MessageCircle className="w-4 h-4 fill-black" />
          <span>WhatsApp Chat</span>
        </button>
      </div>
    </>
  );
};
