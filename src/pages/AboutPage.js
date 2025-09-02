import React from "react";
import "../style/About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-image">
          <img
            src="https://i.ibb.co/4MZT5n3/astrology-about.png"
            alt="Astrology Symbol"
          />
        </div>
        <div className="about-content">
          <h2 className="about-title">About Anirvindaksha Jyotish</h2>
          <p className="about-text">
            At <strong>Anirvindaksha Jyotish</strong>, we combine the timeless
            wisdom of <em>Vedic Astrology</em> with modern insights to help you
            navigate life’s journey. From <strong>Kundli Analysis</strong> to
            <strong> Panchang</strong> guidance and{" "}
            <strong>Spiritual Remedies</strong>, our mission is to bring
            clarity, peace, and purpose into your life.
          </p>
          <p className="about-text">
            With years of expertise in astrology and spiritual sciences, we
            offer personalized solutions that align your stars and balance your
            destiny.
          </p>
          <button className="about-btn">Know More</button>
        </div>
      </div>
    </section>
  );
};

export default About;
