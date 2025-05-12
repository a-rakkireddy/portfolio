import React, { useState, useEffect } from "react";
import "./App.css";

const resumeUrl = process.env.PUBLIC_URL + "/Avinash_Resume.pdf";

const footerLinks = [
  { href: "https://github.com/a-rakkireddy", text: "GitHub" },
  { href: "https://codeforces.com/profile/avinashreddy17", text: "CodeForces" },
  { href: "https://www.codechef.com/users/avinashreddy17", text: "CodeChef" },
  { href: "https://www.linkedin.com/in/avinash-reddy-rakki-reddy-30a052224/", text: "LinkedIn" },
  { href: "mailto:avinashrakkireddy17@gmail.com", text: "Email" }
];

function App() {
  const [navOpen, setNavOpen] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const phrases = ["Full Stack Developer", "Competitive Programmer"];
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    const currentPhrase = phrases[phraseIdx];
    if (!deleting && charIdx < currentPhrase.length) {
      timeout = setTimeout(() => {
        setTypedText("I'm a " + currentPhrase.slice(0, charIdx + 1));
        setCharIdx(charIdx + 1);
      }, 70);
    } else if (!deleting && charIdx === currentPhrase.length) {
      timeout = setTimeout(() => setDeleting(true), 1200);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => {
        setTypedText("I'm a " + currentPhrase.slice(0, charIdx - 1));
        setCharIdx(charIdx - 1);
      }, 40);
    } else if (deleting && charIdx === 0) {
      timeout = setTimeout(() => {
        setPhraseIdx((phraseIdx + 1) % phrases.length);
        setDeleting(false);
      }, 400);
    }
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, phraseIdx, phrases]);

  useEffect(() => {
    const cursorInterval = setInterval(() => setShowCursor(c => !c), 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="app-bg">
      {/* Header */}
      <header className="header">
        <div className="logo">AR</div>
        <nav>
          <button className="nav-hamburger" onClick={() => setNavOpen(!navOpen)} aria-label="Toggle navigation">
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
          </button>
          <div className={`nav-links${navOpen ? ' open' : ''}`}>
            <a href="#about" className="nav-link" onClick={() => setNavOpen(false)}>About</a>
            <a href="#skills" className="nav-link" onClick={() => setNavOpen(false)}>Skills</a>
            <a href="#experience" className="nav-link" onClick={() => setNavOpen(false)}>Experience</a>
            <a href="#projects" className="nav-link" onClick={() => setNavOpen(false)}>Projects</a>
            <a href="#competitive" className="nav-link" onClick={() => setNavOpen(false)}>Competitive Programming</a>
            <a href="#contact" className="nav-link" onClick={() => setNavOpen(false)}>Contact</a>
            <a href={resumeUrl} download className="nav-link resume-link" onClick={() => setNavOpen(false)}>Resume <i className="fas fa-download"></i></a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      {/* (Hero section removed) */}

      {/* About */}
      <section id="about" className="about-section about-side">
        <div className="about-content-side">
          <img src={process.env.PUBLIC_URL + '/profile.jpg'} alt="Avinash Reddy" className="about-image-side" />
          <div className="about-text-side">
            <h1 className="about-heading">Hi, I'm Avinash Reddy Rakkireddy</h1>
            <h2 className="about-typed-static">I'm a Full Stack Developer & Competitive Programmer</h2>
            <p className="about-summary">
              Dual degree student at IIT Kharagpur passionate about scalable web apps and challenging problems in software engineering and competitive programming.
            </p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="section">
        <h2>Experience</h2>
        <div className="exp-cards-grid">
          <div className="exp-card">
            <h3>Software Developer Intern @ Qwipo Inc, Hyderabad <span>Aug 2024 - Apr 2025</span></h3>
            <div className="exp-projects-grid">
              <div className="exp-project-card">
                <img src={process.env.PUBLIC_URL + '/notification.png'} alt="Notification Message Builder" className="exp-project-image" />
                <h4>Notification Message Builder</h4>
                <ul>
                  <li>Engineered a <b>Notification Message Builder</b> using Node.js (TypeScript) and Express to generate multi-channel event messages.</li>
                  <li>Integrated OpenAI to create dynamic content tailored for Email, WhatsApp, SMS, Push, and Webhook channels.</li>
                  <li>Structured prompt templates and implemented token injection for personalized message formatting across channels.</li>
                </ul>
              </div>
              <div className="exp-project-card">
                <img src={process.env.PUBLIC_URL + '/price.png'} alt="Automated Competitive Pricing System" className="exp-project-image" />
                <h4>Automated Competitive Pricing System</h4>
                <ul>
                  <li>Leveraged mitmproxy to intercept competitor APIs and extract real-time pricing data for matching SKUs.</li>
                  <li>Built scalable backend services using Node.js and integrated with <b>CockroachDB</b> for resilient data management.</li>
                  <li>Scheduled automated pricing updates via cron jobs to intelligently adjust product prices twice daily from insights.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="exp-card">
            <h3>Software Trainee Intern @ Xavica Software Solutions, Hyderabad <span>May 2024 - Jul 2024</span></h3>
            <ul>
              <li>Refactored backend architecture by migrating from Sequelize to Knex, improving query control and code clarity.</li>
              <li>Rewritten Excel export logic using <b>ExcelJS streaming</b> to handle millions of rows with reduced memory usage.</li>
              <li>Developed a vendor pricing insight module showing top five competitor prices to enable strategic price adjustments.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Competitive Programming */}
      <section id="competitive" className="section">
        <h2>Competitive Programming</h2>
        <div className="cp-cards-grid">
          <div className="cp-card">
            <h4>Codeforces</h4>
            <ul className="cp-card-list">
              <li>Specialist (1553)</li>
              {/* <li>Global rank 24 (Starters)</li> */}
            </ul>
            <a href="https://codeforces.com/profile/avinashreddy17" className="cp-card-link" target="_blank" rel="noopener noreferrer">View Profile</a>
          </div>
          <div className="cp-card">
            <h4>CodeChef</h4>
            <ul className="cp-card-list">
              <li>4-Star (1834)</li>
              <li>Top 2.18%</li>
            </ul>
            <a href="https://www.codechef.com/users/avinashreddy17" className="cp-card-link" target="_blank" rel="noopener noreferrer">View Profile</a>
          </div>
          <div className="cp-card">
            <h4>LeetCode</h4>
            <ul className="cp-card-list">
              <li>700+ DSA problems</li>
            </ul>
            <a href="https://leetcode.com/u/obitouchiha17/" className="cp-card-link" target="_blank" rel="noopener noreferrer">View Profile</a>
          </div>
          <div className="cp-card">
            <h4>Kshitij Overnite</h4>
            <ul className="cp-card-list">
              <li>Top 50 (Prelims)</li>
              <li>Finalist</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <h2>Technical Skills</h2>
        <div className="skills-card">
          <div className="skills-badges-group fade-in">
            <div className="skills-badges-category">
              <div className="skills-badges-title">Languages</div>
              <div className="skills-badges-cloud">
                <span className="skill-badge">C++</span>
                <span className="skill-badge">TypeScript</span>
                <span className="skill-badge">JavaScript</span>
                <span className="skill-badge">Python</span>
                <span className="skill-badge">SQL</span>
                <span className="skill-badge">HTML</span>
                <span className="skill-badge">CSS</span>
                <span className="skill-badge">C</span>
              </div>
            </div>
            <div className="skills-badges-category">
              <div className="skills-badges-title">Libraries & Frameworks</div>
              <div className="skills-badges-cloud">
                <span className="skill-badge">Node.js</span>
                <span className="skill-badge">Express</span>
                <span className="skill-badge">React.js</span>
                <span className="skill-badge">Bootstrap</span>
                <span className="skill-badge">Material UI</span>
                <span className="skill-badge">Mongoose</span>
                <span className="skill-badge">Numpy</span>
                <span className="skill-badge">ExcelJS</span>
              </div>
            </div>
            <div className="skills-badges-category">
              <div className="skills-badges-title">Tools</div>
              <div className="skills-badges-cloud">
                <span className="skill-badge">Docker</span>
                <span className="skill-badge">Git</span>
                <span className="skill-badge">Sentry</span>
                <span className="skill-badge">mitmproxy</span>
                <span className="skill-badge">node-cron</span>
                <span className="skill-badge">Google Colab</span>
                <span className="skill-badge">Jupyter Notebook</span>
              </div>
            </div>
            <div className="skills-badges-category">
              <div className="skills-badges-title">Concepts</div>
              <div className="skills-badges-cloud">
                <span className="skill-badge">DSA</span>
                <span className="skill-badge">REST APIs</span>
                <span className="skill-badge">Authentication</span>
                <span className="skill-badge">Web Scraping</span>
                <span className="skill-badge">System Design (Basic)</span>
              </div>
            </div>
            <div className="skills-badges-category">
              <div className="skills-badges-title">Competitive Programming</div>
              <div className="skills-badges-cloud">
                <span className="skill-badge">700+ problems solved</span>
                <span className="skill-badge">Codeforces Specialist</span>
                <span className="skill-badge">CodeChef 4-Star</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <h2>Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <img src={process.env.PUBLIC_URL + '/brewhub.png'} alt="BrewHub Project" className="project-image"/>
            <h3>BrewHub</h3>
            <p className="project-summary">A restaurant management system for real-time order tracking and inventory, built with Node.js, Express, and MongoDB.</p>
            <a href="https://github.com/a-rakkireddy/Brewhub" className="project-link" target="_blank" rel="noopener noreferrer">View Repository</a>
          </div>
          <div className="project-card">
            <img src={process.env.PUBLIC_URL + '/hotel.png'} alt="Hotel Booking Website Project" className="project-image"/>
            <h3>Hotel Booking Website</h3>
            <p className="project-summary">A modern hotel booking platform with interactive maps and real-time availability, using React, Node.js, and Mapbox.</p>
            <a href="https://github.com/a-rakkireddy/Sanchari" className="project-link" target="_blank" rel="noopener noreferrer">View Repository</a>
          </div>
          <div className="project-card">
            <img src={process.env.PUBLIC_URL + '/dictionary.png'} alt="Instant Dictionary Extension Project" className="project-image"/>
            <h3>Instant Dictionary Chrome Extension</h3>
            <p className="project-summary">A browser extension for instant word definitions in a popup, using JavaScript and the Oxford Dictionary API.</p>
            <a href="https://github.com/a-rakkireddy/Instant-dictionary" className="project-link" target="_blank" rel="noopener noreferrer">View Repository</a>
          </div>
        </div>
      </section>

      <footer className="footer" id="contact">
        <div className="footer-links">
          <a
            href="mailto:avinashrakkireddy17@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Email
          </a>
          <span className="footer-separator">•</span>
          <a
            href="https://github.com/a-rakkireddy"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            GitHub
          </a>
        </div>
        <div className="footer-contact">
          <span>Warangal, Telangana</span> <span className="footer-separator">•</span> <span>+91-8125459690</span>
        </div>
        <div className="copyright">
          © {new Date().getFullYear()} Avinash Reddy Rakkireddy
        </div>
      </footer>
    </div>
  );
}

export default App; 