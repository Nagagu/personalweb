import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion/dist/framer-motion";
import { useInView } from "react-intersection-observer";

export const ProjectCard = ({ data }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();
  const boxVariant = {
    visible: { y: 30, opacity: 1, scale: 1, transition: { duration: 1 } },
    hidden: { y: 200 },
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
      <a href={data.urlWeb} className="" target="_blank">
        <img src={data.img} alt={data.alt} />
      </a>

      <h3>{data.title}</h3>
      <p>{data.description}</p>
      <a href={data.urlGitHub} className="btn-visit" target="_blank">
        Github <i class="fab fa-github fa-lg"></i>
      </a>
      <a href={data.urlWeb} className="btn-visit" target="_blank">
        Visit site
      </a>
    </motion.div>
  );
};
