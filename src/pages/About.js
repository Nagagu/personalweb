import React, { useEffect } from "react";
import personalphoto from "../assets/personal-photo2.png";
import reactIcon from "../assets/react.svg";
import htmlIcon from "../assets/html.svg";
import css3 from "../assets/css3.svg";
import jsIcon from "../assets/js.svg";
import tsxIcon from "../assets/tps.svg";
import vs2019 from "../assets/vs2019.svg";
import vscode from "../assets/vscode.svg";
import wordpress from "../assets/wordpress.svg";
import photoshop from "../assets/photoshop.svg";
import azure from "../assets/azure.svg";
import framerMotion from "../assets/framer-motion.svg";
import styledComponents from "../assets/styled-components-1.svg";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion/dist/framer-motion";

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
      <div className="aboutContainer">
        <div className="personalPhoto">
          <img src={personalphoto} alt="personal photo"></img>
        </div>
        <div className="aboutText">
          {" "}
          <p>
            I am a reinvented environmentalist who decided to learn programming
            to aspire to a more stable work life. In the world of programming I
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
                <img src={reactIcon} alt="react icon" />
                <span>React</span>
              </li>
              <li>
                {" "}
                <img src={tsxIcon} alt="typescript icon" />
                <span>TypeScript</span>
              </li>
              <li>
                <img src={jsIcon} alt="javascript icon" />
                <span>JavaScript</span>
              </li>
              <li>
                <img src={htmlIcon} alt="html icon" />
                <span>HTML</span>
              </li>
              <li>
                <img src={css3} alt="css3 icon" />
                <span>CSS</span>
              </li>
              <li>
                <img src={vscode} alt="visual studio code icon" />
                <span>VS Code</span>
              </li>
              <li>
                <img src={framerMotion} alt="react icon" />
                <span>Framer Motion</span>
              </li>
              <li>
                <img
                  style={{ backgroundColor: "white" }}
                  src={styledComponents}
                  alt="react icon"
                />
                <span>Styled Components</span>
              </li>
              <li>
                <img src={azure} alt="azure devops icon" />
                <span>Azure Devops</span>
              </li>
              <li>
                <img src={vs2019} alt="visual studio 2019 icon" />
                <span>VS 2019</span>
              </li>
              <li>
                <img src={wordpress} alt="wordpress icon" />
                <span>WordPress</span>
              </li>
              <li>
                <img src={photoshop} alt="photoshop icon" />
                <span>Photoshop</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
