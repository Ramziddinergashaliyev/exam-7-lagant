import React from "react";
import img from "../../assets/icons/bars.svg";
import people from "../../assets/icons/img.jfif";
import "./adminHeader.scss";

function AdminHeader({ setClose }) {
  return (
    <div className="products__top">
      <img onClick={() => setClose((p) => !p)} src={img} alt="" />
      <div className="products__top__right">
        <p className="products__top__title">John doe</p>
        <img src={people} alt="" />
      </div>
    </div>
  );
}

export default AdminHeader;
