import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./cartHeader.scss";

const CartHeader = () => {
  const pathnames = ["shopping", "checkout", "order"];
  let { pathname } = useLocation();
  pathname = pathname.split("/")[2];
  let index = pathnames.findIndex((text) => text === pathname);

  let completed = { color: "green", borderBottom: "2px solid green" };
  let disabled = { color: "#aaa", borderBottom: "2px solid transparent" };
  let active = { color: "#000", borderBottom: "2px solid #000" };

  return (
    <div className="cartHeader container">
      <ul className="cartHeader__list">
        <li style={index > 0 ? completed : index === 0 ? active : disabled}>
          Shopping cart
        </li>
        <li style={index > 1 ? completed : index === 1 ? active : disabled}>
          Checkout details
        </li>
        <li style={index > 2 ? completed : index === 2 ? active : disabled}>
          Order complete
        </li>
      </ul>
    </div>
  );
};

export default CartHeader;
