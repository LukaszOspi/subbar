import React, { useState, useEffect } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import axios from "axios";

import SideMenu from "./atoms/SideMenu";
import Card from "./atoms/Card";

const Artists = () => {
  const [data, setData] = useState([]);

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
          console.log("Picture URL:", imageUrl);
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

  const createImageObject = (assets) => {
    const imageObject = {};

    assets.forEach((asset) => {
      imageObject[asset.sys.id] = `https:${asset.fields.file.url}`;
    });

    return imageObject;
  };

  console.log("Data:", data);

  return (
    <>
      <SideMenu />

      <div className="cards-container">
        {data.map((item, index) => (
          <Card
            key={index}
            index={index + 1}
            image={item.image}
            title={item.name}
            description={documentToReactComponents(item.description)}
            location={item.location}
            url={item.url}
          />
        ))}
      </div>
    </>
  );
};

export default Artists;
