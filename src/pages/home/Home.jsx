import React from "react";
import Header from "../../components/header/Header";
import Hero from "../../components/hero/Hero";
import Room from "../../components/room/Room";
import Service from "../../components/service/Service";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Room />
      <Service />
    </div>
  );
};

export default Home;
