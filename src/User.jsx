import React from "react";
import "./index.css";

function User() {
  return (
    <div className="user-bg">
      <div className="user-bg-overlay" />
      {/* Navigation */}
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

      {/* Hero Section */}
      <section className="user-hero">
        <div className="user-hero-content">
          <h1>
            <span className="user-gradient-text">iyuser</span>
          </h1>
          <p>
            Proven AI and web development solutions for modern businesses.<br />
            <span className="user-hero-highlight">Enterprise-grade, fast, and reliable.</span>
          </p>
          <div className="user-hero-actions">
            <a href="#solutions" className="user-btn">Our Solutions</a>
            <a href="#contact" className="user-btn user-btn-outline">Contact Us</a>
          </div>
        </div>
        <div className="user-hero-video-bg">
          <video
            className="user-hero-video"
            autoPlay
            loop
            muted
            playsInline
            poster="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-circuit-board-pattern-background-1186-large.mp4" type="video/mp4" />
          </video>
          <div className="user-hero-gradient" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="user-section">
        <div className="user-section-inner">
          <h2>About <span className="user-gradient-text">iyuser</span></h2>
          <p>
            iyuser specializes in developing <span className="user-gradient-text">enterprise-grade websites</span> and AI solutions that deliver measurable business impact through cutting-edge technology.
          </p>
          <p>
            Our visionary CEO Ahmad Jamil is a 15-year-old specializing in programming and interface.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="user-section user-section-alt">
        <div className="user-section-inner">
          <h2>Our <span className="user-gradient-text">Services</span></h2>
          <div className="user-cards">
            <div className="user-card">
              <h4>UI Design</h4>
              <p>Custom UI designed websites for your SAAS/e-commerce business.</p>
            </div>
            <div className="user-card">
              <h4>UX Design</h4>
              <p>Cutting-edge UX for more clicks and traffic generation.</p>
            </div>
            <div className="user-card">
              <h4>Debugging</h4>
              <p>Robust skills and minds that solve various problems and debug them.</p>
            </div>
            <div className="user-card">
              <h4>AI Chatbots</h4>
              <p>Strategic planning for your own AI chatbot for customer conversations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="user-section">
        <div className="user-section-inner">
          <h2>Industry <span className="user-gradient-text">Solutions</span></h2>
          <div className="user-cards">
            <div className="user-card">
              <h4>Healthcare</h4>
              <p>Diagnostic assistance, AI assistants, and websites.</p>
            </div>
            <div className="user-card">
              <h4>Finance</h4>
              <p>Fraud detection, algorithmic trading, credit risk analysis.</p>
            </div>
            <div className="user-card">
              <h4>Retail</h4>
              <p>Demand forecasting, personalized recommendations, customer tracking.</p>
            </div>
            <div className="user-card">
              <h4>Manufacturing</h4>
              <p>Predictive maintenance, quality control, supply chain optimization.</p>
            </div>
            <div className="user-card">
              <h4>Education</h4>
              <p>Adaptive learning systems, plagiarism detection, student analysis.</p>
            </div>
            <div className="user-card">
              <h4>Automotive</h4>
              <p>Autonomous driving, predictive maintenance, driver behavior analysis.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="user-section user-section-alt">
        <div className="user-section-inner">
          <h2>Our <span className="user-gradient-text">Team</span></h2>
          <div className="user-team">
            <div>
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Ahmad Jamil" className="user-team-img" />
              <h4>Ahmad Jamil</h4>
              <p>Founder & CEO</p>
              <div className="social-links mt-3">
                <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in" /></a>
                <a href="#" aria-label="Twitter"><i className="fab fa-twitter" /></a>
                <a href="https://github.com/Ahmadjamil888" aria-label="GitHub"><i className="fab fa-github" /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="user-section">
        <div className="user-section-inner">
          <h2>Contact <span className="user-gradient-text">Us</span></h2>
          <p>
            Ready to discuss how AI and websites can transform your business?
          </p>
          <div className="mb-4">
            <h4>Email</h4>
            <p><a className="user-link" href="mailto:shazabjamildhami@gmail.com">shazabjamildhami@gmail.com</a></p>
          </div>
          <div className="mb-4">
            <h4>Phone</h4>
            <p><a className="user-link" href="tel:+923338107788">+92 333 810 7788</a></p>
          </div>
          <a href="mailto:shazabjamildhami@gmail.com" className="user-btn">Send Email</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="user-footer">
        <div>
          &copy; {new Date().getFullYear()} iyuser. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default User;