import React from "react";
import WelcomePicture from "./../assets/welcome-bcg.png";
import WelcomeText from "./../assets/welcome-text.svg";
import LatestProjects from "./LatestProjects";
import SideMenu from "./atoms/SideMenu";

const Welcome = () => {
  return (
    <>
      <div className="welcome-container">
        <SideMenu />
        <div className="welcome-text-container">
          <img src={WelcomeText} alt="Welcome" />
        </div>
        <div className="welcome-image-container">
          <img className="welcome-image" src={WelcomePicture} alt="Graphic" />
        </div>
      </div>
      <LatestProjects />
    </>
  );
};

export default Welcome;
