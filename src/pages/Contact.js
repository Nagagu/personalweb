import React from "react";

export const Contact = () => {
  return (
    <div className="section contact">
      <div className="section-title">Contact :</div>
      <div className="contactText">
        <p>
          I am looking for a creative project that allows me to express my ideas
          that poses new challenges every day and that makes me keep learning. I
          have a preference for beautiful and original projects and my goal in
          my work is to get to develop products from beginning to end, to be
          part of the decisions at the creative, artistic and marketing level,
          as well as the code architecture.
        </p>

        <p>If you are interested you can contact me here:</p>
      </div>
      <h3>n.garridoagudo@gmail.com</h3>
      <div className="social-links">
        <a href="https://github.com/Nagagu" target="_blank" rel="noreferrer">
          <i class="fab fa-github fa-3x"></i>
        </a>
        <a
          href="https://linkedin.com/in/natalia-garrido-agudo-396a2a7b"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fab fa-linkedin fa-3x"></i>
        </a>
      </div>
      <div>
        <p>You can download mi CV if you wish more information</p>{" "}
      </div>
      <a
        href={process.env.PUBLIC_URL + "/Natalia_Garrido22.pdf"}
        download="Natalia Curriculum Vitae"
        className="btn-visit"
        id="cv"
      >
        <i class="fas fa-cloud-download-alt"></i> Download CV
      </a>
    </div>
  );
};
