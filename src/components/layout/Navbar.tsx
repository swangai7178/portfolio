
'use client';

import Link from 'next/link';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-20 border-b border-white/5 bg-[#0a0a0b]/40 backdrop-blur-xl flex items-center shadow-lg">
      <div className="max-w-7xl mx-auto w-full px-6 flex justify-between items-center">
        
    
        <Link href="/" className="font-bold text-xl text-white group">
           SAMUEL<span className="text-[#39ff14]/80 group-hover:text-[#39ff14] transition-colors uppercase">Wangai.</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 font-mono text-[10px] uppercase tracking-[0.2em]">
          {[
            { label: 'Modules', href: '#modules' },
            { label: 'Architecture', href: '#architecture' },
            { label: 'Deployments', href: '#deployments' }
          ].map((link) => (
            <Link key={link.href} href={link.href} className="text-slate-400 hover:text-[#39ff14] transition-all relative group/item">
              <span className="relative z-10">{link.label}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#39ff14] transition-all group-hover/item:w-full" />
            </Link>
          ))}
        </div>

        <Link 
          href="mailto:swangai7178@gmail.com" 
          className="px-6 py-2.5 rounded-full border border-[#39ff14]/30 bg-[#39ff14]/5 text-[#39ff14] font-bold text-xs uppercase tracking-widest hover:bg-[#39ff14] hover:text-black transition-all transform active:scale-95 shadow-[0_0_15px_rgba(57,255,20,0.15)]"
        >
           INITIATE_CONTACT
        </Link>
      </div>
    </nav>
  );
};