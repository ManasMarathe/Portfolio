import React, { useEffect, useRef, useState } from "react";
import { FaGithub, FaLinkedinIn, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { personalInfo, experience } from "../data";
import { redesignProjects, redesignHighlights } from "./redesignData";
import "./redesign.css";

const HERO_TEXT =
  "Hello, World.\nI'm Manas Marathe.\nA Software Development Engineer in India. I love building systems that scale to millions.";

const useTypewriter = (text: string, speed = 45) => {
  const [typed, setTyped] = useState("");
  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setTyped(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [text, speed]);
  return typed;
};

const Reveal: React.FC<{
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section";
}> = ({ children, className = "" }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setInView(true),
      { threshold: 0.25 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={`rd-reveal ${inView ? "rd-reveal--in" : ""} ${className}`}
    >
      {children}
    </div>
  );
};

const CountUp: React.FC<{ end: number; suffix?: string }> = ({
  end,
  suffix = "",
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        obs.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / 1500, 1);
          setValue(Math.round(end * (1 - Math.pow(1 - t, 3))));
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.6 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [end]);
  return (
    <div className="rd-stat-num" ref={ref}>
      {String(value).padStart(2, "0")}
      {suffix}
    </div>
  );
};

const BigWord: React.FC<{ word: string; img: string }> = ({ word, img }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setInView(true),
      { threshold: 0.35 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // parallax: word drifts sideways, object drifts vertically as you scroll past
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const progress =
          (window.innerHeight / 2 - (rect.top + rect.height / 2)) /
          window.innerHeight;
        el.style.setProperty("--rd-parallax", progress.toFixed(4));
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`rd-bigword ${inView ? "rd-bigword--in" : ""}`}
      aria-label={word}
    >
      <span className="rd-bigword-text" aria-hidden="true">
        {word}
      </span>
      <span className="rd-bigword-obj">
        <img src={img} alt="" loading="lazy" />
      </span>
    </div>
  );
};

const NAV_LINKS = [
  { label: "home", href: "#home" },
  { label: "about", href: "#about" },
  { label: "what-i-do", href: "#services" },
  { label: "experience", href: "#experience" },
  { label: "work", href: "#work" },
  { label: "collab", href: "#contact" },
  { label: "os-portfolio", href: "/old" },
];

const SERVICES = [
  {
    title: "01. Backend Engineering",
    desc: "Scalable services in Java, Go and Python. Spring Boot APIs, clean architecture, and systems that stay up — 99.99% uptime across 500M+ messages a day.",
  },
  {
    title: "02. Distributed Systems & Messaging",
    desc: "Event-driven architectures with RabbitMQ and Kafka. Pub/sub, retries, DLQs and real-time connectors that don't drop your messages.",
  },
  {
    title: "03. Cloud & DevOps",
    desc: "Production deployments on AWS and Kubernetes with Helm, observability baked in, and CI/CD pipelines that make releases 4x faster.",
  },
  {
    title: "04. Data & APIs",
    desc: "PostgreSQL, MySQL, MongoDB, Redis, Elasticsearch. Normalized schemas, fast queries, REST and WebSocket APIs that feel instant.",
  },
];

