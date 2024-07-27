import React, { useState, useEffect } from "react";
import { useUpdateProductMutation } from "../../context/api/productApi";
import "./productEdit.scss";

const EditProducts = ({ data, close }) => {
  const [updateProducts, { isSuccess, isLoading }] = useUpdateProductMutation();
  const [formData, setFormData] = useState(data);

  useEffect(() => {
    setFormData(data);
  }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let updateProductsData = {
      title: formData.title,
      images: formData.images,
      price: formData.price,
      oldPrice: formData.oldPrice,
      description: formData.description,
    };
    updateProducts({ id: formData.id, body: updateProductsData });
  };

  useEffect(() => {
    if (isSuccess) {
      close();
    }
  }, [isSuccess, close]);

  return (
    <div className="edit__products">
      <h3 className="edit__products__title">Edit Products</h3>
      <form onSubmit={handleSubmit} className="edit__products__form">
        <label htmlFor="">
          Title
          <input
            required
            value={formData.title}
            onChange={handleChange}
            name="title"
            placeholder="Title"
            type="text"
          />
        </label>
        <label htmlFor="">
          Images
          <input
            required
            value={formData.images}
            onChange={handleChange}
            name="images"
            placeholder="Images"
            type="text"
          />
        </label>
        <label htmlFor="">
          Price
          <input
            required
            value={formData.price}
            onChange={handleChange}
            name="price"
            placeholder="Price"
            type="text"
          />
        </label>
        <label htmlFor="">
          oldPrice
          <input
            required
            value={formData.oldPrice}
            onChange={handleChange}
            name="oldPrice"
            placeholder="Old Price"
            type="text"
          />
        </label>
        <label htmlFor="">
          Description
          <input
            required
            value={formData.description}
            onChange={handleChange}
            name="description"
            placeholder="Description"
            type="text"
          />
        </label>
        <button type="submit">{isLoading ? "Saving..." : "Save"}</button>
      </form>
    </div>
  );
};

export default EditProducts;
