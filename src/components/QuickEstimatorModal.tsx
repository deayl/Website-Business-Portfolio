import React, { useState } from 'react';
import { SITE_CONFIG } from '../config';
import { INDUSTRY_DEMOS } from '../data/portfolioData';
import { 
  X, 
  Sparkles, 
  MessageCircle, 
  Mail, 
  Check, 
  ArrowRight, 
  Copy, 
  CheckCheck,
  Building2
} from 'lucide-react';

interface QuickEstimatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialIndustry?: string;
}

export const QuickEstimatorModal: React.FC<QuickEstimatorModalProps> = ({
  isOpen,
  onClose,
  initialIndustry = 'Cafe & Bakery'
}) => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>(initialIndustry);
  const [businessName, setBusinessName] = useState<string>('');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    'WhatsApp Click-to-Chat',
    'Google Maps & Waze Navigation',
    'Transparent Services & Pricing Menu'
  ]);
  const [copied, setCopied] = useState<boolean>(false);

  if (!isOpen) return null;

  const featureOptions = [
    { id: 'whatsapp', label: 'WhatsApp Click-to-Chat with Prefilled Message', popular: true },
    { id: 'maps', label: 'Google Maps & Waze 1-Tap Directions', popular: true },
    { id: 'pricing', label: 'Transparent Services & Pricing Menu', popular: true },
    { id: 'reviews', label: 'Google Reviews & Star Rating Integration', popular: false },
    { id: 'booking', label: 'Appointment / Table Reservation System', popular: false },
    { id: 'gallery', label: 'Photo Gallery / Before-After Slider', popular: false },
    { id: 'multilingual', label: 'Multi-language (EN / BM / CN)', popular: false },
    { id: 'seo', label: 'Local Google Search (SEO) Optimization', popular: false },
  ];

  const toggleFeature = (label: string) => {
    if (selectedFeatures.includes(label)) {
      setSelectedFeatures(selectedFeatures.filter(f => f !== label));
    } else {
      setSelectedFeatures([...selectedFeatures, label]);
    }
  };

  const handleSendWhatsApp = () => {
    const text = SITE_CONFIG.whatsappMessages.customQuote(
      selectedIndustry,
      selectedFeatures
    ) + (businessName ? ` (Business: ${businessName})` : '');
    const cleanNumber = SITE_CONFIG.whatsappNumber.replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${cleanNumber}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  const handleSendEmail = () => {
    const subject = encodeURIComponent(`Website Scope Enquiry: ${selectedIndustry}`);
    const body = encodeURIComponent(
      `Hi Hasif,\n\nI used your scope estimator for my business.\n\nBusiness Name: ${businessName || '[Insert Name]'}\nIndustry: ${selectedIndustry}\nSelected Features Needed:\n- ${selectedFeatures.join('\n- ')}\n\nPlease advise on timeline and quotation.\n\nThank you!`
    );
    window.open(`mailto:${SITE_CONFIG.email}?subject=${subject}&body=${body}`, '_blank');
  };

  const handleCopySummary = () => {
    const text = `Website Scope Request:\nIndustry: ${selectedIndustry}\nBusiness: ${businessName || 'N/A'}\nFeatures: ${selectedFeatures.join(', ')}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-[#0D0D0D] border border-[#27272A] rounded-sm max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-sm bg-[#141414] text-[#71717A] hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer border border-[#27272A]"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-[#121212] border border-[#27272A] text-[#A1A1AA] text-[10px] font-bold uppercase tracking-[0.2em] mb-2">
            <Sparkles className="w-3.5 h-3.5 text-zinc-400" />
            <span>Interactive Scope Builder</span>
          </div>
          <h3 className="text-2xl font-serif text-white">
            Estimate Your Website Needs
          </h3>
          <p className="text-xs sm:text-sm text-[#A1A1AA] mt-1">
            Pick what your business requires and generate an instant, formatted WhatsApp enquiry.
          </p>
        </div>

        {/* Form Fields */}
        <div className="space-y-6">
          
          {/* Industry Picker */}
          <div>
            <label className="text-[10px] font-bold text-[#71717A] uppercase tracking-[0.2em] block mb-2">
              1. Select Your Industry:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {INDUSTRY_DEMOS.map((ind) => (
                <button
                  key={ind.id}
                  onClick={() => setSelectedIndustry(ind.name)}
                  className={`p-2.5 rounded-sm text-xs font-bold uppercase tracking-wider text-left transition-all border cursor-pointer ${
                    selectedIndustry === ind.name
                      ? 'bg-white text-black border-white shadow-sm'
                      : 'bg-[#121212] text-[#71717A] hover:text-white border-[#27272A]'
                  }`}
                >
                  {ind.name}
                </button>
              ))}
            </div>
          </div>

          {/* Optional Business Name */}
          <div>
            <label className="text-[10px] font-bold text-[#71717A] uppercase tracking-[0.2em] block mb-2">
              2. Your Business Name (Optional):
            </label>
            <input
              type="text"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              placeholder="e.g. Bangsar Bakes, Dr. Tan Dental Clinic..."
              className="w-full bg-[#121212] border border-[#27272A] rounded-sm px-4 py-2.5 text-xs text-white placeholder-[#71717A] font-mono focus:outline-none focus:border-white"
            />
          </div>

          {/* Features Checkboxes */}
          <div>
            <label className="text-[10px] font-bold text-[#71717A] uppercase tracking-[0.2em] block mb-2">
              3. Features You Need:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {featureOptions.map((feat) => {
                const isChecked = selectedFeatures.includes(feat.label);
                return (
                  <div
                    key={feat.id}
                    onClick={() => toggleFeature(feat.label)}
                    className={`p-3 rounded-sm border transition-all cursor-pointer flex items-start gap-2.5 ${
                      isChecked
                        ? 'bg-[#18181B] border-[#27272A] text-white'
                        : 'bg-[#121212] border-[#1A1A1A] text-[#71717A] hover:border-[#27272A]'
                    }`}
                  >
                    <div className={`w-3.5 h-3.5 rounded-sm mt-0.5 flex items-center justify-center border transition-colors shrink-0 ${
                      isChecked ? 'bg-white border-white text-black' : 'border-[#27272A] bg-black'
                    }`}>
                      {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                    <span className="text-xs leading-snug">{feat.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Formatted Preview Summary Box */}
          <div className="p-4 rounded-sm bg-black border border-[#1A1A1A] text-xs font-mono text-[#A1A1AA]">
            <div className="flex items-center justify-between text-[#71717A] mb-2 pb-2 border-b border-[#1A1A1A]">
              <span className="text-[10px] font-bold text-white uppercase tracking-wider font-mono">Ready-to-Send Message Preview:</span>
              <button
                onClick={handleCopySummary}
                className="hover:text-white flex items-center gap-1 text-[11px] cursor-pointer"
              >
                {copied ? <CheckCheck className="w-3.5 h-3.5 text-white" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            <p className="text-[#A1A1AA] text-[11px] leading-relaxed">
              &ldquo;Hi Hasif, I would like an estimate for my <strong className="text-white">{selectedIndustry}</strong> business{businessName ? ` (${businessName})` : ''}. Features needed: {selectedFeatures.slice(0, 3).join(', ')}{selectedFeatures.length > 3 ? ` + ${selectedFeatures.length - 3} more` : ''}. Can we discuss?&rdquo;
            </p>
          </div>

        </div>

        {/* Action Buttons */}
        <div className="mt-8 pt-6 border-t border-[#1A1A1A] flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleSendWhatsApp}
            className="flex-1 py-3 px-5 rounded-sm bg-white hover:bg-zinc-200 text-black font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-black" />
            <span>Send Estimate via WhatsApp</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={handleSendEmail}
            className="py-3 px-5 rounded-sm bg-[#141414] hover:bg-zinc-800 text-white text-xs font-bold uppercase tracking-wider border border-[#27272A] flex items-center justify-center gap-2 cursor-pointer"
          >
            <Mail className="w-4 h-4 text-zinc-400" />
            <span>Send via Email</span>
          </button>
        </div>

      </div>
    </div>
  );
};
