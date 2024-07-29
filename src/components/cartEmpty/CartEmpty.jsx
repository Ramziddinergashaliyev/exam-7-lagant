import React from "react";
import img from "../../assets/images/cart.webp";
import { NavLink } from "react-router-dom";

import "./cartEmpty.scss";

const CartEmpty = () => {
  return (
    <div className="cartEmpty container">
      <p>No favorites found</p>
      <img src={img} alt="" />
      <NavLink to={"/"}>
        <button>Go Home</button>
      </NavLink>
    </div>
  );
};

export default CartEmpty;
