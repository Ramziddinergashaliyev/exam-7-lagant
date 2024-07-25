import React from "react";
import Header from "../../components/header/Header";
import Hero from "../../components/hero/Hero";
import Room from "../../components/room/Room";
import Service from "../../components/service/Service";
import Sale from "../../components/sale/Sale";
import Article from "../../components/article/Article";
import News from "../../components/news/News";
import Product from "../../components/product/Product";

const Home = () => {
  return (
    <div>
      <Hero />
      <Room />
      <Product />
      <Service />
      <Sale />
      <Article limit={4} />
      <News />
    </div>
  );
};

export default Home;
