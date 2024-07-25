import React from "react";
import "./shop.scss";
import ProductWrapper from "../../components/productWrapper/ProductWrapper.jsx";
import News from "../../components/news/News.jsx";

const Shop = () => {
  return (
    <div className="shop">
      <div className="shop__top container">
        <div className="shop__top__info">
          <h3 className="shop__top__title">Shop Page</h3>
          <p className="shop__top__text">
            Let’s design the place you always imagined.
          </p>
        </div>
      </div>
      <div className="shop__cards container">
        <ProductWrapper />
      </div>
      <News />
    </div>
  );
};

export default Shop;
