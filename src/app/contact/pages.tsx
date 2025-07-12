/*
 * Copyright (c) 2025
 * All rights reserved.
 */
// src/app/contact/page.tsx
import Navbar from '@/app/component/navbar';
import DeveloperVibeBackground from '@/app/component/StaticStarsBackground';
import Link from 'next/link';
import React from 'react';

export default function ContactPage() {
  return (
    <div className="relative w-full min-h-screen bg-black">
      {/* Background and Overlay */}
      <DeveloperVibeBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-black to-gray-900 opacity-90 z-[1]" />

      {/* Navbar */}
      <Navbar />

      {/* Scrollable Content Area */}
      <div className="absolute inset-0 z-10 overflow-y-auto pt-24 pb-12">
        <main className="container mx-auto max-w-3xl text-white px-4 md:px-8 lg:px-12">
          <h1 className="text-5xl font-extrabold mb-10 text-center tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
            Get In Touch
          </h1>

          {/* Contact Information Section */}
          <section className="mb-10 p-6 bg-gray-800 bg-opacity-70 rounded-xl shadow-lg border border-gray-700 text-center">
            <h2 className="text-3xl font-bold mb-4 text-cyan-400 border-b border-cyan-700 pb-2">Connect With Me</h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              Feel free to reach out through any of the channels below!
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-8">
              {/* Email */}
              <div className="flex items-center space-x-3">
                <svg className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                <a href="mailto:swangai7178@gmail.com" className="text-lg text-gray-300 hover:text-blue-400 transition-colors duration-300">swangai7178@gmail.com</a>
              </div>

              {/* Phone (Optional, consider privacy) */}
              <div className="flex items-center space-x-3">
                <svg className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.774a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
                <a href="tel:+254717805178" className="text-lg text-gray-300 hover:text-blue-400 transition-colors duration-300">+254 717 805 178</a>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex justify-center space-x-6">
                {/* LinkedIn */}
                <Link href="https://www.linkedin.com/in/samuelwangai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.768 0-.977.784-1.768 1.75-1.768.966 0 1.75.79 1.75 1.768 0 .978-.784 1.768-1.75 1.768zM19 19h-3v-4.74c0-1.216-.363-2.045-1.465-2.045-1.194 0-1.597.87-1.597 2.025V19h-3V8h3v1.393s1.085-1.593 3-1.593c2.193 0 3.864 1.488 3.864 4.675V19z" clipRule="evenodd" /></svg>
                    <span className="sr-only">LinkedIn</span>
                </Link>
                {/* GitHub (if you want to link it again here) */}
                <Link href="https://github.com/swangai7178" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.417 2.865 8.163 6.839 9.489.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.157-1.11-1.467-1.11-1.467-.908-.62.069-.608.069-.608 1.007.07 1.532 1.03 1.532 1.03.89 1.529 2.342 1.088 2.91.829.091-.643.35-1.088.636-1.338-2.22-.253-4.555-1.116-4.555-4.949 0-1.09.39-1.984 1.03-2.684-.104-.253-.448-1.272.099-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.202 2.397.099 2.65.64.7 1.03 1.594 1.03 2.684 0 3.841-2.339 4.686-4.568 4.935.359.308.678.917.678 1.846 0 1.338-.012 2.419-.012 2.747 0 .268.18.577.688.483C17.146 18.17 20 14.417 20 10.017 20 4.484 15.522 0 10 0z" clipRule="evenodd" /></svg>
                    <span className="sr-only">GitHub</span>
                </Link>
                {/* Twitter/X (if applicable) */}
                 <Link href="https://x.com/your-twitter-handle" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-300 transition-colors duration-300">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26L21.61 22H14.94L9.109 13.626 4.38 22H1.06L8.384 13.337 1.455 2.25H4.79L10.91 10.925L18.244 2.25zM17.29 20L11.07 4h2.41L18.71 20h-1.42z"/></svg>
                    <span className="sr-only">Twitter/X</span>
                </Link>
            </div>
          </section>

          {/* Contact Form Section */}
          <section className="p-6 bg-gray-800 bg-opacity-70 rounded-xl shadow-lg border border-gray-700">
            <h2 className="text-3xl font-bold mb-4 text-cyan-400 border-b border-cyan-700 pb-2">Send a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-md font-medium text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-md font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-md font-medium text-gray-300 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200"
                  placeholder="Project Inquiry, Collaboration, etc."
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-md font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 resize-y"
                  placeholder="Your message..."
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 ease-in-out"
                >
                  Send Message
                  <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l.608-.246 2.775-1.115 2.818 2.818a1 1 0 001.414 0l1.414-1.414 2.818-2.818 1.115-2.775.246-.608a1 1 0 00-1.409-1.169l-14-7z"></path></svg>
                </button>
              </div>
            </form>
            <p className="text-sm text-gray-500 mt-6 text-center">
                Note: This form requires a backend integration to send messages.
                For immediate contact, please use the email or phone number above.
            </p>
          </section>

        </main>
      </div>
    </div>
  );
}