import { useState } from "react";
import "../style/Header.css";

// Define navigation pages locally or import from constants.js
const NAV_PAGES = {
  home: "Home",
  services: "Services",
  panchang: "Panchang",
  remedies: "Remedies",
  pricing: "Pricing",
  reviews: "Reviews",
  blog: "Blog",
  about: "About",
  contact: "Contact",
  book: "Book",
};

function Header({ current, setCurrent }) {
  const [open, setOpen] = useState(false);

  const navLink = (key, label) => (
    <button
      key={key}
      onClick={() => {
        setCurrent(key);
        setOpen(false);
      }}
      className={`nav-link ${current === key ? "nav-link-active" : ""}`}
    >
      {label}
    </button>
  );

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo placeholder */}
        <div className="logo">🔯 Anirvindaksha</div>

        {/* Desktop Navigation */}
        <nav className="nav-desktop">
          {Object.entries(NAV_PAGES).map(([k, v]) => navLink(k, v))}
        </nav>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="mobile-menu-button"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="mobile-menu">
          {Object.entries(NAV_PAGES).map(([k, v]) => navLink(k, v))}
        </div>
      )}
    </header>
  );
}

export default Header;
