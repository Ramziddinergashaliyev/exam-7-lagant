import React, { useEffect } from "react";
import "./order.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteAllCart,
  removeFromCart,
} from "../../../context/slices/cartSlice";
import { useNavigate } from "react-router-dom";

const Order = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const card = useSelector((state) => state.cart.value);
  console.log(card);

  const cardImg = card?.map((el) => (
    <div key={el.id} className="order__card">
      <sub className="order__img__count">{el?.quantity}</sub>
      <img className="order__img" src={el?.images[0]} alt="" />
    </div>
  ));

  const handleOrder = () => {
    dispatch(deleteAllCart());
    navigate("/");
  };

  useEffect(() => {
    return () => {
      handleOrder();
    };
  }, []);

  return (
    <div className="order">
      <div className="order__info">
        <p className="order__info__desc">Thank you! 🎉</p>
        <h3 className="order__info__title">Your order has been received</h3>
      </div>
      <div className="order__imgs">{cardImg}</div>
      <ul className="order__list">
        <li className="order__item">
          <p>Order code: </p>
          <span>#0123_45678</span>
        </li>
        <li className="order__item">
          <p>Date: </p>
          <span>October 19, 2023</span>{" "}
        </li>
        <li className="order__item">
          <p>Total: </p>
          <span>$12321</span>{" "}
        </li>
        <li className="order__item">
          <p> Payment method:</p> <span>Credit Card</span>
        </li>
        <button onClick={handleOrder}>Exit</button>
      </ul>
    </div>
  );
};

export default Order;
