import React, { useState } from 'react';
import { ArrowRight, Package, Wrench, Globe, CheckCircle2, Sparkles } from 'lucide-react';

interface ServiceCardItem {
  id: string;
  category: 'orders' | 'support' | 'community';
  categoryLabel: string;
  title: string;
  underlinedWord?: string;
  description: string;
  buttonText: string;
  badge?: string;
}

interface SelfServiceHubSectionProps {
  onCardAction?: (item: ServiceCardItem) => void;
  onOpenAskModal?: () => void;
}

export const SelfServiceHubSection: React.FC<SelfServiceHubSectionProps> = ({
  onCardAction,
  onOpenAskModal,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'orders' | 'support' | 'community'>('all');
  const [feedbackToast, setFeedbackToast] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Services', icon: Sparkles, count: 13 },
    { id: 'orders', label: 'Orders & Account', icon: Package, count: 6 },
    { id: 'support', label: 'Product Support & Drivers', icon: Wrench, count: 4 },
    { id: 'community', label: 'Services & Community', icon: Globe, count: 3 },
  ];

  const serviceItems: ServiceCardItem[] = [
    // ----------------------------------------------------
    // Category 1: Orders & Account Management (6 items)
    // ----------------------------------------------------
    {
      id: 'my-account',
      category: 'orders',
      categoryLabel: 'Orders & Account',
      title: 'My account',
      underlinedWord: 'account',
      description:
        'Easily manage your orders directly from your customer account (please use the email address registered when ordering).',
      buttonText: 'Login / Register',
    },
    {
      id: 'track-order',
      category: 'orders',
      categoryLabel: 'Orders & Account',
      title: 'Track My Order',
      underlinedWord: 'My Order',
      description:
        "Track your order's progress easily using the email address provided during checkout.",
      buttonText: 'Track my order',
    },
    {
      id: 'edit-order',
      category: 'orders',
      categoryLabel: 'Orders & Account',
      title: 'Edit My Order',
      underlinedWord: 'My Order',
      description:
        "You can modify, cancel, or update items or address in your order as long as it hasn't shipped yet.",
      buttonText: 'Edit my order',
    },
    {
      id: 'return-order',
      category: 'orders',
      categoryLabel: 'Orders & Account',
      title: 'Return My Order',
      underlinedWord: 'Return',
      description:
        'You can handle your returns directly from your customer account — quick, simple, and hassle-free.',
      buttonText: 'Return my order',
    },
    {
      id: 'download-invoice',
      category: 'orders',
      categoryLabel: 'Orders & Account',
      title: 'Download My Invoice',
      underlinedWord: 'Invoice',
      description:
        'Need your invoice? You can easily download it from your customer account whenever you need it.',
      buttonText: 'Download my invoice',
    },
    {
      id: 'credit-rewards',
      category: 'orders',
      categoryLabel: 'Orders & Account',
      title: 'My Credit Rewards',
      underlinedWord: 'Credit Rewards',
      description:
        'After each purchase, you receive 10% back in store credit. Track your credit history anytime from your customer account.',
      buttonText: 'My Credit Rewards',
    },

    // ----------------------------------------------------
    // Category 2: Product Support & Downloads (4 items)
    // ----------------------------------------------------
    {
      id: 'drivers-manuals',
      category: 'support',
      categoryLabel: 'Product Support & Drivers',
      title: 'Drivers, Manuals & Tech Specs',
      underlinedWord: 'Manuals & Tech',
      description:
        'Find all your product resources — including drivers, user manuals, and technical specifications — directly here.',
      buttonText: 'Find my product',
    },
    {
      id: 'helpdesk',
      category: 'support',
      categoryLabel: 'Product Support & Drivers',
      title: 'Helpdesk',
      underlinedWord: 'Helpdesk',
      description:
        "Do you have any unanswered questions? Visit our helpdesk, where you're sure to find what you're looking for.",
      buttonText: 'Visit our Helpdesk',
    },
    {
      id: 'contact-us',
      category: 'support',
      categoryLabel: 'Product Support & Drivers',
      title: 'Contact Us',
      underlinedWord: 'Contact',
      description:
        "If you didn't find the option you were looking for in your account or self-support section, feel free to contact us directly. We're here to help!",
      buttonText: 'Contact us',
    },
    {
      id: 'compare-products',
      category: 'support',
      categoryLabel: 'Product Support & Drivers',
      title: 'Compare Products',
      underlinedWord: 'Products',
      description:
        'Compare our portable monitors to explore technical specifications and find the perfect match.',
      buttonText: 'Compare now',
    },

    // ----------------------------------------------------
    // Category 3: Community & Programs (3 items)
    // ----------------------------------------------------
    {
      id: 'leave-review',
      category: 'community',
      categoryLabel: 'Services & Community',
      title: 'Leave a Review',
      underlinedWord: 'Review',
      description:
        'Join thousands of customers and share your experience by leaving a review of our products.',
      buttonText: 'Leave a Review',
    },
    {
      id: 'affiliate-program',
      category: 'community',
      categoryLabel: 'Services & Community',
      title: 'Affiliate Program',
      underlinedWord: 'Affiliate',
      description:
        'Become an affiliate with ANYKING and start earning by promoting our portable monitors today.',
      buttonText: 'Discover',
    },
    {
      id: 'worldwide-shipping',
      category: 'community',
      categoryLabel: 'Services & Community',
      title: 'Worldwide Shipping',
      underlinedWord: 'Worldwide',
      description:
        'Explore all the countries we deliver to and enjoy fast, secure shipping worldwide.',
      buttonText: 'Explore now',
    },
  ];

  const filteredItems = selectedCategory === 'all'
    ? serviceItems
    : serviceItems.filter((item) => item.category === selectedCategory);

  const handleButtonClick = (item: ServiceCardItem) => {
    if (item.id === 'contact-us' || item.id === 'helpdesk') {
      onOpenAskModal?.();
      return;
    }

    setFeedbackToast(`Opening ${item.title}...`);
    setTimeout(() => setFeedbackToast(null), 3000);
    onCardAction?.(item);
  };

  return (
    <section id="self-service-hub" className="py-12 sm:py-16 bg-[#FAF8F5] relative">
      {/* Dynamic Feedback Toast */}
      {feedbackToast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#202224] text-white px-5 py-3 rounded-2xl shadow-2xl border border-white/10 text-xs font-bold animate-fade-in">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{feedbackToast}</span>
        </div>
      )}

      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header with Category Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10 pb-6 border-b border-[#E8E5DC]">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#A74312] block mb-1">
              Self-Service Hub
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1F2226] tracking-tight">
              Quick Support & Account Center
            </h2>
            <p className="mt-1.5 text-sm sm:text-base text-[#5E6265] max-w-xl">
              Access order management, product resources, downloads, and customer care in one click.
            </p>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id as any)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all shadow-2xs ${
                    isActive
                      ? 'bg-[#1F2226] text-white shadow-sm scale-100'
                      : 'bg-white text-[#5E6265] hover:text-[#1F2226] hover:bg-[#F2EFE9] border border-[#E5E1D8]'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#FBBF24]' : 'text-[#8C9196]'}`} />
                  <span>{cat.label}</span>
                  <span
                    className={`px-1.5 py-0.5 rounded-full text-[10px] font-black ${
                      isActive ? 'bg-white/20 text-white' : 'bg-[#EAE6DD] text-[#5E6265]'
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ============================================================ */}
        {/* 3-COLUMN SERVICE CARDS GRID (Matches Reference Screenshot)    */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E8E5DC] shadow-[0_4px_16px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.06)] hover:border-[#D5D0C5] transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Top Details & Title with Brush Curved Underline */}
              <div>
                {/* Subtle category tag */}
                <span className="text-[10px] font-bold tracking-wider uppercase text-[#8C9196] block mb-2">
                  {item.categoryLabel}
                </span>

                {/* Card Title with decorative warm underline matching screenshot */}
                <div className="relative inline-block mb-3">
                  <h3 className="text-lg sm:text-[19px] font-black text-[#1F2226] tracking-tight group-hover:text-[#A74312] transition-colors">
                    {item.title}
                  </h3>
                  
                  {/* Decorative warm brush underline SVG */}
                  <svg
                    className="absolute -bottom-1 left-0 w-3/4 h-2 text-[#D7A27E] opacity-75 group-hover:opacity-100 transition-opacity"
                    viewBox="0 0 100 10"
                    preserveAspectRatio="none"
                    fill="none"
                  >
                    <path
                      d="M2 6 Q 50 1, 98 7"
                      stroke="currentColor"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                {/* Description Body */}
                <p className="text-xs sm:text-[13px] text-[#555A60] leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              {/* Action Button: Pill Outline with Arrow (Exact match) */}
              <div className="pt-6 mt-4">
                <button
                  type="button"
                  onClick={() => handleButtonClick(item)}
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#202224] text-[#202224] text-xs font-bold bg-transparent hover:bg-[#202224] hover:text-white transition-all duration-200 active:scale-95 group/btn shadow-2xs"
                >
                  <span>{item.buttonText}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
