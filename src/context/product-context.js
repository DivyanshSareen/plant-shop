import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    let response = [];
    try {
      response = await axios.get("/api/products");
    } catch (error) {
      console.log(error);
    } finally {
      setProducts(response.data.products);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, setProducts, getProducts }}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProduct() {
  return useContext(ProductContext);
}
