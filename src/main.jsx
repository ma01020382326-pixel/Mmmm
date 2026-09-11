import React from "react";
import { createRoot } from "react-dom/client";
import { ArrowUpRight, Code2, Layers3, ShoppingBag, Github, Menu, X } from "lucide-react";
import "./styles.css";

const projects = [
  { title: "Electronics Store", type: "React / E-commerce", text: "A clean, responsive electronics storefront focused on speed, clarity and conversion.", tag: "Featured" },
  { title: "Shopify Store Design", type: "Shopify / UI Design", text: "Modern Shopify experience with a premium layout, strong product hierarchy and mobile-first design.", tag: "Shopify" },
  { title: "Shawarma Al-Adel", type: "Web Design", text: "A bold restaurant landing page built around a simple customer journey and clear ordering CTA.", tag: "Landing Page" }
];

function App() {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="app">
      <nav className="nav">
        <a className="logo" href="#home">Mohamed</a>
        <div className={`links ${open ? "show" : ""}`}>
          {["Home", "About", "Skills", "Projects", "Contact"].map((x) => (
            <a key={x} href={"#" + x.toLowerCase()} onClick={() => setOpen(false)}>{x}</a>
          ))}
        </div>
        <a className="nav-cta" href="#contact">Let's talk <ArrowUpRight size={16}/></a>
        <button className="menu" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X/> : <Menu/>}
        </button>
      </nav>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy">
            <p className="eyebrow"><span></span> Available for projects</p>
            <h1 className="hero-title">Hi, I'm <em>Mohamed.</em><br/><span>Front-End Developer.</span></h1>
            <p className="lead">I build fast, responsive and professional websites using React.jsx, JavaScript, HTML, CSS and Shopify.</p>
            <div className="actions">
              <a className="button dark" href="#projects">View my work <ArrowUpRight size={18}/></a>
              <a className="button light" href="#contact">Contact me</a>
            </div>
          </div>
          <div className="hero-card">
            <div className="card-top"><span>MOHAMED</span><span>01 / 04</span></div>
            <div className="code-mark">&lt;<b>dev</b> /&gt;</div>
            <div className="card-bottom"><span>React.jsx</span><span>Shopify</span><span>UI / UX</span></div>
          </div>
        </section>

        <section id="about" className="section about">
          <div><p className="eyebrow">01 — About</p><h2>Simple ideas.<br/><em>Better execution.</em></h2></div>
          <div className="about-text"><p>I create modern websites with a strong focus on visual quality, responsive layouts and smooth user experiences.</p><p>My toolkit includes React.jsx, JavaScript, HTML, CSS and Shopify design. Every project is built to look good and feel fast.</p></div>
        </section>

        <section id="skills" className="section skills">
          <div><p className="eyebrow">02 — Skills</p><h2>What I <em>do.</em></h2></div>
          <div className="skill-grid">
            {[
              [Code2, "Front-End", "React.jsx, JavaScript, HTML & CSS"],
              [ShoppingBag, "Shopify", "Store design, sections & product UI"],
              [Layers3, "UI Design", "Clean layouts, responsive systems & details"]
            ].map(([Icon, title, text]) => <article className="skill" key={title}><Icon/><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </section>

        <section id="projects" className="section projects">
          <div className="section-head"><div><p className="eyebrow">03 — Selected work</p><h2>Recent <em>projects.</em></h2></div><span>03 projects</span></div>
          <div className="project-list">
            {projects.map((p, i) => <article className="project" key={p.title}><div className="number">0{i+1}</div><div className="project-info"><small>{p.type}</small><h3>{p.title}</h3><p>{p.text}</p></div><div className="project-tag">{p.tag}</div><ArrowUpRight className="project-arrow"/></article>)}
          </div>
        </section>

        <section id="contact" className="contact section">
          <p className="eyebrow">04 — Contact</p>
          <h2>Have a project<br/>in <em>mind?</em></h2>
          <a className="email" href="mailto:ma01020382326@gmail.com">ma01020382326@gmail.com <ArrowUpRight/></a>
          <div className="socials"><a href="https://github.com/ma01020382326-pixel" target="_blank" rel="noreferrer">GitHub <Github size={16}/></a><a href="#home">Back to top ↑</a></div>
        </section>
      </main>

      <footer><span>© 2026 Mohamed</span><span>Front-End Developer · Shopify Designer</span></footer>
    </div>
  );
}
createRoot(document.getElementById("root")).render(<App />);
