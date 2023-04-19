import React from "react";
import WelcomePicture from "./../assets/welcome-bcg.png";
import WelcomeText from "./../assets/welcome-text.svg";
import LatestProjects from "./LatestProjects";
import SideMenu from "./atoms/SideMenu";
import YouTubeVideo from "./atoms/YouTubeVideo";

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
      <div className="welcome-video-container">
        <div className="welcome-video-container-left">
          <p>
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum{" "}
          </p>

          <button>READ MORE</button>
        </div>
        <div className="welcome-video-container-right">
          <div className="video-wrapper">
            <YouTubeVideo videoId="cTn_B2nEObI" />
          </div>
        </div>
      </div>
      <LatestProjects />
    </>
  );
};

export default Welcome;
