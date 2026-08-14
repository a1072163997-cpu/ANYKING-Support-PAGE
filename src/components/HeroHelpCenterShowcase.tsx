import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface HeroHelpCenterShowcaseProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onSearchSubmit: () => void;
  onNavigateToGuide: () => void;
  onNavigateToDiagnostics: () => void;
  onOpenAskModal: () => void;
}

export const HeroHelpCenterShowcase: React.FC<HeroHelpCenterShowcaseProps> = ({
  searchQuery,
  onSearchChange,
  onSearchSubmit,
  onNavigateToGuide,
  onNavigateToDiagnostics,
  onOpenAskModal,
}) => {
  const [activeLeftTab, setActiveLeftTab] = useState<'overview' | 'usbc' | 'hdmi'>('overview');
  const [activeRightTab, setActiveRightTab] = useState<'hardware' | 'ports' | 'adapter'>('hardware');
  const [activeSubTab, setActiveSubTab] = useState<string>('Setup Guide');

  const subTabs = [
    'Setup Guide',
    'Products',
    'Software Center',
    'FAQ Articles',
    "Can't find answers?",
  ];

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearchSubmit();
    }
  };

  // True-to-Image-1 Realistic Silk Ribbon Swirl Wallpaper (Cobalt Blue + Amber Orange Flow)
  const SilkWallpaper = ({ side }: { side: 'left' | 'center' | 'right' }) => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      {/* Deep Dark Midnight Navy Base */}
      <div className="absolute inset-0 bg-[#06080E]" />

      {/* Dynamic Realistic Fluid Silk Ribbon Gradients (Cobalt Blue & Golden Amber) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            side === 'left'
              ? 'radial-gradient(ellipse 110% 85% at 0% 60%, #0369A1 0%, #1D4ED8 30%, #EA580C 55%, #0F172A 85%, #050B14 100%)'
              : side === 'center'
              ? 'radial-gradient(ellipse 130% 90% at 50% 65%, #EA580C 0%, #C2410C 25%, #1D4ED8 50%, #0369A1 75%, #060B13 100%)'
              : 'radial-gradient(ellipse 110% 85% at 100% 60%, #0369A1 0%, #1D4ED8 30%, #EA580C 55%, #0F172A 85%, #050B14 100%)',
        }}
      />

      {/* High-Fidelity Fluid Silk Ribbon Vector Curves Matching Image 1 */}
      <svg
        className="absolute inset-0 w-full h-full object-cover mix-blend-screen opacity-95"
        preserveAspectRatio="none"
        viewBox="0 0 700 420"
      >
        <defs>
          {/* Main Vibrant Orange/Amber to Ocean Blue Fluid Gradient */}
          <linearGradient id={`silk-ribbon-1-${side}`} x1="0%" y1="20%" x2="100%" y2="80%">
            <stop offset="0%" stopColor="#FB923C" stopOpacity="0.95" />
            <stop offset="30%" stopColor="#EA580C" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#2563EB" stopOpacity="0.85" />
            <stop offset="90%" stopColor="#0284C7" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#0369A1" stopOpacity="0.95" />
          </linearGradient>

          {/* Golden Warm Swirl Accent Gradient */}
          <linearGradient id={`silk-ribbon-2-${side}`} x1="100%" y1="10%" x2="0%" y2="90%">
            <stop offset="0%" stopColor="#FDE047" stopOpacity="0.9" />
            <stop offset="40%" stopColor="#F97316" stopOpacity="0.85" />
            <stop offset="75%" stopColor="#3B82F6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#1E3A8A" stopOpacity="0.9" />
          </linearGradient>

          <filter id={`silk-smooth-${side}`} x="-15%" y="-15%" width="130%" height="130%">
            <feGaussianBlur stdDeviation="9" />
          </filter>
        </defs>

        {/* Primary Flowing Silk Ribbon Wave */}
        <path
          d={
            side === 'left'
              ? 'M-30,240 C140,90 280,340 720,130 L720,440 L-30,440 Z'
              : side === 'center'
              ? 'M-30,160 C180,360 440,70 720,280 L720,440 L-30,440 Z'
              : 'M-30,130 C240,340 480,90 720,240 L720,440 L-30,440 Z'
          }
          fill={`url(#silk-ribbon-1-${side})`}
          filter={`url(#silk-smooth-${side})`}
        />

        {/* Secondary Ribbon Crest Wave */}
        <path
          d={
            side === 'left'
              ? 'M-20,160 Q180,35 360,260 T710,100'
              : side === 'center'
              ? 'M-20,280 Q200,45 420,330 T710,150'
              : 'M-20,100 Q220,300 440,55 T710,200'
          }
          fill="none"
          stroke={`url(#silk-ribbon-2-${side})`}
          strokeWidth="24"
          strokeOpacity="0.8"
          filter={`url(#silk-smooth-${side})`}
        />

        {/* Crisp Golden Amber Filament Highlight */}
        <path
          d={
            side === 'left'
              ? 'M-10,140 C200,45 340,280 700,110'
              : side === 'center'
              ? 'M-10,260 C190,55 400,320 700,140'
              : 'M-10,90 C210,290 420,65 700,180'
          }
          fill="none"
          stroke="#FDE68A"
          strokeWidth="4"
          strokeOpacity="0.65"
        />
      </svg>

      {/* Realistic Anti-Glare Glass Top Reflection */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-white/[0.06] pointer-events-none" />
    </div>
  );

  return (
    <div className="w-full relative select-none bg-[#FAF9F5]">
      {/* ============================================================ */}
      {/* TOP HEADER: Welcome to ANYKING Help Center                   */}
      {/* Matches exact font weight, color & proportional spacing      */}
      {/* ============================================================ */}
      <div className="text-center pt-8 sm:pt-10 pb-6 sm:pb-8 px-4 max-w-5xl mx-auto">
        <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-black tracking-tight text-[#1A1A1A] leading-[1.12]">
          Welcome to ANYKING{' '}
          <span className="text-[#9E4A14] font-black">
            Help Center
          </span>
        </h1>
        <p className="mt-3 text-sm sm:text-base lg:text-[17px] text-[#63686E] font-medium max-w-2xl mx-auto">
          We've got you covered for every connection question.
        </p>
      </div>

      {/* ============================================================ */}
      {/* FULL-WIDTH REALISTIC 3-SCREEN WORKSTATION WITH LAPTOP BASE   */}
      {/* ============================================================ */}
      <div className="w-full px-2 sm:px-4 lg:px-8 xl:px-12 max-w-[1720px] mx-auto">
        <div className="relative flex flex-col items-center">
          
          {/* Main Triple Screen Physical Assembly */}
          <div className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-center gap-2 sm:gap-3 lg:gap-1.5 transition-all duration-300">
            
            {/* ---------------------------------------------------- */}
            {/* 1. LEFT SCREEN: Connection.app (Flex 1)              */}
            {/* ---------------------------------------------------- */}
            <div
              id="hero-left-screen"
              className="w-full lg:flex-1 flex flex-col items-center justify-start transition-all duration-300 group/screen"
            >
              {/* Outer Monitor Frame (Black Matte Metal Casing) */}
              <div className="w-full relative rounded-2xl lg:rounded-[20px] bg-[#111215] p-1 sm:p-1.5 shadow-[0_20px_45px_rgba(0,0,0,0.38),0_2px_4px_rgba(0,0,0,0.25)] border border-[#232528] group-hover/screen:border-[#383C41] transition-all duration-300 group-hover/screen:-translate-y-1">
                
                {/* Screen Display Glass Area */}
                <div className="w-full rounded-xl lg:rounded-[14px] bg-[#07090C] overflow-hidden aspect-[16/10] relative flex flex-col justify-between border border-black/80 shadow-inner">
                  {/* Silk Wallpaper */}
                  <SilkWallpaper side="left" />

                  {/* Window Application: Connection.app */}
                  <div className="relative z-10 m-2 sm:m-3 lg:m-4 flex-1 flex flex-col rounded-xl lg:rounded-2xl bg-black/65 backdrop-blur-xl border border-white/15 shadow-2xl overflow-hidden">
                    {/* macOS Title Bar */}
                    <div className="flex items-center justify-between px-3.5 py-2 sm:py-2.5 bg-white/5 border-b border-white/10">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] inline-block shadow-xs" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] inline-block shadow-xs" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] inline-block shadow-xs" />
                      </div>
                      <span className="text-[11px] sm:text-xs font-bold text-white/90 tracking-wide">
                        Connection.app
                      </span>
                      <div className="w-8" />
                    </div>

                    {/* Window Content */}
                    <div className="flex-1 p-3 sm:p-4 lg:p-5 flex gap-3 sm:gap-4 overflow-hidden">
                      {/* Left Sub-Menu */}
                      <div className="w-24 sm:w-28 flex flex-col gap-1 text-[11px] sm:text-xs font-semibold shrink-0">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveLeftTab('overview');
                          }}
                          className={`text-left px-3 py-1.5 sm:py-2 rounded-lg transition ${
                            activeLeftTab === 'overview'
                              ? 'bg-[#C2410C] text-white font-bold shadow-xs'
                              : 'text-white/70 hover:bg-white/10 hover:text-white'
                          }`}
                        >
                          Overview
                        </button>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveLeftTab('usbc');
                          }}
                          className={`text-left px-3 py-1.5 sm:py-2 rounded-lg transition ${
                            activeLeftTab === 'usbc'
                              ? 'bg-[#C2410C] text-white font-bold shadow-xs'
                              : 'text-white/70 hover:bg-white/10 hover:text-white'
                          }`}
                        >
                          USB-C Guide
                        </button>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveLeftTab('hdmi');
                          }}
                          className={`text-left px-3 py-1.5 sm:py-2 rounded-lg transition ${
                            activeLeftTab === 'hdmi'
                              ? 'bg-[#C2410C] text-white font-bold shadow-xs'
                              : 'text-white/70 hover:bg-white/10 hover:text-white'
                          }`}
                        >
                          HDMI Guide
                        </button>
                      </div>

                      {/* Right Details Panel */}
                      <div className="flex-1 flex flex-col justify-between pl-2 sm:pl-4 border-l border-white/10">
                        <div className="space-y-1.5">
                          <h3 className="text-sm sm:text-base lg:text-lg font-black text-white leading-tight">
                            {activeLeftTab === 'overview' && 'No Display Signal?'}
                            {activeLeftTab === 'usbc' && 'USB-C DP Alt Mode'}
                            {activeLeftTab === 'hdmi' && 'HDMI Video Output'}
                          </h3>
                          <p className="text-[11px] sm:text-xs text-white/80 leading-relaxed font-medium">
                            {activeLeftTab === 'overview' &&
                              'If your screen stays black or shows "No Signal", check your port features.'}
                            {activeLeftTab === 'usbc' &&
                              'Make sure your laptop USB-C port supports DisplayPort Alt Mode (video + power).'}
                            {activeLeftTab === 'hdmi' &&
                              'Connect HDMI to Type-C cable directly for secondary screen video output.'}
                          </p>
                        </div>

                        <div className="pt-2">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              onNavigateToGuide();
                            }}
                            className="inline-flex items-center gap-1 px-4 py-1.5 sm:py-2 bg-[#EA580C] hover:bg-[#C2410C] text-white rounded-lg text-[11px] sm:text-xs font-bold transition shadow-md active:scale-95 hover:shadow-orange-500/30"
                          >
                            <span>View guides</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hinge Connection Clip (Right side) */}
                <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 w-3.5 h-20 bg-gradient-to-r from-[#2A2D31] to-[#121315] rounded-r-md border border-[#3E4349] shadow-lg z-30" />
              </div>
            </div>

            {/* ---------------------------------------------------- */}
            {/* 2. CENTER SCREEN: Host Laptop (Flex 1)               */}
            {/* ---------------------------------------------------- */}
            <div
              id="hero-center-screen"
              className="w-full lg:flex-1 flex flex-col items-center justify-start z-20 transition-all duration-300 group/screen"
            >
              {/* Laptop Screen Bezel */}
              <div className="w-full relative rounded-2xl lg:rounded-[20px] bg-[#111215] p-1 sm:p-1.5 shadow-[0_24px_50px_rgba(0,0,0,0.45),0_2px_4px_rgba(0,0,0,0.3)] border border-[#232528] group-hover/screen:border-[#383C41] transition-all duration-300 group-hover/screen:-translate-y-1">
                
                {/* Top Center Camera Dot */}
                <div className="absolute top-[3px] left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-20">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#08090A] border border-white/20 flex items-center justify-center">
                    <div className="w-0.5 h-0.5 rounded-full bg-[#0284C7]" />
                  </div>
                </div>

                {/* Laptop Display Panel */}
                <div className="w-full rounded-xl lg:rounded-[14px] bg-[#07090C] overflow-hidden aspect-[16/10] relative flex flex-col justify-between border border-black/80 shadow-inner">
                  {/* Continuous Center Silk Wallpaper */}
                  <SilkWallpaper side="center" />

                  {/* Center Floating Help Search Card */}
                  <div className="relative z-10 my-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="rounded-2xl lg:rounded-3xl bg-black/65 backdrop-blur-xl border border-white/20 p-5 sm:p-6 lg:p-7 text-center shadow-2xl max-w-md mx-auto">
                      <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-[#FED7AA] block mb-1">
                        HELP CENTER
                      </span>
                      <h2 className="text-lg sm:text-xl lg:text-2xl font-black text-white tracking-tight mb-4">
                        Search connection guides
                      </h2>

                      {/* Integrated Search Input with Enter Badge */}
                      <div className="relative max-w-sm mx-auto">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-white/70">
                          <Search className="h-4 w-4" />
                        </div>
                        <input
                          type="text"
                          value={searchQuery}
                          onChange={(e) => onSearchChange(e.target.value)}
                          onKeyDown={handleKeyDown}
                          placeholder="Search connection guides."
                          className="w-full pl-9 pr-16 py-2.5 sm:py-3 rounded-xl bg-white/10 hover:bg-white/15 focus:bg-white/20 border border-white/25 text-white placeholder:text-white/60 text-xs sm:text-sm font-semibold focus:outline-none focus:border-[#EA580C] transition"
                        />
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onSearchSubmit();
                          }}
                          className="absolute right-2 top-2 bottom-2 px-2.5 bg-white/20 hover:bg-white/30 text-white text-[10px] font-black rounded-lg border border-white/20 flex items-center gap-1 transition"
                        >
                          <span>↵ Enter</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Realistic Silver Laptop Keyboard Base Deck (Matching Image 1) */}
              <div className="w-[103%] bg-gradient-to-b from-[#E2E8F0] via-[#CBD5E1] to-[#94A3B8] rounded-b-2xl border-t border-white/60 shadow-2xl p-2 sm:p-3 -mt-1 flex flex-col items-center">
                {/* Keyboard Recessed Island */}
                <div className="w-[94%] bg-[#1A1C1E] rounded-lg p-1.5 sm:p-2 border border-black/40 shadow-inner">
                  {/* Top Key Row */}
                  <div className="grid grid-cols-12 gap-1 mb-1">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <div key={i} className="h-1.5 sm:h-2 bg-[#0F1113] rounded-xs border border-white/5" />
                    ))}
                  </div>
                  {/* Middle Key Row */}
                  <div className="grid grid-cols-12 gap-1 mb-1">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <div key={i} className="h-2 sm:h-2.5 bg-[#0F1113] rounded-xs border border-white/5" />
                    ))}
                  </div>
                  {/* Spacebar Row */}
                  <div className="flex justify-center mt-0.5">
                    <div className="w-1/3 h-2 sm:h-2.5 bg-[#0F1113] rounded-xs border border-white/5" />
                  </div>
                </div>

                {/* Precision Glass Trackpad */}
                <div className="w-28 sm:w-36 h-3 sm:h-4 mt-1.5 bg-gradient-to-b from-[#CBD5E1] to-[#94A3B8] rounded-md border border-[#64748B]/40 shadow-inner" />
              </div>
            </div>

            {/* ---------------------------------------------------- */}
            {/* 3. RIGHT SCREEN: Diagnostics.app (Flex 1)            */}
            {/* ---------------------------------------------------- */}
            <div
              id="hero-right-screen"
              className="w-full lg:flex-1 flex flex-col items-center justify-start transition-all duration-300 group/screen"
            >
              {/* Outer Monitor Frame (Black Matte Metal Casing) */}
              <div className="w-full relative rounded-2xl lg:rounded-[20px] bg-[#111215] p-1 sm:p-1.5 shadow-[0_20px_45px_rgba(0,0,0,0.38),0_2px_4px_rgba(0,0,0,0.25)] border border-[#232528] group-hover/screen:border-[#383C41] transition-all duration-300 group-hover/screen:-translate-y-1">
                
                {/* Hinge Connection Clip (Left side) */}
                <div className="hidden lg:block absolute -left-2 top-1/2 -translate-y-1/2 w-3.5 h-20 bg-gradient-to-l from-[#2A2D31] to-[#121315] rounded-l-md border border-[#3E4349] shadow-lg z-30" />

                {/* Screen Display Glass Area */}
                <div className="w-full rounded-xl lg:rounded-[14px] bg-[#07090C] overflow-hidden aspect-[16/10] relative flex flex-col justify-between border border-black/80 shadow-inner">
                  {/* Silk Wallpaper */}
                  <SilkWallpaper side="right" />

                  {/* Window Application: Diagnostics.app */}
                  <div className="relative z-10 m-2 sm:m-3 lg:m-4 flex-1 flex flex-col rounded-xl lg:rounded-2xl bg-black/65 backdrop-blur-xl border border-white/15 shadow-2xl overflow-hidden">
                    {/* macOS Title Bar */}
                    <div className="flex items-center justify-between px-3.5 py-2 sm:py-2.5 bg-white/5 border-b border-white/10">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] inline-block shadow-xs" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] inline-block shadow-xs" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] inline-block shadow-xs" />
                      </div>
                      <span className="text-[11px] sm:text-xs font-bold text-white/90 tracking-wide">
                        Diagnostics.app
                      </span>
                      <div className="w-8" />
                    </div>

                    {/* Window Content */}
                    <div className="flex-1 p-3 sm:p-4 lg:p-5 flex gap-3 sm:gap-4 overflow-hidden">
                      {/* Left Sub-Menu */}
                      <div className="w-24 sm:w-28 flex flex-col gap-1 text-[11px] sm:text-xs font-semibold shrink-0">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveRightTab('hardware');
                          }}
                          className={`text-left px-3 py-1.5 sm:py-2 rounded-lg transition ${
                            activeRightTab === 'hardware'
                              ? 'bg-[#C2410C] text-white font-bold shadow-xs'
                              : 'text-white/70 hover:bg-white/10 hover:text-white'
                          }`}
                        >
                          Hardware
                        </button>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveRightTab('ports');
                          }}
                          className={`text-left px-3 py-1.5 sm:py-2 rounded-lg transition ${
                            activeRightTab === 'ports'
                              ? 'bg-[#C2410C] text-white font-bold shadow-xs'
                              : 'text-white/70 hover:bg-white/10 hover:text-white'
                          }`}
                        >
                          Ports
                        </button>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveRightTab('adapter');
                          }}
                          className={`text-left px-3 py-1.5 sm:py-2 rounded-lg transition ${
                            activeRightTab === 'adapter'
                              ? 'bg-[#C2410C] text-white font-bold shadow-xs'
                              : 'text-white/70 hover:bg-white/10 hover:text-white'
                          }`}
                        >
                          Adapter
                        </button>
                      </div>

                      {/* Right Details Panel */}
                      <div className="flex-1 flex flex-col justify-between pl-2 sm:pl-4 border-l border-white/10">
                        <div className="space-y-1.5">
                          <h3 className="text-sm sm:text-base lg:text-lg font-black text-white leading-tight">
                            {activeRightTab === 'hardware' && 'Device Checker'}
                            {activeRightTab === 'ports' && 'Port Architecture'}
                            {activeRightTab === 'adapter' && 'H5 DisplayLink'}
                          </h3>
                          <p className="text-[11px] sm:text-xs text-white/80 leading-relaxed font-medium">
                            {activeRightTab === 'hardware' &&
                              'Verify whether your laptop provides the required video outputs or needs H5 DisplayLink.'}
                            {activeRightTab === 'ports' &&
                              'Examine dual Thunderbolt, USB 3.0, and HDMI channels for simultaneous dual output.'}
                            {activeRightTab === 'adapter' &&
                              'Overcome base M1/M2/M3 single display limits with seamless USB-to-video conversion.'}
                          </p>
                        </div>

                        <div className="pt-2">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              onNavigateToDiagnostics();
                            }}
                            className="inline-flex items-center gap-1 px-4 py-1.5 sm:py-2 bg-[#EA580C] hover:bg-[#C2410C] text-white rounded-lg text-[11px] sm:text-xs font-bold transition shadow-md active:scale-95 hover:shadow-orange-500/30"
                          >
                            <span>Check model</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ============================================================ */}
        {/* SUB-NAV BAR: Setup Guide · Products · Software Center · Etc. */}
        {/* Exactly positioned below the screens matching Image 1        */}
        {/* ============================================================ */}
        <div className="mt-8 sm:mt-10 border-t border-[#E5E2DA] pt-4 sm:pt-5 flex flex-col md:flex-row items-center justify-between gap-4 pb-4">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm font-semibold text-[#4A4E52]">
            {subTabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => {
                  setActiveSubTab(tab);
                  if (tab === 'Setup Guide' || tab === 'Software Center') {
                    onNavigateToGuide();
                  } else if (tab === "Can't find answers?") {
                    onOpenAskModal();
                  }
                }}
                className={`py-1.5 px-2 rounded-lg transition ${
                  activeSubTab === tab
                    ? 'text-[#1A1A1A] font-bold'
                    : 'hover:text-[#1A1A1A]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Auxiliary Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#8A8F95]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Search help..."
              className="w-full pl-9 pr-4 py-2 bg-white/95 border border-[#DEDAD1] rounded-full text-xs sm:text-sm font-medium text-[#1A1A1A] placeholder:text-[#8A8F95] focus:outline-none focus:border-[#1A1A1A] focus:bg-white shadow-2xs transition"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
