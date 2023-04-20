import React from "react";
import Card from "./atoms/Card";
import Background from "./../assets/BG.svg";
import "./styles.css";

const AboutUs = () => {
  return (
    <>
      <div className="cards-container">
        ABOUT US
        <Card image={Background} />
        <Card image={Background} />
      </div>
    </>
  );
};

export default AboutUs;
