import React, { useState, useMemo } from 'react';
import {
  LaptopRecord,
  Language,
  StatusType,
  RiskLevel,
} from '../types';
import {
  verifiedLaptops,
  statusMap,
  riskMap,
  riskMapJa,
  riskMapZh,
} from '../data/compatibilityData';
import { translations } from '../data/translations';
import {
  Search,
  Filter,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  X,
  Laptop,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Zap,
  RotateCcw,
  Sparkles,
  Usb,
} from 'lucide-react';

interface VerifiedTableProps {
  lang: Language;
  preselectedBrand?: string;
  onSelectLaptop?: (model: string) => void;
}

export const VerifiedTable: React.FC<VerifiedTableProps> = ({
  lang,
  preselectedBrand,
  onSelectLaptop,
}) => {
  const t = translations[lang].databaseTable;
  const isJa = lang === 'ja';
  const isZh = lang === 'zh';

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBrand, setSelectedBrand] = useState<string>(preselectedBrand || 'ALL');
  const [selectedStatus, setSelectedStatus] = useState<string>('ALL');
  const [selectedRisk, setSelectedRisk] = useState<string>('ALL');
  const [currentPage, setCurrentPage] = useState(1);
  const [inspectModalRecord, setInspectModalRecord] = useState<LaptopRecord | null>(null);

  const itemsPerPage = 10;

  // Distinct brand list
  const brandList = useMemo(() => {
    const set = new Set(verifiedLaptops.map((l) => l.brand));
    return Array.from(set).sort();
  }, []);

  // Filtered dataset
  const filteredData = useMemo(() => {
    return verifiedLaptops.filter((item) => {
      if (selectedBrand !== 'ALL' && item.brand !== selectedBrand) return false;
      if (selectedStatus !== 'ALL' && item.status !== selectedStatus) return false;
      if (selectedRisk !== 'ALL' && item.risk !== selectedRisk) return false;
      if (searchQuery.trim().length > 0) {
        const q = searchQuery.toLowerCase().trim();
        const text = `${item.brand} ${item.model} ${item.generation} ${item.ports} ${item.status}`.toLowerCase();
        if (!text.includes(q)) return false;
      }
      return true;
    });
  }, [searchQuery, selectedBrand, selectedStatus, selectedRisk]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage) || 1;

  const currentRecords = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredData.slice(start, start + itemsPerPage);
  }, [filteredData, currentPage]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedBrand('ALL');
    setSelectedStatus('ALL');
    setSelectedRisk('ALL');
    setCurrentPage(1);
  };

  const getRiskText = (risk: RiskLevel) => {
    if (isJa) return riskMapJa[risk] || risk;
    if (isZh) return riskMapZh[risk] || risk;
    return riskMap[risk] || risk;
  };

  const getStatusBadge = (status: StatusType) => {
    const cfg = statusMap[status] || {
      label: status,
      tone: 'neutral',
    };
    switch (cfg.tone) {
      case 'success':
        return (
          <span className="inline-flex items-center gap-1 rounded-full bg-[#25282B] text-[#E6DDCE] px-2.5 py-0.5 text-[11px] font-black border border-[#25282B]">
            <CheckCircle2 className="h-3 w-3 text-[#E6DDCE]" />
            {cfg.label}
          </span>
        );
      case 'warning':
        return (
          <span className="inline-flex items-center gap-1 rounded-full bg-[#FAF2EB] text-[#8C4A15] px-2.5 py-0.5 text-[11px] font-black border border-[#E8D5C4]">
            <RotateCcw className="h-3 w-3 text-[#8C4A15]" />
            {cfg.label}
          </span>
        );
      case 'danger':
        return (
          <span className="inline-flex items-center gap-1 rounded-full bg-[#FDF2F2] text-[#991B1B] px-2.5 py-0.5 text-[11px] font-black border border-[#F87171]/40">
            <XCircle className="h-3 w-3 text-[#991B1B]" />
            {cfg.label}
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 rounded-full bg-[#F6F4EF] text-[#25282B] px-2.5 py-0.5 text-[11px] font-black border border-[#C8CBCB]">
            {cfg.label}
          </span>
        );
    }
  };

  return (
    <section id="verified-database" className="mx-auto max-w-7xl scroll-mt-24 px-4 sm:px-6 lg:px-10 pb-16">
      {/* Header */}
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4 border-b border-[#E5E2DA] pb-5">
        <div>
          <span className="inline-block px-3 py-1 bg-[#E6DDCE] text-[#25282B] rounded-full text-[10px] font-black uppercase tracking-wider mb-2">
            {t.eyebrow}
          </span>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#25282B]">
            {t.title}
          </h2>
        </div>
        <p className="max-w-md text-xs sm:text-sm text-[#5E6265] font-medium">
          {t.subtitle}
        </p>
      </div>

      {/* Filter Control Bar */}
      <div className="mb-4 rounded-3xl border border-[#C8CBCB]/40 bg-white p-4 sm:p-5 shadow-vi-subtle">
        <div className="grid gap-3 md:grid-cols-4">
          {/* Search Input */}
          <div className="relative md:col-span-2">
            <Search className="absolute left-3.5 top-3 h-4 w-4 text-[#5E6265]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              placeholder={t.searchPlaceholder}
              className="w-full rounded-2xl border border-[#E5E2DA] bg-[#F6F4EF] py-2.5 pl-10 pr-8 text-xs font-bold text-[#25282B] placeholder:text-[#5E6265]/60 focus:border-[#25282B] focus:bg-white focus:outline-none transition"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-3 text-[#5E6265] hover:text-[#25282B]"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* Brand Filter */}
          <select
            value={selectedBrand}
            onChange={(e) => {
              setSelectedBrand(e.target.value);
              setCurrentPage(1);
            }}
            className="rounded-2xl border border-[#E5E2DA] bg-[#F6F4EF] px-3.5 py-2.5 text-xs font-bold text-[#25282B] focus:border-[#25282B] focus:bg-white focus:outline-none"
          >
            <option value="ALL">{t.allBrands}</option>
            {brandList.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>

          {/* Status Filter */}
          <select
            value={selectedStatus}
            onChange={(e) => {
              setSelectedStatus(e.target.value);
              setCurrentPage(1);
            }}
            className="rounded-2xl border border-[#E5E2DA] bg-[#F6F4EF] px-3.5 py-2.5 text-xs font-bold text-[#25282B] focus:border-[#25282B] focus:bg-white focus:outline-none"
          >
            <option value="ALL">{t.allStatuses}</option>
            {Object.keys(statusMap).map((k) => (
              <option key={k} value={k}>
                {statusMap[k as StatusType]?.label || k}
              </option>
            ))}
          </select>
        </div>

        {/* Results Counter & Reset */}
        <div className="mt-3 flex items-center justify-between border-t border-[#E5E2DA] pt-3 text-[11px] font-bold text-[#5E6265]">
          <span>{t.showingResults(filteredData.length, verifiedLaptops.length)}</span>
          {(searchQuery || selectedBrand !== 'ALL' || selectedStatus !== 'ALL' || selectedRisk !== 'ALL') && (
            <button
              type="button"
              onClick={resetFilters}
              className="text-[#25282B] hover:underline font-black"
            >
              {t.resetFilter}
            </button>
          )}
        </div>
      </div>

      {/* Table Container */}
      <div className="overflow-hidden rounded-3xl border border-[#C8CBCB]/40 bg-white shadow-vi-subtle">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-[#E5E2DA] bg-[#F6F4EF] text-[#5E6265] text-[10px] font-black uppercase tracking-wider">
                <th className="px-5 py-3.5">{t.colModel}</th>
                <th className="px-5 py-3.5">{t.colGen}</th>
                <th className="px-5 py-3.5">{t.colPorts}</th>
                <th className="px-5 py-3.5">{t.colStatus}</th>
                <th className="px-5 py-3.5">{t.colRisk}</th>
                <th className="px-5 py-3.5 text-right">{t.colAction}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E5E2DA]/60">
              {currentRecords.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-[#5E6265]">
                    <Laptop className="mx-auto h-8 w-8 text-[#C8CBCB] mb-2" />
                    <p className="font-bold">{t.noResults}</p>
                    <button
                      type="button"
                      onClick={resetFilters}
                      className="mt-3 text-xs font-black text-[#25282B] underline"
                    >
                      {t.resetFilter}
                    </button>
                  </td>
                </tr>
              ) : (
                currentRecords.map((item) => (
                  <tr
                    key={item.id}
                    className="hover:bg-[#F6F4EF]/70 transition-colors"
                  >
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-2">
                        <span className="rounded bg-[#F6F4EF] px-1.5 py-0.5 text-[10px] font-black text-[#25282B] border border-[#E5E2DA]">
                          {item.brand}
                        </span>
                        <span className="font-black text-[#25282B] text-xs">
                          {item.model}
                        </span>
                      </div>
                    </td>

                    <td className="px-5 py-3.5 text-[#5E6265] font-semibold text-[11px]">
                      {item.generation}
                    </td>

                    <td className="px-5 py-3.5 font-mono text-[11px] text-[#25282B] max-w-[220px] truncate">
                      {item.ports}
                    </td>

                    <td className="px-5 py-3.5">
                      {getStatusBadge(item.status)}
                    </td>

                    <td className="px-5 py-3.5">
                      <span className="text-[11px] font-bold text-[#5E6265]">
                        {getRiskText(item.risk)}
                      </span>
                    </td>

                    <td className="px-5 py-3.5 text-right">
                      <button
                        type="button"
                        onClick={() => {
                          setInspectModalRecord(item);
                          onSelectLaptop?.(item.model);
                        }}
                        className="rounded-xl bg-[#F6F4EF] hover:bg-[#25282B] hover:text-white px-3 py-1.5 text-[11px] font-black text-[#25282B] border border-[#E5E2DA] transition"
                      >
                        {t.colAction}
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Bar */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between border-t border-[#E5E2DA] px-5 py-3 bg-[#F6F4EF]/50 text-xs font-bold text-[#5E6265]">
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <div className="flex gap-1.5">
              <button
                type="button"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                className="rounded-xl border border-[#E5E2DA] bg-white p-2 text-[#25282B] disabled:opacity-30 hover:bg-[#25282B] hover:text-white transition"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                className="rounded-xl border border-[#E5E2DA] bg-white p-2 text-[#25282B] disabled:opacity-30 hover:bg-[#25282B] hover:text-white transition"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Record Inspect Modal */}
      {inspectModalRecord && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-[#25282B]/60 backdrop-blur-xs animate-in fade-in">
          <div className="relative w-full max-w-lg rounded-3xl bg-white p-6 shadow-2xl border border-[#C8CBCB]/40">
            <button
              type="button"
              onClick={() => setInspectModalRecord(null)}
              className="absolute right-5 top-5 rounded-full p-2 text-[#5E6265] hover:bg-[#F6F4EF] hover:text-[#25282B]"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="rounded-lg bg-[#F6F4EF] px-2.5 py-1 text-xs font-black text-[#25282B] border border-[#E5E2DA]">
                {inspectModalRecord.brand}
              </span>
              <span className="text-xs text-[#5E6265] font-bold">
                {inspectModalRecord.generation}
              </span>
            </div>

            <h3 className="text-xl font-black text-[#25282B]">
              {inspectModalRecord.model}
            </h3>

            <div className="mt-4 space-y-3 text-xs">
              <div className="rounded-2xl bg-[#F6F4EF] p-3.5 border border-[#E5E2DA]">
                <p className="text-[10px] font-black uppercase text-[#5E6265]">Verdict</p>
                <div className="mt-1">{getStatusBadge(inspectModalRecord.status)}</div>
              </div>

              <div className="rounded-2xl bg-[#F6F4EF] p-3.5 border border-[#E5E2DA]">
                <p className="text-[10px] font-black uppercase text-[#5E6265]">Ports</p>
                <p className="mt-1 font-mono font-bold text-[#25282B]">{inspectModalRecord.ports}</p>
              </div>

              <div className="rounded-2xl bg-[#F6F4EF] p-3.5 border border-[#E5E2DA]">
                <p className="text-[10px] font-black uppercase text-[#5E6265]">Notes</p>
                <p className="mt-1 font-medium text-[#5E6265] leading-relaxed">
                  {inspectModalRecord.notes}
                </p>
              </div>

              {inspectModalRecord.sourceUrl && (
                <a
                  href={inspectModalRecord.sourceUrl.split(/\s*\|\s*/)[0]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-2xl bg-[#25282B] p-3 text-white font-black hover:bg-black transition"
                >
                  <span>{t.viewDetail}</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
