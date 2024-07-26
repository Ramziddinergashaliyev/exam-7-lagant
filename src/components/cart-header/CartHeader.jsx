import React from "react";
import { NavLink } from "react-router-dom";
import "./cartHeader.scss";

const CartHeader = () => {
  return (
    <div className="cartHeader container">
      <ul className="cartHeader__list">
        <li className="cartHeader__item">
          <NavLink to={"shopping"}>Shopping cart</NavLink>
        </li>
        <li className="cartHeader__item">
          <NavLink to={"chekout"}>Checkout details</NavLink>
        </li>
        <li className="cartHeader__item">
          <NavLink to={"order"}>Order complete</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default CartHeader;
