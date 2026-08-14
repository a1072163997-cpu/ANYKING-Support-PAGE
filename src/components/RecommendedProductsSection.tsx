import React from 'react';
import { ProductItem, Language } from '../types';
import { productsList } from '../data/productsData';
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Monitor } from 'lucide-react';

interface RecommendedProductsSectionProps {
  lang: Language;
  isAdapterNeeded?: boolean;
  onSelectProduct: (product: ProductItem) => void;
  onAddToCart: (product: ProductItem) => void;
}

export const RecommendedProductsSection: React.FC<RecommendedProductsSectionProps> = ({
  lang,
  isAdapterNeeded = false,
  onSelectProduct,
  onAddToCart,
}) => {
  // Recommend tailored products: S10 Pro (Flagship Tri-Screen), P7 Ultra (Dual Screen), and H5 Adapter
  const productsToDisplay = isAdapterNeeded
    ? [productsList[0], productsList[2], productsList[1]] // S10 Pro, H5 Adapter, P7
    : [productsList[0], productsList[1], productsList[2]];

  return (
    <section id="recommended-products" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-12">
      {/* Header */}
      <div className="mb-8 border-b border-[#E5E2DA]/80 pb-5">
        <span className="text-[10px] font-black uppercase tracking-widest text-[#5E6265] block mb-1">
          MATCHED HARDWARE
        </span>
        <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#25282B] mb-2">
          Recommended for your laptop
        </h2>
        <p className="text-xs sm:text-sm text-[#5E6265] font-medium max-w-xl">
          Engineered for instant plug & play productivity with your verified port configuration.
        </p>
      </div>

      {/* 1-3 Product Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {productsToDisplay.slice(0, 3).map((p) => {
          return (
            <div
              key={p.id}
              className="flex flex-col justify-between rounded-3xl border border-[#E5E2DA] bg-white p-5 shadow-vi-card transition-all duration-200 hover:-translate-y-1 hover:border-[#25282B]"
            >
              <div className="space-y-4">
                {/* Product Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-[#FAF9F6] border border-[#E5E2DA] flex items-center justify-center p-3">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-full w-full object-cover rounded-xl transition duration-300 hover:scale-105"
                  />
                  {p.badge && (
                    <span className="absolute top-2 left-2 rounded-full bg-[#25282B] px-2.5 py-0.5 text-[9px] font-black text-[#E6DDCE]">
                      {p.badge}
                    </span>
                  )}
                </div>

                {/* Title & Screen Setup */}
                <div>
                  <h3 className="text-base font-black text-[#25282B]">
                    {p.name}
                  </h3>
                  <p className="text-xs text-[#5E6265] font-medium mt-0.5">
                    {p.tagline}
                  </p>
                </div>

                {/* Structured Specs */}
                <div className="space-y-1.5 rounded-2xl bg-[#FAF9F6] p-3 border border-[#E5E2DA] text-xs">
                  <div className="flex justify-between">
                    <span className="text-[#5E6265] text-[11px] font-medium">Screen Setup:</span>
                    <span className="font-bold text-[#25282B]">{p.screenSize} ({p.panelType})</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#5E6265] text-[11px] font-medium">Works with:</span>
                    <span className="font-bold text-[#25282B]">USB-C + HDMI + H5</span>
                  </div>
                </div>

                {/* Consumer Benefit Quote */}
                <p className="text-xs text-[#25282B] font-semibold italic bg-[#F6F4EF] p-2.5 rounded-xl border border-[#E5E2DA]/60">
                  "{p.compatibilityNote}"
                </p>
              </div>

              {/* Price & Action Button */}
              <div className="mt-5 pt-4 border-t border-[#E5E2DA] flex items-center justify-between">
                <div>
                  <span className="text-lg font-black text-[#25282B]">
                    ${p.price}
                  </span>
                  {p.originalPrice && (
                    <span className="ml-2 text-xs text-[#5E6265] line-through">
                      ${p.originalPrice}
                    </span>
                  )}
                </div>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => onSelectProduct(p)}
                    className="inline-flex items-center gap-1 px-4 py-2 bg-[#25282B] text-white rounded-xl text-xs font-black hover:bg-black transition shadow-vi-subtle"
                  >
                    <span>View Product</span>
                    <ArrowRight className="w-3 h-3 text-[#E6DDCE]" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
