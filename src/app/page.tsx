'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Projects } from '@/components/sections/Projects';
import { RiveHero } from '@/components/rive/RiveHero';
import { ArchitectureDiagram } from '@/components/sections/ArchitectureDiagram';

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-[#0a0a0b] text-[#f2f2f2] selection:bg-blue-500/30 overflow-x-hidden">
      <Navbar />

      {/* BACKGROUND SYSTEM: ARCHITECTURAL GRID + NOISE */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-100px,rgba(37,99,235,0.05),transparent)]" />
        <div className="noise-overlay absolute inset-0 opacity-[0.02]" />
      </div>
      <Hero />
      <Projects />
    </main>
  );
}