import React from "react";
import "../style/Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main grid with 4 sections */}
        <div className="footer-grid">
          {/* Logo + tagline */}
          <div>
            <h2 className="footer-heading">Anirvindaksha Jyotish</h2>
            <p className="footer-tagline">
              Guiding you with wisdom of{" "}
              <span className="highlight">Vedic Astrology</span>.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#panchang">Panchang</a>
              </li>
              <li>
                <a href="#remedies">Remedies</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="footer-heading">Contact</h3>
            <div className="footer-contact">
              <div>Email: info@anirvindaksha.com</div>
              <div>Phone: +91 98765 43210</div>
              <div>Jaipur, Rajasthan, India</div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="footer-heading">Newsletter</h3>
            <p className="footer-tagline">
              Subscribe to get updates & remedies
            </p>
            <div className="footer-newsletter">
              <input
                type="email"
                className="footer-input"
                placeholder="Enter your email"
              />
              <button className="footer-newsletter-button">Subscribe</button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-copyright">
          © {year} Anirvindaksha Jyotish — All Rights Reserved.
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button"
      >
        💬 WhatsApp
      </a>
    </footer>
  );
}

export default Footer;
