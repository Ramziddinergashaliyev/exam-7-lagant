import React from "react";

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
          <input type="text" />
        </div>
      </div>
    </div>
  );
};

export default News;
