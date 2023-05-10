import React from "react";

import Card from "./atoms/Card";
import Background from "./../assets/BG.svg";
import Team from "./../assets/team.svg";
import WelcomeSection from "./atoms/WelcomeSection";
import AboutUsPicture from "../assets/sub_bar_2.png";
import "./styles.css";

const AboutUs = () => {
  return (
    <>
      <div style={{ paddingTop: "0rem" }}>
        <WelcomeSection
          paddingTop="0rem"
          welcomePictureSrc={AboutUsPicture}
          welcomeParagraph=" WELCOME TO SUB_BAR, A CREATIVE ENVIRONMENT BASED ON SUBFREQUENCIES AND VIBRATIONS, AND A MEETING POINT BETWEEN HEARING AND DEAF CULTURES. WE EMPOWER ARTISTS, BUSINESSES, AND ORGANISATIONS WORLDWIDE WITH THE TOOLS AND EXPERTISE THEY NEED TO CREATE LOCAL EVENTS, AND WE NURTURE THEIR COMMUNITIES THROUGH EDUCATIVE PROGRAMS, STRATEGIC PARTNERSHIPS, AND OPEN CALLS.

WE PROMOTE AN ALTERNATIVE, INTENSE, AND TRANCE-INDUCING FORMAT WHERE THE ART OF “LISTENING” IS A TASK FOR THE WHOLE BODY, CREATING SHARED MEMORIES AND INSPIRING TOMORROW’S TECHNOLOGIES. THIS COMMUNITY OF ARTISTS AND RESEARCHERS IS HELD TOGETHER BY CURIOSITY, INNOVATION, AND MUTUAL LEARNING, IN PURSUIT OF THE NEXT BEAUTIFUL THING."
        />
      </div>
      <div className="about-us about-us-container">
        <div className="about-us-text">
          <p
            style={{
              paddingBottom: "10rem",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>SUB_BAR</span> <br></br>
            <span>
              THROUGH SUB_BAR WE CREATE A NEW ART FORM AND CREATIVE LANGUAGE
              THAT USES SUBWOOFERS AND TACTILE TECHNOLOGY TO INTERACT THROUGH
              THE SENSE OF TOUCH. SET IN AN AESTHETIC-ARTISTIC CONTEXT, SUB_BAR
              AIMS TO PROMOTE INCLUSION AS AN OPPORTUNITY AND A TASK FOR ALL OF
              US.
            </span>
            <br></br>
            <span>
              {" "}
              SUB FREQUENCIES ARE LOW-FREQUENCY SOUNDS, THAT ARE MAINLY
              PERCEIVED BY THE BODY AND OUR NERVOUS SYSTEM RATHER THAN OUR EARS:
              DIFFERENTLY THAN SOUND, THEY ARE NOT DIRECTIONAL (LEFT OR RIGHT,
              FRONT OR BACK), AND THEY TRIGGER A SENSE OF FULL IMMERSION.{" "}
            </span>{" "}
            <br></br>
            <span>
              LOW FREQUENCIES STIMULATION IS NOT A NOVEL FIELD, IN FACT, ITS
              BENEFICIAL EFFECT HAS BEEN CLINICALLY STUDIED OVER THE LAST TWO
              DECADES.{" "}
            </span>{" "}
            <br></br>
            <span>
              THIS PHYSICAL AND AESTHETIC EXPERIENCE TRIGGERS A SENSE THAT HAS
              ALWAYS BEEN IN THE BACKGROUND, GROWING ITS MEMORIES, CURIOSITY,
              AND ITS LANGUAGE. WITH MUSIC IN MIND, SUB_BAR GIVES VOICE TO THAT
              BACKGROUND, THROUGH THE VISION OF THE BEST ARTISTS OUT THERE.{" "}
            </span>{" "}
            <br></br>
            <br></br>
            <span>ABOUT US</span> <br></br>
            <span>
              SINCE 2021, WE PROMOTE COMPOSITIONS AND PERFORMANCES FROM HEARING
              AND DEAF ARTISTS WHO WORK WITH THIS NEW MEDIUM, CREATING
              VIBRATIONS THAT CAN BE FELT THROUGHOUT THE BODY, TO CREATING
              UNIQUE AND INTENSE EXPERIENCES.
            </span>
            <br></br>
            <span>
              <br></br>
              WE TOOK INSPIRATION FROM MUSIC EDUCATION AND MULTISENSORY RESEARCH
              TO ESTABLISH A NEW CREATIVE LANGUAGE, AND AFTER HOSTING REGULAR
              EVENTS IN LISBON, BERLIN, LEIPZIG, AND KÖLN, WE ARE ABOUT TO
              LAUNCH SUB_BAR IN THE REST OF EUROPE, CREATING EVEN MORE
              POSSIBILITIES TO CONNECT, CREATE, AND PERFORM. 
            </span>
            <br></br>
          </p>
        </div>
        <div>
          <img src={Team} alt="Team" />
        </div>
        <div className="about-us-team">
          <Card
            image={Background}
            title="Team"
            description="The team behind Sub_Bar"
            width="300px"
            borderRadius={"50px"}
          />
          <Card
            image={Background}
            title="Team"
            description="The team behind Sub_Bar"
            width="300px"
            borderRadius={"50px"}
          />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
