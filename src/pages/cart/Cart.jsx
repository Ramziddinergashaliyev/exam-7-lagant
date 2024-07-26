import React from "react";
import { Outlet } from "react-router-dom";
import CartHeader from "../../components/cart-header/CartHeader";

const Cart = () => {
  return (
    <div>
      <CartHeader />
      <Outlet />
    </div>
  );
};

export default Cart;
