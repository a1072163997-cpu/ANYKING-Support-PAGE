import React, { useState, useMemo } from 'react';
import {
  ShoppingBag,
  Layers,
  Sparkles,
  ShieldCheck,
  ChevronDown,
  X,
  HelpCircle,
} from 'lucide-react';

import { Language, CartItem, ProductItem } from './types';
import { productsList } from './data/productsData';
import { matchLaptops, matchBrandProfile } from './lib/searchMatcher';

import { HeroHelpCenterShowcase } from './components/HeroHelpCenterShowcase';
import { SelfServiceHubSection } from './components/SelfServiceHubSection';
import { WhichMonitorBanner } from './components/WhichMonitorBanner';
import { DisplayScreensGuideSection } from './components/DisplayScreensGuideSection';
import { SoftwareCenterSection } from './components/SoftwareCenterSection';
import { AskAnykingModal } from './components/AskAnykingModal';
import { ProductsMegaMenu } from './components/ProductsMegaMenu';
import { CartDrawer } from './components/CartDrawer';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  // Modal & Drawers
  const [isProductsMenuOpen, setIsProductsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAskModalOpen, setIsAskModalOpen] = useState(false);
  const [selectedProductModal, setSelectedProductModal] = useState<ProductItem | null>(null);

  // Cart State
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      product: productsList[0],
      quantity: 1,
    },
  ]);

  // Matcher
  const matchedRecords = useMemo(() => {
    return matchLaptops(searchQuery);
  }, [searchQuery]);

  const brandResult = useMemo(() => {
    return matchBrandProfile(searchQuery);
  }, [searchQuery]);

  // Determine progress cable step
  const progressStep = useMemo(() => {
    if (!searchQuery.trim()) return 1;
    if (matchedRecords.length > 0 || brandResult.profile) return 4;
    return 2;
  }, [searchQuery, matchedRecords, brandResult]);

  // Brand Chips (Low interference)
  const brandChips = [
    { label: 'MacBook', query: 'MacBook' },
    { label: 'Dell Inspiron', query: 'Dell Inspiron' },
    { label: 'Lenovo IdeaPad', query: 'IdeaPad' },
    { label: 'ThinkPad', query: 'ThinkPad' },
    { label: 'HP', query: 'HP Spectre' },
    { label: 'ASUS', query: 'ASUS Zenbook' },
    { label: 'Acer', query: 'Acer Swift' },
    { label: 'Surface', query: 'Surface Pro' },
  ];

  const handleChipClick = (chipQuery: string) => {
    setSearchQuery(chipQuery);
    const el = document.getElementById('compatibility-result');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCheckNow = () => {
    const el = document.getElementById('compatibility-result');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleAddToCart = (product: ProductItem) => {
    setCartItems((prev) => {
      const exists = prev.find((item) => item.product.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveCartItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#1F2226] font-sans antialiased flex flex-col selection:bg-[#E6DDCE]">
      {/* ============================================================ */}
      {/* TOP ANNOUNCEMENT TICKER BANNER (Matches Image 1)             */}
      {/* ============================================================ */}
      <div className="bg-[#18191B] text-white text-[11px] font-bold tracking-wider py-2 overflow-hidden border-b border-black/20">
        <div className="flex items-center justify-center gap-6 sm:gap-10 whitespace-nowrap">
          <span className="flex items-center gap-1.5 text-[#FED7AA]">
            <span>⚡</span>
            <span>35% OFF NOW</span>
          </span>
          <span className="text-[#5E6265]">•</span>
          <span className="flex items-center gap-1.5">
            <span className="text-[#FBBF24]">⭐</span>
            <span>1000+ REVIEWS</span>
          </span>
          <span className="text-[#5E6265]">•</span>
          <span className="flex items-center gap-1.5 text-emerald-400">
            <span>📦</span>
            <span>FREE SHIPPING & RETURNS</span>
          </span>
          <span className="hidden md:inline-block text-[#5E6265]">•</span>
          <span className="hidden md:flex items-center gap-1.5 text-[#FED7AA]">
            <span>⚡</span>
            <span>35% OFF NOW</span>
          </span>
          <span className="hidden lg:inline-block text-[#5E6265]">•</span>
          <span className="hidden lg:flex items-center gap-1.5">
            <span className="text-[#FBBF24]">⭐</span>
            <span>1000+ REVIEWS</span>
          </span>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 01. NAVIGATION BAR (Matches Image 1)                         */}
      {/* ============================================================ */}
      <header className="sticky top-0 z-40 bg-[#FAF9F5]/95 backdrop-blur-md border-b border-[#E8E5DD] shadow-xs">
        <div className="mx-auto max-w-[1720px] px-4 sm:px-6 lg:px-10 h-16 flex items-center justify-between">
          {/* Brand Logo matching Image 1 */}
          <div className="flex items-center gap-10">
            <a href="#" className="flex items-center gap-1 group">
              <span className="text-2xl font-black tracking-tight text-[#1A1A1A]">
                Any<span className="text-[#F59E0B]">king</span>
              </span>
            </a>

            {/* Desktop Navigation Links matching Image 1 */}
            <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold text-[#52575C]">
              <button
                type="button"
                onClick={() => setIsProductsMenuOpen(!isProductsMenuOpen)}
                className="flex items-center gap-1 hover:text-[#1A1A1A] transition py-2"
              >
                <span>Products</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-[#888D93] transition-transform duration-200 ${
                    isProductsMenuOpen ? 'rotate-180 text-[#1A1A1A]' : ''
                  }`}
                />
              </button>

              <a
                href="#recommended-products"
                className="py-1 hover:text-[#1A1A1A] transition"
              >
                Amazon
              </a>

              <a
                href="#software-center-section"
                className="py-1 hover:text-[#1A1A1A] transition"
              >
                Software
              </a>

              <a
                href="#brand-patterns"
                className="py-1 hover:text-[#1A1A1A] transition"
              >
                Reviews
              </a>

              <a
                href="#compatibility-hero"
                className="py-1 text-[#1A1A1A] font-bold border-b-2 border-[#1A1A1A]"
              >
                Help Center
              </a>

              <a
                href="#decade-trends"
                className="py-1 hover:text-[#1A1A1A] transition"
              >
                About Us
              </a>

              <button
                type="button"
                onClick={() => setIsAskModalOpen(true)}
                className="py-1 hover:text-[#1A1A1A] transition"
              >
                Contact Us
              </button>
            </nav>
          </div>

          {/* Right Action Bar */}
          <div className="flex items-center gap-3">
            {/* Language Selector matching Image 1: Yellow/Amber EN pill + 日本語 */}
            <div className="flex items-center bg-[#EAE6DD]/70 rounded-full p-0.5 text-xs font-bold text-[#555A60]">
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-3 py-1 rounded-full transition ${
                  lang === 'en' ? 'bg-[#F59E0B] text-white shadow-xs' : 'hover:text-[#1A1A1A]'
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLang('ja')}
                className={`px-3 py-1 rounded-full transition ${
                  lang === 'ja' ? 'bg-[#1A1A1A] text-white shadow-xs' : 'hover:text-[#1A1A1A]'
                }`}
              >
                日本語
              </button>
            </div>

            {/* Login button */}
            <button
              type="button"
              onClick={() => setIsAskModalOpen(true)}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#52575C] hover:text-[#1A1A1A] transition"
            >
              <span>Login</span>
            </button>

            {/* Cart Button with dot badge */}
            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 rounded-xl text-[#1A1A1A] hover:bg-black/5 transition"
              aria-label="View Cart"
            >
              <ShoppingBag className="w-4 h-4" />
              {totalCartCount > 0 && (
                <span className="absolute 0 top-1 right-1 bg-[#EA580C] text-white text-[9px] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center">
                  {totalCartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mega Menu Dropdown */}
        <ProductsMegaMenu
          lang={lang}
          isOpen={isProductsMenuOpen}
          onClose={() => setIsProductsMenuOpen(false)}
          onSelectProduct={(p) => {
            setIsProductsMenuOpen(false);
            setSelectedProductModal(p);
          }}
        />
      </header>

      {/* ============================================================ */}
      {/* 02. HERO HELP CENTER & TRIPLE SCREEN SHOWCASE (Image 1 Style)*/}
      {/* ============================================================ */}
      <section
        id="compatibility-hero"
        className="pt-2 pb-0 bg-[#FAF9F5]"
      >
        <HeroHelpCenterShowcase
          searchQuery={searchQuery}
          onSearchChange={(q) => setSearchQuery(q)}
          onSearchSubmit={handleCheckNow}
          onNavigateToGuide={() => setIsAskModalOpen(true)}
          onNavigateToDiagnostics={() => setIsAskModalOpen(true)}
          onOpenAskModal={() => setIsAskModalOpen(true)}
        />
      </section>

      {/* ============================================================ */}
      {/* 03. CATEGORIZED SELF-SERVICE HUB (Cards Grid from Image)     */}
      {/* ============================================================ */}
      <SelfServiceHubSection
        onOpenAskModal={() => setIsAskModalOpen(true)}
      />

      {/* ============================================================ */}
      {/* 04. WHICH PORTABLE MONITOR IS RIGHT FOR YOU BANNER (Image)   */}
      {/* ============================================================ */}
      <WhichMonitorBanner />

      {/* ============================================================ */}
      {/* 04.5 DUAL DISPLAY SCREENS: COMPATIBILITY & CABLE GUIDE       */}
      {/* ============================================================ */}
      <DisplayScreensGuideSection />

      {/* ============================================================ */}
      {/* 05. ANYKING SOFTWARE CENTER (Display Driver & Desktop Pet)    */}
      {/* ============================================================ */}
      <SoftwareCenterSection
        onOpenAskModal={() => setIsAskModalOpen(true)}
      />

      {/* ============================================================ */}
      {/* 11. FOOTER (Sleek Graphite #25282B)                          */}
      {/* ============================================================ */}
      <footer className="mt-auto bg-[#25282B] text-[#C8CBCB] border-t border-black/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-12">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="md:col-span-2 space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center text-white">
                  <Layers className="w-4 h-4 text-[#E6DDCE]" />
                </div>
                <span className="text-base font-black text-white tracking-tight">
                  ANYKING<span className="text-[#C8CBCB] font-light">SCREEN</span>
                </span>
              </div>
              <p className="text-xs text-[#C8CBCB]/80 max-w-md leading-relaxed font-medium">
                Official Compatibility & Verification Center for Anyking S10 Pro and P7 tri-screen portable monitor extenders. Verified against 140+ modern laptops.
              </p>
              <div className="flex items-center gap-2 text-[11px] text-[#E6DDCE] font-bold pt-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>DisplayLink Certified · 1-Year Global Warranty</span>
              </div>
            </div>

            <div>
              <h4 className="text-[11px] font-black text-white uppercase tracking-wider mb-3">
                Extender Models
              </h4>
              <ul className="text-xs space-y-2 font-medium">
                <li>
                  <button
                    type="button"
                    onClick={() => setSelectedProductModal(productsList[0])}
                    className="hover:text-white transition text-left"
                  >
                    S10 Pro Tri-Screen (14" FHD IPS)
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setSelectedProductModal(productsList[1])}
                    className="hover:text-white transition text-left"
                  >
                    P7 Ultra Dual-Screen (15.6" 2.5K)
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setSelectedProductModal(productsList[2])}
                    className="hover:text-white transition text-left"
                  >
                    H5 DisplayLink Adapter
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-[11px] font-black text-white uppercase tracking-wider mb-3">
                Quick Links
              </h4>
              <ul className="text-xs space-y-2 font-medium">
                <li><a href="#software-center-section" className="hover:text-white transition font-bold text-[#FED7AA]">Software Center (Driver & Pet)</a></li>
                <li><a href="#compatibility-hero" className="hover:text-white transition">Model Matcher</a></li>
                <li><a href="#cable-guide" className="hover:text-white transition">Cable Guide & Diagram</a></li>
                <li><a href="#brand-patterns" className="hover:text-white transition">Brand Patterns</a></li>
                <li><a href="#decade-trends" className="hover:text-white transition">2015–2026 Reference</a></li>
                <li>
                  <button
                    type="button"
                    onClick={() => setIsAskModalOpen(true)}
                    className="hover:text-white transition"
                  >
                    Ask ANYKING
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap justify-between items-center text-[11px] text-[#5E6265] gap-3">
            <p className="text-[#C8CBCB]/60">© {new Date().getFullYear()} AnykingScreen Inc. All rights reserved.</p>
            <div className="flex gap-5 text-[#C8CBCB]/60">
              <a href="#" className="hover:text-white transition">Privacy Policy</a>
              <a href="#" className="hover:text-white transition">Terms of Service</a>
              <a href="#" className="hover:text-white transition">Compatibility Guarantee</a>
            </div>
          </div>
        </div>
      </footer>

      {/* ============================================================ */}
      {/* MODALS & OVERLAYS                                            */}
      {/* ============================================================ */}
      {/* Ask ANYKING Modal */}
      <AskAnykingModal
        isOpen={isAskModalOpen}
        onClose={() => setIsAskModalOpen(false)}
        initialModel={searchQuery}
        lang={lang}
      />

      {/* Product Quick View / Buy Modal */}
      {selectedProductModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-[#25282B]/60 backdrop-blur-xs animate-in fade-in">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#E5E2DA] overflow-hidden">
            <button
              type="button"
              onClick={() => setSelectedProductModal(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-[#5E6265] hover:bg-[#F6F4EF] hover:text-[#25282B] transition"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid sm:grid-cols-2 gap-6 items-center">
              <div className="rounded-2xl bg-[#FAF9F6] p-4 border border-[#E5E2DA] flex items-center justify-center">
                <img
                  src={selectedProductModal.image}
                  alt={selectedProductModal.name}
                  className="w-full max-h-56 object-cover rounded-xl shadow-xs"
                />
              </div>

              <div className="space-y-3.5">
                <div>
                  <span className="inline-block px-2.5 py-0.5 bg-[#E6DDCE] text-[#25282B] rounded-md text-[10px] font-black uppercase tracking-wider mb-1.5">
                    {selectedProductModal.badge || 'Official Flagship'}
                  </span>
                  <h3 className="text-lg font-black text-[#25282B] leading-snug">
                    {selectedProductModal.name}
                  </h3>
                  <p className="text-xs text-[#5E6265] font-medium">
                    {selectedProductModal.tagline}
                  </p>
                </div>

                <div className="flex items-baseline gap-2.5">
                  <span className="text-xl font-black text-[#25282B]">
                    ${selectedProductModal.price}
                  </span>
                  <span className="text-xs font-semibold text-[#5E6265] line-through">
                    ${selectedProductModal.originalPrice}
                  </span>
                  <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md">
                    Save ${selectedProductModal.originalPrice - selectedProductModal.price}
                  </span>
                </div>

                <ul className="text-xs text-[#25282B] space-y-1.5 font-medium border-t border-b border-[#E5E2DA] py-2.5">
                  <li className="flex justify-between">
                    <span className="text-[#5E6265]">Screens:</span>
                    <span className="font-bold">{selectedProductModal.screenSize}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-[#5E6265]">Resolution:</span>
                    <span className="font-bold">{selectedProductModal.resolution}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-[#5E6265]">Panel:</span>
                    <span className="font-bold">{selectedProductModal.panelType}</span>
                  </li>
                </ul>

                <p className="text-[11px] text-[#5E6265] leading-relaxed font-medium">
                  {selectedProductModal.compatibilityNote}
                </p>

                <div className="pt-2 flex gap-2.5">
                  <button
                    type="button"
                    onClick={() => {
                      handleAddToCart(selectedProductModal);
                      setSelectedProductModal(null);
                    }}
                    className="flex-1 py-3 bg-[#25282B] text-white rounded-2xl text-xs font-black hover:bg-black transition shadow-vi-subtle"
                  >
                    Add to Cart · ${selectedProductModal.price}
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedProductModal(null)}
                    className="px-4 py-3 border border-[#E5E2DA] text-[#25282B] rounded-2xl text-xs font-bold hover:bg-[#F6F4EF] transition"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cart Drawer */}
      <CartDrawer
        lang={lang}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveCartItem}
        onCheckout={() => {
          alert('Demo Checkout: Anyking portable monitor order simulated successfully!');
          setIsCartOpen(false);
        }}
      />

      {/* Floating Chat Support Widget (Matching Image 2) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
        <div className="bg-[#25282B] text-white text-xs font-bold px-3.5 py-1.5 rounded-full shadow-lg border border-white/10 animate-bounce duration-1000 flex items-center gap-1.5">
          <span>Hi there</span>
          <span>👋</span>
        </div>
        <button
          type="button"
          onClick={() => setIsAskModalOpen(true)}
          className="w-12 h-12 rounded-full bg-[#EA580C] hover:bg-[#C2410C] text-white flex items-center justify-center shadow-2xl transition hover:scale-105 active:scale-95"
          aria-label="Open support chat"
        >
          <HelpCircle className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
