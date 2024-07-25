import React, { useRef, useState } from "react";
import img from "../../assets/images/hero.png";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

// import { Navigation } from "swiper/modules";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "./hero.scss";

const Hero = () => {
  return (
    <div className="hero container">
      <Swiper
        loop={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="hero__img"></SwiperSlide>
        <SwiperSlide className="hero__img"></SwiperSlide>
        <SwiperSlide className="hero__img"></SwiperSlide>
      </Swiper>
      <div className="hero__info">
        <h2 className="hero__info__title">
          Simply Unique <span>/</span> Simply Better.
        </h2>
        <p className="hero__info__text">
          <span>3legant</span> is a gift & decorations store based in HCMC,
          Vietnam. Est since 2019.{" "}
        </p>
      </div>
    </div>
  );
};

export default Hero;
