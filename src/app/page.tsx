"use client";

import { useState } from "react";

function SWLogo({ large = false }: { large?: boolean }) {
  return (
    <svg
      width={large ? 72 : 42}
      height={large ? 72 : 42}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Samuel Wangai logo"
      role="img"
    >
      <rect
        x="3"
        y="3"
        width="94"
        height="94"
        rx="22"
        stroke="currentColor"
        strokeWidth="5"
      />

      <path
        d="M27 32C31 27 37 25 44 25C51 25 57 28 61 33"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
      />

      <path
        d="M27 32L61 67"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
      />

      <path
        d="M27 67C31 72 37 75 44 75C51 75 57 72 61 67"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
      />

      <path
        d="M57 25L73 75"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
      />

      <path
        d="M73 25L57 75"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
      />
    </svg>
  );
}

const projects = [
  {
    number: "01",
    name: "Logistics & Delivery Platform",
    role: "Systems Engineer",
    description:
      "Production logistics platform spanning mobile workflows, delivery operations, real-time location services, notifications, payments and backend services.",
    stack: "Flutter · Rails · Firebase · Maps · APIs",
    status: "ACTIVE",
  },
  {
    number: "02",
    name: "Commerce & POS Ecosystem",
    role: "Lead Fullstack Architect",
    description:
      "Unified POS and e-commerce platform connecting mobile and web applications with inventory, sales, orders and vendor operations.",
    stack: "Flutter · Next.js · TypeScript · Firebase · REST",
    status: "PRODUCTION",
  },
  {
    number: "03",
    name: "SmartPly Mobile",
    role: "Fullstack Developer",
    description:
      "Scalable commerce application backed by a Ruby on Rails API, PostgreSQL and Firebase services.",
    stack: "Flutter · Rails · PostgreSQL · Firebase",
    status: "ACTIVE",
  },
  {
    number: "04",
    name: "Multi-Tenant Commerce Platform",
    role: "Systems Engineer",
    description:
      "Web and mobile commerce platform supporting secure transactions, order management and multi-tenant business workflows.",
    stack: "Next.js · Flutter · Tailwind · Payments · APIs",
    status: "STABLE",
  },
  {
    number: "05",
    name: "Locker & Fulfillment Platform",
    role: "Mobile & Systems Engineer",
    description:
      "Software platform connecting mobile applications, fulfillment workflows and physical access infrastructure.",
    stack: "Flutter · Native Android · Firebase · APIs · Hardware",
    status: "PRODUCTION",
  },
  {
    number: "06",
    name: "Real-Time Tracking Platform",
    role: "Systems Developer",
    description:
      "Real-time tracking and monitoring software combining GPS data, device telemetry, location services and operational analytics.",
    stack: "Flutter · GPS · IoT · Real-time Data",
    status: "OPTIMIZED",
  },
  {
    number: "07",
    name: "Kenya Counties",
    role: "Author / Maintainer",
    description:
      "Open-source Flutter package providing Kenyan county data and a customizable county selection component.",
    stack: "Dart · Flutter · Package Development · Pub.dev",
    status: "PUBLISHED",
  },
  {
    number: "08",
    name: "Legal Services Platform",
    role: "Web Architect",
    description:
      "High-performance web platform focused on SEO, responsive architecture, content delivery and lead generation.",
    stack: "Next.js · React · TypeScript · SEO",
    status: "VERIFIED",
  },
  {
    number: "09",
    name: "Gaming Community Platform",
    role: "Frontend Engineer",
    description:
      "Responsive community platform designed for gamers with modern web architecture and interactive user experiences.",
    stack: "Next.js · React · Tailwind · Vercel",
    status: "STABLE",
  },
  {
    number: "10",
    name: "Multiplayer Game Engine",
    role: "Engine Developer",
    description:
      "Real-time multiplayer environment focused on synchronized state, live gameplay and global leaderboard functionality.",
    stack: "Flutter · Firebase · Cloud Functions · Realtime DB",
    status: "EXPERIMENTAL",
  },
  {
    number: "11",
    name: "RoomieDuty",
    role: "Mobile Developer",
    description:
      "Mobile task-management application built around recurring responsibilities, task cycles, notifications and a smooth mobile experience.",
    stack: "Flutter · Firebase · Notifications",
    status: "BUILT",
  },
  {
    number: "12",
    name: "Offline Assistant",
    role: "Mobile Developer",
    description:
      "Offline-first mobile application exploring local processing and intelligent assistance without requiring continuous connectivity.",
    stack: "Flutter · Local Processing · Offline Architecture",
    status: "EXPERIMENTAL",
  },
  {
    number: "13",
    name: "Voice Assistant",
    role: "Systems Developer",
    description:
      "Desktop voice interaction experiment combining speech recognition, local processing and command-driven workflows.",
    stack: "Python · Speech Recognition · Local Models · macOS",
    status: "EXPERIMENTAL",
  },
  {
    number: "14",
    name: "Savings Platform",
    role: "Mobile Developer",
    description:
      "Mobile financial planning experience focused on savings goals, contribution tracking and simple user workflows.",
    stack: "Flutter · Firebase · Mobile Architecture",
    status: "BUILT",
  },
  {
    number: "15",
    name: "Weather Application",
    role: "Mobile Developer",
    description:
      "Weather application focused on API integration, location-aware data and responsive mobile presentation.",
    stack: "Flutter · REST APIs · Location",
    status: "BUILT",
  },
  {
    number: "16",
    name: "Football Community",
    role: "Application Developer",
    description:
      "Community-focused football application exploring live information, discussions and mobile-first user experiences.",
    stack: "Flutter · Firebase · APIs",
    status: "BUILT",
  },
];

