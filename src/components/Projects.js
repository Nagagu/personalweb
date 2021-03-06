import React from "react";
import battleshipCapture from "../battleshipCapture.png";
import catQuizCapture from "../catQuizCapture.png";
import portfolioCapture from "../portfolioCapture.png";
import thenewstoreCapture from "../thenewstoreCapture.png";
import todoAppCapture from "../todoAppCaptureNew.png";
import creandovinculos from "../creandovinculos.png";
import rubenCapture from "../rubenCapture.png";
import swaggerCapture from "../swaggerCapture.png";
export const Projects = () => {
  return (
    <div className="projects">
      <div className="section-title">Projects :</div>
      <div className="project-card">
        <a
          href="https://nagagu.github.io/TodoList/"
          className=""
          target="_blank"
        >
          <img src={todoAppCapture} alt="Todo List Capture" />
        </a>

        <h3>To-Do List</h3>
        <p>
          Simple To-Do application of React js together with the server part
          with C # in .Net environment and Entity Framework
        </p>
        <a
          href="https://github.com/Nagagu/TodoList/"
          className="btn-visit"
          target="_blank"
        >
          Github <i class="fab fa-github fa-lg"></i>
        </a>
        <a
          href="https://nagagu.github.io/TodoList/"
          className="btn-visit"
          target="_blank"
        >
          Visit site
        </a>
      </div>
      <div className="project-card">
        <a
          href="https://github.com/Nagagu/TodoListServer/"
          className=""
          target="_blank"
        >
          <img src={swaggerCapture} alt="Todo List Server Capture" />
        </a>

        <h3>To-Do List Server</h3>
        <p>Server part with C # in .Net environment and Entity Framework</p>
        <a
          href="https://github.com/Nagagu/TodoListServer/"
          className="btn-visit"
          target="_blank"
        >
          Github <i class="fab fa-github fa-lg"></i>
        </a>
        <a
          href="https://todolistappservice.azurewebsites.net/"
          className="btn-visit"
          target="_blank"
        >
          Visit site
        </a>
      </div>
      <div className="project-card">
        <a href="https://nagagu.github.io/portfolio/" className="">
          <img src={portfolioCapture} alt="portfolio Capture" target="_blank" />
        </a>

        <h3>Portfolio example</h3>
        <p>
          I wanted to do something with my photography portfolio and here it is.
          A showcase of some of my best photos and their location.
        </p>
        <a
          href="https://github.com/Nagagu/portfolio"
          className="btn-visit"
          target="_blank"
        >
          Github <i class="fab fa-github fa-lg"></i>
        </a>
        <a
          href="https://nagagu.github.io/portfolio/"
          className="btn-visit"
          target="_blank"
        >
          Visit site
        </a>
      </div>
      <div className="project-card">
        <a
          href="https://nagagu.github.io/TheNewStore/"
          className=""
          target="_blank"
        >
          <img src={thenewstoreCapture} alt="the new store Capture" />
        </a>

        <h3>The New Store</h3>
        <p>
          A simple store in which to add and remove products from the cart using
          Redux and calling an external API
        </p>
        <a
          href="https://github.com/Nagagu/TheNewStore"
          className="btn-visit"
          target="_blank"
        >
          Github <i class="fab fa-github fa-lg"></i>
        </a>
        <a
          href="https://nagagu.github.io/TheNewStore/"
          className="btn-visit"
          target="_blank"
        >
          Visit site
        </a>
      </div>
      <div className="project-card">
        <a
          href="https://nagagu.github.io/BattleShipGame/"
          className=""
          target="_blank"
        >
          <img src={battleshipCapture} alt="battleship Capture" />
        </a>

        <h3>Battleship Game</h3>
        <p>
          Very simplified version of the Battleship Game using Redux. It is a
          PWA so it can be installed on any operating system
        </p>
        <a
          href="https://github.com/Nagagu/BattleShipGame"
          className="btn-visit"
          target="_blank"
        >
          Github <i class="fab fa-github fa-lg"></i>
        </a>
        <a
          href="https://nagagu.github.io/BattleShipGame/"
          className="btn-visit"
          target="_blank"
        >
          Visit site
        </a>
      </div>
      <div className="project-card">
        <a
          href="https://nagagu.github.io/catsApp/"
          className=""
          target="_blank"
        >
          <a
            href="https://nagagu.github.io/catsApp/"
            className=""
            target="_blank"
          >
            <img src={catQuizCapture} alt="cat Quiz Capture" />
          </a>
        </a>
        <h3>Cat Quiz</h3>
        <p>
          Answer the questions to find out how much of a geek you are. Also
          developed as PWA.
        </p>
        <a
          href="https://github.com/Nagagu/catsApp/"
          className="btn-visit"
          target="_blank"
        >
          Github <i class="fab fa-github fa-lg"></i>
        </a>
        <a
          href="https://nagagu.github.io/catsApp/"
          className="btn-visit"
          target="_blank"
        >
          Visit site
        </a>
      </div>
      <div className="project-card">
        <a href="https://creandovinculos.com/" className="" target="_blank">
          <img src={creandovinculos} alt="creando vinculos Capture" />
        </a>

        <h3>Creando V??nculos Wordpress</h3>
        <p>A wordpress created with care for a psychotherapy professional</p>
        <a
          href="https://creandovinculos.com/"
          className="btn-visit"
          target="_blank"
        >
          Visit site
        </a>
      </div>
      <div className="project-card">
        <img src={rubenCapture} alt="creando vinculos Capture" />
        <h3>Ruben is my teacher</h3>
        <p>A Spanish classes wordpress for a teacher (currently inactive) </p>
      </div>
    </div>
  );
};
