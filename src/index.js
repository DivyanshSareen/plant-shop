import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { makeServer } from "./server";
import { CategoryProvider } from "./context/category-context";
import { ProductProvider } from "./context/product-context";
import { CartProvider } from "./context/cart-context";
import { WishlistProvider } from "./context/wishlist-context";

makeServer();

ReactDOM.render(
  <React.StrictMode>
    <CategoryProvider>
      <ProductProvider>
        <BrowserRouter>
          <CartProvider>
            <WishlistProvider>
              <App />
            </WishlistProvider>
          </CartProvider>
        </BrowserRouter>
      </ProductProvider>
    </CategoryProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
