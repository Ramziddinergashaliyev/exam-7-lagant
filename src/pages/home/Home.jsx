import React from "react";
import Header from "../../components/header/Header";
import Hero from "../../components/hero/Hero";
import Room from "../../components/room/Room";
import Service from "../../components/service/Service";
import Sale from "../../components/sale/Sale";
import Article from "../../components/article/Article";
import News from "../../components/news/News";

const Home = () => {
  return (
    <div>
      <Hero />
      <Room />
      <Service />
      <Sale />
      <Article />
      <News />
    </div>
  );
};

export default Home;
