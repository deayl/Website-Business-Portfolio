import React, { useState } from 'react';
import { PORTFOLIO_PROJECTS } from '../data/portfolioData';
import { SITE_CONFIG } from '../config';
import { PortfolioProject } from '../types';
import { 
  FolderGit2, 
  Sparkles, 
  ExternalLink, 
  MessageCircle, 
  CheckCircle2, 
  Smartphone, 
  Monitor, 
  ArrowRight, 
  X,
  Target
} from 'lucide-react';

export const PortfolioProjects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalProject, setActiveModalProject] = useState<PortfolioProject | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'Food & Beverage', label: 'Food & Dining' },
    { id: 'Healthcare', label: 'Healthcare & Clinic' },
    { id: 'Automotive', label: 'Automotive' },
    { id: 'Personal Care', label: 'Personal Care' },
    { id: 'Home & Renovation', label: 'Home & Renovation' },
    { id: 'Education', label: 'Education' },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter(p => p.category === selectedCategory);

  const handleWhatsAppForProject = (proj: PortfolioProject) => {
    const text = `Hi Hasif, I saw your concept project "${proj.title}" and would like to build something similar for my business.`;
    const cleanNumber = SITE_CONFIG.whatsappNumber.replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${cleanNumber}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-[#080808] border-t border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-sm bg-[#121212] border border-[#27272A] text-[#A1A1AA] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
            <FolderGit2 className="w-3.5 h-3.5 text-zinc-400" />
            <span>Design Standards & Blueprint Concepts</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight leading-tight mb-5">
            Websites Built to Make Businesses <span className="italic opacity-85">Look Their Best.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed">
            Every concept is engineered around a specific business hurdle—eliminating repetitive customer questions, showcasing credibility, and generating WhatsApp enquiries.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all shrink-0 border ${
                selectedCategory === cat.id
                  ? 'bg-white text-black border-white shadow-sm'
                  : 'bg-[#121212] text-[#71717A] hover:text-white border-[#27272A]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#0D0D0D] hover:bg-[#121212] border border-[#1A1A1A] hover:border-[#27272A] rounded-sm overflow-hidden transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              {/* Image Preview Container */}
              <div className="relative h-52 sm:h-56 overflow-hidden bg-[#080808]">
                <img
                  src={project.desktopImage}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-75"
                />
                
                {/* Concept Project Badge - Strict Honesty Mandate */}
                <div className="absolute top-3 left-3 bg-black/90 border border-[#27272A] text-[#A1A1AA] text-[9px] font-mono font-bold px-2 py-0.5 rounded-sm">
                  Concept Project
                </div>

                <div className="absolute top-3 right-3 bg-white text-black text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm">
                  {project.industry}
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent opacity-80" />
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-zinc-300 uppercase tracking-wider transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#A1A1AA] font-mono mb-4 italic">
                    &ldquo;{project.tagline}&rdquo;
                  </p>

                  <div className="mb-6">
                    <p className="text-[10px] font-bold text-[#71717A] uppercase tracking-[0.2em] mb-2">
                      Key Conversion Features:
                    </p>
                    <ul className="space-y-1.5 text-xs text-[#A1A1AA]">
                      {project.keyFeatures.slice(0, 3).map((feat, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="text-white text-xs">✓</span>
                          <span className="truncate">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Card Actions */}
                <div className="pt-4 border-t border-[#1A1A1A] flex items-center justify-between gap-3">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="text-xs font-bold uppercase tracking-wider text-[#A1A1AA] hover:text-white flex items-center gap-1.5 py-1.5"
                  >
                    <span>View Blueprint</span>
                    <ArrowRight className="w-3 h-3 text-white" />
                  </button>

                  <button
                    onClick={() => handleWhatsAppForProject(project)}
                    className="p-2 rounded-sm bg-[#1A1A1A] hover:bg-zinc-800 text-white border border-[#27272A] transition-colors"
                    title="Enquire about this project"
                    aria-label="Enquire about this project"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Deep Concept Breakdown */}
        {activeModalProject && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
            <div className="bg-[#0D0D0D] border border-[#27272A] rounded-sm max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl relative">
              
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-4 right-4 p-2 rounded-sm bg-[#18181B] text-[#71717A] hover:text-white border border-[#27272A]"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="mb-6">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-white bg-zinc-800 px-2 py-0.5 rounded-sm border border-zinc-700">
                  Concept Case Study Blueprint
                </span>
                <h3 className="text-2xl font-serif text-white mt-2 mb-1">
                  {activeModalProject.title}
                </h3>
                <p className="text-xs text-[#71717A] font-mono">
                  Industry: {activeModalProject.industry} • {activeModalProject.category}
                </p>
              </div>

              <div className="space-y-5 text-xs sm:text-sm text-[#A1A1AA]">
                <div className="p-4 rounded-sm bg-[#121212] border border-[#1A1A1A]">
                  <div className="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-wider mb-1">
                    <Target className="w-3.5 h-3.5" />
                    <span>The Business Objective:</span>
                  </div>
                  <p className="text-[#A1A1AA]">{activeModalProject.objective}</p>
                </div>

                <div>
                  <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-2">Engineered Solution & Features:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeModalProject.keyFeatures.map((feat, i) => (
                      <div key={i} className="p-2.5 rounded-sm bg-[#141414] border border-[#27272A] flex items-center gap-2 text-xs">
                        <span className="text-white">✓</span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-sm bg-[#18181B] border border-zinc-700">
                  <p className="font-bold text-white text-xs uppercase tracking-wider mb-1">Outcome & Strategic Value:</p>
                  <p className="text-[#D4D4D8] text-xs font-mono">{activeModalProject.resultsFocus}</p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#1A1A1A] flex flex-col sm:flex-row gap-3 justify-end">
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="px-5 py-2 rounded-sm bg-[#1A1A1A] hover:bg-zinc-800 text-[#A1A1AA] hover:text-white text-xs font-bold uppercase tracking-wider border border-[#27272A]"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    handleWhatsAppForProject(activeModalProject);
                    setActiveModalProject(null);
                  }}
                  className="px-6 py-2 rounded-sm bg-white hover:bg-zinc-200 text-black text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-black" />
                  <span>Discuss Similar Project</span>
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
