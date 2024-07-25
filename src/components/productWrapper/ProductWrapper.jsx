import React from "react";
import Product from "../product/Product";
import { useGetProductsQuery } from "../../context/api/productApi";
import { GoArrowRight } from "react-icons/go";
import "../product/product.scss";

const ProductWrapper = ({ isBool }) => {
  const { data } = useGetProductsQuery();
  return (
    <div className="product container">
      <div className="product__top">
        <h3 className="product__top__title">New Arrivals</h3>
        <p className="product__top__text">
          More Products
          <GoArrowRight />
        </p>
      </div>

      <div className="product__cards">
        {data?.map((el) => (
          <Product isBool={isBool} data={el} key={el.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductWrapper;
