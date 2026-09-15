"use client";

import { useState } from "react";

const projects = [
  {
    number: "01",
    category: "LOGISTICS",
    title: "Pinned Flow",
    description:
      "A delivery ecosystem connecting runners, senders, locker infrastructure and backend services.",
    stack: ["Flutter", "Rails", "PostgreSQL", "Firebase", "Maps", "IoT"],
    featured: true,
  },
  {
    number: "02",
    category: "COMMERCE",
    title: "QuadVendor",
    description:
      "A POS and commerce ecosystem built around vendors, products, orders and operational workflows.",
    stack: ["Flutter", "Next.js", "API", "PostgreSQL"],
    featured: true,
  },
  {
    number: "03",
    category: "E-COMMERCE",
    title: "SmartPly",
    description:
      "A mobile commerce platform connecting customers, products, vendors and order workflows.",
    stack: ["Flutter", "Rails", "Firebase"],
    featured: false,
  },
  {
    number: "04",
    category: "OPEN SOURCE",
    title: "Kenya Counties",
    description:
      "A Flutter package providing county and geographic selection for applications built for Kenya.",
    stack: ["Flutter", "Dart", "Open Source"],
    featured: false,
  },
];

const stack = [
  {
    title: "MOBILE",
    items: ["Flutter", "Dart", "Kotlin", "Swift", "React Native"],
  },
  {
    title: "BACKEND",
    items: ["Ruby on Rails", "Laravel", "Node.js", "Rust", "REST APIs"],
  },
  {
    title: "DATA",
    items: ["PostgreSQL", "Supabase", "Firestore", "Redis", "MySQL"],
  },
  {
    title: "SYSTEMS",
    items: ["Linux", "Docker", "Cloud Run", "CI/CD", "Firebase"],
  },
];

