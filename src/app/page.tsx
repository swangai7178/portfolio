"use client";

import { useState } from "react";

const projects = [
  {
    number: "01",
    category: "LOGISTICS PLATFORM",
    title: "Pinned Flow",
    description:
      "A delivery ecosystem connecting runners, senders, locker infrastructure and backend services into a single operational platform.",
    stack: [
      "Flutter",
      "Ruby on Rails",
      "PostgreSQL",
      "Firebase",
      "Maps",
      "IoT",
    ],
    featured: true,
  },
  {
    number: "02",
    category: "COMMERCE PLATFORM",
    title: "QuadVendor",
    description:
      "A commerce and POS ecosystem covering vendors, products, orders, payments and operational workflows.",
    stack: ["Flutter", "Next.js", "API", "PostgreSQL"],
    featured: true,
  },
  {
    number: "03",
    category: "E-COMMERCE",
    title: "SmartPly",
    description:
      "A mobile commerce platform connecting customers, products, vendors and order workflows.",
    stack: ["Flutter", "Laravel", "Firebase", "REST API"],
    featured: false,
  },
  {
    number: "04",
    category: "BUSINESS SOFTWARE",
    title: "Sahibu",
    description:
      "Business-focused software for managing operational records and workflows through a mobile-first experience.",
    stack: ["Flutter", "Backend APIs", "PostgreSQL"],
    featured: false,
  },
];

const openSource = [
  {
    number: "01",
    title: "Context Curtain",
    category: "FLUTTER PACKAGE",
    description:
      "A physics-based curtain animation library for Flutter applications, designed for cinematic transitions and reusable UI experiences.",
    technologies: ["Flutter", "Dart", "CustomPainter", "AnimationController"],
    pub: "https://pub.dev/packages/context_curtain",
    github: "https://github.com/swangai7178",
  },
  {
    number: "02",
    title: "Kenya Counties",
    category: "FLUTTER PACKAGE",
    description:
      "A reusable Flutter package for Kenyan county and geographic selection workflows.",
    technologies: ["Flutter", "Dart", "Open Source"],
    pub: "https://pub.dev",
    github: "https://github.com/swangai7178",
  },
];

const stack = [
  {
    title: "MOBILE",
    items: [
      "Flutter",
      "Dart",
      "Kotlin",
      "Swift",
      "React Native",
      "Firebase",
    ],
  },
  {
    title: "BACKEND",
    items: [
      "Ruby on Rails",
      "Laravel",
      "Node.js",
      "Rust",
      "REST APIs",
      "Authentication",
    ],
  },
  {
    title: "DATA",
    items: [
      "PostgreSQL",
      "Supabase",
      "Firestore",
      "Redis",
      "MySQL",
      "PostGIS",
    ],
  },
  {
    title: "SYSTEMS",
    items: [
      "Linux",
      "Docker",
      "Cloud Run",
      "CI/CD",
      "Maps",
      "Hardware Integration",
    ],
  },
];

