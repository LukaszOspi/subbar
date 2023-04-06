// Header.js
import React from "react";
import SubLogo from "./../assets/sub_logo 1.svg";
import SubBar from "./../assets/subbar.svg";
import "./styles.css";

const Header = () => {
  const today = new Date();
  const formattedDate = today
    .toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
    })
    .toUpperCase();

  return (
    <header className="header">
      <div className="header-left">
        <img className="logo" src={SubLogo} alt="Logo" />
        <img className="graphic" src={SubBar} alt="Graphic" />
      </div>
      <div className="header-right">
        <p className="date">{formattedDate}</p>
      </div>
    </header>
  );
};

export default Header;
