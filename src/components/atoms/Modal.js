import React from "react";
import "./../styles.css";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const Modal = ({
  image,
  title,
  description,
  descriptionContinuation,
  onClose,
  isRichText = false,
}) => {
  return (
    <>
      <div className="modal-overlay" onClick={onClose}>
        <button className="modal-close" onClick={onClose}>
          X
        </button>
        <div
          className="modal-content"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="modal-image-container">
            <img src={image} alt={title} className="modal-image" />
          </div>
          <h2 className="modal-title">{title}</h2>
          <div className="modal-description">
            {isRichText ? documentToReactComponents(description) : description}
          </div>
          <div className="modal-description-continuation">
            {descriptionContinuation
              ? documentToReactComponents(descriptionContinuation)
              : ""}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
