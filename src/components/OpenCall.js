import React from "react";
import Card from "./atoms/Card";
import Background from "./../assets/BG.svg";
import Opencall from "./../assets/opencall.png";
import "./styles.css";
import WelcomeSection from "./atoms/WelcomeSection";

const OpenCall = () => {
  return (
    <>
      <WelcomeSection welcomePictureSrc={Opencall} />
      <div className="cards-container">
        HELLO
        <Card image={Background} />
        <Card image={Background} />
      </div>
    </>
  );
};

export default OpenCall;
