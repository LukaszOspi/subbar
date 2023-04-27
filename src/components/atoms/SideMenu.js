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
  /*
            <Link to="/academy" onClick={toggleMenu}>
              SUB_BAR ACADEMY
            </Link>

              <p>LISBON</p>
              <p>BERLIN</p>
              <p>VIENNA</p>
            */

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

            <Link to="/opencall" onClick={toggleMenu}>
              OPEN CALL
            </Link>
            <Link to="/contact" onClick={toggleMenu}>
              ABOUT US
            </Link>
            <a href="mailto:francesco@subbar.net" onClick={toggleMenu}>
              CONTACT
            </a>
          </div>
          <div className="social-links">
            <div className="socials">
              <div className={"space-maker"}>
                <br />
                <br />
                <br />
              </div>
              <p style={{ fontWeight: "bold" }}>SOCIALS</p>
              <div className="space-maker">
                <br />
              </div>
              <div>
                <p>
                  <a href="https://www.instagram.com/subbar.eufonia/?hl=en">
                    Instagram
                  </a>
                </p>
                <p>
                  <a href="https://www.instagram.com/subbar.eufonia/?hl=en">
                    Twitter
                  </a>
                </p>
                <p>
                  <a href="https://www.linkedin.com/in/francesco-spaggiari-a74b19bb/">
                    LinkedIn
                  </a>
                </p>
                <p>
                  <a href="https://www.facebook.com/eufoniafestival">
                    Facebook
                  </a>
                </p>

                <div className="space-maker">
                  <br />
                </div>
              </div>
            </div>

            <div className="eufonia-io">
              <p style={{ fontWeight: "bold" }}> eufonia.io </p>
              <div className={"space-maker"}>
                <br />
              </div>
            </div>
          </div>

          <img className="subbar-menu" src={subBarMenu} alt="sub-bar" />
        </div>
      )}
    </>
  );
};

export default SideMenu;
