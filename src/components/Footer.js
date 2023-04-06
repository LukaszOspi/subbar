// Footer.js
import React from "react";
import "./styles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <h3 className="footer-header">
          WE ALWAYS SEEK FOR NEW ADVENTURES LET'S DO BUSINESS
        </h3>
        <div className="contact-us-container">
          <button className="contact-us">CONTACT US</button>
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
          <p>info@eufonia.io</p>
        </div>
        <div className="column">
          <p>HOME</p>
          <p>ARTISTS</p>
          <p>SUB_BAR_ACADEMY</p>
          <p>OPEN_CALL</p>
          <p>ABOUT_US</p>
          <p>CONTACT</p>
        </div>
        <div className="column">
          <p>Instagram</p>
          <p>Twitter</p>
          <p>LinkedIn</p>
          <p>Facebook</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>eufonia.io</p>
        <p>2022</p>
        <p>DESIGN BY NEUWEBZ edited by fernanda costa</p>
      </div>
    </div>
  );
};

export default Footer;
