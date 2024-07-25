import React from "react";
import { useGetProductsQuery } from "../../context/api/productApi";
import { GoArrowRight } from "react-icons/go";
import "./product.scss";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

const Product = () => {
  const { data } = useGetProductsQuery();
  console.log(data);

  const productData = data?.slice(0, 8)?.map((product) => (
    <div key={product?.id} className="product__card">
      <div className="product__card__img">
        <div className="product__card__img__btn">
          <button className="product__card__img__new">new</button>
          <button className="product__card__img__sale">-50%</button>
        </div>
        <div className="product__card__img__heart">
          <button>
            <AiOutlineHeart />
          </button>
        </div>
        <Link to={`/single/${product?.id}`}>
          <img src={product?.images[0]} alt="" />
        </Link>
      </div>
      <div className="product__card__info">
        <p className="product__card__info__title">{product?.title}</p>
        <p className="product__card__info__text">{product?.price}$</p>
      </div>
    </div>
  ));

  return (
    <div className="product container">
      <div className="product__top">
        <h3 className="product__top__title">New Arrivals</h3>
        <p className="product__top__text">
          More Products
          <GoArrowRight />
        </p>
      </div>

      <div className="product__cards">{productData}</div>
    </div>
  );
};

export default Product;
