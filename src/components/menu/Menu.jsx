import React from "react";
import img from "../../assets/icon/Logo.png";
import { MdOutlineClose } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";

import "./menu.scss";

const Menu = ({ setShow }) => {
  return (
    <div className="menu">
      <div className="menu__top">
        <div className="menu__top__logo">
          <img src={img} alt="" />
          <button onClick={() => setShow(false)}>
            <MdOutlineClose />
          </button>
        </div>
        <div className="menu__top__form">
          <IoSearchOutline />
          <input placeholder="search..." type="text" />
        </div>
        <ul className="menu__top__list">
          <li className="menu__top__item">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="menu__top__item">
            <Link className="menu__top__item-link" to={"/shop"}>
              Shop
              <FaAngleDown />
            </Link>
          </li>
          <li className="menu__top__item">
            <Link className="menu__top__item-link" to={"/blog"}>
              Blog
              <FaAngleDown />
            </Link>
          </li>
          <li className="menu__top__item">
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>
      <div className="menu__bottom">
        <div className="menu__bottom__item">
          <Link className="menu__bottom__link">
            Cart
            <FiShoppingBag />
          </Link>
          <Link className="menu__bottom__link">
            Wishlist <FaRegHeart />
          </Link>
        </div>
        <div className="menu__bottom__sign">
          <button>Sign In</button>
        </div>
        <div className="menu__bottom__icons">
          <FaInstagram />
          <FaFacebookF />
          <FiYoutube />
        </div>
      </div>
    </div>
  );
};

export default Menu;
