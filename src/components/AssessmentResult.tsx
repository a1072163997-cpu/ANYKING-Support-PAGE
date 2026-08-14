import React from 'react';
import {
  ShieldAlert,
  ArrowUpRight,
  Usb,
  LaptopMinimal,
  PlugZap,
  CheckCircle2,
  AlertTriangle,
  Info,
  ExternalLink,
  ChevronRight,
  Zap,
  Layers,
  Sparkles,
  Check,
  RotateCcw,
  Cable,
} from 'lucide-react';
import { Language, LaptopRecord, RiskLevel } from '../types';
import { translations } from '../data/translations';
import { statusMap, riskMap, riskMapJa, riskMapZh } from '../data/compatibilityData';
import {
  HeuristicProfileResult,
  getRecommendedCableKey,
  findCableByKey,
} from '../lib/searchMatcher';
import { CableVisualizer } from './CableVisualizer';
import { DeviceAutoDetect } from './DeviceAutoDetect';

interface AssessmentResultProps {
  lang: Language;
  query: string;
  matchedRecords: LaptopRecord[];
  brandResult: HeuristicProfileResult;
  onSelectProductModal?: () => void;
}

export const AssessmentResult: React.FC<AssessmentResultProps> = ({
  lang,
  query,
  matchedRecords,
  brandResult,
  onSelectProductModal,
}) => {
  const t = translations[lang].assessment;
  const isJa = lang === 'ja';
  const isZh = lang === 'zh';

  const hasMatches = matchedRecords.length > 0;
  const isSingleMatch = matchedRecords.length === 1;
  const isSearchEntered = query.trim().length >= 2;
  const isNotFound = isSearchEntered && !hasMatches;

  const singleRecord = isSingleMatch ? matchedRecords[0] : null;
  const recommendedCableKey = singleRecord ? getRecommendedCableKey(singleRecord) : undefined;
  const recommendedCable = findCableByKey(recommendedCableKey);

  // Status banner title
  const resultTitle = hasMatches
    ? isSingleMatch
      ? singleRecord?.model
      : t.variantsFound(matchedRecords.length)
    : isNotFound
    ? t.notFoundTitle
    : brandResult.profile
    ? brandResult.profile.family
    : t.enterModelPrompt;

  const resultSubtitle = hasMatches
    ? t.singleMatchSubtitle
    : isNotFound
    ? t.notFoundSubtitle
    : brandResult.summary;

  const getRiskLabel = (risk: RiskLevel) => {
    if (isJa) return riskMapJa[risk] || risk;
    if (isZh) return riskMapZh[risk] || risk;
    return riskMap[risk] || risk;
  };

  const getToneBadgeStyle = (tone: string) => {
    switch (tone) {
      case 'success':
        return 'bg-[#25282B] text-[#E6DDCE] border border-[#25282B]';
      case 'warning':
        return 'bg-[#FAF2EB] text-[#8C4A15] border border-[#E8D5C4]';
      case 'danger':
        return 'bg-[#FDF2F2] text-[#991B1B] border border-[#F87171]/30';
      default:
        return 'bg-[#F6F4EF] text-[#25282B] border border-[#C8CBCB]/60';
    }
  };

  const cleanSourceUrl = (url?: string) => {
    if (!url) return '';
    return url.split(/\s*\|\s*|\s+(?=https?:\/\/)/)[0];
  };

  return (
    <section id="assessment-section" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 pb-12">
      <div className="grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
        {/* Left Column: Assessment Output */}
        <div className="space-y-5">
          {/* Main Verdict Card */}
          <div className="rounded-3xl border border-[#C8CBCB]/40 bg-white p-6 sm:p-7 shadow-vi-card">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E5E2DA] pb-4">
              <div className="flex items-center gap-2">
                <span className="flex h-2.5 w-2.5 relative">
                  <span
                    className={`absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping ${
                      hasMatches ? 'bg-[#25282B]' : isNotFound ? 'bg-[#8C4A15]' : 'bg-[#C8CBCB]'
                    }`}
                  ></span>
                  <span
                    className={`relative inline-flex rounded-full h-2.5 w-2.5 ${
                      hasMatches ? 'bg-[#25282B]' : isNotFound ? 'bg-[#8C4A15]' : 'bg-[#5E6265]'
                    }`}
                  ></span>
                </span>
                <span className="text-[11px] font-black uppercase tracking-wider text-[#5E6265]">
                  {hasMatches
                    ? isSingleMatch
                      ? 'Verified Hardware Profile'
                      : 'Database Match Results'
                    : isNotFound
                    ? 'Guided Inspection'
                    : 'System Ready'}
                </span>
              </div>

              <span className="rounded-full bg-[#E6DDCE]/50 px-3 py-1 text-xs font-black text-[#25282B] border border-[#E6DDCE]">
                {hasMatches
                  ? `${matchedRecords.length} Model${matchedRecords.length > 1 ? 's' : ''}`
                  : brandResult.label}
              </span>
            </div>

            <div className="mt-4">
              <div className="flex items-center gap-2">
                <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#25282B]">
                  {resultTitle}
                </h2>
              </div>
              <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-[#5E6265] font-medium">
                {resultSubtitle}
              </p>
            </div>

            {/* 3-Screen Display Architecture Visual Icon Row */}
            <div className="mt-5 rounded-2xl bg-[#F6F4EF] p-4 border border-[#E5E2DA]">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#5E6265]">
                  Display Architecture · 3 Independent Displays
                </span>
                <span className="text-[10px] font-bold text-[#25282B] bg-[#E6DDCE] px-2 py-0.5 rounded-md">
                  S10 Pro / P7 Ready
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center text-[11px] font-black text-[#25282B]">
                <div className="rounded-xl bg-white p-2.5 border border-[#C8CBCB]/40 shadow-xs flex flex-col items-center gap-1">
                  <span className="text-[9px] text-[#5E6265] uppercase">Screen 1</span>
                  <span className="font-extrabold">Left Extender</span>
                  <span className="text-[9px] text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded font-bold">1080P FHD</span>
                </div>
                <div className="rounded-xl bg-[#25282B] text-white p-2.5 shadow-xs flex flex-col items-center gap-1">
                  <span className="text-[9px] text-[#E6DDCE] uppercase">Host PC</span>
                  <span className="font-extrabold">Laptop Display</span>
                  <span className="text-[9px] text-[#E6DDCE] bg-white/10 px-1.5 py-0.2 rounded font-bold">Always ON</span>
                </div>
                <div className="rounded-xl bg-white p-2.5 border border-[#C8CBCB]/40 shadow-xs flex flex-col items-center gap-1">
                  <span className="text-[9px] text-[#5E6265] uppercase">Screen 2</span>
                  <span className="font-extrabold">Right Extender</span>
                  <span className="text-[9px] text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded font-bold">1080P FHD</span>
                </div>
              </div>
            </div>
          </div>

          {/* Matched Records List */}
          {hasMatches && (
            <div className="space-y-4">
              {matchedRecords.map((record) => {
                const cfg = statusMap[record.status] || {
                  label: record.status,
                  recommendation: 'Verify port capability',
                  accessory: 'Included cables',
                  tone: 'neutral',
                };
                const evidenceUrl = cleanSourceUrl(record.sourceUrl);

                return (
                  <article
                    key={record.id}
                    className="rounded-3xl border border-[#C8CBCB]/40 bg-white p-6 shadow-vi-subtle transition hover:border-[#C8CBCB] hover:shadow-vi-card"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3 border-b border-[#E5E2DA] pb-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="rounded-lg bg-[#F6F4EF] px-2.5 py-1 text-xs font-black text-[#25282B] border border-[#E5E2DA]">
                            {record.brand}
                          </span>
                          <h3 className="text-lg font-black text-[#25282B]">
                            {record.model}
                          </h3>
                        </div>
                        <p className="mt-1 text-xs font-bold text-[#5E6265]">
                          {record.generation}
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center gap-2">
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-black ${getToneBadgeStyle(
                            cfg.tone
                          )}`}
                        >
                          {cfg.label}
                        </span>
                        <span className="rounded-full bg-[#F6F4EF] border border-[#E5E2DA] px-2.5 py-1 text-xs font-bold text-[#5E6265]">
                          {t.risk}: {getRiskLabel(record.risk)}
                        </span>
                      </div>
                    </div>

                    {/* Compact Port Spec Chips */}
                    <div className="mt-4 grid gap-3 text-xs sm:grid-cols-2">
                      <div className="rounded-2xl bg-[#F6F4EF] p-3.5 border border-[#E5E2DA] sm:col-span-2">
                        <div className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-[#5E6265] mb-1">
                          <Usb className="h-3.5 w-3.5 text-[#25282B]" />
                          {t.ports}
                        </div>
                        <p className="font-mono text-xs font-bold text-[#25282B]">
                          {record.ports}
                        </p>
                      </div>

                      <div className="rounded-2xl bg-[#F6F4EF] p-3.5 border border-[#E5E2DA]">
                        <div className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-[#5E6265] mb-1">
                          <PlugZap className="h-3.5 w-3.5 text-[#25282B]" />
                          {t.recommendation}
                        </div>
                        <p className="text-xs font-bold text-[#25282B] leading-relaxed">
                          {cfg.recommendation}
                        </p>
                      </div>

                      <div className="rounded-2xl bg-[#F6F4EF] p-3.5 border border-[#E5E2DA]">
                        <div className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-[#5E6265] mb-1">
                          <Cable className="h-3.5 w-3.5 text-[#25282B]" />
                          {t.accessory}
                        </div>
                        <p className="text-xs font-bold text-[#25282B] leading-relaxed">
                          {cfg.accessory}
                        </p>
                      </div>
                    </div>

                    {evidenceUrl && (
                      <div className="mt-4 pt-3 border-t border-[#E5E2DA] flex items-center justify-between">
                        <a
                          href={evidenceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-black text-[#25282B] hover:text-[#5E6265] transition"
                        >
                          <span className="border-b border-[#25282B] pb-0.5">{t.officialSpecs}</span>
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                        <span className="text-[11px] font-mono text-[#5E6265]">
                          REF #{record.id}
                        </span>
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          )}

          {/* Cable Preview Highlight */}
          {hasMatches && isSingleMatch && recommendedCable && (
            <div className="rounded-3xl border border-[#C8CBCB]/40 bg-white p-5 shadow-vi-subtle">
              <div className="grid gap-4 sm:grid-cols-[160px_1fr] sm:items-center">
                <div className="overflow-hidden rounded-2xl bg-[#F6F4EF] p-3 border border-[#E5E2DA] flex items-center justify-center">
                  <CableVisualizer connector={recommendedCable.connector} className="h-24 w-full" />
                </div>
                <div className="space-y-1.5">
                  <span className="inline-block rounded-full bg-[#E6DDCE] px-2.5 py-0.5 text-[10px] font-black text-[#25282B]">
                    {recommendedCable.badge}
                  </span>
                  <h4 className="text-base font-black text-[#25282B]">
                    {recommendedCable.name}
                  </h4>
                  <p className="text-xs text-[#5E6265] font-medium leading-relaxed">
                    {recommendedCable.note}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* 4-Step Checklist if Not Found */}
          {isNotFound && (
            <div className="space-y-4">
              <div className="flex gap-3 rounded-2xl border border-[#E8D5C4] bg-[#FAF2EB] p-4 text-[#8C4A15]">
                <ShieldAlert className="h-5 w-5 shrink-0 text-[#8C4A15] mt-0.5" />
                <div>
                  <h4 className="font-black text-xs text-[#8C4A15]">{t.fourStepsTitle}</h4>
                  <p className="mt-0.5 text-xs text-[#8C4A15]/80">{t.fourStepsSubtitle}</p>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl bg-white p-4 border border-[#C8CBCB]/40 shadow-xs">
                  <div className="flex items-center gap-2 text-xs font-black text-[#25282B]">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#25282B] text-white text-[10px]">1</span>
                    {t.step1Title}
                  </div>
                  <p className="mt-1.5 text-xs text-[#5E6265] font-medium">{t.step1Body}</p>
                </div>

                <div className="rounded-2xl bg-white p-4 border border-[#C8CBCB]/40 shadow-xs">
                  <div className="flex items-center gap-2 text-xs font-black text-[#25282B]">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#25282B] text-white text-[10px]">2</span>
                    {t.step2Title}
                  </div>
                  <p className="mt-1.5 text-xs text-[#5E6265] font-medium">{t.step2Body}</p>
                </div>

                <div className="rounded-2xl bg-white p-4 border border-[#C8CBCB]/40 shadow-xs">
                  <div className="flex items-center gap-2 text-xs font-black text-[#25282B]">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#25282B] text-white text-[10px]">3</span>
                    {t.step3Title}
                  </div>
                  <p className="mt-1.5 text-xs text-[#5E6265] font-medium">{t.step3Body}</p>
                </div>

                <div className="rounded-2xl bg-white p-4 border border-[#C8CBCB]/40 shadow-xs">
                  <div className="flex items-center gap-2 text-xs font-black text-[#25282B]">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#25282B] text-white text-[10px]">4</span>
                    {t.step4Title}
                  </div>
                  <p className="mt-1.5 text-xs text-[#5E6265] font-medium">{t.step4Body}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Connection Pathways & Live Device Card */}
        <div className="space-y-5">
          {/* Live Device Auto-Detect Card */}
          <DeviceAutoDetect lang={lang} />

          {/* 3 Connection Pathways Card */}
          <div
            id="how-monitors-connect-card"
            className="rounded-3xl border border-[#C8CBCB]/40 bg-white p-6 shadow-vi-card"
          >
            <div className="mb-4">
              <span className="text-[10px] font-black uppercase tracking-wider text-[#5E6265]">
                Connection Protocols
              </span>
              <h3 className="text-base font-black text-[#25282B]">
                {t.howMonitorsConnect}
              </h3>
            </div>

            <div className="space-y-3 text-xs">
              {/* Option 1 */}
              <div className="rounded-2xl bg-[#F6F4EF] p-3.5 border border-[#E5E2DA] transition hover:border-[#C8CBCB]">
                <div className="flex items-center justify-between">
                  <span className="font-black text-[#25282B] flex items-center gap-1.5">
                    <Zap className="h-3.5 w-3.5 text-[#25282B]" />
                    {t.primaryOptionTitle}
                  </span>
                  <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-black text-emerald-800">
                    Fastest
                  </span>
                </div>
                <p className="mt-1.5 text-[11px] text-[#5E6265] font-medium leading-relaxed">
                  {t.primaryOptionDesc}
                </p>
              </div>

              {/* Option 2 */}
              <div className="rounded-2xl bg-[#F6F4EF] p-3.5 border border-[#E5E2DA] transition hover:border-[#C8CBCB]">
                <div className="flex items-center justify-between">
                  <span className="font-black text-[#25282B] flex items-center gap-1.5">
                    <RotateCcw className="h-3.5 w-3.5 text-[#25282B]" />
                    {t.h5OptionTitle}
                  </span>
                  <span className="rounded-full bg-[#E6DDCE] px-2 py-0.5 text-[10px] font-black text-[#25282B]">
                    Mac M1/M2/M3
                  </span>
                </div>
                <p className="mt-1.5 text-[11px] text-[#5E6265] font-medium leading-relaxed">
                  {t.h5OptionDesc}
                </p>
              </div>

              {/* Option 3 */}
              <div className="rounded-2xl bg-[#F6F4EF] p-3.5 border border-[#E5E2DA] transition hover:border-[#C8CBCB]">
                <div className="flex items-center justify-between">
                  <span className="font-black text-[#25282B] flex items-center gap-1.5">
                    <PlugZap className="h-3.5 w-3.5 text-[#25282B]" />
                    {t.reminderTitle}
                  </span>
                  <span className="rounded-full bg-slate-200 px-2 py-0.5 text-[10px] font-black text-[#5E6265]">
                    65W PD
                  </span>
                </div>
                <p className="mt-1.5 text-[11px] text-[#5E6265] font-medium leading-relaxed">
                  {t.reminderDesc}
                </p>
              </div>

              <button
                type="button"
                onClick={onSelectProductModal}
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#25282B] py-3 text-xs font-black text-white hover:bg-black transition active:scale-[0.99] shadow-vi-subtle"
              >
                <span>{t.viewProductsBtn}</span>
                <ChevronRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
