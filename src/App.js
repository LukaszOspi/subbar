import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LatestProjects from "./components/LatestProjects";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="app-container">
          <Header />
          <Routes>
            <Route path="/" element={<Welcome />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
