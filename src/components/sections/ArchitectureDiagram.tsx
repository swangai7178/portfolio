/*
 *   Copyright (c) 2026 
 *   All rights reserved.
 */
'use client';

export const ArchitectureDiagram = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-[#0d0d0f] rounded-xl border border-slate-800/50">
      <svg viewBox="0 0 400 200" className="w-full h-auto max-w-[300px]">
        {/* Connection Lines */}
        <path d="M100 100 H300" stroke="#14b8a6" strokeWidth="2" strokeDasharray="4 4" className="animate-[dash_20s_linear_infinite]" />
        
        {/* Frontend Node */}
        <rect x="20" y="70" width="80" height="60" rx="8" fill="#16161a" stroke="#06b6d4" strokeWidth="2" />
        <text x="60" y="105" textAnchor="middle" fill="#06b6d4" fontSize="10" fontWeight="bold">Flutter/Next</text>
        
        {/* Backend Node */}
        <rect x="300" y="70" width="80" height="60" rx="8" fill="#16161a" stroke="#06b6d4" strokeWidth="2" />
        <text x="340" y="105" textAnchor="middle" fill="#06b6d4" fontSize="10" fontWeight="bold">Rails API</text>

        {/* Database Node below */}
        <path d="M340 130 V160" stroke="#14b8a6" strokeWidth="2" />
        <ellipse cx="340" cy="175" rx="30" ry="15" fill="#16161a" stroke="#14b8a6" strokeWidth="2" />
        <text x="340" y="178" textAnchor="middle" fill="#14b8a6" fontSize="8">PostgreSQL</text>
      </svg>
      
      <div className="mt-4 grid grid-cols-2 gap-4 w-full">
        <div className="text-[10px] text-slate-500 border-l border-cyan-500 pl-2">
          <span className="block text-white font-bold">M-PESA DARUJA</span>
          Real-time payment hooks
        </div>
        <div className="text-[10px] text-slate-500 border-l border-cyan-500 pl-2">
          <span className="block text-white font-bold">REDIS CACHE</span>
          Listing availability
        </div>
      </div>
    </div>
  );
};