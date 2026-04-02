/*
 * Copyright (c) 2026 
 * All rights reserved.
 */
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// ✅ Vercel Analytics + (optional) Speed Insights
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ JSON-LD Structured Data
const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Samuel Wangai",
  jobTitle: "Fullstack Software Engineer",
  url: "https://portfolio-two-iota-25.vercel.app",
  knowsAbout: [
    "Flutter",
    "Ruby on Rails",
    "System Architecture",
    "Next.js",
    "M-Pesa API",
  ],
};

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Samuel Wangai | Fullstack Engineer & System Architect",
  description:
    "Specializing in high-performance Flutter apps and Ruby on Rails backends. Building scalable logistics and real estate solutions in Nairobi.",
  metadataBase: new URL("https://portfolio-two-iota-25.vercel.app"),
  keywords: [
    "Samuel Wangai",
    "Fullstack Engineer Nairobi",
    "Flutter Expert Kenya",
    "Ruby on Rails Developer",
    "System Architect",
    "PataKeja",
    "Courier Plus Logistics Software",
    "M-Pesa Integration Expert",
  ],
  openGraph: {
    title: "Samuel Wangai | Fullstack Engineer & Architect",
    description:
      "Building the future of logistics and real estate with Flutter & Rails.",
    url: "https://portfolio-two-iota-25.vercel.app",
    siteName: "Samuel Wangai Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Samuel Wangai Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Keep clean to avoid extension/script conflicts */}
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0a0b] text-white min-h-screen w-full relative flex flex-col`}
      >
        {/* Main Content */}
        {children}

        {/* ✅ Analytics (must be inside body) */}
        <Analytics />

        {/* ✅ Optional: Performance tracking */}
        <SpeedInsights />

        {/* ✅ Structured Data (SEO safe placement) */}
        <script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(JSON_LD),
          }}
        />
      </body>
    </html>
  );
}