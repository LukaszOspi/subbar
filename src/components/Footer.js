// Footer.js
import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import Business from "./../assets/business.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <h3 className="footer-header">
          <img src={Business} alt="Let's do business" />
        </h3>
        <div className="contact-us-container">
          <a href="mailto:francesco@subbar.net">
            <button className="contact-us">CONTACT US</button>
          </a>
        </div>
      </div>
      <div className="footer-middle">
        <div className="column sub-bar">sub_bar</div>
        <div className="column"></div>
        <div className="column">
          <p style={{ fontWeight: "bold" }}>eufonia.io</p>
          <br />
          <p>LISBON</p>
          <p>BERLIN</p>
          <p>VIENNA</p>
        </div>
        <div className="column">
          <p style={{ fontWeight: "bold" }}>BUSINESS</p>
          <a href="mailto:info@eufonia.io">
            <p>info@eufonia.io</p>
          </a>
        </div>
        <div className="column">
          <p>
            <Link to="/">HOME</Link>
          </p>
          <p>
            <Link to="/artists">ARTISTS</Link>
          </p>
          <p>SUB_BAR_ACADEMY</p>
          <p>
            <Link to="/opencall">OPEN_CALL</Link>
          </p>
          <p>
            <Link to="/about">ABOUT_US</Link>
          </p>
          <p href="mailto:francesco@subbar.net">CONTACT</p>
        </div>
        <div className="column">
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
      <div className="footer-bottom">
        <p>
          eufonia.io 2022 <br></br> DESIGN BY NEUWEBZ edited by fernanda costa
        </p>
      </div>
    </div>
  );
};

export default Footer;
