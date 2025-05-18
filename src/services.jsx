import React from "react";
import "./index.css";

function Services() {
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
            Our <span className="user-gradient-text">Services</span>
          </h2>
          <p>
            We offer a full suite of digital and AI-powered services to help your business grow, automate, and stand out.
          </p>
          <div className="user-cards" style={{ marginTop: "2.5rem" }}>
            <div className="user-card">
              <h4>UI Design</h4>
              <p>
                Custom UI designed websites for your SaaS, e-commerce, or portfolio business. Modern, responsive, and beautiful.
              </p>
            </div>
            <div className="user-card">
              <h4>UX Design</h4>
              <p>
                User experience design that drives engagement, conversions, and customer satisfaction.
              </p>
            </div>
            <div className="user-card">
              <h4>Debugging</h4>
              <p>
                Expert debugging and troubleshooting for web apps, APIs, and AI systems. Fast and reliable fixes.
              </p>
            </div>
            <div className="user-card">
              <h4>AI Chatbots</h4>
              <p>
                Strategic planning and development of custom AI chatbots for customer support and automation.
              </p>
            </div>
            <div className="user-card">
              <h4>Web Development</h4>
              <p>
                Full-stack web development using the latest technologies. Fast, secure, and scalable solutions.
              </p>
            </div>
            <div className="user-card">
              <h4>API Integration</h4>
              <p>
                Seamless integration of third-party APIs and services to extend your platform’s capabilities.
              </p>
            </div>
            <div className="user-card">
              <h4>Machine Learning</h4>
              <p>
                Custom ML models for prediction, automation, and data-driven insights tailored to your business.
              </p>
            </div>
            <div className="user-card">
              <h4>Data Engineering</h4>
              <p>
                Data pipelines, ETL, and analytics solutions to unlock the value of your business data.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;