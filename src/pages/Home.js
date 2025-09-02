import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Panchang from "../components/Panchang";
import "../style/Home.css";

const Home = ({ setCurrent }) => {
  return (
    <div className="home-container">
      <Hero setCurrent={setCurrent} />
      <About />
      <Panchang />
    </div>
  );
};

export default Home;
