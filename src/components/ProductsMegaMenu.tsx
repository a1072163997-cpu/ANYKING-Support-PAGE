import React, { useState } from 'react';
import { ProductItem, Language } from '../types';
import { productsList } from '../data/productsData';
import { ArrowRight, Monitor, Sparkles, Layers, ShieldCheck } from 'lucide-react';

interface ProductsMegaMenuProps {
  lang: Language;
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: ProductItem) => void;
}

export const ProductsMegaMenu: React.FC<ProductsMegaMenuProps> = ({
  lang,
  isOpen,
  onClose,
  onSelectProduct,
}) => {
  const [activeTab, setActiveTab] = useState<'triple' | 'dual' | 'quad'>('triple');

  if (!isOpen) return null;

  const isJa = lang === 'ja';
  const isZh = lang === 'zh';

  const menuText = isJa
    ? {
        products: '製品一覧',
        dual: '2画面拡張 (Dual)',
        triple: '3画面拡張 (Triple)',
        quad: '4画面拡張 (Quad)',
        popular: '互換性データベース',
        shopAll: 'すべて見る',
        comingSoon: '近日公開',
        comingSoonBody: '4画面ワークスペース向けの新製品を準備中です。',
      }
    : isZh
    ? {
        products: '全部产品',
        dual: '双屏便携扩展屏 (Dual)',
        triple: '三屏折叠扩展屏 (Triple)',
        quad: '四屏旗舰工作站 (Quad)',
        popular: '140+ 机型兼容库',
        shopAll: '浏览全部在售产品',
        comingSoon: '即将发布',
        comingSoonBody: '专为多任务设计的 4 屏便携工作站正在筹备中。',
      }
    : {
        products: 'Products',
        dual: 'Dual Extender (Dual)',
        triple: 'Tri-Screen Extender (Triple)',
        quad: 'Quad Display (Quad)',
        popular: 'Compatibility Database',
        shopAll: 'Shop All Products',
        comingSoon: 'Coming Soon',
        comingSoonBody: 'A new 4-screen workstation solution is currently under development.',
      };

  const filteredProducts = productsList.filter((p) => {
    if (activeTab === 'dual') return p.category === 'dual';
    if (activeTab === 'triple') return p.category === 'triple';
    return false;
  });

  return (
    <div
      id="products-mega-menu"
      className="absolute left-0 top-full z-50 w-full border-b border-[#E5E2DA] bg-white/98 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-7">
        <div className="grid gap-6 lg:grid-cols-[240px_1fr]">
          {/* Category Tabs */}
          <div className="space-y-1.5 border-r border-[#E5E2DA] pr-5">
            <button
              type="button"
              onClick={() => setActiveTab('triple')}
              className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-xs font-black transition ${
                activeTab === 'triple'
                  ? 'bg-[#25282B] text-white shadow-xs'
                  : 'text-[#25282B] hover:bg-[#F6F4EF]'
              }`}
            >
              <span className="flex items-center gap-2.5">
                <Layers className="h-4 w-4 text-[#E6DDCE]" />
                {menuText.triple}
              </span>
              <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
                activeTab === 'triple' ? 'bg-white/20 text-[#E6DDCE]' : 'bg-[#E6DDCE] text-[#25282B]'
              }`}>
                S10 Pro
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('dual')}
              className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-xs font-black transition ${
                activeTab === 'dual'
                  ? 'bg-[#25282B] text-white shadow-xs'
                  : 'text-[#25282B] hover:bg-[#F6F4EF]'
              }`}
            >
              <span className="flex items-center gap-2.5">
                <Monitor className="h-4 w-4 text-[#C8CBCB]" />
                {menuText.dual}
              </span>
              <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
                activeTab === 'dual' ? 'bg-white/20 text-white' : 'bg-[#F6F4EF] text-[#5E6265]'
              }`}>
                A6 / S13
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('quad')}
              className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-xs font-black transition ${
                activeTab === 'quad'
                  ? 'bg-[#25282B] text-white shadow-xs'
                  : 'text-[#25282B] hover:bg-[#F6F4EF]'
              }`}
            >
              <span className="flex items-center gap-2.5">
                <Sparkles className="h-4 w-4 text-[#E6DDCE]" />
                {menuText.quad}
              </span>
              <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
                activeTab === 'quad' ? 'bg-white/20 text-[#E6DDCE]' : 'bg-[#E6DDCE]/60 text-[#25282B]'
              }`}>
                New
              </span>
            </button>

            <div className="pt-4 mt-3 border-t border-[#E5E2DA]">
              <a
                href="#verified-database"
                onClick={onClose}
                className="flex items-center justify-between rounded-2xl border border-[#E5E2DA] bg-[#F6F4EF] p-3 text-xs font-black text-[#25282B] transition hover:border-[#25282B]"
              >
                <span>{menuText.popular}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Products Content Area */}
          <div>
            {activeTab === 'quad' ? (
              <div className="flex h-56 flex-col items-center justify-center rounded-3xl border border-dashed border-[#C8CBCB] bg-[#F6F4EF]/50 p-8 text-center">
                <Sparkles className="mb-2 h-8 w-8 text-[#25282B] animate-pulse" />
                <h4 className="text-base font-black text-[#25282B]">
                  {menuText.comingSoon}
                </h4>
                <p className="mt-1 max-w-sm text-xs text-[#5E6265] font-medium">
                  {menuText.comingSoonBody}
                </p>
              </div>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {filteredProducts.map((p) => (
                  <div
                    key={p.id}
                    onClick={() => {
                      onSelectProduct(p);
                      onClose();
                    }}
                    className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-[#C8CBCB]/40 bg-white p-3.5 shadow-vi-subtle transition hover:border-[#25282B] hover:shadow-vi-card cursor-pointer"
                  >
                    <div className="space-y-2.5">
                      <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-[#F6F4EF]">
                        <img
                          src={p.image}
                          alt={p.name}
                          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                        />
                        {p.badge && (
                          <span className="absolute left-2 top-2 rounded-full bg-[#25282B]/90 px-2 py-0.5 text-[9px] font-black text-white backdrop-blur-xs">
                            {p.badge}
                          </span>
                        )}
                      </div>

                      <div>
                        <h4 className="text-xs font-black text-[#25282B] group-hover:text-black transition">
                          {p.name}
                        </h4>
                        <p className="mt-0.5 line-clamp-1 text-[11px] text-[#5E6265] font-medium">
                          {p.tagline}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 text-xs">
                        <span className="font-black text-[#25282B]">
                          ${p.price}
                        </span>
                        {p.originalPrice && (
                          <span className="text-[#5E6265] line-through text-[10px]">
                            ${p.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="mt-2.5 pt-2 border-t border-[#E5E2DA] flex items-center justify-between text-[10px] font-black text-[#25282B]">
                      <span>View Specs</span>
                      <ArrowRight className="h-3 w-3 transform group-hover:translate-x-1 transition" />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
