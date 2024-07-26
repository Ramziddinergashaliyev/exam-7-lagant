import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Product from "../../components/product/Product";
import Empty from "../../components/empty/Empty";

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist.value);

  console.log(wishlist);

  return (
    <>
      {wishlist.length > 0 ? (
        <>
          <div className="product__cards container">
            {wishlist?.map((el) => (
              <Product data={el} />
            ))}
          </div>
        </>
      ) : (
        <Empty />
      )}
    </>
  );
};

export default Wishlist;
