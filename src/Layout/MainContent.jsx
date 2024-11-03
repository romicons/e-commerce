import { useContext } from "react";

import { AuthContext } from "../context/AuthContext"; 

import { Navigate, Routes, Route } from "react-router";
import { VStack } from "@chakra-ui/react";
import { Home } from "../pages/Home";
import { Categories } from "../pages/Categories";
import { Checkout } from "../pages/Checkout";
import { Login } from "../pages/Login";
import { Products } from "../pages/Products";
import { ProductList } from "../pages/ProductList";
import { ProductDetail } from "../pages/ProductDetail";
import { Search } from "../pages/Search";
import { Register } from "../pages/Register";
import { UserHistory } from "../pages/UserHistory";
import { AboutUs } from "../pages/AboutUs";
import { FAQ } from "../pages/FAQ";
import { NotFound } from "../pages/404";

export const MainContent = () => {
    const { user } = useContext(AuthContext);
    const isAuthenticated = !!user; 

    return (
        <VStack
            w="100%" 
            minH='100dvh'
        >
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/login" element={isAuthenticated ? <Navigate to="/" /> : <Login />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:category/:id" element={<ProductDetail />} />
                <Route path="/products/:category" element={<ProductList />} />
                <Route path="/search" element={<Search />} />
                <Route path="/register" element={<Register />} />
                <Route path="/user" element={isAuthenticated ? <UserHistory /> : <Login />} />
                <Route path="/checkout" element={isAuthenticated ? <Checkout /> : <Login />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </VStack>
    );
};
