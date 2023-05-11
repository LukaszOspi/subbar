import React, { useEffect, useState } from "react";
import axios from "axios";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import Card from "./atoms/Card";
import Background from "./../assets/BG.svg";
import Team from "./../assets/team.svg";
import WelcomeSection from "./atoms/WelcomeSection";
import AboutUsPicture from "../assets/sub_bar_2.png";
import "./styles.css";

const AboutUs = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://cdn.contentful.com/spaces/5efp2j34tblf/environments/master/entries",
        {
          params: {
            access_token: "Kx6XAVX4jQsvyUT0zSY-9jy_7iE6CC7eQ9t9Sh38yz8",
            content_type: "team",
          },
        }
      );
      console.log(response.data);
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
          const titleText = extractText(fields.title);

          return {
            ...item,
            images,
            fields: {
              ...fields,
              description: descriptionText,
              title: titleText,
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

  return (
    <>
      <div style={{ paddingTop: "0rem" }}>
        <WelcomeSection paddingTop="0rem" welcomePictureSrc={AboutUsPicture} />
      </div>
      <div className="about-us about-us-container">
        <div className="about-us-text">
          <div style={{ fontWeight: "100", paddingBottom: "10rem" }}>
            Welcome to Sub_Bar, a creative environment based on subfrequencies
            and vibrations, and a meeting point between hearing and deaf
            cultures. We empower artists, businesses, and organizations
            worldwide with the tools and expertise they need to create local
            events, and we nurture their communities through educative programs,
            strategic partnerships, and open calls. We promote an alternative,
            intense, and trance-inducing format where the art of "listening" is
            a task for the whole body, creating shared memories and inspiring
            tomorrow's technologies. This community of artists and researchers
            is held together by curiosity, innovation, and mutual learning, in
            pursuit of the next beautiful thing.
          </div>

          <div
            style={{
              paddingBottom: "10rem",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>SUB_BAR</span> <br></br>
            <span>
              through sub_bar we create a new art form and creative language
              that uses subwoofers and tactile technology to interact through
              the sense of touch. set in an aesthetic-artistic context, sub_bar
              aims to promote inclusion as an opportunity and a task for all of
              us.
            </span>
            <br></br>
            <span>
              sub frequencies are low-frequency sounds, that are mainly
              perceived by the body and our nervous system rather than our ears:
              differently than sound, they are not directional (left or right,
              front or back), and they trigger a sense of full immersion.
            </span>
            <br></br>
            <span>
              low frequencies stimulation is not a novel field, in fact, its
              beneficial effect has been clinically studied over the last two
              decades.
            </span>
            <br></br>
            <span>
              this physical and aesthetic experience triggers a sense that has
              always been in the background, growing its memories, curiosity,
              and its language. with music in mind, sub_bar gives voice to that
              background, through the vision of the best artists out there.
            </span>
            <br></br>
            <br></br>
            <span>ABOUT US</span> <br></br>
            <span>
              since 2021, we promote compositions and performances from hearing
              and deaf artists who work with this new medium, creating
              vibrations that can be felt throughout the body, to creating
              unique and intense experiences.
            </span>
            <br></br>
            <span>
              <br></br>
              we took inspiration from music education and multisensory research
              to establish a new creative language, and after hosting regular
              events in Lisbon, Berlin, Leipzig, and Köln, we are about to
              launch sub_bar in the rest of Europe, creating even more
              possibilities to connect, create, and perform.
            </span>
            <br></br>
          </div>
        </div>
        <div>
          <img src={Team} alt="Team" />
        </div>
        <div className="about-us-team">
          {loading ? (
            <div>Loading...</div>
          ) : error ? (
            <div>There was an error loading the data.</div>
          ) : (
            data.map((item, index) => {
              const fields = item.fields;
              const imageId = fields.image?.sys?.id;
              const imageUrl = imageId ? item.images[imageId] : Background;

              return (
                <React.Fragment key={index}>
                  <Card
                    image={imageUrl}
                    title={
                      fields.title && fields.title.content
                        ? documentToReactComponents(fields.title)
                        : ""
                    }
                    description={
                      fields.description && fields.description.content
                        ? documentToReactComponents(fields.description)
                        : ""
                    }
                    url={fields.url}
                    width="300px"
                    borderRadius={"50px"}
                  />
                </React.Fragment>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default AboutUs;
