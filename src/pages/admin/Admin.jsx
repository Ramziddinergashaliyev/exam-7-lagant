import React, { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./admin.scss";
import { Outlet } from "react-router-dom";
import AdminHeader from "../../components/admin-header/AdminHeader";

const Admin = () => {
  const [close, setClose] = useState(false);
  return (
    <div className={`admin ${close ? "admin__close" : ""}`}>
      <Sidebar />
      <div>
        <AdminHeader setClose={setClose} />
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
