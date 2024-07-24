import React from "react";
import img from "../../assets/icon/footer.png";
import { FaInstagram } from "react-icons/fa";
import { FiFacebook, FiYoutube } from "react-icons/fi";

import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__row container">
        <div className="footer__top">
          <div className="footer__top__logo">
            <img src={img} alt="" />
            <p>Gift & Decoration Store</p>
          </div>
          <ul className="footer__top__link">
            <li className="footer__top__item">Home</li>
            <li className="footer__top__item">Shop</li>
            <li className="footer__top__item">Product</li>
            <li className="footer__top__item">Blog</li>
            <li className="footer__top__item">Contact Us</li>
          </ul>
        </div>
        <div className="footer__bottom">
          <div className="footer__bottom__info">
            <p className="footer__bottom__title">
              Copyright © 2023 3legant. All rights reserved
            </p>
            <p className="footer__bottom__title">Privacy Policy</p>
            <p className="footer__bottom__title">Terms of Use</p>
          </div>
          <div className="footer__bottom__icon">
            <FaInstagram />
            <FiFacebook />
            <FiYoutube />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
