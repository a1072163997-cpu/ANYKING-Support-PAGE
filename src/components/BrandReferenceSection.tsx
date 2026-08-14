import React from 'react';
import { BrandReference, Language } from '../types';
import { brandReferences } from '../data/compatibilityData';
import { translations } from '../data/translations';
import { Laptop, ArrowRight, ShieldCheck, Zap, RotateCcw } from 'lucide-react';

interface BrandReferenceSectionProps {
  lang: Language;
  onSelectBrand?: (brand: string) => void;
}

const brandModelCountMap: Record<string, string> = {
  Apple: '24+ Models Verified',
  Samsung: '18+ Models Verified',
  Dell: '32+ Models Verified',
  HP: '28+ Models Verified',
  Lenovo: '36+ Models Verified',
  ASUS: '22+ Models Verified',
  Acer: '16+ Models Verified',
  'Microsoft Surface': '14+ Models Verified',
  'LG / Razer': '12+ Models Verified',
};

export const BrandReferenceSection: React.FC<BrandReferenceSectionProps> = ({
  lang,
  onSelectBrand,
}) => {
  const t = translations[lang].brandReference;

  return (
    <section id="brand-reference" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-12">
      {/* Header */}
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-[#E5E2DA] pb-5">
        <div>
          <span className="inline-block px-3 py-1 bg-[#E6DDCE] text-[#25282B] rounded-full text-[10px] font-black uppercase tracking-wider mb-2">
            {t.eyebrow}
          </span>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#25282B]">
            {t.title}
          </h2>
        </div>
        <p className="max-w-xl text-xs sm:text-sm leading-relaxed text-[#5E6265] font-medium">
          {t.subtitle}
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {brandReferences.map((item: BrandReference) => (
          <div
            key={item.brand}
            onClick={() => onSelectBrand?.(item.brand)}
            className="group flex flex-col justify-between rounded-3xl border border-[#C8CBCB]/40 bg-white p-6 shadow-vi-subtle transition-all duration-200 hover:-translate-y-1 hover:border-[#25282B] hover:shadow-vi-card cursor-pointer"
          >
            <div>
              {/* Brand Card Top */}
              <div className="flex items-center justify-between border-b border-[#E5E2DA] pb-3.5 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 bg-[#25282B] text-white rounded-2xl flex items-center justify-center font-black text-xs tracking-wider shadow-xs group-hover:bg-black transition-colors">
                    {item.brand.slice(0, 4).toUpperCase()}
                  </div>
                  <div>
                    <h3 className="font-black text-[#25282B] text-base group-hover:text-black transition-colors">
                      {item.brand}
                    </h3>
                    <p className="text-[10px] text-[#5E6265] font-bold uppercase tracking-wider">
                      {brandModelCountMap[item.brand] || 'Verified Series'}
                    </p>
                  </div>
                </div>
                <span className="p-2 rounded-xl bg-[#F6F4EF] text-[#5E6265] group-hover:text-[#25282B] transition">
                  <Laptop className="h-4 w-4" />
                </span>
              </div>

              {/* Port Summary Chip */}
              <div className="rounded-xl bg-[#F6F4EF] p-2.5 mb-3 border border-[#E5E2DA]">
                <p className="text-[10px] font-black uppercase text-[#5E6265] mb-0.5">Ports</p>
                <p className="text-xs font-mono font-bold text-[#25282B] truncate">{item.commonPorts}</p>
              </div>

              {/* Direct & Fallback Status Pills */}
              <div className="space-y-2 text-xs">
                <div className="rounded-2xl border border-emerald-100 bg-emerald-50/70 p-3">
                  <span className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-emerald-900">
                    <Zap className="h-3 w-3 text-emerald-700" />
                    {t.directPath}
                  </span>
                  <p className="mt-0.5 text-xs text-emerald-950 font-bold leading-relaxed">
                    {item.directPath}
                  </p>
                </div>

                <div className="rounded-2xl border border-[#E6DDCE] bg-[#FAF8F5] p-3">
                  <span className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-[#25282B]">
                    <RotateCcw className="h-3 w-3 text-[#5E6265]" />
                    {t.fallbackPath}
                  </span>
                  <p className="mt-0.5 text-xs text-[#25282B] font-bold leading-relaxed">
                    {item.fallbackPath}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-[#E5E2DA] flex items-center justify-between text-xs font-black text-[#5E6265] group-hover:text-[#25282B] transition">
              <span>Inspect {item.brand} Models</span>
              <ArrowRight className="h-3.5 w-3.5 transform group-hover:translate-x-1 transition" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
