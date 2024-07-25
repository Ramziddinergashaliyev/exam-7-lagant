import React from "react";
import "./editProduct.scss";

const EditProduct = () => {
  return (
    <div className="form__edit">
      <h2>Edit Product</h2>
      <form action="">
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <button>Edit</button>
      </form>
    </div>
  );
};

export default EditProduct;
