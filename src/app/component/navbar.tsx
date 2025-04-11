/*
 *   Copyright (c) 2025 
 *   All rights reserved.
 */
// src/app/component/navbar.js (or .tsx)
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-20 bg-black bg-opacity-50 backdrop-blur-sm p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">
          {/* Use your name or a cool alias */}
          <Link href="/">SamuelW</Link> {/* Or your site title */}
        </div>
        <div className="space-x-4">
          <Link href="/" className="text-gray-300 hover:text-white transition-colors">
           Home
          </Link>
          {/* Add Resume/CV Link */}
          <Link href="/resume" className="text-gray-300 hover:text-white transition-colors">
             Resume
          </Link>
          {/* Add Portfolio Link */}
          <Link href="/portfolio" className="text-gray-300 hover:text-white transition-colors">
             Portfolio
          </Link>
          {/* Keep or modify About/Contact as needed */}
         {/* <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
            Contact
          </Link> */}
        </div>
      </div>
    </nav>
  );
}