import React, { useState } from 'react';
import { ArrowRight, HelpCircle, MessageSquare, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';

interface NeedHelpSectionProps {
  lang: Language;
  onOpenAskModal: () => void;
}

export const NeedHelpSection: React.FC<NeedHelpSectionProps> = ({ lang, onOpenAskModal }) => {
  return (
    <section id="need-help" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-14">
      {/* High-End Graphite Card (#25282B) */}
      <div className="relative overflow-hidden rounded-3xl bg-[#25282B] text-white p-8 sm:p-12 shadow-vi-card border border-black/20">
        {/* Ambient subtle light behind */}
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-80 h-80 bg-[#E6DDCE]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#E6DDCE] text-xs font-black uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>EXPERT VERIFICATION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
            Still not sure?
          </h2>

          <p className="text-sm sm:text-base text-[#C8CBCB] font-medium leading-relaxed">
            Send us your laptop model. We’ll check the GPU architecture and recommend the best setup for you.
          </p>

          <div className="pt-3 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={onOpenAskModal}
              className="inline-flex items-center gap-2 px-7 py-4 bg-[#E6DDCE] text-[#25282B] rounded-2xl text-xs font-black hover:bg-white active:scale-95 transition shadow-vi-elevated"
            >
              <span>Ask ANYKING</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <span className="text-xs text-[#C8CBCB]/80 font-medium">
              Laptop model + year is usually enough.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
