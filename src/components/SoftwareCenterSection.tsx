import React, { useState, useEffect } from 'react';
import {
  Download,
  Monitor,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  Laptop,
  Check,
  Zap,
  Info,
  Clock,
  Sun,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  Cpu,
  Smile,
  RefreshCw,
  Layers,
} from 'lucide-react';

interface SoftwareCenterProps {
  onOpenAskModal: () => void;
}

export const SoftwareCenterSection: React.FC<SoftwareCenterProps> = ({ onOpenAskModal }) => {
  // Tab mode: 'driver' or 'pet' or 'all'
  const [activeTab, setActiveTab] = useState<'driver' | 'pet'>('driver');

  // Driver Interactive States
  const [selectedDriverOS, setSelectedDriverOS] = useState<'win' | 'mac-arm' | 'mac-intel'>('win');
  const [driverDownloadState, setDriverDownloadState] = useState<'idle' | 'downloading' | 'complete'>('idle');
  const [driverProgress, setDriverProgress] = useState<number>(0);

  // Pet Interactive States
  const [petState, setPetState] = useState<'sleep' | 'waking' | 'awake'>('sleep');
  const [petMood, setPetMood] = useState<'idle' | 'wave' | 'focus' | 'sparkle'>('idle');
  const [petDownloadState, setPetDownloadState] = useState<'idle' | 'downloading' | 'complete'>('idle');
  const [petProgress, setPetProgress] = useState<number>(0);

  // Mac Helper Modal
  const [isMacHelpOpen, setIsMacHelpOpen] = useState<boolean>(false);

  // FAQ Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Handle Driver Download Simulation
  const startDriverDownload = () => {
    if (driverDownloadState === 'downloading') return;
    setDriverDownloadState('downloading');
    setDriverProgress(0);
  };

  useEffect(() => {
    let timer: any;
    if (driverDownloadState === 'downloading') {
      timer = setInterval(() => {
        setDriverProgress((prev) => {
          if (prev >= 100) {
            clearInterval(timer);
            setDriverDownloadState('complete');
            return 100;
          }
          return prev + 6;
        });
      }, 70);
    }
    return () => clearInterval(timer);
  }, [driverDownloadState]);

  // Handle Pet Download & Wakeup Simulation
  const startPetDownload = () => {
    if (petDownloadState === 'downloading') return;
    setPetDownloadState('downloading');
    setPetState('waking');
    setPetProgress(0);
  };

  useEffect(() => {
    let timer: any;
    if (petDownloadState === 'downloading') {
      timer = setInterval(() => {
        setPetProgress((prev) => {
          if (prev >= 100) {
            clearInterval(timer);
            setPetDownloadState('complete');
            setPetState('awake');
            setPetMood('wave');
            return 100;
          }
          return prev + 5;
        });
      }, 70);
    }
    return () => clearInterval(timer);
  }, [petDownloadState]);

  const driverOSOptions = [
    {
      id: 'win',
      name: 'Windows',
      tag: 'Windows 10 / 11',
      version: 'v1.1.21',
      size: '237 MB',
      format: '.exe installer',
    },
    {
      id: 'mac-arm',
      name: 'macOS Apple Silicon',
      tag: 'Mac M1 / M2 / M3 / M4',
      version: 'v1.1.23',
      size: '265 MB',
      format: '.pkg package',
    },
    {
      id: 'mac-intel',
      name: 'macOS Intel',
      tag: 'Mac Intel Processor',
      version: 'v1.1.23',
      size: '284 MB',
      format: '.pkg package',
    },
  ];

  const faqs = [
    {
      q: 'Which macOS driver version should I choose?',
      a: 'Click Apple Menu () in the top left corner → "About This Mac". If you see Apple M1, M2, M3, or M4, select "macOS Apple Silicon". If you see Intel Core, select "macOS Intel".',
    },
    {
      q: 'What if my screen still shows "No Signal" after installing?',
      a: 'Please make sure you have granted Screen Recording / Display permissions in macOS System Settings > Privacy & Security, or plugged into a full-featured USB-C port with video output capability on Windows.',
    },
    {
      q: 'How does the AnyKing Desktop Pet work?',
      a: 'The Desktop Pet is a lightweight floating companion that sits on your taskbar or desktop corner. It includes optional micro-widgets for time tracking, focus timers, and playful idle animations.',
    },
    {
      q: 'Where can I get real-time technical support?',
      a: 'Our engineering team is always online. Click "Contact Us" or "Ask ANYKING" at the bottom right corner anytime to chat directly with our product specialist.',
    },
  ];

  return (
    <div id="software-center-section" className="w-full bg-[#FAF9F5] text-[#25282B] pt-12 pb-20 border-t border-[#E8E5DD]">
      {/* ============================================================ */}
      {/* 01. SOFTWARE CENTER HERO                                     */}
      {/* ============================================================ */}
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 pb-12">
          
          {/* Left Text Box */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE6DD] text-[11px] font-black uppercase tracking-wider text-[#9E4A14] mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#EA580C]" />
              <span>SOFTWARE CENTER</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1A1A1A] tracking-tight leading-[1.12]">
              Download what brings <span className="text-[#9E4A14]">ANYKING</span> to life.
            </h2>

            <p className="mt-4 text-sm sm:text-base text-[#5E6265] leading-relaxed">
              Get the official display driver to illuminate your portable screens, or download the AnyKing Desktop Pet for a playful companion across your daily workflow.
            </p>

            <div className="mt-2 text-xs font-bold text-[#8C9196]">
              Two tools. One better workspace experience.
            </div>

            {/* Quick Action Anchor Buttons */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => {
                  setActiveTab('driver');
                  const el = document.getElementById('display-driver-block');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-5 py-2.5 rounded-full bg-[#25282B] text-white text-xs sm:text-sm font-bold hover:bg-black transition-all flex items-center gap-2 shadow-xs active:scale-95"
              >
                <Monitor className="w-4 h-4 text-[#FED7AA]" />
                <span>Get Display Driver</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setActiveTab('pet');
                  const el = document.getElementById('desktop-pet-block');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-5 py-2.5 rounded-full bg-white text-[#25282B] border border-[#D5D0C5] text-xs sm:text-sm font-bold hover:bg-[#F2EFE9] transition-all flex items-center gap-2 shadow-2xs active:scale-95"
              >
                <Smile className="w-4 h-4 text-[#EA580C]" />
                <span>Get Desktop Pet</span>
              </button>
            </div>
          </div>

          {/* Right Concept Visual Preview */}
          <div className="w-full lg:w-[580px] bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E5DD] shadow-[0_12px_32px_rgba(0,0,0,0.03)] relative overflow-hidden flex flex-col items-center">
            {/* Subtle badge */}
            <div className="absolute top-4 left-5 flex items-center gap-2 text-[10px] font-bold text-[#8C9196] uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>ANYKING ECOSYSTEM READY</span>
            </div>

            {/* Visual Hardware + Pet Composition */}
            <div className="pt-6 w-full flex flex-col items-center">
              {/* Dual Screen Mini Setup */}
              <div className="flex items-end justify-center gap-2 w-full max-w-md">
                {/* Laptop Body Mini */}
                <div className="flex-1 bg-[#1A1C1E] rounded-xl p-1 shadow-md border border-[#2D3035]">
                  <div className="bg-[#0A0D14] rounded-lg aspect-[16/10] flex flex-col items-center justify-center p-2 text-center relative overflow-hidden">
                    <div className="text-[10px] font-bold text-white/90">Main Laptop</div>
                    <div className="text-[8px] text-white/50">4K Resolution</div>
                    <div className="w-8 h-1 bg-emerald-400 rounded-full mt-2" />
                  </div>
                </div>

                {/* Cable Bridge */}
                <div className="w-8 h-1 bg-[#EA580C] rounded-full relative">
                  <div className="w-2 h-2 bg-white rounded-full absolute -top-0.5 right-1 animate-ping" />
                </div>

                {/* ANYKING Monitor Mini */}
                <div className="flex-1 bg-[#1A1C1E] rounded-xl p-1 shadow-md border border-[#2D3035] relative">
                  <div className="bg-gradient-to-tr from-[#0C4A6E] via-[#0369A1] to-[#EA580C] rounded-lg aspect-[16/10] flex flex-col items-center justify-center p-2 text-center text-white relative">
                    <span className="text-[10px] font-black">ANYKING</span>
                    <span className="text-[8px] text-white/80">Illuminated Screen</span>
                  </div>

                  {/* Official Desktop Pet Mascot Character sitting on screen edge */}
                  <div className="absolute -top-10 -right-3 flex flex-col items-center animate-bounce duration-1000 z-10">
                    <div className="relative w-12 h-12 rounded-2xl bg-white/90 p-0.5 shadow-xl border border-white/60 backdrop-blur-xs flex items-center justify-center overflow-hidden group">
                      <img
                        src="/assets/anyking-desktop-pet.jpg"
                        alt="ANYKING Official Desktop Pet"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-contain rounded-xl"
                      />
                      <span className="absolute bottom-0.5 right-0.5 w-2 h-2 rounded-full bg-emerald-500 border border-white" />
                    </div>
                    <div className="bg-[#25282B] text-white text-[8px] font-bold px-1.5 py-0.5 rounded-full border border-white/20 shadow-xs -mt-1">
                      Hi! 🐾
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Micro Banner */}
              <div className="mt-5 w-full bg-[#FAF9F5] rounded-xl p-3 border border-[#EAE6DD] flex items-center justify-between text-xs font-semibold text-[#5E6265]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#9E4A14]" />
                  <span>Certified Clean Installer & Safe Signed Drivers</span>
                </div>
                <span className="text-[10px] font-black text-[#25282B] bg-white px-2 py-0.5 rounded-md border border-[#E5E1D8]">
                  v1.1.23
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* ============================================================ */}
        {/* 02. MODE SWITCH / TABS                                       */}
        {/* ============================================================ */}
        <div className="flex items-center justify-center my-8">
          <div className="bg-[#EAE6DD]/70 p-1 rounded-full border border-[#DED9CE] flex items-center gap-1 shadow-inner">
            <button
              type="button"
              onClick={() => setActiveTab('driver')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'driver'
                  ? 'bg-[#25282B] text-white shadow-sm'
                  : 'text-[#5E6265] hover:text-[#1A1A1A] hover:bg-white/40'
              }`}
            >
              <Monitor className={`w-4 h-4 ${activeTab === 'driver' ? 'text-[#FED7AA]' : ''}`} />
              <span>01. Display Driver (Connect & Screen On)</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('pet')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'pet'
                  ? 'bg-[#25282B] text-white shadow-sm'
                  : 'text-[#5E6265] hover:text-[#1A1A1A] hover:bg-white/40'
              }`}
            >
              <Smile className={`w-4 h-4 ${activeTab === 'pet' ? 'text-[#FED7AA]' : ''}`} />
              <span>02. Desktop Pet (Desk Companion)</span>
            </button>
          </div>
        </div>

        {/* ============================================================ */}
        {/* SECTION A: DISPLAY DRIVER EXPERIENCE ("Turn screen on")      */}
        {/* ============================================================ */}
        <div
          id="display-driver-block"
          className={`transition-all duration-300 ${activeTab === 'driver' ? 'block' : 'opacity-60 hover:opacity-100'}`}
        >
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E8E5DD] shadow-[0_8px_30px_rgba(0,0,0,0.02)] mb-12">
            
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[#EAE6DD]">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#9E4A14] block mb-1">
                  DISPLAY DRIVER
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#1A1A1A]">
                  Get your screen connected.
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-[#5E6265]">
                  Choose your system, download the official driver, and bring your AnyKing display to life.
                </p>
              </div>

              {/* Mac Helper Button */}
              <button
                type="button"
                onClick={() => setIsMacHelpOpen(true)}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#9E4A14] hover:text-[#C2410C] bg-[#FAF9F5] border border-[#EAE6DD] px-3.5 py-1.5 rounded-full hover:border-[#D5D0C5] transition shadow-2xs self-start md:self-auto"
              >
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Not sure which Mac you have?</span>
              </button>
            </div>

            {/* Interactive Stage: Laptop -> Cable Data Flow -> ANYKING Screen */}
            <div className="mt-8 bg-[#FAF9F5] rounded-2xl p-6 sm:p-8 border border-[#E8E5DD]">
              <div className="text-center mb-6">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#8C9196] block mb-1">
                  INTERACTIVE CONNECTION STAGE
                </span>
                <h4 className="text-lg font-black text-[#1A1A1A]">
                  CONNECT → DOWNLOAD → SCREEN ON
                </h4>
              </div>

              {/* Visual Interactive Rig */}
              <div className="flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-10 py-4 max-w-4xl mx-auto">
                
                {/* 1. Host Laptop */}
                <div className="w-64 sm:w-72 bg-[#1A1C1E] rounded-2xl p-2 border border-[#2D3035] shadow-xl">
                  <div className="bg-[#0B0F19] rounded-xl aspect-[16/10] p-4 flex flex-col justify-between text-white relative">
                    <div className="flex items-center justify-between text-[10px] text-white/60">
                      <span className="font-bold">Host Laptop</span>
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    </div>
                    <div className="text-center py-2">
                      <div className="text-xs font-bold text-white">System Selected</div>
                      <div className="text-[11px] font-semibold text-[#FED7AA]">
                        {driverOSOptions.find((o) => o.id === selectedDriverOS)?.name}
                      </div>
                      <div className="text-[9px] text-white/50 mt-1">
                        {driverOSOptions.find((o) => o.id === selectedDriverOS)?.version}
                      </div>
                    </div>
                    <div className="text-[9px] text-center text-white/40">Ready to transmit signal</div>
                  </div>
                  {/* Laptop keyboard edge */}
                  <div className="w-full h-2 bg-[#2D3035] rounded-b-lg mt-1" />
                </div>

                {/* 2. Cable Signal Flow with Interactive Progress Indicator */}
                <div className="w-full lg:w-48 flex flex-col items-center justify-center my-2 lg:my-0">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#8C9196] mb-2">
                    {driverDownloadState === 'idle' && 'READY TO CONNECT'}
                    {driverDownloadState === 'downloading' && `TRANSMITTING ${driverProgress}%`}
                    {driverDownloadState === 'complete' && 'SIGNAL CONNECTED'}
                  </div>

                  {/* Cable with dynamic glowing pulse */}
                  <div className="w-full h-3 bg-[#E5E2DA] rounded-full overflow-hidden relative shadow-inner">
                    <div
                      className={`h-full transition-all duration-100 ${
                        driverDownloadState === 'complete'
                          ? 'bg-emerald-500'
                          : 'bg-gradient-to-r from-[#9E4A14] via-[#EA580C] to-[#F59E0B]'
                      }`}
                      style={{ width: `${driverDownloadState === 'idle' ? 0 : driverProgress}%` }}
                    />
                    {driverDownloadState === 'downloading' && (
                      <div className="absolute inset-0 bg-white/40 animate-pulse" />
                    )}
                  </div>

                  <span className="text-[10px] font-semibold text-[#5E6265] mt-1.5">
                    1-Cable DisplayLink Protocol
                  </span>
                </div>

                {/* 3. ANYKING Screen (Dark -> Screen On with Ribbon Wallpaper) */}
                <div className="w-64 sm:w-72 bg-[#111215] rounded-2xl p-2 border border-[#232528] shadow-2xl relative">
                  <div
                    className={`rounded-xl aspect-[16/10] p-4 flex flex-col justify-between transition-all duration-700 overflow-hidden relative ${
                      driverDownloadState === 'complete'
                        ? 'bg-gradient-to-tr from-[#0369A1] via-[#1D4ED8] to-[#EA580C] text-white shadow-[0_0_30px_rgba(234,88,12,0.3)]'
                        : 'bg-[#080A0E] text-white/50 border border-white/5'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[10px]">
                      <span className="font-bold tracking-wider">ANYKING DISPLAY</span>
                      <span
                        className={`w-2 h-2 rounded-full ${
                          driverDownloadState === 'complete' ? 'bg-emerald-400 animate-ping' : 'bg-red-500'
                        }`}
                      />
                    </div>

                    <div className="text-center py-2 relative z-10">
                      {driverDownloadState === 'idle' && (
                        <>
                          <div className="text-xs font-bold text-white/80">READY FOR DRIVER</div>
                          <div className="text-[10px] text-white/40 mt-1">Choose OS below to illuminate</div>
                        </>
                      )}
                      {driverDownloadState === 'downloading' && (
                        <>
                          <div className="text-sm font-black text-[#FED7AA] animate-pulse">
                            DOWNLOADING... {driverProgress}%
                          </div>
                          <div className="text-[10px] text-white/70 mt-1">Illuminating pixels...</div>
                        </>
                      )}
                      {driverDownloadState === 'complete' && (
                        <>
                          <div className="text-sm font-black text-white drop-shadow-md">
                            ✨ SIGNAL FOUND
                          </div>
                          <div className="text-[10px] text-white/90 font-semibold mt-1">
                            Driver Ready · Display Active
                          </div>
                        </>
                      )}
                    </div>

                    <div className="text-[9px] text-center text-white/60">
                      {driverDownloadState === 'complete' ? '1080P FHD 60Hz Active' : 'Standby Mode'}
                    </div>
                  </div>
                </div>

              </div>

              {/* OS Selection Buttons + Get Driver Action */}
              <div className="mt-8 pt-6 border-t border-[#EAE6DD] flex flex-col md:flex-row items-center justify-between gap-6">
                {/* OS Choice Pills */}
                <div className="flex flex-wrap items-center justify-center gap-2.5">
                  {driverOSOptions.map((os) => {
                    const isSelected = selectedDriverOS === os.id;
                    return (
                      <button
                        key={os.id}
                        type="button"
                        onClick={() => {
                          setSelectedDriverOS(os.id as any);
                          setDriverDownloadState('idle');
                          setDriverProgress(0);
                        }}
                        className={`flex flex-col text-left px-4 py-2.5 rounded-xl border transition-all ${
                          isSelected
                            ? 'bg-[#25282B] text-white border-[#25282B] shadow-sm'
                            : 'bg-white text-[#5E6265] border-[#E5E1D8] hover:border-[#25282B] hover:text-[#25282B]'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold">{os.name}</span>
                          <span
                            className={`text-[9px] font-black px-1.5 py-0.2 rounded ${
                              isSelected ? 'bg-white/20 text-white' : 'bg-[#EAE6DD] text-[#5E6265]'
                            }`}
                          >
                            {os.version}
                          </span>
                        </div>
                        <span className="text-[10px] opacity-75 mt-0.5">
                          {os.tag} · {os.size}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Primary Action Button */}
                <div className="flex items-center gap-3">
                  {driverDownloadState === 'complete' ? (
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => {
                          setDriverDownloadState('idle');
                          setDriverProgress(0);
                        }}
                        className="px-4 py-3 rounded-xl bg-white border border-[#E5E1D8] text-xs font-bold text-[#5E6265] hover:text-[#1A1A1A] transition flex items-center gap-1.5"
                      >
                        <RefreshCw className="w-3.5 h-3.5" />
                        <span>Re-download</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => onOpenAskModal()}
                        className="px-6 py-3 rounded-xl bg-emerald-600 text-white text-xs sm:text-sm font-black hover:bg-emerald-700 transition flex items-center gap-2 shadow-md active:scale-95"
                      >
                        <Check className="w-4 h-4" />
                        <span>Open Installer Guide</span>
                      </button>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={startDriverDownload}
                      disabled={driverDownloadState === 'downloading'}
                      className="px-8 py-3.5 rounded-full bg-[#EA580C] hover:bg-[#C2410C] text-white text-xs sm:text-sm font-black transition flex items-center gap-2 shadow-md active:scale-95 disabled:opacity-50"
                    >
                      <Download className="w-4 h-4" />
                      <span>
                        {driverDownloadState === 'downloading' ? `Downloading (${driverProgress}%)` : 'GET DRIVER →'}
                      </span>
                    </button>
                  )}
                </div>
              </div>

            </div>

            {/* 4-Step Simplified Flow (Pick -> Download -> Install -> Unfold) */}
            <div className="mt-10">
              <div className="text-xs font-bold text-[#8C9196] uppercase tracking-wider mb-4">
                4-Step Quick Setup Process
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-[#FAF9F5] p-4 rounded-2xl border border-[#EAE6DD]">
                  <span className="w-6 h-6 rounded-full bg-[#25282B] text-white text-xs font-bold flex items-center justify-center mb-2">
                    01
                  </span>
                  <div className="text-sm font-bold text-[#1A1A1A]">Choose</div>
                  <div className="text-xs text-[#5E6265] mt-0.5">Pick your operating system</div>
                </div>

                <div className="bg-[#FAF9F5] p-4 rounded-2xl border border-[#EAE6DD]">
                  <span className="w-6 h-6 rounded-full bg-[#25282B] text-white text-xs font-bold flex items-center justify-center mb-2">
                    02
                  </span>
                  <div className="text-sm font-bold text-[#1A1A1A]">Download</div>
                  <div className="text-xs text-[#5E6265] mt-0.5">Get the official driver package</div>
                </div>

                <div className="bg-[#FAF9F5] p-4 rounded-2xl border border-[#EAE6DD]">
                  <span className="w-6 h-6 rounded-full bg-[#25282B] text-white text-xs font-bold flex items-center justify-center mb-2">
                    03
                  </span>
                  <div className="text-sm font-bold text-[#1A1A1A]">Install</div>
                  <div className="text-xs text-[#5E6265] mt-0.5">Run installer and follow steps</div>
                </div>

                <div className="bg-[#FAF9F5] p-4 rounded-2xl border border-[#EAE6DD]">
                  <span className="w-6 h-6 rounded-full bg-[#EA580C] text-white text-xs font-bold flex items-center justify-center mb-2">
                    04
                  </span>
                  <div className="text-sm font-bold text-[#1A1A1A]">Unfold</div>
                  <div className="text-xs text-[#5E6265] mt-0.5">Connect display & start working</div>
                </div>
              </div>
            </div>

            {/* Static Card Download Mirrors (Matching user reference layout) */}
            <div className="mt-10 pt-8 border-t border-[#EAE6DD]">
              <div className="text-xs font-bold text-[#8C9196] uppercase tracking-wider mb-4">
                Direct Official Mirrors
              </div>
              <div className="space-y-3">
                {driverOSOptions.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-5 rounded-2xl bg-white border border-[#E8E5DD] hover:border-[#25282B] transition-all shadow-2xs gap-3 group"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-[#FAF9F5] border border-[#EAE6DD] flex items-center justify-center text-[#25282B]">
                        <Laptop className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-[#1A1A1A] group-hover:text-[#9E4A14] transition">
                            {item.name}
                          </span>
                          <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-[#FAF9F5] border border-[#EAE6DD] text-[#8C9196]">
                            {item.version}
                          </span>
                        </div>
                        <span className="text-xs text-[#5E6265]">
                          {item.tag} · {item.size}
                        </span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        setSelectedDriverOS(item.id as any);
                        startDriverDownload();
                      }}
                      className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full border border-[#25282B] text-[#25282B] text-xs font-bold hover:bg-[#25282B] hover:text-white transition active:scale-95 self-start sm:self-auto shadow-2xs"
                    >
                      <span>Download for {item.name.split(' ')[0]}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Verified Server Badge */}
              <div className="mt-4 p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200/80 flex items-center gap-3 text-xs text-emerald-900 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>
                  Files are provided directly from ANYKING official signed cloud repository with SHA-256 security verification.
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* ============================================================ */}
        {/* SECTION B: DESKTOP PET EXPERIENCE ("Bring desk to life")     */}
        {/* ============================================================ */}
        <div
          id="desktop-pet-block"
          className={`transition-all duration-300 ${activeTab === 'pet' ? 'block' : 'opacity-60 hover:opacity-100'}`}
        >
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E8E5DD] shadow-[0_8px_30px_rgba(0,0,0,0.02)] mb-12">
            
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[#EAE6DD]">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#9E4A14] block mb-1">
                  DESKTOP PET
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#1A1A1A]">
                  Meet your desk companion.
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-[#5E6265]">
                  Download the AnyKing Desktop Pet and add a playful, helpful companion to your daily workspace.
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-bold text-[#5E6265] bg-[#FAF9F5] px-3.5 py-1.5 rounded-full border border-[#EAE6DD]">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Available for Windows (macOS coming soon)</span>
              </div>
            </div>

            {/* Interactive Pet Character Simulation Box */}
            <div className="mt-8 bg-[#FAF9F5] rounded-2xl p-6 sm:p-8 border border-[#E8E5DD]">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Pet Animated Stage (7 Cols) */}
                <div className="lg:col-span-7 bg-[#1A1C1E] rounded-2xl p-6 sm:p-8 border border-[#2D3035] shadow-xl text-white relative overflow-hidden min-h-[300px] flex flex-col justify-between">
                  {/* Top Taskbar Simulation */}
                  <div className="flex items-center justify-between text-xs text-white/50 border-b border-white/10 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                      <span className="text-[11px] font-bold text-white/80 ml-2">AnyKing Desktop Pet v1.0</span>
                    </div>
                    <div className="flex items-center gap-3 text-[10px]">
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> 10:24 AM</span>
                      <span className="flex items-center gap-1"><Sun className="w-3 h-3" /> 72°F Focus</span>
                    </div>
                  </div>

                  {/* Center Character Animated Area */}
                  <div className="my-auto py-4 flex flex-col items-center justify-center text-center">
                    
                    {/* Official Robot Pet Avatar with Real Image & State Effects */}
                    <div
                      className="relative group cursor-pointer"
                      onClick={() => setPetMood(petMood === 'wave' ? 'focus' : petMood === 'focus' ? 'idle' : 'wave')}
                    >
                      {/* Character Halo Effect */}
                      <div
                        className={`absolute -inset-4 rounded-full blur-xl transition-all duration-700 ${
                          petState === 'awake'
                            ? 'bg-gradient-to-tr from-[#EA580C]/40 via-[#F59E0B]/30 to-[#38BDF8]/20 animate-pulse'
                            : petState === 'waking'
                            ? 'bg-amber-500/20'
                            : 'bg-white/5'
                        }`}
                      />

                      {/* Main Character Image Card */}
                      <div
                        className={`relative w-36 h-36 sm:w-44 sm:h-44 rounded-3xl p-2 border-2 transition-all duration-500 flex items-center justify-center overflow-hidden backdrop-blur-md ${
                          petState === 'awake'
                            ? 'bg-[#2A2D32]/90 border-white/40 shadow-[0_12px_40px_rgba(234,88,12,0.25)] scale-105'
                            : petState === 'waking'
                            ? 'bg-[#22252A] border-amber-400/50 shadow-lg scale-100'
                            : 'bg-[#15171A] border-white/10 opacity-70 grayscale-[30%] scale-95'
                        }`}
                      >
                        <img
                          src="/assets/anyking-desktop-pet.jpg"
                          alt="ANYKING Robot Desk Pet"
                          referrerPolicy="no-referrer"
                          className={`w-full h-full object-contain transition-all duration-500 ${
                            petState === 'sleep' ? 'brightness-75' : petState === 'waking' ? 'brightness-105' : 'brightness-100 hover:scale-105'
                          }`}
                        />

                        {/* Status Icon Badge on Pet */}
                        <div className="absolute top-2 right-2 flex items-center gap-1 bg-black/70 backdrop-blur-xs px-2 py-0.5 rounded-full border border-white/20 text-[9px] font-bold">
                          {petState === 'sleep' && <span className="text-amber-300">Zzz</span>}
                          {petState === 'waking' && <span className="text-amber-400 animate-spin">✦</span>}
                          {petState === 'awake' && petMood === 'idle' && <span className="text-emerald-400">● Online</span>}
                          {petState === 'awake' && petMood === 'wave' && <span className="text-orange-400">👋 Wave</span>}
                          {petState === 'awake' && petMood === 'focus' && <span className="text-cyan-400">🎯 25:00</span>}
                        </div>
                      </div>

                      {/* Interactive Speech Bubble */}
                      <div className="mt-3 bg-white/15 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/25 text-xs font-bold text-white shadow-lg inline-flex items-center gap-1.5">
                        {petState === 'sleep' && <span>💤 Zzz... Tap to Wake Up</span>}
                        {petState === 'waking' && <span>✨ Syncing neural visor...</span>}
                        {petState === 'awake' && petMood === 'idle' && <span>🦊 Ready to accompany your workflow!</span>}
                        {petState === 'awake' && petMood === 'wave' && <span>🐾 Hi human! Let's build something great.</span>}
                        {petState === 'awake' && petMood === 'focus' && <span>🎯 Deep Work Session · Stay in flow!</span>}
                      </div>
                    </div>

                    <div className="mt-3 text-[11px] text-white/50">
                      {petState === 'awake' ? 'Click mascot to switch mood & mode' : 'Download to wake up your ANYKING companion'}
                    </div>
                  </div>

                  {/* Bottom Pet Interaction Pills */}
                  {petState === 'awake' && (
                    <div className="flex items-center justify-center gap-2 pt-2 border-t border-white/10">
                      <button
                        type="button"
                        onClick={() => setPetMood('wave')}
                        className={`px-3 py-1 rounded-full text-[10px] font-bold transition ${
                          petMood === 'wave' ? 'bg-[#EA580C] text-white' : 'bg-white/10 text-white/70 hover:bg-white/20'
                        }`}
                      >
                        👋 Wave
                      </button>
                      <button
                        type="button"
                        onClick={() => setPetMood('focus')}
                        className={`px-3 py-1 rounded-full text-[10px] font-bold transition ${
                          petMood === 'focus' ? 'bg-[#EA580C] text-white' : 'bg-white/10 text-white/70 hover:bg-white/20'
                        }`}
                      >
                        🎯 Focus Timer
                      </button>
                      <button
                        type="button"
                        onClick={() => setPetMood('idle')}
                        className={`px-3 py-1 rounded-full text-[10px] font-bold transition ${
                          petMood === 'idle' ? 'bg-[#EA580C] text-white' : 'bg-white/10 text-white/70 hover:bg-white/20'
                        }`}
                      >
                        ☕ Relax
                      </button>
                    </div>
                  )}
                </div>

                {/* Right Download & Features Controller (5 Cols) */}
                <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#8C9196] block mb-1">
                      COMPANION FEATURES
                    </span>
                    <h4 className="text-xl font-black text-[#1A1A1A] mb-3">
                      Built for people who work in motion.
                    </h4>

                    {/* Features List */}
                    <div className="space-y-2.5 text-xs text-[#5E6265]">
                      <div className="flex items-start gap-2.5 p-2 rounded-xl bg-white border border-[#EAE6DD]">
                        <Smile className="w-4 h-4 text-[#EA580C] shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold text-[#1A1A1A]">Animated Companion</span>
                          <p className="text-[11px] mt-0.5">Idle motions, subtle reactions & playful expressions.</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2.5 p-2 rounded-xl bg-white border border-[#EAE6DD]">
                        <Clock className="w-4 h-4 text-[#EA580C] shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold text-[#1A1A1A]">Utility Micro-Widgets</span>
                          <p className="text-[11px] mt-0.5">Built-in Pomodoro focus timer, hydration reminder & weather.</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2.5 p-2 rounded-xl bg-white border border-[#EAE6DD]">
                        <Zap className="w-4 h-4 text-[#EA580C] shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold text-[#1A1A1A]">Zero CPU Overhead</span>
                          <p className="text-[11px] mt-0.5">Runs seamlessly in background using less than 15MB RAM.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Download Action for Pet */}
                  <div className="pt-4 border-t border-[#EAE6DD]">
                    <div className="text-xs font-bold text-[#1A1A1A] mb-2 flex items-center justify-between">
                      <span>AnyKing Desktop Pet for Windows</span>
                      <span className="text-[11px] font-semibold text-[#8C9196]">v1.0.4 · 84 MB</span>
                    </div>

                    {petDownloadState === 'complete' ? (
                      <button
                        type="button"
                        onClick={() => onOpenAskModal()}
                        className="w-full py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition flex items-center justify-center gap-2 shadow-md"
                      >
                        <Check className="w-4 h-4" />
                        <span>Ready to Join Your Desktop · View Guide</span>
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={startPetDownload}
                        disabled={petDownloadState === 'downloading'}
                        className="w-full py-3.5 rounded-full bg-[#25282B] hover:bg-black text-white text-xs sm:text-sm font-black transition flex items-center justify-center gap-2 shadow-md active:scale-95 disabled:opacity-50"
                      >
                        <Download className="w-4 h-4 text-[#FED7AA]" />
                        <span>
                          {petDownloadState === 'downloading'
                            ? `Waking up... (${petProgress}%)`
                            : 'Get Desktop Pet for Windows →'}
                        </span>
                      </button>
                    )}
                  </div>
                </div>

              </div>
            </div>

            {/* 4-Step Pet Quick Setup */}
            <div className="mt-8">
              <div className="text-xs font-bold text-[#8C9196] uppercase tracking-wider mb-4">
                Simple Onboarding
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-[#FAF9F5] p-4 rounded-2xl border border-[#EAE6DD]">
                  <span className="w-6 h-6 rounded-full bg-[#25282B] text-white text-xs font-bold flex items-center justify-center mb-2">
                    01
                  </span>
                  <div className="text-sm font-bold text-[#1A1A1A]">Download</div>
                  <div className="text-xs text-[#5E6265] mt-0.5">Get the lightweight installer</div>
                </div>

                <div className="bg-[#FAF9F5] p-4 rounded-2xl border border-[#EAE6DD]">
                  <span className="w-6 h-6 rounded-full bg-[#25282B] text-white text-xs font-bold flex items-center justify-center mb-2">
                    02
                  </span>
                  <div className="text-sm font-bold text-[#1A1A1A]">Install</div>
                  <div className="text-xs text-[#5E6265] mt-0.5">Quick 10-second background setup</div>
                </div>

                <div className="bg-[#FAF9F5] p-4 rounded-2xl border border-[#EAE6DD]">
                  <span className="w-6 h-6 rounded-full bg-[#25282B] text-white text-xs font-bold flex items-center justify-center mb-2">
                    03
                  </span>
                  <div className="text-sm font-bold text-[#1A1A1A]">Launch</div>
                  <div className="text-xs text-[#5E6265] mt-0.5">Open AnyKing Desktop Pet</div>
                </div>

                <div className="bg-[#FAF9F5] p-4 rounded-2xl border border-[#EAE6DD]">
                  <span className="w-6 h-6 rounded-full bg-[#EA580C] text-white text-xs font-bold flex items-center justify-center mb-2">
                    04
                  </span>
                  <div className="text-sm font-bold text-[#1A1A1A]">Enjoy</div>
                  <div className="text-xs text-[#5E6265] mt-0.5">Your companion is ready on desk</div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ============================================================ */}
        {/* SECTION C: "CHOOSE WHAT YOU NEED" COMPARISON                 */}
        {/* ============================================================ */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E8E5DD] shadow-[0_4px_20px_rgba(0,0,0,0.02)] mb-12">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#9E4A14] block mb-1">
              CHOOSE WHAT YOU NEED
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-[#1A1A1A]">
              Functional Connection vs Emotional Companion
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Display Driver Card */}
            <div className="p-6 rounded-2xl bg-[#FAF9F5] border border-[#EAE6DD] flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#25282B] text-white flex items-center justify-center mb-4">
                  <Monitor className="w-5 h-5 text-[#FED7AA]" />
                </div>
                <h4 className="text-lg font-black text-[#1A1A1A] mb-1">Display Driver</h4>
                <div className="text-xs font-bold text-[#9E4A14] mb-3">Turn your screen on.</div>
                <p className="text-xs text-[#5E6265] leading-relaxed">
                  Use this if you need your AnyKing portable monitor to connect, negotiate video protocols, and display dual or triple screens seamlessly.
                </p>
              </div>
              <div className="pt-6">
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab('driver');
                    const el = document.getElementById('display-driver-block');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#25282B] hover:text-[#9E4A14]"
                >
                  <span>Select Driver Package</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Desktop Pet Card */}
            <div className="p-6 rounded-2xl bg-[#FAF9F5] border border-[#EAE6DD] flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#25282B] text-white flex items-center justify-center mb-4">
                  <Smile className="w-5 h-5 text-[#FED7AA]" />
                </div>
                <h4 className="text-lg font-black text-[#1A1A1A] mb-1">Desktop Pet</h4>
                <div className="text-xs font-bold text-[#9E4A14] mb-3">Bring your desk to life.</div>
                <p className="text-xs text-[#5E6265] leading-relaxed">
                  Use this if you want a fun, animated desktop companion along with micro utility features like focus timers and daily productivity reminders.
                </p>
              </div>
              <div className="pt-6">
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab('pet');
                    const el = document.getElementById('desktop-pet-block');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#25282B] hover:text-[#9E4A14]"
                >
                  <span>Select Desktop Pet</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* SECTION D: SYSTEM COMPATIBILITY & FAQ                        */}
        {/* ============================================================ */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E8E5DD] shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
          <div className="flex flex-col md:flex-row items-start justify-between gap-8">
            
            {/* Left FAQ Intro */}
            <div className="max-w-md">
              <span className="text-xs font-bold uppercase tracking-wider text-[#9E4A14] block mb-1">
                FAQ & SUPPORT
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-[#1A1A1A]">
                Need help installing?
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#5E6265] leading-relaxed">
                Check the common installation questions below or reach out directly to ANYKING technical engineers.
              </p>

              <div className="mt-6">
                <button
                  type="button"
                  onClick={onOpenAskModal}
                  className="px-6 py-2.5 rounded-full bg-[#25282B] hover:bg-black text-white text-xs font-bold transition flex items-center gap-2 shadow-xs"
                >
                  <span>Ask ANYKING →</span>
                </button>
              </div>
            </div>

            {/* Right Accordion List */}
            <div className="flex-1 w-full space-y-3">
              {faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={faq.q}
                    className="rounded-2xl border border-[#EAE6DD] bg-[#FAF9F5] overflow-hidden transition"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full px-5 py-4 flex items-center justify-between text-left gap-4"
                    >
                      <span className="text-xs sm:text-sm font-bold text-[#1A1A1A]">{faq.q}</span>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-[#8C9196] shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-[#8C9196] shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-4 pt-1 text-xs text-[#5E6265] leading-relaxed border-t border-[#EAE6DD]/50">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </div>

      </div>

      {/* ============================================================ */}
      {/* MAC IDENTIFICATION HELPER MODAL                              */}
      {/* ============================================================ */}
      {isMacHelpOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div
            className="bg-[#FAF9F5] rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-[#EAE6DD] shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-[#EAE6DD]">
              <div className="flex items-center gap-2">
                <Cpu className="w-5 h-5 text-[#9E4A14]" />
                <h4 className="text-lg font-black text-[#1A1A1A]">Check Your Mac Processor</h4>
              </div>
              <button
                type="button"
                onClick={() => setIsMacHelpOpen(false)}
                className="text-[#8C9196] hover:text-[#1A1A1A] text-sm font-bold"
              >
                ✕
              </button>
            </div>

            <div className="py-5 space-y-4 text-xs text-[#5E6265]">
              <p>Follow these quick steps to choose the exact right driver for your Mac:</p>
              
              <div className="bg-white p-4 rounded-xl border border-[#EAE6DD] space-y-2">
                <div className="font-bold text-[#1A1A1A]">Step 1: Open Apple Menu</div>
                <p>Click the  Apple logo in the top-left corner of your Mac menu bar.</p>
                <div className="font-bold text-[#1A1A1A] pt-1">Step 2: Click "About This Mac"</div>
                <p>Review the processor line in the popup window:</p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="p-3 bg-white rounded-xl border border-emerald-300">
                  <span className="text-[10px] font-black uppercase text-emerald-700 block mb-1">
                    Apple Silicon
                  </span>
                  <div className="font-bold text-[#1A1A1A]">M1 / M2 / M3 / M4</div>
                  <span className="text-[10px] text-[#5E6265] mt-1 block">Choose macOS ARM</span>
                </div>

                <div className="p-3 bg-white rounded-xl border border-blue-300">
                  <span className="text-[10px] font-black uppercase text-blue-700 block mb-1">
                    Intel Core
                  </span>
                  <div className="font-bold text-[#1A1A1A]">Intel Core i5 / i7 / i9</div>
                  <span className="text-[10px] text-[#5E6265] mt-1 block">Choose macOS Intel</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => setIsMacHelpOpen(false)}
                className="w-full py-2.5 bg-[#25282B] text-white text-xs font-bold rounded-full hover:bg-black transition"
              >
                Got it, thank you!
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
