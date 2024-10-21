import { Routes, Route } from "react-router";
import { VStack } from "@chakra-ui/react";

import { Home } from "../pages/Home";
import { Categories } from "../pages/Categories";
import { Products } from "../pages/Products";
import { ProductList } from "../pages/ProductList";
import { ProductDetail } from "../pages/ProductDetail";
import { Login } from "../pages/Login";
import { AboutUs } from "../pages/AboutUs";
import { FAQ } from "../pages/FAQ";
import { NotFound } from "../pages/404";

export const MainContent = () => {
  return (
    <VStack
      w="100%" 
      minH='100vh'
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:category/:id" element={<ProductDetail />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </VStack>
  );
};
