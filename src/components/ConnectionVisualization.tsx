import React, { useState } from 'react';
import { Laptop, Monitor, Sparkles, Check, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { StatusType, Language } from '../types';

interface ConnectionVisualizationProps {
  status?: StatusType | 'Direct' | 'Adapter' | 'Manual' | string;
  laptopName?: string;
  portsDesc?: string;
  isAdapterNeeded?: boolean;
  lang?: Language;
}

export const ConnectionVisualization: React.FC<ConnectionVisualizationProps> = ({
  status = '原生直连',
  laptopName = 'Your Laptop',
  portsDesc = '2x Thunderbolt 4 / USB-C DP Alt Mode + 1x HDMI',
  isAdapterNeeded = false,
  lang = 'en',
}) => {
  const [activePreset, setActivePreset] = useState<'tri-screen' | 'dual-screen'>('tri-screen');

  const isDirect = !isAdapterNeeded && status !== '需DisplayLink' && status !== '需扩展坞';
  const isAdapter = isAdapterNeeded || status === '需DisplayLink' || status === '需扩展坞';

  return (
    <div id="connection-diagram" className="w-full select-none">
      {/* Section Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 border-b border-[#E5E2DA]/60 pb-3">
        <div>
          <span className="text-[10px] font-black uppercase tracking-widest text-[#5E6265] block mb-1">
            WIRING ARCHITECTURE
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-[#25282B] tracking-tight">
            Your Connection
          </h3>
        </div>

        {/* Live Status Badge in Signal Teal */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-3 py-1 bg-[#14B8A6]/10 text-[#0F766E] rounded-full border border-[#14B8A6]/30 text-xs font-black">
            <span className="h-2 w-2 rounded-full bg-[#14B8A6] animate-pulse"></span>
            <span>CONNECTED</span>
          </div>

          <div className="hidden sm:flex items-center bg-[#F6F4EF] p-1 rounded-xl border border-[#E5E2DA] text-xs font-bold">
            <button
              type="button"
              onClick={() => setActivePreset('tri-screen')}
              className={`px-2.5 py-1 rounded-lg transition ${
                activePreset === 'tri-screen'
                  ? 'bg-[#25282B] text-white shadow-xs'
                  : 'text-[#5E6265] hover:text-[#25282B]'
              }`}
            >
              Tri-Screen (S10 Pro)
            </button>
            <button
              type="button"
              onClick={() => setActivePreset('dual-screen')}
              className={`px-2.5 py-1 rounded-lg transition ${
                activePreset === 'dual-screen'
                  ? 'bg-[#25282B] text-white shadow-xs'
                  : 'text-[#5E6265] hover:text-[#25282B]'
              }`}
            >
              Dual-Screen (P7)
            </button>
          </div>
        </div>
      </div>

      {/* Main Dynamic Graphic Canvas */}
      <div className="relative overflow-hidden rounded-3xl border border-[#E5E2DA] bg-gradient-to-b from-[#FAF9F6] to-white p-5 sm:p-8 shadow-vi-card">
        {/* Connection Scheme Header */}
        <div className="flex items-center justify-between text-xs mb-6 pb-3 border-b border-[#E5E2DA]/60">
          <div className="flex items-center gap-2">
            <span className="font-bold text-[#5E6265]">Active Route:</span>
            <span className="font-black text-[#25282B]">
              {isAdapter
                ? 'Route B: Native Video Line + H5 DisplayLink Expansion'
                : 'Route A: Dual Native High-Speed Video Streams'}
            </span>
          </div>
          <span className="text-[11px] font-mono text-[#5E6265]">1080P FHD @ 60Hz</span>
        </div>

        {/* Interactive Desktop Wiring Flow: Laptop -> Splitter Lines -> Screen 1 & Screen 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* 1. Host Laptop Card (Cols 1-4) */}
          <div className="lg:col-span-4 flex flex-col items-center bg-white rounded-2xl p-5 border border-[#E5E2DA] shadow-vi-subtle">
            <div className="flex items-center justify-between w-full mb-3">
              <span className="text-[10px] font-black uppercase tracking-wider text-[#5E6265]">
                HOST COMPUTER
              </span>
              <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
            </div>

            {/* Laptop Render */}
            <div className="relative w-full max-w-[220px] aspect-[16/10] rounded-xl bg-[#25282B] border-2 border-[#25282B] p-2 flex flex-col justify-between shadow-md mb-2">
              <div className="flex justify-between text-[7px] text-[#C8CBCB] font-bold">
                <span>GPU Master</span>
                <span className="text-[#14B8A6]">READY</span>
              </div>
              <div className="text-center my-auto">
                <Laptop className="h-6 w-6 text-white mx-auto mb-1 opacity-90" />
                <span className="text-[10px] font-black text-white line-clamp-1">
                  {laptopName}
                </span>
              </div>
              <div className="flex justify-between text-[7px] text-[#C8CBCB] font-mono">
                <span>Display 1 (Host)</span>
                <span>Native</span>
              </div>
            </div>
            {/* Base */}
            <div className="w-[85%] h-2 bg-[#9CA3AF] rounded-b-md shadow-xs mb-3"></div>

            {/* Highlighted Port Outputs */}
            <div className="w-full space-y-1.5 pt-2 border-t border-[#E5E2DA] text-[11px]">
              <div className="flex items-center justify-between bg-[#F6F4EF] px-2.5 py-1.5 rounded-lg">
                <span className="font-bold text-[#25282B]">Port 1: USB-C (DP Alt)</span>
                <span className="text-[9px] font-black bg-[#14B8A6]/20 text-[#0F766E] px-1.5 py-0.5 rounded">
                  Line 1
                </span>
              </div>

              <div className="flex items-center justify-between bg-[#F6F4EF] px-2.5 py-1.5 rounded-lg">
                <span className="font-bold text-[#25282B]">
                  {isAdapter ? 'Port 2: USB-A / C (H5)' : 'Port 2: HDMI / Type-C'}
                </span>
                <span className="text-[9px] font-black bg-[#E6DDCE] text-[#25282B] px-1.5 py-0.5 rounded">
                  Line 2
                </span>
              </div>
            </div>
          </div>

          {/* 2. Routing Lines & Adapters (Cols 5-7) */}
          <div className="lg:col-span-4 flex flex-col justify-around h-full py-4 space-y-4">
            {/* Cable Path 1 */}
            <div className="relative bg-white rounded-2xl p-4 border border-[#E5E2DA] shadow-vi-subtle">
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="text-[10px] font-black text-[#25282B] uppercase tracking-wider">
                  Top Cable Route
                </span>
                <span className="text-[9px] font-bold text-[#0F766E] bg-[#14B8A6]/10 px-2 py-0.5 rounded-full">
                  Direct USB-C
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-1.5 flex-1 bg-gradient-to-r from-[#25282B] via-[#14B8A6] to-[#25282B] rounded-full" />
                <span className="text-[10px] font-mono font-black text-[#25282B] shrink-0">
                  Video + Power
                </span>
                <div className="h-1.5 flex-1 bg-gradient-to-r from-[#25282B] via-[#14B8A6] to-[#25282B] rounded-full" />
              </div>
              <p className="text-[10px] text-[#5E6265] mt-2 font-medium">
                Standard USB-C to USB-C full-function cable carries direct display & power.
              </p>
            </div>

            {/* Cable Path 2 */}
            <div className="relative bg-white rounded-2xl p-4 border border-[#E5E2DA] shadow-vi-subtle">
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="text-[10px] font-black text-[#25282B] uppercase tracking-wider">
                  Bottom Cable Route
                </span>
                <span className="text-[9px] font-bold text-[#25282B] bg-[#E6DDCE] px-2 py-0.5 rounded-full">
                  {isAdapter ? 'H5 DisplayLink Adapter' : 'HDMI to Type-C'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-1.5 flex-1 bg-gradient-to-r from-[#25282B] via-[#5E6265] to-[#25282B] rounded-full" />
                <span className="text-[10px] font-mono font-black text-[#25282B] shrink-0">
                  {isAdapter ? 'USB → Video Chip' : 'HDMI Signal'}
                </span>
                <div className="h-1.5 flex-1 bg-gradient-to-r from-[#25282B] via-[#5E6265] to-[#25282B] rounded-full" />
              </div>
              <p className="text-[10px] text-[#5E6265] mt-2 font-medium">
                {isAdapter
                  ? 'Anyking H5 converts USB data to dedicated 1080P video output without GPU limit.'
                  : 'HDMI provides clean native video stream directly into the secondary panel.'}
              </p>
            </div>
          </div>

          {/* 3. ANYKING Displays (Cols 8-12) */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {/* Screen 1 (Left Wing) */}
            <div className="bg-white rounded-2xl p-4 border border-[#E5E2DA] shadow-vi-subtle flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-16 bg-[#25282B] rounded-lg border border-[#25282B] p-1 flex flex-col justify-between shadow-xs">
                  <span className="text-[6px] text-[#14B8A6] font-bold">1080P IPS</span>
                  <div className="h-1 w-3/4 bg-[#14B8A6]/60 rounded-full" />
                  <span className="text-[6px] text-white font-mono">SCREEN 1</span>
                </div>
                <div>
                  <h4 className="text-xs font-black text-[#25282B]">Screen 1 (Left Display)</h4>
                  <p className="text-[10px] text-[#5E6265] font-medium">Extended Workspace A</p>
                </div>
              </div>
              <span className="text-[10px] font-black text-[#0F766E] bg-[#14B8A6]/10 px-2.5 py-1 rounded-full">
                Active
              </span>
            </div>

            {/* Screen 2 (Right Wing) */}
            {activePreset === 'tri-screen' && (
              <div className="bg-white rounded-2xl p-4 border border-[#E5E2DA] shadow-vi-subtle flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-16 bg-[#25282B] rounded-lg border border-[#25282B] p-1 flex flex-col justify-between shadow-xs">
                    <span className="text-[6px] text-[#E6DDCE] font-bold">1080P IPS</span>
                    <div className="h-1 w-3/4 bg-[#E6DDCE]/60 rounded-full" />
                    <span className="text-[6px] text-white font-mono">SCREEN 2</span>
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-[#25282B]">Screen 2 (Right Display)</h4>
                    <p className="text-[10px] text-[#5E6265] font-medium">Extended Workspace B</p>
                  </div>
                </div>
                <span className="text-[10px] font-black text-[#0F766E] bg-[#14B8A6]/10 px-2.5 py-1 rounded-full">
                  Active
                </span>
              </div>
            )}

            {/* Power Delivery / Voltage Helper Note */}
            <div className="bg-[#FAF9F6] rounded-xl p-3 border border-[#E5E2DA] flex items-center gap-2 text-[10px] text-[#5E6265] font-medium">
              <Zap className="h-3.5 w-3.5 text-[#25282B] shrink-0" />
              <span>
                Auxiliary USB-A to C power cable is included in box if host laptop outputs &lt;15W.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
