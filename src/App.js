import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Artists from "./components/Artists";
import Welcome from "./components/Welcome";
import Academy from "./components/Academy";
import OpenCall from "./components/OpenCall";
import SideMenu from "./components/atoms/SideMenu";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="app-container">
          <Header />
          <SideMenu />
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/artists" element={<Artists />} />
            <Route path="/academy" element={<Academy />} />
            <Route path="/opencall" element={<OpenCall />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
