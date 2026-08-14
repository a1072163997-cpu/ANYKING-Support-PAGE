import React from 'react';

export const HeroHardwareVisual: React.FC = () => {
  return (
    <div className="relative w-full max-w-[560px] mx-auto select-none py-4">
      {/* Ambient background soft glow */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-[#E6DDCE]/40 via-white/60 to-[#C8CBCB]/30 rounded-3xl blur-2xl -z-10" />

      {/* Main Container */}
      <div className="relative rounded-3xl border border-[#E5E2DA]/80 bg-gradient-to-b from-white to-[#FAF9F6] p-5 sm:p-7 shadow-vi-card">
        {/* Top Status Header */}
        <div className="flex items-center justify-between border-b border-[#E5E2DA]/60 pb-3.5 mb-5">
          <div className="flex items-center gap-2">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600"></span>
            </span>
            <span className="text-[11px] font-black uppercase tracking-wider text-[#25282B]">
              Triple-Screen Setup Ready
            </span>
          </div>
          <span className="text-[10px] font-bold text-[#5E6265] bg-[#F6F4EF] px-2.5 py-1 rounded-full border border-[#E5E2DA]">
            S10 Pro · Dual 14" IPS
          </span>
        </div>

        {/* Realistic Hardware Rendering of Laptop & Tri-Screen */}
        <div className="relative flex flex-col items-center justify-center">
          {/* Tri-Screen Array Visual */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 w-full items-end pb-3">
            {/* Left Screen (Screen 1) */}
            <div className="flex flex-col items-center group">
              <span className="text-[9px] font-black uppercase tracking-wider text-[#5E6265] mb-1">
                Left Screen
              </span>
              <div className="relative w-full aspect-[16/10] rounded-xl bg-[#1A1C1E] border-2 border-[#25282B] shadow-md overflow-hidden p-1.5 flex flex-col justify-between">
                {/* Screen glass reflection */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />
                <div className="flex justify-between items-center text-[8px] text-[#C8CBCB]">
                  <span className="font-bold">Code / Doc</span>
                  <span className="text-[#14B8A6]">1080P</span>
                </div>
                <div className="space-y-1 my-auto">
                  <div className="h-1.5 w-3/4 bg-[#5E6265]/40 rounded-full" />
                  <div className="h-1.5 w-full bg-[#5E6265]/30 rounded-full" />
                  <div className="h-1.5 w-1/2 bg-[#14B8A6]/60 rounded-full" />
                </div>
                <div className="flex justify-between items-center text-[7px] text-[#C8CBCB] font-mono">
                  <span>HDMI IN</span>
                  <span className="text-[#E6DDCE]">60Hz</span>
                </div>
              </div>
            </div>

            {/* Center Laptop (Host PC) */}
            <div className="flex flex-col items-center scale-105 z-10">
              <span className="text-[9px] font-black uppercase tracking-wider text-[#25282B] mb-1">
                Your Laptop
              </span>
              {/* Laptop Display */}
              <div className="relative w-full aspect-[16/10] rounded-xl bg-[#25282B] border-2 border-[#25282B] shadow-lg overflow-hidden p-1.5 flex flex-col justify-between">
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/15 to-transparent pointer-events-none" />
                <div className="flex justify-between items-center text-[8px] text-white">
                  <span className="font-black tracking-wide">Main Desktop</span>
                  <span className="bg-[#14B8A6] text-white text-[7px] px-1 rounded-sm font-bold">ACTIVE</span>
                </div>
                <div className="flex flex-col items-center justify-center my-auto">
                  <span className="text-[10px] font-black text-white">ANYKING</span>
                  <span className="text-[7px] text-[#E6DDCE] font-bold">Central Workspace</span>
                </div>
                <div className="flex justify-between items-center text-[7px] text-[#C8CBCB] font-mono">
                  <span>Host GPU</span>
                  <span>Primary</span>
                </div>
              </div>
              {/* Laptop Keyboard Base & Hinge */}
              <div className="w-[108%] h-3 bg-gradient-to-b from-[#C8CBCB] via-[#9CA3AF] to-[#6B7280] rounded-b-md shadow-sm -mt-0.5 relative flex items-center justify-center">
                <div className="w-8 h-0.5 bg-[#4B5563] rounded-full" />
              </div>
            </div>

            {/* Right Screen (Screen 2) */}
            <div className="flex flex-col items-center group">
              <span className="text-[9px] font-black uppercase tracking-wider text-[#5E6265] mb-1">
                Right Screen
              </span>
              <div className="relative w-full aspect-[16/10] rounded-xl bg-[#1A1C1E] border-2 border-[#25282B] shadow-md overflow-hidden p-1.5 flex flex-col justify-between">
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />
                <div className="flex justify-between items-center text-[8px] text-[#C8CBCB]">
                  <span className="font-bold">Charts / Chat</span>
                  <span className="text-[#14B8A6]">1080P</span>
                </div>
                <div className="space-y-1 my-auto">
                  <div className="h-1.5 w-full bg-[#5E6265]/30 rounded-full" />
                  <div className="h-1.5 w-4/5 bg-[#14B8A6]/60 rounded-full" />
                  <div className="h-1.5 w-2/3 bg-[#5E6265]/40 rounded-full" />
                </div>
                <div className="flex justify-between items-center text-[7px] text-[#C8CBCB] font-mono">
                  <span>USB-C IN</span>
                  <span className="text-[#E6DDCE]">60Hz</span>
                </div>
              </div>
            </div>
          </div>

          {/* Physical Cable Connections Simulation */}
          <div className="w-full mt-2 pt-3 border-t border-[#E5E2DA]/60 flex items-center justify-between text-xs font-bold text-[#5E6265]">
            <div className="flex items-center gap-1.5 bg-[#F6F4EF] px-2.5 py-1 rounded-xl border border-[#E5E2DA]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#14B8A6]"></span>
              <span className="text-[10px] text-[#25282B]">Line 1: USB-C (DP Alt)</span>
            </div>

            <span className="text-[10px] text-[#5E6265] font-semibold">Dual Discrete Signal</span>

            <div className="flex items-center gap-1.5 bg-[#F6F4EF] px-2.5 py-1 rounded-xl border border-[#E5E2DA]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#14B8A6]"></span>
              <span className="text-[10px] text-[#25282B]">Line 2: HDMI / H5</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
