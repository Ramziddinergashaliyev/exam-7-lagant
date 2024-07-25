import React, { useState } from "react";
import { Link } from "react-router-dom";
import img from "../../assets/icon/Logo.png";
import { FiSearch } from "react-icons/fi";
import { FaRegCircleUser } from "react-icons/fa6";
import { LuShoppingBag, LuTicket } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

import "./header.scss";

const Header = () => {
  const [show, setShow] = useState(false);
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
            <button onClick={() => setShow(true)}>
              <RxHamburgerMenu />
            </button>
            <Link to={"/"}>
              <img src={img} alt="" />
            </Link>
          </div>
          <ul
            className={`header__nav__list ${show ? "header__nav__show" : ""}`}
          >
            <li onClick={() => setShow(false)} className="header__nav__close">
              <IoMdClose />
            </li>
            <li className="header__nav__item">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="header__nav__item">
              <Link to={"/shop"}>Shop</Link>
            </li>
            <li className="header__nav__item">
              <Link to={"/blog"}>Blog</Link>
            </li>
            <li className="header__nav__item">
              <Link to={"/contact"}>Contact Us</Link>
            </li>
          </ul>
          <div className="header__nav__icons">
            {/* <div className="header__nav__icons-search">
              <input type="text" />
            </div> */}
            <FiSearch />
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
