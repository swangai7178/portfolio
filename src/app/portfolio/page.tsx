/*
 * Copyright (c) 2025
 * All rights reserved.
 */
// src/app/portfolio/page.tsx
import Navbar from '@/app/component/navbar'; // Ensure path is correct
import DeveloperVibeBackground from '@/app/component/StaticStarsBackground'; // Ensure path is correct
import Link from 'next/link';
import React from 'react';

// --- Placeholder Project Data ---
// Replace this array with your actual project details
const projects = [
  {
    id: 1,
    title: "E-commerce Platform (Next.js)",
    description: "A full-featured online store built with Next.js, demonstrating server-side rendering, static generation, and API integration.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Stripe", "PostgreSQL"],
    liveUrl: "#", // Replace with actual Live Demo URL or null
    repoUrl: "#", // Replace with actual GitHub Repo URL or null
  },
  {
    id: 2,
    title: "Task Management App (Flutter)",
    description: "Cross-platform mobile application developed using Flutter for efficient task tracking and team collaboration, integrated with Firebase.",
    tech: ["Flutter", "Dart", "Firebase Auth", "Firestore", "Bloc"],
    liveUrl: null, // Replace with App Store/Play Store link or null
    repoUrl: "#", // Replace with actual GitHub Repo URL or null
  },
  {
    id: 3,
    title: "Portfolio Website (This one!)",
    description: "Personal portfolio site built with Next.js and Tailwind CSS, showcasing projects and skills with a dynamic background.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    liveUrl: "/", // Link to the site itself
    repoUrl: "https://github.com/swangai7178/your-portfolio-repo", // Replace with your repo link
  },
  {
    id: 4,
    title: "Rust Backend API",
    description: "RESTful API service built with Rust and Actix-web, featuring high performance and secure authentication.",
    tech: ["Rust", "Actix-web", "PostgreSQL", "JWT", "Docker"],
    liveUrl: null,
    repoUrl: "#",
  },
  {
    id: 5,
    title: "Weather App (React)",
    description: "A weather forecasting application built with React and OpenWeather API, providing real-time weather updates.",
    tech: ["React", "JavaScript", "CSS", "OpenWeather API"],
    liveUrl: "#", // Replace with actual Live Demo URL or null
    repoUrl: "https://github.com/swangai7178/weather-app", // Replace with actual GitHub Repo URL or null
  },
  {
    id: 6,
    title: "Blog Platform (Django)",
    description: "A blogging platform built with Django, featuring user authentication, post creation, and comment functionality.",
    tech: ["Django", "Python", "SQLite", "Bootstrap"],
    liveUrl: null,
    repoUrl: "https://github.com/swangai7178/django-blog-platform", // Replace with actual GitHub Repo URL or null
  },
];
// --- End Placeholder Project Data ---


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
          <h1 className="text-4xl font-bold mb-8 text-center"> Project_Portfolio $</h1>

          {/* GitHub Link Section */}
          <section className="mb-10 p-4 bg-gray-800 bg-opacity-70 rounded-lg text-center shadow-md">
            <h2 className="text-2xl font-semibold mb-3 text-cyan-400"> Source_Code $</h2>
            <p className="text-gray-300 mb-4">Explore my repositories and contributions on GitHub:</p>
            <Link href="https://github.com/swangai7178" target="_blank" rel="noopener noreferrer"
                  className="inline-block bg-green-500 hover:bg-green-600 text-black font-bold py-2 px-4 rounded transition-colors duration-300 shadow hover:shadow-lg">
              GitHub Profile
            </Link>
          </section>

          {/* --- Featured Projects Section --- */}
          <section className="mb-10">
            <h2 className="text-3xl font-semibold mb-6 text-center text-cyan-400">// Featured_Projects $</h2>
            {/* Grid layout for project cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"> {/* Adjust columns as needed */}
              {projects.map((project) => (
                // Project Card
                <div key={project.id} className="bg-gray-800 bg-opacity-80 rounded-lg p-6 shadow-lg hover:shadow-cyan-500/40 transition-shadow duration-300 flex flex-col border border-gray-700 hover:border-cyan-600">
                  {/* Project Content */}
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold mb-2 text-yellow-400">{project.title}</h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                    {/* Technologies Used */}
                    <div className="mb-4">
                      <p className="text-sm font-semibold text-gray-400 mb-2">Technologies:</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((techItem) => (
                          <span key={techItem} className="bg-gray-700 text-cyan-300 text-xs font-medium px-2.5 py-1 rounded-full shadow">
                            {techItem}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* Links Section (aligned to bottom) */}
                  <div className="mt-auto pt-4 border-t border-gray-700 flex justify-end space-x-4">
                    {project.liveUrl && (
                      <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                            className="text-sm text-blue-400 hover:text-blue-300 transition-colors duration-300 font-medium hover:underline">
                        Live Demo
                      </Link>
                    )}
                    {project.repoUrl && (
                      <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer"
                            className="text-sm text-green-400 hover:text-green-300 transition-colors duration-300 font-medium hover:underline">
                        GitHub Repo
                      </Link>
                    )}
                    {/* Add Case Study link if applicable */}
                    {/* {project.caseStudyUrl && ( ... )} */}
                  </div>
                </div>
              ))}
            </div>
          </section>
          {/* --- End Featured Projects Section --- */}


          {/* Published Apps Section (Optional - you might integrate these into Featured Projects) */}
          <section className="mb-8 p-4 bg-gray-800 bg-opacity-70 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-3 text-cyan-400">// Published_Apps $</h2>
            <p className="text-gray-300 mb-4">Direct links to applications published on app stores (if applicable):</p>
            <div className="flex justify-center items-center space-x-4">
                {/* Replace # with actual links to Google Play Developer page or specific apps */}
                <Link href="#" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 transition-colors duration-300 font-medium hover:underline">Android Apps</Link>
                <span className="text-gray-500">|</span>
                {/* Replace # with actual links to App Store page or specific apps */}
                <Link href="#" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors duration-300 font-medium hover:underline">iOS Apps</Link>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}