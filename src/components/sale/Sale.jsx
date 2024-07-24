import React from "react";
import "./sale.scss";
import img from "../../assets/images/rasm.jpg";
import { FaArrowRight } from "react-icons/fa6";

const Sale = () => {
  return (
    <div className="sale">
      <div className="sale__left">
        <img src={img} alt="" />
      </div>
      <div className="sale__right">
        <p className="sale__right__desc">SALE UP TO 35% OFF</p>
        <h3 className="sale__right__title">HUNDREDS of New lower prices!</h3>
        <p className="sale__right__text">
          It’s more affordable than ever to give every room in your home a
          stylish makeover
        </p>
        <p className="sale__right__shop">
          Shop Now
          <FaArrowRight />
        </p>
      </div>
    </div>
  );
};

export default Sale;
