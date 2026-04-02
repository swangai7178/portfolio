/*
 * Copyright (c) 2026 
 * All rights reserved.
 */
'use client';
import { useRive, Layout, Fit, Alignment } from '@rive-app/react-canvas';
import { useState } from 'react';

export const RiveHero = () => {
  const [activeStatus, setActiveStatus] = useState('IDLE');

  const { RiveComponent, rive } = useRive({
    src: '/animations/robot.riv',
    autoplay: true,
    layout: new Layout({
      fit: Fit.Cover, 
      alignment: Alignment.Center,
    }),
  });

  // Helper with Safety Checks to prevent the "find of undefined" error
  const getStateMachineInput = (inputName: string) => {
    if (!rive || !rive.stateMachineNames.length) return null;
    
    const smName = rive.stateMachineNames[0];
    const inputs = rive.stateMachineInputs(smName);
    
    // Safety check: ensure inputs is an array before calling .find
    if (!inputs) return null;
    return inputs.find(i => i.name === inputName);
  };

  const handleAction = (type: 'SUCCESS' | 'FAIL') => {
    const input = getStateMachineInput(type === 'SUCCESS' ? 'success' : 'fail');
    if (input) {
      input.fire();
      setActiveStatus(type === 'SUCCESS' ? 'SYSTEM_OPTIMIZED' : 'LATENCY_DETECTED');
      setTimeout(() => setActiveStatus('IDLE'), 2000);
    }
  };

  return (
    <div className="relative w-full h-full min-h-[500px] bg-[#16161a] overflow-hidden group">
      
      {/* 1. THE ROBOT: Forced to fill with scale and absolute centering */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[120%] h-[120%] transition-transform duration-700 group-hover:scale-110">
          <RiveComponent className="w-full h-full" />
        </div>
      </div>

      {/* 2. TOP TERMINAL BAR */}
      <div className="absolute top-6 left-6 right-6 z-30 flex justify-between items-center pointer-events-none">
        <div className="flex gap-2">
          <div className="w-2 h-2 rounded-full bg-red-500/40" />
          <div className="w-2 h-2 rounded-full bg-yellow-500/40" />
          <div className="w-2 h-2 rounded-full bg-green-500/40" />
        </div>
        <div className="px-3 py-1 rounded bg-black/60 border border-white/10 backdrop-blur-md">
          <p className="text-[10px] font-mono text-cyan-400 uppercase tracking-tighter">
            STATUS: <span className={activeStatus !== 'IDLE' ? 'animate-pulse text-white' : ''}>{activeStatus}</span>
          </p>
        </div>
      </div>

      {/* 3. INTERACTIVE ACTIONS (Floating Right) */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
        <button 
          onMouseEnter={() => {
            const input = getStateMachineInput('is_hands_up');
            if (input) input.value = true;
          }}
          onMouseLeave={() => {
            const input = getStateMachineInput('is_hands_up');
            if (input) input.value = false;
          }}
          className="p-4 rounded-xl bg-black/60 border border-white/10 hover:border-cyan-500/50 backdrop-blur-xl transition-all group/btn"
        >
          <span className="text-[10px] font-mono text-slate-400 group-hover/btn:text-cyan-400 uppercase tracking-widest">Toggle Eyes</span>
        </button>

        <button 
          onClick={() => handleAction('SUCCESS')}
          className="p-4 rounded-xl bg-black/60 border border-white/10 hover:border-green-500/50 backdrop-blur-xl transition-all group/btn"
        >
          <span className="text-[10px] font-mono text-slate-400 group-hover/btn:text-green-400 uppercase tracking-widest">Optimize</span>
        </button>

        <button 
          onClick={() => handleAction('FAIL')}
          className="p-4 rounded-xl bg-black/60 border border-white/10 hover:border-red-500/50 backdrop-blur-xl transition-all group/btn"
        >
          <span className="text-[10px] font-mono text-slate-400 group-hover/btn:text-red-400 uppercase tracking-widest">Sim Error</span>
        </button>
      </div>

      {/* 4. MAIN CTA */}
      <div className="absolute bottom-8 left-8 z-30">
        <a 
          href="mailto:swangai7178@gmail.com" 
          className="bg-white hover:bg-cyan-400 text-black px-8 py-3 rounded-full font-bold transition-all shadow-2xl flex items-center gap-2 text-[10px] uppercase tracking-widest"
        >
          COLLABORATE →
        </a>
      </div>

      {/* Deep Vignette for the "Cinematic" look */}
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_120px_rgba(0,0,0,0.9)] opacity-80" />
    </div>
  );
};