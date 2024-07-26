import React from "react";
import "./chekout.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementCart,
  incrementCart,
} from "../../../context/slices/cartSlice";

const Chekout = () => {
  const cardData = useSelector((state) => state.cart.value);
  console.log(cardData);

  const dispatch = useDispatch();

  return (
    <div className="chekout container">
      <div className="chekout__left">
        <div className="chekout__left__top">
          <h2>Contact Infomation</h2>
          <form className="chekout__left__top-form" action="">
            <div className="chekout__left__top__info">
              <label htmlFor="">
                FIRST NAME
                <input placeholder="First Name" type="text" />
              </label>
              <label htmlFor="">
                LAST NAME
                <input placeholder="Last Name" type="text" />
              </label>
            </div>
            <label htmlFor="">
              Phone Number
              <input placeholder="Phone Number" type="text" />
            </label>
            <label htmlFor="">
              Email address
              <input placeholder="Email address" type="text" />
            </label>
          </form>
        </div>
        <div className="chekout__left__middle">
          <form className="chekout__left__middle-form" action="">
            <label htmlFor="">
              Street Address *
              <input placeholder="Street Address *" type="text" />
            </label>
            <label htmlFor="">
              Country *
              <select name="" id="">
                <option value="Country">Country</option>
              </select>
            </label>
            <label htmlFor="">
              Town / City *
              <input placeholder="Town / City" type="text" />
            </label>
            <div className="chekout__left__middle__info">
              <label htmlFor="">
                State
                <input placeholder="State" type="text" />
              </label>
              <label htmlFor="">
                Zip Code
                <input placeholder="Zip Code" type="text" />
              </label>
            </div>
            <div className="chekout__left__middle__check">
              <input type="radio" />
              <p>Use a different billing address (optional)</p>
            </div>
          </form>
        </div>
        <div className="chekout__left__bottom">
          <h2>Payment method</h2>
          <form action="">
            <div className="chekout__left__bottom__check">
              <input type="radio" />
              <span>Pay by Card Credit</span>
            </div>
            <div className="chekout__left__bottom__check">
              <input type="radio" />
              <span>Paypal</span>
            </div>
            <label htmlFor="">
              Card Number
              <input type="text" />
            </label>
            <div className="chekout__left__bottom__info">
              <label htmlFor="">
                Expiration date
                <input placeholder="Expiration date" type="text" />
              </label>
              <label htmlFor="">
                CVC
                <input placeholder="CVC" type="text" />
              </label>
            </div>
          </form>
        </div>
        <button className="chekout__left__btn">Place Order</button>
      </div>
      <div className="chekout__right">
        {cardData?.map((el) => (
          <div className="chekout__right__card">
            <div className="chekout__right__card__left">
              <div className="chekout__right__card-img">
                <img src={el?.images[0]} alt="" />
              </div>
              <div className="chekout__right__card-info">
                <p>{el?.title}</p>
                <div className="chekout__right__card-info-btns">
                  <button onClick={() => dispatch(incrementCart(el))}>+</button>
                  <button>{el?.quantity}</button>
                  <button
                    disabled={el?.quantity === 0}
                    onClick={() => dispatch(decrementCart(el))}
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
            <div className="chekout__right__card__right">
              <p>{el?.price}</p>
            </div>
          </div>
        ))}
        <div className="chekout__right__bottom">
          <div className="chekout__right__bottom-form">
            <input type="text" />
            <button>Apply</button>
          </div>
          <div className="chekout__right__bottom-info">
            <div className="chekout__right__bottom-unit">
              <p>JenkateMW</p>
              <span>-$25.00</span>
            </div>
            <div className="chekout__right__bottom-unit">
              <p>Shipping</p>
              <span>Free</span>
            </div>
            <div className="chekout__right__bottom-unit">
              <p>Subtotal</p>
              <span>$99.00</span>
            </div>
            <div className="chekout__right__bottom-unit">
              <h2>Total</h2>
              <h2>$234.00</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chekout;
