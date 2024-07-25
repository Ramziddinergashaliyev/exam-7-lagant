import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/contact/Contact";
import Shop from "./pages/shop/Shop";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Single from "./pages/single/Single";

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
      </Routes>
      <Footer />
    </>
  );
}

export default App;
