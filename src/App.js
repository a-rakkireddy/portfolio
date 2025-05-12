import React from "react";
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
  return (
    <div className="app-bg">
      {/* Header */}
      <header className="header">
        <div className="logo">AR</div>
        <nav>
          <a href="#about" className="nav-link">About</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#achievements" className="nav-link">Achievements</a>
          <a href="#contact" className="nav-link">Contact</a>
          <a href={resumeUrl} download className="nav-link resume-link">Resume <i className="fas fa-download"></i></a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1>Avinash Reddy Rakkireddy</h1>
        <h2>Full Stack Developer & Competitive Programmer</h2>
        <p className="location">Warangal, Telangana • +91-8125459690</p>
      </section>

      {/* About */}
      <section id="about" className="section">
        <h2>About Me</h2>
        <div className="about-card">
          <div className="about-content">
            <div className="about-image">
              <img src={process.env.PUBLIC_URL + '/profile.jpg'} alt="Avinash Reddy" />
            </div>
            <div className="about-text">
              <p>
                I am currently pursuing my Integrated Dual Dergee at the Indian Institute of Technology, Kharagpur in Mining Engineering, specializing in Artificial Intelligence: Machine Learning and Applications. I am passionate about building scalable web applications and solving challenging problems in software engineering and competitive programming.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <h2>Technical Skills</h2>
        <div className="skills-card">
          <div className="skills-list">
            <div className="skill-item">
              <strong>Languages:</strong> 
              <span>C++, TypeScript, JavaScript, Python, SQL, HTML, CSS, C</span>
            </div>
            <div className="skill-item">
              <strong>Libraries & Frameworks:</strong>
              <span>Node.js, Express, React.js, Bootstrap, Material UI, Mongoose, Numpy, ExcelJS</span>
            </div>
            <div className="skill-item">
              <strong>Tools:</strong>
              <span>Docker, Git, Sentry, mitmproxy, node-cron, Google Colab, Jupyter Notebook</span>
            </div>
            <div className="skill-item">
              <strong>Concepts:</strong>
              <span>DSA, REST APIs, Authentication, Web Scraping, System Design (Basic)</span>
            </div>
            <div className="skill-item">
              <strong>Competitive Programming:</strong>
              <span>700+ problems solved, Codeforces Specialist (1553), CodeChef 4-Star (1834)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="section">
        <h2>Experience</h2>
        <div className="exp-card">
          <h3>Software Developer Intern @ Qwipo Inc, Hyderabad <span>Aug 2024 - Apr 2025</span></h3>
          <h4>Notification Message Builder</h4>
          <ul>
            <li>Engineered a <b>Notification Message Builder</b> using Node.js (TypeScript) and Express to generate multi-channel event messages.</li>
            <li>Integrated OpenAI to create dynamic content tailored for Email, WhatsApp, SMS, Push, and Webhook channels.</li>
            <li>Structured prompt templates and implemented token injection for personalized message formatting across channels.</li>
          </ul>
          <h4>Automated Competitive Pricing System</h4>
          <ul>
            <li>Leveraged mitmproxy to intercept competitor APIs and extract real-time pricing data for matching SKUs.</li>
            <li>Built scalable backend services using Node.js and integrated with <b>CockroachDB</b> for resilient data management.</li>
            <li>Scheduled automated pricing updates via cron jobs to intelligently adjust product prices twice daily from insights.</li>
          </ul>
        </div>
        <div className="exp-card">
          <h3>Software Trainee Intern @ Xavica Software Solutions, Hyderabad <span>May 2024 - Jul 2024</span></h3>
          <ul>
            <li>Refactored backend architecture by migrating from Sequelize to Knex, improving query control and code clarity.</li>
            <li>Rewritten Excel export logic using <b>ExcelJS streaming</b> to handle millions of rows with reduced memory usage.</li>
            <li>Developed a vendor pricing insight module showing top five competitor prices to enable strategic price adjustments.</li>
          </ul>
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
            <a href="#" className="project-link" target="_blank" rel="noopener noreferrer">View Repository</a>
          </div>
          <div className="project-card">
            <img src={process.env.PUBLIC_URL + '/hotel.png'} alt="Hotel Booking Website Project" className="project-image"/>
            <h3>Hotel Booking Website</h3>
            <p className="project-summary">A modern hotel booking platform with interactive maps and real-time availability, using React, Node.js, and Mapbox.</p>
            <a href="#" className="project-link" target="_blank" rel="noopener noreferrer">View Repository</a>
          </div>
          <div className="project-card">
            <img src={process.env.PUBLIC_URL + '/dictionary.png'} alt="Instant Dictionary Extension Project" className="project-image"/>
            <h3>Instant Dictionary Chrome Extension</h3>
            <p className="project-summary">A browser extension for instant word definitions in a popup, using JavaScript and the Oxford Dictionary API.</p>
            <a href="#" className="project-link" target="_blank" rel="noopener noreferrer">View Repository</a>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section id="achievements" className="section">
        <h2>Achievements</h2>
        <div className="achievements-card">
          <ul>
            <li>Specialist (Rating: 1553) on Codeforces; 4-Star Coder (Rating: 1834) on CodeChef (Top 2.18% globally)</li>
            <li>Solved 700+ DSA questions across LeetCode, Codeforces, and CodeChef</li>
          </ul>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:avinashrakkireddy17@gmail.com">avinashrakkireddy17@gmail.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/avinash-reddy-rakki-reddy-30a052224/" target="_blank" rel="noopener noreferrer">Profile</a></p>
      </section>

      <footer className="footer">
        <div className="footer-links">
          {footerLinks.map((link, index) => (
            <React.Fragment key={index}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                {link.text}
              </a>
              {index < footerLinks.length - 1 && <span className="footer-separator">•</span>}
            </React.Fragment>
          ))}
        </div>
        <div className="copyright">
          © {new Date().getFullYear()} Avinash Reddy Rakkireddy
        </div>
      </footer>
    </div>
  );
}

export default App; 