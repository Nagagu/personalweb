import React from "react";
import personalphoto from "../personal-photo2.png";

export const About = () => {
  return (
    <div className="section about">
      <div className="section-title">About :</div>
      <img src={personalphoto} alt="personal photo"></img>
      <p>
        I am a reinvented environmentalist who decided to learn programming to
        aspire to a more stable work life. In the world of programming I
        discovered that I could unleash my creativity and that is what motivates
        me the most today. After my last job as a programmer focused more on the
        back, I decided to dedicate some time to my training in front-end since
        it is what I really love and the part that I had the weakest. As the
        last thing I had to work on my last job was React js, I decided to
        continue deepening my knowledge of this framework and make some examples
        with what I learned. I have also worked as a freelancer on time in the
        realization of WordPress
      </p>
    </div>
  );
};