const openSource = [
  {
    number: "01",
    name: "Context Curtain",
    description:
      "A production-ready Flutter UI/UX animation library using an organic physics-based canvas curtain effect for contextual navigation, onboarding and cinematic reveals.",
    tags: "Flutter · Dart · CustomPainter · Animation",
    pub: "https://pub.dev/packages/context_curtain",
    github: "https://github.com/swangai7178/curtain_context",
  },
  {
    number: "02",
    name: "Kenya Counties",
    description:
      "Flutter package for Kenyan county selection and geographical data integration with a customizable picker interface.",
    tags: "Flutter · Dart · Open Source",
    pub: "https://pub.dev/packages/kenya_counties",
    github: "https://github.com/swangai7178/kenya_counties",
  },
];

const stack = {
  mobile: [
    "Flutter",
    "Dart",
    "Kotlin",
    "Swift",
    "React Native",
    "Firebase",
  ],
  backend: [
    "Ruby on Rails",
    "Laravel",
    "Node.js",
    "Rust",
    "REST APIs",
    "Authentication",
  ],
  data: [
    "PostgreSQL",
    "Supabase",
    "Firestore",
    "Redis",
    "MySQL",
    "PostGIS",
  ],
  systems: [
    "Linux",
    "Docker",
    "Cloud Run",
    "CI/CD",
    "Maps",
    "Hardware Integration",
  ],
};

