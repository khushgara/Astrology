import React from "react";
import "../style/Panchang.css";

const Panchang = () => {
  // Placeholder data (replace later with API)
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const samplePanchang = {
    tithi: "Shukla Paksha Dwitiya",
    nakshatra: "Rohini",
    yoga: "Siddhi",
    moonPhase: "Waxing Crescent",
    sunrise: "06:12 AM",
    sunset: "06:55 PM",
  };

  return (
    <section className="panchang" id="panchang">
      <div className="panchang-container">
        <h2 className="panchang-title">
          🌓 Daily Panchang & Horoscope Snapshot
        </h2>
        <p className="panchang-date">{today}</p>

        <div className="panchang-cards">
          <div className="panchang-card">
            <h3>Tithi</h3>
            <p>{samplePanchang.tithi}</p>
          </div>
          <div className="panchang-card">
            <h3>Nakshatra</h3>
            <p>{samplePanchang.nakshatra}</p>
          </div>
          <div className="panchang-card">
            <h3>Yoga</h3>
            <p>{samplePanchang.yoga}</p>
          </div>
          <div className="panchang-card">
            <h3>Moon Phase</h3>
            <p>{samplePanchang.moonPhase}</p>
          </div>
          <div className="panchang-card">
            <h3>Sunrise</h3>
            <p>{samplePanchang.sunrise}</p>
          </div>
          <div className="panchang-card">
            <h3>Sunset</h3>
            <p>{samplePanchang.sunset}</p>
          </div>
        </div>

        <button className="panchang-btn">Explore Full Panchang</button>
      </div>
    </section>
  );
};

export default Panchang;
