import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./atoms/Card";
import Background from "./../assets/BG.svg";
import Opencall from "./../assets/opencall.png";
import "./styles.css";
import WelcomeSection from "./atoms/WelcomeSection";
import Modal from "./atoms/Modal"; // Import the Modal component (to be created)

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const OpenCall = () => {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://cdn.contentful.com/spaces/5efp2j34tblf/environments/master/entries",
        {
          params: {
            access_token: "Kx6XAVX4jQsvyUT0zSY-9jy_7iE6CC7eQ9t9Sh38yz8",
            content_type: "subBarOpenCall",
          },
        }
      );
      const createImageObject = (assets) => {
        const imageObject = {};

        assets.forEach((asset) => {
          imageObject[asset.sys.id] = `https:${asset.fields.file.url}`;
        });

        return imageObject;
      };

      const images = createImageObject(response.data.includes.Asset);
      setData(
        response.data.items.map((item) => {
          const fields = item.fields;

          // Extract text content from the description and descriptionContinuation objectsconst extractText = (contentObject) => {
          const extractText = (contentObject) => {
            if (
              !contentObject ||
              !contentObject.content ||
              !Array.isArray(contentObject.content)
            ) {
              return null;
            }
            return contentObject;
          };

          const descriptionText = extractText(fields.description);
          const descriptionContinuationText = extractText(
            fields.descriptionContinuation
          );

          return {
            ...item,
            images,
            fields: {
              ...fields,
              description: descriptionText,
              descriptionContinuation: descriptionContinuationText,
            },
          };
        })
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleReadMoreClick = (fields, imageUrl) => {
    setShowModal(true);
    setModalContent({
      image: imageUrl,
      title: fields.title,
      description: fields.description,
      descriptionContinuation: fields.descriptionContinuation,
    });
  };

  const handleModalClose = () => {
    setShowModal(false);
    setModalContent(null);
  };

  return (
    <>
      <WelcomeSection welcomePictureSrc={Opencall} welcomeParagraph="" />
      <div className="cards-container">
        {data.map((item, index) => {
          const fields = item.fields;
          const imageId = fields.image?.sys?.id;
          const imageUrl = imageId ? item.images[imageId] : Background;
          const button = (
            <button
              className="read-more-btn"
              onClick={() => handleReadMoreClick(fields, imageUrl)}
            >
              Read more
            </button>
          );
          return (
            <React.Fragment key={index}>
              <Card
                image={imageUrl}
                title={fields.title}
                description={
                  fields.description
                    ? documentToReactComponents(fields.description)
                    : ""
                }
                index={index}
                onImageClick={() => handleReadMoreClick(fields, imageUrl)}
                renderButton={button}
                urlPdf={fields.urlPdf}
              />
            </React.Fragment>
          );
        })}
      </div>
      {showModal && (
        <Modal
          onClose={handleModalClose}
          image={modalContent.image}
          title={modalContent.title}
          description={modalContent.description}
          descriptionContinuation={modalContent.descriptionContinuation}
        />
      )}
    </>
  );
};

export default OpenCall;
