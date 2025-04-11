/*
 *   Copyright (c) 2025 
 *   All rights reserved.
 */
import Navbar from '@/app/component/navbar';
import DeveloperVibeBackground from '@/app/component/StaticStarsBackground';

export default function Home() {
  return (
    <div className="relative w-full min-h-screen bg-gray-900">
      {/* Background Layer */}
      <DeveloperVibeBackground />

      {/* Gradient Overlay Layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-800 opacity-90 z-[1]" />

      {/* Navbar Layer */}
      <Navbar />

      {/* Scrollable Content Area */}
      <div className="absolute inset-0 z-10 overflow-y-auto pt-16 md:pt-20 pb-12">
        <main className="flex flex-col items-center justify-start h-auto text-white text-center px-4 container mx-auto max-w-4xl">
          <h1 className="text-5xl font-bold">Hi, I&apos;m Samuel Wangai.</h1>
          <p className="mt-4 text-xl text-gray-300">
            A passionate developer with expertise in crafting modern web applications.
          </p>

          {/* Skill Grid */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
            <div className="p-4 bg-gray-800 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold">Frontend Development</h2>
              <p className="text-sm text-gray-400">Flutter, React, TypeScript, Tailwind CSS</p>
            </div>
            <div className="p-4 bg-gray-800 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold">Backend Development</h2>
              <p className="text-sm text-gray-400">Springboot, Ruby on Rails, Rust, Node.js, MongoDB, Firebase</p>
            </div>
            <div className="p-4 bg-gray-800 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold">DevOps</h2>
              <p className="text-sm text-gray-400">Docker, CI/CD, Azure</p>
            </div>
            <div className="p-4 bg-gray-800 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold">UI/UX Design</h2>
              <p className="text-sm text-gray-400">Figma, Adobe XD</p>
            </div>
            <div className="p-4 bg-gray-800 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold">Problem Solving</h2>
              <p className="text-sm text-gray-400">Data Structures, Algorithms</p>
            </div>
            <div className="p-4 bg-gray-800 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold">Team Collaboration</h2>
              <p className="text-sm text-gray-400">Agile, Scrum, Git</p>
            </div>
          </div>

          <p className="mt-8 text-gray-400">
            Let us build something amazing together!
          </p>

          {/* Projects Section */}
          <section className="mt-12 w-full">
            <h2 className="text-3xl font-bold mb-6">Projects I Have Worked On</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-4 bg-gray-800 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold">E-Commerce Platform</h3>
                <p className="text-sm text-gray-400">
                  Built a scalable e-commerce platform using Flutter for the mobile, Firebase for analytics, Ruby on Rails. Integrated payment gateways and real-time order tracking.
                </p>
              </div>
              <div className="p-4 bg-gray-800 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold">POS System</h3>
                <p className="text-sm text-gray-400">
                  Integrated a POS system with <a href="https://quadvendor.net/" className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">QuadVendor</a> API to manage inventory, sales, and customer data efficiently.
                </p>
              </div>
              <div className="p-4 bg-gray-800 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold">Game Development</h3>
                <p className="text-sm text-gray-400">
                  Designed and developed engaging multiplayer games using Flutter and Firebase, incorporating real-time updates and leaderboards.
                </p>
              </div>
              <div className="p-4 bg-gray-800 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold">Task Management Tool</h3>
                <p className="text-sm text-gray-400">
                  Developed a task management tool using React and Redux, enabling users to organize and prioritize tasks efficiently.
                </p>
              </div>
              <div className="p-4 bg-gray-800 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold">Law Firm Website</h3>
                <p className="text-sm text-gray-400">
                  Created a professional law firm website using Next.js, ensuring fast performance, SEO optimization, and a responsive design to attract and engage clients.
                </p>
              </div>
              <div className="p-4 bg-gray-800 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold">IoT Tracking Software</h3>
                <p className="text-sm text-gray-400">
                  Developed an IoT tracking software using Flutter, enabling users to monitor and track devices in real-time with seamless integration of GPS and analytics.
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
