import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";

import "./news.scss";

const News = () => {
  return (
    <div className="news">
      <div className="news__info container">
        <h2 className="news__title">Join Our Newsletter</h2>
        <p className="news__desc">
          Sign up for deals, new products and promotions
        </p>
        <div className="news__info__sign">
          <MdOutlineMailOutline />
          <input type="text" />
          <p>Signup</p>
        </div>
      </div>
    </div>
  );
};

export default News;
