import React, { useState } from "react";

import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleHeart } from "../../context/slices/wishlistSlice";
import { RiDeleteBin3Line } from "react-icons/ri";
import { BiEdit } from "react-icons/bi";
import Module from "../Module/Module";
import EditProduct from "../editProduct/EditProduct";
import { useDeleteProductMutation } from "../../context/api/productApi";

const Product = ({ data, isBool }) => {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [deleteData, { isSuccess }] = useDeleteProductMutation();

  return (
    <div className="product__card">
      <div className="product__card__img">
        <div className="product__card__img__btn">
          <button className="product__card__img__new">new</button>
          <button className="product__card__img__sale">-50%</button>
        </div>
        <div className="product__card__img__heart">
          <button onClick={() => dispatch(toggleHeart(data))}>
            <AiOutlineHeart />
          </button>
        </div>
        <Link to={`/single/${data?.id}`}>
          <img src={data?.images[0]} alt="" />
        </Link>
        <button className="product__card__img-add">Add to cart</button>
      </div>
      <div className="product__card__info">
        <p className="product__card__info__title">{data?.title}</p>
        <p className="product__card__info__text">{data?.price}$</p>
      </div>
      {isBool ? (
        <div className="product__card__btns">
          <button
            onClick={() => deleteData(data.id)}
            className="product__card__btns-delete"
          >
            <RiDeleteBin3Line />
          </button>
          {edit ? (
            <Module width={500} close={setEdit} bg={"#aaa8"}>
              <EditProduct />
            </Module>
          ) : (
            <></>
          )}
          <button onClick={() => setEdit(true)}>
            <BiEdit />
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Product;
