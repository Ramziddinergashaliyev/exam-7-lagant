import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import img from "../../assets/icon/Logo.png";
import { FiSearch } from "react-icons/fi";
import { FaRegCircleUser } from "react-icons/fa6";
import { LuShoppingBag, LuTicket } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";

import "./header.scss";
import Menu from "../menu/Menu";
import { useSelector } from "react-redux";

const Header = () => {
  const [show, setShow] = useState(false);
  const wishlistData = useSelector((state) => state.wishlist.value);
  const cartData = useSelector((state) => state.cart.value);

  let { pathname } = useLocation();
  if (pathname.includes("admin")) {
    return <></>;
  }

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
          {show ? (
            <>
              <Menu setShow={setShow} />{" "}
              <div
                onClick={() => setShow(false)}
                className="header__nav__overlay"
              ></div>
            </>
          ) : (
            <></>
          )}
          <div className="header__nav__logo">
            <button onClick={() => setShow(true)}>
              <RxHamburgerMenu />
            </button>
            <Link to={"/"}>
              <img src={img} alt="" />
            </Link>
          </div>
          <ul className="header__nav__list">
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
            <FiSearch />
            <Link to={"/admin"}>
              <FaRegCircleUser />
            </Link>
            <Link className="header__nav__icons-pos" to={"/cart"}>
              <sup>{cartData.length}</sup>
              <LuShoppingBag />
            </Link>
            <Link className="header__nav__icons-pos" to={"/wishlist"}>
              <sup>{wishlistData.length}</sup>
              <FaRegHeart />
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
