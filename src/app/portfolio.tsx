/*
 *   Copyright (c) 2025 
 *   All rights reserved.
 */
// src/app/portfolio/page.js (or .tsx)
import Navbar from '@/app/component/navbar';
import DeveloperVibeBackground from '@/app/component/StaticStarsBackground'; // Use the nerdy background
import Link from 'next/link'; // Import Link for external links

export default function PortfolioPage() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-black">
      <Navbar />
      <DeveloperVibeBackground />

      <main className="relative z-10 text-white pt-24 pb-12 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl font-bold mb-8 text-center">// Project_Portfolio $</h1>

            {/* GitHub Link */}
             <section className="mb-8 p-4 bg-gray-800 bg-opacity-70 rounded-lg text-center">
                 <h2 className="text-2xl font-semibold mb-3 text-cyan-400">// Source_Code $</h2>
                 <p className="text-gray-300 mb-4">Explore my repositories and contributions:</p>
                 <Link href="https://github.com/swangai7178" target="_blank" rel="noopener noreferrer"
                       className="inline-block bg-green-500 hover:bg-green-600 text-black font-bold py-2 px-4 rounded transition-colors">
                    GitHub Profile [cite: 16]
                 </Link>
            </section>

             {/* Published Apps Section (Example) */}
            <section className="mb-8 p-4 bg-gray-800 bg-opacity-70 rounded-lg">
                <h2 className="text-2xl font-semibold mb-3 text-cyan-400">// Published_Apps $</h2>
                <p className="text-gray-300 mb-4">Check out some of the applications I've worked on and published:</p> [cite: 8, 15]
                {/* Add links if available in resume, otherwise describe */}
                <div className="flex justify-center space-x-4">
                     {/* Replace '#' with actual links if you have them */}
                    <Link href="#" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">iOS Apps</Link>
                     <Link href="#" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300">Android Apps</Link>
                </div>
                 {/* You can add more specific project details here */}
                 {/* Example Project Entry:
                 <div className="mt-6 border-t border-gray-700 pt-4">
                    <h3 className="text-xl font-medium text-yellow-400">Project Title</h3>
                    <p className="text-gray-400 mt-1">Brief description of the project, technologies used (Flutter, Laravel etc.)[cite: 6, 9], and your role.</p>
                 </div>
                 */}
            </section>

            {/* Add more sections for specific projects if desired */}

        </div>
      </main>
    </div>
  );
}