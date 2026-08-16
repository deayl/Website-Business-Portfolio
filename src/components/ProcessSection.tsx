import React, { useState } from 'react';
import { PROCESS_STEPS } from '../data/portfolioData';
import { 
  CheckCircle2, 
  MessageSquare, 
  FileText, 
  Eye, 
  Code, 
  Rocket, 
  Clock, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

const getStepIcon = (iconName: string) => {
  switch (iconName) {
    case 'MessageSquare': return MessageSquare;
    case 'FileText': return FileText;
    case 'Eye': return Eye;
    case 'Code': return Code;
    case 'Rocket': return Rocket;
    default: return Sparkles;
  }
};

export const ProcessSection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  return (
    <section id="process" className="py-20 md:py-28 bg-[#080808] border-t border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-sm bg-[#121212] border border-[#27272A] text-[#A1A1AA] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
            <Rocket className="w-3.5 h-3.5 text-zinc-400" />
            <span>Effortless Collaboration</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight leading-tight mb-5">
            From Idea to Launch <span className="italic opacity-85">Without the Headache.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed">
            You don&rsquo;t need technical knowledge, complicated project management software, or dozens of meetings. A simple 5-step roadmap gets your business live in days.
          </p>
        </div>

        {/* 5-Step Process Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-12">
          {PROCESS_STEPS.map((step, idx) => {
            const Icon = getStepIcon(step.iconName);
            const isSelected = activeStepIndex === idx;
            return (
              <div
                key={idx}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-5 rounded-sm border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#18181B] border-white/60 shadow-2xl -translate-y-1'
                    : 'bg-[#0D0D0D] border-[#1A1A1A] hover:border-[#27272A] hover:bg-[#121212]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`font-mono text-lg font-bold ${isSelected ? 'text-white' : 'text-[#71717A]'}`}>
                      {step.step}
                    </span>
                    <div className={`p-1.5 rounded-sm ${isSelected ? 'bg-white text-black' : 'bg-[#1A1A1A] text-[#71717A]'}`}>
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <span className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest block mb-1">
                    {step.duration}
                  </span>

                  <h3 className="text-xs font-bold text-white mb-2 uppercase tracking-wider leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-xs text-[#A1A1AA] leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                <div className={`pt-3 border-t text-[10px] font-mono flex items-center gap-1.5 ${
                  isSelected ? 'border-zinc-700 text-white' : 'border-[#1A1A1A] text-[#71717A]'
                }`}>
                  <span>✓</span>
                  <span className="truncate">{step.deliverable}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Step Detailed Summary Banner */}
        <div className="bg-[#0D0D0D] border border-[#1A1A1A] rounded-sm p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-[10px] font-mono text-zinc-400 font-bold uppercase tracking-widest">
              Step {PROCESS_STEPS[activeStepIndex].step} Highlights:
            </span>
            <h4 className="text-lg font-serif text-white mt-1 mb-1">
              {PROCESS_STEPS[activeStepIndex].title} ({PROCESS_STEPS[activeStepIndex].duration})
            </h4>
            <p className="text-xs sm:text-sm text-[#A1A1AA] max-w-2xl">
              Deliverable: <strong className="text-white">{PROCESS_STEPS[activeStepIndex].deliverable}</strong>. {PROCESS_STEPS[activeStepIndex].description}
            </p>
          </div>

          <a
            href="#pricing"
            className="px-6 py-3 rounded-sm bg-white hover:bg-zinc-200 text-black font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-2 shrink-0"
          >
            <span>View Packages & Timeline</span>
            <ArrowRight className="w-3.5 h-3.5 text-black" />
          </a>
        </div>

      </div>
    </section>
  );
};