const principles = [
  {
    number: "01",
    title: "Build for production",
    text: "Architecture decisions should survive real users, real traffic and real operational constraints.",
  },
  {
    number: "02",
    title: "Keep systems maintainable",
    text: "Good engineering is not only about making software work. It is about making the next change predictable.",
  },
  {
    number: "03",
    title: "Secure the edges",
    text: "Authentication, authorization, validation and infrastructure security belong in the architecture from the beginning.",
  },
  {
    number: "04",
    title: "Measure before optimizing",
    text: "Performance work starts with understanding where the system actually spends its time and resources.",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <style jsx global>{`
        :root {
          --bg: #080808;
          --surface: #0e0e0e;
          --surface-2: #121212;
          --border: #242424;
          --border-light: #303030;
          --text: #f4f4f0;
          --muted: #929292;
          --muted-2: #626262;
          --green: #7dff9a;
          --max: 1240px;
        }

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        html {
          scroll-behavior: smooth;
          background: var(--bg);
        }

        body {
          background: var(--bg);
          color: var(--text);
          font-family:
            Inter,
            ui-sans-serif,
            system-ui,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif;
          line-height: 1.5;
          overflow-x: hidden;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        button {
          font: inherit;
        }

        ::selection {
          background: #fff;
          color: #000;
        }

        .page {
          min-height: 100vh;
          background:
            radial-gradient(
              circle at 85% 8%,
              rgba(255, 255, 255, 0.045),
              transparent 28%
            ),
            var(--bg);
        }

        .container {
          width: min(calc(100% - 48px), var(--max));
          margin: 0 auto;
        }

        .nav {
          position: fixed;
          z-index: 100;
          top: 0;
          left: 0;
          right: 0;
          height: 76px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.07);
          background: rgba(8, 8, 8, 0.84);
          backdrop-filter: blur(18px);
        }

        .nav-inner {
          height: 100%;
          width: min(calc(100% - 48px), var(--max));
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: -0.02em;
        }

        .brand-mark {
          width: 38px;
          height: 38px;
          display: grid;
          place-items: center;
          color: white;
        }

        .brand-mark svg {
          width: 100%;
          height: 100%;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 30px;
          color: var(--muted);
          font-size: 13px;
        }

        .nav-links a {
          transition: color 180ms ease;
        }

        .nav-links a:hover {
          color: white;
        }

        .nav-cta {
          padding: 10px 15px;
          border: 1px solid var(--border-light);
          color: white !important;
        }

        .menu-button {
          display: none;
          width: 40px;
          height: 40px;
          border: 1px solid var(--border);
          background: transparent;
          color: white;
          cursor: pointer;
        }

        .mobile-menu {
          display: none;
        }

        .hero {
          min-height: 820px;
          padding-top: 76px;
          display: flex;
          align-items: center;
          position: relative;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 80px;
          align-items: center;
        }

        .eyebrow {
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--muted);
          text-transform: uppercase;
          letter-spacing: 0.18em;
          font-size: 11px;
          font-weight: 600;
          margin-bottom: 28px;
        }

        .eyebrow-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--green);
          box-shadow: 0 0 12px rgba(125, 255, 154, 0.5);
        }

        .hero-logo {
          color: white;
          margin-bottom: 28px;
        }

        .hero-title {
          max-width: 850px;
          font-size: clamp(52px, 7vw, 92px);
          line-height: 0.94;
          letter-spacing: -0.065em;
          font-weight: 750;
        }

        .hero-title span {
          color: var(--muted);
        }

        .hero-description {
          max-width: 650px;
          margin-top: 32px;
          color: #a5a5a5;
          font-size: 18px;
          line-height: 1.7;
        }

        .hero-actions {
          display: flex;
          gap: 12px;
          margin-top: 36px;
          flex-wrap: wrap;
        }

        .button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 46px;
          padding: 0 18px;
          border: 1px solid var(--border-light);
          font-size: 13px;
          font-weight: 600;
          transition:
            background 180ms ease,
            color 180ms ease,
            border-color 180ms ease;
        }

        .button-primary {
          background: white;
          color: black;
          border-color: white;
        }

        .button-primary:hover {
          background: #dedede;
        }

        .button-secondary:hover {
          border-color: #555;
          background: #111;
        }

        .terminal {
          border: 1px solid var(--border);
          background: #0b0b0b;
          box-shadow: 0 30px 100px rgba(0, 0, 0, 0.35);
        }

        .terminal-bar {
          height: 42px;
          padding: 0 14px;
          display: flex;
          align-items: center;
          gap: 6px;
          border-bottom: 1px solid var(--border);
        }

        .terminal-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #444;
        }

        .terminal-title {
          margin-left: 8px;
          color: #666;
          font-size: 10px;
          letter-spacing: 0.08em;
        }

        .terminal-body {
          padding: 26px;
          min-height: 350px;
          font-family:
            "SFMono-Regular",
            Consolas,
            "Liberation Mono",
            monospace;
          font-size: 12px;
          line-height: 2;
          color: #bcbcbc;
        }

        .terminal-line {
          display: block;
        }

        .terminal-key {
          color: #6d6d6d;
        }

        .terminal-value {
          color: #ededed;
        }

        .terminal-green {
          color: var(--green);
        }

        .terminal-indent {
          padding-left: 20px;
        }

        .section {
          padding: 130px 0;
          border-top: 1px solid var(--border);
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 30px;
          margin-bottom: 55px;
        }

        .section-number {
          color: var(--muted-2);
          font-family: monospace;
          font-size: 12px;
          margin-bottom: 12px;
        }

        .section-title {
          font-size: clamp(38px, 5vw, 64px);
          line-height: 0.98;
          letter-spacing: -0.055em;
        }

        .section-description {
          max-width: 430px;
          color: var(--muted);
          font-size: 14px;
          line-height: 1.7;
        }

        .project-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1px;
          background: var(--border);
          border: 1px solid var(--border);
        }

        .project {
          min-height: 360px;
          padding: 34px;
          background: var(--surface);
          display: flex;
          flex-direction: column;
          transition: background 180ms ease;
        }

        .project:hover {
          background: var(--surface-2);
        }

        .project-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 55px;
        }

        .project-number {
          color: var(--muted-2);
          font-family: monospace;
          font-size: 12px;
        }

        .project-status {
          color: var(--muted);
          font-family: monospace;
          font-size: 9px;
          letter-spacing: 0.1em;
        }

        .project h3 {
          font-size: 27px;
          line-height: 1.05;
          letter-spacing: -0.035em;
        }

        .project-role {
          margin-top: 8px;
          color: var(--muted);
          font-size: 12px;
        }

        .project-description {
          max-width: 560px;
          margin-top: 20px;
          color: #999;
          font-size: 14px;
          line-height: 1.7;
        }

        .project-bottom {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 20px;
          margin-top: auto;
          padding-top: 35px;
        }

        .project-stack {
          color: #666;
          font-family: monospace;
          font-size: 10px;
          line-height: 1.6;
        }

        .project-link {
          white-space: nowrap;
          color: white;
          font-size: 11px;
          letter-spacing: 0.08em;
        }

        .opensource-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;
        }

        .opensource-card {
          border: 1px solid var(--border);
          padding: 32px;
          background: var(--surface);
        }

        .opensource-card:hover {
          border-color: var(--border-light);
        }

        .opensource-number {
          color: var(--muted-2);
          font-family: monospace;
          font-size: 11px;
        }

        .opensource-card h3 {
          margin-top: 40px;
          font-size: 28px;
          letter-spacing: -0.04em;
        }

        .opensource-card p {
          margin-top: 16px;
          max-width: 560px;
          color: var(--muted);
          font-size: 14px;
          line-height: 1.7;
        }

        .opensource-tags {
          margin-top: 25px;
          color: #666;
          font-family: monospace;
          font-size: 10px;
        }

        .opensource-actions {
          display: flex;
          gap: 18px;
          margin-top: 30px;
        }

        .text-link {
          color: white;
          font-size: 11px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .stack-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          border-top: 1px solid var(--border);
          border-left: 1px solid var(--border);
        }

        .stack-group {
          padding: 35px;
          min-height: 220px;
          border-right: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }

        .stack-group-title {
          color: var(--muted);
          font-family: monospace;
          font-size: 10px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .stack-items {
          display: flex;
          flex-wrap: wrap;
          gap: 9px;
          margin-top: 25px;
        }

        .stack-item {
          border: 1px solid var(--border);
          padding: 8px 10px;
          color: #c9c9c9;
          background: #0b0b0b;
          font-size: 12px;
        }

        .architecture {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .architecture-copy h2 {
          max-width: 650px;
          font-size: clamp(40px, 5vw, 68px);
          line-height: 0.98;
          letter-spacing: -0.055em;
        }

        .architecture-copy p {
          max-width: 570px;
          margin-top: 28px;
          color: var(--muted);
          font-size: 15px;
          line-height: 1.8;
        }

        .architecture-diagram {
          position: relative;
          min-height: 410px;
          border: 1px solid var(--border);
          background:
            linear-gradient(
              90deg,
              transparent 49.8%,
              rgba(255, 255, 255, 0.035) 50%,
              transparent 50.2%
            ),
            linear-gradient(
              transparent 49.8%,
              rgba(255, 255, 255, 0.035) 50%,
              transparent 50.2%
            ),
            #0b0b0b;
        }

        .diagram-node {
          position: absolute;
          border: 1px solid #3a3a3a;
          background: #111;
          padding: 12px 16px;
          color: #ddd;
          font-family: monospace;
          font-size: 10px;
        }

        .node-1 {
          top: 40px;
          left: 30px;
        }

        .node-2 {
          top: 40px;
          right: 30px;
        }

        .node-3 {
          top: 170px;
          left: 50%;
          transform: translateX(-50%);
        }

        .node-4 {
          bottom: 45px;
          left: 35px;
        }

        .node-5 {
          bottom: 45px;
          right: 35px;
        }

        .diagram-center {
          position: absolute;
          width: 105px;
          height: 105px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border: 1px solid #555;
          border-radius: 50%;
          display: grid;
          place-items: center;
          color: white;
          font-family: monospace;
          font-size: 10px;
          background: #0c0c0c;
        }

        .systems {
          display: grid;
          grid-template-columns: 0.75fr 1.25fr;
          gap: 80px;
        }

        .systems-title {
          font-size: clamp(40px, 5vw, 65px);
          line-height: 0.98;
          letter-spacing: -0.055em;
        }

        .systems-description {
          margin-top: 25px;
          color: var(--muted);
          font-size: 14px;
          line-height: 1.8;
        }

        .systems-list {
          border-top: 1px solid var(--border);
        }

        .system-row {
          display: grid;
          grid-template-columns: 55px 1fr;
          gap: 20px;
          padding: 24px 0;
          border-bottom: 1px solid var(--border);
        }

        .system-row-number {
          color: var(--muted-2);
          font-family: monospace;
          font-size: 11px;
        }

        .system-row h3 {
          font-size: 17px;
          font-weight: 600;
        }

        .system-row p {
          margin-top: 6px;
          color: var(--muted);
          font-size: 13px;
          line-height: 1.65;
        }

        .principles {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border-top: 1px solid var(--border);
          border-left: 1px solid var(--border);
        }

        .principle {
          min-height: 270px;
          padding: 28px;
          border-right: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }

        .principle-number {
          color: var(--muted-2);
          font-family: monospace;
          font-size: 11px;
        }

        .principle h3 {
          margin-top: 75px;
          font-size: 18px;
          line-height: 1.2;
        }

        .principle p {
          margin-top: 12px;
          color: var(--muted);
          font-size: 12px;
          line-height: 1.7;
        }

        .about {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 100px;
        }

        .about-title {
          font-size: clamp(40px, 5vw, 70px);
          line-height: 0.98;
          letter-spacing: -0.055em;
        }

        .about-copy {
          color: #aaa;
          font-size: 16px;
          line-height: 1.85;
        }

        .about-copy p + p {
          margin-top: 22px;
        }

        .contact {
          min-height: 580px;
          display: flex;
          align-items: center;
        }

        .contact-inner {
          width: 100%;
          text-align: center;
        }

        .contact-label {
          color: var(--muted);
          font-family: monospace;
          font-size: 11px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }

        .contact-title {
          max-width: 1000px;
          margin: 25px auto 0;
          font-size: clamp(52px, 9vw, 120px);
          line-height: 0.88;
          letter-spacing: -0.07em;
        }

        .contact-email {
          display: inline-block;
          margin-top: 42px;
          padding-bottom: 8px;
          border-bottom: 1px solid #555;
          font-size: 17px;
          transition: border-color 180ms ease;
        }

        .contact-email:hover {
          border-color: white;
        }

        .footer {
          border-top: 1px solid var(--border);
          padding: 28px 0;
        }

        .footer-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          color: var(--muted-2);
          font-family: monospace;
          font-size: 10px;
        }

        .footer-links {
          display: flex;
          gap: 20px;
        }

        .footer-links a:hover {
          color: white;
        }

        @media (max-width: 1000px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 60px;
          }

          .terminal {
            max-width: 700px;
          }

          .architecture,
          .systems,
          .about {
            grid-template-columns: 1fr;
            gap: 55px;
          }

          .principles {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 800px) {
          .project-grid,
          .opensource-grid,
          .stack-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 700px) {
          .container,
          .nav-inner {
            width: min(calc(100% - 30px), var(--max));
          }

          .nav {
            height: 68px;
          }

          .nav-links {
            display: none;
          }

          .menu-button {
            display: grid;
            place-items: center;
          }

          .mobile-menu {
            position: fixed;
            display: flex;
            flex-direction: column;
            top: 68px;
            left: 0;
            right: 0;
            background: rgba(8, 8, 8, 0.98);
            border-bottom: 1px solid var(--border);
            padding: 15px;
          }

          .mobile-menu a {
            padding: 16px 10px;
            border-bottom: 1px solid var(--border);
            color: #aaa;
            font-size: 13px;
          }

          .hero {
            min-height: auto;
            padding-top: 120px;
            padding-bottom: 80px;
          }

          .hero-logo {
            margin-bottom: 22px;
          }

          .hero-title {
            font-size: clamp(48px, 14vw, 76px);
          }

          .hero-description {
            font-size: 16px;
          }

          .section {
            padding: 85px 0;
          }

          .section-header {
            display: block;
            margin-bottom: 35px;
          }

          .section-description {
            margin-top: 20px;
          }

          .project {
            min-height: 390px;
            padding: 25px;
          }

          .project-top {
            margin-bottom: 45px;
          }

          .project h3 {
            font-size: 25px;
          }

          .project-bottom {
            display: block;
          }

          .project-link {
            display: inline-block;
            margin-top: 20px;
          }

          .opensource-card {
            padding: 25px;
          }

          .opensource-card h3 {
            margin-top: 35px;
          }

          .stack-group {
            min-height: auto;
            padding: 25px;
          }

          .architecture-diagram {
            min-height: 330px;
          }

          .diagram-node {
            padding: 9px 11px;
            font-size: 8px;
          }

          .diagram-center {
            width: 85px;
            height: 85px;
            font-size: 8px;
          }

          .principles {
            grid-template-columns: 1fr;
          }

          .principle {
            min-height: auto;
          }

          .principle h3 {
            margin-top: 45px;
          }

          .contact {
            min-height: 470px;
          }

          .contact-title {
            font-size: clamp(50px, 15vw, 82px);
          }

          .contact-email {
            font-size: 14px;
            word-break: break-word;
          }

          .footer-inner {
            display: block;
          }

          .footer-links {
            margin-top: 14px;
          }
        }
      `}</style>

      <div className="page">
        <nav className="nav">
          <div className="nav-inner">
            <a href="#" className="brand" onClick={closeMenu}>
              <span className="brand-mark">
                <SWLogo />
              </span>

              <span>Samuel Wangai</span>
            </a>

            <div className="nav-links">
              <a href="#work">Work</a>
              <a href="#opensource">Open Source</a>
              <a href="#stack">Stack</a>
              <a href="#systems">Systems</a>
              <a href="#about">About</a>

              <a href="#contact" className="nav-cta">
                Contact
              </a>
            </div>

            <button
              type="button"
              className="menu-button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation"
            >
              {menuOpen ? "×" : "☰"}
            </button>
          </div>

          {menuOpen && (
            <div className="mobile-menu">
              <a href="#work" onClick={closeMenu}>
                Work
              </a>

              <a href="#opensource" onClick={closeMenu}>
                Open Source
              </a>

              <a href="#stack" onClick={closeMenu}>
                Stack
              </a>

              <a href="#systems" onClick={closeMenu}>
                Systems
              </a>

              <a href="#about" onClick={closeMenu}>
                About
              </a>

              <a href="#contact" onClick={closeMenu}>
                Contact
              </a>
            </div>
          )}
        </nav>

        <main>
          <section className="hero">
            <div className="container">
              <div className="hero-grid">
                <div>
                  <div className="eyebrow">
                    <span className="eyebrow-dot" />
                    Full Stack Systems Engineer
                  </div>

                  <div className="hero-logo">
                    <SWLogo large />
                  </div>

                  <h1 className="hero-title">
                    Mobile architecture.
                    <br />
                    Backend systems.
                    <br />
                    <span>Engineering that scales.</span>
                  </h1>

                  <p className="hero-description">
                    I design and build production software across mobile,
                    backend, cloud infrastructure and connected systems —
                    from Flutter applications and Rails APIs to real-time
                    services and hardware-integrated platforms.
                  </p>

                  <div className="hero-actions">
                    <a href="#work" className="button button-primary">
                      View selected work
                    </a>

                    <a
                      href="https://github.com/swangai7178"
                      target="_blank"
                      rel="noreferrer"
                      className="button button-secondary"
                    >
                      GitHub
                    </a>
                  </div>
                </div>

                <div className="terminal">
                  <div className="terminal-bar">
                    <span className="terminal-dot" />
                    <span className="terminal-dot" />
                    <span className="terminal-dot" />

                    <span className="terminal-title">
                      samuel@systems ~ profile
                    </span>
                  </div>

                  <div className="terminal-body">
                    <span className="terminal-line">
                      <span className="terminal-key">const </span>
                      <span className="terminal-value">engineer</span>{" "}
                      <span className="terminal-key">= {"{"}</span>
                    </span>

                    <span className="terminal-line terminal-indent">
                      <span className="terminal-key">name:</span>{" "}
                      <span className="terminal-value">
                        &quot;Samuel Wangai&quot;
                      </span>
                      ,
                    </span>

                    <span className="terminal-line terminal-indent">
                      <span className="terminal-key">focus:</span>{" "}
                      <span className="terminal-value">
                        &quot;Systems Engineering&quot;
                      </span>
                      ,
                    </span>

                    <span className="terminal-line terminal-indent">
                      <span className="terminal-key">mobile:</span>{" "}
                      <span className="terminal-value">
                        [&quot;Flutter&quot;, &quot;Kotlin&quot;, &quot;Swift&quot;]
                      </span>
                      ,
                    </span>

                    <span className="terminal-line terminal-indent">
                      <span className="terminal-key">backend:</span>{" "}
                      <span className="terminal-value">
                        [&quot;Rails&quot;, &quot;Laravel&quot;, &quot;Node&quot;,
                        &quot;Rust&quot;]
                      </span>
                      ,
                    </span>

                    <span className="terminal-line terminal-indent">
                      <span className="terminal-key">data:</span>{" "}
                      <span className="terminal-value">
                        [&quot;PostgreSQL&quot;, &quot;Redis&quot;,
                        &quot;Firestore&quot;]
                      </span>
                      ,
                    </span>

                    <span className="terminal-line terminal-indent">
                      <span className="terminal-key">systems:</span>{" "}
                      <span className="terminal-value">
                        [&quot;Linux&quot;, &quot;Docker&quot;, &quot;Cloud
                        Run&quot;]
                      </span>
                    </span>

                    <span className="terminal-line">
                      <span className="terminal-key">{"}"}</span>
                    </span>

                    <br />

                    <span className="terminal-line">
                      <span className="terminal-green">$</span>{" "}
                      <span className="terminal-value">
                        ./build --environment=production
                      </span>
                    </span>

                    <span className="terminal-line">
                      <span className="terminal-key">→ </span>
                      compiling architecture...
                    </span>

                    <span className="terminal-line">
                      <span className="terminal-key">→ </span>
                      connecting services...
                    </span>

                    <span className="terminal-line">
                      <span className="terminal-key">→ </span>
                      validating interfaces...
                    </span>

                    <span className="terminal-line">
                      <span className="terminal-green">✓ </span>
                      system ready
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section" id="work">
            <div className="container">
              <div className="section-header">
                <div>
                  <div className="section-number">01 / SELECTED WORK</div>

                  <h2 className="section-title">
                    Systems in production.
                  </h2>
                </div>

                <p className="section-description">
                  Selected platforms, applications and engineering projects
                  spanning commerce, logistics, mobile, web, IoT, developer
                  tooling and connected systems.
                </p>
              </div>

              <div className="project-grid">
                {projects.map((project) => (
                  <article className="project" key={project.number}>
                    <div className="project-top">
                      <span className="project-number">
                        {project.number}
                      </span>

                      <span className="project-status">
                        {project.status}
                      </span>
                    </div>

                    <div>
                      <h3>{project.name}</h3>

                      <div className="project-role">{project.role}</div>

                      <p className="project-description">
                        {project.description}
                      </p>
                    </div>

                    <div className="project-bottom">
                      <span className="project-stack">
                        {project.stack}
                      </span>

                      <span className="project-link">EXPLORE →</span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="section" id="opensource">
            <div className="container">
              <div className="section-header">
                <div>
                  <div className="section-number">02 / OPEN SOURCE</div>

                  <h2 className="section-title">Tools I ship.</h2>
                </div>

                <p className="section-description">
                  Developer-focused libraries and packages built to solve
                  reusable problems and shared publicly.
                </p>
              </div>

              <div className="opensource-grid">
                {openSource.map((item) => (
                  <article className="opensource-card" key={item.number}>
                    <span className="opensource-number">
                      {item.number}
                    </span>

                    <h3>{item.name}</h3>

                    <p>{item.description}</p>

                    <div className="opensource-tags">{item.tags}</div>

                    <div className="opensource-actions">
                      <a
                        href={item.pub}
                        target="_blank"
                        rel="noreferrer"
                        className="text-link"
                      >
                        Pub.dev →
                      </a>

                      <a
                        href={item.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-link"
                      >
                        GitHub →
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="section" id="stack">
            <div className="container">
              <div className="section-header">
                <div>
                  <div className="section-number">
                    03 / ENGINEERING STACK
                  </div>

                  <h2 className="section-title">
                    The tools behind it.
                  </h2>
                </div>

                <p className="section-description">
                  A practical stack built around shipping reliable software
                  rather than following a single technology trend.
                </p>
              </div>

              <div className="stack-grid">
                <div className="stack-group">
                  <div className="stack-group-title">Mobile</div>

                  <div className="stack-items">
                    {stack.mobile.map((item) => (
                      <span className="stack-item" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="stack-group">
                  <div className="stack-group-title">Backend</div>

                  <div className="stack-items">
                    {stack.backend.map((item) => (
                      <span className="stack-item" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="stack-group">
                  <div className="stack-group-title">Data</div>

                  <div className="stack-items">
                    {stack.data.map((item) => (
                      <span className="stack-item" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="stack-group">
                  <div className="stack-group-title">Systems</div>

                  <div className="stack-items">
                    {stack.systems.map((item) => (
                      <span className="stack-item" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section" id="architecture">
            <div className="container">
              <div className="architecture">
                <div className="architecture-copy">
                  <div className="section-number">04 / ARCHITECTURE</div>

                  <h2>
                    Think beyond
                    <br />
                    the interface.
                  </h2>

                  <p>
                    Applications are only one layer of a system. I work
                    across APIs, databases, messaging, authentication,
                    cloud infrastructure, maps, device communication and
                    the mobile experience that connects everything together.
                  </p>
                </div>

                <div className="architecture-diagram">
                  <div className="diagram-node node-1">MOBILE</div>

                  <div className="diagram-node node-2">WEB</div>

                  <div className="diagram-node node-3">
                    API / SERVICES
                  </div>

                  <div className="diagram-node node-4">DATABASE</div>

                  <div className="diagram-node node-5">DEVICES</div>

                  <div className="diagram-center">SYSTEM</div>
                </div>
              </div>
            </div>
          </section>

          <section className="section" id="systems">
            <div className="container">
              <div className="systems">
                <div>
                  <div className="section-number">
                    05 / SYSTEMS ENGINEERING
                  </div>

                  <h2 className="systems-title">
                    When software
                    <br />
                    meets the physical world.
                  </h2>

                  <p className="systems-description">
                    Some systems require engineering beyond the application
                    layer. My work has included mobile applications,
                    backend services, device communication and physical
                    infrastructure while keeping sensitive implementation
                    details private.
                  </p>
                </div>

                <div className="systems-list">
                  <div className="system-row">
                    <span className="system-row-number">01</span>

                    <div>
                      <h3>Connected Infrastructure</h3>

                      <p>
                        Integrated mobile software with physical
                        infrastructure, connecting application workflows to
                        device-level operations.
                      </p>
                    </div>
                  </div>

                  <div className="system-row">
                    <span className="system-row-number">02</span>

                    <div>
                      <h3>Device Communication</h3>

                      <p>
                        Worked across mobile, native platform services and
                        device communication layers to diagnose and
                        integrate connected systems.
                      </p>
                    </div>
                  </div>

                  <div className="system-row">
                    <span className="system-row-number">03</span>

                    <div>
                      <h3>Real-Time Operations</h3>

                      <p>
                        Built location-aware and event-driven workflows
                        involving real-time updates, notifications,
                        routing and operational state.
                      </p>
                    </div>
                  </div>

                  <div className="system-row">
                    <span className="system-row-number">04</span>

                    <div>
                      <h3>Production Integration</h3>

                      <p>
                        Connected mobile applications, backend services and
                        infrastructure into production workflows while
                        working within security and confidentiality
                        requirements.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section">
            <div className="container">
              <div className="section-header">
                <div>
                  <div className="section-number">06 / PRINCIPLES</div>

                  <h2 className="section-title">How I engineer.</h2>
                </div>
              </div>

              <div className="principles">
                {principles.map((principle) => (
                  <article className="principle" key={principle.number}>
                    <span className="principle-number">
                      {principle.number}
                    </span>

                    <h3>{principle.title}</h3>

                    <p>{principle.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="section" id="about">
            <div className="container">
              <div className="about">
                <div>
                  <div className="section-number">07 / ABOUT</div>

                  <h2 className="about-title">
                    Software is
                    <br />
                    systems.
                  </h2>
                </div>

                <div className="about-copy">
                  <p>
                    I am Samuel Wangai, a Full Stack Systems Engineer
                    focused on mobile architecture, backend systems and
                    production software.
                  </p>

                  <p>
                    My work spans Flutter and native mobile development,
                    Ruby on Rails, Laravel, Node.js and Rust backends,
                    PostgreSQL and distributed data systems, cloud
                    infrastructure and connected hardware.
                  </p>

                  <p>
                    I enjoy working on problems where the boundary between
                    product development and systems engineering disappears:
                    real-time applications, logistics platforms, commerce,
                    developer tooling, APIs, infrastructure and physical
                    system integrations.
                  </p>

                  <p>
                    The goal is simple: build software that is reliable,
                    understandable and ready for real-world use.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="section contact" id="contact">
            <div className="container">
              <div className="contact-inner">
                <div className="contact-label">
                  08 / START A CONVERSATION
                </div>

                <h2 className="contact-title">
                  Have a system
                  <br />
                  to build?
                </h2>

                <a
                  href="mailto:swangai7178@gmail.com"
                  className="contact-email"
                >
                  swangai7178@gmail.com
                </a>
              </div>
            </div>
          </section>
        </main>

        <footer className="footer">
          <div className="container">
            <div className="footer-inner">
              <span>
                © {new Date().getFullYear()} Samuel Wangai. Built with
                precision.
              </span>

              <div className="footer-links">
                <a
                  href="https://github.com/swangai7178"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>

                <a
                  href="https://pub.dev/packages/context_curtain"
                  target="_blank"
                  rel="noreferrer"
                >
                  Pub.dev
                </a>

                <a
                  href="mailto:swangai7178@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Email
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
