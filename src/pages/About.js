import React from "react";
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

export const About = () => {
  return (
    <div className="section about">
      <div className="section-title">About :</div>
      <div className="aboutContainer">
        <div className="personalPhoto">
          <img src={personalphoto} alt="personal photo"></img>
        </div>
        <div>
          {" "}
          <p>
            I am a reinvented environmentalist who decided to learn programming
            to aspire to a more stable work life. In the world of programming I
            discovered that I could unleash my creativity (and my fixaxion for
            fixing broken or ugly things :P) and that is what motivates me the
            most today.
            {/* I'm in love working with React and also being able to hold my
            own into the back-end code which is not a very common role you might
            find in a team, in that way this is one of my strenght of my
            profile. */}
          </p>
          <p>
            I like to focus on details, design, aesthetics and creative
            development. I would like to keep learning about web animation and
            create amazing websites and user experiences.
            {/* I'm a bit tired of working on boring
            projects that are monotonous or take years. I prefer to be part of
            companies that develop short-term projects with attention to detail
            and aesthetics, since it is the part of programming that I like the
            most. //no poner cosas negativas, ni I prefer to be part of
            companies that develop short-term projects, pequieños detalles, amor
            por la animación y el arte en la web */}
          </p>
          <p>
            {" "}
            My intention is to make of this web the place where I would drag all
            my programming knowledge along the time, so it would be a dynamic
            place where you can check my evolution{" "}
          </p>
        </div>
        <div className="section-title-tools">My main Tools</div>
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
              <img
                src="https://user-images.githubusercontent.com/38039349/60953119-d3c6f300-a2fc-11e9-9596-4978e5d52180.png"
                alt="react icon"
              />
              <span>Framer Motion</span>
            </li>
            <li>
              <img
                src="https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png"
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
  );
};
