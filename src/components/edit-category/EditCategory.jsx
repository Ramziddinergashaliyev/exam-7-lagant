import React, { useState, useEffect } from "react";
import { useUpdateCategoryMutation } from "../../context/api/categoryApi";

import "./editCategory.scss";

const EditCategory = ({ data, close }) => {
  const [updateCategory, { isSuccess, isLoading }] =
    useUpdateCategoryMutation();
  const [formData, setFormData] = useState(data);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateCategory({ id: formData.id, body: { title: formData.title } });
  };

  useEffect(() => {
    if (isSuccess) {
      close();
    }
  }, [isSuccess, close]);

  return (
    <div className="edit__category">
      <form className="edit__category__form" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="title"
            id="title"
            value={formData.title || ""}
            onChange={handleChange}
            placeholder="Title"
          />
        </div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Saving..." : "Save"}
        </button>
      </form>
    </div>
  );
};

export default EditCategory;
