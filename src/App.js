import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Artists from "./components/Artists";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="app-container">
          <Header />
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/artists" element={<Artists />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
