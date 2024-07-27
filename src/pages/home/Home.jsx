import React, { Fragment } from "react";
import Header from "../../components/header/Header";
import Hero from "../../components/hero/Hero";
import Room from "../../components/room/Room";
import Service from "../../components/service/Service";
import Sale from "../../components/sale/Sale";
import Article from "../../components/article/Article";
import News from "../../components/news/News";
import ProductWrapper from "../../components/productWrapper/ProductWrapper";
import { useGetProductsQuery } from "../../context/api/productApi";

const Home = () => {
  const { data } = useGetProductsQuery({ limit: 3, page: 1 });
  return (
    <Fragment>
      <Hero />
      <Room />
      <ProductWrapper />
      <Service />
      <Sale />
      <Article data={data} />
      <News />
    </Fragment>
  );
};

export default Home;
