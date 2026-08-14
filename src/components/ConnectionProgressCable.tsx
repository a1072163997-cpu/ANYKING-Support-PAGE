import React from 'react';

interface ConnectionProgressCableProps {
  currentStep: number; // 1: Model, 2: Ports, 3: Setup, 4: Result
}

export const ConnectionProgressCable: React.FC<ConnectionProgressCableProps> = ({ currentStep }) => {
  const steps = [
    { id: 1, label: 'MODEL', desc: 'Identify Laptop' },
    { id: 2, label: 'PORTS', desc: 'Verify Channels' },
    { id: 3, label: 'SETUP', desc: 'Cable Routing' },
    { id: 4, label: 'RESULT', desc: 'Ready to Connect' },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto py-6 select-none">
      <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-[#5E6265] mb-2 px-1">
        <span className="flex items-center gap-1.5 text-[#25282B]">
          <span className="h-2 w-2 rounded-full bg-[#25282B]"></span>
          YOUR LAPTOP
        </span>
        <span className="flex items-center gap-1.5 text-[#25282B]">
          ANYKING SCREEN
          <span className={`h-2 w-2 rounded-full ${currentStep >= 4 ? 'bg-[#14B8A6] animate-pulse' : 'bg-[#C8CBCB]'}`}></span>
        </span>
      </div>

      {/* Progress Cable Line */}
      <div className="relative flex items-center justify-between px-2">
        {/* Background Cable Wire */}
        <div className="absolute left-6 right-6 top-1/2 -translate-y-1/2 h-1 bg-[#E5E2DA] rounded-full -z-10" />

        {/* Active Cable Glow Wire */}
        <div
          className="absolute left-6 top-1/2 -translate-y-1/2 h-1 bg-[#25282B] rounded-full -z-10 transition-all duration-500 ease-out"
          style={{
            width: `${Math.min(100, Math.max(0, ((currentStep - 1) / (steps.length - 1)) * 100))}%`,
          }}
        />

        {/* Step Nodes */}
        {steps.map((step) => {
          const isDone = currentStep > step.id;
          const isCurrent = currentStep === step.id;
          const isPending = currentStep < step.id;

          return (
            <div key={step.id} className="flex flex-col items-center group">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black transition-all duration-300 ${
                  isDone
                    ? 'bg-[#25282B] text-white ring-4 ring-[#E6DDCE]'
                    : isCurrent
                    ? 'bg-[#25282B] text-[#E6DDCE] ring-4 ring-[#E5E2DA] scale-110'
                    : 'bg-white text-[#5E6265] border-2 border-[#C8CBCB]'
                }`}
              >
                {isDone ? '✓' : step.id}
              </div>
              <span
                className={`mt-2 text-[10px] font-black tracking-wider transition-colors ${
                  isCurrent || isDone ? 'text-[#25282B]' : 'text-[#5E6265]/60'
                }`}
              >
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
