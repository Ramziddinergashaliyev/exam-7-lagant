import React from "react";
import "./createCategory.scss";
import { useCreateCategoryMutation } from "../../../context/api/categoryApi";
import { useGetValue } from "../../../hooks/useGetValue";
import { toast } from "react-toastify";

const initialState = {
  title: "",
};

const CreateCategory = () => {
  const { formData, setFormData, handleChange } = useGetValue(initialState);

  const [createCategory] = useCreateCategoryMutation();

  const createHandleCategory = (e) => {
    e.preventDefault();
    createCategory(formData);
    setFormData(initialState);
    toast.success("Category yaratildi");
  };

  return (
    <div className="createCategory">
      <h2>Create Category</h2>
      <form onSubmit={createHandleCategory} action="">
        <input
          value={formData.title}
          onChange={handleChange}
          name="title"
          placeholder="category"
          type="text"
        />
        <button>Create</button>
      </form>
    </div>
  );
};

export default CreateCategory;
