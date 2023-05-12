import React from "react";
/*
import Card from "./atoms/Card";
import Background from "./../assets/BG.svg";
*/

import "./styles.css";

const Contact = () => {
  return (
    <>
      <div
        style={{
          fontSize: "8vw", // Adjust as needed
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
