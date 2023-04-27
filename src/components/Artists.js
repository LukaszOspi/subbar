import React, { useState, useEffect } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import axios from "axios";
import ArtistWelcome from "./../assets/ourartists.png";
import SideMenu from "./atoms/SideMenu";
import Card from "./atoms/Card";
import WelcomeSection from "./atoms/WelcomeSection";
import { useSwipeable } from "react-swipeable";

const MobileCard = ({ data, currentIndex, setCurrentIndex }) => {
  const currentCard = data[currentIndex];

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => setCurrentIndex((currentIndex + 1) % data.length),
    onSwipedRight: () =>
      setCurrentIndex((currentIndex - 1 + data.length) % data.length),
  });

  return (
    <div {...swipeHandlers}>
      <Card
        key={currentIndex}
        index={currentIndex + 1}
        image={currentCard.image}
        title={currentCard.name}
        description={documentToReactComponents(currentCard.description)}
        location={currentCard.location}
        url={currentCard.url}
      />
    </div>
  );
};

const Artists = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  //eslint-disable-next-line
  const [pageCount, setPageCount] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://cdn.contentful.com/spaces/5efp2j34tblf/environments/master/entries",
          {
            params: {
              access_token: "Kx6XAVX4jQsvyUT0zSY-9jy_7iE6CC7eQ9t9Sh38yz8",
              content_type: "artists",
            },
          }
        );

        const images = createImageObject(response.data.includes.Asset);
        const items = response.data.items.map((item) => {
          const imageId = item.fields.picture?.sys?.id;
          const imageUrl = imageId ? images[imageId] : null;

          return {
            ...item.fields,
            image: imageUrl,
          };
        });

        setData(items);
        console.log("Response:", response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Calculate the number of pages
    setPageCount(Math.ceil(data.length / 2));
  }, [data]);

  const createImageObject = (assets) => {
    const imageObject = {};

    assets.forEach((asset) => {
      imageObject[asset.sys.id] = `https:${asset.fields.file.url}`;
    });

    return imageObject;
  };

  console.log("Data:", data);

  const renderCards = () => {
    const startIndex = (currentPage - 1) * 2;
    const endIndex = startIndex + 2;

    return data
      .slice(startIndex, endIndex)
      .map((item, index) => (
        <Card
          key={index}
          index={index + 1}
          image={item.image}
          title={item.name}
          description={documentToReactComponents(item.description)}
          location={item.location}
          url={item.url}
        />
      ));
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < pageCount) {
      setCurrentPage(currentPage + 1);
    }
  };

  const renderPageIndicators = () => {
    const indicators = [];

    for (let i = 1; i <= pageCount; i++) {
      indicators.push(
        <div
          key={i}
          className={`page-indicator ${currentPage === i ? "active" : ""}`}
        />
      );
    }

    return indicators;
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const isMobile = () => {
    return screenWidth <= 768; // Adjust this value based on your mobile breakpoint
  };

  const renderMobileCards = () => {
    return (
      <MobileCard
        data={data}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
    );
  };

  if (data.length === 0) {
    return (
      <>
        <SideMenu /> <div>Loading...</div>
      </>
    );
  }
  return (
    <>
      <SideMenu />
      <WelcomeSection welcomePictureSrc={ArtistWelcome} />
      <div className="cards-container artists-cards-container">
        {" "}
        {isMobile() ? renderMobileCards() : renderCards()}
      </div>
      {!isMobile() && (
        <>
          <div className="navigation">
            <button className="nav-button" onClick={handlePrevClick}>
              &lt;
            </button>
            <button className="nav-button" onClick={handleNextClick}>
              &gt;
            </button>
          </div>
          <div className="page-indicators">{renderPageIndicators()}</div>
        </>
      )}
    </>
  );
};

export default Artists;
