import React from "react";
import Card from "./atoms/Card";
import Background from "./../assets/BG.svg";
import "./styles.css";

const OpenCall = () => {
  return (
    <>
      <div className="cards-container">
        HELLO
        <Card image={Background} />
        <Card image={Background} />
      </div>
    </>
  );
};

export default OpenCall;
