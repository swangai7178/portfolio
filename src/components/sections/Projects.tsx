/*
 * Copyright (c) 2026 Samuel Wangai
 * Module: Master_Project_Registry_V5
 * Status: Production_Verified // Source: Samuel Wangai Portfolio
 */

'use client';

import Link from 'next/link';

const registry = [
  {
    id: '01',
    title: 'QuadVendor Ecosystem',
    role: 'Lead Fullstack Architect',
    desc: 'Unified POS & E-commerce suite. Engineered a high-performance Next.js web dashboard and a Flutter mobile companion for real-time inventory and sales orchestration.',
    stack: ['Next.js', 'Flutter', 'TypeScript', 'Firebase', 'RESTful APIs'],
    status: 'PRODUCTION',
    link: '#'
  },
  {
    id: '02',
    title: 'Sahibu360 Platform',
    role: 'Systems Engineer',
    desc: 'Dual-node commerce platform (Web & Mobile). Implemented secure transaction protocols and real-time order management for a multi-tenant marketplace.',
    stack: ['Next.js', 'Flutter', 'Tailwind CSS', 'Payment Gateways'],
    status: 'STABLE',
    link: '#'
  },
  {
    id: '03',
    title: 'Kenya Counties (OSS)',
    role: 'Author / Maintainer',
    desc: 'The official Flutter package for Kenyan geographical data integration. Verified and published on pub.dev to enhance localized developer workflows.',
    stack: ['Dart', 'Flutter', 'Package Development', 'Pub.dev'],
    status: 'PUBLISHED',
    link: 'https://pub.dev/packages/kenya_counties'
  },
  {
    id: '04',
    title: 'IoT Tracking Software',
    role: 'Systems Developer',
    desc: 'Real-time device monitoring system. Integrated GPS telemetry and analytics streams to provide live insights into hardware nodes.',
    stack: ['Flutter', 'IoT Integration', 'GPS_API', 'Real-time Data'],
    status: 'OPTIMIZED',
    link: '#'
  },
  {
    id: '05',
    title: 'Multiplayer Game Engine',
    role: 'Engine Developer',
    desc: 'Designed and deployed real-time multiplayer environments using Flutter and Firebase, featuring sub-second state sync and global leaderboards.',
    stack: ['Flutter', 'Firebase', 'Cloud Functions', 'Real-time DB'],
    status: 'EXPERIMENTAL',
    link: '#'
  },
  {
    id: '06',
    title: 'Murimi Murango & Advocates',
    role: 'Web Architect',
    desc: 'Professional legal presence for Murimi Murango & Advocates. Optimized for SEO and high-performance lead generation via Next.js.',
    stack: ['Next.js', 'React', 'TypeScript', 'SEO_Optimization'],
    status: 'VERIFIED',
    link: '#'
  },
  {
    id: '07',
    title: 'Smartply Mobile',
    role: 'Fullstack Developer',
    desc: 'Intuitive cross-platform commerce solution. Integrated Ruby on Rails backend with Flutter for a scalable, high-conversion shopping experience.',
    stack: ['Flutter', 'Ruby on Rails', 'PostgreSQL', 'Firebase'],
    status: 'ACTIVE',
    link: '#'
  },
  {
    id: '08',
    title: 'Rising Gamers Web',
    role: 'Frontend Engineer',
    desc: 'Performance-driven community platform for gamers. Features dynamic user profiling and game discovery modules deployed on Vercel.',
    stack: ['Next.js', 'React', 'Tailwind CSS', 'Vercel'],
    status: 'STABLE',
    link: '#'
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="relative w-full py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-white/10 pb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1px] bg-blue-500" />
              <span className="text-[10px] font-mono text-blue-500 uppercase tracking-[0.5em] font-bold">Project_Registry // 2026</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter">
              Selected <span className="text-transparent stroke-text-refined opacity-40">Deployments</span>
            </h2>
          </div>
          <div className="text-right hidden md:block">
            <p className="text-[10px] font-mono text-white/20 uppercase tracking-widest leading-relaxed">
              System_Output: {registry.length} Validated Modules<br />
              Filter: Production_Environment
            </p>
          </div>
        </div>

        {/* Project Manifest List */}
        <div className="space-y-0">
          {registry.map((item) => (
            <div key={item.id} className="group grid grid-cols-1 lg:grid-cols-12 gap-8 py-14 border-b border-white/5 hover:bg-white/[0.01] transition-all px-4">
              <div className="lg:col-span-1 text-2xl font-mono text-white/10 group-hover:text-blue-500/40 transition-colors">
                {item.id}
              </div>

              <div className="lg:col-span-4">
                <h3 className="text-2xl font-bold text-white uppercase group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-[10px] font-mono text-white/30 uppercase tracking-widest mt-1">
                  {item.role}
                </p>
              </div>

              <div className="lg:col-span-4 text-sm text-white/50 font-mono leading-relaxed lowercase">
                {`> ${item.desc}`}
              </div>

              <div className="lg:col-span-3 flex flex-col items-end justify-between gap-6">
                <div className="flex flex-wrap justify-end gap-2">
                  {item.stack.map(s => (
                    <span key={s} className="text-[8px] border border-white/10 px-2 py-0.5 text-white/40 uppercase font-mono tracking-tighter">
                      {s}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3">
                   <span className="text-[9px] font-mono text-blue-500/60 uppercase tracking-widest">{item.status}</span>
                   <div className={`w-1.5 h-1.5 rounded-full ${item.status === 'OPTIMIZED' ? 'bg-blue-500 animate-pulse' : 'bg-white/10'}`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Github Call to Action */}
        <div className="mt-20 flex justify-center">
          <Link 
            href="https://github.com/swangai7178"
            className="group flex items-center gap-8 px-12 py-6 border border-white/10 hover:border-blue-500/50 transition-all bg-[#0d0d0d]"
          >
            <span className="text-[10px] font-mono text-white/30 uppercase tracking-[0.5em]">Sync_Source_Archive</span>
            <span className="text-blue-500 group-hover:translate-x-2 transition-transform">→</span>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .stroke-text-refined {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </section>
  );
};