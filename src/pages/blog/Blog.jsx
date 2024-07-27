import React, { useEffect, useState } from "react";
import "./blog.scss";
import Article from "../../components/article/Article";
import News from "../../components/news/News";
import { useGetCategoryQuery } from "../../context/api/categoryApi";
import { Value } from "sass";
import { useGetProductsQuery } from "../../context/api/productApi";

const Blog = () => {
  const [category, setCategory] = useState();
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const { data } = useGetCategoryQuery({
    category: category,
  });

  const { data: product } = useGetProductsQuery({
    category: category,
    limit: 9,
    page: 1,
  });

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
        <div className="blog__category container">
          <data
            className="blog__category-item"
            onClick={() => setCategory("")}
            value={""}
          >
            All
          </data>
          {data?.map((el) => (
            <data
              className="blog__category-item"
              onClick={(e) => setCategory(el.title)}
              value={el?.title}
            >
              {el?.title}
            </data>
          ))}
        </div>
        <Article data={product} limit={10} />
        <button className="blog__btn">Show more</button>
      </div>
      <News />
    </>
  );
};

export default Blog;
