import React from 'react';
import { Search, Globe, AlertCircle, CheckCircle, ArrowRight, UserX, UserCheck, MessageCircle, Clock, MapPin } from 'lucide-react';

export const FrictionJourneySection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#080808] border-t border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-sm bg-[#121212] border border-[#27272A] text-[#A1A1AA] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
            <AlertCircle className="w-3.5 h-3.5 text-zinc-400" />
            <span>The Hidden Cost of Invisibility</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight leading-tight mb-5">
            What Happens When Customers <span className="italic opacity-85">Can&rsquo;t Find You?</span>
          </h2>
          <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed">
            Most lost customers will never complain or message you to tell you why they left. They simply tap the next search result on Google.
          </p>
        </div>

        {/* Comparison Flowchart Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Path A: The Lost Opportunity (No Website / Social Media DM Maze) */}
          <div className="bg-[#0D0D0D] border border-[#27272A] rounded-sm p-6 sm:p-8 flex flex-col justify-between relative shadow-xl">
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#1A1A1A]">
                <div className="w-8 h-8 rounded-sm bg-zinc-900 border border-zinc-700 text-zinc-400 flex items-center justify-center font-bold">
                  <UserX className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">Scenario A: The High-Friction Path</h3>
                  <p className="text-[11px] text-[#71717A]">No dedicated website • Only outdated social media</p>
                </div>
              </div>

              {/* Step Flow */}
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3.5 rounded-sm bg-[#121212] border border-[#1A1A1A]">
                  <div className="w-5 h-5 rounded-sm bg-[#1A1A1A] text-[#A1A1AA] flex items-center justify-center text-[10px] font-mono font-bold shrink-0 mt-0.5 border border-[#27272A]">
                    1
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white uppercase tracking-wide">Customer searches on Google</p>
                    <p className="text-xs text-[#71717A] mt-0.5">Looking for &ldquo;dental clinic nearby&rdquo; or &ldquo;best cafe in PJ&rdquo; on their phone.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-sm bg-[#121212] border border-[#1A1A1A]">
                  <div className="w-5 h-5 rounded-sm bg-[#1A1A1A] text-[#A1A1AA] flex items-center justify-center text-[10px] font-mono font-bold shrink-0 mt-0.5 border border-[#27272A]">
                    2
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white uppercase tracking-wide">Finds only a scattered social page</p>
                    <p className="text-xs text-[#71717A] mt-0.5">No clear price list, opening hours aren&rsquo;t updated, and address is in an image caption from 8 months ago.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-sm bg-[#121212] border border-[#1A1A1A]">
                  <div className="w-5 h-5 rounded-sm bg-[#1A1A1A] text-[#A1A1AA] flex items-center justify-center text-[10px] font-mono font-bold shrink-0 mt-0.5 border border-[#27272A]">
                    3
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#E4E4E7] uppercase tracking-wide">Customer faces friction & hesitation</p>
                    <p className="text-xs text-[#71717A] mt-0.5">Must send a DM and wait hours for a reply just to ask &ldquo;how much is a haircut?&rdquo; or &ldquo;are you open today?&rdquo;</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-sm bg-[#18181B] border border-zinc-700">
                  <div className="w-5 h-5 rounded-sm bg-zinc-800 text-white flex items-center justify-center text-[10px] font-mono font-bold shrink-0 mt-0.5 border border-zinc-600">
                    4
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white uppercase tracking-wide">Customer leaves for a competitor</p>
                    <p className="text-xs text-[#A1A1AA] mt-0.5">You made the customer work harder. They choose the competitor who looked prepared.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Reality Note */}
            <div className="mt-6 pt-4 border-t border-[#1A1A1A] text-[11px] text-[#71717A] italic">
              &ldquo;You don&rsquo;t just lose one transaction—you lose that customer&rsquo;s word-of-mouth and future repeat business.&rdquo;
            </div>
          </div>

          {/* Path B: The Smooth Acquisition Journey (With High-Converting Website) */}
          <div className="bg-[#0D0D0D] border border-white/20 rounded-sm p-6 sm:p-8 flex flex-col justify-between relative shadow-2xl">
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#1A1A1A]">
                <div className="w-8 h-8 rounded-sm bg-white text-black flex items-center justify-center font-bold">
                  <UserCheck className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">Scenario B: The High-Converting Path</h3>
                  <p className="text-[11px] text-[#A1A1AA]">Dedicated modern website • 1-tap WhatsApp booking</p>
                </div>
              </div>

              {/* Step Flow */}
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3.5 rounded-sm bg-[#121212] border border-[#1A1A1A]">
                  <div className="w-5 h-5 rounded-sm bg-white text-black flex items-center justify-center text-[10px] font-mono font-bold shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white uppercase tracking-wide">Customer searches on Google</p>
                    <p className="text-xs text-[#A1A1AA] mt-0.5">Your official business website appears with star rating, logo, and instant location badge.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-sm bg-[#121212] border border-[#1A1A1A]">
                  <div className="w-5 h-5 rounded-sm bg-white text-black flex items-center justify-center text-[10px] font-mono font-bold shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white uppercase tracking-wide">Loads in 1 second with clear answers</p>
                    <p className="text-xs text-[#A1A1AA] mt-0.5">Transparent prices, certified doctor/barber profile, high-res photos, and operating hours instantly verified.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-sm bg-[#121212] border border-[#1A1A1A]">
                  <div className="w-5 h-5 rounded-sm bg-white text-black flex items-center justify-center text-[10px] font-mono font-bold shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white uppercase tracking-wide">Builds immediate trust & confidence</p>
                    <p className="text-xs text-[#A1A1AA] mt-0.5">Real customer reviews and professional design convince the visitor that your business is high quality.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-sm bg-white text-black">
                  <div className="w-5 h-5 rounded-sm bg-black text-white flex items-center justify-center text-[10px] font-mono font-bold shrink-0 mt-0.5">
                    4
                  </div>
                  <div>
                    <p className="text-xs font-bold text-black uppercase tracking-wide">1-Tap WhatsApp enquiry or Waze drive-in</p>
                    <p className="text-xs text-zinc-800 mt-0.5">Customer taps the WhatsApp button with prefilled booking text. You close the sale easily.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Reality Note */}
            <div className="mt-6 pt-4 border-t border-[#1A1A1A] text-[11px] text-[#A1A1AA] font-mono">
              &ldquo;A website does not guarantee 100% conversion, but it gives every serious customer a reason to choose you.&rdquo;
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
