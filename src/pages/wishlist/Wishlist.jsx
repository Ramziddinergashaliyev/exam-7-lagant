import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Product from "../../components/product/Product";

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist.value);

  console.log(wishlist);

  return (
    <div className="product__cards container">
      {wishlist?.map((el) => (
        <Product data={el} />
      ))}
    </div>
  );
};

export default Wishlist;
