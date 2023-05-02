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
      <WelcomeSection
        welcomePictureSrc={ContactPicture}
        welcomeParagraph="CONTACT US: francesco@subbar.net"
      />
    </>
  );
};

export default Contact;
