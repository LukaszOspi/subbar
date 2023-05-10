import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./atoms/Card";
import Background from "./../assets/BG.svg";
import Opencall from "./../assets/opencall.png";
import "./styles.css";
import WelcomeSection from "./atoms/WelcomeSection";
import Modal from "./atoms/Modal";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const OpenCall = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://cdn.contentful.com/spaces/5efp2j34tblf/environments/master/entries",
        {
          params: {
            access_token: "Kx6XAVX4jQsvyUT0zSY-9jy_7iE6CC7eQ9t9Sh38yz8",
            content_type: "subBarOpenCall",
          },
        }
      );
      console.log(response.data); // Log the response data here

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
      setError(null);
    } catch (error) {
      console.error("Error fetching data:", error);
      setData([]);
      setError(error);
    } finally {
      setLoading(false);
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
    if (setShowModal && setModalContent) {
      setShowModal(false);
      setModalContent(null);
    } else {
      console.log("setShowModal or setModalContent is null or undefined");
    }
  };

  return (
    <>
      <WelcomeSection welcomePictureSrc={Opencall} welcomeParagraph="" />
      <div className="cards-container">
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>There was an error loading the data.</div>
        ) : (
          data.map((item, index) => {
            const fields = item.fields;
            const imageId = fields.image?.sys?.id;
            const imageUrl = imageId ? item.images[imageId] : Background;
            const button = fields.descriptionContinuation ? (
              <button
                className="read-more-btn"
                onClick={() => handleReadMoreClick(fields, imageUrl)}
              >
                Read more
              </button>
            ) : (
              <div></div>
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
                  isRichText={true}
                />
              </React.Fragment>
            );
          })
        )}
      </div>
      {showModal && (
        <Modal
          onClose={handleModalClose}
          image={modalContent.image}
          title={modalContent.title}
          description={
            modalContent.description
              ? documentToReactComponents(modalContent.description)
              : ""
          }
          descriptionContinuation={
            modalContent.descriptionContinuation
              ? documentToReactComponents(modalContent.descriptionContinuation)
              : ""
          }
        />
      )}
    </>
  );
};

export default OpenCall;
