import React, { useEffect, useState } from "react";
import "./chekout.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementCart,
  incrementCart,
} from "../../../context/slices/cartSlice";
import { Link, useNavigate } from "react-router-dom";
import { useGetValue } from "../../../hooks/useGetValue";
const initialState = {
  firstname: "",
  lastname: "",
  phone: "",
  email: "",
  address: "",
  country: "",
  town: "",
  state: "",
  code: "",
  paypal: "",
  cardNumber: "",
  date: "",
  cvc: "",
};

const BOT_TOKEN = "7389739361:AAEk_1zcmXzy2ez2Lodapjn005dHBUBWyk4";
const CHAT_ID = "-1001993696687";

const Checkout = () => {
  const dispatch = useDispatch();
  const [sum, setSum] = useState(0);
  const navigate = useNavigate();

  const { formData, setFormData, handleChange } = useGetValue(initialState);

  const cartData = useSelector((state) => state.cart.value);

  useEffect(() => {
    scroll(0, 0);
    const total = cartData.reduce((acc, el) => acc + el.price * el.quantity, 0);
    setSum(Math.ceil(total));
  }, [cartData]);

  const handleForm = (e) => {
    e.preventDefault();
    let text = "Buyurtma:%0A";
    text += `FirstName: <b>${formData.firstname}</b>%0A`;
    text += `LastName: <b>${formData.lastname}</b>%0A%0A`;
    text += `Email Address: <b>${formData.email}</b>%0A`;
    text += `Address Deliver: <b>${formData.address}</b>%0A`;
    text += `Telephone Number: <b>${formData.phone}</b>%0A%0A`;
    text += `Date: <b>${formData.date}</b>%0A%0A`;

    cartData.forEach((product) => {
      text += `<b>${product.title}</b> %0A`;
      text += `<b>${product.quantity}</b> ta %0A`;
      text += `<b>${product.price}</b> USD %0A%0A`;
    });

    text += `TOTAL: <b>${sum}</b>USD %0A`;

    let url = ` https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}&parse_mode=html`;
    console.log("ok");
    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
    setFormData(initialState);
    navigate("/cart/order");
  };

  return (
    <div className="chekout container">
      <form onSubmit={handleForm} className="chekout__left">
        <div className="chekout__left__top">
          <h2>Contact Infomation</h2>
          <div className="chekout__left__top-form" action="">
            <div className="chekout__left__top__info">
              <label htmlFor="">
                FIRST NAME
                <input
                  value={formData.firstname}
                  onChange={handleChange}
                  name="firstname"
                  required
                  placeholder="First Name"
                  type="text"
                />
              </label>
              <label htmlFor="">
                LAST NAME
                <input
                  value={formData.lastname}
                  onChange={handleChange}
                  name="lastname"
                  required
                  placeholder="Last Name"
                  type="text"
                />
              </label>
            </div>
            <label htmlFor="">
              Phone Number
              <input
                value={formData.phone}
                onChange={handleChange}
                name="phone"
                required
                placeholder="Phone Number"
                type="text"
              />
            </label>
            <label htmlFor="">
              Email address
              <input
                value={formData.email}
                onChange={handleChange}
                name="email"
                required
                placeholder="Email address"
                type="text"
              />
            </label>
          </div>
        </div>
        <div className="chekout__left__middle">
          <div className="chekout__left__middle-form" action="">
            <label htmlFor="">
              Street Address *
              <input
                value={formData.address}
                name="address"
                onChange={handleChange}
                placeholder="Street Address *"
                type="text"
              />
            </label>
            <label htmlFor="">
              Country *
              <select
                value={formData.country}
                onChange={handleChange}
                name="country"
                id=""
              >
                <option value="Country">Country</option>
              </select>
            </label>
            <label htmlFor="">
              Town / City *
              <input
                value={formData.town}
                onChange={handleChange}
                name="town"
                placeholder="Town / City"
                type="text"
              />
            </label>
            <div className="chekout__left__middle__info">
              <label htmlFor="">
                State
                <input
                  value={formData.state}
                  onChange={handleChange}
                  name="state"
                  placeholder="State"
                  type="text"
                />
              </label>
              <label htmlFor="">
                Zip Code
                <input
                  value={formData.code}
                  onChange={handleChange}
                  name="code"
                  placeholder="Zip Code"
                  type="text"
                />
              </label>
            </div>
            <div className="chekout__left__middle__check">
              <input type="radio" />
              <p>Use a different billing address (optional)</p>
            </div>
          </div>
        </div>
        <div className="chekout__left__bottom">
          <h2>Payment method</h2>
          <div>
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
                <input
                  value={formData.date}
                  onChange={handleChange}
                  name="date"
                  placeholder="Expiration date"
                  type="text"
                />
              </label>
              <label htmlFor="">
                CVC
                <input
                  value={formData.cvc}
                  onChange={handleChange}
                  name="cvc"
                  placeholder="CVC"
                  type="text"
                />
              </label>
            </div>
          </div>
        </div>
        <button className="chekout__left__btn">Place Order</button>
      </form>
      <div className="chekout__right">
        {cartData?.map((el) => (
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

export default Checkout;
