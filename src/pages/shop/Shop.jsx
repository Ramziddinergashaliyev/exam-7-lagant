import React, { useEffect } from "react";
import "./shop.scss";
import ProductWrapper from "../../components/productWrapper/ProductWrapper.jsx";
import News from "../../components/news/News.jsx";

const Shop = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <>
      <div className="shop container">
        <div className="shop__top">
          <div className="shop__top__info">
            <h3 className="shop__top__title">Shop Page</h3>
            <p className="shop__top__text">
              Let’s design the place you always imagined.
            </p>
          </div>
        </div>
      </div>
      <div className="shop__cards">
        <ProductWrapper />
      </div>
      <News />
    </>
  );
};

export default Shop;
