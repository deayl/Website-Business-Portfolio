import React, { useState } from 'react';
import { FAQS } from '../data/portfolioData';
import { HelpCircle, ChevronDown, Search, MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '../config';

export const FaqSection: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredFaqs = FAQS.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 md:py-32 bg-[#080808] border-t border-[#1A1A1A]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-sm bg-[#121212] border border-[#27272A] text-[#A1A1AA] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-zinc-400" />
            <span>Common Questions Answered</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight leading-tight mb-5">
            Frequently Asked <span className="italic opacity-85">Questions.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed">
            Everything you need to know about timelines, mobile compatibility, Google rankings, and how the WhatsApp customer flow works.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="mb-10 space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 text-[#71717A] absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g. mobile, WhatsApp, domain, pricing)..."
              className="w-full bg-[#0D0D0D] border border-[#1A1A1A] rounded-sm py-3 pl-11 pr-4 text-xs font-mono text-white placeholder-[#71717A] focus:outline-none focus:border-[#27272A] transition-colors"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {[
              { id: 'all', label: 'All Questions' },
              { id: 'general', label: 'General & ROI' },
              { id: 'process', label: 'Timeline & Process' },
              { id: 'technical', label: 'Mobile, Domain & SEO' },
              { id: 'results', label: 'WhatsApp & Results' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-3 py-1.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all shrink-0 border ${
                  selectedCategory === tab.id
                    ? 'bg-white text-black border-white shadow-sm'
                    : 'bg-[#121212] text-[#71717A] hover:text-white border-[#27272A]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-sm border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#18181B] border-[#27272A] shadow-xl'
                    : 'bg-[#0D0D0D] border-[#1A1A1A] hover:border-[#27272A]'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-white uppercase tracking-wider leading-snug">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-sm transition-transform duration-200 shrink-0 ${
                    isOpen ? 'bg-white text-black rotate-180' : 'bg-[#141414] text-[#71717A]'
                  }`}>
                    <ChevronDown className="w-3.5 h-3.5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-0 text-xs sm:text-sm text-[#A1A1AA] leading-relaxed border-t border-zinc-700/60 pt-4 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="text-center py-12 bg-[#0D0D0D] border border-[#1A1A1A] rounded-sm p-6">
              <p className="text-[#71717A] text-xs font-mono">No matching questions found.</p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
                className="mt-2 text-xs font-bold uppercase tracking-wider text-white hover:underline"
              >
                Clear search filter
              </button>
            </div>
          )}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-12 text-center bg-[#0D0D0D] border border-[#1A1A1A] rounded-sm p-6 sm:p-8">
          <p className="text-sm font-bold text-white uppercase tracking-wider mb-1">
            Have a question specific to your clinic, cafe, or store?
          </p>
          <p className="text-xs text-[#71717A] mb-4 font-mono">
            Ask directly on WhatsApp. I typically reply in less than 30 minutes during business hours.
          </p>
          <a
            href={`https://wa.me/${SITE_CONFIG.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hi Hasif, I have a quick question about getting a website for my business:')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-white hover:bg-zinc-200 text-black text-xs font-bold uppercase tracking-wider shadow-md"
          >
            <MessageCircle className="w-4 h-4 fill-black" />
            <span>Ask Hasif on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
