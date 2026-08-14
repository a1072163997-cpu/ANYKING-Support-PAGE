import React, { useState } from 'react';
import {
  Laptop,
  Cable,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Cpu,
  Monitor,
  Zap,
  HelpCircle,
  ExternalLink,
  ShieldCheck,
} from 'lucide-react';

interface DisplayScreensGuideSectionProps {
  onOpenCompatibilityModal?: () => void;
  onOpenCableGuideModal?: () => void;
}

export const DisplayScreensGuideSection: React.FC<DisplayScreensGuideSectionProps> = ({
  onOpenCompatibilityModal,
  onOpenCableGuideModal,
}) => {
  // Interactive tab for Screen 1
  const [activeLaptopTab, setActiveLaptopTab] = useState<'all' | 'mac' | 'windows'>('all');
  
  // Interactive tab for Screen 2
  const [activeCableType, setActiveCableType] = useState<'usbc' | 'hdmi' | 'adapter'>('usbc');

  const scrollToCompatibility = () => {
    if (onOpenCompatibilityModal) {
      onOpenCompatibilityModal();
      return;
    }
    const el = document.getElementById('compatibility-hero');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToCableGuide = () => {
    if (onOpenCableGuideModal) {
      onOpenCableGuideModal();
      return;
    }
    const el = document.getElementById('cable-guide');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-10 sm:py-14 bg-[#FAF9F5] border-t border-[#EAE6DD]">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Mini Eyebrow & Title */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE6DD] text-[11px] font-black uppercase tracking-wider text-[#9E4A14] mb-2">
              <Monitor className="w-3.5 h-3.5 text-[#EA580C]" />
              <span>SETUP & COMPATIBILITY STATIONS</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-[#1A1A1A] tracking-tight">
              Essential Guides for Your Portable Workspace
            </h3>
          </div>
          <div className="text-xs font-semibold text-[#8C9196]">
            Interactive diagnostic screens · 100% Plug-and-play verified
          </div>
        </div>

        {/* ============================================================ */}
        {/* DUAL DISPLAY SCREENS RIG (Presented as 2 Portable Monitors)  */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* ============================================================ */}
          {/* SCREEN 1: LAPTOP COMPATIBILITY                               */}
          {/* ============================================================ */}
          <div
            id="display-screen-compatibility"
            className="group flex flex-col justify-between rounded-3xl bg-[#111215] p-2.5 sm:p-3.5 border border-[#232528] shadow-[0_20px_45px_rgba(0,0,0,0.18)] hover:border-[#383C41] transition-all duration-300 relative"
          >
            {/* Monitor Top Bezel / Webcam Bar Accent */}
            <div className="flex items-center justify-between px-3 py-1.5 text-white/50 border-b border-white/5">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] font-black tracking-wider text-white/80 uppercase">
                  ANYKING SCREEN 01 · COMPATIBILITY ENGINE
                </span>
              </div>
              <div className="text-[9px] font-mono text-white/40">1080P FHD 60Hz</div>
            </div>

            {/* Inner Monitor Display Panel (Warm White Screen Area) */}
            <div className="mt-2 flex-1 rounded-2xl bg-white p-6 sm:p-8 flex flex-col justify-between shadow-inner border border-[#E8E5DD] relative overflow-hidden">
              
              {/* Top Section */}
              <div>
                {/* Amber Laptop Icon in Rounded Badge */}
                <div className="w-12 h-12 rounded-2xl bg-[#FFF7ED] border border-[#FFEDD5] flex items-center justify-center text-[#EA580C] shadow-2xs mb-5 group-hover:scale-105 transition-transform">
                  <Laptop className="w-6 h-6 stroke-[2.2]" />
                </div>

                {/* Heading */}
                <h4 className="text-2xl sm:text-[26px] font-black text-[#1A1A1A] tracking-tight leading-tight">
                  Laptop Compatibility
                </h4>

                {/* Description */}
                <p className="mt-3 text-sm sm:text-base text-[#5E6265] leading-relaxed">
                  Check whether your laptop provides the required video outputs or needs an H5 DisplayLink adapter.
                </p>

                {/* High-fidelity Visual Diagram Illustration */}
                <div className="mt-5 rounded-xl bg-[#F6F4EF] border border-[#EAE6DD] overflow-hidden group/img relative">
                  <img
                    src="/assets/laptop-compatibility-visual.jpg"
                    alt="ANYKING Laptop Compatibility Wiring Diagram"
                    referrerPolicy="no-referrer"
                    className="w-full h-44 sm:h-52 object-cover object-center group-hover/img:scale-102 transition-transform duration-500"
                  />
                  <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded-md border border-white/10">
                    Auto Detection Ready
                  </div>
                </div>
              </div>

              {/* Bottom Action Area */}
              <div className="mt-6 pt-4 border-t border-[#EAE6DD] flex items-center justify-between">
                <button
                  type="button"
                  onClick={scrollToCompatibility}
                  className="inline-flex items-center gap-2 text-sm sm:text-base font-black text-[#EA580C] hover:text-[#C2410C] transition group/btn"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>

                <div className="text-[11px] text-[#8C9196] font-semibold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Instant Matcher</span>
                </div>
              </div>

            </div>

            {/* Monitor Bottom Stand Accent */}
            <div className="flex items-center justify-center pt-2">
              <div className="w-20 h-1 bg-[#232528] rounded-full" />
            </div>
          </div>

          {/* ============================================================ */}
          {/* SCREEN 2: CABLE & PORT GUIDE                                 */}
          {/* ============================================================ */}
          <div
            id="display-screen-cable-guide"
            className="group flex flex-col justify-between rounded-3xl bg-[#111215] p-2.5 sm:p-3.5 border border-[#232528] shadow-[0_20px_45px_rgba(0,0,0,0.18)] hover:border-[#383C41] transition-all duration-300 relative"
          >
            {/* Monitor Top Bezel / Webcam Bar Accent */}
            <div className="flex items-center justify-between px-3 py-1.5 text-white/50 border-b border-white/5">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] font-black tracking-wider text-white/80 uppercase">
                  ANYKING SCREEN 02 · CABLE & PORT MATRIX
                </span>
              </div>
              <div className="text-[9px] font-mono text-white/40">Signal & Power Sync</div>
            </div>

            {/* Inner Monitor Display Panel (Warm White Screen Area) */}
            <div className="mt-2 flex-1 rounded-2xl bg-white p-6 sm:p-8 flex flex-col justify-between shadow-inner border border-[#E8E5DD] relative overflow-hidden">
              
              {/* Top Section */}
              <div>
                {/* Amber Cable / Plug Icon in Rounded Badge */}
                <div className="w-12 h-12 rounded-2xl bg-[#FFF7ED] border border-[#FFEDD5] flex items-center justify-center text-[#EA580C] shadow-2xs mb-5 group-hover:scale-105 transition-transform">
                  <Cable className="w-6 h-6 stroke-[2.2]" />
                </div>

                {/* Heading */}
                <h4 className="text-2xl sm:text-[26px] font-black text-[#1A1A1A] tracking-tight leading-tight">
                  Cable & Port Guide
                </h4>

                {/* Description */}
                <p className="mt-3 text-sm sm:text-base text-[#5E6265] leading-relaxed">
                  Understand USB-C, HDMI, USB-A power, and when each cable is required.
                </p>

                {/* High-fidelity Visual Diagram Illustration */}
                <div className="mt-5 rounded-xl bg-[#F6F4EF] border border-[#EAE6DD] overflow-hidden group/img relative">
                  <img
                    src="/assets/cable-port-guide-visual.jpg"
                    alt="ANYKING Cable and Port Wiring Diagram"
                    referrerPolicy="no-referrer"
                    className="w-full h-44 sm:h-52 object-cover object-center group-hover/img:scale-102 transition-transform duration-500"
                  />
                  <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded-md border border-white/10">
                    Wiring Blueprint
                  </div>
                </div>
              </div>

              {/* Bottom Action Area */}
              <div className="mt-6 pt-4 border-t border-[#EAE6DD] flex items-center justify-between">
                <button
                  type="button"
                  onClick={scrollToCableGuide}
                  className="inline-flex items-center gap-2 text-sm sm:text-base font-black text-[#EA580C] hover:text-[#C2410C] transition group/btn"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>

                <div className="text-[11px] text-[#8C9196] font-semibold flex items-center gap-1">
                  <HelpCircle className="w-3.5 h-3.5 text-[#EA580C]" />
                  <span>Interactive Topology</span>
                </div>
              </div>

            </div>

            {/* Monitor Bottom Stand Accent */}
            <div className="flex items-center justify-center pt-2">
              <div className="w-20 h-1 bg-[#232528] rounded-full" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
