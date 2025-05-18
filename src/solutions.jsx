import React from "react";
import "./index.css";

function Solutions() {
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
            Industry <span className="user-gradient-text">Solutions</span>
          </h2>
          <p>
            Proven business applications for better growth, efficiency, and innovation across industries.
          </p>
          <div className="user-cards" style={{ marginTop: "2.5rem" }}>
            <div className="user-card">
              <h4>Healthcare</h4>
              <p>
                Diagnostic assistance, AI-powered assistants, and secure healthcare websites for clinics and hospitals.
              </p>
            </div>
            <div className="user-card">
              <h4>Finance</h4>
              <p>
                Fraud detection, algorithmic trading, credit risk analysis, and secure fintech platforms.
              </p>
            </div>
            <div className="user-card">
              <h4>Retail</h4>
              <p>
                Demand forecasting, personalized recommendations, customer tracking, and e-commerce automation.
              </p>
            </div>
            <div className="user-card">
              <h4>Manufacturing</h4>
              <p>
                Predictive maintenance, quality control, and supply chain optimization using AI and IoT.
              </p>
            </div>
            <div className="user-card">
              <h4>Education</h4>
              <p>
                Adaptive learning systems, plagiarism detection, and student performance analytics.
              </p>
            </div>
            <div className="user-card">
              <h4>Automotive</h4>
              <p>
                Autonomous driving, predictive maintenance, and driver behavior analysis for smart mobility.
              </p>
            </div>
            <div className="user-card">
              <h4>Logistics</h4>
              <p>
                Route optimization, real-time tracking, and automated fleet management for logistics companies.
              </p>
            </div>
            <div className="user-card">
              <h4>Real Estate</h4>
              <p>
                Property recommendation engines, virtual tours, and AI-powered lead generation for agencies.
              </p>
            </div>
            <div className="user-card">
              <h4>Custom Solutions</h4>
              <p>
                Need something unique? We build tailored AI and web solutions for any industry or business challenge.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Solutions;