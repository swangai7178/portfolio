/*
 * Copyright (c) 2025
 * All rights reserved.
 */
// src/app/portfolio/page.tsx
import Navbar from '@/app/component/navbar';
import DeveloperVibeBackground from '@/app/component/StaticStarsBackground';
import Link from 'next/link';
import React from 'react';

// --- Actual Project Data ---
const projects = [
  {
    id: 1,
    title: "QuadVendor E-commerce POS (Web)",
    description: "A robust web-based Point of Sale and e-commerce management system, designed to streamline inventory, sales, and customer data for businesses.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "API Integration"],
    liveUrl: "https://quadvendor.net/",
    repoUrl: null, // Private repo for commercial projects
  },
  {
    id: 2,
    title: "QuadVendor Mobile App (Flutter)",
    description: "The cross-platform mobile companion for QuadVendor, enabling on-the-go inventory management, sales tracking, and business insights.",
    tech: ["Flutter", "Dart", "Firebase", "RESTful APIs", "Provider"],
    liveUrl: "https://play.google.com/store/apps/details?id=com.quadvendor.pos&hl=en", // Links are in Published Apps section
    repoUrl: null, // Private repo for commercial projects
  },
  {
    id: 3,
    title: "Sahibu360 E-commerce Platform (Web)",
    description: "A comprehensive web-based e-commerce solution for sellers and buyers, offering product listing, secure transactions, and order management.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Payment Gateways"],
    liveUrl: "https://sahibu360.net/",
    repoUrl: null, // Private repo for commercial projects
  },
  {
    id: 4,
    title: "Sahibu Mobile App (Flutter)",
    description: "The official mobile application for the Sahibu360 platform, providing a seamless shopping and selling experience for users.",
    tech: ["Flutter", "Dart", "Firebase", "Provider", "API Integration"],
    liveUrl: "https://play.google.com/store/apps/details?id=com.sahibumanager.sahibu&hl=en", // Links are in Published Apps section
    repoUrl: null, // Private repo for commercial projects
  },
  {
    id: 5,
    title: "Smartply Mobile App (Flutter)",
    description: "An intuitive cross-platform application designed for eccomerce sales.",
    tech: ["Flutter", "Dart", "IoT Integration", "Real-time Data"],
    liveUrl: "https://play.google.com/store/apps/details?id=com.smartply.ecommerce&hl=en", // Links are in Published Apps section
    repoUrl: null, // Private repo for commercial projects
  },
  {
    id: 6,
    title: "Murimi Murango & Advocates (Web)",
    description: "A professional and responsive website for a law firm, designed to establish an online presence and provide essential information to clients.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "SEO Optimization"],
    liveUrl: "https://murimimurangoandadvocates.com/",
    repoUrl: null, // Private repo for client projects
  },
  {
    id: 7,
    title: "Rising Gamers (Web Application)",
    description: "A dynamic web platform for gamers, featuring user profiles, game discovery, and community interaction. Built for performance and user engagement.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel Deployment"],
    liveUrl: "https://rising-gamers.vercel.app/",
    repoUrl: "https://github.com/your-repo-for-rising-gamers", // Replace with actual GitHub Repo URL if public
  },
  {
    id: 8,
    title: "Kenyan Counties Package (Flutter)",
    description: "Authored and published the `kenya_counties` package on pub.dev. This Flutter package provides a seamless and efficient way for developers to integrate and manage Kenyan county data in their applications, enhancing localized user experiences.",
    tech: ["Flutter", "Dart", "Pub.dev", "Package Development"],
    liveUrl: "https://pub.dev/packages/kenya_counties",
    repoUrl: "https://github.com/swangai7178/kenya_counties", // Assuming you'd have a public repo for your package
  },
  // You can add more projects here following the same structure
];
// --- End Actual Project Data ---


