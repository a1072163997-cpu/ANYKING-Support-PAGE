import React from 'react';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Check,
  HelpCircle,
  Laptop,
  Monitor,
  Cpu,
  Layers,
  ChevronRight,
} from 'lucide-react';
import { LaptopRecord, RiskLevel, Language } from '../types';
import { HeuristicProfileResult } from '../lib/searchMatcher';
import { ConnectionVisualization } from './ConnectionVisualization';

interface CompatibilityResultSectionProps {
  lang: Language;
  query: string;
  matchedRecords: LaptopRecord[];
  brandResult: HeuristicProfileResult;
  onViewProducts: () => void;
  onSeeGuide: () => void;
  onAskAnyking: () => void;
}

export const CompatibilityResultSection: React.FC<CompatibilityResultSectionProps> = ({
  lang,
  query,
  matchedRecords,
  brandResult,
  onViewProducts,
  onSeeGuide,
  onAskAnyking,
}) => {
  const isSearchEntered = query.trim().length >= 2;
  const hasMatches = matchedRecords.length > 0;
  const isSingleMatch = matchedRecords.length === 1;

  // Determine state: 'DIRECT' (Status A), 'ADAPTER' (Status B), 'MANUAL' (Status C), or 'EMPTY'
  let resultState: 'DIRECT' | 'ADAPTER' | 'MANUAL' | 'EMPTY' = 'EMPTY';

  const singleRecord = isSingleMatch ? matchedRecords[0] : null;

  if (!isSearchEntered) {
    resultState = 'EMPTY';
  } else if (hasMatches) {
    const statusText = singleRecord ? singleRecord.status : matchedRecords[0].status;
    if (
      statusText === '需DisplayLink' ||
      statusText === '需扩展坞' ||
      statusText.includes('条件适配')
    ) {
      resultState = 'ADAPTER';
    } else {
      resultState = 'DIRECT';
    }
  } else if (brandResult.profile) {
    if (
      brandResult.summary.includes('DisplayLink') ||
      brandResult.summary.includes('H5')
    ) {
      resultState = 'ADAPTER';
    } else {
      resultState = 'DIRECT';
    }
  } else {
    resultState = 'MANUAL';
  }

  const modelDisplay = singleRecord
    ? `${singleRecord.brand} ${singleRecord.model} (${singleRecord.generation})`
    : hasMatches
    ? `${matchedRecords[0].brand} (${matchedRecords.length} model variants found)`
    : brandResult.profile
    ? `${brandResult.profile.family}`
    : query.trim() || 'Your Laptop';

  return (
    <section id="compatibility-result" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-10">
      {/* Section Eyebrow & Title */}
      <div className="mb-6 border-b border-[#E5E2DA]/80 pb-4">
        <span className="text-[10px] font-black uppercase tracking-widest text-[#5E6265] block mb-1">
          ASSESSMENT SUMMARY
        </span>
        <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#25282B]">
          Your Compatibility Result
        </h2>
      </div>

      {/* Main Result Card */}
      <div className="rounded-3xl border border-[#E5E2DA] bg-white p-6 sm:p-10 shadow-vi-card mb-10 transition-all">
        {/* EMPTY STATE */}
        {resultState === 'EMPTY' && (
          <div className="flex flex-col items-center justify-center text-center py-10">
            <div className="w-14 h-14 rounded-3xl bg-[#F6F4EF] border border-[#E5E2DA] flex items-center justify-center text-[#25282B] mb-4 shadow-vi-subtle">
              <Laptop className="w-7 h-7" />
            </div>
            <h3 className="text-lg sm:text-xl font-black text-[#25282B] mb-2">
              Enter your laptop model to see the best connection for both screens.
            </h3>
            <p className="text-xs sm:text-sm text-[#5E6265] max-w-md font-medium">
              We check over 140+ verified laptops and brand port architectures to determine the exact cable routing.
            </p>
          </div>
        )}

        {/* STATUS A — DIRECT CONNECTION */}
        {resultState === 'DIRECT' && (
          <div className="space-y-8">
            {/* Header with Signal Teal Dot */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E5E2DA] pb-6">
              <div className="space-y-1.5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#14B8A6]/10 text-[#0F766E] border border-[#14B8A6]/30 text-xs font-black">
                  <span className="h-2 w-2 rounded-full bg-[#14B8A6] animate-pulse"></span>
                  <span>DIRECT CONNECTION</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-[#25282B] tracking-tight">
                  You’re ready to connect.
                </h3>
                <p className="text-xs sm:text-sm text-[#5E6265] font-medium">
                  Your laptop can support this setup directly with included cables.
                </p>
              </div>

              <div className="flex items-center gap-2 bg-[#F6F4EF] px-4 py-2 rounded-2xl border border-[#E5E2DA]">
                <span className="text-[11px] font-bold text-[#5E6265]">Match Level:</span>
                <span className="text-xs font-black text-[#25282B] flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#0F766E]" />
                  Confirmed
                </span>
              </div>
            </div>

            {/* Structured Specifications Grid */}
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl bg-[#FAF9F6] p-4 border border-[#E5E2DA]">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#5E6265] block mb-1">
                  Identified Laptop
                </span>
                <p className="text-sm font-black text-[#25282B] line-clamp-2">
                  {modelDisplay}
                </p>
              </div>

              <div className="rounded-2xl bg-[#FAF9F6] p-4 border border-[#E5E2DA]">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#5E6265] block mb-1">
                  Best Connection
                </span>
                <p className="text-sm font-black text-[#25282B]">
                  {singleRecord?.ports?.includes('HDMI')
                    ? 'USB-C + HDMI'
                    : 'Dual USB-C (Thunderbolt / DP Alt)'}
                </p>
              </div>

              <div className="rounded-2xl bg-[#FAF9F6] p-4 border border-[#E5E2DA]">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#5E6265] block mb-1">
                  Recommended Cable
                </span>
                <p className="text-sm font-black text-[#25282B]">
                  USB-C to USB-C + HDMI to Type-C
                </p>
              </div>
            </div>

            {/* Visual Screen Topology Tree */}
            <div className="rounded-2xl bg-[#F6F4EF] p-5 border border-[#E5E2DA]">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#5E6265] block mb-3">
                DUAL EXTENSION TOPOLOGY
              </span>
              <div className="font-mono text-xs sm:text-sm font-bold text-[#25282B] space-y-1.5 bg-white p-4 rounded-xl border border-[#E5E2DA]">
                <div className="flex items-center gap-2">
                  <span className="text-[#5E6265]">💻</span>
                  <span className="font-black text-[#25282B]">{modelDisplay}</span>
                </div>
                <div className="pl-4 border-l-2 border-[#C8CBCB] space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[#5E6265]">├──</span>
                    <span className="bg-[#14B8A6]/15 text-[#0F766E] px-2 py-0.5 rounded text-xs font-black">
                      USB-C (DP Alt Mode)
                    </span>
                    <span className="text-[#5E6265]">→</span>
                    <span className="font-black text-[#25282B]">Screen 1 (Left Display)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#5E6265]">└──</span>
                    <span className="bg-[#25282B] text-white px-2 py-0.5 rounded text-xs font-black">
                      HDMI / Full USB-C
                    </span>
                    <span className="text-[#5E6265]">→</span>
                    <span className="font-black text-[#25282B]">Screen 2 (Right Display)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={onViewProducts}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#25282B] text-white rounded-2xl text-xs font-black hover:bg-black active:scale-95 transition shadow-vi-subtle"
              >
                <span>View Compatible Products</span>
                <ArrowRight className="w-4 h-4 text-[#E6DDCE]" />
              </button>

              <button
                type="button"
                onClick={onSeeGuide}
                className="inline-flex items-center gap-1.5 px-5 py-3.5 bg-white border border-[#E5E2DA] text-[#25282B] rounded-2xl text-xs font-bold hover:bg-[#F6F4EF] transition"
              >
                <span>See Connection Guide</span>
                <ChevronRight className="w-3.5 h-3.5 text-[#5E6265]" />
              </button>
            </div>
          </div>
        )}

        {/* STATUS B — ADAPTER NEEDED */}
        {resultState === 'ADAPTER' && (
          <div className="space-y-8">
            {/* Header with Warm Starlight Accent */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E5E2DA] pb-6">
              <div className="space-y-1.5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E6DDCE] text-[#25282B] border border-[#D4A373]/30 text-xs font-black">
                  <span className="h-2 w-2 rounded-full bg-[#8C4A15]"></span>
                  <span>ADAPTER SUPPORTED</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-[#25282B] tracking-tight">
                  Almost there.
                </h3>
                <p className="text-xs sm:text-sm text-[#5E6265] font-medium">
                  Your laptop needs one additional adapter for full dual screen expansion.
                </p>
              </div>

              <div className="flex items-center gap-2 bg-[#F6F4EF] px-4 py-2 rounded-2xl border border-[#E5E2DA]">
                <span className="text-[11px] font-bold text-[#5E6265]">Match Level:</span>
                <span className="text-xs font-black text-[#8C4A15]">
                  Supported with Adapter
                </span>
              </div>
            </div>

            {/* Structured Specifications Grid */}
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl bg-[#FAF9F6] p-4 border border-[#E5E2DA]">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#5E6265] block mb-1">
                  Identified Laptop
                </span>
                <p className="text-sm font-black text-[#25282B] line-clamp-2">
                  {modelDisplay}
                </p>
              </div>

              <div className="rounded-2xl bg-[#FAF9F6] p-4 border border-[#E5E2DA]">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#5E6265] block mb-1">
                  Best Setup
                </span>
                <p className="text-sm font-black text-[#25282B]">
                  HDMI + H5 DisplayLink
                </p>
              </div>

              <div className="rounded-2xl bg-[#FAF9F6] p-4 border border-[#E5E2DA]">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#5E6265] block mb-1">
                  Required Accessory
                </span>
                <p className="text-sm font-black text-[#8C4A15]">
                  H5 DisplayLink Adapter
                </p>
              </div>
            </div>

            {/* Visual Topology Tree */}
            <div className="rounded-2xl bg-[#F6F4EF] p-5 border border-[#E5E2DA]">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#5E6265] block mb-3">
                ADAPTER EXPANSION TOPOLOGY
              </span>
              <div className="font-mono text-xs sm:text-sm font-bold text-[#25282B] space-y-1.5 bg-white p-4 rounded-xl border border-[#E5E2DA]">
                <div className="flex items-center gap-2">
                  <span className="text-[#5E6265]">💻</span>
                  <span className="font-black text-[#25282B]">{modelDisplay}</span>
                </div>
                <div className="pl-4 border-l-2 border-[#C8CBCB] space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[#5E6265]">├──</span>
                    <span className="bg-[#25282B] text-white px-2 py-0.5 rounded text-xs font-black">
                      HDMI / Native USB-C
                    </span>
                    <span className="text-[#5E6265]">→</span>
                    <span className="font-black text-[#25282B]">Screen 1 (Direct Output)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#5E6265]">└──</span>
                    <span className="bg-[#E6DDCE] text-[#8C4A15] px-2 py-0.5 rounded text-xs font-black border border-[#D4A373]/40">
                      H5 DisplayLink Adapter
                    </span>
                    <span className="text-[#5E6265]">→</span>
                    <span className="font-black text-[#25282B]">Screen 2 (Extended Display)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={onSeeGuide}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#25282B] text-white rounded-2xl text-xs font-black hover:bg-black active:scale-95 transition shadow-vi-subtle"
              >
                <span>See How It Connects</span>
                <ArrowRight className="w-4 h-4 text-[#E6DDCE]" />
              </button>

              <button
                type="button"
                onClick={onAskAnyking}
                className="inline-flex items-center gap-1.5 px-5 py-3.5 bg-white border border-[#E5E2DA] text-[#25282B] rounded-2xl text-xs font-bold hover:bg-[#F6F4EF] transition"
              >
                <span>Get Help</span>
                <HelpCircle className="w-3.5 h-3.5 text-[#5E6265]" />
              </button>
            </div>
          </div>
        )}

        {/* STATUS C — MANUAL CHECK NEEDED */}
        {resultState === 'MANUAL' && (
          <div className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E5E2DA] pb-6">
              <div className="space-y-1.5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F6F4EF] text-[#5E6265] border border-[#C8CBCB] text-xs font-black">
                  <span className="h-2 w-2 rounded-full bg-[#5E6265]"></span>
                  <span>MANUAL VERIFICATION</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-[#25282B] tracking-tight">
                  Let’s check it together.
                </h3>
                <p className="text-xs sm:text-sm text-[#5E6265] font-medium">
                  We found likely matches, but we need your exact model or port count to confirm the best setup.
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-[#FAF9F6] p-5 border border-[#E5E2DA] text-xs leading-relaxed text-[#5E6265] font-medium space-y-2">
              <p>
                Most modern laptops with at least <strong className="text-[#25282B]">1x USB-C (DisplayPort)</strong> and <strong className="text-[#25282B]">1x HDMI</strong> or <strong className="text-[#25282B]">USB-A (3.0+)</strong> are fully compatible with AnyKing S10 Pro and P7.
              </p>
              <p>
                Our engineering team will look up your exact GPU specifications and recommend the zero-latency cable setup.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={onAskAnyking}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#25282B] text-white rounded-2xl text-xs font-black hover:bg-black active:scale-95 transition shadow-vi-subtle"
              >
                <span>Contact ANYKING</span>
                <ArrowRight className="w-4 h-4 text-[#E6DDCE]" />
              </button>

              <button
                type="button"
                onClick={onSeeGuide}
                className="inline-flex items-center gap-1.5 px-5 py-3.5 bg-white border border-[#E5E2DA] text-[#25282B] rounded-2xl text-xs font-bold hover:bg-[#F6F4EF] transition"
              >
                <span>Browse Cable Guide</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Dynamic Connection Visualizer underneath Result */}
      {resultState !== 'EMPTY' && (
        <ConnectionVisualization
          status={singleRecord?.status || '原生直连'}
          laptopName={modelDisplay}
          isAdapterNeeded={resultState === 'ADAPTER'}
          lang={lang}
        />
      )}
    </section>
  );
};
