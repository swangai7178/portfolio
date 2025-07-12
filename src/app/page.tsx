/*
 * Copyright (c) 2025
 * All rights reserved.
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
          <h1 className="text-5xl font-bold animate-fade-in">Hi, I&apos;m Samuel Wangai.</h1>
          <p className="mt-4 text-xl text-gray-300 animate-slide-up">
            A passionate full-stack developer with expertise in crafting modern web applications and transforming ideas into robust digital solutions.
          </p>

          {/* Optional Call to Action */}
          <div className="mt-8 flex space-x-4">
            <a href="#projects" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition duration-300">
              Explore My Work
            </a>
            <a href="contact" className="px-6 py-3 border border-gray-600 text-gray-300 hover:text-white hover:border-white font-semibold rounded-lg shadow-md transition duration-300">
              Let us Connect
            </a>
          </div>

          {/* Skill Grid */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
            <div className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
              <h2 className="text-xl font-semibold mb-2">Frontend Development</h2>
              <p className="text-sm text-gray-400">Flutter, React, TypeScript, Tailwind CSS</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
              <h2 className="text-xl font-semibold mb-2">Backend Development</h2>
              <p className="text-sm text-gray-400">Springboot, Ruby on Rails, Rust, Node.js, MongoDB, Firebase</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
              <h2 className="text-xl font-semibold mb-2">DevOps</h2>
              <p className="text-sm text-gray-400">Docker, CI/CD, Azure</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
              <h2 className="text-xl font-semibold mb-2">UI/UX Design</h2>
              <p className="text-sm text-gray-400">Figma, Adobe XD</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
              <h2 className="text-xl font-semibold mb-2">Problem Solving</h2>
              <p className="text-sm text-gray-400">Data Structures, Algorithms</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
              <h2 className="text-xl font-semibold mb-2">Team Collaboration</h2>
              <p className="text-sm text-gray-400">Agile, Scrum, Git</p>
            </div>
          </div>

          <p className="mt-12 text-gray-400 text-lg">
            Let us build something amazing together!
          </p>

          {/* Projects Section */}
          <section id="projects" className="mt-16 w-full">
            <h2 className="text-3xl font-bold mb-8">Projects I havve Built</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
                <h3 className="text-xl font-semibold mb-2">E-Commerce Platform</h3>
                <p className="text-sm text-gray-400 mb-4">
                  Built a scalable e-commerce platform using <span className="text-blue-300">Flutter</span> (mobile), <span className="text-green-300">Ruby on Rails</span> (backend), and <span className="text-yellow-300">Firebase</span> (analytics). Integrated payment gateways and real-time order tracking, enhancing the customer shopping experience and boosting sales conversion.
                </p>
                <div className="flex justify-end">
                  <a href="https://play.google.com/store/apps/details?id=com.smartply.ecommerce&hl=en" className="text-blue-400 hover:text-blue-300 font-medium flex items-center">
                    View Project <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </a>
                </div>
              </div>
              <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
                <h3 className="text-xl font-semibold mb-2">POS System Integration</h3>
                <p className="text-sm text-gray-400 mb-4">
                  Integrated a POS system with <a href="https://quadvendor.net/" className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">QuadVendor</a> API to manage inventory, sales, and customer data efficiently, significantly streamlining business operations.
                </p>
                <div className="flex justify-end">
                  <a href="https://quadvendor.net/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 font-medium flex items-center">
                    View Website <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                  </a>
                </div>
              </div>
              <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
                <h3 className="text-xl font-semibold mb-2">Multiplayer Game Development</h3>
                <p className="text-sm text-gray-400 mb-4">
                  Designed and developed engaging multiplayer games using <span className="text-blue-300">Flutter</span> and <span className="text-yellow-300">Firebase</span>, incorporating real-time updates and leaderboards for an immersive user experience.
                </p>
                <div className="flex justify-end">
                  <a href="https://github.com/swangai7178/tictac_flutter" className="text-blue-400 hover:text-blue-300 font-medium flex items-center">
                    View Project <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </a>
                </div>
              </div>
             <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
    <h3 className="text-xl font-semibold mb-2">Kenyan Counties Package (Flutter)</h3>
    <p className="text-sm text-gray-400 mb-4">
        **Authored and published** the <a href="https://pub.dev/packages/kenya_counties" className="text-blue-400 underline" target="_blank" rel="noopener noreferrer"><code>kenya_counties</code></a> package on pub.dev. This Flutter package provides a seamless and efficient way for developers to integrate and manage Kenyan county data in their applications, enhancing localized user experiences.
    </p>
    <div className="flex justify-end">
        <a href="https://pub.dev/packages/kenya_counties" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 font-medium flex items-center">
            View Package <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
        </a>
    </div>
</div>
              <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
                <h3 className="text-xl font-semibold mb-2">Law Firm Website</h3>
                <p className="text-sm text-gray-400 mb-4">
                  Created a professional law firm website using <span className="text-blue-300">Next.js</span>, ensuring fast performance, SEO optimization, and a responsive design to attract and engage clients effectively.
                </p>
                <div className="flex justify-end">
                  <a href="https://murimimurangoandassociates.com/" className="text-blue-400 hover:text-blue-300 font-medium flex items-center">
                    View Project <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </a>
                </div>
              </div>
              <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
                <h3 className="text-xl font-semibold mb-2">IoT Tracking Software</h3>
                <p className="text-sm text-gray-400 mb-4">
                  Developed an IoT tracking software using <span className="text-blue-300">Flutter</span>, enabling users to monitor and track devices in real-time with seamless integration of GPS and analytics for enhanced insights.
                </p>
                <div className="flex justify-end">
                  <a href="#" className="text-blue-400 hover:text-blue-300 font-medium flex items-center">
                    View Project <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}