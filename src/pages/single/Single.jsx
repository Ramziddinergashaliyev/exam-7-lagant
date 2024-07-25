import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../context/api/productApi";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { GoArrowRight } from "react-icons/go";

import "./single.scss";
import { CONTACT } from "../../static";
import News from "../../components/news/News";

const Single = () => {
  const { id } = useParams();
  const { data } = useGetProductByIdQuery(id);
  console.log(data);

  const [choose, setChoose] = useState(0);

  return (
    <>
      <div className="single container">
        <div className="single__cards">
          <div className="single__left">
            <div className="single__left__img">
              <img src={data?.images[choose]} alt="" />
            </div>
            <div className="single__left__img-cleane">
              {data?.images?.map((el, inx) => (
                <div
                  className={`single__left__img-cleane-imgs ${
                    choose === inx ? "single__left__img-cleane-active" : ""
                  }`}
                  onClick={() => setChoose(inx)}
                  key={inx}
                >
                  <img src={el} alt="" />
                </div>
              ))}
            </div>
          </div>
          <div className="single__right">
            <div className="single__right__star">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <span>11 Reviews</span>
            </div>
            <div className="single__right__info">
              <p className="single__right__title">{data?.title}</p>
              <h3 className="single__right__desc">{data?.description}</h3>
              <div className="single__right__price">
                <p className="single__right__price-title">${data?.price} </p>
                <p className="single__right__price-old">
                  $ {data?.price < data?.oldPrice ? data?.oldPrice : <></>}
                </p>
              </div>
            </div>
            <div className="single__right__btns">
              <p className="single__right__btns-title">Offer expires in:</p>
              <div className="single__right__btns-day">
                <div className="single__right__btns-hours">
                  <button>02</button>
                  <span>Days</span>
                </div>
                <div className="single__right__btns-hours">
                  <button>12</button>
                  <span>Hours</span>
                </div>
                <div className="single__right__btns-hours">
                  <button>45</button>
                  <span>Minutes</span>
                </div>
                <div className="single__right__btns-hours">
                  <button>05</button>
                  <span>Seconds</span>
                </div>
              </div>
            </div>
            <div className="single__right__result">
              <p>Measurements</p>
              <h3>17 1/2x20 5/8 "</h3>
            </div>
            <div className="single__right__colors">
              <p>Choose Color</p>
              <div className="single__right__colors-imgs">
                {data?.images?.map((el) => (
                  <img src={el} alt="" />
                ))}
              </div>
            </div>
            <div className="single__right__item">
              <div className="single__right__item__btns">
                <div className="single__right__item__btns-counter">
                  <button>-</button>
                  <button>1</button>
                  <button>+</button>
                </div>
                <button className="single__right__item__btns-heart">
                  <AiOutlineHeart /> Wishlist
                </button>
              </div>
              <button className="single__right__item-cart">Add to Cart</button>
            </div>
          </div>
        </div>

        <div className="single__middle">
          <ul className="single__middle__list">
            <li className="single__middle__item">Additional Info</li>
            <li className="single__middle__item">Questions</li>
            <li className="single__middle__item">Reviews</li>
          </ul>
          <div className="single__middle__review">
            <h2 className="single__middle__review-title">Customer Reviews</h2>
            <div className="single__middle__review-star">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <span>11 Reviews</span>
            </div>
          </div>
          <div className="single__middle__review__form">
            <input type="text" />
            <button className="single__middle__review__form-write">
              Write Review
            </button>
            <button className="single__middle__review__form-row">
              <GoArrowRight />
            </button>
          </div>

          <div className="single__middle__user">
            <div className="single__middle__user__top">
              <h2>11 Reviews</h2>
              <select name="" id="">
                <option value="Newest">Newest</option>
                <option value="Review">Review</option>
              </select>
            </div>
            <div className="single__middle__user__cards">
              {CONTACT?.map((el) => (
                <div key={el?.id} className="single__middle__user__card">
                  <div className="single__middle__user__card__img">
                    <img src={el?.img} alt="" />
                    <h3 className="single__middle__user__card__img-title">
                      {el?.name}
                    </h3>
                  </div>
                  <div className="single__middle__user__card__info">
                    <h3 className="single__middle__user__card__title">
                      {el?.name}
                    </h3>
                    <div className="single__middle__review-star">
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                    </div>
                    <p className="single__middle__user__card__text">
                      {el?.desc}
                    </p>
                    <div className="single__middle__user__btns">
                      <button>like</button>
                      <button>Raply</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="single__middle__user__more-btn">
              Load more
            </button>
          </div>
        </div>
      </div>
      <News />
    </>
  );
};

export default Single;
