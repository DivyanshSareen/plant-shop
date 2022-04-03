import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import WishlistPage from "./pages/WishlistPage";
import ProductListings from "./pages/ProductListings";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='cart' element={<CartPage />} />
        <Route path='home' element={<HomePage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='signup' element={<SignupPage />} />
        <Route path='listing' element={<ProductListings />} />
        <Route path='wishlist' element={<WishlistPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
