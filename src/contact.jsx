import React from "react";
import "./index.css";

function Contact() {
  return (
    <div className="user-bg">
      <div className="user-bg-overlay" />
      <nav className="user-navbar">
        <div className="user-logo user-gradient-text">iyuser</div>
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
            Contact <span className="user-gradient-text">Us</span>
          </h2>
          <p>
            Ready to discuss how AI and websites can transform your business? Reach out to us!
          </p>
          <div className="mb-4">
            <h4>Email</h4>
            <p>
              <a className="user-link" href="mailto:shazabjamildhami@gmail.com">
                shazabjamildhami@gmail.com
              </a>
            </p>
          </div>
          <div className="mb-4">
            <h4>Phone</h4>
            <p>
              <a className="user-link" href="tel:+923338107788">
                +92 333 810 7788
              </a>
            </p>
          </div>
          <a href="mailto:shazabjamildhami@gmail.com" className="user-btn">
            Send Email
          </a>
        </div>
      </section>
    </div>
  );
}

export default Contact;