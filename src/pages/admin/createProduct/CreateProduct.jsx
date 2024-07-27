import React, { useState } from "react";
import "./createProduct.scss";
import {
  useCreateProductMutation,
  useDeleteProductMutation,
} from "../../../context/api/productApi";
import { useGetValue } from "../../../hooks/useGetValue";
import { useGetCategoryQuery } from "../../../context/api/categoryApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const initialState = {
  title: "",
  price: "",
  oldPrice: "",
  description: "",
  images: "",
  select: "",
};

const CreateProduct = () => {
  const { formData, handleChange } = useGetValue(initialState);

  const [createData, { data }] = useCreateProductMutation();
  const { data: category } = useGetCategoryQuery();
  const navigate = useNavigate();

  const handleCreate = (e) => {
    e.preventDefault();
    createData(formData);
    navigate("/admin/manageProduct");
    toast.success("ProductYaratildi");
  };

  return (
    <div className="form">
      <h2>Create Product</h2>
      <form onSubmit={handleCreate} className="form__create" action="">
        <input
          value={formData.title}
          onChange={handleChange}
          name="title"
          placeholder="title"
          type="text"
        />
        <select value={formData.select} onChange={handleChange} name="" id="">
          {category?.map((el) => (
            <option key={el?.id} value="">
              {el?.title}
            </option>
          ))}
        </select>
        <input
          value={formData.price}
          onChange={handleChange}
          name="price"
          placeholder="price"
          type="text"
        />
        <input
          value={formData.oldPrice}
          onChange={handleChange}
          name="oldPrice"
          placeholder="oldPrice"
          type="text"
        />
        <input
          value={formData.description}
          onChange={handleChange}
          name="description"
          placeholder="description"
          type="text"
        />
        <button>Create</button>
      </form>
    </div>
  );
};

export default CreateProduct;
