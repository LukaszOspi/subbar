import React, { useState } from "react";
import "./../styles.css";
import Background from "./../../assets/BG.svg";

const Card = ({
  image,
  title,
  description,
  secondTitle,
  location,
  index,
  number,
  url,
  onImageClick,
  onTitleClick,
  renderButton,
  urlPdf,
  width,
  borderRadius,
  displayImage = true,
  crossedTitle = false,
  eventTitleFuture = false,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const formattedIndex = String(index).padStart(2, "0");

  const validateUrl = (url) => {
    const defaultUrl = "#";
    const httpPrefix = "http://";
    const httpsPrefix = "https://";

    if (!url) {
      return defaultUrl;
    }

    if (!url.startsWith(httpPrefix) && !url.startsWith(httpsPrefix)) {
      return `${httpsPrefix}${url}`;
    }

    return url;
  };

  const validatedUrl = validateUrl(url);
  const handleTextClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleAnchorClick = (e) => {
    if (onImageClick) {
      e.preventDefault();
      onImageClick();
    }
  };

  const handleTitleClick = (e) => {
    if (onTitleClick) {
      // Check if onTitleClick is provided
      e.preventDefault();
      onTitleClick();
    }
  };

  return (
    <div className="card" style={{ width: width || "auto" }}>
      {displayImage !== false && (
        <div
          className="card-image-container"
          style={{
            maxWidth: width,
            height: width,
          }}
        >
          <div className="card-image" style={{ width: width }}>
            <a //eslint-disable-line
              href={onImageClick ? "#" : validatedUrl} //eslint-disable-line
              onClick={handleAnchorClick} // eslint-disable-line
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={image ? image : Background}
                alt={title}
                style={{
                  maxWidth: width,
                  height: width,
                  minWidth: width ? "1rem" : `auto`,
                  borderRadius: borderRadius,
                  objectFit: "cover",
                }}
              />
              {number ? (
                <span className="index-number">{formattedIndex}</span>
              ) : null}
            </a>
          </div>
        </div>
      )}
      <div
        className={`card-text-container ${isExpanded ? "expanded" : ""}`}
        onClick={handleTextClick}
      >
        <h2
          className="card-title"
          style={{
            textDecoration: crossedTitle ? "line-through" : "none",
            fontSize: crossedTitle || eventTitleFuture ? "2rem" : "",
            fontWeight: crossedTitle || eventTitleFuture ? "300" : "",
            cursor: "pointer",
          }}
          onClick={handleTitleClick} // Use the handler here
        >
          {title}
        </h2>
        {location ? <span className="card-location">{location}</span> : null}

        <div className="card-description">{description}</div>
        {urlPdf && (
          <button className="pdf-download-container">
            <a href={urlPdf} target="_blank" rel="noopener noreferrer">
              DOWNLOAD PDF
            </a>
          </button>
        )}
        {secondTitle ? (
          <p className="card-event-production">{secondTitle}</p>
        ) : null}
        <p className="card-event-production">{secondTitle}</p>
      </div>
      {renderButton && (
        <div className="read-more-container">{renderButton}</div>
      )}
    </div>
  );
};

export default Card;
