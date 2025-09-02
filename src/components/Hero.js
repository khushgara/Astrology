import React, { useEffect, useState } from "react";
import "../style/Hero.css";
import SolarSystem from "./SolarSystem";

const Hero = ({ setCurrent }) => {
  const [rotation, setRotation] = useState(0);

  // Listen to scroll and update rotation
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setRotation(scrollY * 0.2); // speed factor
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="hero">
      {/* Solar System Background */}
      <div className="solar-system-bg">
        <SolarSystem />
      </div>

      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">✨ Welcome to Anirvindaksha Jyotish ✨</h1>
          <p className="hero-subtitle">
            Your trusted guide for <strong>Astrology</strong>,{" "}
            <strong>Panchang</strong> & <strong>Spiritual Remedies</strong>.
          </p>
          <div className="hero-buttons">
            <button
              className="hero-btn primary"
              onClick={() => setCurrent("book")}
            >
              Get Your Kundli
            </button>
            <button
              className="hero-btn secondary"
              onClick={() => setCurrent("services")}
            >
              Explore Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
