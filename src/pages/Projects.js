import React, { useEffect } from "react";
import battleshipCapture from "../assets/battleshipCapture.png";
import catQuizCapture from "../assets/catQuizCapture.png";
import portfolioCapture from "../assets/portfolioCapture.png";
import thenewstoreCapture from "../assets/thenewstoreCapture.png";
import todoAppCapture from "../assets/todoAppCaptureNew.png";
import creandovinculos from "../assets/creandovinculos.png";
import rubenCapture from "../assets/rubenCapture.png";
import swaggerCapture from "../assets/swaggerCapture.png";
import { useAnimation, motion } from "framer-motion/dist/framer-motion";
import { useInView } from "react-intersection-observer";
export const Projects = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();
  const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 },
  };
  useEffect(() => {
    if (inView) {
      debugger;
      control.start("visible");
    }
    // else {
    //   control.start("hidden");
    // }
  }, [control, inView]);
  return (
    <div className="projects">
      <div className="section-title">Projects :</div>
      {/* <motion.div
        className="box"
        // r}ef={ref
        variants={boxVariant}
        initial="hidden"
        animate={control}
      >
        <h1>Box 1 </h1>
      </motion.div> */}
      {/* <motion.div
        initial={{ y: 55 }}
        variants={projectsCardVariants}
        whileInView={{ opacity: 1, y: 0 }}
        animate={{ y: 0, scale: 1 }}
        transition={{
          duration: 1,
        }}
        className="project-card"
      > */}
      <motion.div
        ref={ref}
        // animate={controls}
        // initial="hidden"
        // whileInView={{ opacity: 1, y: 0 }}
        // // variants={projectsCardVariants}
        // viewport={{ once: true, amount: 1 }}
        className="project-card"
        // ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
      >
        <a href="https://nagagu.github.io/TodoList/" target="_blank">
          <img src={todoAppCapture} alt="Todo List Capture"></img>
          {/* <img src={todoAppCapture} alt="Todo List Capture" /> */}
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
      </motion.div>

      <motion.div
        // ref={ref}
        // animate={controls}
        // whileInView={{ opacity: 1, y: 0 }}
        // // variants={projectsCardVariants}
        // viewport={{ once: true, amount: 1 }}
        // transition={{
        //   duration: 1,
        // }}
        className="project-card"
        // ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
      >
        <a
          href="https://github.com/Nagagu/TodoListServer/"
          className=""
          target="_blank"
        >
          <img
            className="wow animate__animated animate__fadeInRight"
            src={swaggerCapture}
            alt="Todo List Server Capture"
          />
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
      </motion.div>
      <motion.div
        // ref={ref}
        // animate={controls}
        // initial="hidden"
        // variants={projectsCardVariants}
        // transition={{
        //   duration: 1,
        // }}
        className="project-card"
        // ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
      >
        <a href="https://nagagu.github.io/portfolio/" className="">
          <img
            className="wow animate__animated animate__fadeInRight"
            src={portfolioCapture}
            alt="portfolio Capture"
            target="_blank"
          />
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
      </motion.div>
      <motion.div
        className="project-card"
        // ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
      >
        <a
          href="https://nagagu.github.io/TheNewStore/"
          className=""
          target="_blank"
        >
          <img
            className="wow animate__animated animate__fadeInRight"
            src={thenewstoreCapture}
            alt="the new store Capture"
          />
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
      </motion.div>
      <div className="project-card">
        <a
          href="https://nagagu.github.io/BattleShipGame/"
          className=""
          target="_blank"
        >
          <img
            className="animate__animated animate__fadeInRight"
            src={battleshipCapture}
            alt="battleship Capture"
          />
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
            <img
              className="animate__animated animate__fadeInRight"
              src={catQuizCapture}
              alt="cat Quiz Capture"
            />
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
          <img
            className="animate__animated animate__fadeInRight"
            src={creandovinculos}
            alt="creando vinculos web Capture"
          />
        </a>

        <h3>Creando Vínculos Wordpress</h3>
        <p>A Wordpress created with care for a professional psychotherapist</p>
        <a
          href="https://creandovinculos.com/"
          className="btn-visit"
          target="_blank"
        >
          Visit site
        </a>
      </div>
      <div className="project-card">
        <img
          className="animate__animated animate__fadeInRight"
          src={rubenCapture}
          alt="Ruben is my teacher web Capture"
        />
        <h3>Ruben is my teacher</h3>
        <p>A Spanish classes wordpress for a teacher (currently inactive) </p>
      </div>
    </div>
  );
};
