import React, { Fragment } from "react";
import Header from "../../components/header/Header";
import Hero from "../../components/hero/Hero";
import Room from "../../components/room/Room";
import Service from "../../components/service/Service";
import Sale from "../../components/sale/Sale";
import Article from "../../components/article/Article";
import News from "../../components/news/News";
import ProductWrapper from "../../components/productWrapper/ProductWrapper";

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <Room />
      <ProductWrapper />
      <Service />
      <Sale />
      <Article limit={4} />
      <News />
    </Fragment>
  );
};

export default Home;
