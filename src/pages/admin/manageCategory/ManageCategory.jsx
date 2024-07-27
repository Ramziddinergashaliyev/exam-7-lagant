import React, { useState } from "react";
import {
  useDeleteCategoryMutation,
  useGetCategoryQuery,
} from "../../../context/api/categoryApi";
import Module from "../../../components/Module/Module.jsx";
import EditCategory from "../../../components/edit-category/EditCategory.jsx";
import { LuFileEdit } from "react-icons/lu";
import { AiOutlineDelete } from "react-icons/ai";
import "./manageCategory.scss";

const ManageCategory = () => {
  const { data, refetch } = useGetCategoryQuery();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [show, setShow] = useState(false);
  const [deleteCategory, { isSuccess }] = useDeleteCategoryMutation();

  const handleEdit = (category) => {
    setSelectedCategory(category);
    setShow(true);
  };

  const handleCloseModal = () => {
    setShow(false);
    refetch();
  };

  const categoryData = data?.map((el) => (
    <div key={el?.id} className="category__card">
      <h4>{el?.title}</h4>
      <div className="category__card-btns">
        <button onClick={() => deleteCategory(el.id)}>
          <AiOutlineDelete />
        </button>
        <button onClick={() => handleEdit(el)} className="category__card-edit">
          <LuFileEdit />
        </button>
      </div>
    </div>
  ));

  return (
    <div className="category container">
      <div className="category__cards">{categoryData}</div>
      {show && selectedCategory && (
        <Module bg={"#aaa8"} close={setShow}>
          <EditCategory data={selectedCategory} close={handleCloseModal} />
        </Module>
      )}
    </div>
  );
};

export default ManageCategory;