const Redesign: React.FC = () => {
  const typed = useTypewriter(HERO_TEXT);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    document.body.classList.add("rd-body");
    return () => document.body.classList.remove("rd-body");
  }, []);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const { socialLinks } = personalInfo;

  return (
    <div className="rd-root" id="home">
      {/* fixed chrome */}
      <header className="rd-header">
        <a className="rd-logo" href="#home">
          MANAS
        </a>
        <button
          className={`rd-burger ${menuOpen ? "rd-burger--open" : ""}`}
          aria-label="Menu"
          onClick={() => setMenuOpen(o => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <nav className={`rd-menu ${menuOpen ? "rd-menu--open" : ""}`}>
        {NAV_LINKS.map(l => (
          <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>
            {l.label}
          </a>
        ))}
      </nav>

      <div className="rd-social">
        <a href={socialLinks.github} target="_blank" rel="noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <FaLinkedinIn />
        </a>
        <a href={socialLinks.twitter} target="_blank" rel="noreferrer" aria-label="X (Twitter)">
          <FaXTwitter />
        </a>
        <a href={socialLinks.email} aria-label="Email">
          <FaEnvelope />
        </a>
      </div>

      <button
        className={`rd-top ${showTop ? "rd-top--visible" : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ▲ back to top
      </button>

      {/* hero */}
      <section className="rd-section rd-hero">
        <h1 className="rd-hero-text">
          {typed.split("\n").map((line, i, arr) => (
            <React.Fragment key={i}>
              {line}
              {i < arr.length - 1 && <br />}
            </React.Fragment>
          ))}
          <span className="rd-caret" />
        </h1>
      </section>

      {/* about */}
      <section className="rd-section" id="about">
        <Reveal>
          <div className="rd-about">
            <h2 className="rd-h2">More About Me</h2>
            <div>
              {personalInfo.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <p>{personalInfo.technologies}</p>
              <ul className="rd-highlights">
                {redesignHighlights.map(h => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </section>

      {/* stats */}
      <section className="rd-section">
        <Reveal>
          <div className="rd-stats">
            <div>
              <CountUp end={2} suffix="+" />
              <div className="rd-stat-label">Years of Engineering</div>
            </div>
            <div>
              <CountUp end={500} suffix="M+" />
              <div className="rd-stat-label">Messages Daily</div>
            </div>
            <div>
              <CountUp end={20} suffix="+" />
              <div className="rd-stat-label">Projects Built</div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* big word interludes */}
      <BigWord word="SCALABILITY" img="/images/redesign/rocket_3d.png" />

      {/* what i do */}
      <section className="rd-section" id="services">
        <Reveal>
          <h2 className="rd-h2">What I Do</h2>
          <div className="rd-services">
            {SERVICES.map(s => (
              <div className="rd-service" key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <BigWord word="RELIABILITY" img="/images/redesign/shield_3d.png" />

      {/* experience */}
      <section className="rd-section" id="experience">
        <Reveal>
          <h2 className="rd-h2">Where I've Worked</h2>
          <div className="rd-exp">
            {experience.map(e => (
              <div className="rd-exp-item" key={e.companyName}>
                <div className="rd-exp-duration">{e.duration}</div>
                <div>
                  <h3 className="rd-exp-role">
                    {e.position}{" "}
                    <span className="rd-exp-company">@ {e.companyName}</span>
                  </h3>
                  {e.workDone.slice(0, 2).map(w => (
                    <p className="rd-exp-desc" key={w}>
                      – {w}
                    </p>
                  ))}
                  <div className="rd-exp-stack">
                    [{e.techStack.slice(0, 6).join(", ")}]
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <BigWord word="PERFORMANCE" img="/images/redesign/high_voltage_3d.png" />

      {/* recent work */}
      <section className="rd-section" id="work">
        <Reveal>
          <h2 className="rd-h2">Recent Work</h2>
          <div className="rd-work-grid">
            {redesignProjects.map((p, i) => (
              <div className="rd-work-card" key={p.title}>
                <div className="rd-work-index">
                  {String(i + 1).padStart(2, "0")}.
                </div>
                <h3>{p.title}</h3>
                <p>{p.blurb}</p>
                <div className="rd-work-stack">[{p.stack.join(", ")}]</div>
                <a
                  className="rd-work-link"
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  view on github →
                </a>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* contact */}
      <section className="rd-section" id="contact">
        <Reveal>
          <h2 className="rd-h2">Let's Collab</h2>
          <div className="rd-contact">
            <p className="rd-contact-blurb">
              Whether you're building something that needs to scale, hunting
              for a backend engineer who cares about the details, or just want
              to talk distributed systems — my inbox is open. 😊
            </p>
            <div className="rd-contact-lines">
              <a href={socialLinks.email}>
                <FaEnvelope /> manasvmarathe@gmail.com
              </a>
              <a href={socialLinks.whatsapp} target="_blank" rel="noreferrer">
                <FaWhatsapp /> +91 98690 31752
              </a>
              <a href={socialLinks.twitter} target="_blank" rel="noreferrer">
                <FaXTwitter /> @mauux0
              </a>
              <a href={socialLinks.resume} target="_blank" rel="noreferrer">
                📄 resume
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      <footer className="rd-footer">
        <p>
          Made with <span className="rd-heart">❤</span> by Manas.
        </p>
        <a className="rd-footer-alt" href="/old">
          → also try the OS-style portfolio
        </a>
      </footer>
    </div>
  );
};

export default Redesign;
