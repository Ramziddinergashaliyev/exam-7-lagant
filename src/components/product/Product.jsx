import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleHeart } from "../../context/slices/wishlistSlice";
import { RiDeleteBin3Line } from "react-icons/ri";
import { BiEdit } from "react-icons/bi";
import Module from "../Module/Module";
import EditProducts from "../product-edit/ProductEdit";
import { useDeleteProductMutation } from "../../context/api/productApi";
import { addToCart } from "../../context/slices/cartSlice";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { IoCart } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";

const Product = ({ data, isBool }) => {
  const dispatch = useDispatch();
  const [deleteProduct, { isSuccess: deleteSuccess }] =
    useDeleteProductMutation();
  const wishlistData = useSelector((state) => state.wishlist.value);
  const cartData = useSelector((state) => state.cart.value);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  const handleEditClick = () => {
    setSelectedProduct(data);
    setShowEditModal(true);
  };

  const handleDeleteClick = () => {
    deleteProduct(data.id);
  };

  return (
    <div className="product__card">
      <div className="product__card__img">
        <div className="product__card__img__btn">
          <button className="product__card__img__new">New</button>
          <button className="product__card__img__sale">-50%</button>
        </div>
        <div className="product__card__img__heart">
          <button onClick={() => dispatch(toggleHeart(data))}>
            {wishlistData.some((el) => el.id === data?.id) ? (
              <FaHeart color="#FF4858" />
            ) : (
              <FaRegHeart />
            )}
          </button>
        </div>
        <Link to={`/single/${data?.id}`}>
          <img src={data?.images[0]} alt={data?.title} />
        </Link>
        <button
          onClick={() => dispatch(addToCart(data))}
          className="product__card__img-add"
        >
          {cartData.some((el) => el.id === data?.id) ? (
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <IoCart />
              <span>Add to Cart</span>
            </div>
          ) : (
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <IoCartOutline />
              <span>Add to Cart</span>
            </div>
          )}
        </button>
      </div>
      <div className="product__card__star">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
      <div className="product__card__info">
        <p className="product__card__info__title">{data?.title}</p>
        <p className="product__card__info__text">{data?.price}$</p>
      </div>
      {isBool && (
        <div className="product__card__btns">
          <button
            onClick={handleDeleteClick}
            className="product__card__btns-delete"
          >
            <RiDeleteBin3Line />
          </button>
          <button
            onClick={handleEditClick}
            className="product__card__btns-edit"
          >
            <BiEdit />
          </button>
          {showEditModal && selectedProduct && (
            <Module bg={"#aaa9"} close={() => setShowEditModal(false)}>
              <EditProducts
                data={selectedProduct}
                close={() => setShowEditModal(false)}
              />
            </Module>
          )}
        </div>
      )}
    </div>
  );
};

export default Product;
