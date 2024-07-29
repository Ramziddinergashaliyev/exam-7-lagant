import React from "react";
import img from "../../assets/images/heart.webp";

import "./empty.scss";
import { NavLink } from "react-router-dom";

const Empty = () => {
  return (
    <div className="empty">
      <p>No favorites found</p>
      <img src={img} alt="" />
      <NavLink to={"/"}>
        <button>Go Home</button>
      </NavLink>
    </div>
  );
};

export default Empty;
