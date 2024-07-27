import React from "react";
import { Outlet } from "react-router-dom";
import CartHeader from "../../components/cart-header/CartHeader";
import { useSelector } from "react-redux";
import Empty from "../../components/empty/Empty";

const Cart = () => {
  const card = useSelector((state) => state.cart.value);
  return (
    <div>
      {card.length > 0 ? (
        <>
          <CartHeader />
          <Outlet />
        </>
      ) : (
        <Empty />
      )}
    </div>
  );
};

export default Cart;
