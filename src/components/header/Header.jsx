import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/icon/Logo.png";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
import { LuShoppingBag, LuTicket } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa6";

import "./header.scss";

const Header = () => {
  return (
    <>
      <div className="header__top">
        <div className="header__top__info">
          <p className="header__top__info__title">
            <LuTicket />
            30% off storewide — Limited time!{" "}
          </p>
          <p className="header__top__info__link">
            Shop Now <FaArrowRight />{" "}
          </p>
        </div>
      </div>
      <header className="header">
        <nav className="header__nav container">
          <div className="header__nav__logo">
            <Link>
              <img src={img} alt="" />
            </Link>
          </div>
          <ul className="header__nav__list">
            <li className="header__nav__item">
              <Link>Home</Link>
            </li>
            <li className="header__nav__item">
              <Link>Shop</Link>
            </li>
            <li className="header__nav__item">
              <Link>Blog</Link>
            </li>
            <li className="header__nav__item">
              <Link>Contact Us</Link>
            </li>
          </ul>
          <div className="header__nav__icons">
            <IoSearchOutline />
            <Link>
              <FaRegCircleUser />
            </Link>
            <Link>
              <LuShoppingBag />
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
