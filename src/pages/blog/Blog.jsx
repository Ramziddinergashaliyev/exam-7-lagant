import React from "react";
import "./blog.scss";
import Article from "../../components/article/Article";
import News from "../../components/news/News";

const Blog = () => {
  return (
    <>
      <div className="blog container">
        <div className="blog__top">
          <div className="blog__top__info">
            <h1 className="blog__top__title">Our Blog</h1>
            <p className="blog__top__text">Home ideas and design inspiration</p>
          </div>
        </div>
      </div>

      <div>
        <Article limit={10} />
        <button className="blog__btn">Show more</button>
      </div>
      <News />
    </>
  );
};

export default Blog;
