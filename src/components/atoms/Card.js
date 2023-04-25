import React from "react";
import "./../styles.css";

const Card = ({
  image,
  title,
  description,
  secondTitle,
  location,
  index,
  number,
  url,
}) => {
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

  return (
    <div className="card">
      <div className="card-image-container">
        <div className="card-image">
          <a href={validatedUrl}>
            <img src={image} alt={title} />
            {number ? (
              <span className="index-number">{formattedIndex}</span>
            ) : null}
          </a>
        </div>
      </div>
      <div className="card-text-container">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <p className="card-event-production">{secondTitle}</p>

        <span className="card-location">{location}</span>
      </div>
    </div>
  );
};

export default Card;
