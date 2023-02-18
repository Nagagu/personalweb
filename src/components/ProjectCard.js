import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const ProjectCard = ({ data }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();
  const boxVariant = {
    visible: { y: 30, opacity: 1, scale: 1, transition: { duration: 1 } },
    hidden: { y: 200 },
    hover: {
      scale: 2,
    },
  };

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
    // else {
    //   control.start("hidden");
    // }
  }, [control, inView]);

  return (
    <motion.div
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
      className="project-card"
    >
      <div className="cardContainer">
        <div className="tagsContainer">
          {data.tags.map((o) => (
            <div className="tag">
              <span>{o}</span>
            </div>
          ))}
        </div>

        <div>
          {" "}
          <a href={data.urlWeb} target="_blank" rel="noreferrer">
            <motion.img
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.5 },
              }}
              src={data.img}
              alt={data.alt}
            />
          </a>
        </div>
        <h3 className="projectTitle">{data.title}</h3>
        <div className="projectInfo">
          {" "}
          <p>{data.description}</p>
          <a
            href={data.urlGitHub}
            className="btn-visit"
            target="_blank"
            rel="noreferrer"
          >
            Github <i class="fab fa-github fa-lg"></i>
          </a>
          <a
            href={data.urlWeb}
            className="btn-visit"
            target="_blank"
            rel="noreferrer"
          >
            Visit site
          </a>
        </div>
      </div>
    </motion.div>
  );
};
