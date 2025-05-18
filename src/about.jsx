import React from "react";
import "./index.css";

function About() {
  return (
    
    <div className="user-bg">
      <div className="user-bg-overlay" />
      <nav className="user-navbar">
        <div className="user-logo user-gradient-text" href="/">iyuser</div>
        <div>
            <a className="user-nav-link" href="/">Home</a>
          <a className="user-nav-link" href="/about">About</a>
          <a className="user-nav-link" href="/services">Services</a>
          <a className="user-nav-link" href="/solutions">Solutions</a>
          <a className="user-nav-link" href="/contact">Contact</a>
          <a className="user-btn" href="/login">Login</a>
        </div>
      </nav>
      <section className="user-section" style={{ marginTop: "4rem" }}>
        <div className="user-section-inner">
          <h2>
            About <span className="user-gradient-text">iyuser</span>
          </h2>
          <p>
            <span className="user-gradient-text" style={{ fontWeight: 700 }}>iyuser</span> is a modern tech company focused on delivering <span className="user-gradient-text">enterprise-grade websites</span> and <span className="user-gradient-text">AI solutions</span> that create real business impact.
          </p>
          <p>
            We combine creative design, robust engineering, and the latest in artificial intelligence to help businesses grow, automate, and stand out in the digital world.
          </p>
          <div className="user-cards" style={{ marginTop: "2.5rem" }}>
            <div className="user-card">
              <h4>Our Mission</h4>
              <p>
                To empower businesses with innovative, reliable, and scalable digital solutions that drive measurable results.
              </p>
            </div>
            <div className="user-card">
              <h4>Our Vision</h4>
              <p>
                To be a global leader in AI-powered web development, making advanced technology accessible to everyone.
              </p>
            </div>
            <div className="user-card">
              <h4>Our Values</h4>
              <ul style={{ textAlign: "left", margin: "0 auto", maxWidth: 200 }}>
                <li>Innovation</li>
                <li>Integrity</li>
                <li>Quality</li>
                <li>Client Success</li>
              </ul>
            </div>
          </div>
          <div style={{ marginTop: "2.5rem" }}>
            <h4 className="user-gradient-text" style={{ marginBottom: 0 }}>Meet Our Founder</h4>
            <div className="user-team" style={{ marginTop: "1.5rem" }}>
              <div>
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Ahmad Jamil"
                  className="user-team-img"
                />
                <h4>Ahmad Jamil</h4>
                <p>Founder & CEO</p>
                <p style={{ color: "#b2ebf2" }}>
                  A 15-year-old visionary specializing in programming, interface, and AI.
                </p>
                <div className="social-links mt-3">
                  <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in" /></a>
                  <a href="#" aria-label="Twitter"><i className="fab fa-twitter" /></a>
                  <a href="https://github.com/Ahmadjamil888" aria-label="GitHub"><i className="fab fa-github" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;