/*
 *   Copyright (c) 2025 
 *   All rights reserved.
 */
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Samuel Wangai | Portfolio — Flutter, Backend, and Fullstack Developer",
  description: "Explore Samuel Wangai's portfolio showcasing projects in Flutter, Ruby on Rails, Java Spring Boot, and modern web development.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  keywords: [
    "Samuel Wangai",
    "Flutter Developer",
    "Backend Developer",
    "Fullstack Developer",
    "Ruby on Rails",
    "Spring Boot",
    "Next.js Portfolio",
    "Kenya Developer",
    "Software Engineer Portfolio",
  ],
  authors: [{ name: "Samuel Wangai", url: "https://yourdomain.com" }],
  openGraph: {
    title: "Samuel Wangai | Portfolio",
    description: "Explore my projects in Flutter, Rails, Spring Boot, and modern fullstack web development.",
    url: "https://yourdomain.com",
    siteName: "Samuel Portfolio",
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
  twitter: {
    card: "summary_large_image",
    title: "Samuel Wangai | Portfolio",
    description: "Flutter, Rails, Spring Boot — My fullstack development projects.",
    images: ["/og-image.png"],
    creator: "@yourTwitterHandle",
  },
  metadataBase: new URL("https://yourdomain.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
