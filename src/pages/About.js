import React, { useEffect } from "react";
import personalphoto from "../assets/personal-photo2.png";
import ReactIcon from "../components/Icons/react.js";
import HtmlIcon from "../components/Icons/html.js";
import CssIcon from "../components/Icons/css3.js";
import JsIcon from "../components/Icons/js.js";
import WordpressIcon from "../components/Icons/wordpress.js";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import VSCodeIcon from "../components/Icons/vscode";
import FramerMotionIcon from "../components/Icons/framer-motion";
import StyledComponentsIcon from "../components/Icons/styledComponents.js";
import AzureIcon from "../components/Icons/azure";
import Vs2019Icon from "../components/Icons/vs2019";
import PhotoshopIcon from "../components/Icons/photoshop";
import TypeScriptIcon from "../components/Icons/tps";

export const About = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();
  const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
    hidden: { opacity: 0 },
    hover: {
      scale: 2,
    },
  };

  useEffect(() => {
    if (inView) {
      const element = document.querySelector(".tools");
      element?.classList.add("animate__animated", "animate__zoomIn");
    }
    // else {
    //   control.start("hidden");
    // }
  }, [control, inView]);

  return (
    <div className="section about">
      <div className="section-title">About :</div>
      {/* <div className="aboutContainer"> */}
      <div className="personalPhoto">
        <img src={personalphoto} alt="personal photo"></img>
      </div>
      <div className="aboutText">
        {" "}
        <p>
          I am a reinvented environmentalist who decided to learn programming to
          aspire to a more stable work life. In the world of programming I
          discovered that I could unleash my creativity (and my fixaxion for
          fixing broken or ugly things :P) and that is what motivates me the
          most today.
        </p>
        <p>
          I like to focus on details, design, aesthetics and creative
          development. I would like to keep learning about web animation and
          create amazing websites and user experiences.
        </p>
        <p>
          {" "}
          My intention is to make of this web the place where I would drag all
          my programming knowledge along the time, so it would be a dynamic
          place where you can check my evolution{" "}
        </p>
      </div>
      <div
        className="tools"
        ref={ref}
        // variants={boxVariant}
        // initial="hidden"
        // animate={control}
      >
        <div className="section-title-tools">My main Tools :</div>
        <div className="skillsContainer">
          <ul className="skillsList">
            <li>
              <ReactIcon />
              <span>React</span>
            </li>
            <li>
              {" "}
              <TypeScriptIcon />
              <span>TypeScript</span>
            </li>
            <li>
              <JsIcon />
              <span>JavaScript</span>
            </li>
            <li>
              <HtmlIcon />
              <span>HTML</span>
            </li>
            <li>
              <CssIcon />
              <span>CSS</span>
            </li>
            <li>
              <VSCodeIcon />
              <span>VS Code</span>
            </li>
            <li>
              <FramerMotionIcon />
              <span>Framer Motion</span>
            </li>
            <li>
              <StyledComponentsIcon />
              <span>Styled Components</span>
            </li>
            <li>
              <AzureIcon />
              <span>Azure Devops</span>
            </li>
            <li>
              <Vs2019Icon />
              <span>VS 2019</span>
            </li>
            <li>
              <WordpressIcon />

              <span>WordPress</span>
            </li>
            <li>
              <PhotoshopIcon />
              <span>Photoshop</span>
            </li>
          </ul>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};
