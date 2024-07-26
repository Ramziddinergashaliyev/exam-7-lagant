import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/contact/Contact";
import Shop from "./pages/shop/Shop";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Single from "./pages/single/Single";
import Wishlist from "./pages/wishlist/Wishlist";
import Admin from "./pages/admin/Admin";
import CreateProduct from "./pages/admin/createProduct/CreateProduct";
import ManageProduct from "./pages/admin/manageProduct/ManageProduct";
import CreateCategory from "./pages/admin/createCategory/CreateCategory";
import ManageCategory from "./pages/admin/manageCategory/ManageCategory";
import Cart from "./pages/cart/Cart";
import Chekout from "./pages/cart/chekout/Chekout";
import Order from "./pages/cart/order/Order";
import Shopping from "./pages/cart/shopping/Shopping";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/single/:id" element={<Single />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/admin" element={<Admin />}>
          <Route path="createProduct" element={<CreateProduct />} />
          <Route path="manageProduct" element={<ManageProduct />} />
          <Route path="createCategory" element={<CreateCategory />} />
          <Route path="manageCategory" element={<ManageCategory />} />
        </Route>
        <Route path="/cart" element={<Cart />}>
          <Route path="chekout" element={<Chekout />} />
          <Route path="order" element={<Order />} />
          <Route path="shopping" element={<Shopping />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