function SWLogo({ large = false }: { large?: boolean }) {
  return (
    <div className={`sw-logo ${large ? "sw-logo-large" : ""}`}>
      <svg
        viewBox="0 0 220 150"
        aria-label="SW"
        role="img"
      >
        <path
          d="M91 25C72 4 37 8 26 35C15 61 33 78 60 87C87 96 101 104 94 124C87 144 52 148 27 127"
          fill="none"
          stroke="currentColor"
          strokeWidth="13"
          strokeLinecap="round"
        />
        <path
          d="M77 62L108 128L139 70L171 128L202 31"
          fill="none"
          stroke="currentColor"
          strokeWidth="13"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

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
          --bg-soft: #0d1014;
          --panel: #11151a;
          --panel-hover: #151a20;
          --border: #242a31;
          --border-light: #303740;
          --text: #f5f7f8;
          --muted: #8d96a1;
          --muted-2: #626b75;
          --accent: #4d9cff;
          --accent-soft: rgba(77, 156, 255, 0.12);
        }

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: var(--bg);
          color: var(--text);
          font-family:
            Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
            "Segoe UI", sans-serif;
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
              circle at 72% 18%,
              rgba(38, 92, 160, 0.08),
              transparent 28%
            ),
            var(--bg);
        }

        .container {
          width: min(1180px, calc(100% - 48px));
          margin: 0 auto;
        }

        .nav {
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
          font-size: 17px;
          font-weight: 700;
          letter-spacing: -0.03em;
        }

        .brand-mark {
          width: 36px;
          height: 36px;
          display: grid;
          place-items: center;
          border: 1px solid var(--border-light);
          border-radius: 8px;
          color: white;
        }

        .brand-mark svg {
          width: 28px;
          height: 22px;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        .nav-links a {
          color: var(--muted);
          font-size: 13px;
          transition: color 180ms ease;
        }

        .nav-links a:hover {
          color: white;
        }

        .availability {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--muted);
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .availability-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #67d391;
          box-shadow: 0 0 12px rgba(103, 211, 145, 0.5);
        }

        .menu-button {
          display: none;
          width: 42px;
          height: 42px;
          background: transparent;
          border: 1px solid var(--border);
          color: white;
          border-radius: 7px;
        }

        .hero {
          min-height: 720px;
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 80px;
          align-items: center;
          padding: 90px 0 110px;
        }

        .hero-visual {
          position: relative;
          min-height: 460px;
          display: grid;
          place-items: center;
          border: 1px solid var(--border);
          border-radius: 16px;
          background:
            linear-gradient(
              135deg,
              rgba(255, 255, 255, 0.025),
              transparent 50%
            ),
            var(--panel);
          overflow: hidden;
        }

        .hero-visual::before {
          content: "";
          position: absolute;
          width: 340px;
          height: 340px;
          border: 1px solid rgba(77, 156, 255, 0.12);
          border-radius: 50%;
        }

        .hero-visual::after {
          content: "";
          position: absolute;
          width: 500px;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(77, 156, 255, 0.25),
            transparent
          );
          transform: rotate(-35deg);
        }

        .logo-wrap {
          position: relative;
          z-index: 1;
          width: 280px;
          color: #f4f6f8;
          filter: drop-shadow(0 0 30px rgba(255, 255, 255, 0.08));
        }

        .hero-visual-label {
          position: absolute;
          left: 28px;
          bottom: 25px;
          color: var(--muted-2);
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }

        .hero-copy {
          position: relative;
        }

        .eyebrow {
          margin: 0 0 24px;
          color: var(--muted);
          font-size: 12px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
        }

        .hero h1 {
          margin: 0;
          font-size: clamp(52px, 7vw, 88px);
          line-height: 0.94;
          letter-spacing: -0.065em;
          font-weight: 750;
        }

        .hero h1 span {
          display: block;
          color: #aeb7c1;
        }

        .hero-title {
          margin-top: 28px;
          color: #f1f3f5;
          font-size: 17px;
          letter-spacing: 0.04em;
        }

        .hero-description {
          max-width: 570px;
          margin: 22px 0 0;
          color: var(--muted);
          font-size: 17px;
          line-height: 1.8;
        }

        .hero-actions {
          display: flex;
          gap: 12px;
          margin-top: 36px;
        }

        .button {
          height: 48px;
          padding: 0 22px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 5px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.08em;
          transition:
            transform 180ms ease,
            background 180ms ease,
            border-color 180ms ease;
        }

        .button:hover {
          transform: translateY(-2px);
        }

        .button-primary {
          background: white;
          color: #080a0d;
        }

        .button-secondary {
          border: 1px solid var(--border-light);
          color: white;
          background: transparent;
        }

        .button-secondary:hover {
          border-color: #59636d;
          background: rgba(255, 255, 255, 0.03);
        }

        .terminal {
          position: absolute;
          top: -45px;
          right: -30px;
          width: 270px;
          border: 1px solid var(--border);
          border-radius: 8px;
          background: rgba(10, 13, 17, 0.9);
          padding: 14px 16px;
          font-family: "SFMono-Regular", Consolas, monospace;
          font-size: 11px;
          color: var(--muted);
        }

        .terminal-line {
          color: var(--accent);
        }

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
          margin-bottom: 13px;
          color: var(--muted-2);
          font-size: 10px;
          letter-spacing: 0.2em;
        }

        .section h2 {
          margin: 0;
          font-size: clamp(38px, 5vw, 62px);
          line-height: 1;
          letter-spacing: -0.055em;
        }

        .section-intro {
          max-width: 450px;
          color: var(--muted);
          font-size: 15px;
          line-height: 1.7;
        }

        .projects {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        .project {
          min-height: 300px;
          padding: 30px;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border: 1px solid var(--border);
          border-radius: 10px;
          background: var(--panel);
          transition:
            transform 220ms ease,
            border-color 220ms ease,
            background 220ms ease;
        }

        .project:hover {
          transform: translateY(-5px);
          border-color: var(--border-light);
          background: var(--panel-hover);
        }

        .project.featured {
          min-height: 360px;
        }

        .project-top {
          display: flex;
          justify-content: space-between;
          color: var(--muted-2);
          font-size: 10px;
          letter-spacing: 0.16em;
        }

        .project h3 {
          margin: 45px 0 13px;
          font-size: 32px;
          letter-spacing: -0.04em;
        }

        .project p {
          max-width: 500px;
          margin: 0;
          color: var(--muted);
          line-height: 1.7;
          font-size: 14px;
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
          font-family: "SFMono-Regular", Consolas, monospace;
          font-size: 9px;
        }

        .case-link {
          white-space: nowrap;
          color: white;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
        }

        .stack-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: var(--border);
          border: 1px solid var(--border);
        }

        .stack-card {
          min-height: 230px;
          padding: 30px;
          background: var(--bg-soft);
        }

        .stack-card h3 {
          margin: 0 0 32px;
          color: var(--muted);
          font-size: 10px;
          letter-spacing: 0.2em;
        }

        .stack-card ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .stack-card li {
          margin-bottom: 13px;
          color: #e4e7ea;
          font-size: 14px;
        }

        .architecture {
          display: grid;
          grid-template-columns: 0.7fr 1.3fr;
          gap: 70px;
          align-items: center;
        }

        .architecture-copy p {
          color: var(--muted);
          line-height: 1.8;
        }

        .architecture-flow {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 8px;
        }

        .architecture-node {
          min-height: 130px;
          padding: 20px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border: 1px solid var(--border);
          background: var(--panel);
          border-radius: 7px;
        }

        .architecture-node strong {
          font-size: 14px;
        }

        .architecture-node span {
          color: var(--muted);
          font-size: 11px;
          line-height: 1.5;
        }

        .open-source {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }

        .opensource-card {
          padding: 42px;
          border: 1px solid var(--border);
          border-radius: 10px;
          background: var(--panel);
        }

        .opensource-card h3 {
          margin: 12px 0;
          font-size: 30px;
          letter-spacing: -0.04em;
        }

        .opensource-card p {
          color: var(--muted);
          line-height: 1.7;
        }

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
          font-size: 17px;
          line-height: 1.9;
        }

        .about-copy p {
          margin: 0 0 25px;
        }

        .principles {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          margin-top: 45px;
          border-top: 1px solid var(--border);
        }

        .principle {
          padding: 22px 0;
          border-bottom: 1px solid var(--border);
          color: #e4e7ea;
          font-size: 14px;
        }

        .principle span {
          display: inline-block;
          width: 42px;
          color: var(--muted-2);
          font-family: monospace;
          font-size: 11px;
        }

        .contact {
          text-align: center;
          padding: 150px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
        }

        .contact .eyebrow {
          margin-bottom: 22px;
        }

        .contact h2 {
          max-width: 800px;
          margin: 0 auto;
          font-size: clamp(48px, 7vw, 88px);
          line-height: 0.98;
          letter-spacing: -0.065em;
        }

        .contact p {
          max-width: 550px;
          margin: 28px auto 35px;
          color: var(--muted);
          line-height: 1.7;
        }

        .footer {
          padding: 30px 0;
          border-top: 1px solid var(--border);
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: var(--muted-2);
          font-size: 11px;
        }

        .footer-links {
          display: flex;
          gap: 24px;
        }

        .footer-links a:hover {
          color: white;
        }

        @media (max-width: 900px) {
          .hero {
            grid-template-columns: 1fr;
            gap: 50px;
            padding-top: 60px;
          }

          .hero-visual {
            order: 2;
            min-height: 400px;
          }

          .terminal {
            display: none;
          }

          .stack-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .architecture {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .about {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        @media (max-width: 700px) {
          .container {
            width: min(100% - 32px, 1180px);
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

          .mobile-menu {
            position: absolute;
            z-index: 20;
            top: 72px;
            left: 16px;
            right: 16px;
            padding: 20px;
            display: flex;
            flex-direction: column;
            gap: 18px;
            border: 1px solid var(--border);
            border-radius: 8px;
            background: #0b0e12;
          }

          .mobile-menu a {
            padding: 10px 0;
            color: var(--muted);
          }

          .hero {
            min-height: auto;
            padding: 70px 0 90px;
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
            font-size: 15px;
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

          .section h2 {
            font-size: 42px;
          }

          .section-intro {
            margin-top: 20px;
          }

          .projects {
            grid-template-columns: 1fr;
          }

          .project,
          .project.featured {
            min-height: 300px;
          }

          .project h3 {
            font-size: 28px;
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

          .open-source {
            grid-template-columns: 1fr;
          }

          .opensource-card {
            padding: 28px;
          }

          .about {
            gap: 20px;
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
          }

          .footer-links {
            margin-top: 15px;
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
          </nav>

          {menuOpen && (
            <div className="mobile-menu">
              <a href="#work" onClick={() => scrollTo("work")}>
                WORK
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
                  <span className="terminal-line">sam@dev:~$</span>{" "}
                  build something great
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
                real-time platforms, payments and developer tools.
              </p>

              <div className="hero-actions">
                <button
                  className="button button-primary"
                  onClick={() => scrollTo("work")}
                >
                  VIEW SELECTED WORK
                </button>

                <a
                  className="button button-secondary"
                  href="https://github.com/swangai7178"
                  target="_blank"
                  rel="noreferrer"
                >
                  GITHUB ↗
                </a>
              </div>
            </div>
          </section>
        </div>

        <section id="work" className="section">
          <div className="container">
            <div className="section-heading">
              <div>
                <div className="section-number">01 / SELECTED WORK</div>
                <h2>Systems I've built.</h2>
              </div>

              <p className="section-intro">
                Real products across logistics, commerce, e-commerce and
                developer tooling.
              </p>
            </div>

            <div className="projects">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className={`project ${
                    project.featured ? "featured" : ""
                  }`}
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
                      {project.stack.map((item) => (
                        <span className="tag" key={item}>
                          {item}
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

        <section id="stack" className="section">
          <div className="container">
            <div className="section-heading">
              <div>
                <div className="section-number">02 / ENGINEERING</div>
                <h2>How I build.</h2>
              </div>

              <p className="section-intro">
                A broad engineering toolkit focused on shipping maintainable
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

        <section className="section">
          <div className="container">
            <div className="architecture">
              <div className="architecture-copy">
                <div className="section-number">03 / ARCHITECTURE</div>

                <h2>From interface to infrastructure.</h2>

                <p>
                  I work across the layers of a system rather than treating
                  mobile, backend and infrastructure as separate worlds.
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

        <section className="section">
          <div className="container">
            <div className="section-heading">
              <div>
                <div className="section-number">04 / OPEN SOURCE</div>
                <h2>Built for developers.</h2>
              </div>
            </div>

            <div className="open-source">
              <a
                href="https://github.com/swangai7178/kenya_counties"
                target="_blank"
                rel="noreferrer"
                className="opensource-card"
              >
                <div className="section-number">GITHUB / PACKAGE</div>

                <h3>Kenya Counties ↗</h3>

                <p>
                  A Flutter developer package for county selection and
                  geographic workflows in Kenyan applications.
                </p>

                <span className="case-link">VIEW REPOSITORY →</span>
              </a>

              <a
                href="https://github.com/swangai7178"
                target="_blank"
                rel="noreferrer"
                className="opensource-card"
              >
                <div className="section-number">GITHUB / PROFILE</div>

                <h3>More on GitHub ↗</h3>

                <p>
                  Explore repositories, experiments, developer tooling and
                  production engineering work.
                </p>

                <span className="case-link">VIEW GITHUB →</span>
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container">
            <div className="about">
              <div>
                <div className="section-number">05 / ABOUT</div>
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
                  My work spans Flutter applications, APIs, databases,
                  real-time systems, payments, location services, messaging
                  and security.
                </p>

                <p>
                  I enjoy working where product requirements meet difficult
                  engineering problems — designing systems that are fast,
                  maintainable and capable of operating in production.
                </p>

                <div className="principles">
                  <div className="principle">
                    <span>01</span>
                    Build for production
                  </div>

                  <div className="principle">
                    <span>02</span>
                    Keep systems maintainable
                  </div>

                  <div className="principle">
                    <span>03</span>
                    Secure the edges
                  </div>

                  <div className="principle">
                    <span>04</span>
                    Measure before optimizing
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact">
          <div className="container">
            <p className="eyebrow">06 / CONTACT</p>

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

        <footer className="container footer">
          <span>© {new Date().getFullYear()} Samuel Wangai</span>

          <div className="footer-links">
            <a
              href="https://github.com/swangai7178"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a href="mailto:swangai7178@gmail.com">Email</a>
          </div>
        </footer>
      </div>
    </main>
  );
}
