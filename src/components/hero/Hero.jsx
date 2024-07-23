import React from "react";
import img from "../../assets/images/hero.png";

import "./hero.scss";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero__img"></div>
      <div className="hero__info">
        <h2 className="hero__info__title">
          Simply Unique <span>/</span> Simply Better.
        </h2>
        <p className="hero__info__text">
          <span>3legant</span> is a gift & decorations store based in HCMC,
          Vietnam. Est since 2019.{" "}
        </p>
      </div>
    </div>
  );
};

export default Hero;
