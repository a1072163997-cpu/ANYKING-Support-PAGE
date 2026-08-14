import React from 'react';

interface CableVisualizerProps {
  connector: 'usb-a-to-c' | 'usb-c-to-c' | 'hdmi-to-type-c' | 'h5-hdmi-adapter' | string;
  className?: string;
}

export const CableVisualizer: React.FC<CableVisualizerProps> = ({ connector, className = 'h-full w-full' }) => {
  if (connector === 'usb-a-to-c') {
    return (
      <svg viewBox="0 0 320 180" className={className} role="img" aria-label="USB-A to USB-C Cable diagram">
        <path
          d="M86 62 v52 c0 42 148 42 148 0 V80"
          fill="none"
          stroke="#25282B"
          strokeWidth="8"
          strokeLinecap="round"
        />
        {/* USB-A connector */}
        <rect x="56" y="28" width="60" height="50" rx="6" fill="#25282B" />
        <rect x="61" y="8" width="50" height="24" rx="3" fill="#F6F4EF" stroke="#C8CBCB" strokeWidth="4" />
        <rect x="76" y="16" width="8" height="8" fill="#5E6265" />
        <rect x="96" y="16" width="8" height="8" fill="#5E6265" />
        {/* USB-C connector */}
        <rect x="216" y="65" width="36" height="58" rx="8" fill="#25282B" />
        <rect x="223" y="47" width="22" height="20" rx="5" fill="#E6DDCE" stroke="#C8CBCB" strokeWidth="4" />
      </svg>
    );
  }

  if (connector === 'hdmi-to-type-c') {
    return (
      <svg viewBox="0 0 320 180" className={className} role="img" aria-label="HDMI to Type-C Cable diagram">
        <path
          d="M92 70 v44 c0 42 136 42 136 0 V84"
          fill="none"
          stroke="#25282B"
          strokeWidth="8"
          strokeLinecap="round"
        />
        {/* HDMI connector */}
        <rect x="60" y="20" width="64" height="64" rx="8" fill="#25282B" />
        <rect x="73" y="10" width="38" height="18" rx="3" fill="#F6F4EF" stroke="#C8CBCB" strokeWidth="4" />
        <rect x="78" y="50" width="28" height="4" rx="2" fill="#E6DDCE" />
        <rect x="78" y="60" width="28" height="4" rx="2" fill="#E6DDCE" />
        {/* Type-C connector */}
        <rect x="210" y="70" width="36" height="56" rx="8" fill="#25282B" />
        <rect x="217" y="52" width="22" height="20" rx="5" fill="#E6DDCE" stroke="#C8CBCB" strokeWidth="4" />
      </svg>
    );
  }

  if (connector === 'h5-hdmi-adapter') {
    return (
      <svg viewBox="0 0 320 180" className={className} role="img" aria-label="H5 DisplayLink Adapter diagram">
        <path
          d="M102 88 v34 c0 34 116 34 116 0 V92"
          fill="none"
          stroke="#25282B"
          strokeWidth="8"
          strokeLinecap="round"
        />
        {/* DisplayLink Dongle Box */}
        <rect x="69" y="34" width="66" height="78" rx="10" fill="#25282B" />
        <path d="M84 54 h36 v13 l-6 7 H90 l-6 -7 Z" fill="#F6F4EF" stroke="#C8CBCB" strokeWidth="3" />
        <rect x="88" y="82" width="28" height="4" rx="2" fill="#E6DDCE" />
        <rect x="88" y="92" width="28" height="4" rx="2" fill="#C8CBCB" />
        {/* USB-A / Type-C input end */}
        <rect x="202" y="78" width="36" height="54" rx="8" fill="#25282B" />
        <rect x="209" y="60" width="22" height="20" rx="5" fill="#E6DDCE" stroke="#C8CBCB" strokeWidth="4" />
      </svg>
    );
  }

  // Default: Full featured USB-C to USB-C
  return (
    <svg viewBox="0 0 320 180" className={className} role="img" aria-label="USB-C to USB-C Cable diagram">
      <path
        d="M92 64 v54 c0 40 136 40 136 0 V64"
        fill="none"
        stroke="#25282B"
        strokeWidth="8"
        strokeLinecap="round"
      />
      {/* Type-C Connector 1 */}
      <rect x="74" y="48" width="36" height="58" rx="8" fill="#25282B" />
      <rect x="81" y="30" width="22" height="20" rx="5" fill="#E6DDCE" stroke="#C8CBCB" strokeWidth="4" />
      {/* Type-C Connector 2 */}
      <rect x="210" y="48" width="36" height="58" rx="8" fill="#25282B" />
      <rect x="217" y="30" width="22" height="20" rx="5" fill="#E6DDCE" stroke="#C8CBCB" strokeWidth="4" />
    </svg>
  );
};
