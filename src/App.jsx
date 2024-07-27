import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
const Home = lazy(() => import("./pages/home/Home"));
const Blog = lazy(() => import("./pages/blog/Blog"));
const Contact = lazy(() => import("./pages/contact/Contact"));
const Shop = lazy(() => import("./pages/shop/Shop"));
const Header = lazy(() => import("./components/header/Header"));
const Footer = lazy(() => import("./components/footer/Footer"));
const Single = lazy(() => import("./pages/single/Single"));
const Wishlist = lazy(() => import("./pages/wishlist/Wishlist"));
const Admin = lazy(() => import("./pages/admin/Admin"));
const CreateProduct = lazy(() =>
  import("./pages/admin/createProduct/CreateProduct")
);
const ManageProduct = lazy(() =>
  import("./pages/admin/manageProduct/ManageProduct")
);
const CreateCategory = lazy(() =>
  import("./pages/admin/createCategory/CreateCategory")
);
const ManageCategory = lazy(() =>
  import("./pages/admin/manageCategory/ManageCategory")
);
const Cart = lazy(() => import("./pages/cart/Cart"));
const Order = lazy(() => import("./pages/cart/order/Order"));
const Shopping = lazy(() => import("./pages/cart/shopping/Shopping"));
const Checkout = lazy(() => import("./pages/cart/chekout/Chekout"));
const Login = lazy(() => import("./pages/login/Login"));
const Auth = lazy(() => import("./pages/auth/Auth"));
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Auth />}>
          <Route path="admin" element={<Admin />}>
            <Route path="createProduct" element={<CreateProduct />} />
            <Route path="manageProduct" element={<ManageProduct />} />
            <Route path="createCategory" element={<CreateCategory />} />
            <Route path="manageCategory" element={<ManageCategory />} />
          </Route>
        </Route>
        <Route path="/cart" element={<Cart />}>
          <Route path="checkout" element={<Checkout />} />
          <Route path="order" element={<Order />} />
          <Route path="shopping" element={<Shopping />} />
        </Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
