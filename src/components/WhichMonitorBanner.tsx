import React, { useState } from 'react';
import { ArrowRight, Check, X, Shield, Sparkles, Monitor, Layers } from 'lucide-react';

interface WhichMonitorBannerProps {
  onOpenCompare?: () => void;
}

export const WhichMonitorBanner: React.FC<WhichMonitorBannerProps> = ({
  onOpenCompare,
}) => {
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);

  const handleOpen = () => {
    if (onOpenCompare) {
      onOpenCompare();
    } else {
      setIsCompareModalOpen(true);
    }
  };

  const comparisonProducts = [
    {
      name: 'ANYKING S1 Solo',
      subtitle: 'Single 15.6" OLED',
      ideal: 'Mobile Professionals & Travelers',
      screens: '1 Extra Screen',
      resolution: '1080P / 4K UHD 60Hz',
      ports: '1x Full-spec USB-C or HDMI',
      weight: '1.65 lbs (750g)',
      power: 'Pass-through 65W PD',
      price: '$189',
      tag: 'Most Portable',
      recommended: false,
    },
    {
      name: 'ANYKING Duo Max',
      subtitle: 'Dual 15.6" Tri-Screen Workstation',
      ideal: 'Financial Analysts & Coders',
      screens: '2 Extra Screens (300% Workspace)',
      resolution: '1080P FHD 60Hz Anti-Glare',
      ports: 'Dual Type-C / 1-Cable with DisplayLink',
      weight: '3.1 lbs (1.4kg)',
      power: 'Built-in Intelligent Power Split',
      price: '$349',
      tag: 'Best Seller',
      recommended: true,
    },
    {
      name: 'ANYKING Pro 16',
      subtitle: '2.5K 120Hz Dual Master',
      ideal: 'Designers, Video Editors & Creators',
      screens: '2 Extra Screens (16:10 Ratio)',
      resolution: '2.5K QHD 120Hz 100% sRGB',
      ports: 'Thunderbolt 4 / Dual USB-C',
      weight: '3.4 lbs (1.55kg)',
      power: '100W PD Ultra Fast Charging',
      price: '$469',
      tag: 'Flagship Performance',
      recommended: false,
    },
  ];

  return (
    <>
      <section className="py-8 sm:py-12 bg-[#FAF8F5]">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-10">
          {/* Lifestyle Banner Container */}
          <div className="relative w-full rounded-3xl sm:rounded-[32px] overflow-hidden min-h-[320px] sm:min-h-[380px] lg:min-h-[440px] flex items-center shadow-xl border border-black/5 bg-[#14181E] group">
            
            {/* Background Lifestyle Image Layer with cinematic subtle lighting */}
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
                alt="Person using ANYKING multi-screen portable monitor in cozy bedroom"
                className="w-full h-full object-cover object-center filter brightness-90 contrast-[1.05] transition-transform duration-1000 group-hover:scale-[1.02]"
                referrerPolicy="no-referrer"
              />
              {/* Soft Gradient Mask for Text Contrast */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-transparent sm:w-2/3 lg:w-1/2" />
              <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* Banner Left Content Area */}
            <div className="relative z-10 p-6 sm:p-10 lg:p-14 max-w-xl">
              
              {/* Headline with decorative wavy hand-drawn squiggle matching reference screenshot */}
              <div className="relative inline-block mb-6">
                <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-white leading-[1.12] tracking-tight drop-shadow-md">
                  Which portable monitor is{' '}
                  <span className="relative whitespace-nowrap">
                    right for you?
                    {/* Wavy golden ribbon squiggle underneath */}
                    <svg
                      className="absolute -bottom-2 left-0 w-full h-4 text-[#FED7AA]/80 pointer-events-none"
                      viewBox="0 0 200 20"
                      fill="none"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M2,12 Q 25,2 50,12 T 100,12 T 150,12 T 200,12"
                        stroke="currentColor"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </h2>
              </div>

              {/* Compare Now Outline Pill Button (Exact Match) */}
              <div>
                <button
                  type="button"
                  onClick={handleOpen}
                  className="inline-flex items-center gap-2.5 px-6 py-2.5 sm:py-3 rounded-full border border-white/80 text-white text-xs sm:text-sm font-bold bg-white/10 hover:bg-white hover:text-[#14181E] backdrop-blur-md transition-all duration-200 active:scale-95 shadow-lg group/btn"
                >
                  <span>Compare Now</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* INTERACTIVE COMPARISON MODAL                                  */}
      {/* ============================================================ */}
      {isCompareModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div
            className="bg-[#FAF8F5] rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#E5E1D8] p-6 sm:p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsCompareModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-black/5 hover:bg-black/10 text-[#5E6265] hover:text-[#1F2226] transition"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="text-center max-w-xl mx-auto mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-[#A74312] block mb-1">
                Product Comparison
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-[#1F2226]">
                Find the Perfect ANYKING Monitor
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-[#5E6265]">
                Compare display configurations, connection requirements, and portability across our lineup.
              </p>
            </div>

            {/* Products Comparison Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {comparisonProducts.map((prod) => (
                <div
                  key={prod.name}
                  className={`rounded-2xl p-5 sm:p-6 border flex flex-col justify-between transition-all ${
                    prod.recommended
                      ? 'bg-white border-[#EA580C] shadow-lg ring-2 ring-[#EA580C]/20'
                      : 'bg-white/80 border-[#E5E1D8] hover:border-[#D0CBBF]'
                  }`}
                >
                  <div>
                    {/* Badge */}
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                          prod.recommended
                            ? 'bg-[#EA580C] text-white'
                            : 'bg-[#ECE8DF] text-[#5E6265]'
                        }`}
                      >
                        {prod.tag}
                      </span>
                      <span className="text-lg font-black text-[#1F2226]">{prod.price}</span>
                    </div>

                    <h4 className="text-lg font-black text-[#1F2226]">{prod.name}</h4>
                    <p className="text-xs text-[#5E6265] mb-4">{prod.subtitle}</p>

                    {/* Specs List */}
                    <div className="space-y-2.5 pt-3 border-t border-[#EAE6DD] text-xs">
                      <div>
                        <span className="text-[10px] font-bold uppercase text-[#8C9196] block">Screens</span>
                        <span className="font-semibold text-[#1F2226]">{prod.screens}</span>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase text-[#8C9196] block">Resolution & Refresh</span>
                        <span className="font-semibold text-[#1F2226]">{prod.resolution}</span>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase text-[#8C9196] block">Connectivity</span>
                        <span className="font-semibold text-[#1F2226]">{prod.ports}</span>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase text-[#8C9196] block">Weight</span>
                        <span className="font-semibold text-[#1F2226]">{prod.weight}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 mt-4 border-t border-[#EAE6DD]">
                    <button
                      type="button"
                      onClick={() => setIsCompareModalOpen(false)}
                      className={`w-full py-2.5 rounded-full text-xs font-bold transition ${
                        prod.recommended
                          ? 'bg-[#EA580C] hover:bg-[#C2410C] text-white shadow-md'
                          : 'bg-[#1F2226] hover:bg-black text-white'
                      }`}
                    >
                      Select {prod.name}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
