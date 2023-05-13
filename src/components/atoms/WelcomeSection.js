import React from "react";

import YouTubeVideo from "./YouTubeVideo";

const WelcomeSection = ({
  welcomePictureSrc,
  welcomeParagraph,
  buttonLink,
  buttonText = "READ MORE",
  buttonLink2,
  buttonText2,
  videoId,
  paddingTop,
}) => {
  return (
    <>
      <div className="welcome-container">
        {welcomePictureSrc && (
          <div className="welcome-image-container">
            <img
              className="welcome-image"
              src={welcomePictureSrc}
              alt="Graphic"
            />
          </div>
        )}
      </div>

      {(welcomeParagraph || buttonLink || videoId) && (
        <div
          className="welcome-second-container"
          style={{ paddingTop: paddingTop }}
        >
          {(welcomeParagraph || buttonLink) && (
            <div className="welcome-second-container-left">
              {welcomeParagraph && <p>{welcomeParagraph}</p>}
              {buttonLink && (
                <div style={{ marginTop: "2rem" }}>
                  <button onClick={() => (window.location.href = buttonLink)}>
                    {buttonText}
                  </button>
                </div>
              )}

              {buttonLink2 && (
                <div style={{ marginTop: "2rem" }}>
                  <button onClick={() => (window.location.href = buttonLink)}>
                    {buttonText2}
                  </button>
                </div>
              )}
            </div>
          )}
          {videoId && (
            <div className="welcome-second-container-right">
              <div className="video-wrapper">
                <YouTubeVideo videoId={videoId} />
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default WelcomeSection;
