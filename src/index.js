import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { makeServer } from "./server";
import { CategoryProvider } from "./context/category-context";
import { ProductProvider } from "./context/product-context";

makeServer();

ReactDOM.render(
  <React.StrictMode>
    <CategoryProvider>
      <ProductProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ProductProvider>
    </CategoryProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
