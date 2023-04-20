import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Artists from "./components/Artists";
import Welcome from "./components/Welcome";
import SubBar from "./components/SubBar";
import OpenCall from "./components/OpenCall";
import SideMenu from "./components/atoms/SideMenu";
import AboutUs from "./components/AboutUs";

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
            <Route path="/academy" element={<SubBar />} />
            <Route path="/opencall" element={<OpenCall />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
