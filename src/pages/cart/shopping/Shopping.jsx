import React, { useEffect, useState } from "react";
import "./shopping.scss";
import { useSelector, useDispatch } from "react-redux";
import { IoClose } from "react-icons/io5";
import {
  decrementCart,
  removeFromCart,
  deleteAllCart,
  incrementCart,
} from "../../../context/slices/cartSlice";

function Shopping() {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart.value);
  const [payme, setPayme] = useState(false);
  const [cuopon, setCuopon] = useState(0);
  const [value, setValue] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    let total = cartData.reduce((sum, el) => sum + el.quantity * el.price, 0);
    setTotalPrice(total);
  }, [cartData]);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  console.log(totalPrice);

  return (
    <div className="cart container">
      <div className="cart__data">
        <div>
          <div className="cart__top__row">
            <h4>PRODUCT</h4>
            <div className="cart__top__row__right">
              <h4>PRICE</h4>
              <h4>QTY</h4>
              <h4>UNIT PRICE</h4>
            </div>
          </div>
          <div className="cart__bottom">
            {cartData?.map((el) => (
              <div className="cart__bottom__row" key={el.id}>
                <div className="cart__bottom__row-product">
                  <button onClick={() => dispatch(removeFromCart(el?.id))}>
                    <IoClose />
                  </button>
                  <div className="cart__bottom__row-product__img">
                    <img src={el?.images[0]} alt="" />
                  </div>
                  <p className="cart__bottom__row-product-title">{el?.title}</p>
                </div>
                <div className="cart__bottom__row__left">
                  <p className="cart__bottom__row-info">{el?.price}</p>
                  <div className="cart__bottom__row-btns">
                    <button onClick={() => dispatch(incrementCart(el))}>
                      +
                    </button>
                    <button>{el.quantity}</button>
                    <button
                      disabled={el.quantity <= 0}
                      onClick={() => dispatch(decrementCart(el))}
                    >
                      -
                    </button>
                  </div>
                  <p className="cart__bottom__row-info">
                    {(el?.price * el.quantity).toFixed(1)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="cart__result">
          <div className="cart__result__right">
            <div className="cart__result__right-cart">
              <p>Subtotal</p>
              <span>{totalPrice.toFixed(2)}</span>
            </div>
            <div className="cart__result__right-cart">
              <p>Shipping fee</p>
              <span>{(totalPrice * 0.02).toFixed(2)}</span>
            </div>
            <div className="cart__result__right-cart">
              <p>Coupon</p>
              <span>{cuopon}</span>
            </div>
            <div className="cart__result__right-total">
              <h2>TOTAL</h2>
              <h2>$200</h2>
            </div>
            <button>Check out</button>
          </div>
        </div>
      </div>
      <div className="cart__form">
        <h3>Have a coupon?</h3>
        <p>Add your code for an instant cart discount</p>
        <form action="">
          <input
            placeholder="Voucher code"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="text"
          />
          <button>Apply</button>
        </form>
      </div>
    </div>
  );
}

export default Shopping;
