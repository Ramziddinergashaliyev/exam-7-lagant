import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./sidebar.scss";
import img1 from "../../assets/icons/Logo.svg";
import img2 from "../../assets/icons/img-1.svg";
import img3 from "../../assets/icons/img-2.svg";
import img4 from "../../assets/icons/img-3.svg";
import img5 from "../../assets/icons/img-4.svg";
import img6 from "../../assets/icons/img-5.svg";
import img7 from "../../assets/icons/Vector.svg";
import out from "../../assets/icons/out.svg";
import { FaArrowLeft } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { logout } from "../../context/slices/authSlice";

function Sidebar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };
  return (
    <section className="sidebar">
      <div>
        <Link to={"/"} className="sidebar__top">
          <FaArrowLeft />
          <h1>Admin Dashboard</h1>
        </Link>
        <ul className="sidebar__item">
          <li className="sidebar__list">
            <NavLink to={"createProduct"} className={"sidebar__left__text"}>
              <img src={img2} alt="" />
              create products
            </NavLink>
          </li>
          <li className="sidebar__list">
            <NavLink to={"manageProduct"} className={"sidebar__left__text"}>
              <img src={img3} alt="" />
              manage products
            </NavLink>
          </li>
          <li className="sidebar__list">
            <NavLink to={"createCategory"} className={"sidebar__left__text"}>
              <img src={img4} alt="" />
              create category
            </NavLink>
          </li>
          <li className="sidebar__list">
            <NavLink to={"manageCategory"} className={"sidebar__left__text"}>
              <img src={img5} alt="" />
              manage category
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="sidebar__btns">
        <div className="sidebar__btns__title" onClick={handleLogout}>
          <img src={out} alt="" />
          <p>Login out</p>
        </div>
      </div>
    </section>
  );
}

export default Sidebar;