export default function PortfolioPage() {
  return (
    // 1. Overall Page Container: Relative, min-height, base bg
    <div className="relative w-full min-h-screen bg-black">
      {/* 2. Navbar: Ensure it has a high z-index (e.g., z-50) in its component definition */}
      <Navbar />

      {/* 3. Background Component Added */}
      {/* Ensure DeveloperVibeBackground uses position: absolute, inset-0, z-0 */}
      <DeveloperVibeBackground />

      {/* 4. Scrollable Content Area: Absolute, covers parent, scrolls, above background */}
      <div className="absolute inset-0 z-10 overflow-y-auto pt-24 pb-12"> {/* Added overflow-y-auto, removed overflow-hidden from parent */}

        {/* 5. Main Content Wrapper: Centering, padding, max-width */}
        <main className="container mx-auto max-w-5xl text-white px-4 md:px-8 lg:px-12"> {/* Increased max-width slightly for portfolio */}
          <h1 className="text-5xl font-extrabold mb-10 text-center tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
            My Project Portfolio
          </h1>

          {/* GitHub Link Section */}
          <section className="mb-10 p-6 bg-gray-800 bg-opacity-70 rounded-xl shadow-lg border border-gray-700 text-center">
            <h2 className="text-3xl font-bold mb-4 text-cyan-400 border-b border-cyan-700 pb-2">Explore My Code</h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Dive deeper into my technical work, contributions, and open-source projects on GitHub.
            </p>
            <Link href="https://github.com/swangai7178" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-3 bg-green-500 text-black font-semibold rounded-lg shadow-md hover:bg-green-600 transform hover:scale-105 transition-all duration-300 ease-in-out">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.417 2.865 8.163 6.839 9.489.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.157-1.11-1.467-1.11-1.467-.908-.62.069-.608.069-.608 1.007.07 1.532 1.03 1.532 1.03.89 1.529 2.342 1.088 2.91.829.091-.643.35-1.088.636-1.338-2.22-.253-4.555-1.116-4.555-4.949 0-1.09.39-1.984 1.03-2.684-.104-.253-.448-1.272.099-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.202 2.397.099 2.65.64.7 1.03 1.594 1.03 2.684 0 3.841-2.339 4.686-4.568 4.935.359.308.678.917.678 1.846 0 1.338-.012 2.419-.012 2.747 0 .268.18.577.688.483C17.146 18.17 20 14.417 20 10.017 20 4.484 15.522 0 10 0z" clipRule="evenodd" /></svg>
              My GitHub Profile
            </Link>
          </section>

          {/* --- Featured Projects Section --- */}
          <section className="mb-10">
            <h2 className="text-4xl font-bold mb-8 text-center tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              My Featured Projects
            </h2>
            {/* Grid layout for project cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {projects.map((project) => (
                // Project Card
                <div key={project.id} className="bg-gray-800 bg-opacity-80 rounded-xl p-6 shadow-lg hover:shadow-cyan-500/40 transition-shadow duration-300 flex flex-col border border-gray-700 hover:border-cyan-600">
                  {/* Project Content */}
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold mb-3 text-yellow-400">{project.title}</h3>
                    <p className="text-gray-300 mb-4 text-md leading-relaxed">{project.description}</p>
                    {/* Technologies Used */}
                    <div className="mb-4">
                      <p className="text-sm font-semibold text-gray-400 mb-2">Technologies:</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((techItem) => (
                          <span key={techItem} className="bg-gray-700 text-cyan-300 text-xs font-medium px-3 py-1 rounded-full shadow">
                            {techItem}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* Links Section (aligned to bottom) */}
                  <div className="mt-auto pt-5 border-t border-gray-700 flex justify-end space-x-4">
                    {project.liveUrl && (
                      <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300 font-medium hover:underline text-sm md:text-base">
                        Live Demo
                        <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                      </Link>
                    )}
                    {project.repoUrl && (
                      <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors duration-300 font-medium hover:underline text-sm md:text-base">
                        GitHub Repo
                        <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.417 2.865 8.163 6.839 9.489.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.157-1.11-1.467-1.11-1.467-.908-.62.069-.608.069-.608 1.007.07 1.532 1.03 1.532 1.03.89 1.529 2.342 1.088 2.91.829.091-.643.35-1.088.636-1.338-2.22-.253-4.555-1.116-4.555-4.949 0-1.09.39-1.984 1.03-2.684-.104-.253-.448-1.272.099-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.202 2.397.099 2.65.64.7 1.03 1.594 1.03 2.684 0 3.841-2.339 4.686-4.568 4.935.359.308.678.917.678 1.846 0 1.338-.012 2.419-.012 2.747 0 .268.18.577.688.483C17.146 18.17 20 14.417 20 10.017 20 4.484 15.522 0 10 0z" clipRule="evenodd" /></svg>
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Published Apps Section */}
          <section className="mb-10 p-6 bg-gray-800 bg-opacity-70 rounded-xl shadow-lg border border-gray-700 text-center">
            <h2 className="text-3xl font-bold mb-4 text-cyan-400 border-b border-cyan-700 pb-2">Published Applications</h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Explore my mobile applications available on official app stores.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
                {/* QuadVendor */}
                <div className="flex flex-col items-center">
                    <p className="text-md font-semibold text-yellow-400 mb-2">QuadVendor App</p>
                    <div className="flex space-x-4">
                        <Link href="https://play.google.com/store/apps/details?id=com.quadvendor.pos&hl=en" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-green-700 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 text-sm">
                            Google Play
                        </Link>
                        <Link href="https://apps.apple.com/us/app/quadvendor-pos/id1660764963" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-blue-700 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 text-sm">
                            App Store
                        </Link>
                    </div>
                </div>

                {/* Sahibu App */}
                <div className="flex flex-col items-center">
                    <p className="text-md font-semibold text-yellow-400 mb-2">Sahibu App</p>
                    <div className="flex space-x-4">
                        <Link href="https://play.google.com/store/apps/details?id=com.sahibumanager.sahibu&hl=en" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-green-700 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 text-sm">
                            Google Play
                        </Link>
                        <Link href="https://apps.apple.com/us/app/sahibu-manager/id1560544092" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-blue-700 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 text-sm">
                            App Store
                        </Link>
                    </div>
                </div>

                {/* Smartply App */}
                <div className="flex flex-col items-center">
                    <p className="text-md font-semibold text-yellow-400 mb-2">Smartply App</p>
                    <div className="flex space-x-4">
                        {/* Assuming Smartply is also on Play Store/App Store */}
                        <Link href="https://play.google.com/store/apps/details?id=com.smartply.ecommerce&hl=en" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-green-700 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 text-sm">
                             Google Play
                        </Link>
                        <Link href="https://apps.apple.com/us/app/smartply-connect/id6464480843" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-blue-700 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 text-sm">
                           App Store
                        </Link>
                    </div>
                </div>
            </div>
            <p className="text-sm text-gray-500 mt-6">
                Note: Some apps may have region restrictions. If a link doesn't work, search for the app name directly on your region's store.
            </p>
          </section>

        </main>
      </div>
    </div>
  );
}