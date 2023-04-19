// Footer.js
import React from "react";

import "./styles.css";
import Business from "./../assets/business.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <h3 className="footer-header">
          <img src={Business} alt="Let's do business" />
        </h3>
      </div>
      <div className="footer-middle">
        <div className="column sub-bar">sub_bar</div>
        <div className="column">
          <div className="contact-us-container">
            <a href="mailto:francesco@subbar.net">
              <button className="contact-us">CONTACT US</button>
            </a>
          </div>
        </div>
        <div className="column">
          <p style={{ fontWeight: "bold" }}>eufonia.io</p>
          <br />
          <p>lisbon</p>
          <p>berlin</p>
          <p>vienna</p>
        </div>
        <div className="column">
          <p style={{ fontWeight: "bold" }}>contact</p>
          <br />
          <a href="mailto:info@eufonia.io">
            <p>info@eufonia.io</p>
          </a>
        </div>

        <div className="column">
          <p style={{ fontWeight: "bold" }}>media</p>
          <br />
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
        <p style={{ fontWeight: "500" }}>
          DESIGN BY NEUWEBZ edited by fernanda costa
        </p>
      </div>
    </div>
  );
};

export default Footer;
