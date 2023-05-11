import React from "react";
/*
import Card from "./atoms/Card";
import Background from "./../assets/BG.svg";
*/
import WelcomeSection from "./atoms/WelcomeSection";
import ContactPicture from "../assets/sub_bar_2.png";
import "./styles.css";

const Contact = () => {
  return (
    <>
      <WelcomeSection welcomePictureSrc={ContactPicture} />
      <div
        style={{
          fontSize: "10rem",
          fontWeight: "700",
          paddingBottom: "30%",
          paddingTop: "10%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <a href="mailto:hello@eufonia.io">HELLO@EUFONIA.IO</a>
      </div>
    </>
  );
};

export default Contact;
