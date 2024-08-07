import { Routes, Route, Navigate } from "react-router";

import { VStack } from "@chakra-ui/react";

import { Home } from "../pages/Home";
import { Categories } from "../pages/Categories"
import { Products } from "../pages/Products";
import { Login } from "../pages/Login";
import { AboutUs } from "../pages/AboutUs";
import { FAQ } from "../pages/FAQ";
import { NotFound } from "../pages/404";

import backgroundpattern from "../assets/img/background-pattern.jpg"

export const MainContent = ({ isLoggedIn, setIsLoggedIn }) => {
    console.log(isLoggedIn);
    return (
      <VStack
        w="100%"
        minH="100vh"
        backgroundImage={backgroundpattern}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="repeat"
        boxShadow="md"
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/products" element={<Products />} />
          <Route path="/login" element={<Login />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </VStack>
    );
  };