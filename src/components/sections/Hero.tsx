/*
 * Copyright (c) 2026 Samuel Wangai
 * Systems Architect & Fullstack Engineer
 * Documentation Ref: ARCH-PRT-2026-DARK
 */

'use client';

import Link from 'next/link';

export const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between px-8 md:px-16 py-12 bg-[#0a0a0a] text-[#f2f2f2] overflow-hidden">
      
      {/* 1. STRUCTURAL BACKGROUND (Dark Blueprint / Night-Mode CAD) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Major Axis Lines - Low Opacity White */}
        <div className="absolute left-[5%] top-0 bottom-0 w-[1px] bg-white/[0.03]" />
        <div className="absolute left-[50%] top-0 bottom-0 w-[1px] bg-white/[0.03]" />
        <div className="absolute top-[20%] left-0 right-0 h-[1px] bg-white/[0.03]" />
        
        {/* Technical Grid (Replacing the dot grid for a more "assembled" look) */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        {/* Ambient Dark Depth (Subtle glow, non-hacker) */}
        <div className="absolute top-[-20%] right-[-10%] w-[70%] h-[70%] bg-blue-600/[0.03] rounded-full blur-[120px]" />
      </div>

      {/* 2. HEADER: TECHNICAL METADATA */}
      <div className="relative z-10 flex justify-between items-start font-mono uppercase tracking-[0.2em] text-[10px] border-b border-white/10 pb-6">
        <div className="space-y-1">
          <p className="font-bold text-blue-500">Entry_Point // Home.tsx</p>
          <p className="text-white/40">Loc: 1.2921° S, 36.8219° E</p>
        </div>
        <div className="text-right space-y-1 hidden md:block">
          <p className="font-bold">System_Architecture_V4_Dark</p>
          <p className="text-white/40">Mode: Production // SSL_Active</p>
        </div>
      </div>

      {/* 3. MAIN CONTENT: THE ARCHITECT'S VISION */}
      <div className="relative z-10 max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 flex-grow items-center">
        
        {/* Branding & Mission */}
        <div className="lg:col-span-7 space-y-12">
          <div>
            <h1 className="text-[12vw] md:text-[9rem] font-black leading-[0.8] tracking-tighter uppercase mb-4 text-white">
              Samuel<br />Wangai<span className="text-blue-500">.</span>
            </h1>
            <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 text-white px-4 py-2 text-[10px] font-mono font-bold tracking-[0.3em]">
              <span className="w-1.5 h-1.5 bg-blue-500 animate-pulse rounded-full" />
              SR. SYSTEMS ARCHITECT
            </div>
          </div>

          <div className="max-w-xl space-y-6">
            <p className="text-2xl md:text-3xl font-light leading-snug text-white/70">
              Specializing in <span className="font-bold text-white">High-Concurrency Backend</span> environments and 
              scalable <span className="italic">cross-platform</span> mobile ecosystems.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              {['Rust', 'Go', 'Flutter', 'Ruby on Rails', 'PostgreSQL'].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-white/[0.03] border border-white/10 text-[10px] font-mono font-bold text-white/50 hover:text-blue-400 hover:border-blue-400/50 transition-colors cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action & Specification (Right Column) */}
        <div className="lg:col-span-5 flex flex-col items-start lg:items-end justify-center space-y-12">
          
          {/* Functional Data Card (Monochrome UI) */}
          <div className="w-full max-w-sm bg-white/[0.02] border border-white/10 backdrop-blur-md p-8 rounded-sm">
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-white/5">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-white/40">Core_Capabilities</span>
              <div className="flex gap-1">
                <div className="w-1 h-1 bg-blue-500" />
                <div className="w-1 h-1 bg-white/20" />
                <div className="w-1 h-1 bg-white/20" />
              </div>
            </div>
            
            <ul className="space-y-6 font-mono text-[11px] uppercase tracking-wider">
              <li className="flex justify-between items-start">
                <span className="text-white/30">Infrastructure</span>
                <span className="text-right font-bold text-white">Cloud-Native /<br />Microservices</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-white/30">Security</span>
                <span className="font-bold text-white">OWASP_MASBP Verified</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-white/30">Latency_Target</span>
                <span className="font-bold text-blue-400">{'< 50ms'}</span>
              </li>
            </ul>
          </div>

          {/* Primary Actions */}
          <div className="flex flex-col sm:flex-row gap-0 w-full max-w-sm">
            <Link 
              href="#projects" 
              className="flex-1 h-20 flex items-center justify-center bg-white text-black font-bold text-xs uppercase tracking-[0.2em] transition-all hover:bg-blue-500 hover:text-white"
            >
              Deployments
            </Link>
            <Link 
              href="mailto:swangai7178@gmail.com" 
              className="flex-1 h-20 flex items-center justify-center border border-white/20 text-white font-bold text-xs uppercase tracking-[0.2em] transition-all hover:bg-white hover:text-black"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* 4. FOOTER: SYSTEM SPECS */}
      <div className="relative z-10 flex flex-wrap justify-between items-end gap-8 pt-12 border-t border-white/10">
        <div className="flex gap-12">
          <div className="space-y-1">
            <p className="text-[9px] font-mono text-white/20 uppercase tracking-widest font-bold">Uptime_Protocol</p>
            <p className="text-xs font-mono font-bold text-white">99.999% SLA</p>
          </div>
          <div className="space-y-1">
            <p className="text-[9px] font-mono text-white/20 uppercase tracking-widest font-bold">Architecture_Type</p>
            <p className="text-xs font-mono font-bold text-white">Reactive / Distributed</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="text-right space-y-1">
             <p className="text-[9px] font-mono text-white/20 uppercase tracking-widest font-bold">Current_Stack</p>
             <p className="text-xs font-mono font-bold text-blue-500">RUST_TOKIO // RAILS_7_API</p>
          </div>
        </div>
      </div>

    </section>
  );
};