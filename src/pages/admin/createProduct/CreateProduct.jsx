import React, { useState } from "react";
import "./createProduct.scss";
import {
  useCreateProductMutation,
  useDeleteProductMutation,
} from "../../../context/api/productApi";
import { useGetValue } from "../../../hooks/useGetValue";

const initialState = {
  title: "",
  price: "",
  oldPrice: "",
  descreption: "",
  images: [],
};

const CreateProduct = () => {
  const { formData, handleChange } = useGetValue(initialState);

  const [createData, { data }] = useCreateProductMutation();

  const handleCreate = (e) => {
    e.preventDefault();
    createData(formData);
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
        <input
          value={formData.images}
          onChange={handleChange}
          name="images"
          placeholder="images"
          type="text"
        />
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
          value={formData.descreption}
          onChange={handleChange}
          name="descreption"
          placeholder="descreption"
          type="text"
        />
        <button>Create</button>
      </form>
    </div>
  );
};

export default CreateProduct;
