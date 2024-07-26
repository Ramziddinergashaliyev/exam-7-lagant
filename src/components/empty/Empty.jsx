import React from "react";
import img from "../../assets/images/empty.png";

import "./empty.scss";

const Empty = () => {
  return (
    <div className="empty">
      <img src={img} alt="" />
    </div>
  );
};

export default Empty;
