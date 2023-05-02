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
  renderButton,
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

  return (
    <div className="card">
      <div className="card-image-container">
        <div className="card-image">
          <a //eslint-disable-line
            href={onImageClick ? "#" : validatedUrl} //eslint-disable-line
            onClick={handleAnchorClick} // eslint-disable-line
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={image ? image : Background} alt={title} />
            {number ? (
              <span className="index-number">{formattedIndex}</span>
            ) : null}
          </a>
        </div>
      </div>
      <div
        className={`card-text-container ${isExpanded ? "expanded" : ""}`}
        onClick={handleTextClick}
      >
        <h2 className="card-title">{title}</h2>
        <span className="card-location">{location}</span>
        <div className="card-description">{description}</div>
        <p className="card-event-production">{secondTitle}</p>
      </div>
      {renderButton && (
        <div className="read-more-container">{renderButton}</div>
      )}
    </div>
  );
};

export default Card;
