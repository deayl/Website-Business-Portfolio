import React, { useState } from 'react';
import { VERIFIED_STATISTICS } from '../data/portfolioData';
import { ShieldCheck, ExternalLink, Info, CheckCircle } from 'lucide-react';

export const VerifiedStatsSection: React.FC = () => {
  const [selectedStatId, setSelectedStatId] = useState<string | null>(null);

  return (
    <section id="why-website" className="py-20 md:py-28 bg-[#080808] border-t border-[#1A1A1A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-sm bg-[#121212] border border-[#27272A] text-[#A1A1AA] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-white" />
            <span>Verified Market Research & Data</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight leading-tight mb-5">
            Your Customers Are Already <span className="italic opacity-85">Searching Online.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed">
            Before someone spends RM 50 at a cafe, RM 150 on car service, or RM 5,000 on renovation, they Google the business first. If you don&rsquo;t show up with a credible website, they don&rsquo;t assume you&rsquo;re busy—they assume you&rsquo;re closed or unprofessional.
          </p>
        </div>

        {/* 4-Stat Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VERIFIED_STATISTICS.map((stat) => (
            <div
              key={stat.id}
              className="bg-[#0D0D0D] hover:bg-[#121212] border border-[#1A1A1A] hover:border-[#27272A] rounded-sm p-6 transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div>
                {/* Metric with Large Typography */}
                <div className="flex items-baseline justify-between mb-4">
                  <span className="text-4xl sm:text-5xl font-serif italic text-white group-hover:text-zinc-100 transition-colors">
                    {stat.metric}
                  </span>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-sm bg-[#1A1A1A] text-[#A1A1AA] border border-[#27272A]">
                    {stat.year}
                  </span>
                </div>

                {/* Headline */}
                <h3 className="text-sm font-bold text-white mb-2 leading-snug uppercase tracking-wider">
                  {stat.headline}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#71717A] leading-relaxed mb-6 font-normal">
                  {stat.description}
                </p>
              </div>

              {/* Verified Source Citation Footer */}
              <div className="pt-4 border-t border-[#1A1A1A] flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 text-[#71717A]">
                  <CheckCircle className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                  <span className="truncate max-w-[170px] text-[11px] font-mono" title={stat.source}>
                    {stat.source}
                  </span>
                </div>
                <a
                  href={stat.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#71717A] hover:text-white transition-colors p-1 rounded hover:bg-[#1A1A1A]"
                  aria-label={`View source for ${stat.source}`}
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Data Honesty Callout */}
        <div className="mt-8 bg-[#0D0D0D] border border-[#1A1A1A] rounded-sm p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#A1A1AA]">
          <div className="flex items-center gap-2.5">
            <Info className="w-4 h-4 text-white shrink-0" />
            <span>
              <strong className="text-white">Our Promise on Honesty:</strong> All metrics referenced are documented from published government censuses (DOSM) and independent global consumer research bodies. We never invent fake numbers.
            </span>
          </div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#71717A] shrink-0">
            Strategy Benchmark
          </span>
        </div>
      </div>
    </section>
  );
};
