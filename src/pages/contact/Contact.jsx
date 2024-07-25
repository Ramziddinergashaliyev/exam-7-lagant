import React from "react";
import "./contact.scss";
import img from "../../assets/images/rasm.jpg";
import { GoArrowRight } from "react-icons/go";
import { FaRegAddressCard } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import Map from "../../components/map/Map";
import Service from "../../components/service/Service.jsx";

const Contact = () => {
  return (
    <>
      <div className="contact container">
        <div className="contact__info">
          <h3 className="contact__info__title">
            We believe in sustainable decor. We’re passionate about life at
            home.
          </h3>
          <p className="contact__info__text">
            Our features timeless furniture, with natural fabrics, curved lines,
            plenty of mirrors and classic design, which can be incorporated into
            any decor project. The pieces enchant for their sobriety, to last
            for generations, faithful to the shapes of each period, with a touch
            of the present
          </p>
        </div>
        <div className="contact__about">
          <div className="contact__about__left">
            <img src={img} alt="" />
          </div>
          <div className="contact__about__right">
            <h2 className="contact__about__right-title">About Us</h2>
            <p className="contact__about__right-text">
              3legant is a gift & decorations store based in HCMC, Vietnam. Est
              since 2019. Our customer service is always prepared to support you
              24/7
            </p>
            <h2 className="contact__about__right__shop">
              Shop Now <GoArrowRight />
            </h2>
          </div>
        </div>

        <div className="contact__mobile">
          <h2 className="contact__mobile__title">Contact Us</h2>
          <div className="contact__mobile__cards">
            <div className="contact__mobile__card">
              <div className="contact__mobile__card__img">
                <FaRegAddressCard />
              </div>
              <p className="contact__mobile__card__title">Address</p>
              <h3 className="contact__mobile__card__text">
                234 Hai Trieu, Ho Chi Minh City, Viet Nam
              </h3>
            </div>
            <div className="contact__mobile__card">
              <div className="contact__mobile__card__img">
                <FaPhoneAlt />
              </div>
              <p className="contact__mobile__card__title">Contact Us</p>
              <h3 className="contact__mobile__card__text">+84 234 567 890</h3>
            </div>
            <div className="contact__mobile__card">
              <div className="contact__mobile__card__img">
                <MdOutlineEmail />
              </div>
              <p className="contact__mobile__card__title">Email</p>
              <h3 className="contact__mobile__card__text">hello@3legant.com</h3>
            </div>
          </div>
        </div>

        <Map />
      </div>
      <div className="contact__service">
        <Service />
      </div>
    </>
  );
};

export default Contact;
