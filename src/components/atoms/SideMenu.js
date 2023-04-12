import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SubLogo from "./../../assets/sub_logo 1.svg";
import "./../styles.css";

const SideMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <button
        className={`menu-button ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <img src={SubLogo} alt="Menu" />
      </button>
      {menuOpen && (
        <div className="side-menu">
          <div className="menu-links">
            <Link to="/" onClick={toggleMenu}>
              HOME
            </Link>
            <Link to="/artists" onClick={toggleMenu}>
              ARTISTS
            </Link>
            <Link to="/academy" onClick={toggleMenu}>
              SUB_BAR ACADEMY
            </Link>

            <Link to="/opencall" onClick={toggleMenu}>
              OPEN CALL
            </Link>
            <Link to="/about" onClick={toggleMenu}>
              ABOUT US
            </Link>
            <a href="mailto:francesco@subbar.net" onClick={toggleMenu}>
              CONTACT
            </a>
          </div>
          <div className="social-links">{/* Add social links here */}</div>
          <div className="graphics">{/* Add graphics here */}</div>
        </div>
      )}
    </>
  );
};

export default SideMenu;
