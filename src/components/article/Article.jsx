import React from "react";
import { LuArrowRight } from "react-icons/lu";

import "./article.scss";

const Article = ({ data }) => {
  const articleData = data?.map((el) => (
    <div key={el?.id} className="article__card">
      <div className="article__card__img">
        <img src={el?.images[1]} alt="" />
      </div>
      <div className="article__card__info">
        <h3>{el?.title}</h3>
        <p>{el?.price}</p>
      </div>
    </div>
  ));

  return (
    <div className="article container">
      <div className="article__top">
        <h2 className="article__top__title">Articles</h2>
        <p className="article__top__link">
          More Articles
          <LuArrowRight />
        </p>
      </div>
      <div className="article__cards">{articleData}</div>
    </div>
  );
};

export default Article;
