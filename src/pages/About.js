import React from "react";
import personalphoto from "../assets/personal-photo2.png";

export const About = () => {
  return (
    <div className="section about">
      <div className="section-title">About :</div>
      <h1 class="animate__animated animate__fadeInRight">
        An animated element // SKILLS //
      </h1>
      <img src={personalphoto} alt="personal photo"></img>
      <p>
        I am a reinvented environmentalist who decided to learn programming to
        aspire to a more stable work life. In the world of programming I
        discovered that I could unleash my creativity (and my fixaxion for
        fixing broken things :P) and that is what motivates me the most today.
        I'm in love working with React and also being able to hold my own into
        the back-end code which is not a very common role you might find in a
        team, in that way this is one of my strenght of my profile.
      </p>
      <p>
        I'm a bit tired of working on boring projects that are monotonous or
        take years. I prefer to be part of companies that develop short-term
        projects with attention to detail and aesthetics, since it is the part
        of programming that I like the most.
      </p>
      <p>
        {" "}
        My intention is to make of this web the place where I would drag all my
        programming knowledge along the time, so it would be a dynamic place
        where you can check my evolution{" "}
      </p>
    </div>
  );
};
