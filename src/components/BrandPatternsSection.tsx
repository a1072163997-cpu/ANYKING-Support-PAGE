import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Cpu, Laptop } from 'lucide-react';
import { Language } from '../types';

interface BrandPatternsSectionProps {
  lang: Language;
  onBrandClick?: (brand: string) => void;
}

export const BrandPatternsSection: React.FC<BrandPatternsSectionProps> = ({
  lang,
  onBrandClick,
}) => {
  const [selectedBrand, setSelectedBrand] = useState('Apple');

  const brandData: Record<
    string,
    {
      name: string;
      logoText: string;
      patternEarly: string;
      patternModern: string;
      directPath: string;
      fallbackPath: string;
      recommendedProduct: string;
      keyModels: string;
    }
  > = {
    Apple: {
      name: 'Apple MacBook',
      logoText: '',
      patternEarly: '2015–2017: Thunderbolt 2 / MagSafe / HDMI (Direct + Adapter)',
      patternModern: '2018–2026: Dual Thunderbolt 3/4/5 (USB-C) on all models',
      directPath: 'Direct USB-C (Pro/Max chips support 2+ external displays natively)',
      fallbackPath: 'H5 DisplayLink Adapter required for base M1 / M2 / M3 / M4 chips to bypass 1-display limit',
      recommendedProduct: 'S10 Pro + H5 DisplayLink Bundle for base M-series; S10 Pro direct for Pro/Max',
      keyModels: 'MacBook Air (M1-M3), MacBook Pro 14"/16" (M1-M4 Pro/Max)',
    },
    Dell: {
      name: 'Dell',
      logoText: 'DELL',
      patternEarly: '2015–2019: USB 3.0 + HDMI + Mini DisplayPort',
      patternModern: '2020–2026: Dual Thunderbolt 4 / Type-C (DP Alt) + HDMI on XPS & Latitude',
      directPath: 'USB-C to USB-C + HDMI to Type-C (zero adapter plug & play)',
      fallbackPath: 'H5 adapter only if using budget Inspiron with data-only USB-C',
      recommendedProduct: 'ANYKING S10 Pro Tri-Screen (Direct Plug & Play)',
      keyModels: 'XPS 13/15/16, Latitude 5000/7000/9000, Inspiron 14/16 Plus',
    },
    Lenovo: {
      name: 'Lenovo',
      logoText: 'LENOVO',
      patternEarly: '2015–2018: Standard HDMI + USB 3.0 + OneLink dock port',
      patternModern: '2019–2026: Dual full-function USB-C / Thunderbolt 4 + HDMI on ThinkPads',
      directPath: 'Dual USB-C or 1x USB-C + 1x HDMI direct cable connection',
      fallbackPath: 'H5 adapter for IdeaPad models lacking DP Alt Mode on USB-C',
      recommendedProduct: 'ANYKING S10 Pro Tri-Screen',
      keyModels: 'ThinkPad X1 Carbon, T14/T16, Yoga 7/9i, Legion Pro',
    },
    HP: {
      name: 'HP',
      logoText: 'hp',
      patternEarly: '2015–2019: HDMI + USB-A + proprietary barrel charger',
      patternModern: '2020–2026: Thunderbolt 4 / USB-C with DisplayPort + HDMI on Spectre / Envy / EliteBook',
      directPath: '1x USB-C (DP Alt) + 1x HDMI or Dual USB-C on premium tiers',
      fallbackPath: 'H5 DisplayLink adapter for Pavilion budget series with charging-only Type-C',
      recommendedProduct: 'ANYKING S10 Pro Tri-Screen',
      keyModels: 'Spectre x360, Envy 16, EliteBook 840/860, Dragonfly G4',
    },
    ASUS: {
      name: 'ASUS',
      logoText: 'ASUS',
      patternEarly: '2015–2018: HDMI + Mini DisplayPort + USB-A',
      patternModern: '2019–2026: Dual full-featured Type-C (Thunderbolt 4 / USB4) + HDMI on Zenbook & ROG',
      directPath: 'Direct USB-C to USB-C + HDMI to Type-C dual streams',
      fallbackPath: 'H5 adapter for entry Vivobook models with Type-C data-only',
      recommendedProduct: 'ANYKING S10 Pro / P7 Ultra',
      keyModels: 'Zenbook 14 OLED, ROG Zephyrus G14/G16, ProArt Studiobook',
    },
    Acer: {
      name: 'Acer',
      logoText: 'acer',
      patternEarly: '2015–2019: HDMI + USB 3.0',
      patternModern: '2020–2026: Thunderbolt 4 / USB4 on Swift series; HDMI + Type-C on Predator',
      directPath: '1x USB-C (DP Alt) + 1x HDMI direct wiring',
      fallbackPath: 'H5 DisplayLink for Aspire 3/5 with standard USB-A/C ports',
      recommendedProduct: 'ANYKING S10 Pro Tri-Screen',
      keyModels: 'Swift Go 14/16, Predator Helios 16, Aspire 5/7',
    },
    Surface: {
      name: 'Microsoft Surface',
      logoText: '🪟',
      patternEarly: '2015–2018: Mini DisplayPort + Surface Connect',
      patternModern: '2019–2026: Dual USB-C / Thunderbolt 4 (Surface Pro 8–11 & Laptop 4–7)',
      directPath: 'Dual USB-C direct video streams on Pro 8/9/10/11 and Laptop Studio',
      fallbackPath: 'Surface Dock or H5 adapter on legacy Surface Laptop Go',
      recommendedProduct: 'ANYKING S10 Pro Tri-Screen',
      keyModels: 'Surface Pro 8/9/10/11, Surface Laptop 5/6/7, Surface Laptop Studio',
    },
    Samsung: {
      name: 'Samsung',
      logoText: 'SAMSUNG',
      patternEarly: '2015–2019: HDMI + USB 3.0',
      patternModern: '2020–2026: Dual Thunderbolt 4 / USB-C + HDMI on Galaxy Book series',
      directPath: 'Dual USB-C or USB-C + HDMI direct plug & play',
      fallbackPath: 'H5 adapter for entry Galaxy Book Go',
      recommendedProduct: 'ANYKING S10 Pro / P7 Ultra',
      keyModels: 'Galaxy Book 3/4 Pro 360, Galaxy Book 4 Ultra',
    },
    LG: {
      name: 'LG',
      logoText: 'LG',
      patternEarly: '2015–2019: HDMI + USB 3.0',
      patternModern: '2020–2026: Dual Thunderbolt 4 + HDMI on all LG gram models',
      directPath: '100% Direct Plug & Play via Dual USB-C or USB-C + HDMI',
      fallbackPath: 'None needed for modern LG gram (full DP Alt Mode standard)',
      recommendedProduct: 'ANYKING S10 Pro Tri-Screen',
      keyModels: 'LG gram 14/16/17, LG gram SuperSlim, LG gram Style',
    },
  };

  const brandList = Object.keys(brandData);
  const activeData = brandData[selectedBrand] || brandData['Apple'];

  return (
    <section id="brand-patterns" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-12">
      {/* Header */}
      <div className="mb-8 border-b border-[#E5E2DA]/80 pb-5">
        <span className="text-[10px] font-black uppercase tracking-widest text-[#5E6265] block mb-1">
          BRAND REFERENCE
        </span>
        <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#25282B] mb-2">
          Common connection patterns by brand
        </h2>
        <p className="text-xs sm:text-sm text-[#5E6265] font-medium max-w-xl">
          Start with your laptop brand for a quick overview of native port support and fallback paths.
        </p>
      </div>

      {/* Brand Tabs / Chips */}
      <div className="flex flex-wrap gap-2 mb-6">
        {brandList.map((b) => {
          const isSelected = selectedBrand === b;
          return (
            <button
              key={b}
              type="button"
              onClick={() => {
                setSelectedBrand(b);
                if (onBrandClick) onBrandClick(b);
              }}
              className={`px-4 py-2 rounded-2xl text-xs font-black transition-all ${
                isSelected
                  ? 'bg-[#25282B] text-white shadow-vi-subtle'
                  : 'bg-white border border-[#E5E2DA] text-[#25282B] hover:border-[#25282B]'
              }`}
            >
              {b}
            </button>
          );
        })}
      </div>

      {/* Selected Brand Focused Pattern Card */}
      <div className="rounded-3xl border border-[#E5E2DA] bg-white p-6 sm:p-8 shadow-vi-card">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E5E2DA] pb-5 mb-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#25282B] text-white font-black text-sm">
              {activeData.logoText}
            </div>
            <div>
              <h3 className="text-lg font-black text-[#25282B]">
                {activeData.name} Architecture
              </h3>
              <p className="text-xs text-[#5E6265] font-medium">
                {activeData.keyModels}
              </p>
            </div>
          </div>

          <span className="text-[11px] font-black text-[#25282B] bg-[#E6DDCE] px-3 py-1 rounded-full">
            Display Profile
          </span>
        </div>

        {/* 3 Concise Structured Blocks */}
        <div className="grid gap-5 md:grid-cols-3">
          {/* 1. Common Pattern */}
          <div className="space-y-2 rounded-2xl bg-[#FAF9F6] p-5 border border-[#E5E2DA]">
            <span className="text-[10px] font-black uppercase tracking-wider text-[#5E6265] block">
              Common Pattern
            </span>
            <div className="space-y-1.5 text-xs text-[#25282B] font-medium leading-relaxed">
              <p className="text-[11px] text-[#5E6265]">{activeData.patternEarly}</p>
              <p className="font-bold text-[#25282B]">{activeData.patternModern}</p>
            </div>
          </div>

          {/* 2. Best Direct Path */}
          <div className="space-y-2 rounded-2xl bg-[#FAF9F6] p-5 border border-[#E5E2DA]">
            <span className="text-[10px] font-black uppercase tracking-wider text-[#0F766E] block">
              Best Direct Path
            </span>
            <p className="text-xs text-[#25282B] font-bold leading-relaxed">
              {activeData.directPath}
            </p>
          </div>

          {/* 3. Possible Fallback */}
          <div className="space-y-2 rounded-2xl bg-[#FAF9F6] p-5 border border-[#E5E2DA]">
            <span className="text-[10px] font-black uppercase tracking-wider text-[#8C4A15] block">
              Possible Fallback
            </span>
            <p className="text-xs text-[#5E6265] font-medium leading-relaxed">
              {activeData.fallbackPath}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
