import React from 'react';
import { CartItem, Language } from '../types';
import { translations } from '../data/translations';
import { X, Trash2, ShoppingBag, ArrowRight, ShieldCheck, Truck } from 'lucide-react';

interface CartDrawerProps {
  lang: Language;
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  lang,
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
}) => {
  if (!isOpen) return null;

  const isJa = lang === 'ja';
  const isZh = lang === 'zh';

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  const tCart = isJa
    ? {
        title: 'ショッピングカート',
        empty: 'カートは空です',
        emptySub: 'Anyking拡張スクリーンまたはH5アダプタを追加してください。',
        subtotal: '小計',
        shipping: '送料無料',
        freeShippingDesc: '全品送料無料（世界中どこでも発送）',
        checkout: 'チェックアウトに進む',
        guarantee: '30日間返金保証・1年間製品保証',
        close: '閉じる',
      }
    : isZh
    ? {
        title: '购物车',
        empty: '您的购物车是空的',
        emptySub: '快去选购适合您的 Anyking 便携扩展屏或 H5 转接头吧。',
        subtotal: '商品小计',
        shipping: '顺丰/全球免运费',
        freeShippingDesc: '官方现货包邮，支持30天无忧试用',
        checkout: '立即结算下单',
        guarantee: '30天无忧试用 · 1年官方联保 · 极速顺丰包邮',
        close: '关闭',
      }
    : {
        title: 'Your Cart',
        empty: 'Your cart is empty',
        emptySub: 'Explore our tri-screen extenders and DisplayLink adapters.',
        subtotal: 'Subtotal',
        shipping: 'Free Worldwide Shipping',
        freeShippingDesc: 'Free express shipping on all monitor orders',
        checkout: 'Proceed to Checkout',
        guarantee: '30-Day Money-Back Guarantee · 1-Year Official Warranty',
        close: 'Close',
      };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#25282B]/60 backdrop-blur-xs transition-opacity animate-in fade-in"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col animate-in slide-in-from-right duration-200">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-[#E5E2DA] px-6 py-5">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-[#25282B] text-[#E6DDCE]">
                <ShoppingBag className="h-4 w-4" />
              </div>
              <div>
                <h3 className="text-base font-black text-[#25282B] tracking-tight">
                  {tCart.title}
                </h3>
                <span className="text-[11px] font-bold text-[#5E6265]">
                  {cartItems.reduce((sum, item) => sum + item.quantity, 0)} items
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="rounded-full p-2 text-[#5E6265] hover:bg-[#F6F4EF] hover:text-[#25282B] transition"
              aria-label="Close cart"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Cart items list */}
          <div className="flex-1 overflow-y-auto p-5 space-y-3">
            {cartItems.length === 0 ? (
              <div className="flex h-full flex-col items-center justify-center text-center p-6">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-3xl bg-[#F6F4EF] text-[#5E6265] border border-[#E5E2DA]">
                  <ShoppingBag className="h-7 w-7 text-[#25282B]" />
                </div>
                <h4 className="text-base font-black text-[#25282B]">
                  {tCart.empty}
                </h4>
                <p className="mt-1 text-xs text-[#5E6265] max-w-xs leading-relaxed font-medium">
                  {tCart.emptySub}
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="mt-5 rounded-2xl bg-[#25282B] px-6 py-2.5 text-xs font-black text-white hover:bg-black transition"
                >
                  Browse Products
                </button>
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-3.5 rounded-2xl border border-[#E5E2DA] bg-white p-3.5 shadow-vi-subtle transition hover:border-[#25282B]"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="h-16 w-16 shrink-0 rounded-xl object-cover bg-[#F6F4EF]"
                  />
                  <div className="flex flex-1 flex-col justify-between">
                    <div className="space-y-0.5">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-xs font-black text-[#25282B] line-clamp-1">
                          {item.product.name}
                        </h4>
                        <button
                          type="button"
                          onClick={() => onRemoveItem(item.product.id)}
                          className="text-[#5E6265] hover:text-rose-600 transition"
                          title="Remove item"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <p className="text-[10px] font-bold text-[#5E6265]">
                        {item.product.screenSize} · {item.product.panelType}
                      </p>
                    </div>

                    <div className="mt-2 flex items-center justify-between">
                      <div className="flex items-center gap-2 rounded-xl border border-[#E5E2DA] bg-[#F6F4EF] px-2 py-0.5">
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.product.id, -1)}
                          className="text-xs font-bold text-[#5E6265] hover:text-[#25282B] px-1"
                        >
                          -
                        </button>
                        <span className="text-xs font-black text-[#25282B] min-w-4 text-center">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.product.id, 1)}
                          className="text-xs font-bold text-[#5E6265] hover:text-[#25282B] px-1"
                        >
                          +
                        </button>
                      </div>
                      <span className="text-xs font-black text-[#25282B]">
                        ${item.product.price * item.quantity}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Bottom Summary */}
          {cartItems.length > 0 && (
            <div className="border-t border-[#E5E2DA] bg-[#F6F4EF] p-5 space-y-3">
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-bold text-[#5E6265]">
                  <span>{tCart.subtotal}</span>
                  <span className="font-black text-[#25282B]">${subtotal}</span>
                </div>
                <div className="flex justify-between text-xs font-bold text-[#5E6265]">
                  <span className="flex items-center gap-1">
                    <Truck className="h-3.5 w-3.5 text-[#25282B]" />
                    {tCart.shipping}
                  </span>
                  <span className="font-black text-emerald-800">FREE</span>
                </div>
                <div className="flex justify-between text-sm font-black text-[#25282B] pt-2 border-t border-[#E5E2DA]">
                  <span>Total</span>
                  <span className="text-base text-[#25282B]">${subtotal}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={onCheckout}
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#25282B] py-3 text-xs font-black text-white hover:bg-black active:scale-[0.99] transition shadow-vi-subtle"
              >
                <span>{tCart.checkout}</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[10px] font-bold text-[#5E6265]">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-700" />
                <span>{tCart.guarantee}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
