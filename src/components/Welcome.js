import React from "react";
import WelcomePicture from "./../assets/welcome.svg";
import YouTubeVideo from "./atoms/YouTubeVideo";
import LatestProjects from "./LatestProjects";
import SideMenu from "./atoms/SideMenu";

const Welcome = () => {
  return (
    <>
      <div className="welcome-container">
        <SideMenu />
        <img className="welcome-image" src={WelcomePicture} alt="Graphic" />
        <div className="video-wrapper">
          <YouTubeVideo videoId="cTn_B2nEObI" />
        </div>
      </div>
      <LatestProjects />
    </>
  );
};

export default Welcome;
