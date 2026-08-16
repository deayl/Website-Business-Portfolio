import React, { useState, useEffect } from 'react';
import { SITE_CONFIG } from '../config';
import { MessageCircle, Menu, X, ArrowRight, Sparkles, ExternalLink } from 'lucide-react';

interface NavbarProps {
  onOpenEstimator: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEstimator }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Why a Website', href: '#why-website' },
    { label: 'Compare', href: '#comparison' },
    { label: 'Industry Demos', href: '#industry-showcase' },
    { label: 'Work', href: '#portfolio' },
    { label: 'Value & ROI', href: '#roi-calculator' },
    { label: 'Process', href: '#process' },
    { label: 'Packages', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(SITE_CONFIG.whatsappMessages.general);
    const cleanNumber = SITE_CONFIG.whatsappNumber.replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${cleanNumber}?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080808]/95 backdrop-blur-md border-b border-[#1A1A1A] py-3.5 shadow-2xl'
          : 'bg-[#080808]/70 backdrop-blur-sm border-b border-[#1A1A1A]/40 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group shrink-0">
          <div className="w-8 h-8 bg-white flex items-center justify-center rounded-sm transition-transform group-hover:scale-105">
            <div className="w-4 h-4 border-2 border-black rotate-45" />
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold tracking-tighter text-white uppercase group-hover:text-zinc-200 transition-colors whitespace-nowrap">
              {SITE_CONFIG.agencyName}
            </span>
            <span className="text-[9px] uppercase tracking-[0.2em] text-[#71717A] -mt-0.5 whitespace-nowrap">
              SME Digital Assets
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-5 2xl:gap-6 shrink">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[11px] font-medium text-[#A1A1AA] hover:text-white uppercase tracking-wider transition-colors py-1 relative group whitespace-nowrap"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Action CTAs */}
        <div className="hidden sm:flex items-center gap-2.5 shrink-0">
          <button
            onClick={onOpenEstimator}
            id="nav-btn-estimator"
            className="text-[11px] font-bold uppercase tracking-wider px-3 py-2 rounded-sm border border-[#3F3F46] text-[#D4D4D8] hover:border-white hover:text-white bg-[#0A0A0A] transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer"
          >
            <Sparkles className="w-3 h-3 text-[#A1A1AA]" />
            <span>Scope Estimator</span>
          </button>

          <button
            onClick={handleWhatsAppClick}
            id="nav-btn-whatsapp"
            className="text-[11px] font-bold uppercase tracking-wider px-3.5 py-2 rounded-sm bg-white text-black hover:bg-zinc-200 transition-all flex items-center gap-1.5 shadow-lg whitespace-nowrap shrink-0 cursor-pointer"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-black text-black" />
            <span>Start a Project</span>
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden p-2 rounded-sm text-zinc-400 hover:text-white hover:bg-[#1A1A1A] border border-[#1A1A1A] focus:outline-none shrink-0 cursor-pointer"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0A0A0A] border-b border-[#1A1A1A] px-6 py-6 space-y-4 animate-in fade-in slide-from-top-4 duration-200 shadow-2xl">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs uppercase tracking-widest text-[#A1A1AA] hover:text-white transition-colors py-2 border-b border-[#1A1A1A]"
              >
                {link.label}
              </a>
            ))}
          </nav>
          
          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEstimator();
              }}
              className="w-full text-xs uppercase tracking-widest font-bold py-3 rounded-sm border border-[#3F3F46] bg-[#121212] text-[#D4D4D8] hover:border-white hover:text-white flex items-center justify-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#A1A1AA]" />
              <span>Scope Estimator</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleWhatsAppClick();
              }}
              className="w-full text-xs uppercase tracking-[0.15em] font-bold py-3 rounded-sm bg-white text-black hover:bg-zinc-200 flex items-center justify-center gap-2 shadow-lg"
            >
              <MessageCircle className="w-4 h-4 fill-black" />
              <span>Chat on WhatsApp</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
