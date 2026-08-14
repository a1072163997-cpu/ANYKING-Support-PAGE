import React, { useState } from 'react';
import { X, Send, ShieldCheck, CheckCircle2, Laptop } from 'lucide-react';
import { Language } from '../types';

interface AskAnykingModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang?: Language;
  initialModel?: string;
}

export const AskAnykingModal: React.FC<AskAnykingModalProps> = ({
  isOpen,
  onClose,
  lang = 'en',
  initialModel = '',
}) => {
  const [model, setModel] = useState(initialModel);
  const [year, setYear] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Auto close after showing confirmation
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-[#25282B]/60 backdrop-blur-xs animate-in fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#E5E2DA]">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#5E6265] hover:bg-[#F6F4EF] hover:text-[#25282B] transition"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-black text-[#25282B]">
              Verification Request Received!
            </h3>
            <p className="text-xs text-[#5E6265] font-medium max-w-sm mx-auto">
              Our hardware engineers will check <strong className="text-[#25282B]">{model || 'your laptop'}</strong> and email you the exact cable routing guide shortly.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-4 px-6 py-2.5 bg-[#25282B] text-white rounded-xl text-xs font-black"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-[#5E6265] block mb-1">
                EXPERT COMPATIBILITY CHECK
              </span>
              <h3 className="text-xl font-black text-[#25282B] tracking-tight">
                Ask ANYKING
              </h3>
              <p className="text-xs text-[#5E6265] font-medium mt-1">
                Tell us your laptop model and we'll check the exact port configuration for dual screen expansion.
              </p>
            </div>

            <div className="space-y-3 pt-2 text-xs">
              <div>
                <label className="font-bold text-[#25282B] block mb-1">
                  Laptop Brand & Exact Model
                </label>
                <input
                  type="text"
                  required
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  placeholder="e.g. Dell XPS 13 9315 / MacBook Air M2 / Lenovo ThinkPad X1 Carbon Gen 10"
                  className="w-full px-4 py-3 rounded-2xl border border-[#E5E2DA] bg-[#FAF9F6] text-[#25282B] font-bold focus:outline-none focus:border-[#25282B]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-[#25282B] block mb-1">
                    Approx. Purchase Year
                  </label>
                  <input
                    type="text"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    placeholder="e.g. 2023"
                    className="w-full px-4 py-3 rounded-2xl border border-[#E5E2DA] bg-[#FAF9F6] text-[#25282B] font-bold focus:outline-none focus:border-[#25282B]"
                  />
                </div>

                <div>
                  <label className="font-bold text-[#25282B] block mb-1">
                    Your Email for Reply
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full px-4 py-3 rounded-2xl border border-[#E5E2DA] bg-[#FAF9F6] text-[#25282B] font-bold focus:outline-none focus:border-[#25282B]"
                  />
                </div>
              </div>
            </div>

            <div className="pt-3">
              <button
                type="submit"
                className="w-full py-3.5 bg-[#25282B] text-white rounded-2xl text-xs font-black hover:bg-black transition shadow-vi-subtle flex items-center justify-center gap-2"
              >
                <span>Send Laptop Model</span>
                <Send className="w-3.5 h-3.5 text-[#E6DDCE]" />
              </button>
            </div>

            <div className="flex items-center justify-center gap-1.5 text-[10px] text-[#5E6265] font-medium pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>100% Free · No marketing spam guarantee</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
