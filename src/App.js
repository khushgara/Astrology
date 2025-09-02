import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import "./App.css";

function App() {
  const [current, setCurrent] = useState("home");

  return (
    <div className="app-container">
      <Header current={current} setCurrent={setCurrent} />

      <main className="main-content">
        {current === "home" && <Home setCurrent={setCurrent} />}
      </main>

      <Footer />
    </div>
  );
}

export default App;
