import React from 'react';
import { Language } from '../types';
import { CableVisualizer } from './CableVisualizer';

interface CableGuideSectionProps {
  lang: Language;
}

export const CableGuideSection: React.FC<CableGuideSectionProps> = ({ lang }) => {
  const cables = [
    {
      key: 'usb-c-to-c',
      connector: 'usb-c-to-c',
      badge: 'Best Direct Connection',
      name: 'USB-C to USB-C Cable',
      useFor: 'High-speed 1080P FHD / 2.5K video, audio, and primary power delivery over a single line.',
      bestWhen: 'Laptops with Thunderbolt 3/4/5 or USB-C DP Alt Mode (e.g. MacBook, Dell XPS, ThinkPad).',
    },
    {
      key: 'hdmi-to-type-c',
      connector: 'hdmi-to-type-c',
      badge: 'HDMI Video Connection',
      name: 'HDMI to Type-C Cable',
      useFor: 'Direct native GPU video output from laptop HDMI port into AnyKing display input.',
      bestWhen: 'Laptops with standard HDMI port + 1x USB-C port for dual screen setups.',
    },
    {
      key: 'h5-hdmi-adapter',
      connector: 'h5-hdmi-adapter',
      badge: 'DisplayLink Expansion',
      name: 'Anyking H5 DisplayLink Adapter',
      useFor: 'Overcomes Apple M1/M2/M3 base single-monitor GPU limit and adds independent video channels via USB.',
      bestWhen: 'Base Apple Silicon MacBooks (M1/M2/M3) or laptops without dual DP Alt Mode ports.',
    },
    {
      key: 'usb-a-to-c',
      connector: 'usb-a-to-c',
      badge: 'Power / Helper Cable',
      name: 'USB-A to USB-C Power Cable',
      useFor: 'Delivers auxiliary 5V/2A or 15W power when laptop port output is insufficient.',
      bestWhen: 'Screen flickers or laptop battery saver limits USB-C power delivery.',
    },
  ];

  return (
    <section id="cable-guide" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-12">
      {/* Header */}
      <div className="mb-8 border-b border-[#E5E2DA]/80 pb-5">
        <span className="text-[10px] font-black uppercase tracking-widest text-[#5E6265] block mb-1">
          CABLE GUIDE
        </span>
        <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#25282B] mb-2">
          See the cable, not just the name.
        </h2>
        <p className="text-xs sm:text-sm text-[#5E6265] font-medium max-w-xl">
          Visual cable references make it easier to choose the right connection for your workspace.
        </p>
      </div>

      {/* 4 Clean Visual Cable Cards (No Duplicate Banners) */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {cables.map((cable) => (
          <div
            key={cable.key}
            className="flex flex-col justify-between rounded-3xl border border-[#E5E2DA] bg-white p-5 shadow-vi-subtle transition-all duration-200 hover:border-[#E6DDCE] hover:shadow-vi-card"
          >
            {/* Cable Graphic */}
            <div className="flex h-40 items-center justify-center rounded-2xl bg-[#FAF9F6] p-4 mb-4 border border-[#E5E2DA]/60">
              <div className="h-full w-full max-w-[170px]">
                <CableVisualizer connector={cable.connector} />
              </div>
            </div>

            {/* Cable Info */}
            <div className="space-y-3 flex-1 flex flex-col justify-between">
              <div>
                <span className="inline-block rounded-full bg-[#E6DDCE] px-2.5 py-0.5 text-[10px] font-black text-[#25282B] mb-2">
                  {cable.badge}
                </span>
                <h3 className="text-sm font-black text-[#25282B]">
                  {cable.name}
                </h3>
              </div>

              <div className="space-y-2 text-xs">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#5E6265] block mb-0.5">
                    Use For
                  </span>
                  <p className="text-[#25282B] text-[11px] leading-relaxed font-medium">
                    {cable.useFor}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#E5E2DA]/60">
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#5E6265] block mb-0.5">
                    Best When
                  </span>
                  <p className="text-[#5E6265] text-[11px] leading-relaxed font-medium">
                    {cable.bestWhen}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