const principles = [
  ["01", "Build for production"],
  ["02", "Keep systems maintainable"],
  ["03", "Secure the edges"],
  ["04", "Measure before optimizing"],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMenuOpen(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <main>
      <style jsx global>{`
        :root {
          --bg: #07090c;
          --bg-soft: #0b0e12;
          --panel: #101419;
          --panel-hover: #151a20;
          --border: #222830;
          --border-light: #333b45;
          --text: #f5f7f9;
          --muted: #929ba6;
          --muted-2: #606a75;
          --accent: #6ea8ff;
          --green: #63d391;
        }

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          padding: 0;
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
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        button {
          font: inherit;
        }

        .site {
          min-height: 100vh;
          overflow: hidden;
          background:
            radial-gradient(
              circle at 75% 12%,
              rgba(57, 103, 170, 0.09),
              transparent 28%
            ),
            radial-gradient(
              circle at 10% 65%,
              rgba(57, 103, 170, 0.045),
              transparent 25%
            ),
            var(--bg);
        }

        .container {
          width: min(1180px, calc(100% - 48px));
          margin: 0 auto;
        }

        /* NAV */

        .nav {
          position: relative;
          height: 84px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 16px;
          font-weight: 700;
          letter-spacing: -0.03em;
        }

        .brand-mark {
          width: 37px;
          height: 37px;
          display: grid;
          place-items: center;
          border: 1px solid var(--border-light);
          border-radius: 8px;
          color: white;
          background: rgba(255, 255, 255, 0.02);
        }

        .brand-mark svg {
          width: 29px;
          height: 23px;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 31px;
        }

        .nav-links a {
          color: var(--muted);
          font-size: 11px;
          letter-spacing: 0.12em;
          transition: color 180ms ease;
        }

        .nav-links a:hover {
          color: white;
        }

        .availability {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--muted-2);
          font-size: 9px;
          letter-spacing: 0.16em;
        }

        .availability-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--green);
          box-shadow: 0 0 12px rgba(99, 211, 145, 0.45);
        }

        .menu-button {
          display: none;
          width: 42px;
          height: 42px;
          border: 1px solid var(--border);
          border-radius: 7px;
          background: transparent;
          color: white;
          cursor: pointer;
        }

        .mobile-menu {
          position: absolute;
          z-index: 50;
          top: 72px;
          left: 0;
          right: 0;
          padding: 15px 20px;
          display: flex;
          flex-direction: column;
          border: 1px solid var(--border);
          border-radius: 8px;
          background: #0a0d11;
        }

        .mobile-menu a {
          padding: 14px 0;
          color: var(--muted);
          border-bottom: 1px solid var(--border);
          font-size: 12px;
          letter-spacing: 0.12em;
        }

        .mobile-menu a:last-child {
          border-bottom: none;
        }

        /* LOGO */

        .sw-logo {
          display: grid;
          place-items: center;
          width: 100%;
          height: 100%;
        }

        .sw-logo svg {
          width: 100%;
          height: 100%;
        }

        .sw-logo-large {
          width: 280px;
          height: 190px;
        }

        /* HERO */

        .hero {
          min-height: 720px;
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          align-items: center;
          gap: 80px;
          padding: 90px 0 110px;
        }

        .hero-visual {
          position: relative;
          min-height: 455px;
          display: grid;
          place-items: center;
          overflow: hidden;
          border: 1px solid var(--border);
          border-radius: 16px;
          background:
            linear-gradient(
              135deg,
              rgba(255, 255, 255, 0.025),
              transparent 55%
            ),
            var(--panel);
        }

        .hero-visual::before {
          content: "";
          position: absolute;
          width: 350px;
          height: 350px;
          border: 1px solid rgba(110, 168, 255, 0.1);
          border-radius: 50%;
        }

        .hero-visual::after {
          content: "";
          position: absolute;
          width: 520px;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(110, 168, 255, 0.22),
            transparent
          );
          transform: rotate(-35deg);
        }

        .logo-wrap {
          position: relative;
          z-index: 2;
          width: 280px;
          color: white;
          filter: drop-shadow(0 0 35px rgba(255, 255, 255, 0.08));
        }

        .hero-visual-label {
          position: absolute;
          left: 28px;
          bottom: 25px;
          color: var(--muted-2);
          font-family: monospace;
          font-size: 9px;
          letter-spacing: 0.2em;
        }

        .terminal {
          position: absolute;
          top: -50px;
          right: -20px;
          width: 275px;
          padding: 14px 16px;
          border: 1px solid var(--border);
          border-radius: 8px;
          background: rgba(8, 11, 15, 0.9);
          font-family: "SFMono-Regular", Consolas, monospace;
          font-size: 10px;
          line-height: 1.8;
          color: var(--muted);
        }

        .terminal-line {
          color: var(--accent);
        }

        .eyebrow {
          margin: 0 0 24px;
          color: var(--muted);
          font-family: monospace;
          font-size: 10px;
          letter-spacing: 0.22em;
        }

        .hero h1 {
          margin: 0;
          font-size: clamp(55px, 7vw, 88px);
          line-height: 0.94;
          letter-spacing: -0.07em;
          font-weight: 750;
        }

        .hero h1 span {
          display: block;
          color: #aab3bd;
        }

        .hero-title {
          margin-top: 28px;
          color: #e9edf1;
          font-size: 16px;
          letter-spacing: 0.03em;
        }

        .hero-description {
          max-width: 570px;
          margin: 20px 0 0;
          color: var(--muted);
          font-size: 16px;
          line-height: 1.85;
        }

        .hero-actions {
          display: flex;
          gap: 12px;
          margin-top: 35px;
        }

        .button {
          height: 48px;
          padding: 0 22px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 5px;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.1em;
          cursor: pointer;
          transition:
            transform 180ms ease,
            background 180ms ease,
            border-color 180ms ease;
        }

        .button:hover {
          transform: translateY(-2px);
        }

        .button-primary {
          border: 1px solid white;
          background: white;
          color: #07090c;
        }

        .button-secondary {
          border: 1px solid var(--border-light);
          background: transparent;
          color: white;
        }

        .button-secondary:hover {
          border-color: #5d6772;
          background: rgba(255, 255, 255, 0.03);
        }

        /* SECTIONS */

        .section {
          padding: 120px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
        }

        .section-heading {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 30px;
          margin-bottom: 52px;
        }

        .section-number {
          margin-bottom: 14px;
          color: var(--muted-2);
          font-family: monospace;
          font-size: 9px;
          letter-spacing: 0.2em;
        }

        .section h2 {
          margin: 0;
          font-size: clamp(40px, 5vw, 62px);
          line-height: 1;
          letter-spacing: -0.06em;
        }

        .section-intro {
          max-width: 450px;
          margin: 0;
          color: var(--muted);
          font-size: 14px;
          line-height: 1.8;
        }

        /* PROJECTS */

        .projects {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        .project {
          position: relative;
          min-height: 315px;
          padding: 30px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          overflow: hidden;
          border: 1px solid var(--border);
          border-radius: 10px;
          background: var(--panel);
          transition:
            transform 220ms ease,
            border-color 220ms ease,
            background 220ms ease;
        }

        .project.featured {
          min-height: 365px;
        }

        .project:hover {
          transform: translateY(-5px);
          border-color: var(--border-light);
          background: var(--panel-hover);
        }

        .project::after {
          content: "";
          position: absolute;
          width: 180px;
          height: 180px;
          right: -90px;
          bottom: -90px;
          border: 1px solid rgba(110, 168, 255, 0.07);
          border-radius: 50%;
        }

        .project-top {
          display: flex;
          justify-content: space-between;
          color: var(--muted-2);
          font-family: monospace;
          font-size: 9px;
          letter-spacing: 0.16em;
        }

        .project h3 {
          margin: 45px 0 14px;
          font-size: 32px;
          letter-spacing: -0.045em;
        }

        .project p {
          max-width: 500px;
          margin: 0;
          color: var(--muted);
          font-size: 14px;
          line-height: 1.75;
        }

        .project-bottom {
          margin-top: 38px;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 20px;
        }

        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
        }

        .tag {
          padding: 7px 9px;
          border: 1px solid var(--border);
          border-radius: 3px;
          color: var(--muted);
          font-family: monospace;
          font-size: 8px;
        }

        .case-link {
          white-space: nowrap;
          color: white;
          font-family: monospace;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.1em;
        }

        /* OPEN SOURCE */

        .opensource-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        .opensource-card {
          position: relative;
          min-height: 330px;
          padding: 35px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border: 1px solid var(--border);
          border-radius: 10px;
          background: var(--panel);
          transition:
            transform 220ms ease,
            border-color 220ms ease;
        }

        .opensource-card:hover {
          transform: translateY(-5px);
          border-color: var(--border-light);
        }

        .opensource-number {
          color: var(--muted-2);
          font-family: monospace;
          font-size: 9px;
        }

        .opensource-card h3 {
          margin: 28px 0 12px;
          font-size: 34px;
          letter-spacing: -0.05em;
        }

        .opensource-card p {
          max-width: 540px;
          color: var(--muted);
          font-size: 14px;
          line-height: 1.8;
        }

        .opensource-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
          margin-top: 25px;
        }

        .opensource-tech span {
          padding: 7px 9px;
          border: 1px solid var(--border);
          border-radius: 3px;
          color: var(--muted);
          font-family: monospace;
          font-size: 8px;
        }

        .opensource-actions {
          display: flex;
          gap: 25px;
          margin-top: 30px;
        }

        .opensource-actions a {
          color: white;
          font-family: monospace;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.08em;
        }

        /* STACK */

        .stack-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          overflow: hidden;
          border: 1px solid var(--border);
          background: var(--border);
        }

        .stack-card {
          min-height: 250px;
          padding: 30px;
          background: var(--bg-soft);
        }

        .stack-card h3 {
          margin: 0 0 32px;
          color: var(--muted);
          font-family: monospace;
          font-size: 9px;
          letter-spacing: 0.2em;
        }

        .stack-card ul {
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .stack-card li {
          margin-bottom: 13px;
          color: #e4e8ec;
          font-size: 13px;
        }

        /* ARCHITECTURE */

        .architecture {
          display: grid;
          grid-template-columns: 0.7fr 1.3fr;
          gap: 70px;
          align-items: center;
        }

        .architecture h2 {
          font-size: clamp(40px, 5vw, 60px);
        }

        .architecture-copy p {
          max-width: 430px;
          color: var(--muted);
          line-height: 1.85;
        }

        .architecture-flow {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 8px;
        }

        .architecture-node {
          min-height: 145px;
          padding: 20px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border: 1px solid var(--border);
          border-radius: 7px;
          background: var(--panel);
        }

        .architecture-node strong:first-child {
          color: var(--muted-2);
          font-family: monospace;
          font-size: 9px;
        }

        .architecture-node strong:nth-child(2) {
          font-size: 13px;
        }

        .architecture-node span {
          color: var(--muted);
          font-size: 10px;
          line-height: 1.5;
        }

        /* HARDWARE */

        .systems-section {
          background:
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.015),
              transparent 40%,
              rgba(255, 255, 255, 0.015)
            );
        }

        .systems-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }

        .systems-card {
          padding: 42px;
          border: 1px solid var(--border);
          border-radius: 10px;
          background: var(--panel);
        }

        .systems-card h3 {
          margin: 12px 0 15px;
          font-size: 28px;
          letter-spacing: -0.04em;
        }

        .systems-card p {
          margin: 0;
          color: var(--muted);
          font-size: 14px;
          line-height: 1.8;
        }

        .systems-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
          margin-top: 30px;
        }

        .systems-tags span {
          padding: 8px 10px;
          border: 1px solid var(--border);
          border-radius: 3px;
          color: var(--muted);
          font-family: monospace;
          font-size: 8px;
        }

        /* ABOUT */

        .about {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 100px;
        }

        .about h2 {
          font-size: clamp(44px, 6vw, 76px);
        }

        .about-copy {
          color: var(--muted);
          font-size: 16px;
          line-height: 1.9;
        }

        .about-copy p {
          margin: 0 0 25px;
        }

        .principles {
          display: grid;
          grid-template-columns: 1fr 1fr;
          margin-top: 45px;
          border-top: 1px solid var(--border);
        }

        .principle {
          padding: 22px 0;
          border-bottom: 1px solid var(--border);
          color: #e4e7ea;
          font-size: 13px;
        }

        .principle span {
          display: inline-block;
          width: 42px;
          color: var(--muted-2);
          font-family: monospace;
          font-size: 9px;
        }

        /* CONTACT */

        .contact {
          padding: 150px 0;
          text-align: center;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
        }

        .contact h2 {
          max-width: 850px;
          margin: 0 auto;
          font-size: clamp(50px, 7vw, 88px);
          line-height: 0.97;
          letter-spacing: -0.07em;
        }

        .contact p {
          max-width: 540px;
          margin: 28px auto 35px;
          color: var(--muted);
          line-height: 1.8;
        }

        /* FOOTER */

        .footer {
          min-height: 80px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid var(--border);
          color: var(--muted-2);
          font-family: monospace;
          font-size: 9px;
        }

        .footer-links {
          display: flex;
          gap: 25px;
        }

        .footer-links a:hover {
          color: white;
        }

        @media (max-width: 950px) {
          .hero {
            grid-template-columns: 1fr;
            gap: 55px;
          }

          .hero-visual {
            order: 2;
          }

          .terminal {
            display: none;
          }

          .stack-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .architecture {
            grid-template-columns: 1fr;
          }

          .about {
            grid-template-columns: 1fr;
            gap: 35px;
          }
        }

        @media (max-width: 700px) {
          .container {
            width: calc(100% - 32px);
          }

          .nav {
            height: 72px;
          }

          .nav-links,
          .availability {
            display: none;
          }

          .menu-button {
            display: block;
          }

          .hero {
            min-height: auto;
            padding: 65px 0 90px;
          }

          .hero-visual {
            min-height: 330px;
          }

          .logo-wrap {
            width: 220px;
          }

          .hero h1 {
            font-size: 54px;
          }

          .hero-description {
            font-size: 14px;
          }

          .hero-actions {
            flex-direction: column;
          }

          .button {
            width: 100%;
          }

          .section {
            padding: 85px 0;
          }

          .section-heading {
            display: block;
            margin-bottom: 35px;
          }

          .section-intro {
            margin-top: 20px;
          }

          .projects,
          .opensource-grid,
          .systems-grid {
            grid-template-columns: 1fr;
          }

          .project,
          .project.featured {
            min-height: 320px;
          }

          .project-bottom {
            display: block;
          }

          .case-link {
            display: block;
            margin-top: 20px;
          }

          .stack-grid {
            grid-template-columns: 1fr;
          }

          .stack-card {
            min-height: auto;
          }

          .architecture-flow {
            grid-template-columns: 1fr 1fr;
          }

          .systems-card {
            padding: 30px;
          }

          .principles {
            grid-template-columns: 1fr;
          }

          .contact {
            padding: 100px 0;
          }

          .contact h2 {
            font-size: 52px;
          }

          .footer {
            display: block;
            padding: 25px 0;
          }

          .footer-links {
            margin-top: 18px;
          }
        }
      `}</style>

      <div className="site">
        <div className="container">
          <nav className="nav">
            <a href="#" className="brand">
              <span className="brand-mark">
                <SWLogo />
              </span>

              <span>Samuel Wangai</span>
            </a>

            <div className="nav-links">
              <a href="#work">WORK</a>
              <a href="#opensource">OPEN SOURCE</a>
              <a href="#stack">STACK</a>
              <a href="#about">ABOUT</a>

              <a
                href="https://github.com/swangai7178"
                target="_blank"
                rel="noreferrer"
              >
                GITHUB ↗
              </a>
            </div>

            <div className="availability">
              <span className="availability-dot" />
              OPEN TO SELECTED WORK
            </div>

            <button
              className="menu-button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation"
            >
              {menuOpen ? "×" : "☰"}
            </button>

            {menuOpen && (
              <div className="mobile-menu">
                <a href="#work" onClick={() => scrollTo("work")}>
                  WORK
                </a>

                <a
                  href="#opensource"
                  onClick={() => scrollTo("opensource")}
                >
                  OPEN SOURCE
                </a>

                <a href="#stack" onClick={() => scrollTo("stack")}>
                  STACK
                </a>

                <a href="#about" onClick={() => scrollTo("about")}>
                  ABOUT
                </a>

                <a
                  href="https://github.com/swangai7178"
                  target="_blank"
                  rel="noreferrer"
                >
                  GITHUB ↗
                </a>
              </div>
            )}
          </nav>

          {/* HERO */}

          <section className="hero">
            <div className="hero-visual">
              <div className="logo-wrap">
                <SWLogo large />
              </div>

              <div className="hero-visual-label">
                MOBILE · BACKEND · SYSTEMS
              </div>
            </div>

            <div className="hero-copy">
              <div className="terminal">
                <div>
                  <span className="terminal-line">sam@systems:~$</span>{" "}
                  build --production
                </div>

                <div>
                  <span className="terminal-line">status:</span> shipping
                </div>

                <div>
                  <span className="terminal-line">stack:</span> full
                </div>

                <div>&gt; _</div>
              </div>

              <p className="eyebrow">SAMUEL WANGAI</p>

              <h1>
                Full Stack
                <span>Systems Engineer.</span>
              </h1>

              <div className="hero-title">
                Mobile Architecture · Backend Systems · Security · Performance
              </div>

              <p className="hero-description">
                I design and build production software across mobile, backend
                and infrastructure — from Flutter applications and APIs to
                real-time platforms, location systems, payments and developer
                tools.
              </p>

              <div className="hero-actions">
                <button
                  className="button button-primary"
                  onClick={() => scrollTo("work")}
                >
                  VIEW SELECTED WORK
                </button>

                <a
                  href="https://github.com/swangai7178"
                  target="_blank"
                  rel="noreferrer"
                  className="button button-secondary"
                >
                  GITHUB ↗
                </a>
              </div>
            </div>
          </section>
        </div>

        {/* WORK */}

        <section id="work" className="section">
          <div className="container">
            <div className="section-heading">
              <div>
                <div className="section-number">01 / SELECTED WORK</div>

                <h2>Systems I've built.</h2>
              </div>

              <p className="section-intro">
                Production software across logistics, commerce, e-commerce and
                business operations.
              </p>
            </div>

            <div className="projects">
              {projects.map((project) => (
                <article
                  className={`project ${
                    project.featured ? "featured" : ""
                  }`}
                  key={project.title}
                >
                  <div>
                    <div className="project-top">
                      <span>{project.number}</span>
                      <span>{project.category}</span>
                    </div>

                    <h3>{project.title}</h3>

                    <p>{project.description}</p>
                  </div>

                  <div className="project-bottom">
                    <div className="tags">
                      {project.stack.map((technology) => (
                        <span className="tag" key={technology}>
                          {technology}
                        </span>
                      ))}
                    </div>

                    <span className="case-link">EXPLORE →</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* OPEN SOURCE */}

        <section id="opensource" className="section">
          <div className="container">
            <div className="section-heading">
              <div>
                <div className="section-number">02 / OPEN SOURCE</div>

                <h2>Built for developers.</h2>
              </div>

              <p className="section-intro">
                Reusable Flutter libraries and developer-focused software
                released for the wider community.
              </p>
            </div>

            <div className="opensource-grid">
              {openSource.map((project) => (
                <article className="opensource-card" key={project.title}>
                  <div>
                    <div className="opensource-number">
                      {project.number} / {project.category}
                    </div>

                    <h3>{project.title}</h3>

                    <p>{project.description}</p>

                    <div className="opensource-tech">
                      {project.technologies.map((technology) => (
                        <span key={technology}>{technology}</span>
                      ))}
                    </div>
                  </div>

                  <div className="opensource-actions">
                    <a
                      href={project.pub}
                      target="_blank"
                      rel="noreferrer"
                    >
                      PUB.DEV ↗
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GITHUB ↗
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* STACK */}

        <section id="stack" className="section">
          <div className="container">
            <div className="section-heading">
              <div>
                <div className="section-number">03 / ENGINEERING</div>

                <h2>How I build.</h2>
              </div>

              <p className="section-intro">
                A broad engineering toolkit focused on reliable, maintainable
                production systems.
              </p>
            </div>

            <div className="stack-grid">
              {stack.map((group) => (
                <div className="stack-card" key={group.title}>
                  <h3>{group.title}</h3>

                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ARCHITECTURE */}

        <section className="section">
          <div className="container">
            <div className="architecture">
              <div className="architecture-copy">
                <div className="section-number">04 / ARCHITECTURE</div>

                <h2>From interface to infrastructure.</h2>

                <p>
                  I work across the layers of a system rather than treating
                  mobile, backend and infrastructure as isolated disciplines.
                </p>
              </div>

              <div className="architecture-flow">
                <div className="architecture-node">
                  <strong>01</strong>
                  <strong>MOBILE</strong>
                  <span>Flutter · iOS · Android</span>
                </div>

                <div className="architecture-node">
                  <strong>02</strong>
                  <strong>API</strong>
                  <span>Rails · Laravel · Node · Rust</span>
                </div>

                <div className="architecture-node">
                  <strong>03</strong>
                  <strong>DATA</strong>
                  <span>PostgreSQL · Firebase · Redis</span>
                </div>

                <div className="architecture-node">
                  <strong>04</strong>
                  <strong>SYSTEMS</strong>
                  <span>Linux · Cloud · CI/CD</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SYSTEMS / HARDWARE */}

        <section className="section systems-section">
          <div className="container">
            <div className="section-heading">
              <div>
                <div className="section-number">05 / SYSTEMS</div>

                <h2>Beyond the application.</h2>
              </div>

              <p className="section-intro">
                When the problem moves below the application layer, I follow
                it.
              </p>
            </div>

            <div className="systems-grid">
              <article className="systems-card">
                <div className="section-number">HARDWARE / LINUX</div>

                <h3>Hardware integration.</h3>

                <p>
                  Experience investigating real hardware communication,
                  Android devices, Linux environments and serial communication
                  problems across the software and hardware boundary.
                </p>

                <div className="systems-tags">
                  <span>RS485</span>
                  <span>UART</span>
                  <span>SPI</span>
                  <span>Linux</span>
                  <span>Android</span>
                  <span>Embedded Systems</span>
                </div>
              </article>

              <article className="systems-card">
                <div className="section-number">SECURITY / PERFORMANCE</div>

                <h3>Reliable by design.</h3>

                <p>
                  I care about authentication, authorization, API boundaries,
                  database performance, background processing, messaging,
                  caching and the operational details that keep production
                  systems reliable.
                </p>

                <div className="systems-tags">
                  <span>AUTH</span>
                  <span>API SECURITY</span>
                  <span>POSTGRESQL</span>
                  <span>REDIS</span>
                  <span>FIREBASE</span>
                  <span>CI/CD</span>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ABOUT */}

        <section id="about" className="section">
          <div className="container">
            <div className="about">
              <div>
                <div className="section-number">06 / ABOUT</div>

                <h2>
                  Engineering
                  <br />
                  with purpose.
                </h2>
              </div>

              <div className="about-copy">
                <p>
                  I'm Samuel Wangai, a Full Stack Systems Engineer focused on
                  building reliable software across mobile, backend and
                  infrastructure.
                </p>

                <p>
                  My work spans Flutter applications, backend APIs, databases,
                  real-time systems, payments, location services, messaging,
                  authentication and developer tooling.
                </p>

                <p>
                  I enjoy working where product requirements meet difficult
                  engineering problems — designing systems that are fast,
                  maintainable and capable of operating in production.
                </p>

                <div className="principles">
                  {principles.map(([number, text]) => (
                    <div className="principle" key={number}>
                      <span>{number}</span>
                      {text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}

        <section className="contact">
          <div className="container">
            <p className="eyebrow">07 / CONTACT</p>

            <h2>Let's build something that matters.</h2>

            <p>
              Have a product, platform or difficult engineering problem?
              Let's talk.
            </p>

            <a
              className="button button-primary"
              href="mailto:swangai7178@gmail.com"
            >
              GET IN TOUCH
            </a>
          </div>
        </section>

        {/* FOOTER */}

        <div className="container">
          <footer className="footer">
            <span>
              © {new Date().getFullYear()} Samuel Wangai
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

              <a href="mailto:swangai7178@gmail.com">
                Email
              </a>
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}
