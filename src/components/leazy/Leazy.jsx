import React from "react";
import img from "../../assets/images/lazy.jpg";

import "./leazy.scss";

const Leazy = () => {
  return (
    <div className="leazy__img">
      <img src={img} alt="" />
    </div>
  );
};

export default Leazy;
