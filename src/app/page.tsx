/*
 * Copyright (c) 2025
 * All rights reserved.
 */
'use client'; // This component still needs to be a client component if you decide to re-introduce interactive elements or if Navbar/Background depend on it.

import Navbar from '@/app/component/navbar';
import DeveloperVibeBackground from '@/app/component/StaticStarsBackground';
import React, { useState } from 'react'; // Keep useState, though the popup is currently not triggered from here
import Link from 'next/link'; // Keep Link for internal navigation

export default function Home() {
  // Keep the state for the popup, in case you want to trigger it from somewhere else later
  const [showContactPopup, setShowContactPopup] = useState(false); 

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
          {/* H1 with Gradient Text */}
          <h1 className="text-5xl font-bold animate-fade-in text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
            Hi, I&apos;m Samuel Wangai.
          </h1>
          <p className="mt-4 text-xl text-gray-300 animate-slide-up">
            A passionate full-stack developer with expertise in crafting modern web applications and transforming ideas into robust digital solutions.
          </p>

          {/* Contact Details and Explore Work */}
          <div className="mt-8 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="#projects" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition duration-300">
              Explore My Work
            </Link>
            
            {/* Direct Contact Information */}
            <div className="flex flex-col items-center space-y-2 text-gray-300">
              <p className="text-lg font-semibold">Get in Touch:</p>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                <a href="mailto:swangai7178@gmail.com" className="hover:text-blue-400 transition-colors duration-300">swangai7178@gmail.com</a>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.774a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
                <a href="tel:+254717805178" className="hover:text-blue-400 transition-colors duration-300">+254 708 719 638</a>
              </div>
            </div>
          </div>

          {/* Skill Grid */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
            <div className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
              <h2 className="text-xl font-semibold mb-2 text-yellow-400">Frontend Development</h2>
              <p className="text-sm text-gray-400">Flutter, React, TypeScript, Tailwind CSS</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
              <h2 className="text-xl font-semibold mb-2 text-yellow-400">Backend Development</h2>
              <p className="text-sm text-gray-400">Springboot, Ruby on Rails, Rust, Node.js, MongoDB, Firebase</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
              <h2 className="text-xl font-semibold mb-2 text-yellow-400">DevOps</h2>
              <p className="text-sm text-gray-400">Docker, CI/CD, Azure</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
              <h2 className="text-xl font-semibold mb-2 text-yellow-400">UI/UX Design</h2>
              <p className="text-sm text-gray-400">Figma, Adobe XD</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
              <h2 className="text-xl font-semibold mb-2 text-yellow-400">Problem Solving</h2>
              <p className="text-sm text-gray-400">Data Structures, Algorithms</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
              <h2 className="text-xl font-semibold mb-2 text-yellow-400">Team Collaboration</h2>
              <p className="text-sm text-gray-400">Agile, Scrum, Git</p>
            </div>
          </div>

          <p className="mt-12 text-gray-400 text-lg">
            Let us build something amazing together!
          </p>

          {/* Projects Section */}
          <section id="projects" className="mt-16 w-full">
            {/* H2 with Gradient Text */}
            <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Projects I have Built</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
                <h3 className="text-xl font-semibold mb-2 text-yellow-400">E-Commerce Platform</h3>
                <p className="text-sm text-gray-400 mb-4">
                  Built a scalable e-commerce platform using <span className="text-blue-300">Flutter</span> (mobile), <span className="text-green-300">Ruby on Rails</span> (backend), and <span className="text-yellow-300">Firebase</span> (analytics). Integrated payment gateways and real-time order tracking, enhancing the customer shopping experience and boosting sales conversion.
                </p>
                <div className="flex justify-end">
                  <a href="https://play.google.com/store/apps/details?id=com.smartply.ecommerce&hl=en" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 font-medium flex items-center">
                    View Project <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </a>
                </div>
              </div>
              <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
                <h3 className="text-xl font-semibold mb-2 text-yellow-400">POS System Integration</h3>
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
                <h3 className="text-xl font-semibold mb-2 text-yellow-400">Multiplayer Game Development</h3>
                <p className="text-sm text-gray-400 mb-4">
                  Designed and developed engaging multiplayer games using <span className="text-blue-300">Flutter</span> and <span className="text-yellow-300">Firebase</span>, incorporating real-time updates and leaderboards for an immersive user experience.
                </p>
                <div className="flex justify-end">
                  <a href="https://github.com/swangai7178/tictac_flutter" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 font-medium flex items-center">
                    View Project <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </a>
                </div>
              </div>
             <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
                <h3 className="text-xl font-semibold mb-2 text-yellow-400">Kenyan Counties Package (Flutter)</h3>
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
                <h3 className="text-xl font-semibold mb-2 text-yellow-400">Law Firm Website</h3>
                <p className="text-sm text-gray-400 mb-4">
                  Created a professional law firm website using <span className="text-blue-300">Next.js</span>, ensuring fast performance, SEO optimization, and a responsive design to attract and engage clients effectively.
                </p>
                <div className="flex justify-end">
                  <a href="https://murimimurangoandassociates.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 font-medium flex items-center">
                    View Project <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </a>
                </div>
              </div>
              <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
                <h3 className="text-xl font-semibold mb-2 text-yellow-400">IoT Tracking Software</h3>
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

      {/* Pop-up Modal (kept here but currently not triggered by a button on this page) */}
      {showContactPopup && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm"
          onClick={() => setShowContactPopup(false)}
        >
          <div
            className="relative bg-gradient-to-br from-gray-800 to-gray-950 p-8 rounded-xl shadow-2xl border border-cyan-700 max-w-sm w-full text-center transform scale-95 opacity-0 animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-3xl font-bold text-cyan-400 mb-4">Let's Connect!</h3>
            {/* Email */}
            <div className="flex items-center justify-center space-x-3 mb-3">
              <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
              <a href="mailto:swangai7178@gmail.com" className="text-lg text-gray-300 hover:text-blue-400 transition-colors duration-300">swangai7178@gmail.com</a>
            </div>
            {/* Phone */}
            <div className="flex items-center justify-center space-x-3 mb-6">
              <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.774a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
              <a href="tel:+254717805178" className="text-lg text-gray-300 hover:text-blue-400 transition-colors duration-300">+254 717 805 178</a>
            </div>
            {/* Social Links */}
            <div className="flex justify-center space-x-6 mb-6">
                <Link href="https://www.linkedin.com/in/samuelwangai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0H5a5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.768 0-.977.784-1.768 1.75-1.768.966 0 1.75.79 1.75 1.768 0 .978-.784 1.768-1.75 1.768zM19 19h-3v-4.74c0-1.216-.363-2.045-1.465-2.045-1.194 0-1.597.87-1.597 2.025V19h-3V8h3v1.393s1.085-1.593 3-1.593c2.193 0 3.864 1.488 3.864 4.675V19z" clipRule="evenodd" /></svg>
                    <span className="sr-only">LinkedIn</span>
                </Link>
                <Link href="https://github.com/swangai7178" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.417 2.865 8.163 6.839 9.489.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.157-1.11-1.467-1.11-1.467-.908-.62.069-.608.069-.608 1.007.07 1.532 1.03 1.532 1.03.89 1.529 2.342 1.088 2.91.829.091-.643.35-1.088.636-1.338-2.22-.253-4.555-1.116-4.555-4.949 0-1.09.39-1.984 1.03-2.684-.104-.253-.448-1.272.099-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.202 2.397.099 2.65.64.7 1.03 1.594 1.03 2.684 0 3.841-2.339 4.686-4.568 4.935.359.308.678.917.678 1.846 0 1.338-.012 2.419-.012 2.747 0 .268.18.577.688.483C17.146 18.17 20 14.417 20 10.017 20 4.484 15.522 0 10 0z" clipRule="evenodd" /></svg>
                    <span className="sr-only">GitHub</span>
                </Link>
                <Link href="https://x.com/your-twitter-handle" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-300 transition-colors duration-300">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26L21.61 22H14.94L9.109 13.626 4.38 22H1.06L8.384 13.337 1.455 2.25H4.79L10.91 10.925L18.244 2.25zM17.29 20L11.07 4h2.41L18.71 20h-1.42z"/></svg>
                    <span className="sr-only">Twitter/X</span>
                </Link>
            </div>
            {/* Close Button */}
            <button
              onClick={() => setShowContactPopup(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="Close contact information"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}