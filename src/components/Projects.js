import React from "react";
import battleshipCapture from "../battleshipCapture.png";
import catQuizCapture from "../catQuizCapture.png";
import portfolioCapture from "../portfolioCapture.png";
import thenewstoreCapture from "../thenewstoreCapture.png";
import todoAppCapture from "../todoAppCapture.png";
export const Projects = () => {
  return (
    <div className="projects">
      <div className="section-title">Projects :</div>
      <div className="project-card">
        <img src={todoAppCapture} alt="Todo List Capture" />
        <h3>To-Do List</h3>
        <p>
          Simple To-Do application of React js together with the server part
          with C # in .Net environment and Entity Framework
        </p>
        <a href="" className="btn-visit">
          Visit site
        </a>
      </div>
      <div className="project-card">
        <img src={portfolioCapture} alt="portfolio Capture" />
        <h3>Portfolio example</h3>
        <p>
          I wanted to do something with my photography portfolio and here is. A
          showcase of some of my best photos and their location.
        </p>
        <a href="" className="btn-visit">
          Visit site
        </a>
      </div>
      <div className="project-card">
        <img src={thenewstoreCapture} alt="the new store Capture" />
        <h3>The New Store</h3>
        <p>
          A simple store in which to add and remove products from the cart using
          Redux and calling an external API
        </p>
        <a href="" className="btn-visit">
          Visit site
        </a>
      </div>
      <div className="project-card">
        <img src={battleshipCapture} alt="battleship Capture" />
        <h3>Battleship Game</h3>
        <p>
          Very simplified version of the battleship Game using Redux. It is a
          PWA so it can be installed on any operating system
        </p>
        <a href="" className="btn-visit">
          Visit site
        </a>
      </div>
      <div className="project-card">
        <img src={catQuizCapture} alt="cat Quiz Capture" />
        <h3>Cat Quiz</h3>
        <p>
          Answer the questions to find out how much of a geek you are. Also
          developed as PWA.
        </p>
        <a href="" className="btn-visit">
          Visit site
        </a>
      </div>
    </div>
  );
};
