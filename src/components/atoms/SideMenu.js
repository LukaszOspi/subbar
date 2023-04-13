import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SubLogo from "./../../assets/sub_logo 1.svg";
import subBarMenu from "./../../assets/sub_bar_menu.svg";
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
          <div className="social-links">
            <div className="socials">
              <p style={{ fontWeight: "bold" }}>SOCIALS</p>
              <div>
                <p>
                  <a href="https://www.instagram.com/subbar.eufonia/?hl=en">
                    Instagram
                  </a>
                </p>
                <p>Twitter</p>
                <p>LinkedIn</p>
                <p>Facebook</p>
              </div>
            </div>
            <div className="eufonia-io">
              <p style={{ fontWeight: "bold" }}> eufonia.io </p>
              <p>LISBON</p>
              <p>BERLIN</p>
              <p>VIENNA</p>
            </div>
          </div>

          <img className="subbar-menu" src={subBarMenu} alt="sub-bar" />
        </div>
      )}
    </>
  );
};

export default SideMenu;
