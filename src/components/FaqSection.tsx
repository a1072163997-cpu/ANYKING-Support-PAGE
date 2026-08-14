import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

interface FaqSectionProps {
  lang: Language;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ lang }) => {
  const t = translations[lang].faq;
  const isJa = lang === 'ja';
  const isZh = lang === 'zh';

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqItems = isJa
    ? [
        {
          q: 'なぜS10 ProやP7には2系統の独立した映像出力が必要ですか？',
          a: 'S10 Pro / P7はノートPCの左右に2枚の独立した画面を配置する3画面システムです。本体の画面を点灯させたまま2枚の副屏に異なる内容を表示（異顕）するには、GPUから独立した2系統の映像信号が出力されている必要があります。',
        },
        {
          q: 'USB-Cポートがあれば必ず直接2画面出力できますか？',
          a: 'ポートの形状だけでは判断できません。DisplayPort Alt Mode（映像出力対応）、Thunderbolt 3/4/5、またはUSB4規格が必要です。充電・データ転送専用ポートは映像出力できません。',
        },
        {
          q: 'Apple M1/M2/M3（無印チップ）MacBookで2画面拡張する方法は？',
          a: 'ベースモデルのM1/M2/M3チップは仕様上、外部映像出力が1系統に制限されています。1画面をType-C直接接続、もう1画面を「Anyking H5 DisplayLinkアダプタ（ドライバ要）」で接続することで2画面拡張が可能です。',
        },
        {
          q: 'USB-Aポートから映像出力できますか？',
          a: '標準のUSB-A端子は映像出力非対応ですが、「Anyking H5 DisplayLinkアダプタ」とDisplayLinkドライバを使用すれば、USB-Aから高画質映像を出力できます。',
        },
        {
          q: '画面のちらつき・暗さ・電力不足の解消方法は？',
          a: 'ノートPCのType-C給電（15W未満）が不足している場合に発生します。付属の電源ケーブルで5V/2A以上の外部PD充電器をモニターの給電ポートに接続してください。',
        },
      ]
    : isZh
    ? [
        {
          q: '为什么 Anyking S10 Pro / P7 必须要求电脑提供 2 路独立视频输出？',
          a: 'S10 Pro 和 P7 为左右双扩展屏方案。为了保证笔记本自带屏幕正常点亮的同时，左右两块副屏各自独立显示不同内容（三屏异显），笔记本必须提供 2 个独立的物理视频通道（或借助 DisplayLink 芯片扩展）。',
        },
        {
          q: '只要笔记本有 Type-C 接口就一定能直连点亮吗？',
          a: '不能只看插头形状。Type-C 必须支持 DP Alt Mode 视频输出、雷电 3/4/5 或 USB4 协议。如果只支持数据传输或充电则无法输出画面。若电脑具备 1 个全功能 Type-C + 1 个 HDMI，也可双线直连。',
        },
        {
          q: '苹果 M1 / M2 / M3 基础款芯片（无 Pro/Max）如何点亮双副屏？',
          a: '苹果基础版芯片在硬件层仅开放 1 路原生外接视频。方案为：1 块屏幕通过 Type-C 直连，另 1 块屏幕搭配“Anyking H5 DisplayLink 转换头”并安装官方驱动即可实现左右独立异显。',
        },
        {
          q: '普通 USB-A 接口可以传输视频吗？',
          a: '普通 USB-A 原生不支持视频传输，但配合内置 DisplayLink 独立显卡芯片的 Anyking H5 转接头并安装驱动后，即可将 USB-A 接口转换为高清晰度独立视频通道。',
        },
        {
          q: '副屏出现闪烁、黑屏或供电不足如何解决？',
          a: '通常是由于笔记本接口输出功率不足导致。只需使用随机附赠的供电线，接入 5V/2A 或 65W PD 独立充电头为屏幕供电，即可稳定点亮。',
        },
      ]
    : [
        {
          q: 'Why do S10 Pro & P7 require two independent video outputs?',
          a: 'Both S10 Pro and P7 are tri-screen workstation solutions that expand your laptop with dual side displays. To keep your host screen active while running two independent extended workspaces, your GPU must deliver two discrete video channels.',
        },
        {
          q: 'Does having USB-C ports guarantee dual-screen plug & play?',
          a: 'No. The physical shape does not confirm video. The port must support DisplayPort Alternate Mode (DP Alt Mode), Thunderbolt 3/4/5, or full USB4. If your laptop has 1x video USB-C + 1x HDMI, you can also connect directly with included cables.',
        },
        {
          q: 'How do base Apple Silicon M1, M2, and M3 MacBooks drive dual screens?',
          a: 'Base Apple M1/M2/M3 chips natively support only 1 external display. To run both screens: connect Screen 1 via native USB-C, and connect Screen 2 via the Anyking H5 DisplayLink adapter with the DisplayLink driver.',
        },
        {
          q: 'Can a standard USB-A port output video?',
          a: 'Standard USB-A cannot output native video directly. However, using our H5 DisplayLink adapter and driver converts any USB-A or USB-C data port into a full 1080P FHD video channel.',
        },
        {
          q: 'What should I do if a screen flickers or lacks power?',
          a: 'Flickering or low brightness indicates that the laptop USB-C port outputs less than 15W. Simply plug a 5V/2A or 65W PD power adapter into the screen auxiliary power port.',
        },
      ];

  return (
    <section id="faq-section" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-12">
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
        <p className="max-w-md text-xs sm:text-sm text-[#5E6265] font-medium">
          {t.subtitle}
        </p>
      </div>

      <div className="mx-auto max-w-4xl space-y-3">
        {faqItems.map((item, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              className="overflow-hidden rounded-3xl border border-[#C8CBCB]/40 bg-white shadow-vi-subtle transition-all duration-150 hover:border-[#25282B]"
            >
              <button
                type="button"
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                className="flex w-full items-center justify-between p-5 sm:p-6 text-left transition hover:bg-[#F6F4EF]/50"
              >
                <span className="flex items-center gap-3 text-sm font-black text-[#25282B] pr-4">
                  <HelpCircle className="h-4 w-4 shrink-0 text-[#25282B]" />
                  {item.q}
                </span>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 text-[#5E6265] transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-[#25282B]' : ''
                  }`}
                />
              </button>
              {isOpen && (
                <div className="border-t border-[#E5E2DA] bg-[#F6F4EF]/60 p-5 sm:p-6 pt-4 text-xs leading-relaxed text-[#5E6265] font-medium">
                  {item.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
