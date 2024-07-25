import React from "react";
import "./createCategory.scss";

const CreateCategory = () => {
  return (
    <div className="createCategory">
      <h2>Create Category</h2>
      <form action="">
        <input placeholder="category" type="text" />
        <button>Create</button>
      </form>
    </div>
  );
};

export default CreateCategory;
