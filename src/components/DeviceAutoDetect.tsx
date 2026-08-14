import React, { useEffect, useState } from 'react';
import { Laptop, Monitor, Globe, Sparkles } from 'lucide-react';
import { Language } from '../types';

interface DeviceAutoDetectProps {
  lang?: Language;
  onApplyDetected?: (hint: string) => void;
}

export const DeviceAutoDetect: React.FC<DeviceAutoDetectProps> = ({ lang = 'en', onApplyDetected }) => {
  const [info, setInfo] = useState({
    os: 'Detecting...',
    browser: 'Browser',
    screenRes: '',
    deviceType: 'Laptop / PC',
    brandHint: '',
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ua = navigator.userAgent;
    let os = 'Windows';
    let brandHint = '';

    if (ua.includes('Macintosh') || ua.includes('Mac OS')) {
      os = 'macOS (Apple Silicon / Intel)';
      brandHint = 'MacBook Pro';
    } else if (ua.includes('Windows')) {
      os = 'Windows 11 / 10';
      brandHint = 'Dell XPS';
    } else if (ua.includes('CrOS')) {
      os = 'ChromeOS';
      brandHint = 'Chromebook';
    } else if (ua.includes('Linux')) {
      os = 'Linux PC';
      brandHint = 'ThinkPad';
    }

    let browser = 'Chrome';
    if (ua.includes('Safari') && !ua.includes('Chrome')) browser = 'Safari';
    else if (ua.includes('Firefox')) browser = 'Firefox';
    else if (ua.includes('Edg')) browser = 'Edge';

    const width = window.screen?.width || window.innerWidth;
    const height = window.screen?.height || window.innerHeight;
    const screenRes = `${width} × ${height}`;

    setInfo({
      os,
      browser,
      screenRes,
      deviceType: 'Laptop / Mobile Workstation',
      brandHint,
    });
  }, []);

  return (
    <div className="mx-auto max-w-2xl mt-4">
      <div className="rounded-2xl border border-[#E5E2DA]/80 bg-white/70 backdrop-blur-xs p-3.5 sm:px-4 sm:py-3 shadow-vi-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-3">
          <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-[#F6F4EF] text-[#25282B] shrink-0 border border-[#E5E2DA]">
            <Laptop className="h-3.5 w-3.5 text-[#25282B]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-black uppercase tracking-wider text-[#5E6265]">
                Detected Device
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
            </div>
            <p className="text-xs font-bold text-[#25282B] flex flex-wrap items-center gap-x-2 gap-y-0.5">
              <span>{info.os}</span>
              <span className="text-[#C8CBCB]">·</span>
              <span className="text-[#5E6265]">{info.browser}</span>
              <span className="text-[#C8CBCB]">·</span>
              <span className="text-[#5E6265] font-mono text-[11px]">{info.screenRes}</span>
            </p>
          </div>
        </div>

        <p className="text-[10px] text-[#5E6265] leading-tight max-w-xs font-medium sm:text-right">
          This helps us narrow the result. Your exact laptop model gives the most accurate answer.
        </p>
      </div>
    </div>
  );
};
