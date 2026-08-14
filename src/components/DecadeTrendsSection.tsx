import React, { useState } from 'react';
import { DecadeTrend, Language } from '../types';
import { decadeTrends } from '../data/compatibilityData';
import { Calendar, Cpu, ChevronDown, ChevronUp, Table } from 'lucide-react';

interface DecadeTrendsSectionProps {
  lang: Language;
}

export const DecadeTrendsSection: React.FC<DecadeTrendsSectionProps> = ({ lang }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="decade-trends" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-10">
      {/* Collapsed Header Box */}
      <div className="rounded-3xl border border-[#E5E2DA] bg-white p-6 sm:p-8 shadow-vi-subtle transition-all">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#5E6265] block">
              DEEP REFERENCE
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-[#25282B] tracking-tight">
              Need a deeper reference?
            </h3>
            <p className="text-xs sm:text-sm text-[#5E6265] font-medium">
              View common connection trends by laptop brand and manufacturing year (2015–2026).
            </p>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-[#F6F4EF] hover:bg-[#E5E2DA] text-[#25282B] text-xs font-black transition border border-[#E5E2DA] shrink-0"
          >
            <span>{isOpen ? 'Hide Reference Table' : 'View Reference Table'}</span>
            {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </button>
        </div>

        {/* Collapsible Content Table */}
        {isOpen && (
          <div className="mt-6 pt-6 border-t border-[#E5E2DA] overflow-hidden rounded-2xl animate-in fade-in duration-200">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-[#E5E2DA] bg-[#FAF9F6] text-[#5E6265] text-[10px] font-black uppercase tracking-wider">
                    <th className="min-w-[130px] px-5 py-3.5">Brand</th>
                    <th className="min-w-[170px] px-5 py-3.5">2015–2018 (Legacy)</th>
                    <th className="min-w-[170px] px-5 py-3.5">2019–2022 (Transition)</th>
                    <th className="min-w-[170px] px-5 py-3.5">2023–2026 (Modern)</th>
                    <th className="min-w-[180px] px-5 py-3.5">Recommended Setup</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E5E2DA]/60">
                  {decadeTrends.map((row: DecadeTrend, idx) => (
                    <tr
                      key={row.brand}
                      className={`hover:bg-[#F6F4EF]/60 transition ${
                        idx % 2 === 0 ? 'bg-white' : 'bg-[#FAF9F6]'
                      }`}
                    >
                      <td className="px-5 py-4 font-black text-[#25282B] text-xs">
                        {row.brand}
                      </td>
                      <td className="px-5 py-4 text-[#5E6265] font-medium leading-relaxed">
                        {row.early}
                      </td>
                      <td className="px-5 py-4 text-[#5E6265] font-medium leading-relaxed">
                        {row.middle}
                      </td>
                      <td className="px-5 py-4 text-[#25282B] font-bold leading-relaxed">
                        {row.recent}
                      </td>
                      <td className="px-5 py-4">
                        <span className="inline-block rounded-xl border border-[#E5E2DA] bg-[#F6F4EF] px-3 py-1 text-xs font-black text-[#25282B]">
                          {row.adapter}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
