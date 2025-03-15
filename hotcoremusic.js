import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import StudioBooking from "./pages/StudioBooking";
import BeatStore from "./pages/BeatStore";
import Blog from "./pages/Blog";
import Artists from "./pages/Artists";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./styles/global.css";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto px-4 py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/studio-booking" element={<StudioBooking />} />
          <Route path="/beat-store" element={<BeatStore />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/artists" element={<Artists />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
